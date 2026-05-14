import { site } from '@/lib/site';

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdObject
  | JsonLdValue[];

type JsonLdObject = { [key: string]: JsonLdValue };

const absoluteUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
};

const organizationNode: JsonLdObject = {
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/og-image.png'),
    width: 1200,
    height: 630,
  },
  image: absoluteUrl('/og-image.png'),
  description: site.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kayseri',
    addressRegion: 'Kayseri',
    addressCountry: 'TR',
  },
  areaServed: [
    { '@type': 'City', name: 'Kayseri' },
    { '@type': 'Country', name: 'Türkiye' },
  ],
  sameAs: [
    `https://t.me/${site.telegram}`,
    `https://instagram.com/${site.instagram}`,
  ],
};

export const organizationJsonLd = (): JsonLdObject => ({
  '@context': 'https://schema.org',
  ...organizationNode,
});

export const websiteJsonLd = (): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: site.locale.replace('_', '-'),
  publisher: { '@id': `${site.url}/#organization` },
});

export const localBusinessJsonLd = (opts: {
  name: string;
  description: string;
  url: string;
  areaName?: string;
}): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${opts.url}#localbusiness`,
  name: opts.name,
  description: opts.description,
  url: opts.url,
  telephone: site.phone,
  email: site.email,
  image: absoluteUrl('/og-image.png'),
  priceRange: '₺₺',
  address: {
    '@type': 'PostalAddress',
    addressLocality: opts.areaName ?? 'Kayseri',
    addressRegion: 'Kayseri',
    addressCountry: 'TR',
  },
  areaServed: {
    '@type': 'City',
    name: opts.areaName ?? 'Kayseri',
  },
  parentOrganization: { '@id': `${site.url}/#organization` },
});

export const blogPostingJsonLd = (post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  cover: string;
  coverAlt: string;
  readingMinutes: number;
  tags: string[];
}): JsonLdObject => {
  const url = `${site.url}/blog/${post.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    mainEntityOfPage: url,
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(post.cover)],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: site.locale.replace('_', '-'),
    keywords: post.tags.join(', '),
    timeRequired: `PT${post.readingMinutes}M`,
    author: {
      '@type': 'Person',
      name: 'Furkan Güner',
      url: site.url,
    },
    publisher: { '@id': `${site.url}/#organization` },
  };
};

export const serviceJsonLd = (service: {
  slug: string;
  title: string;
  metaDescription: string;
}): JsonLdObject => {
  const url = `${site.url}/services/${service.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.title,
    description: service.metaDescription,
    url,
    serviceType: service.title,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: [
      { '@type': 'City', name: 'Kayseri' },
      { '@type': 'Country', name: 'Türkiye' },
    ],
  };
};

export const breadcrumbJsonLd = (
  items: { name: string; path: string }[],
): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqJsonLd = (
  items: { question: string; answer: string }[],
): JsonLdObject => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
});

export const stringifyJsonLd = (data: JsonLdObject | JsonLdObject[]): string =>
  JSON.stringify(data).replace(/</g, '\\u003c');
