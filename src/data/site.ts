// All site copy lives here. Edit text, phone numbers, services, etc. without
// touching components.

export const site = {
  name: 'LNH & Partner',
  tagline: 'Building, Renovations, Earthworks, Infrastructure & Real Estate',
  url: 'https://www.lnhpartner.com',
  description:
    'LNH & Partner is a Miami-based group delivering construction, renovations, earthworks, infrastructure, real estate, pergolas and decoration services with engineering-grade quality.',
  contact: {
    phone: '+1 786 658 0795',
    phoneHref: 'tel:+17866580795',
    email: 'info@lnhpartner.com',
    emailHref: 'mailto:info@lnhpartner.com',
    address: 'Miami, Florida',
  },
  social: {
    instagram: '#',
    linkedin: '#',
    facebook: '#',
  },
  partner: {
    name: 'Style by Global',
    url: 'https://www.stylebyglobal.com',
  },
};

export const stats = [
  { value: '15+', label: 'Years of experience' },
  { value: '200+', label: 'Projects delivered' },
  { value: '40+', label: 'Team specialists' },
  { value: '98%', label: 'Client satisfaction' },
];

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#pergolas', label: 'Pergolas' },
  { href: '#partners', label: 'Partners' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: 'Construction',
    description:
      'Ground-up construction of residential, commercial, and mixed-use developments, delivered on schedule and to the highest engineering standards.',
    icon: 'building',
  },
  {
    title: 'Renovations',
    description:
      'Full and partial remodels that respect the existing structure while transforming spaces, finishes, and functionality.',
    icon: 'hammer',
  },
  {
    title: 'Earthworks',
    description:
      'Excavation, grading, and site preparation executed with precision equipment and certified operators.',
    icon: 'shovel',
  },
  {
    title: 'Infrastructure',
    description:
      'Roads, drainage, utilities, and civil works engineered to outlast and outperform.',
    icon: 'road',
  },
  {
    title: 'Real Estate',
    description:
      'Acquisition, brokerage, and asset management across residential and commercial portfolios in Florida.',
    icon: 'key',
  },
  {
    title: 'Project Management',
    description:
      'Single point of accountability across design, permitting, construction, and handover.',
    icon: 'clipboard',
  },
  {
    title: 'Pergolas & Cabanas',
    description:
      'Custom-designed pergolas, cabanas, and outdoor structures engineered for the South Florida climate.',
    icon: 'pergola',
  },
  {
    title: 'Decorations & Finishing',
    description:
      'Interior and exterior decoration, finishing carpentry, and curated material selection.',
    icon: 'sparkles',
  },
];

export const whyPoints = [
  {
    title: 'Engineering-led leadership',
    description:
      'Founded and led by a Civil Engineer, every decision is grounded in technical rigor — not improvisation.',
  },
  {
    title: 'Single accountable partner',
    description:
      'From the first sketch to the final keys, you deal with one team that owns the result end-to-end.',
  },
  {
    title: 'Vertical integration',
    description:
      'Construction, real estate brokerage, and finishing under one roof — fewer middlemen, faster decisions.',
  },
  {
    title: 'Premium partnerships',
    description:
      'Exclusive representation of Style by Global brings world-class window coverings into every build.',
  },
  {
    title: 'On-time, on-budget',
    description:
      'Predictable scheduling and transparent cost control — backed by 200+ projects already delivered.',
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: 'Coastal Residence — Coral Gables',
    category: 'Residential Construction',
    description:
      'Ground-up build of a 6,200 sq ft modern coastal home with hurricane-rated glazing and full smart-home integration.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Highway Extension — Miami-Dade',
    category: 'Infrastructure',
    description:
      'Civil works for a 3.4 km road extension, including drainage, signage, and lighting infrastructure.',
    image:
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Brickell Loft Renovation',
    category: 'Renovation',
    description:
      'Full gut renovation of a 2,800 sq ft urban loft, including structural reconfiguration and bespoke finishes.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Logistics Yard — West Miami',
    category: 'Earthworks',
    description:
      'Site preparation and grading for a 12-acre logistics yard with reinforced subgrade and stormwater management.',
    image:
      'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Bayview Penthouse Sale',
    category: 'Real Estate',
    description:
      'Strategic listing and brokerage of a Bayview penthouse, closing 6% above asking in 23 days.',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Boutique Hotel Pergolas',
    category: 'Pergolas & Outdoor',
    description:
      'Design and installation of 14 custom aluminum pergolas with motorized louvers for a beachfront boutique hotel.',
    image:
      'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1400&q=80',
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
};

export const gallery: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
    alt: 'High-rise construction at sunset',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80',
    alt: 'Civil engineer reviewing blueprints on site',
  },
  {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
    alt: 'Heavy machinery during earthworks',
  },
  {
    src: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=1400&q=80',
    alt: 'Modern interior renovation finished',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80',
    alt: 'Luxury residential property exterior',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
    alt: 'Outdoor pergola installation',
  },
];

export type PartnerProduct = {
  title: string;
  description: string;
  image: string;
};

export const partnerProducts: PartnerProduct[] = [
  {
    title: 'Roller Blinds',
    description:
      'Premium roller blinds in dim-out and blackout fabrics, motorized options available.',
    image:
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Plantation Shutters',
    description:
      'Solid-wood and composite plantation shutters with full-height and café-style configurations.',
    image:
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Vertical & Venetian Blinds',
    description:
      'Aluminum, wood and PVC slat blinds for offices, residences and commercial spaces.',
    image:
      'https://images.unsplash.com/photo-1567016526105-22da7c13161a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Motorized Smart Blinds',
    description:
      'Smart-home compatible motorized blinds with app, voice and scheduling control.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const team: TeamMember[] = [
  {
    name: 'Luis Orangel Herrera Gómez',
    role: 'Founder & CEO — Civil Engineer',
    bio: 'Civil Engineer (Universidad Santa María) with over two decades leading construction operations. Founder and former president of LOH Ingeniería, C.A.',
    image: '/assets/images/luis.jpg',
  },
  {
    name: 'Nilyan Herrera Gómez',
    role: 'Licensed Realtor & Real Estate Director',
    bio: 'Licensed Florida realtor specializing in residential and commercial property strategy, acquisitions and brokerage across the Miami market.',
    image: '/assets/images/nilyan.jpg',
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'LNH delivered our home one week ahead of schedule and under budget. The engineering attention to detail was unlike anything we had experienced before.',
    author: 'Marina F.',
    role: 'Homeowner — Coral Gables',
  },
  {
    quote:
      'They handled the brokerage and the renovation as one seamless project. We closed and moved in within 90 days.',
    author: 'David & Patricia R.',
    role: 'Investors — Brickell',
  },
  {
    quote:
      'The pergola installation transformed our beachfront property. Quality and finish are first-class.',
    author: 'Carlos M.',
    role: 'Hotel Owner — Miami Beach',
  },
];

export const pergolaFeatures = [
  'Custom aluminum and timber pergolas, cabanas and sunrooms',
  'Engineered for South Florida wind, sun and humidity',
  'Motorized louvers, integrated lighting and rain sensors',
  'Glass sliding wall enclosures for year-round outdoor living',
];
