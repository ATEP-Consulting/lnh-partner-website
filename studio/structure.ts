import type { StructureBuilder } from 'sanity/structure';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('⚙️ Configuración del sitio')
        .id('siteConfig')
        .child(
          S.document()
            .schemaType('siteConfig')
            .documentId('siteConfig')
            .title('Configuración del sitio'),
        ),
      S.listItem()
        .title('🏠 Página principal')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
            .title('Página principal'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['siteConfig', 'homePage'].includes(item.getId() ?? ''),
      ),
    ]);
