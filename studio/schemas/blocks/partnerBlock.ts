import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'partnerBlock',
  title: 'Partner (Style by Global)',
  type: 'object',
  fields: [
    defineField({ name: 'visible', title: 'Visible', type: 'boolean', initialValue: true }),
    defineField({ name: 'eyebrow', title: 'Texto superior', type: 'string' }),
    defineField({ name: 'headingStart', title: 'Título (primera parte)', type: 'string' }),
    defineField({ name: 'headingAccent', title: 'Título (parte dorada)', type: 'string' }),
    defineField({ name: 'lead', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({
      name: 'products',
      title: 'Productos',
      type: 'array',
      of: [{ type: 'partnerProduct' }],
    }),
    defineField({ name: 'ctaLabel', title: 'Botón — texto', type: 'string' }),
    defineField({ name: 'ctaHref', title: 'Botón — enlace', type: 'url' }),
  ],
  preview: { prepare: () => ({ title: '🤝  Partner' }) },
});
