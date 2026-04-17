import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'galleryImage',
  title: 'Imagen de galería',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Texto alternativo',
      type: 'string',
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'alt', media: 'image' },
  },
});
