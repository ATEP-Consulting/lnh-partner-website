import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'whyPoint',
  title: 'Razón / ventaja',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
});
