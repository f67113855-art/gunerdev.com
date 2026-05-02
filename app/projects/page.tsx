import { ProjectCard, type Project } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { CTA } from '@/components/CTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Projeler',
  description:
    'Müşterilerimiz için geliştirdiğimiz web uygulamaları, özel yazılım çözümleri ve backend sistemleri.',
  path: '/projects',
});

const projects: Project[] = [
  {
    slug: 'lojistik-yonetim-platformu',
    client: 'Orta Ölçekli Lojistik Şirketi',
    title: 'Filo ve sevkiyat yönetimi için entegre operasyon platformu',
    category: 'Özel Yazılım',
    year: '2024',
    problem:
      'Sevkiyat planlaması, sürücü atamaları ve müşteri bildirimleri farklı tablolar ve manuel süreçlerle yürütülüyor; bu durum sevkiyat başına yaklaşık 25 dakika operasyonel kayba yol açıyordu.',
    solution:
      'Operasyon ekibinin günlük akışına göre tasarlanmış, harita tabanlı bir sevkiyat yönetim paneli geliştirdik. Sürücü mobil uygulaması, otomatik müşteri SMS bildirimleri ve gerçek zamanlı konum takibi tek bir sistemde birleşti.',
    techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Mapbox', 'Twilio'],
    outcome:
      'Sevkiyat başına ortalama operasyonel süre 25 dakikadan 6 dakikaya indi. Müşteri çağrı merkezi yükü %40 azaldı.',
    outcomeMetrics: [
      { label: 'Operasyon süresi', value: '-76%' },
      { label: 'Çağrı merkezi yükü', value: '-40%' },
      { label: 'Yıllık tasarruf', value: '8x ROI' },
    ],
  },
  {
    slug: 'e-ticaret-performans-optimizasyonu',
    client: 'Ulusal E-ticaret Markası',
    title: 'Yüksek trafikli e-ticaret sitesi için performans yeniden yapılandırması',
    category: 'Performans',
    year: '2024',
    problem:
      'Ürün listeleme sayfaları 4.8 saniyede yükleniyor, mobil cihazlarda Largest Contentful Paint metriği 6 saniyenin üzerindeydi. Bu durum doğrudan dönüşüm oranlarına yansıyordu.',
    solution:
      'Frontend bundle analizi, kritik render path optimizasyonu, görsel teslim stratejisi ve veritabanı sorgu iyileştirmeleri ile uçtan uca performans denetimi gerçekleştirdik. Önbellekleme katmanı yeniden tasarlandı.',
    techStack: ['Next.js', 'CDN', 'Redis', 'PostgreSQL', 'Lighthouse', 'k6'],
    outcome:
      'Mobil LCP 2.1 saniyeye, ürün sayfası tam yükleme süresi 1.4 saniyeye düştü. Mobil dönüşüm oranı altı haftada %23 arttı.',
    outcomeMetrics: [
      { label: 'LCP iyileşmesi', value: '-65%' },
      { label: 'Mobil dönüşüm', value: '+23%' },
      { label: 'Bounce oranı', value: '-18%' },
    ],
  },
  {
    slug: 'saas-rapor-platformu',
    client: 'B2B SaaS Startup',
    title: 'Kurumsal müşteriler için ölçeklenebilir raporlama altyapısı',
    category: 'Backend & API',
    year: '2023',
    problem:
      'Mevcut raporlama servisi, kurumsal müşteri verisi büyüdükçe yavaşlıyor; bazı raporlar 90 saniyenin üzerinde sürüyor ve sık sık zaman aşımı hatalarına yol açıyordu.',
    solution:
      'Senkron raporlama mimarisini, queue tabanlı asenkron bir pipeline\'a dönüştürdük. Veri ön-toplama (pre-aggregation) katmanı ekledik ve sıkça erişilen raporları materyalize ederek sorgu sürelerini kısalttık.',
    techStack: ['Node.js', 'NestJS', 'PostgreSQL', 'BullMQ', 'Redis', 'Docker'],
    outcome:
      'Ortalama rapor üretim süresi 90 saniyeden 4 saniyeye indi. Zaman aşımı hataları sıfırlandı ve kurumsal müşteri kullanım oranı iki kat arttı.',
    outcomeMetrics: [
      { label: 'Rapor süresi', value: '-95%' },
      { label: 'Hata oranı', value: '0%' },
      { label: 'Kullanım', value: '2x' },
    ],
  },
  {
    slug: 'kurumsal-web-yenileme',
    client: 'Endüstriyel Üretici',
    title: 'Kurumsal kimlikli, çoklu dil destekli yeni şirket sitesi',
    category: 'Web Uygulaması',
    year: '2023',
    problem:
      'Mevcut kurumsal site mobilde okunaksız, arama motorlarında görünmez ve içerik güncellemesi yalnızca geliştirici müdahalesiyle mümkündü.',
    solution:
      'Modern bir mimaride (Next.js + headless CMS) tamamen yeniden yazılmış, üç dilli, SEO için optimize edilmiş ve pazarlama ekibinin bağımsız içerik yönetebildiği bir platform teslim ettik.',
    techStack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Sanity CMS', 'Vercel', 'Cloudflare'],
    outcome:
      'Organik trafik üç ayda %180 arttı. İçerik güncelleme süresi günler yerine dakikalara indi.',
    outcomeMetrics: [
      { label: 'Organik trafik', value: '+180%' },
      { label: 'Lighthouse skoru', value: '98/100' },
      { label: 'İçerik süresi', value: '-95%' },
    ],
  },
  {
    slug: 'odeme-entegrasyonu-altyapisi',
    client: 'Fintech Startup',
    title: 'Çoklu sağlayıcı ödeme orkestrasyon servisi',
    category: 'Backend & API',
    year: '2023',
    problem:
      'Tek ödeme sağlayıcısına bağlı olmak; başarısız işlem oranlarını artırıyor ve coğrafi yayılma planlarını engelliyordu. Sağlayıcı ekleme süreci aylar sürüyordu.',
    solution:
      'Sağlayıcılardan bağımsız bir ödeme orkestrasyon servisi tasarladık. Adapter pattern ile yeni sağlayıcı eklemenin günler değil saatler sürdüğü, otomatik yeniden deneme ve fallback mekanizmalarına sahip bir altyapı kurduk.',
    techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'RabbitMQ', 'Stripe', 'Iyzico'],
    outcome:
      'Başarısız işlem oranı %4.8\'den %0.6\'ya düştü. Yeni sağlayıcı entegrasyon süresi haftalardan saatlere indi.',
    outcomeMetrics: [
      { label: 'Başarısız işlem', value: '-87%' },
      { label: 'Entegrasyon süresi', value: '-99%' },
      { label: 'Aylık işlem', value: '+3.5x' },
    ],
  },
  {
    slug: 'devops-modernizasyon',
    client: 'KOBİ Yazılım Ekibi',
    title: 'Manuel deploy süreçlerinden otomatize CI/CD\'ye geçiş',
    category: 'DevOps',
    year: '2024',
    problem:
      'Üretim ortamına yayın süreci tamamen manueldi; her yayın yaklaşık bir saat sürüyor, sık sık konfigürasyon hataları üretime sızıyor ve ekip yayın günlerinde gerilimli çalışıyordu.',
    solution:
      'GitHub Actions üzerine kurulu, test-build-deploy aşamalarını otomatize eden bir pipeline kurduk. Container tabanlı dağıtım, otomatik rollback ve mavi-yeşil deploy stratejisi uygulandı.',
    techStack: ['GitHub Actions', 'Docker', 'NGINX', 'PM2', 'Linux', 'Cloudflare'],
    outcome:
      'Yayın süresi 60 dakikadan 4 dakikaya indi. Üretime sızan konfigürasyon hatası son altı ayda sıfır.',
    outcomeMetrics: [
      { label: 'Deploy süresi', value: '-93%' },
      { label: 'Üretim hatası', value: '0' },
      { label: 'Yayın sıklığı', value: '6x' },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="container relative pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-muted-foreground/40" aria-hidden="true" />
              Projeler
            </span>
            <h1 className="mt-5 text-display-lg font-semibold tracking-tight text-balance gradient-text">
              Müşterilerimiz için ürettiğimiz iş sonuçları.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
              Her projeyi bir vaka çalışması olarak ele alıyoruz: çözmeye çalıştığımız problem,
              uyguladığımız çözüm ve teslim ettiğimiz ölçülebilir sonuç.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface/30 border-y border-border">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Çalışma Modelimiz"
            title="Her projeye aynı sorularla başlıyoruz."
            description="Doğru çözüm, doğru soruları sormakla başlar. Bu nedenle keşif sürecinde ücret almıyoruz; netlik ortaya çıkmadan iş başlamaz."
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              { label: 'Hedef', text: 'Bu proje hangi iş sonucuna hizmet ediyor?' },
              { label: 'Kısıt', text: 'Süre, bütçe ve teknik kısıtlar neler?' },
              { label: 'Başarı', text: 'Başarıyı hangi metriklerle ölçeceğiz?' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <span className="eyebrow justify-center">{item.label}</span>
                <p className="mt-3 text-base font-medium text-foreground text-balance">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Sıradaki vaka çalışması sizinki olabilir."
        description="Mevcut sisteminizi büyütelim, yeni bir ürün inşa edelim ya da sadece teknik bir görüş paylaşalım."
      />
    </>
  );
}
