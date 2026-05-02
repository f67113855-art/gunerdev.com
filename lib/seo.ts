import type { Metadata } from 'next';
import { site } from '@/lib/site';

type SeoOptions = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = '/',
  image = '/og-image.png',
  noIndex = false,
}: SeoOptions = {}): Metadata {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
  const desc = description ?? site.description;
  const url = `${site.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: url,
      languages: {
        'tr-TR': url,
      },
    },
    openGraph: {
      type: 'website',
      locale: site.locale,
      url,
      siteName: site.name,
      title: fullTitle,
      description: desc,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: site.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
