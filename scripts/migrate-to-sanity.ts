/**
 * One-off migration: seed Sanity with the content currently in src/data/site.ts
 * Run with:  npx tsx scripts/migrate-to-sanity.ts
 *
 * Requires SANITY_WRITE_TOKEN in .env
 */
import 'dotenv/config';
import { createClient } from '@sanity/client';
import {
  site,
  stats,
  navLinks,
  services,
  whyPoints,
  projects,
  gallery,
  partnerProducts,
  team,
  testimonials,
  pergolaFeatures,
} from '../src/data/site';
import { randomUUID } from 'node:crypto';

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error('Missing SANITY_WRITE_TOKEN in .env');
  process.exit(1);
}

const client = createClient({
  projectId: 'z2y11586',
  dataset: 'production',
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
});

const key = () => randomUUID().replace(/-/g, '').slice(0, 16);

async function uploadRemote(url: string, filename?: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload('image', buf, { filename });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function uploadLocal(path: string) {
  const fs = await import('node:fs/promises');
  const buf = await fs.readFile(path);
  const asset = await client.assets.upload('image', buf, {
    filename: path.split('/').pop(),
  });
  return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } };
}

async function uploadAny(src: string) {
  if (src.startsWith('http')) return uploadRemote(src);
  const abs = src.startsWith('/')
    ? `${process.cwd()}/public${src}`
    : `${process.cwd()}/${src}`;
  return uploadLocal(abs);
}

async function run() {
  console.log('→ Uploading images (this can take a minute)…');

  const heroBg = await uploadRemote(
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2400&q=80',
    'hero-bg.jpg',
  );

  const aboutImage = await uploadRemote(
    'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80',
    'about.jpg',
  );

  const pergolasImage = await uploadRemote(
    'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1600&q=80',
    'pergolas.jpg',
  );

  const projectImages = await Promise.all(projects.map((p) => uploadRemote(p.image)));
  const galleryImgs = await Promise.all(gallery.map((g) => uploadRemote(g.src)));
  const partnerImgs = await Promise.all(partnerProducts.map((p) => uploadRemote(p.image)));
  const teamImgs = await Promise.all(team.map((m) => uploadAny(m.image)));

  console.log('→ Writing siteConfig…');
  await client.createOrReplace({
    _id: 'siteConfig',
    _type: 'siteConfig',
    name: site.name,
    tagline: site.tagline,
    description: site.description,
    url: site.url,
    phone: site.contact.phone,
    phoneHref: site.contact.phoneHref,
    email: site.contact.email,
    emailHref: site.contact.emailHref,
    address: site.contact.address,
    instagram: site.social.instagram === '#' ? undefined : site.social.instagram,
    linkedin: site.social.linkedin === '#' ? undefined : site.social.linkedin,
    facebook: site.social.facebook === '#' ? undefined : site.social.facebook,
    partnerName: site.partner.name,
    partnerUrl: site.partner.url,
    navLinks: navLinks.map((l) => ({ _key: key(), _type: 'navLink', ...l })),
  });

  console.log('→ Writing homePage with all sections…');
  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    title: 'Home',
    sections: [
      {
        _key: key(),
        _type: 'heroBlock',
        visible: true,
        eyebrow: 'Miami, Florida · Engineered to last',
        headingStart: 'Building beyond',
        headingAccent: 'structures.',
        headingEnd: 'Building trust.',
        lead: 'From the foundations to the finishing touches — LNH & Partner delivers construction, renovation, infrastructure and real estate projects with engineering-grade precision across South Florida.',
        primaryCtaLabel: 'Start your project',
        primaryCtaHref: '#contact',
        secondaryCtaLabel: 'View our work',
        secondaryCtaHref: '#projects',
        backgroundImage: heroBg,
        stats: stats.map((s) => ({ _key: key(), _type: 'statItem', ...s })),
      },
      {
        _key: key(),
        _type: 'servicesBlock',
        visible: true,
        eyebrow: 'What we do',
        headingStart: 'Eight specialties.',
        headingAccent: 'One accountable partner.',
        lead: 'We deliver every stage of a project under one roof — from earthworks to finishing carpentry — so you only ever speak to one team.',
        services: services.map((s) => ({ _key: key(), _type: 'serviceItem', ...s })),
      },
      {
        _key: key(),
        _type: 'aboutBlock',
        visible: true,
        eyebrow: 'About LNH & Partner',
        headingStart: 'An engineering-led group, built on',
        headingAccent: 'trust and precision.',
        lead: `Founded by a Civil Engineer with two decades of hands-on experience, LNH & Partner brings the discipline of engineering to every project — whether it's a home renovation, a road extension or a real estate transaction.`,
        body: 'We operate as a vertically integrated group: construction, real estate, finishing, and exclusive distribution of premium window coverings through our partnership with Style by Global. That means fewer middlemen, faster decisions, and a single team accountable for the result.',
        image: { ...aboutImage, alt: 'LNH & Partner team on site' },
        badgeValue: '15+',
        badgeLabel: 'Years of experience',
        highlights: [
          'Licensed & insured in Florida',
          'In-house design & engineering',
          'Transparent fixed-price quotes',
          'On-site project supervision',
        ].map((text) => ({ _key: key(), _type: 'aboutHighlight', text })),
      },
      {
        _key: key(),
        _type: 'whyBlock',
        visible: true,
        eyebrow: 'Why LNH & Partner',
        headingStart: 'Five reasons clients keep',
        headingAccent: 'coming back.',
        points: whyPoints.map((p) => ({ _key: key(), _type: 'whyPoint', ...p })),
      },
      {
        _key: key(),
        _type: 'projectsBlock',
        visible: true,
        eyebrow: 'Featured projects',
        headingStart: 'A track record built across',
        headingAccent: 'every category we touch.',
        projects: projects.map((p, i) => ({
          _key: key(),
          _type: 'project',
          title: p.title,
          category: p.category,
          description: p.description,
          image: { ...projectImages[i], alt: p.title },
        })),
      },
      {
        _key: key(),
        _type: 'pergolasBlock',
        visible: true,
        eyebrow: 'Pergolas, Sunrooms & Outdoor Spaces',
        headingStart: 'Outdoor living, engineered for',
        headingAccent: 'South Florida.',
        image: { ...pergolasImage, alt: 'Pergola' },
        features: pergolaFeatures,
        ctaLabel: 'Get a free quote',
        ctaHref: '#contact',
      },
      {
        _key: key(),
        _type: 'galleryBlock',
        visible: true,
        eyebrow: 'Gallery',
        headingStart: 'A glimpse of our',
        headingAccent: 'work in motion.',
        lead: 'Click any image to enlarge.',
        images: gallery.map((g, i) => ({
          _key: key(),
          _type: 'galleryImage',
          image: galleryImgs[i],
          alt: g.alt,
        })),
      },
      {
        _key: key(),
        _type: 'partnerBlock',
        visible: true,
        eyebrow: 'In partnership with',
        headingStart: 'Exclusive representatives of',
        headingAccent: 'Style by Global.',
        lead: 'Through our partnership we deliver premium roller blinds, plantation shutters, motorized smart blinds and decorative window solutions to every project.',
        products: partnerProducts.map((p, i) => ({
          _key: key(),
          _type: 'partnerProduct',
          title: p.title,
          description: p.description,
          image: { ...partnerImgs[i], alt: p.title },
        })),
        ctaLabel: 'Visit Style by Global',
        ctaHref: site.partner.url,
      },
      {
        _key: key(),
        _type: 'teamBlock',
        visible: true,
        eyebrow: 'Leadership',
        headingStart: 'The people behind',
        headingAccent: 'every project.',
        members: team.map((m, i) => ({
          _key: key(),
          _type: 'teamMember',
          name: m.name,
          role: m.role,
          bio: m.bio,
          image: { ...teamImgs[i], alt: m.name },
        })),
      },
      {
        _key: key(),
        _type: 'testimonialsBlock',
        visible: true,
        eyebrow: 'Client voices',
        headingStart: 'Trusted by homeowners,',
        headingAccent: 'developers and investors.',
        items: testimonials.map((t) => ({ _key: key(), _type: 'testimonial', ...t })),
      },
      {
        _key: key(),
        _type: 'contactBlock',
        visible: true,
        eyebrow: 'Contact',
        headingStart: 'Tell us about your project.',
        headingAccent: 'We reply within 24 hours.',
        lead: `Whether it's a renovation, a ground-up build or a real estate enquiry — share a few details and the team will be in touch.`,
        formspreeId: 'your-form-id',
      },
    ],
  });

  console.log('\n✓ Migration complete.');
  console.log('  Studio:  cd studio && npm run dev');
  console.log('  Site:    npm run dev');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
