import { CTA } from '@/components/CTA';
import { PageHero } from '@/components/PageHero';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Hizmetler',
  description:
    'Web uygulamaları, özel yazılım, backend & API sistemleri, performans optimizasyonu, teknik danışmanlık ve DevOps hizmetleri.',
  path: '/services',
});

type ServiceDetail = {
  id: string;
  number: string;
  title: string;
  description: string;
  value: string;
  deliverables: string[];
  technologies: string[];
};

const services: ServiceDetail[] = [
  {
    id: 'web-applications',
    number: '01',
    title: 'Web Uygulamaları',
    description:
      'Modern web teknolojileri ile tarayıcıda çalışan, sunucu tarafında render edilen ya da hibrit yapıda web uygulamaları geliştiriyoruz. SEO, erişilebilirlik ve performansı temel kabul ediyor; bu kriterleri sonradan eklenecek özellikler olarak değil, mimarinin parçası olarak ele alıyoruz.',
    value:
      'Daha hızlı yüklenen sayfalar, arama motorlarında daha iyi konumlanma ve doğrudan dönüşüm oranlarına yansıyan kullanıcı deneyimi.',
    deliverables: [
      'Sunucu tarafı render (SSR) ve statik site üretimi (SSG)',
      'Core Web Vitals optimizasyonu',
      'Erişilebilirlik (WCAG 2.1 AA) uyumu',
      'Çoklu dil ve yerelleştirme desteği',
      'Yönetim paneli ve içerik yönetim entegrasyonları',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Vite', 'Astro'],
  },
  {
    id: 'custom-software',
    number: '02',
    title: 'Özel Yazılım Geliştirme',
    description:
      'Hazır SaaS çözümlerinin işinizin gereksinimlerini karşılayamadığı durumlarda, sıfırdan iş mantığınıza özel yazılım sistemleri kuruyoruz. Süreç haritalama, veri modelleme ve kullanıcı akışı tasarımından başlayarak uçtan uca teslim ediyoruz.',
    value:
      'Operasyonel verimlilik artışı, manuel iş yükünün azaltılması ve hazır araçların yapamayacağı rekabet avantajı.',
    deliverables: [
      'İç süreç ve operasyon yönetim sistemleri',
      'B2B ve B2C platformlar',
      'Çok kullanıcılı SaaS uygulamaları',
      'Rol tabanlı erişim ve denetim mekanizmaları',
      'Üçüncü parti sistem entegrasyonları (ERP, CRM, ödeme)',
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Prisma', 'tRPC'],
  },
  {
    id: 'backend-api',
    number: '03',
    title: 'Backend & API Sistemleri',
    description:
      'Yüksek trafikli sistemler için sağlam, güvenli ve sürdürülebilir API mimarileri kuruyoruz. Mikroservisler, event-driven mimariler ve sağlam monolitik yapılarda derin deneyime sahibiz. Doğru mimariyi seçmek, gereksiz karmaşıklıktan kaçınmak ve işin gereksinimine göre kararlar almakla başlar.',
    value:
      'Güvenilir altyapı, kesintisiz iş sürekliliği ve büyüyen kullanıcı tabanını maliyet etkin şekilde destekleyebilen ölçeklenebilirlik.',
    deliverables: [
      'REST ve GraphQL API tasarımı',
      'Kimlik doğrulama ve yetkilendirme (OAuth 2.0, JWT)',
      'Veritabanı şema tasarımı ve migrasyon yönetimi',
      'Cache stratejileri (Redis, CDN)',
      'Background job ve message queue yapıları',
      'API dokümantasyonu (OpenAPI / Swagger)',
    ],
    technologies: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'],
  },
  {
    id: 'performance',
    number: '04',
    title: 'Performans Optimizasyonu',
    description:
      'Mevcut uygulamalarınızın hızını, ölçeklenebilirliğini ve kaynak verimliliğini artırıyoruz. Profil çıkarmadan başlayarak; veritabanı sorguları, render süreleri, ağ trafiği ve sunucu kaynak kullanımını sistematik olarak iyileştiriyoruz. Tahmin değil, ölçümle çalışıyoruz.',
    value:
      'Düşük altyapı maliyeti, daha yüksek kullanıcı memnuniyeti ve mevcut donanımla daha fazla iş yapabilme kapasitesi.',
    deliverables: [
      'Performans denetim raporu ve yol haritası',
      'Frontend bundle ve render optimizasyonu',
      'Veritabanı sorgu ve indeks iyileştirmesi',
      'Önbellekleme ve CDN stratejileri',
      'Sunucu kaynak kullanımı analizi',
      'Yük testi ve kapasite planlaması',
    ],
    technologies: ['Lighthouse', 'k6', 'Datadog', 'Grafana', 'New Relic', 'Sentry'],
  },
  {
    id: 'consulting',
    number: '05',
    title: 'Teknik Danışmanlık',
    description:
      'Mimari kararlardan kod kalitesine, ekip yapılandırmasından teknoloji seçimine kadar mühendislik süreçlerinize stratejik danışmanlık sağlıyoruz. CTO seviyesinde teknik vizyona ihtiyaç duyan ancak tam zamanlı pozisyon henüz erken olan ekipler için ideal bir model.',
    value:
      'Doğru teknik kararlar, daha az teknik borç ve mühendislik organizasyonunuzun olgunluk seviyesinde belirgin artış.',
    deliverables: [
      'Mimari değerlendirme ve roadmap',
      'Kod kalitesi denetimi ve iyileştirme planı',
      'Teknoloji seçim danışmanlığı',
      'Ekip yapılandırma ve süreç tasarımı',
      'Code review ve mentorluk',
      'Üretim sorunlarında müdahale desteği',
    ],
    technologies: ['Mimari Tasarım', 'Code Review', 'Süreç Yönetimi', 'Teknik Liderlik'],
  },
  {
    id: 'devops',
    number: '06',
    title: 'DevOps & Altyapı',
    description:
      'Sürekli entegrasyon ve dağıtım hatları, container teknolojileri, izlenebilirlik altyapısı ve sunucu yönetimi ile geliştirme süreçlerinizi modernize ediyoruz. Geliştirme hızını artırırken; güvenliği, gözlemlenebilirliği ve üretim kararlılığını koruyoruz.',
    value:
      'Daha hızlı yayın döngüsü, hatasız deploy süreçleri ve mühendislik ekibinin teslim hızında ölçülebilir artış.',
    deliverables: [
      'CI/CD pipeline kurulumu',
      'Docker ve container orkestrasyonu',
      'Sunucu kurulumu, konfigürasyonu ve sertleştirme',
      'NGINX reverse proxy ve SSL yönetimi',
      'Log toplama ve izlenebilirlik altyapısı',
      'Yedekleme ve felaket kurtarma planları',
    ],
    technologies: ['Docker', 'GitHub Actions', 'NGINX', 'PM2', 'Linux', 'Cloudflare'],
  },
];

export default function ServicesPage() {
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
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-2xl border border-border bg-surface p-8 md:p-12"
              >
                <div className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <span className="font-display text-3xl font-semibold text-accent">
                      {service.number}
                    </span>
                    <h2 className="mt-3 text-display-md font-semibold tracking-tight">
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
                  </div>
                </div>
              </article>
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
