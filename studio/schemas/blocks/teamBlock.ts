import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teamBlock',
  title: 'Equipo',
  type: 'object',
  fields: [
    defineField({ name: 'visible', title: 'Visible', type: 'boolean', initialValue: true }),
    defineField({ name: 'eyebrow', title: 'Texto superior', type: 'string' }),
    defineField({ name: 'headingStart', title: 'Título (primera parte)', type: 'string' }),
    defineField({ name: 'headingAccent', title: 'Título (parte dorada)', type: 'string' }),
    defineField({ name: 'lead', title: 'Descripción', type: 'text', rows: 3 }),
    defineField({
      name: 'members',
      title: 'Miembros',
      type: 'array',
      of: [{ type: 'teamMember' }],
    }),
  ],
  preview: { prepare: () => ({ title: '👥  Equipo' }) },
});
