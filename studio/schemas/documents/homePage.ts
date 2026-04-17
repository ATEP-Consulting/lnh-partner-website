import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Página principal',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título interno',
      type: 'string',
      initialValue: 'Home',
      readOnly: true,
    }),
    defineField({
      name: 'sections',
      title: 'Secciones',
      description:
        'Arrastra para reordenar. Puedes ocultar cualquier sección sin borrarla desmarcando "Visible".',
      type: 'array',
      of: [
        { type: 'heroBlock' },
        { type: 'servicesBlock' },
        { type: 'aboutBlock' },
        { type: 'whyBlock' },
        { type: 'projectsBlock' },
        { type: 'pergolasBlock' },
        { type: 'galleryBlock' },
        { type: 'partnerBlock' },
        { type: 'teamBlock' },
        { type: 'testimonialsBlock' },
        { type: 'contactBlock' },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Página principal' }),
  },
});
