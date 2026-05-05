import type { Project as ProjectCardData } from '@/components/ProjectCard';

export type Project = ProjectCardData & {
  metaTitle: string;
  metaDescription: string;
  longDescription: string[];
  challenges: string[];
  highlights: string[];
  duration: string;
  industry: string;
};

export const projects: Project[] = [
  {
    slug: 'lojistik-yonetim-platformu',
    client: 'Orta Ölçekli Lojistik Şirketi',
    title: 'Filo ve sevkiyat yönetimi için entegre operasyon platformu',
    metaTitle: 'Lojistik Yönetim Platformu Vaka Çalışması',
    metaDescription:
      'Sevkiyat süresini %76 azaltan, harita tabanlı filo ve operasyon yönetim platformu. Next.js, Node.js ve PostgreSQL ile geliştirildi.',
    category: 'Özel Yazılım',
    industry: 'Lojistik',
    year: '2024',
    duration: '5 ay',
    problem:
      'Sevkiyat planlaması, sürücü atamaları ve müşteri bildirimleri farklı tablolar ve manuel süreçlerle yürütülüyor; bu durum sevkiyat başına yaklaşık 25 dakika operasyonel kayba yol açıyordu.',
    solution:
      'Operasyon ekibinin günlük akışına göre tasarlanmış, harita tabanlı bir sevkiyat yönetim paneli geliştirdik. Sürücü mobil uygulaması, otomatik müşteri SMS bildirimleri ve gerçek zamanlı konum takibi tek bir sistemde birleşti.',
    longDescription: [
      'Müşteri, Türkiye genelinde 80\'in üzerinde araçlık bir filoyu Excel tabloları ve telefon görüşmeleriyle yönetiyordu. Her sevkiyat için sürücü atama, rota planlama, müşteriye bildirim, teslimat onayı ayrı ayrı süreçlerdi. Bu durum hem ölçeklenmeyi engelliyor hem de hata oranını artırıyordu.',
      'Çözümü iki katmanlı kurguladık: operasyon ekibi için harita tabanlı bir web paneli, sürücüler için iOS/Android tabanlı mobil uygulama. İki uçtaki tüm veri tek bir PostgreSQL\'de gerçek zamanlı senkronize.',
      'Teknik olarak en zor kısım, gerçek zamanlı konum güncellemesi ve harita tabanlı sevkiyat optimizasyonuydu. Mapbox GL ile harita altyapısı, Redis Pub/Sub ile real-time iletişim, Twilio ile otomatik SMS bildirimleri kullandık.',
    ],
    challenges: [
      'Mevcut Excel verisinin sisteme aktarımı (50.000+ tarihsel sevkiyat kaydı)',
      'Sürücülerin teknolojiye adaptasyonu — uygulamayı bilinçli olarak çok basit tasarladık',
      'Düşük internet bağlantısında çalışacak mobil uygulama (offline first yaklaşımı)',
      'Yoğun saatte 200+ eş zamanlı sürücü konumu güncellemesi',
    ],
    highlights: [
      'Harita üzerinde drag-and-drop sevkiyat ataması',
      'Otomatik rota optimizasyonu',
      'Müşteriye gerçek zamanlı teslimat takibi (SMS link)',
      'Sürücü performans raporları',
    ],
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
    metaTitle: 'E-ticaret Performans Optimizasyonu Vaka Çalışması',
    metaDescription:
      'Mobil LCP\'yi %65 düşüren, dönüşüm oranını %23 artıran kapsamlı e-ticaret performans iyileştirmesi.',
    category: 'Performans',
    industry: 'E-ticaret',
    year: '2024',
    duration: '8 hafta',
    problem:
      'Ürün listeleme sayfaları 4.8 saniyede yükleniyor, mobil cihazlarda Largest Contentful Paint metriği 6 saniyenin üzerindeydi. Bu durum doğrudan dönüşüm oranlarına yansıyordu.',
    solution:
      'Frontend bundle analizi, kritik render path optimizasyonu, görsel teslim stratejisi ve veritabanı sorgu iyileştirmeleri ile uçtan uca performans denetimi gerçekleştirdik. Önbellekleme katmanı yeniden tasarlandı.',
    longDescription: [
      'Müşteri, aylık 2 milyonun üzerinde ziyaretçisi olan bir e-ticaret platformuna sahipti. Mevcut yapı bir önceki nesil React SPA üzerine kurulmuştu; ürün detay sayfaları 4-6 saniye sürüyor, mobil dönüşüm oranı sektör ortalamasının altındaydı.',
      'İlk hafta tamamen ölçüme ayrıldı: WebPageTest, Lighthouse CI, Datadog APM ve PostgreSQL slow query log\'ları. Sorunun bir kısmı frontend (1.2 MB bundle, blocking JavaScript), bir kısmı backend (yavaş kategori sorguları, cache eksikliği) tarafındaydı.',
      'Frontend\'de Next.js App Router\'a kademeli geçiş, dynamic import ile kod bölme, görsel için CDN tabanlı responsive teslim. Backend\'de PostgreSQL üzerinde indeks revizyonu, Redis ile kategori cache katmanı, CDN edge cache stratejisi.',
    ],
    challenges: [
      'Canlı trafiği aksatmadan kademeli geçiş yapmak',
      '15.000+ ürünün görselini WebP/AVIF formatına dönüştürmek',
      'Cache invalidation\'ı stok değişikliklerinde tutarlı tutmak',
      'A/B test altyapısı kurarak iyileştirmeleri önce-sonra ölçmek',
    ],
    highlights: [
      'Frontend bundle 1.2 MB → 280 KB',
      'Mobil LCP 6.0s → 2.1s',
      'Sunucu yanıt süresi P95: 800ms → 120ms',
      'Aylık altyapı maliyeti %35 azaldı (daha verimli kaynak kullanımı)',
    ],
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
    metaTitle: 'B2B SaaS Raporlama Altyapısı Vaka Çalışması',
    metaDescription:
      'Rapor üretim süresini 90 saniyeden 4 saniyeye indiren, queue tabanlı ölçeklenebilir SaaS raporlama mimarisi.',
    category: 'Backend & API',
    industry: 'SaaS',
    year: '2023',
    duration: '4 ay',
    problem:
      'Mevcut raporlama servisi, kurumsal müşteri verisi büyüdükçe yavaşlıyor; bazı raporlar 90 saniyenin üzerinde sürüyor ve sık sık zaman aşımı hatalarına yol açıyordu.',
    solution:
      'Senkron raporlama mimarisini, queue tabanlı asenkron bir pipeline\'a dönüştürdük. Veri ön-toplama (pre-aggregation) katmanı ekledik ve sıkça erişilen raporları materyalize ederek sorgu sürelerini kısalttık.',
    longDescription: [
      'Müşterinin SaaS ürünü, kurumsal müşterilere haftalık ve aylık operasyon raporu üretiyordu. Veri büyüdükçe (en büyük müşteride 50 milyon satır) raporlar zaman aşımına uğramaya başladı; en kötü senaryoda %18\'i hiç teslim edilemiyordu.',
      'Çözüm üç katmanlıydı: (1) BullMQ ile queue tabanlı asenkron raporlama, (2) sık kullanılan metrikler için PostgreSQL materialized view, (3) raporlar üretildikçe S3\'te cache\'lenip CDN üzerinden teslim.',
      'En önemli mimari karar: senkron HTTP yerine "rapor talep et → email/notification ile teslim" akışına geçmek oldu. Bu değişiklik, kullanıcı deneyimini bozmadı; aksine kurumsal müşterilerin "büyük rapor üretirken sayfayı kapatamıyorum" şikayetini ortadan kaldırdı.',
    ],
    challenges: [
      'Mevcut senkron API\'leri kıracak şekilde değil, geriye dönük uyumlu refactor',
      'Materialized view\'ları gerçek zamanlı tutmak (incremental refresh)',
      'Aynı raporun birden fazla kez talep edilmesinde dedüplikasyon',
      'Queue worker\'ların failover ve retry mantığı',
    ],
    highlights: [
      'Rapor üretim P95: 90s → 4s',
      'Eş zamanlı 200+ rapor talebini sorunsuz işleyebilme',
      'S3 + CDN ile rapor teslim maliyetinde %70 düşüş',
      'Yeni rapor tipi ekleme süresi: 2 günden 4 saate',
    ],
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
    metaTitle: 'Kurumsal Web Sitesi Yenileme Vaka Çalışması',
    metaDescription:
      'Organik trafiği %180 artıran, çoklu dil destekli, headless CMS ile yönetilen yeni nesil kurumsal web sitesi.',
    category: 'Web Uygulaması',
    industry: 'Endüstriyel Üretim',
    year: '2023',
    duration: '10 hafta',
    problem:
      'Mevcut kurumsal site mobilde okunaksız, arama motorlarında görünmez ve içerik güncellemesi yalnızca geliştirici müdahalesiyle mümkündü.',
    solution:
      'Modern bir mimaride (Next.js + headless CMS) tamamen yeniden yazılmış, üç dilli, SEO için optimize edilmiş ve pazarlama ekibinin bağımsız içerik yönetebildiği bir platform teslim ettik.',
    longDescription: [
      'Müşteri 30 yıllık bir endüstriyel üretici; ürünleri Almanya, İngiltere ve Türkiye\'de aktif satılıyor. Mevcut sitesi 10 yaşında WordPress kurulumuydu; mobilde kötü, SEO açısından felaket, içerik güncellemesi her seferinde geliştirici gerektiriyordu.',
      'Yeniden yazımda Next.js ve Sanity CMS\'i seçtik. Sanity\'nin görsel düzenleyicisi ile pazarlama ekibi sayfa yapısını bile bağımsız değiştirebiliyor; geliştirici müdahalesi sadece yeni şablon eklerken gerekli.',
      'SEO için her sayfada otomatik schema.org JSON-LD, dinamik sitemap, hreflang etiketleri, açık graph metadata ve uluslararası SEO için yapılandırılmış URL stratejisi.',
    ],
    challenges: [
      'Eski WordPress\'teki 200+ sayfanın URL yapısını koruyarak migrasyon',
      'Üç dil arasında içerik tutarlılığını sağlamak',
      'Pazarlama ekibinin teknik olmayan üyelerinin CMS\'e adaptasyonu',
      'Eski domain authority\'yi kaybetmemek için 301 redirect haritası',
    ],
    highlights: [
      'Lighthouse: tüm metriklerde 95+',
      '3 dilde tam içerik (Almanca, İngilizce, Türkçe)',
      'Sayfa yükleme P95: 1.1 saniye',
      'İçerik güncelleme süresi: günler → dakikalar',
    ],
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
    metaTitle: 'Ödeme Orkestrasyon Servisi Vaka Çalışması',
    metaDescription:
      'Başarısız işlem oranını %87 düşüren, sağlayıcı bağımsız ödeme orkestrasyon servisi. Stripe, Iyzico ve diğer sağlayıcılar.',
    category: 'Backend & API',
    industry: 'Fintech',
    year: '2023',
    duration: '5 ay',
    problem:
      'Tek ödeme sağlayıcısına bağlı olmak; başarısız işlem oranlarını artırıyor ve coğrafi yayılma planlarını engelliyordu. Sağlayıcı ekleme süreci aylar sürüyordu.',
    solution:
      'Sağlayıcılardan bağımsız bir ödeme orkestrasyon servisi tasarladık. Adapter pattern ile yeni sağlayıcı eklemenin günler değil saatler sürdüğü, otomatik yeniden deneme ve fallback mekanizmalarına sahip bir altyapı kurduk.',
    longDescription: [
      'Müşteri Türkiye merkezli bir fintech startup; ürünü, KOBİ\'lere yönelik bir abonelik tahsilat platformu. Mevcut yapıda tek sağlayıcı (Iyzico) kullanılıyor, başarısız işlem oranı %4-5 civarındaydı. Sağlayıcı kesintilerinde tüm tahsilat duruyordu.',
      'Çözümü "ödeme orkestratörü" olarak konumlandırdık: müşterinin ödemesi geldiğinde, hangi sağlayıcıya gönderileceğine kural motoru karar veriyor (kart BIN\'ine, kullanıcı geçmişine, sağlayıcı sağlığına göre). Başarısız olursa otomatik fallback başka bir sağlayıcıya.',
      'Adapter pattern ile her sağlayıcı (Stripe, Iyzico, PayTR, ileride yeni eklenecekler) aynı arayüzü uyguluyor. Yeni bir sağlayıcı eklemek için tek yapılması gereken adapter sınıfını yazmak ve test etmek; çekirdek mantık değişmiyor.',
    ],
    challenges: [
      'PCI DSS uyumluluğu (kart verisi servisten geçmemeli)',
      'Idempotency: aynı işlem iki kez alınmamalı',
      'Yarım kalan işlemler için reconciliation süreci',
      'Sağlayıcı sağlığını gerçek zamanlı izleyen circuit breaker',
    ],
    highlights: [
      'Sağlayıcı bağımsız tek API',
      'Otomatik yeniden deneme + fallback',
      'Kart BIN\'e göre akıllı yönlendirme',
      'Webhook deduplication ve idempotency',
    ],
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
    metaTitle: 'DevOps Modernizasyon Vaka Çalışması',
    metaDescription:
      'Yayın süresini 60 dakikadan 4 dakikaya indiren, GitHub Actions ve Docker tabanlı CI/CD modernizasyonu.',
    category: 'DevOps',
    industry: 'Yazılım',
    year: '2024',
    duration: '6 hafta',
    problem:
      'Üretim ortamına yayın süreci tamamen manueldi; her yayın yaklaşık bir saat sürüyor, sık sık konfigürasyon hataları üretime sızıyor ve ekip yayın günlerinde gerilimli çalışıyordu.',
    solution:
      'GitHub Actions üzerine kurulu, test-build-deploy aşamalarını otomatize eden bir pipeline kurduk. Container tabanlı dağıtım, otomatik rollback ve mavi-yeşil deploy stratejisi uygulandı.',
    longDescription: [
      'Müşteri 12 kişilik bir yazılım ekibiydi; ana ürünleri B2B bir SaaS. Yayın süreçleri tamamen manueldi: SSH ile sunucuya bağlan, git pull, npm install, npm build, PM2 restart. Her adımda hata payı, her yayında 1 saat.',
      'GitHub Actions üzerinde test-build-deploy hattı kurduk. Test geçmeyen kod canlıya çıkamıyor; build artifact\'i Docker image olarak GitHub Container Registry\'de tutuluyor; canlıya deploy iki sunucu arasında mavi-yeşil yapılıyor.',
      'En kritik kazanım gizli olan: artık ekip günde 2-3 yayın yapabiliyor (öncesinde haftada 1). Bu, küçük değişikliklerin daha hızlı kullanıcıya ulaşması ve sorun çıkarsa hangi değişikliğin sebep olduğunu anında tespit edebilme demek.',
    ],
    challenges: [
      'Sıfır kesinti hedefiyle mavi-yeşil deploy',
      'Eski runbook\'ları yeni pipeline\'a taşımak',
      'Veritabanı migrasyonlarını otomatize ederken güvenli tutmak',
      'Ekibin yeni iş akışına alışması (deploy artık merge sonrası otomatik)',
    ],
    highlights: [
      'Yayın süresi: 60 dk → 4 dk',
      'Yayın sıklığı: haftada 1 → günde 3',
      'Otomatik rollback (sağlık kontrolü başarısızsa)',
      'Ekibin "yayın stresi" tamamen ortadan kalktı',
    ],
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

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}
