import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contactBlock',
  title: 'Contacto',
  type: 'object',
  fields: [
    defineField({ name: 'visible', title: 'Visible', type: 'boolean', initialValue: true }),
    defineField({ name: 'eyebrow', title: 'Texto superior', type: 'string' }),
    defineField({ name: 'headingStart', title: 'Título (primera parte)', type: 'string' }),
    defineField({ name: 'headingAccent', title: 'Título (parte dorada)', type: 'string' }),
    defineField({ name: 'lead', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({
      name: 'formspreeId',
      title: 'Formspree form ID',
      description: 'ID del formulario en formspree.io (solo la parte final de la URL)',
      type: 'string',
    }),
  ],
  preview: { prepare: () => ({ title: '✉️  Contacto' }) },
});
