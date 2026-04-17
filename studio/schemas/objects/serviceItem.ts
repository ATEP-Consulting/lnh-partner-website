import { defineType, defineField } from 'sanity';

const ICONS = [
  { title: 'Building', value: 'building' },
  { title: 'Hammer', value: 'hammer' },
  { title: 'Shovel', value: 'shovel' },
  { title: 'Road', value: 'road' },
  { title: 'Key', value: 'key' },
  { title: 'Clipboard', value: 'clipboard' },
  { title: 'Pergola', value: 'pergola' },
  { title: 'Sparkles', value: 'sparkles' },
];

export default defineType({
  name: 'serviceItem',
  title: 'Servicio',
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
    defineField({
      name: 'icon',
      title: 'Icono',
      type: 'string',
      options: { list: ICONS, layout: 'dropdown' },
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'icon' },
  },
});
