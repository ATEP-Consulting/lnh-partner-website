import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'navLink',
  title: 'Enlace de navegación',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Texto del enlace',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL o ancla (ej: #services)',
      type: 'string',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'href' },
  },
});
