import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'servicesBlock',
  title: 'Servicios',
  type: 'object',
  fields: [
    defineField({ name: 'visible', title: 'Visible', type: 'boolean', initialValue: true }),
    defineField({ name: 'eyebrow', title: 'Texto superior', type: 'string' }),
    defineField({ name: 'headingStart', title: 'Título (primera parte)', type: 'string' }),
    defineField({ name: 'headingAccent', title: 'Título (parte dorada)', type: 'string' }),
    defineField({ name: 'lead', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({
      name: 'services',
      title: 'Lista de servicios',
      type: 'array',
      of: [{ type: 'serviceItem' }],
    }),
  ],
  preview: { prepare: () => ({ title: '🧰  Servicios' }) },
});
