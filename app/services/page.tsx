import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { ServiceIcon } from '@/components/ServiceIcon';
import { getAllServices } from '@/lib/services';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Hizmetler',
  description:
    'Web uygulamaları, özel yazılım, backend & API sistemleri, performans optimizasyonu, teknik danışmanlık ve DevOps hizmetleri.',
  path: '/services',
});

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title="Uçtan uca yazılım mühendisliği hizmetleri."
        description="Web uygulamasından sunucu altyapısına, performans iyileştirmesinden teknik danışmanlığa kadar; modern bir yazılım ürününün ihtiyaç duyduğu tüm mühendislik hizmetlerini tek bir ekipten alabilirsiniz."
        imageSrc="/hero-services.jpg"
        imageAlt=""
        imagePosition="center 40%"
      />

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const visibleTags = service.technologies.slice(0, 2);
              const remainingCount = service.technologies.length - visibleTags.length;

              return (
                <Link
                  key={service.slug}
                  id={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft"
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-opacity duration-300 group-hover:bg-accent/15"
                  />

                  <div className="relative flex items-center justify-between">
                    <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15 text-accent shadow-[0_0_24px_-6px_hsl(var(--accent)/0.5)] ring-1 ring-accent/30 transition-all group-hover:bg-accent/25 group-hover:shadow-[0_0_32px_-4px_hsl(var(--accent)/0.7)]">
                      <ServiceIcon slug={service.slug} className="h-9 w-9" />
                    </span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      HZM.{service.number}
                    </span>
                  </div>

                  <h2 className="relative mt-6 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {service.title}
                  </h2>

                  <p className="relative mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="relative mt-5 flex flex-wrap gap-1.5">
                    {visibleTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {remainingCount > 0 && (
                      <span className="rounded-md bg-surface-elevated px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        +{remainingCount} daha
                      </span>
                    )}
                  </div>

                  <div className="relative mt-auto flex items-center gap-2 pt-6 text-sm font-medium text-accent">
                    İncele
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title="Hangi hizmete ihtiyacınız var?"
        description="Projenizi anlatın; size uygun çözümü, tahmini süreyi ve yatırımı ücretsiz değerlendirelim."
      />
    </>
  );
}
