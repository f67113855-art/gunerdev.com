import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { getAllPosts } from '@/lib/blog';
import { getAllServices } from '@/lib/services';
import { getAllProjects } from '@/lib/projects';
import { getAllLandingPages } from '@/lib/landing';

// Stabil tarih: her build'de değişmesin diye sabit; içerik gerçekten güncellendiğinde elle artırılır.
// Kategori başına ayrı tarih: Google'a tek tip "hepsi aynı gün güncellendi" sinyali vermemek için.
const STATIC_LAST_UPDATED = new Date('2026-05-14T00:00:00Z');
const SERVICES_LAST_UPDATED = new Date('2026-05-05T00:00:00Z');
const PROJECTS_LAST_UPDATED = new Date('2026-05-05T00:00:00Z');
const LANDING_LAST_UPDATED = new Date('2026-05-14T00:00:00Z');

// Her statik rotanın gerçek son güncelleme tarihi.
const staticRouteDates: Record<string, Date> = {
  '/': new Date('2026-05-14T00:00:00Z'),
  '/about': new Date('2026-05-02T00:00:00Z'),
  '/services': new Date('2026-05-05T00:00:00Z'),
  '/projects': new Date('2026-05-05T00:00:00Z'),
  '/blog': new Date('2026-05-14T00:00:00Z'),
  '/contact': new Date('2026-05-02T00:00:00Z'),
  '/fiyatlandirma': new Date('2026-05-05T00:00:00Z'),
  '/sss': new Date('2026-05-05T00:00:00Z'),
  '/kayseri-yazilim-firmasi': new Date('2026-05-05T00:00:00Z'),
  '/privacy': new Date('2026-05-02T00:00:00Z'),
  '/terms': new Date('2026-05-02T00:00:00Z'),
  '/kvkk': new Date('2026-05-02T00:00:00Z'),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/projects', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/fiyatlandirma', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/sss', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/kayseri-yazilim-firmasi', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/kvkk', priority: 0.3, changeFrequency: 'yearly' as const },
  ].map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: staticRouteDates[route.path] ?? STATIC_LAST_UPDATED,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = getAllServices().map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: SERVICES_LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: `${site.url}/projects/${project.slug}`,
    lastModified: PROJECTS_LAST_UPDATED,
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  const landingRoutes: MetadataRoute.Sitemap = getAllLandingPages().map((page) => ({
    url: `${site.url}/${page.slug}`,
    lastModified: LANDING_LAST_UPDATED,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...blogRoutes,
    ...landingRoutes,
  ];
}
