import Link from 'next/link';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
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
          <div className="space-y-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                id={service.slug}
                className="group block scroll-mt-24 rounded-2xl border border-border bg-surface p-8 transition-all hover:-translate-y-0.5 hover:border-accent/40 md:p-12"
              >
                <article>
                  <div className="grid gap-10 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                      <span className="font-display text-3xl font-semibold text-accent">
                        {service.number}
                      </span>
                      <h2 className="mt-3 text-display-md font-semibold tracking-tight transition-colors group-hover:text-accent">
                        {service.title}
                      </h2>
                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base text-pretty">
                        {service.description}
                      </p>
                      <div className="mt-6 rounded-xl border border-accent/20 bg-accent/5 p-5">
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                          İş değeri
                        </p>
                        <p className="mt-2 text-sm font-medium text-foreground">{service.value}</p>
                      </div>
                    </div>

                    <div className="lg:col-span-8">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                          Teslim ettiklerimiz
                        </h3>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-8 border-t border-border pt-6">
                        <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                          Teknolojiler
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent">
                        Detayı incele
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
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
