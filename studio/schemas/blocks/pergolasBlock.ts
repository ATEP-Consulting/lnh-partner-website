import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pergolasBlock',
  title: 'Pérgolas',
  type: 'object',
  fields: [
    defineField({ name: 'visible', title: 'Visible', type: 'boolean', initialValue: true }),
    defineField({ name: 'eyebrow', title: 'Texto superior', type: 'string' }),
    defineField({ name: 'headingStart', title: 'Título (primera parte)', type: 'string' }),
    defineField({ name: 'headingAccent', title: 'Título (parte dorada)', type: 'string' }),
    defineField({ name: 'lead', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Texto alternativo', type: 'string' }),
      ],
    }),
    defineField({
      name: 'features',
      title: 'Características',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Botón — texto',
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: 'Botón — enlace',
      type: 'string',
    }),
  ],
  preview: { prepare: () => ({ title: '🏖  Pérgolas' }) },
});
