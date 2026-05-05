import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';
import { getAllServices } from '@/lib/services';
import { buildMetadata } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return buildMetadata({ title: 'Proje bulunamadı', path: `/projects/${slug}` });
  return buildMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const allProjects = getAllProjects();
  const otherProjects = allProjects.filter((p) => p.slug !== slug).slice(0, 3);
  const allServices = getAllServices();
  const matchedService = allServices.find(
    (s) => s.relatedProjects.includes(project.slug),
  );

  return (
    <>
      <PageHero
        eyebrow={`Vaka Çalışması · ${project.category}`}
        title={project.title}
        description={project.outcome}
        imageSrc="/hero-projects.jpg"
        imageAlt=""
        imagePosition="center 30%"
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <header className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                <span className="rounded-full border border-border bg-surface px-3 py-1">
                  {project.category}
                </span>
                <span>{project.year}</span>
                <span aria-hidden="true">·</span>
                <span className="text-foreground">{project.client}</span>
              </header>

              <div className="mt-8 space-y-8">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Problem
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Yaklaşım
                  </h2>
                  <div className="mt-3 space-y-4">
                    {project.longDescription.map((para, i) => (
                      <p
                        key={i}
                        className="text-base leading-[1.8] text-muted-foreground md:text-lg"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {project.challenges.length > 0 && (
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      Karşılaştığımız zorluklar
                    </h2>
                    <ul className="mt-4 space-y-3">
                      {project.challenges.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-base leading-relaxed text-muted-foreground"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.highlights.length > 0 && (
                  <div>
                    <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      Öne çıkan teslimler
                    </h2>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="rounded-xl border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 md:p-8">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Sonuç
                  </h2>
                  <p className="mt-3 text-base font-medium text-foreground md:text-lg">
                    {project.outcome}
                  </p>
                  {project.outcomeMetrics && project.outcomeMetrics.length > 0 && (
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {project.outcomeMetrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="font-display text-2xl font-semibold tracking-tight text-foreground">
                            {metric.value}
                          </div>
                          <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                    Proje bilgileri
                  </h3>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        Sektör
                      </dt>
                      <dd className="mt-1 text-foreground">{project.industry}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        Süre
                      </dt>
                      <dd className="mt-1 text-foreground">{project.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        Yıl
                      </dt>
                      <dd className="mt-1 text-foreground">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        Müşteri
                      </dt>
                      <dd className="mt-1 text-foreground">{project.client}</dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                    Teknoloji yığını
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {matchedService && (
                  <Link
                    href={`/services/${matchedService.slug}`}
                    className="block rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      İlgili hizmet
                    </p>
                    <p className="mt-2 text-base font-medium text-foreground">
                      {matchedService.shortTitle}
                    </p>
                    <p className="mt-3 text-sm font-medium text-accent">Detay →</p>
                  </Link>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {otherProjects.length > 0 && (
        <section className="section bg-surface/30 border-y border-border">
          <div className="container">
            <h2 className="text-2xl font-semibold tracking-tight">Diğer vaka çalışmaları</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((other) => (
                <Link
                  key={other.slug}
                  href={`/projects/${other.slug}`}
                  className="group rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {other.category} · {other.year}
                  </span>
                  <h3 className="mt-3 text-base font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {other.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {other.outcome}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA
        title="Sıradaki vaka çalışması sizinki olabilir."
        description="Mevcut sisteminizi büyütelim, yeni bir ürün inşa edelim ya da sadece teknik bir görüş paylaşalım."
      />
    </>
  );
}
