import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonialsBlock',
  title: 'Testimonios',
  type: 'object',
  fields: [
    defineField({ name: 'visible', title: 'Visible', type: 'boolean', initialValue: true }),
    defineField({ name: 'eyebrow', title: 'Texto superior', type: 'string' }),
    defineField({ name: 'headingStart', title: 'Título (primera parte)', type: 'string' }),
    defineField({ name: 'headingAccent', title: 'Título (parte dorada)', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Testimonios',
      type: 'array',
      of: [{ type: 'testimonial' }],
    }),
  ],
  preview: { prepare: () => ({ title: '💬  Testimonios' }) },
});
