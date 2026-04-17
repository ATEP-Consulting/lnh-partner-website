import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'statItem',
  title: 'Estadística',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Valor (ej: 15+, 200+)',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'label',
      title: 'Etiqueta',
      type: 'string',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'value', subtitle: 'label' },
  },
});
