import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteConfig',
  title: 'Configuración del sitio',
  type: 'document',
  groups: [
    { name: 'general', title: 'General' },
    { name: 'contact', title: 'Contacto' },
    { name: 'social', title: 'Redes sociales' },
    { name: 'nav', title: 'Navegación' },
    { name: 'partner', title: 'Partner' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // General
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      group: 'general',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'description',
      title: 'Descripción SEO',
      type: 'text',
      rows: 3,
      group: 'seo',
    }),
    defineField({
      name: 'url',
      title: 'URL del sitio',
      type: 'url',
      group: 'seo',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'general',
    }),
    // Contact
    defineField({
      name: 'phone',
      title: 'Teléfono (display)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'phoneHref',
      title: 'Teléfono (link tel:)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email (display)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'emailHref',
      title: 'Email (link mailto:)',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'string',
      group: 'contact',
    }),
    // Social
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      group: 'social',
    }),
    // Nav
    defineField({
      name: 'navLinks',
      title: 'Enlaces de navegación',
      type: 'array',
      of: [{ type: 'navLink' }],
      group: 'nav',
    }),
    // Partner
    defineField({
      name: 'partnerName',
      title: 'Nombre del partner',
      type: 'string',
      group: 'partner',
    }),
    defineField({
      name: 'partnerUrl',
      title: 'URL del partner',
      type: 'url',
      group: 'partner',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Configuración del sitio' }),
  },
});
