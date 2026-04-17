import { createClient, type ClientConfig } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const config: ClientConfig = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'z2y11586',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
  perspective: 'published',
};

export const sanity = createClient(config);

const builder = createImageUrlBuilder(sanity);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export function imageSrc(source: SanityImageSource | undefined, width = 1600): string {
  if (!source) return '';
  return urlFor(source).width(width).auto('format').url();
}
