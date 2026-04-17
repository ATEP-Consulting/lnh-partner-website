import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'whyBlock',
  title: '¿Por qué nosotros?',
  type: 'object',
  fields: [
    defineField({ name: 'visible', title: 'Visible', type: 'boolean', initialValue: true }),
    defineField({ name: 'eyebrow', title: 'Texto superior', type: 'string' }),
    defineField({ name: 'headingStart', title: 'Título (primera parte)', type: 'string' }),
    defineField({ name: 'headingAccent', title: 'Título (parte dorada)', type: 'string' }),
    defineField({ name: 'lead', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({
      name: 'points',
      title: 'Puntos',
      type: 'array',
      of: [{ type: 'whyPoint' }],
    }),
  ],
  preview: { prepare: () => ({ title: '⭐  ¿Por qué nosotros?' }) },
});
