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

// Content is detached from Sanity: images live in /public/assets/images.
// A Sanity asset ref "image-<hash>-<WxH>-<ext>" maps to "/assets/images/<hash>-<WxH>.<ext>".
export function imageSrc(source: SanityImageSource | undefined, _width = 1600): string {
  if (!source) return '';
  const ref =
    typeof source === 'string' ? source : (source as any)?.asset?._ref;
  if (typeof ref === 'string' && ref.startsWith('image-')) {
    const body = ref.slice('image-'.length);
    const lastDash = body.lastIndexOf('-');
    const ext = body.slice(lastDash + 1);
    const name = body.slice(0, lastDash);
    return `/assets/images/${name}.${ext}`;
  }
  if (typeof source === 'string') return source;
  return '';
}
