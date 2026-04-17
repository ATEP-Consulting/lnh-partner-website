import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutBlock',
  title: 'Sobre nosotros',
  type: 'object',
  fields: [
    defineField({ name: 'visible', title: 'Visible', type: 'boolean', initialValue: true }),
    defineField({ name: 'eyebrow', title: 'Texto superior', type: 'string' }),
    defineField({ name: 'headingStart', title: 'Título (primera parte)', type: 'string' }),
    defineField({ name: 'headingAccent', title: 'Título (parte dorada)', type: 'string' }),
    defineField({ name: 'lead', title: 'Párrafo principal', type: 'text', rows: 4 }),
    defineField({ name: 'body', title: 'Párrafo secundario', type: 'text', rows: 4 }),
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
      name: 'badgeValue',
      title: 'Insignia — valor (ej: 15+)',
      type: 'string',
    }),
    defineField({
      name: 'badgeLabel',
      title: 'Insignia — etiqueta',
      type: 'string',
    }),
    defineField({
      name: 'highlights',
      title: 'Lista de puntos (4 ideales)',
      type: 'array',
      of: [{ type: 'aboutHighlight' }],
    }),
  ],
  preview: { prepare: () => ({ title: 'ℹ️  Sobre nosotros' }) },
});
