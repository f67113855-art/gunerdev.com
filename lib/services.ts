export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  longDescription: string[];
  value: string;
  deliverables: string[];
  technologies: string[];
  process: { step: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedProjects: string[];
};

export const services: Service[] = [
  {
    slug: 'web-uygulamalari',
    number: '01',
    shortTitle: 'Web Uygulamaları',
    title: 'Web Uygulamaları',
    metaTitle: 'Web Uygulaması Geliştirme | Next.js, React, TypeScript',
    metaDescription:
      'Next.js ve React ile yüksek performanslı, SEO uyumlu, ölçeklenebilir web uygulamaları geliştiriyoruz. Core Web Vitals odaklı modern mimari.',
    description:
      'Modern web teknolojileri ile tarayıcıda çalışan, sunucu tarafında render edilen ya da hibrit yapıda web uygulamaları geliştiriyoruz. SEO, erişilebilirlik ve performansı temel kabul ediyor; bu kriterleri sonradan eklenecek özellikler olarak değil, mimarinin parçası olarak ele alıyoruz.',
    longDescription: [
      'Bir web uygulamasının başarısı, yalnızca güzel görünmesinden ibaret değildir. Arama motorlarında bulunabilir olması, mobilde hızlı yüklenmesi, erişilebilirlik standartlarına uyumlu olması ve gerçek kullanıcılarda dönüşüm üretmesi gerekir. Biz bu kriterleri başlangıç noktası olarak alıyoruz; ekstra özellik olarak değil.',
      'Next.js 15, React 19 ve TypeScript ile çalışıyoruz. App Router mimarisi, sunucu bileşenleri (RSC), streaming SSR ve görsel optimizasyon gibi modern özellikleri yerel olarak destekliyoruz. Sonuç: tarayıcıya minimum JavaScript, maksimum performans.',
      'Yapılan her seçimi ölçülebilir bir iş hedefine bağlıyoruz: dönüşüm oranı, organik trafik, kullanıcı tutma süresi, sayfa yüklenme süresi. Karar veriyorken tahmin değil veri kullanıyoruz.',
    ],
    value:
      'Daha hızlı yüklenen sayfalar, arama motorlarında daha iyi konumlanma ve doğrudan dönüşüm oranlarına yansıyan kullanıcı deneyimi.',
    deliverables: [
      'Sunucu tarafı render (SSR) ve statik site üretimi (SSG)',
      'Core Web Vitals optimizasyonu',
      'Erişilebilirlik (WCAG 2.1 AA) uyumu',
      'Çoklu dil ve yerelleştirme desteği',
      'Yönetim paneli ve içerik yönetim entegrasyonları',
      'Schema.org ve teknik SEO altyapısı',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Vite', 'Astro'],
    process: [
      {
        step: '01',
        title: 'Keşif ve hedefleme',
        description:
          'Hedef kitle, dönüşüm hedefleri ve teknik kısıtları haritalandırıyoruz. Hangi metriklere bakacağımızı önceden netleştiriyoruz.',
      },
      {
        step: '02',
        title: 'Bilgi mimarisi ve tasarım',
        description:
          'Sayfa yapısı, içerik hiyerarşisi ve etkileşim akışlarını çıkarıyoruz. Tasarımı performans bütçesine göre kalıba alıyoruz.',
      },
      {
        step: '03',
        title: 'Geliştirme',
        description:
          'TypeScript ve modern React ile uygulamayı parça parça inşa ediyoruz; sürekli olarak Core Web Vitals ve erişilebilirlik testleri yapıyoruz.',
      },
      {
        step: '04',
        title: 'Yayın ve izleme',
        description:
          'Lighthouse, Sentry ve analytics ile yayını takip ediyoruz. Yayın sonrası iki hafta yakın izleme dahil.',
      },
    ],
    faq: [
      {
        question: 'WordPress yerine neden Next.js?',
        answer:
          'WordPress hızlı bir başlangıç sunar ama performans, güvenlik ve özelleştirme limitleri vardır. Next.js, statik üretim ve sunucu bileşenleriyle çok daha hızlı sayfalar ve daha güvenli bir altyapı sağlar; uzun vadede maliyet de daha düşüktür.',
      },
      {
        question: 'Mevcut sitemizi yeniden mi yazmamız gerekiyor?',
        answer:
          'Her zaman değil. Mevcut altyapıyı değerlendirip kademeli iyileştirme mümkünse onu öneriyoruz. Ancak temel performans veya mimari sorunlar varsa, sıfırdan yazmak çoğunlukla daha az toplam maliyetli oluyor.',
      },
      {
        question: 'Bir web uygulaması projesi ne kadar sürer?',
        answer:
          'Tipik bir kurumsal site 4-6 hafta, orta karmaşıklıkta uygulama 8-12 hafta, ölçekli SaaS ürünleri 3-6 ay. Tahmini süreyi keşif görüşmesi sonrası netleştiriyoruz.',
      },
    ],
    relatedProjects: ['kurumsal-web-yenileme', 'e-ticaret-performans-optimizasyonu'],
  },
  {
    slug: 'ozel-yazilim',
    number: '02',
    shortTitle: 'Özel Yazılım',
    title: 'Özel Yazılım Geliştirme',
    metaTitle: 'Özel Yazılım Geliştirme | İşinize Özgü Sistemler',
    metaDescription:
      'Hazır SaaS çözümlerinin yetmediği yerde, iş süreçlerinize özel yazılım sistemleri geliştiriyoruz. Operasyon, B2B, B2C ve dahili araçlar.',
    description:
      'Hazır SaaS çözümlerinin işinizin gereksinimlerini karşılayamadığı durumlarda, sıfırdan iş mantığınıza özel yazılım sistemleri kuruyoruz. Süreç haritalama, veri modelleme ve kullanıcı akışı tasarımından başlayarak uçtan uca teslim ediyoruz.',
    longDescription: [
      'Çoğu işletme bir noktada hazır yazılımların sınırına çarpar: ya bir özelliği geliştirmek mümkün değildir, ya entegrasyonlar yetmez, ya da ücret modeli ölçeklenirken anlamsızlaşır. O noktada özel yazılım, hazır araçların yapamadığını yapan bir rekabet avantajına dönüşür.',
      'Biz özel yazılım projelerinde önce iş tarafını dinleriz: hangi süreç, hangi roller, hangi karar noktaları? Bu haritayı çıkardıktan sonra teknolojiyi seçeriz; teknolojiyi seçip sonra iş mantığını sıkıştırmaya çalışmayız.',
      'TypeScript tabanlı tam yığın (Next.js + Node.js + PostgreSQL + Prisma + tRPC) standart kurulumumuz. Daha karmaşık iş mantığı gerektiren projelerde Python ya da Go tarafına da geçiyoruz.',
    ],
    value:
      'Operasyonel verimlilik artışı, manuel iş yükünün azaltılması ve hazır araçların yapamayacağı rekabet avantajı.',
    deliverables: [
      'İç süreç ve operasyon yönetim sistemleri',
      'B2B ve B2C platformlar',
      'Çok kullanıcılı SaaS uygulamaları',
      'Rol tabanlı erişim ve denetim mekanizmaları',
      'Üçüncü parti sistem entegrasyonları (ERP, CRM, ödeme)',
      'Detaylı denetim kayıtları ve raporlama',
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Prisma', 'tRPC'],
    process: [
      {
        step: '01',
        title: 'Süreç haritalama',
        description:
          'Mevcut iş akışınızı uçtan uca çıkarıyoruz. Manuel adımlar, kopuk veriler ve otomatize edilebilir kararlar burada netleşir.',
      },
      {
        step: '02',
        title: 'Veri modelleme',
        description:
          'Süreç haritasını bir veri modeline dönüştürüyoruz. Yanlış başlangıçtan gelen problemleri burada çözmek, sonradan çözmekten 10 kat ucuz.',
      },
      {
        step: '03',
        title: 'Aşamalı teslim',
        description:
          'İlk modülü 4-6 hafta içinde canlıya alıyoruz. Beklemek yerine erken kullanıma açıp geri bildirimle devam ediyoruz.',
      },
      {
        step: '04',
        title: 'Bakım ve iyileştirme',
        description:
          'Yayın sonrası destek paketleri ile sistemi büyütüyor, yeni süreçleri sisteme dahil ediyoruz.',
      },
    ],
    faq: [
      {
        question: 'Hazır SaaS yerine özel yazılım ne zaman doğru karar?',
        answer:
          'Hazır SaaS her ay 500-1.000 USD üstünü buluyor ve ihtiyaçların %70-80\'ini karşılıyorsa, 12-18 aylık geri ödeme süresiyle özel yazılım çoğu zaman daha mantıklı. Ek olarak entegrasyon, veri sahipliği ve özelleştirme avantajı var.',
      },
      {
        question: 'Veri ve güvenlik nasıl yönetiliyor?',
        answer:
          'Tüm veriler kendi sunucunuzda ya da seçtiğiniz bulut sağlayıcısında tutuluyor. KVKK uyumlu kayıt, şifreleme, denetim logları ve rol bazlı erişim varsayılan olarak geliyor.',
      },
      {
        question: 'Sistem büyürse ne olur?',
        answer:
          'Mimari kararları başından ölçeklenebilir kuruyoruz. PostgreSQL, Redis, queue altyapısı ve container tabanlı dağıtım sayesinde 10x büyüme bile genelde ek refactor istemiyor.',
      },
    ],
    relatedProjects: ['lojistik-yonetim-platformu', 'saas-rapor-platformu'],
  },
  {
    slug: 'backend-api',
    number: '03',
    shortTitle: 'Backend & API',
    title: 'Backend & API Sistemleri',
    metaTitle: 'Backend & API Geliştirme | Node.js, NestJS, PostgreSQL',
    metaDescription:
      'Yüksek trafikli sistemler için sağlam, güvenli ve ölçeklenebilir API mimarileri. REST, GraphQL, mikroservis ve event-driven yaklaşımlar.',
    description:
      'Yüksek trafikli sistemler için sağlam, güvenli ve sürdürülebilir API mimarileri kuruyoruz. Mikroservisler, event-driven mimariler ve sağlam monolitik yapılarda derin deneyime sahibiz. Doğru mimariyi seçmek, gereksiz karmaşıklıktan kaçınmak ve işin gereksinimine göre kararlar almakla başlar.',
    longDescription: [
      'Backend mimarisi, bir ürünün uzun vadeli sağlığını belirleyen en kritik karardır. Yanlış erken seçimler, bir kez kullanıcı tabanı büyüdükten sonra çok pahalıya patlar. Bu yüzden başlangıçta abartılı karmaşıklıktan da, gereksiz basitlikten de uzak duruyoruz.',
      'Çoğu projede modüler monolit ile başlamayı öneriyoruz; çünkü mikroservisler erken aşamada operasyonel maliyeti çok artırır. Sadece gerçek bir ölçek veya takım büyüklüğü gerektirdiğinde mikroservise geçiyoruz.',
      'API tasarımında REST ve GraphQL\'i amaca göre seçiyoruz. Dahili sistemler için tRPC genelde en hızlı ve tip güvenli seçenek. Tüm API\'ler için OpenAPI dokümanı ve otomatik tip üretimi standart.',
    ],
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
    process: [
      {
        step: '01',
        title: 'Mimari değerlendirme',
        description:
          'Mevcut yük, beklenen ölçek ve takım yapısına göre monolit, modüler monolit veya mikroservis kararı veriyoruz.',
      },
      {
        step: '02',
        title: 'Veri ve API tasarımı',
        description:
          'Veritabanı şeması, indeksler, API kontratları. Bu aşamayı atlamak, sonraki tüm sorunların kaynağı.',
      },
      {
        step: '03',
        title: 'Geliştirme ve testler',
        description:
          'Birim, entegrasyon ve yük testleri ile aşamalı teslim. CI/CD ile her commit otomatik test ediliyor.',
      },
      {
        step: '04',
        title: 'Üretim ve gözlemleme',
        description:
          'Datadog, Grafana veya Sentry ile metrik, log ve trace üçlüsü. Sorunları kullanıcı görmeden tespit ediyoruz.',
      },
    ],
    faq: [
      {
        question: 'REST mi, GraphQL mi?',
        answer:
          'Çoğu durumda REST yeterli ve daha basit. GraphQL, çok sayıda istemci tipinin (web, mobil, partner) farklı veri ihtiyacı varsa veya frontend ekipler bağımsız çalışacaksa anlamlı.',
      },
      {
        question: 'Mikroservise ne zaman geçmeli?',
        answer:
          'Genelde organizasyonel bir ihtiyaçtır: birden fazla bağımsız ekip aynı kod tabanına bağımlı kaldığında. Sadece teknik olarak değil, takım yapısı uygun olduğunda mantıklı.',
      },
      {
        question: 'Cache stratejisi nasıl belirleniyor?',
        answer:
          'Önce gerçek darboğazları profil çıkararak buluyoruz. Cache kolay görünür ama yanlış kullanılırsa tutarlılık bug\'ları yaratır. Hangi veriyi, ne kadar süre, hangi invalidation stratejisi ile cache\'leyeceğimize tek tek karar veriyoruz.',
      },
    ],
    relatedProjects: ['saas-rapor-platformu', 'odeme-entegrasyonu-altyapisi'],
  },
  {
    slug: 'performans-optimizasyonu',
    number: '04',
    shortTitle: 'Performans',
    title: 'Performans Optimizasyonu',
    metaTitle: 'Web Performans Optimizasyonu | Core Web Vitals & Hız',
    metaDescription:
      'Mevcut uygulamalarınızın hızını ve ölçeklenebilirliğini artırıyoruz. Core Web Vitals, frontend bundle, veritabanı sorgu ve cache stratejileri.',
    description:
      'Mevcut uygulamalarınızın hızını, ölçeklenebilirliğini ve kaynak verimliliğini artırıyoruz. Profil çıkarmadan başlayarak; veritabanı sorguları, render süreleri, ağ trafiği ve sunucu kaynak kullanımını sistematik olarak iyileştiriyoruz. Tahmin değil, ölçümle çalışıyoruz.',
    longDescription: [
      'Performans optimizasyonu, çoğu zaman yapıldığında en hızlı ROI getiren mühendislik yatırımıdır. Yavaş bir e-ticaret sayfasında 1 saniyelik iyileştirme, dönüşüm oranını %7-12 arttırabiliyor. Yavaş bir SaaS panelinde aynı iyileştirme kullanıcı tutma süresine doğrudan yansıyor.',
      'Bir sistemi optimize etmeden önce ölçüyoruz. PageSpeed, Lighthouse, WebPageTest, Datadog APM veya pgBadger gibi araçlarla kanıt topluyoruz. Sonra önceliklendirilmiş bir yol haritası ile en yüksek getirili müdahaleleri sırayla yapıyoruz.',
      'En sık sebep olduğumuz iyileştirmeler: kritik render path optimizasyonu, gereksiz JavaScript bundle\'ının çıkarılması, görsel teslim stratejisi, veritabanı sorgu indeksleri ve cache katmanı tasarımı.',
    ],
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
    process: [
      {
        step: '01',
        title: 'Ölçüm ve profil çıkarma',
        description:
          'Mevcut performans baseline\'ını detaylı ölçüyoruz: Core Web Vitals, sunucu yanıt süreleri, veritabanı sorgu süreleri.',
      },
      {
        step: '02',
        title: 'Önceliklendirme',
        description:
          'En yüksek etkili iyileştirmeleri çıkarıp efor/getiri analizi yapıyoruz. Bütün her şeyi optimize etmiyor, en önemli %20\'sine odaklanıyoruz.',
      },
      {
        step: '03',
        title: 'Uygulama',
        description:
          'Optimizasyonları aşamalı olarak canlıya alıyoruz, her değişikliğin etkisini ölçüyoruz.',
      },
      {
        step: '04',
        title: 'Doğrulama ve raporlama',
        description:
          'Önce/sonra karşılaştırması ve gelecek için izleme dashboard\'ları kuruyoruz.',
      },
    ],
    faq: [
      {
        question: 'Performans denetimi sonrası garanti veriyor musunuz?',
        answer:
          'Evet. Belirli Core Web Vitals hedeflerini sözleşmeye bağlıyoruz; tutturulamazsa ek ücret alınmaz. Bunu yapabilmek için önce ulaşılabilir bir hedef belirliyoruz.',
      },
      {
        question: 'Ne kadar süre içinde sonuç alınır?',
        answer:
          'Hızlı kazanımlar (görsel optimizasyonu, kritik CSS, gereksiz JavaScript) genelde 1-2 hafta. Mimari iyileştirmeler 4-8 hafta. Tipik proje süresi 4-6 hafta.',
      },
      {
        question: 'Mevcut altyapımı değiştirmek zorunda mıyım?',
        answer:
          'Çoğunlukla hayır. Mevcut çatı (WordPress, Laravel, eski Next.js) üzerinde çalışıp çıkarılabilir kazanımları sağlayabiliyoruz. Yeniden yazma kararı, ancak mimari sorunlar belirlenirse gündeme geliyor.',
      },
    ],
    relatedProjects: ['e-ticaret-performans-optimizasyonu', 'saas-rapor-platformu'],
  },
  {
    slug: 'teknik-danismanlik',
    number: '05',
    shortTitle: 'Teknik Danışmanlık',
    title: 'Teknik Danışmanlık',
    metaTitle: 'Teknik Danışmanlık & Fractional CTO Hizmeti',
    metaDescription:
      'Mimari kararlardan ekip yapılandırmasına kadar mühendislik süreçlerinize stratejik danışmanlık. Tam zamanlı CTO\'nun erken olduğu ekipler için.',
    description:
      'Mimari kararlardan kod kalitesine, ekip yapılandırmasından teknoloji seçimine kadar mühendislik süreçlerinize stratejik danışmanlık sağlıyoruz. CTO seviyesinde teknik vizyona ihtiyaç duyan ancak tam zamanlı pozisyon henüz erken olan ekipler için ideal bir model.',
    longDescription: [
      'Birçok büyüyen şirket aynı yere gelir: teknik kararlar zorlaşmıştır, kod tabanı yavaşlamaya başlamıştır, ekip büyüyor ama netlik azalıyor. Tam zamanlı CTO ise henüz çok erken. İşte burada fractional teknik danışmanlık çok değerli.',
      'Haftada birkaç saat, ayda birkaç gün veya üç aylık dönüşüm projeleri olarak çalışıyoruz. Karar verme yetkimizi kullanmıyor, ekip içindeki sorumlu kişilerin daha doğru kararlar vermesine destek oluyoruz.',
      'Hizmet sınırı net: kod yazmıyoruz (gerekirse ayrı ekibimiz devreye giriyor); süreç tasarlıyor, mimari değerlendiriyor, teknoloji seçimi yapıyor, ekip mentörlüğü sağlıyoruz.',
    ],
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
    process: [
      {
        step: '01',
        title: 'Mevcut durum analizi',
        description:
          'Kod tabanı, mimari, ekip yapısı ve süreçleri 1-2 hafta içinde değerlendiriyoruz.',
      },
      {
        step: '02',
        title: 'Yol haritası',
        description:
          '3, 6 ve 12 aylık planı çıkarıyoruz. Hangi sorunu hangi sırayla çözeceğimiz net.',
      },
      {
        step: '03',
        title: 'Sürekli destek',
        description:
          'Haftalık check-in, code review, kritik kararlarda hızlı müdahale. Ekibinizin parçası gibi çalışıyoruz.',
      },
      {
        step: '04',
        title: 'Geçiş ve ölçüm',
        description:
          'Belirli bir noktada içeriden bir teknik liderle çalışmaya geçiş; başarıyı önceden tanımlanmış metriklerle ölçüyoruz.',
      },
    ],
    faq: [
      {
        question: 'Fractional CTO ne kadar sürede etki gösterir?',
        answer:
          'İlk hızlı kazanımlar 4-6 hafta içinde. Yapısal değişiklikler (mimari, ekip yapısı) 3-6 ay. Tam vade dönüşümü 12 ay civarında.',
      },
      {
        question: 'Ne kadar süre çalışıyorsunuz?',
        answer:
          'Minimum 3 ay, çoğunlukla 6-12 ay. Hedef daimi olmak değil, sizi tam zamanlı bir teknik lidere hazır hale getirmek.',
      },
      {
        question: 'Saat başı mı, paket olarak mı çalışıyorsunuz?',
        answer:
          'Aylık paket modeliyle çalışıyoruz: 20 saat, 40 saat veya tam dönüşüm projesi. Saat başı çalışma kısa süreli özel ihtiyaçlarda mümkün.',
      },
    ],
    relatedProjects: ['devops-modernizasyon', 'lojistik-yonetim-platformu'],
  },
  {
    slug: 'devops-altyapi',
    number: '06',
    shortTitle: 'DevOps & Altyapı',
    title: 'DevOps & Altyapı',
    metaTitle: 'DevOps & Altyapı | CI/CD, Docker, Sunucu Yönetimi',
    metaDescription:
      'Sürekli entegrasyon ve dağıtım hatları, container teknolojileri, sunucu yönetimi ve izlenebilirlik altyapısı. Modern, güvenli, hızlı yayın.',
    description:
      'Sürekli entegrasyon ve dağıtım hatları, container teknolojileri, izlenebilirlik altyapısı ve sunucu yönetimi ile geliştirme süreçlerinizi modernize ediyoruz. Geliştirme hızını artırırken; güvenliği, gözlemlenebilirliği ve üretim kararlılığını koruyoruz.',
    longDescription: [
      'DevOps, son yıllarda popülerleşen ama hâlâ çoğu şirkette tam oturmamış bir disiplin. Manuel deploy süreçleri, kötü yapılandırılmış sunucular, yetersiz log toplama, üretimde gözlemlenemezlik — hepsi sıkça gördüğümüz problemler.',
      'Biz DevOps\'u sadece teknik bir uygulama değil, bir kültür değişikliği olarak ele alıyoruz. CI/CD pipeline\'ı sadece bir araç değil; hızlı geri bildirim, küçük yayınlar, otomatik testler ve güvenli rollback gibi prensiplerin uygulanması.',
      'Cloud (AWS, GCP, Hetzner) veya on-premise; Docker tabanlı dağıtım; NGINX reverse proxy; PM2 process yönetimi; Cloudflare CDN ve DDoS koruması; Sentry ve Grafana ile gözlemleme. Hangi ihtiyacınız olursa olsun ölçekli kurulum yapabiliyoruz.',
    ],
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
    process: [
      {
        step: '01',
        title: 'Altyapı denetimi',
        description:
          'Mevcut sunucu, deploy ve gözlemleme yapısını çıkarıyoruz; risk noktalarını belirliyoruz.',
      },
      {
        step: '02',
        title: 'Pipeline tasarımı',
        description:
          'GitHub Actions, GitLab CI veya benzer bir araçta test-build-deploy hattını tasarlıyoruz.',
      },
      {
        step: '03',
        title: 'Sertleştirme ve izleme',
        description:
          'SSH, firewall, fail2ban, otomatik güncellemeler ve log/metrik toplama altyapısı standart.',
      },
      {
        step: '04',
        title: 'Eğitim ve devir',
        description:
          'Tüm dokümantasyon, runbook\'lar ve eğitim ile sistemi ekibinize devrediyoruz.',
      },
    ],
    faq: [
      {
        question: 'Kubernetes mi, basit Docker mı?',
        answer:
          'Çoğu projede Docker + PM2 + NGINX yeterli. Kubernetes\'i sadece çoklu servis, çoklu sunucu ve gerçek bir orkestrasyon ihtiyacı varsa öneriyoruz; aksi halde operasyonel maliyeti çok yüksek.',
      },
      {
        question: 'AWS yerine VPS yeterli olur mu?',
        answer:
          'Evet, çoğu zaman. Hetzner, Contabo veya benzer VPS\'lerde 10-20 USD\'lik sunucularda yüz binlerce ziyaretçiye hizmet verebiliyoruz. AWS sadece spesifik servis ihtiyaçları (Lambda, RDS, S3) varsa anlamlı.',
      },
      {
        question: 'Yedekleme nasıl yapılıyor?',
        answer:
          'Veritabanı için günlük tam + saatlik artımlı yedek (S3 veya Backblaze B2). Sunucu yapılandırması Ansible veya benzer IaC ile sürüm kontrolünde. Disaster recovery testleri yılda en az iki kez.',
      },
    ],
    relatedProjects: ['devops-modernizasyon', 'odeme-entegrasyonu-altyapisi'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServices(): Service[] {
  return services;
}
