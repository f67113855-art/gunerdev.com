import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';
import {
  getAllLandingPages,
  getLandingPage,
  type LandingPage,
} from '@/lib/landing';
import { site } from '@/lib/site';
import {
  breadcrumbJsonLd,
  faqJsonLd,
  localBusinessJsonLd,
} from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllLandingPages().map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return buildMetadata({ title: 'Sayfa bulunamadı', path: `/${slug}` });
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });
}

export default async function LandingPageRoute({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const related = getAllLandingPages()
    .filter((p) => p.slug !== slug && p.category === page.category)
    .slice(0, 3);

  const areaName =
    page.category === 'İlçe'
      ? (page.slug.split('-')[0] ?? 'kayseri').replace(/^./, (c) =>
          c.toLocaleUpperCase('tr-TR'),
        )
      : 'Kayseri';

  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd({
            name: `${site.name} — ${page.hero.title}`,
            description: page.metaDescription,
            url: `${site.url}/${page.slug}`,
            areaName,
          }),
          breadcrumbJsonLd([
            { name: 'Anasayfa', path: '/' },
            { name: page.category, path: `/${page.slug}` },
            { name: page.hero.title, path: `/${page.slug}` },
          ]),
          faqJsonLd(page.faq),
        ]}
      />
      <PageHero
        eyebrow={page.hero.eyebrow}
        title={page.hero.title}
        description={page.hero.description}
        imageSrc={page.hero.imageSrc}
        imageAlt=""
        imagePosition={page.hero.imagePosition ?? 'center'}
      />

      <IntroSection page={page} />
      <ServicesSection page={page} />
      <BulletsSection page={page} />
      <HighlightsSection page={page} />
      <FaqSection page={page} />

      {related.length > 0 && <RelatedSection pages={related} />}

      <CTA title={page.cta.title} description={page.cta.description} />
    </>
  );
}

function IntroSection({ page }: { page: LandingPage }) {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <p className="eyebrow justify-center">{page.intro.eyebrow}</p>
          <h2 className="text-display-md font-semibold tracking-tight">
            {page.intro.title}
          </h2>
          {page.intro.paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-base leading-[1.8] text-muted-foreground md:text-lg"
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ page }: { page: LandingPage }) {
  return (
    <section className="section bg-surface/30 border-y border-border">
      <div className="container">
        <header className="max-w-2xl">
          <p className="eyebrow">{page.services.eyebrow}</p>
          <h2 className="mt-3 text-display-md font-semibold tracking-tight">
            {page.services.title}
          </h2>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.services.items.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
            >
              <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-4 text-xs font-medium text-accent">Detay →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function BulletsSection({ page }: { page: LandingPage }) {
  return (
    <section className="section">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">{page.bullets.eyebrow}</p>
            <h2 className="mt-3 text-display-md font-semibold tracking-tight">
              {page.bullets.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {page.bullets.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.bullets.items.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightsSection({ page }: { page: LandingPage }) {
  return (
    <section className="section bg-surface/30 border-y border-border">
      <div className="container">
        <header className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{page.highlights.eyebrow}</p>
          <h2 className="mt-3 text-display-md font-semibold tracking-tight">
            {page.highlights.title}
          </h2>
          {page.highlights.description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {page.highlights.description}
            </p>
          )}
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {page.highlights.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection({ page }: { page: LandingPage }) {
  return (
    <section className="section">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-display-md font-semibold tracking-tight">
            Sıkça sorulanlar
          </h2>
          <div className="mt-8 space-y-3">
            {page.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-border bg-surface p-5 transition-colors open:border-accent/40"
              >
                <summary className="cursor-pointer list-none text-base font-medium tracking-tight text-foreground marker:hidden">
                  <div className="flex items-center justify-between gap-3">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="text-accent transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </div>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/sss"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Tüm SSS'leri görüntüle →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedSection({ pages }: { pages: LandingPage[] }) {
  return (
    <section className="section">
      <div className="container">
        <header className="max-w-2xl">
          <p className="eyebrow">İlgili sayfalar</p>
          <h2 className="mt-3 text-display-md font-semibold tracking-tight">
            Benzer çözümler
          </h2>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {p.category}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                {p.hero.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {p.hero.description}
              </p>
              <p className="mt-4 text-xs font-medium text-accent">İncele →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
