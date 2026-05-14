import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { getAllServices, getServiceBySlug } from '@/lib/services';
import { getProjectBySlug } from '@/lib/projects';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from '@/lib/schema';
import { JsonLd } from '@/components/JsonLd';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return buildMetadata({ title: 'Hizmet bulunamadı', path: `/services/${slug}` });
  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const allServices = getAllServices();
  const otherServices = allServices.filter((s) => s.slug !== slug);
  const relatedProjects = service.relatedProjects
    .map((projectSlug) => getProjectBySlug(projectSlug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(service),
          breadcrumbJsonLd([
            { name: 'Anasayfa', path: '/' },
            { name: 'Hizmetler', path: '/services' },
            { name: service.shortTitle, path: `/services/${service.slug}` },
          ]),
          faqJsonLd(service.faq),
        ]}
      />
      <PageHero
        eyebrow={`Hizmet · ${service.number}`}
        title={service.title}
        description={service.description}
        imageSrc="/hero-services.jpg"
        imageAlt=""
        imagePosition="center 40%"
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="space-y-6">
                {service.longDescription.map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-[1.8] text-muted-foreground md:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-8">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  İş değeri
                </p>
                <p className="mt-3 text-base font-medium text-foreground md:text-lg">
                  {service.value}
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold tracking-tight">Süreç</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {service.process.map((step) => (
                    <div
                      key={step.step}
                      className="rounded-xl border border-border bg-surface p-5"
                    >
                      <span className="font-display text-2xl font-semibold text-accent">
                        {step.step}
                      </span>
                      <h3 className="mt-2 text-base font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-semibold tracking-tight">Sıkça sorulan sorular</h2>
                <div className="mt-6 space-y-4">
                  {service.faq.map((item) => (
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
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                    Teslim ettiklerimiz
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
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

                <div className="rounded-2xl border border-border bg-surface p-6">
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

                <Link
                  href="/contact"
                  className="block rounded-2xl border border-accent/30 bg-accent/10 p-6 transition-colors hover:bg-accent/15"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Hemen iletişime geç
                  </p>
                  <p className="mt-2 text-base font-medium text-foreground">
                    Projenizi anlatın, ücretsiz keşif görüşmesi planlayalım.
                  </p>
                  <p className="mt-3 text-sm font-medium text-accent">İletişime geç →</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="section bg-surface/30 border-y border-border">
          <div className="container">
            <h2 className="text-2xl font-semibold tracking-tight">İlgili vaka çalışmaları</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {project.category} · {project.year}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {project.outcome}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold tracking-tight">Diğer hizmetler</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group rounded-2xl border border-border bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <span className="font-display text-xl font-semibold text-accent">
                  {other.number}
                </span>
                <h3 className="mt-2 text-base font-semibold tracking-tight transition-colors group-hover:text-accent">
                  {other.shortTitle}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {other.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={`${service.shortTitle} ihtiyacınızı konuşalım`}
        description="Mevcut sisteminizi anlamak ve uygun çözümü değerlendirmek için 1 saatlik ücretsiz keşif görüşmesi yapıyoruz."
      />
    </>
  );
}
