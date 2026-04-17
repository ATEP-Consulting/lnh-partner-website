import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutHighlight',
  title: 'Punto destacado (About)',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Texto',
      type: 'string',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'text' },
  },
});
