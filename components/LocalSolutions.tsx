import Link from 'next/link';
import { SectionHeading } from '@/components/SectionHeading';
import { getAllLandingPages, type LandingPage } from '@/lib/landing';

type Group = {
  key: LandingPage['category'];
  title: string;
  description: string;
};

const groups: Group[] = [
  {
    key: 'Sektör',
    title: 'Sektörel çözümler',
    description: 'Sektörünüzün ihtiyaçlarına göre hazırlanmış paketler.',
  },
  {
    key: 'Hizmet',
    title: 'Hizmet alanları',
    description: 'Tek bir uzmanlık alanına odaklanan teklifler.',
  },
  {
    key: 'Şehir',
    title: 'Kayseri için',
    description: 'Kayseri özelinde sunduğumuz çözümler.',
  },
  {
    key: 'İlçe',
    title: 'İlçeler için',
    description: 'Melikgazi, Kocasinan, Talas ve İncesu firmalarına yerel hizmet.',
  },
];

export function LocalSolutions() {
  const pages = getAllLandingPages();

  return (
    <section className="section bg-surface/30 border-y border-border">
      <div className="container">
        <SectionHeading
          eyebrow="Yerel çözümler"
          title="Kayseri ve çevresine özel paketler"
          description="Sektörünüze veya bölgenize özel hazırlanmış çözüm sayfalarını inceleyin."
        />

        <div className="mt-12 space-y-12">
          {groups.map((group) => {
            const items = pages.filter((p) => p.category === group.key);
            if (items.length === 0) return null;

            return (
              <div key={group.key}>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {String(items.length).padStart(2, '0')} sayfa
                  </p>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/${page.slug}`}
                      className="group flex items-start justify-between gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                    >
                      <span className="text-sm font-medium tracking-tight text-foreground transition-colors group-hover:text-accent">
                        {page.hero.title}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-accent transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
