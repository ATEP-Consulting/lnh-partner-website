import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'heroBlock',
  title: 'Hero (portada)',
  type: 'object',
  fields: [
    defineField({
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'eyebrow',
      title: 'Texto pequeño superior',
      type: 'string',
    }),
    defineField({
      name: 'headingStart',
      title: 'Título (primera parte)',
      type: 'string',
    }),
    defineField({
      name: 'headingAccent',
      title: 'Título (palabra dorada)',
      type: 'string',
    }),
    defineField({
      name: 'headingEnd',
      title: 'Título (segunda línea)',
      type: 'string',
    }),
    defineField({
      name: 'lead',
      title: 'Párrafo descriptivo',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Botón principal — texto',
      type: 'string',
    }),
    defineField({
      name: 'primaryCtaHref',
      title: 'Botón principal — enlace',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaLabel',
      title: 'Botón secundario — texto',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaHref',
      title: 'Botón secundario — enlace',
      type: 'string',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Imagen de fondo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'stats',
      title: 'Estadísticas (4 ideales)',
      type: 'array',
      of: [{ type: 'statItem' }],
      validation: (r) => r.max(4),
    }),
  ],
  preview: {
    prepare: () => ({ title: '🏞  Hero' }),
  },
});
