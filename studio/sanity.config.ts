import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { presentationTool } from 'sanity/presentation';
import { schemaTypes } from './schemas';
import { structure } from './structure';

const SITE_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:4321';

export default defineConfig({
  name: 'default',
  title: 'LNH & Partner',
  projectId: 'z2y11586',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        origin: SITE_URL,
        preview: '/',
        previewMode: {
          enable: '/api/preview',
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (prev) =>
      prev.filter(
        (t) => t.schemaType !== 'siteConfig' && t.schemaType !== 'homePage',
      ),
  },
});
