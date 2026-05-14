export type LandingService = {
  title: string;
  description: string;
  href: string;
};

export type LandingHighlight = {
  title: string;
  description: string;
};

export type LandingFAQ = {
  question: string;
  answer: string;
};

export type LandingPage = {
  slug: string;
  category: 'Şehir' | 'Sektör' | 'Hizmet' | 'İlçe';
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    imageSrc: string;
    imagePosition?: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  services: {
    eyebrow: string;
    title: string;
    items: LandingService[];
  };
  bullets: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  highlights: {
    eyebrow: string;
    title: string;
    description: string;
    items: LandingHighlight[];
  };
  faq: LandingFAQ[];
  cta: {
    title: string;
    description: string;
  };
};

export const landingPages: LandingPage[] = [
  {
    slug: 'kayseri-web-tasarim',
    category: 'Şehir',
    metaTitle: 'Kayseri Web Tasarım | Profesyonel Kurumsal Web Sitesi',
    metaDescription:
      'Kayseri\'de profesyonel web tasarım hizmeti. Kurumsal, mobil uyumlu, SEO odaklı modern web siteleri. Şeffaf fiyat, hızlı teslim, yerel destek.',
    hero: {
      eyebrow: 'Kayseri · Web tasarım',
      title: 'Kayseri\'de profesyonel web tasarım',
      description:
        'Markanızı doğru yansıtan, mobilde kusursuz çalışan ve Google\'da bulunabilen modern web siteleri. Tasarımdan yayına kadar uçtan uca süreç yönetimi.',
      imageSrc: '/kayseri-1.jpg',
    },
    intro: {
      eyebrow: 'Yaklaşımımız',
      title: 'Sadece güzel değil; sonuç odaklı tasarım',
      paragraphs: [
        'Kayseri\'deki firmaların büyük çoğunluğu hâlâ 2015\'ten kalma şablon temalarla, mobilde okunmayan yazılarla ve dakikalarca yüklenen sitelerle ziyaretçi kaybediyor. Biz bu döngüyü kırmak için varız.',
        'Her projeye marka kimliği ve hedef kitle analizi ile başlıyoruz. Tasarım kararlarımızı estetik kaygılardan değil, dönüşüm hedeflerinden alıyoruz. Bir kullanıcı sitenize geldiğinde 3 saniye içinde "ne yapıyorsunuz, neden size güvenmeliyim, nasıl iletişime geçerim" sorularına cevap bulmalı.',
      ],
    },
    services: {
      eyebrow: 'Hizmet kapsamı',
      title: 'Kayseri web tasarım paketinde neler var?',
      items: [
        {
          title: 'Mobil uyumlu kurumsal site',
          description:
            'Telefondan tablete kadar tüm cihazlarda kusursuz görünen, hızlı yüklenen tasarım.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'SEO altyapısı',
          description:
            'Google\'ın aradığı teknik kriterler — site hızı, semantik HTML, meta veriler, sitemap.',
          href: '/services/performans-optimizasyonu',
        },
        {
          title: 'İçerik yönetim paneli',
          description:
            'Kendi içeriğinizi (yazı, görsel, ürün) kolayca güncelleyebileceğiniz yönetim paneli.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'WhatsApp ve form entegrasyonu',
          description:
            'Ziyaretçilerin tek tıkla iletişime geçebileceği WhatsApp butonu ve mail bildirimli form.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Hosting ve SSL',
          description:
            'Kayseri\'den hızlı erişim için optimize sunucu, ücretsiz SSL ve günlük yedekleme.',
          href: '/services/devops-altyapi',
        },
        {
          title: 'Eğitim ve destek',
          description:
            'Site teslim sonrası 1 yıl ücretsiz teknik destek ve panelde nasıl içerik gireceğinize dair video eğitim.',
          href: '/services/teknik-danismanlik',
        },
      ],
    },
    bullets: {
      eyebrow: 'Uygun sektörler',
      title: 'Hangi Kayseri firmalarına uygun?',
      description:
        'Web tasarım hizmetimiz Kayseri\'nin önde gelen sektörlerine özel olarak şekillendirilebilir:',
      items: [
        'İmalat ve sanayi firmaları',
        'Mobilya ve mefruşat üreticileri',
        'Lojistik ve nakliye',
        'İnşaat ve müteahhitlik',
        'Hukuk büroları ve danışmanlık',
        'Sağlık ve estetik klinikler',
        'Eğitim kurumları',
        'Restoran ve kafeler',
      ],
    },
    highlights: {
      eyebrow: 'Neden biz?',
      title: 'Kayseri web tasarım firmaları arasında farkımız',
      description: '',
      items: [
        {
          title: 'Tema değil, özel tasarım',
          description:
            'WordPress şablonu yapıştırmıyoruz. Markanıza özel, sıfırdan tasarlanmış arayüz.',
        },
        {
          title: 'Şeffaf fiyat',
          description:
            'Net teklif, sürpriz ek ücret yok. Hangi özellik ne kadar, baştan görüyorsunuz.',
        },
        {
          title: 'Yerel destek',
          description:
            'Kayseri\'desiniz, biz de Kayseri\'deyiz. Gerektiğinde ofise gelir, yüz yüze konuşuruz.',
        },
        {
          title: 'Sahiplik sizde',
          description:
            'Domain, kod ve içerik tamamen sizin. İstediğiniz zaman başka bir firmaya geçebilirsiniz.',
        },
      ],
    },
    faq: [
      {
        question: 'Kayseri\'de web tasarım fiyatları ne kadar?',
        answer:
          'Tek sayfalık tanıtım sitesinden başlayarak çok sayfalı kurumsal siteye kadar geniş bir yelpaze var. Genel olarak 5-7 sayfalık kurumsal bir Kayseri web tasarım projesi için orta segmentteyiz; net rakam için 30 dakikalık ücretsiz keşif görüşmesi yapıyoruz.',
      },
      {
        question: 'Site ne kadar sürede teslim edilir?',
        answer:
          'Standart kurumsal site için ortalama 2-4 hafta. Tasarım onayı, içerik tedariki ve geri bildirim hızı süreyi etkileyen ana faktörler. Brief net olduğunda 10 günde teslim ettiğimiz projeler de var.',
      },
      {
        question: 'Mevcut sitemi yenileyebilir misiniz?',
        answer:
          'Evet. Mevcut WordPress, Wix veya statik sitenizi modern bir altyapıya taşıyabiliriz. Önce mevcut sitenizi analiz edip neyin kalacağını ve neyin değişeceğini birlikte planlıyoruz.',
      },
      {
        question: 'Site sonrası içerik güncellemesi yapacak mıyız?',
        answer:
          'Evet, kendi içeriğinizi güncelleyebileceğiniz bir yönetim paneli teslim ediyoruz. İsterseniz aylık bakım paketi ile içerik yönetimini de biz devralırız.',
      },
    ],
    cta: {
      title: 'Kayseri\'de modern bir web sitesine hazır mısınız?',
      description:
        '30 dakikalık ücretsiz keşif görüşmesinde ihtiyaçlarınızı dinleyip size özel çözüm önerelim.',
    },
  },

  {
    slug: 'kayseri-e-ticaret-yazilim',
    category: 'Şehir',
    metaTitle: 'Kayseri E-Ticaret Yazılım | Online Satış Sitesi Kurulumu',
    metaDescription:
      'Kayseri\'de e-ticaret sitesi kurulumu ve özel e-ticaret yazılımı. Shopify, WooCommerce veya tamamen özel altyapı. Ürün, ödeme, kargo entegrasyonları dahil.',
    hero: {
      eyebrow: 'Kayseri · E-ticaret',
      title: 'Kayseri\'de online satışa geçişin en hızlı yolu',
      description:
        'Mağazanızı internete taşıyıp Türkiye geneline ürün satmaya başlayın. Hazır altyapı veya tamamen özel yazılım — hangisi size uygunsa onu kuruyoruz.',
      imageSrc: '/kayseri-2.jpg',
    },
    intro: {
      eyebrow: 'E-ticarete bakış',
      title: 'Kayseri\'den Türkiye\'ye satış',
      paragraphs: [
        'Kayseri\'nin imalat ve ticaret gücü, online kanallara taşındığında ciddi bir büyüme potansiyeli barındırıyor. Türkiye e-ticaret pazarı son üç yılda iki katına çıktı; ama yerel firmaların büyük çoğunluğu bu büyümeden hak ettiği payı alamıyor çünkü altyapıları yetersiz.',
        'Doğru e-ticaret yazılımı; ürün yönetimi, ödeme tahsilat, kargo entegrasyonu ve pazarlama otomasyonu gibi parçaların bir arada çalıştığı bir sistemdir. Hangisinin size uygun olduğunu firmanızın ölçeğine, ürün sayınıza ve operasyon karmaşıklığınıza göre birlikte belirliyoruz.',
      ],
    },
    services: {
      eyebrow: 'Çözüm seçenekleri',
      title: 'Kayseri e-ticaret yazılım paketleri',
      items: [
        {
          title: 'Shopify mağaza kurulumu',
          description:
            'Hızlı başlangıç için ideal. 1-2 hafta içinde mağazanız satış yapmaya başlayabilir.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'WooCommerce kurulumu',
          description:
            'WordPress tabanlı, esnek ve aylık bedeli düşük. Türkçe entegrasyonlar mevcut.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Özel e-ticaret yazılımı',
          description:
            'Karmaşık ürün konfigürasyonları, B2B fiyatlandırma, çok depolu stok için sıfırdan kurulum.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Ödeme entegrasyonları',
          description:
            'iyzico, PayTR, Stripe, Garanti, İş Bankası — tüm yerel sanal POS\'lar entegre edilir.',
          href: '/services/backend-api',
        },
        {
          title: 'Kargo ve fatura',
          description:
            'Yurtiçi, MNG, Aras, PTT API\'leri ve e-arşiv fatura entegrasyonları kurulur.',
          href: '/services/backend-api',
        },
        {
          title: 'Pazaryeri senkronu',
          description:
            'Trendyol, Hepsiburada, n11 ile stok ve sipariş senkronizasyonu.',
          href: '/services/backend-api',
        },
      ],
    },
    bullets: {
      eyebrow: 'Sektörel deneyim',
      title: 'Hangi ürün tipleri için uygun?',
      description:
        'Kayseri\'nin güçlü olduğu sektörlerde e-ticaret kurulumu yapıyoruz:',
      items: [
        'Mobilya ve ev tekstili',
        'Halı ve kilim',
        'Mutfak eşyaları',
        'Hediyelik ve aksesuar',
        'Gıda ve şarküteri ürünleri',
        'Yapı malzemeleri',
        'Otomotiv yedek parça',
        'B2B toptan satış',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'Sadece site değil, satış makinesi',
      description: '',
      items: [
        {
          title: 'Mobil ödeme akışı',
          description:
            'Mobilden alışverişin %70\'ini oluşturduğu bir dönemde, mobil ödeme akışı en üst öncelik.',
        },
        {
          title: 'SEO ve hız',
          description:
            'Ürün sayfalarınız Google\'da bulunabilir olsun diye teknik SEO standartlarımız var.',
        },
        {
          title: 'KVKK uyumlu',
          description:
            'Müşteri verilerinizi kanuna uygun saklıyoruz; çerez bildirimi ve veri koruma süreçleri kurulu.',
        },
        {
          title: 'Eğitim',
          description:
            'Sipariş yönetimi, ürün ekleme, kargo etiketleme — tüm süreçleri ekibinize öğretiyoruz.',
        },
      ],
    },
    faq: [
      {
        question: 'Hangi altyapıyı seçmeliyim, Shopify mi özel mi?',
        answer:
          '500\'den az ürün ve standart işleyiş varsa Shopify yeterli. Çok depolu, B2B fiyat seviyeli, özel ürün konfigüratörlü süreçler için özel yazılım daha uygun. Ücretsiz keşif görüşmemizde sizin için doğru olanı birlikte değerlendiriyoruz.',
      },
      {
        question: 'Aylık masraf ne kadar?',
        answer:
          'Shopify temel paket aylık 30-40 USD civarı; WooCommerce için sadece hosting (~150 TL/ay) yeterli. Özel yazılımda ise sunucu maliyeti aylık 200-500 TL. Pazaryeri komisyonları, ödeme komisyonları ayrı kalemler.',
      },
      {
        question: 'Sanal POS başvurusunda yardımcı olur musunuz?',
        answer:
          'Evet, iyzico ve PayTR başvurularında belge hazırlamada yönlendirme yapıyoruz. Banka sanal POS\'ları için doğrudan başvurunuzu yapmanız gerekir; biz teknik entegrasyonu üstleniyoruz.',
      },
      {
        question: 'Site satışa başladıktan sonra destek var mı?',
        answer:
          'Standart paketlerde 3 ay teknik destek dahil. Sonrası için aylık bakım anlaşması yapıyoruz; 7/24 izleme, güncelleme ve acil müdahale içeriyor.',
      },
    ],
    cta: {
      title: 'Kayseri\'de e-ticarete başlamak için doğru zaman',
      description:
        'Mağazanızı online taşıyalım, Türkiye\'ye satış yapalım. 30 dakikalık ücretsiz görüşmeyle başlayalım.',
    },
  },

  {
    slug: 'kayseri-mobil-uygulama',
    category: 'Şehir',
    metaTitle: 'Kayseri Mobil Uygulama | iOS ve Android Uygulama Geliştirme',
    metaDescription:
      'Kayseri\'de mobil uygulama geliştirme. iOS ve Android için müşteri uygulaması, saha personeli uygulaması, randevu ve sipariş uygulamaları.',
    hero: {
      eyebrow: 'Kayseri · Mobil',
      title: 'Kayseri\'de mobil uygulama geliştirme',
      description:
        'iOS ve Android için tek kod tabanından native performansta uygulamalar. App Store ve Google Play\'de yayında olacak şekilde uçtan uca süreç.',
      imageSrc: '/kayseri-3.jpg',
    },
    intro: {
      eyebrow: 'Mobil yaklaşımı',
      title: 'Native değil cross-platform yeterli mi?',
      paragraphs: [
        'Kayseri\'deki çoğu firma için React Native veya Flutter ile geliştirilmiş cross-platform bir uygulama, hem maliyet hem de hızlı pazara çıkış açısından native\'den çok daha avantajlı. Aynı kod tabanı iki platformda çalışır, bakım ve güncelleme süreçleri yarıya iner.',
        'Native iOS/Android sadece çok özel donanım erişimi (Bluetooth Low Energy, ARKit, ileri kamera kontrolü) gerektiren uygulamalarda anlamlı. Geri kalan %90 kullanım senaryosunda cross-platform yeterli ve mantıklıdır.',
      ],
    },
    services: {
      eyebrow: 'Uygulama tipleri',
      title: 'Kayseri\'de geliştirdiğimiz mobil uygulama türleri',
      items: [
        {
          title: 'Müşteri sadakat uygulaması',
          description:
            'Restoran, kafe, kuaför müşterilerine özel kampanya ve sadakat puanı uygulaması.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Saha personeli uygulaması',
          description:
            'Servis, kurye, satış temsilcileri için görev takibi ve raporlama uygulaması.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Randevu uygulaması',
          description:
            'Klinik, kuaför, danışmanlık için müşteri randevu alma uygulaması.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'E-ticaret uygulaması',
          description:
            'Mevcut online mağazanız için iOS ve Android uygulaması, push bildirim ile sipariş yönetimi.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'B2B sipariş uygulaması',
          description:
            'Bayi, distribütör ve toptan müşteriler için sipariş ve cari görüntüleme.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'İç operasyon uygulaması',
          description:
            'Üretim takibi, depo yönetimi, kalite kontrol gibi kurumsal süreçler için özel uygulama.',
          href: '/services/ozel-yazilim',
        },
      ],
    },
    bullets: {
      eyebrow: 'Teknoloji',
      title: 'Kullandığımız mobil teknolojiler',
      description: 'Modern, sürdürülebilir ve topluluk desteği güçlü teknolojilerle çalışıyoruz:',
      items: [
        'React Native (Meta tarafından sürdürülüyor)',
        'Expo (hızlı yayın için)',
        'TypeScript (tip güvenliği)',
        'Firebase / Supabase (backend)',
        'Push bildirim altyapıları',
        'Apple App Store yayını',
        'Google Play yayını',
        'CI/CD ile otomatik build',
      ],
    },
    highlights: {
      eyebrow: 'Süreç',
      title: 'Kayseri\'den uygulamaya nasıl gideriz',
      description: '',
      items: [
        {
          title: 'Keşif',
          description:
            'Hangi problemi çözeceğinizi netleştiriyor, hedef kullanıcıyı ve özellikleri haritalıyoruz.',
        },
        {
          title: 'Tasarım',
          description:
            'Mobil ekranlar için özel UX/UI; Figma\'da prototip onayı sonrası kodlama başlıyor.',
        },
        {
          title: 'Geliştirme',
          description:
            'İki haftalık sprintler halinde geliştirme; her sprint sonu test edilebilir bir versiyon.',
        },
        {
          title: 'Yayın ve destek',
          description:
            'Apple ve Google mağazalarına yayın, ardından 3 ay ücretsiz hata düzeltme.',
        },
      ],
    },
    faq: [
      {
        question: 'Mobil uygulama maliyeti ne kadar?',
        answer:
          'Basit bir randevu uygulaması ile karmaşık bir B2B sipariş uygulaması arasında 5-10 kat fark olabiliyor. Net rakam için özellik listesini birlikte çıkarıp scope tanımlamak gerek; ücretsiz keşif görüşmesinde tahmini maliyet ve süre veriyoruz.',
      },
      {
        question: 'App Store ve Google Play\'e yayın süreci nasıl?',
        answer:
          'Apple Developer hesabı yıllık 99 USD, Google Play tek seferlik 25 USD ücret istiyor. Hesapları açıyor, uygulamayı yayına hazırlıyor ve onay sürecini takip ediyoruz. Apple onayı 2-7 gün, Google 1-3 gün sürüyor.',
      },
      {
        question: 'Backend dahil mi?',
        answer:
          'Standart paketlerde Firebase veya Supabase ile backend dahil. Özel ihtiyaçlar (karmaşık iş kuralları, mevcut ERP entegrasyonu) için ayrı backend geliştirme yapıyoruz.',
      },
      {
        question: 'Uygulama yayında olduktan sonra güncelleme nasıl?',
        answer:
          'Cross-platform avantajı: çoğu güncelleme \'over-the-air\' yapılabiliyor (kullanıcı mağazadan tekrar indirmeden). Büyük değişikliklerde mağaza güncellemesi yapıyoruz.',
      },
    ],
    cta: {
      title: 'Kayseri\'den mobil uygulamaya hazır mısınız?',
      description:
        'Fikrinizi anlatın; özellik listesi, tahmini süre ve yatırım tutarını ücretsiz çıkaralım.',
    },
  },

  {
    slug: 'kayseri-ozel-yazilim',
    category: 'Şehir',
    metaTitle: 'Kayseri Özel Yazılım | İşletmeye Özel Sistem Geliştirme',
    metaDescription:
      'Kayseri\'de özel yazılım geliştirme. Hazır paketin yetmediği iç süreçler için tamamen size özel ERP, üretim takip, depo yönetim ve operasyon yazılımları.',
    hero: {
      eyebrow: 'Kayseri · Özel yazılım',
      title: 'İşletmenize özel yazılım çözümleri',
      description:
        'Hazır paketler ihtiyacınızı karşılamadığında; süreçlerinizi haritalandırıp size özel, sıfırdan yazılım geliştiriyoruz. Üretim, lojistik, perakende — sektör fark etmiyor.',
      imageSrc: '/kayseri-4.jpg',
    },
    intro: {
      eyebrow: 'Ne zaman özel yazılım?',
      title: 'Hazır paket vs özel yazılım',
      paragraphs: [
        'Kayseri\'de pek çok firma; SAP, Logo, Netsis gibi hazır ERP\'lerin tüm modüllerini kullanmaya çalışırken iş süreçlerini yazılıma uydurmak zorunda kalıyor. Oysa olması gereken tersi: yazılım, iş sürecinize uymalı.',
        'Hazır paketin sınırlarına dayandığınızda ya da Excel ile yürüttüğünüz kritik bir süreç haline geldiğinde, özel yazılım gündeme gelir. Genellikle yatırım iki yıl içinde kendini geri ödüyor — kayıp zaman, hatalı veri ve operasyonel verimsizlikten gelen tasarrufla.',
      ],
    },
    services: {
      eyebrow: 'Çözüm alanları',
      title: 'Kayseri firmalarına geliştirdiğimiz özel yazılımlar',
      items: [
        {
          title: 'Üretim takip sistemi',
          description:
            'Hangi parça hangi tezgahta, ne aşamada — gerçek zamanlı üretim görünürlüğü.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Depo yönetim sistemi',
          description:
            'Çok depolu, parti/seri takibi, raf bazlı stok hareketi yönetimi.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'CRM ve satış yönetimi',
          description:
            'Müşteri görüşme geçmişi, teklif yönetimi, satış hunisi ve performans raporu.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Saha operasyon yönetimi',
          description:
            'Servis ve montaj ekiplerinin görev dağılımı, takip ve raporlama sistemi.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'B2B sipariş portalı',
          description:
            'Bayi ve distribütörlerinizin online sipariş geçtiği özel portal.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Logo / Netsis entegrasyonu',
          description:
            'Mevcut ERP\'nizden veri çeken / besleyen özel modüller ve raporlar.',
          href: '/services/backend-api',
        },
      ],
    },
    bullets: {
      eyebrow: 'Sektörel deneyim',
      title: 'Hangi sektörler için yazılım geliştirdik',
      description: 'Kayseri ekonomisinin önemli sektörlerinde özel yazılım deneyimimiz var:',
      items: [
        'Mobilya ve mefruşat üretimi',
        'Tekstil ve halı imalatı',
        'Otomotiv yan sanayi',
        'Lojistik ve nakliye',
        'Yapı malzemeleri ticareti',
        'Gıda imalatı',
        'Sağlık ve klinik yönetimi',
        'Eğitim kurumları',
      ],
    },
    highlights: {
      eyebrow: 'Yaklaşımımız',
      title: 'Özel yazılım nasıl yapılıyor?',
      description: '',
      items: [
        {
          title: 'Süreç haritalama',
          description:
            'Önce işinizi anlıyoruz. Excel\'lerinizi, formlarınızı, akışlarınızı haritalıyoruz.',
        },
        {
          title: 'Aşamalı teslim',
          description:
            'Her şeyi 6 ay sonra teslim etmiyoruz. 2-4 haftada ilk kullanılabilir versiyon.',
        },
        {
          title: 'Ekibinizle birlikte',
          description:
            'Sürecin içinde olan kişilerle birlikte tasarlıyoruz; en iyi geri bildirim onlardan gelir.',
        },
        {
          title: 'Kaynak kodu sizin',
          description:
            'Her şey size teslim. Sürdürülebilirlik için belge ve eğitim de dahil.',
        },
      ],
    },
    faq: [
      {
        question: 'Özel yazılım maliyeti ne kadar?',
        answer:
          'Scope\'a göre çok değişken. Küçük bir iç araç (~50K TL) ile orta ölçekli üretim takip sistemi (~300-500K TL) arasında geniş bir aralık var. Ücretsiz keşif görüşmesinde gerçekçi tahmin veriyoruz.',
      },
      {
        question: 'Logo veya Netsis ile entegre olabilir mi?',
        answer:
          'Evet. Logo Tiger ve Netsis\'in REST API\'leri ile veri alışverişi yapan özel modüller geliştiriyoruz. Mevcut ERP yapınızı ezmeden, etrafına çevrelenen ek katmanlar kuruyoruz.',
      },
      {
        question: 'Yazılım nerede çalışacak, sunucu nereden?',
        answer:
          'Tercihinize göre: kendi sunucunuzda (on-premise), bulutta (Hetzner, AWS, DigitalOcean) veya hibrit. Verilerinizin Türkiye\'de kalması gerekiyorsa Türk veri merkezleri öneriyoruz.',
      },
      {
        question: 'Bakım ve güncelleme nasıl?',
        answer:
          'Standart paketlerde 6 ay ücretsiz hata düzeltme. Sonrası için aylık bakım anlaşması; 7/24 izleme, güvenlik güncellemeleri, yeni özellik geliştirme dahil.',
      },
    ],
    cta: {
      title: 'Kayseri\'de özel yazılım yatırımı için doğru zaman',
      description:
        'Süreçlerinizi haritalandırıp; çözümün ne olduğunu, ne kadar süreceğini ücretsiz değerlendirelim.',
    },
  },

  {
    slug: 'kayseri-restoran-web-sitesi',
    category: 'Sektör',
    metaTitle: 'Kayseri Restoran Web Sitesi | Online Menü ve Rezervasyon',
    metaDescription:
      'Kayseri restoranları için web sitesi tasarımı, online menü, rezervasyon sistemi ve yemek siparişi altyapısı. Mobil uyumlu, hızlı, SEO odaklı.',
    hero: {
      eyebrow: 'Sektör · Restoran',
      title: 'Kayseri restoranlarına özel web sitesi',
      description:
        'Müşterileriniz Google\'dan sizi arıyor. Modern bir web sitesi, online menü ve rezervasyon sistemi ile dijital varlığınızı tamamlayın.',
      imageSrc: '/kayseri-5.jpg',
    },
    intro: {
      eyebrow: 'Restoran dijitali',
      title: 'Restoran web sitesi neden önemli?',
      paragraphs: [
        'Bir müşteri yeni bir restoran arıyor. Önce Google\'a yazıyor. Karşısına çıkanlar; profesyonel sitesi olan, Google Maps\'te puanı yüksek, mobil uyumlu işletmeler. Sosyal medya tek başına yetmiyor; kendi alan adınızda, marka kontrolünde bir varlığınızın olması gerekiyor.',
        'İyi tasarlanmış bir restoran sitesi yalnızca bir broşür değildir; rezervasyon alır, menüyü gösterir, yemek siparişi sistemine bağlar, müşteri sadakat programını yönetir. Tüm bunları bir Instagram sayfası yapamaz.',
      ],
    },
    services: {
      eyebrow: 'Modüller',
      title: 'Kayseri restoran sitesi paketinde neler var?',
      items: [
        {
          title: 'Modern tasarım',
          description:
            'Mutfağınızı yansıtan, iştah açıcı görsellerle desteklenen marka odaklı tasarım.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Online menü',
          description:
            'Kategorili, fotoğraflı, fiyatlı dijital menü. Güncellemesi panelden 2 dakika.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Rezervasyon sistemi',
          description:
            'Müşterilerin masa rezerve edebileceği, size mail/SMS bildirim gönderen sistem.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Yemek siparişi entegrasyonu',
          description:
            'Yemeksepeti, Getir, Trendyol Yemek bağlantıları ve direkt sipariş alma altyapısı.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'QR menü',
          description:
            'Masa başında QR ile açılan dijital menü. Temassız, hızlı, çevreci.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Google Maps ve SEO',
          description:
            'Google İşletme Profili optimizasyonu ve "Kayseri en iyi restoran" gibi aramalarda görünürlük.',
          href: '/services/performans-optimizasyonu',
        },
      ],
    },
    bullets: {
      eyebrow: 'Restoran tipleri',
      title: 'Hangi tipte restoranlara hizmet veriyoruz',
      description:
        'Kayseri\'de farklı segmentlerden restoranlara web sitesi geliştirdik:',
      items: [
        'Fine dining ve özel mekanlar',
        'Aile restoranları',
        'Kebap ve mangal evleri',
        'Cafe ve bistro',
        'Pastane ve tatlıcılar',
        'Pizza ve fast food',
        'Vejeteryan ve sağlıklı yemek',
        'Kahvaltı salonları',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'Sosyal medyaya değil, kendi sitenize yatırım yapın',
      description: '',
      items: [
        {
          title: 'Sahiplik sizde',
          description:
            'Instagram bir gün hesabınızı kapatabilir. Kendi alan adınızda hiçbir platforma bağımlı değilsiniz.',
        },
        {
          title: 'Komisyonsuz sipariş',
          description:
            'Yemeksepeti %15-25 komisyon alır. Kendi sitenizden sipariş = %100 sizin.',
        },
        {
          title: 'Müşteri verisi',
          description:
            'Müşteri telefonu, e-postası ve tercihleri sizde. Pazarlama yapabilirsiniz.',
        },
        {
          title: 'SEO ile bedava müşteri',
          description:
            '"Kayseri kahvaltı", "Kayseri kebap" aramalarında ön sayfada çıkmak; her ay yüzlerce müşteri demek.',
        },
      ],
    },
    faq: [
      {
        question: 'Yemek sipariş sistemini sıfırdan mı kurmalıyım?',
        answer:
          'Şart değil. Yemeksepeti gibi platformlar zaten varsa, sitenize bağlantı koyabiliriz. Komisyonsuz direkt sipariş istiyorsanız ek bir modül kurarız; bu durumda sipariş yönetimi ve kurye organizasyonu sizde olur.',
      },
      {
        question: 'QR menü nasıl çalışıyor?',
        answer:
          'Her masa için özel QR kod basıyoruz. Müşteri telefonuyla okutunca tarayıcıda menü açılıyor; uygulama indirme yok. Menü güncelleme paneliniz var; fiyat değişikliklerini anında yansıtabiliyorsunuz.',
      },
      {
        question: 'Mevcut Instagram\'ım yeterli değil mi?',
        answer:
          'Sosyal medya ulaşım için iyi ama Google\'da bulunabilir olmak için yetmiyor. Türkiye\'de yeni restoran arayanların %70\'i Google\'dan başlıyor; sosyal medyaya değil. Web siteniz, Google\'daki yüzünüz.',
      },
      {
        question: 'Fiyat aralığı nedir?',
        answer:
          'Standart restoran sitesi paketimiz net teklifle sunuluyor. QR menü, rezervasyon sistemi ekledikçe fiyat artıyor; ama paket fiyatlarımız küçük işletmelere de ulaşılabilir seviyede.',
      },
    ],
    cta: {
      title: 'Restoranınızı Google\'da gerçekten görünür yapalım',
      description:
        'Kayseri\'de restoran sitesi yapımı için 30 dakikalık ücretsiz keşif görüşmesi.',
    },
  },

  {
    slug: 'kayseri-kafe-qr-menu',
    category: 'Sektör',
    metaTitle: 'Kayseri QR Menü Sistemi | Kafe ve Restoran Dijital Menü',
    metaDescription:
      'Kayseri\'deki kafe ve restoranlar için QR menü sistemi. Temassız menü, anlık fiyat güncelleme, çoklu dil desteği. Aylık abonelik veya tek seferlik kurulum.',
    hero: {
      eyebrow: 'Sektör · QR menü',
      title: 'Kayseri kafelerine özel QR menü sistemi',
      description:
        'Masa başında okutulan QR kod ile dijital menü. Fiyat değiştirmek menü bastırmaktan daha kolay; tek panelden tüm masalara anında yansıyor.',
      imageSrc: '/kayseri-1.jpg',
    },
    intro: {
      eyebrow: 'QR menü neden?',
      title: 'Basılı menünün maliyetini hesapladınız mı?',
      paragraphs: [
        'Klasik basılı menü; her fiyat güncellemesinde matbaa, her yıpranan menüde yenileme, her kategorik değişiklikte yeniden tasarım demek. Yıllık masraf hesaplandığında, QR menü sisteminin kendini kaç ayda amorti ettiği şaşırtıcı.',
        'Dijital menünün asıl gücü ise hız ve esneklik. Saat 17:00\'da happy hour fiyatlarına geçmek; pazartesi günü özel öğle menüsü göstermek; bir ürün biten ürünü saklamak — tek tık.',
      ],
    },
    services: {
      eyebrow: 'Özellikler',
      title: 'QR menü sisteminde neler var?',
      items: [
        {
          title: 'Çok dilli menü',
          description:
            'Türkçe, İngilizce, Arapça, Rusça — turist müşterileriniz kendi dilinde okusun.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Kategorili görsel menü',
          description:
            'Yemek fotoğrafları, alerjen bilgileri, içerikler — modern bir menü deneyimi.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Anlık fiyat güncelleme',
          description:
            'Panelden değiştir, tüm masalardaki menüde anında görünsün.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Stokta yok kontrolü',
          description:
            'Biten ürünü "stokta yok" olarak işaretle; menüde gri görünsün veya tamamen gizlensin.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Kampanya ve özel menüler',
          description:
            'Pazartesi happy hour, hafta sonu kahvaltı, özel günler — zamana göre menü.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Sipariş alma (opsiyonel)',
          description:
            'Müşteri menüden direkt sipariş ekleyip mutfağa düşürsün; garson çağırma butonu.',
          href: '/services/ozel-yazilim',
        },
      ],
    },
    bullets: {
      eyebrow: 'Kullanım alanları',
      title: 'Hangi mekanlar için uygun?',
      description: 'Kayseri\'de QR menü sistemini kuracağımız işletme tipleri:',
      items: [
        'Kafeler ve kahve dükkanları',
        'Restoran ve mangal evleri',
        'Pastaneler',
        'Bar ve pub\'lar',
        'Otel restoranları',
        'Kahvaltı salonları',
        'Pizza ve fast food',
        'Mall yemek alanları',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'Neden bizi tercih etmelisiniz',
      description: '',
      items: [
        {
          title: 'Yerel destek',
          description:
            'Kayseri\'desiniz, biz de Kayseri\'deyiz. QR menü sorununda yerinde müdahale.',
        },
        {
          title: 'Aylık abonelik veya tek seferlik',
          description:
            'Aylık SaaS modelimiz var ya da kendi sunucunuza kurup tek seferlik bedel.',
        },
        {
          title: 'Hızlı kurulum',
          description:
            '24-48 saat içinde menünüz dijital, QR kodlarınız basılı, masalara hazır.',
        },
        {
          title: 'Marka kimliği',
          description:
            'Hazır şablon değil; sizin renkleriniz, fontunuz, logonuzla özel tasarım.',
        },
      ],
    },
    faq: [
      {
        question: 'Aylık abonelik mi, tek seferlik kurulum mu?',
        answer:
          'İkisini de sunuyoruz. Aylık abonelik küçük işletmeler için uygun (sıfır kurulum bedeli, aylık düşük ödeme). Tek seferlik kurulum büyük işletmeler için: kendi sunucunuza, kendi alan adınıza, sınırsız menü güncelleme. Hangisinin size uygun olduğunu birlikte seçiyoruz.',
      },
      {
        question: 'Mevcut menü görsellerimi kullanabilir miyim?',
        answer:
          'Evet, mevcut görsellerinizi optimize edip kullanıyoruz. Görselleriniz yoksa veya yetersizse, profesyonel yemek fotoğrafçısı önerebiliyoruz.',
      },
      {
        question: 'QR kodlar nasıl üretiliyor, ben mi bastırıyorum?',
        answer:
          'Her masa için ayrı QR kod üretiyor, baskıya hazır PDF olarak teslim ediyoruz. Masa stickerı, çerçeve, ahşap stand gibi tercihlerinize göre yerel matbaa önerilerimiz var.',
      },
      {
        question: 'İnternet kesilse menü çalışır mı?',
        answer:
          'QR menü internet üzerinden açıldığı için müşterinin internetinin olması gerekiyor (mobil veri veya WiFi). İşletme WiFi\'ı sağlıyorsa hiç sorun olmuyor; çoğu kafede zaten misafir WiFi var.',
      },
    ],
    cta: {
      title: 'Kayseri\'de QR menüye geçmenin tam zamanı',
      description:
        'Kafenize özel QR menü sistemini 24-48 saatte kuralım. Önce ücretsiz keşif görüşmesi.',
    },
  },

  {
    slug: 'kayseri-klinik-randevu-sistemi',
    category: 'Sektör',
    metaTitle: 'Kayseri Klinik Randevu Sistemi | Online Hasta Yönetimi',
    metaDescription:
      'Kayseri\'deki klinik, muayenehane ve hastaneler için online randevu sistemi, hasta dosyası, SMS hatırlatma ve ödeme alma altyapısı.',
    hero: {
      eyebrow: 'Sektör · Sağlık',
      title: 'Kayseri klinikleri için randevu sistemi',
      description:
        'Hastalarınız 7/24 online randevu alsın, sekreter telefonla uğraşmasın. Hasta dosyası, SMS hatırlatma ve raporlama bir arada.',
      imageSrc: '/kayseri-2.jpg',
    },
    intro: {
      eyebrow: 'Klinik dijitali',
      title: 'Telefonla randevu çağı bitti',
      paragraphs: [
        'Kayseri\'deki kliniklerin büyük bölümü hâlâ telefonla randevu alıyor; sekreter mesai saatlerinde meşgul, hastalar bekliyor, randevular karışıyor. Online randevu sistemi bu döngüyü tamamen kırıyor.',
        'Hasta gece 23:00\'te bile telefonundan randevu alıyor, anında SMS onayı geliyor, randevudan 24 saat önce tekrar hatırlatma. Kaçırılan randevu oranı %30\'lardan %5\'lere düşüyor; sekreter operasyona vakit ayırıyor.',
      ],
    },
    services: {
      eyebrow: 'Modüller',
      title: 'Klinik yönetim sisteminde neler var?',
      items: [
        {
          title: 'Online randevu',
          description:
            'Hasta web sitesinden uygun saat seçip randevu alır; takvim anında güncellenir.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Hasta dosyası',
          description:
            'Tedavi geçmişi, reçeteler, görüntü/rapor ekleri, notlar — hepsi bir hasta kartında.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'SMS ve e-posta hatırlatma',
          description:
            'Otomatik randevu hatırlatması ve doğum günü kutlamaları.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Doktor takvim yönetimi',
          description:
            'Çok doktorlu klinikler için doktor bazlı takvim ve müsaitlik yönetimi.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Online ödeme',
          description:
            'Randevu sırasında veya sonrasında online ödeme alma; fatura otomasyonu.',
          href: '/services/backend-api',
        },
        {
          title: 'KVKK uyumlu altyapı',
          description:
            'Hasta verileri Türkiye\'de saklanır; kanuna uygun aydınlatma metni ve onam formları.',
          href: '/services/teknik-danismanlik',
        },
      ],
    },
    bullets: {
      eyebrow: 'Klinik tipleri',
      title: 'Hangi sağlık tesisleri için uygun?',
      description:
        'Kayseri\'de farklı sağlık alanlarına özel uyarlamalar yapıyoruz:',
      items: [
        'Diş klinikleri',
        'Estetik ve dermatoloji',
        'Fizik tedavi merkezleri',
        'Psikolog ve psikiyatri',
        'Beslenme ve diyet',
        'Çocuk doktoru muayenehanesi',
        'Göz hastalıkları',
        'Veteriner klinikleri',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'Klinik dijitalleşmesinin getirileri',
      description: '',
      items: [
        {
          title: 'Hasta sayısında artış',
          description:
            '7/24 randevu = mesai dışı talepleri kaçırmama. Yeni hasta sayısı %20-40 artar.',
        },
        {
          title: 'No-show azalır',
          description:
            'Otomatik hatırlatmalar sayesinde gelmeyen hasta oranı belirgin düşer.',
        },
        {
          title: 'Sekreter daha verimli',
          description:
            'Telefon trafiği azalır; sekreter resepsiyona ve hasta deneyimine odaklanır.',
        },
        {
          title: 'Veri ile karar',
          description:
            'Hangi tedavi en çok talep ediliyor, hangi gün/saat yoğun — gerçek verilerle planlama.',
        },
      ],
    },
    faq: [
      {
        question: 'KVKK uyumu nasıl sağlanıyor?',
        answer:
          'Hasta verileri Türkiye\'de bulunan veri merkezinde saklanıyor (yasal zorunluluk). Aydınlatma metni, açık rıza onayları, veri silme talepleri için süreçler kuruluyor. KVKK denetiminde gönül rahatlığıyla gösterebileceğiniz bir altyapı kuruyoruz.',
      },
      {
        question: 'Mevcut hasta verilerimi sisteme aktarabilir miyim?',
        answer:
          'Evet, Excel veya kullandığınız mevcut sistemden veri aktarımı yapıyoruz. Hasta kartları, randevu geçmişleri, dosya ekleri — toplu olarak yeni sisteme taşınıyor.',
      },
      {
        question: 'Çoklu doktor / çoklu klinik desteği var mı?',
        answer:
          'Evet. Birden fazla doktoru olan kliniklerde doktor bazlı takvim, çoklu şubesi olan zincir kliniklerde şube bazlı yönetim mevcut.',
      },
      {
        question: 'Sistem çökerse veriye nasıl ulaşılır?',
        answer:
          'Günlük otomatik yedekleme yapıyoruz; veriler iki ayrı lokasyonda saklanıyor. Bir sorun olduğunda 1-2 saatte yedekten geri yükleme yapılıyor; veri kaybı riski sıfıra yakın.',
      },
    ],
    cta: {
      title: 'Kayseri kliniğinizi dijitale taşıyalım',
      description:
        'Online randevu, hasta yönetimi ve SMS hatırlatma sistemini kuralım. 30 dakikalık ücretsiz görüşme.',
    },
  },

  {
    slug: 'kayseri-emlak-web-sitesi',
    category: 'Sektör',
    metaTitle: 'Kayseri Emlak Web Sitesi | İlan Yönetimli Ofis Sitesi',
    metaDescription:
      'Kayseri emlak ofisleri için ilan yönetim sistemli web sitesi. Sahibinden ve emlakjet entegrasyonu, harita, filtreleme, mobil uyumlu tasarım.',
    hero: {
      eyebrow: 'Sektör · Emlak',
      title: 'Kayseri emlak ofislerine özel web sitesi',
      description:
        'Kendi alan adınızda, kendi markanızda emlak portalı. İlan ekleme, harita gösterimi, gelişmiş filtreleme — sahibinden ve emlakjet bağımlılığını azaltın.',
      imageSrc: '/kayseri-3.jpg',
    },
    intro: {
      eyebrow: 'Emlak dijitali',
      title: 'Sahibinden\'e tek bağımlı kalmayın',
      paragraphs: [
        'Sahibinden.com ve emlakjet, emlak ofisleri için vazgeçilmez kanallar; ama tek başına yeterli değil. Aylık ilan ücreti ödüyorsunuz, üst paketler için aylar sürüyor, müşteri size değil platforma güveniyor.',
        'Kendi alan adınızda profesyonel bir emlak sitesi; markanızı kuruyor, organik trafik getiriyor, sahibinden\'e ödediğiniz tutarın bir kısmını kendinize çeviriyor. Üstüne; ilanlarınızı tek panelden hem sitenize hem sahibinden\'e gönderebiliyorsunuz.',
      ],
    },
    services: {
      eyebrow: 'Modüller',
      title: 'Emlak ofisi sitesinde neler var?',
      items: [
        {
          title: 'İlan yönetim paneli',
          description:
            'İlan ekle, fotoğraf yükle, fiyat güncelle — kolay arayüzlü panel.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Harita üzerinde gösterim',
          description:
            'Google Maps üzerinde ilan konumu; harita üzerinden filtreleme.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Gelişmiş filtreler',
          description:
            'Fiyat, oda sayısı, m², semt, ısıtma tipi — detaylı filtreleme arayüzü.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'WhatsApp ve form',
          description:
            'Her ilan için doğrudan WhatsApp butonu ve teklif/randevu formu.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Sahibinden senkron',
          description:
            'İlanlarınız sahibinden\'e otomatik gönderilsin; tek panelden iki kanal.',
          href: '/services/backend-api',
        },
        {
          title: 'SEO ile organik müşteri',
          description:
            '"Kayseri Talas satılık daire" gibi aramalarda organik olarak çıkın.',
          href: '/services/performans-optimizasyonu',
        },
      ],
    },
    bullets: {
      eyebrow: 'Emlak tipleri',
      title: 'Hangi emlak ofisleri için uygun?',
      description: 'Kayseri\'de farklı emlak segmentlerine site yapıyoruz:',
      items: [
        'Konut satış ve kiralama',
        'Lüks gayrimenkul',
        'İnşaat firması proje siteleri',
        'Ticari gayrimenkul',
        'Arsa ve tarla satışı',
        'Kiralık ofis ve dükkan',
        'Kayseri OSB sanayi parsel',
        'Devre mülk ve yatırım gayrimenkulü',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'Kendi sitenizin getirileri',
      description: '',
      items: [
        {
          title: 'Marka kimliği',
          description:
            'Müşteri sahibinden\'e değil, size güveniyor. Marka itibarınız büyür.',
        },
        {
          title: 'Komisyonsuz iletişim',
          description:
            'Müşteri direkt size ulaşıyor; platform aracılığı yok, daha yüksek dönüşüm.',
        },
        {
          title: 'Veriler sizde',
          description:
            'Kim hangi ilana baktı, hangi semt popüler — pazarlama için değerli veriler.',
        },
        {
          title: 'Organik trafik',
          description:
            'SEO uyumlu yapı sayesinde Google\'dan ücretsiz müşteri akışı.',
        },
      ],
    },
    faq: [
      {
        question: 'Sahibinden\'i tamamen bırakmam mı gerekiyor?',
        answer:
          'Hayır, ikisini birden kullanmak en mantıklı yol. Kendi siteniz markanızı, sahibinden ek görünürlüğü sağlıyor. Hatta sahibinden\'e otomatik ilan gönderme entegrasyonumuzla iki kanalı tek panelden yönetebilirsiniz.',
      },
      {
        question: 'Çok ilanım var, toplu yükleme nasıl?',
        answer:
          'Excel ile toplu ilan yükleme veya mevcut sahibinden hesabınızdan API ile aktarım yapıyoruz. İlk kurulumda yüzlerce ilanı saatler içinde sisteme alabiliriz.',
      },
      {
        question: 'Ekibimdeki danışmanlar kendi ilanlarını yönetebilir mi?',
        answer:
          'Evet, çok kullanıcılı yapı var. Her danışmanın kendi paneli, ilan eki, dosya yükleme yetkisi tanımlanır. Yöneticiler tüm panele erişir.',
      },
      {
        question: 'Mobil uyumlu mu?',
        answer:
          'Tabii. Emlak aramalarının %80\'i mobilde yapılıyor. Sitemiz mobil-öncelikli tasarlanıyor; mobilde haritada filtreleme ve fotoğraf galerisi mükemmel çalışıyor.',
      },
    ],
    cta: {
      title: 'Kayseri\'de emlak ofisinize özel site',
      description:
        'Sahibinden bağımlılığını azaltıp kendi marka portalınızı kuralım. Ücretsiz keşif görüşmesi.',
    },
  },

  {
    slug: 'kayseri-kuafor-randevu-sistemi',
    category: 'Sektör',
    metaTitle: 'Kayseri Kuaför Randevu Sistemi | Online Salon Yönetimi',
    metaDescription:
      'Kayseri kuaför ve güzellik salonları için online randevu sistemi, müşteri sadakat programı, SMS hatırlatma ve ekip yönetimi.',
    hero: {
      eyebrow: 'Sektör · Kuaför',
      title: 'Kayseri kuaförleri için randevu sistemi',
      description:
        'Müşteriniz Instagram\'dan değil, kendi sitenizden randevu alsın. Salon, çalışan, hizmet — hepsi tek panelden yönetilsin.',
      imageSrc: '/kayseri-4.jpg',
    },
    intro: {
      eyebrow: 'Salon dijitali',
      title: 'Defterle randevu yönetimi bitti',
      paragraphs: [
        'Kayseri\'deki çoğu kuaför ve güzellik salonu hâlâ kağıt deftere randevu yazıyor; arada karışıklık çıkıyor, çalışana göre takvim takip etmek zor, müşteri telefon açtığında haftanın hangi günü hangi saatin müsait olduğunu söylemek vakit alıyor.',
        'Online randevu sistemi sadece operasyonel rahatlık değil; aynı zamanda gelir artırıcı. Müşteri 7/24 randevu alıyor, biten randevu hatırlatması ile "saç kestirme zamanı geldi mi acaba" anı kaçmıyor, sadakat programı ile düzenli müşteri sayısı artıyor.',
      ],
    },
    services: {
      eyebrow: 'Modüller',
      title: 'Kuaför sistemi paketinde neler var?',
      items: [
        {
          title: 'Online randevu',
          description:
            'Müşteri hizmeti, çalışanı ve uygun saati seçip randevu alır.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Çalışan takvim yönetimi',
          description:
            'Her çalışanın takvimi ayrı; izinler, vardiya değişiklikleri kolay.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Hizmet kataloğu',
          description:
            'Saç kesim, boya, manikür, masaj — her hizmetin süre ve fiyatı tanımlı.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'SMS hatırlatma',
          description:
            'Randevudan önce ve "saç kestirme zamanı" türünden geri çağırma SMS\'leri.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Sadakat programı',
          description:
            '5 ziyarette 1 indirim; doğum günü hediyeleri; düzenli müşteri için özel paketler.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Online ödeme (opsiyonel)',
          description:
            'Randevu kapora veya tam ödeme; gelmeyen müşteri sorunu çözülür.',
          href: '/services/backend-api',
        },
      ],
    },
    bullets: {
      eyebrow: 'Salon tipleri',
      title: 'Hangi tip işletmelere uygun?',
      description: 'Kayseri\'de güzellik ve bakım sektörü:',
      items: [
        'Kuaför ve berber',
        'Güzellik salonları',
        'Manikür ve nail art stüdyoları',
        'Cilt bakım merkezleri',
        'Saç ekim klinikleri',
        'SPA ve masaj salonları',
        'Lazer epilasyon merkezleri',
        'Estetisyen muayenehaneleri',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'Kuaförünüze ne katar?',
      description: '',
      items: [
        {
          title: 'Mesai dışı randevu',
          description:
            'Müşterileriniz gece-gündüz randevu alabilir; siz de gün içi telefon trafiğinden kurtulursunuz.',
        },
        {
          title: 'Düzenli müşteri',
          description:
            'Otomatik geri çağırma SMS\'leri ile düzenli müşteri sayısı %30 artar.',
        },
        {
          title: 'Çalışan performansı',
          description:
            'Hangi çalışan ne kadar müşteri alıyor, hangi hizmet daha popüler — gerçek raporlar.',
        },
        {
          title: 'Müşteri verisi',
          description:
            'Doğum günü, tercih edilen renk, son hizmet — kişisel bakım sunmak çok daha kolay.',
        },
      ],
    },
    faq: [
      {
        question: 'Kapora alabilir miyim?',
        answer:
          'Evet, online ödeme entegrasyonu ile kapora veya tam ödeme alabiliyorsunuz. Bu özellikle gelmeyen müşteri sorunu yaşayan salonlar için çok değerli; no-show oranı belirgin düşüyor.',
      },
      {
        question: 'Çalışanım sistemi kullanmak istemezse?',
        answer:
          'Sistem o kadar basit ki çoğu çalışan birkaç saatte alışıyor. Sadece kendi takvimini görüyor, randevu detayını okuyor — daha fazlası gerekmiyor. Resepsiyon paneli ayrı; salon yöneticisi her şeyi görüyor.',
      },
      {
        question: 'Instagram\'daki müşterilerim sisteme nasıl gelir?',
        answer:
          'Instagram bio\'nuza randevu sayfasının linkini koyuyoruz. Hikaye paylaşımlarınızda "online randevu" linki direkt sisteme yönlendiriyor. Mevcut Instagram müşterilerinizi yavaş yavaş kendi sisteminize aktarıyoruz.',
      },
      {
        question: 'Aylık ücret ne kadar?',
        answer:
          'Çalışan sayınıza göre kademeli aylık abonelik var; tek çalışanlı küçük salondan büyük zincire kadar uygun fiyat. Tek seferlik kurulum modeli de mevcut; uzun vadede daha ekonomik.',
      },
    ],
    cta: {
      title: 'Salonunuzu dijitale taşıyalım',
      description:
        'Kayseri\'de kuaför randevu sistemini hızlıca kuralım. Ücretsiz demo görüşmesi.',
    },
  },

  {
    slug: 'kayseri-otomotiv-galeri-web-sitesi',
    category: 'Sektör',
    metaTitle: 'Kayseri Oto Galeri Web Sitesi | Araç İlan Yönetim Sistemi',
    metaDescription:
      'Kayseri oto galerileri için araç ilan yönetim sistemli web sitesi. Sahibinden ve arabam.com entegrasyonu, finansman hesaplama, takas formu.',
    hero: {
      eyebrow: 'Sektör · Otomotiv',
      title: 'Kayseri oto galerilerine özel site',
      description:
        'Kendi alan adınızda profesyonel galeri sitesi. Araç ilan yönetimi, sahibinden senkron, finansman hesaplama, takas formu.',
      imageSrc: '/kayseri-5.jpg',
    },
    intro: {
      eyebrow: 'Otomotiv dijitali',
      title: 'Galerinizi sahibinden\'in ötesine taşıyın',
      paragraphs: [
        'Kayseri\'de oto galerilerinin tamamına yakını sahibinden.com\'a bağımlı. Ama büyük galeriler bunun ötesine geçtiğinde fark yaratıyor: kendi alan adı, marka kimliği, doğrudan müşteri iletişimi, daha fazla güven.',
        'Profesyonel bir galeri sitesi; her aracın detaylı sayfasına sahip, finansman hesaplama aracı barındıran, takas teklifi alabilen, müşteri verilerini biriktiren bir platformdur. Sahibinden ekstra kanal kalır; ana platform sizin siteniz olur.',
      ],
    },
    services: {
      eyebrow: 'Modüller',
      title: 'Oto galeri sistemi modülleri',
      items: [
        {
          title: 'Araç ilan yönetimi',
          description:
            'Kolay ilan ekleme, çoklu fotoğraf yükleme, 360 derece görüntü desteği.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Sahibinden senkron',
          description:
            'İlanlarınız tek tıkla sahibinden ve arabam.com\'a gönderilsin.',
          href: '/services/backend-api',
        },
        {
          title: 'Finansman hesaplama',
          description:
            'Kredi simülasyonu; aylık taksit hesaplama, banka oranları entegrasyonu.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Takas formu',
          description:
            'Müşteri kendi aracının bilgisini girsin, takas teklifi versin; sizin panelinize düşsün.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Test sürüşü randevusu',
          description:
            'Müşteri uygun saat seçsin, randevu sistemine düşsün; otomatik SMS hatırlatma.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Detaylı filtreler',
          description:
            'Marka, model, yıl, km, yakıt tipi, vites, rengi — gelişmiş arama.',
          href: '/services/web-uygulamalari',
        },
      ],
    },
    bullets: {
      eyebrow: 'Galeri tipleri',
      title: 'Hangi galeri tipleri için uygun?',
      description: 'Kayseri\'deki otomotiv sektörü oyuncularına hizmet veriyoruz:',
      items: [
        'İkinci el oto galerileri',
        'Sıfır araç bayilikleri',
        'Lüks otomobil galerileri',
        'Kamyon ve tır galerileri',
        'Karavan ve motokaravan satışı',
        'Motosiklet galerileri',
        'Hasarlı araç alımı',
        'Filo araç satışı',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'Profesyonel galeri sitesi ne kazandırır',
      description: '',
      items: [
        {
          title: 'Sahibinden\'siz müşteri',
          description:
            'Müşteri sizi Google\'dan bulur, sahibinden komisyonu yok, daha karlı satış.',
        },
        {
          title: 'Marka güveni',
          description:
            'Sahibinden ilanlarında 50 galeri arasında kayboluyorsunuz; kendi sitenizde tek galerisiniz.',
        },
        {
          title: 'Veri ve takip',
          description:
            'Kim hangi araca baktı, hangi ilan en çok ilgi gördü — pazarlama için değerli veri.',
        },
        {
          title: 'Profesyonel duruş',
          description:
            'Modern bir site; kurumsal galeriler arasında ön sıraya geçer, müşteri itibarınızı arttırır.',
        },
      ],
    },
    faq: [
      {
        question: 'Sahibinden ile entegrasyon nasıl çalışıyor?',
        answer:
          'Sahibinden\'in API\'si veya XML feed\'i üzerinden iki yönlü senkronizasyon kuruyoruz. İlan eklediğinizde otomatik sahibinden\'e gönderiliyor; sahibinden\'de yapılan satış sitenizde de "satıldı" olarak işaretleniyor. Tek panelden iki kanalı yönetiyorsunuz.',
      },
      {
        question: 'Finansman hesaplama gerçek banka oranlarını mı veriyor?',
        answer:
          'Sistemde güncel oranları manuel veya yarı otomatik olarak güncelliyorsunuz. Bazı bankaların API\'leri var, onlarla entegre edebiliyoruz. Müşteriye hesaplama gösteriliyor, krediyi siz banka ile finalize ediyorsunuz.',
      },
      {
        question: 'Çok şubeli galerim var, ayrı yönetim mümkün mü?',
        answer:
          'Evet, çok şubeli yapı destekleniyor. Her şubenin kendi araç stoku, kendi çalışanları, kendi raporları olabiliyor; merkez yönetim tüm şubeleri görüyor.',
      },
      {
        question: 'Site ne kadar sürede teslim?',
        answer:
          'Standart galeri sitesi 3-4 hafta. Sahibinden senkron ve finansman hesaplama gibi gelişmiş özellikler eklendiğinde 4-6 haftaya çıkabiliyor.',
      },
    ],
    cta: {
      title: 'Galerinizi dijitalde öne çıkaralım',
      description:
        'Kayseri\'de oto galeri sitesi yapımı için ücretsiz keşif görüşmesi.',
    },
  },

  {
    slug: 'kayseri-kurumsal-web-sitesi',
    category: 'Hizmet',
    metaTitle: 'Kayseri Kurumsal Web Sitesi | Profesyonel Firma Sitesi',
    metaDescription:
      'Kayseri kurumsal web sitesi geliştirme. Marka odaklı tasarım, çoklu dil desteği, KVKK uyumlu, mobil ve SEO uyumlu kurumsal siteler.',
    hero: {
      eyebrow: 'Hizmet · Kurumsal',
      title: 'Kayseri\'de kurumsal web sitesi',
      description:
        'Markanızı dijitalde tam yansıtan, ihracat için çoklu dil destekli, KVKK uyumlu kurumsal web siteleri. Üretici, ihracatçı ve hizmet firmaları için.',
      imageSrc: '/erciyes.jpg',
    },
    intro: {
      eyebrow: 'Kurumsal site',
      title: 'Üretim gücünüzü dijitalde gösterin',
      paragraphs: [
        'Kayseri\'nin imalat sanayisi Türkiye\'nin önemli üretim merkezlerinden biri; ama bu üretim gücü dijitalde maalesef yeterince yansımıyor. Yurt dışındaki potansiyel alıcı sizi araştırdığında karşısına çıkan site; çoğu zaman iletişim kurulması zor, eski bir broşür sayfasından ibaret.',
        'Kurumsal web sitesi; şirketinizin dijital vitrini, satış ekibiniz olmadığı zamanlarda çalışan satış elemanı ve ihracat bağlantıları için ilk güven kaynağıdır. Doğru kurgulanmış bir kurumsal site, marka değerinizi gerçek anlamda yansıtır.',
      ],
    },
    services: {
      eyebrow: 'Site bileşenleri',
      title: 'Kurumsal site paketinde neler var?',
      items: [
        {
          title: 'Marka odaklı tasarım',
          description:
            'Logonuz, renkleriniz, kurumsal kimliğinizi yansıtan özel tasarım.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Çoklu dil desteği',
          description:
            'İngilizce, Arapça, Rusça — ihracat hedef ülkenize göre çoklu dil sunum.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Ürün/hizmet kataloğu',
          description:
            'Kategorili, fotoğraflı, teknik dokümanı olan ürün sayfaları.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Üretim ve sertifika sayfaları',
          description:
            'ISO sertifikaları, üretim süreçleri, kapasite bilgileri için özel bölümler.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'KVKK ve hukuki sayfalar',
          description:
            'Aydınlatma metni, gizlilik politikası, çerez bildirimi — kanuna uygun altyapı.',
          href: '/services/teknik-danismanlik',
        },
        {
          title: 'B2B teklif formu',
          description:
            'Toplu sipariş için özel teklif alma formu; teklif yönetim paneli.',
          href: '/services/ozel-yazilim',
        },
      ],
    },
    bullets: {
      eyebrow: 'Sektörel deneyim',
      title: 'Kurumsal sitelerine destek verdiğimiz alanlar',
      description: 'Kayseri\'nin önde gelen sektörlerinde kurumsal site deneyimimiz:',
      items: [
        'Mobilya ve mefruşat üreticileri',
        'Halı ve tekstil firmaları',
        'Otomotiv yan sanayi',
        'İnşaat malzemeleri',
        'Gıda imalatı ve ihracatı',
        'Makine ve sanayi ürünleri',
        'Hukuk ve danışmanlık büroları',
        'Eğitim ve sağlık kurumları',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'Kurumsal sitenize neden yatırım yapmalısınız?',
      description: '',
      items: [
        {
          title: 'İhracat için vitrin',
          description:
            'Yurt dışı alıcı sizi profesyonel buluyor; ilk teklif görüşmesi başlamadan önce güven oluşuyor.',
        },
        {
          title: 'Marka değeri',
          description:
            'Modern bir site; firma yaşınızdan, çalışan sayınızdan bağımsız olarak büyük görünmenizi sağlar.',
        },
        {
          title: 'SEO ile organik trafik',
          description:
            'Sektör araması yapan potansiyel müşteri sizi Google\'da bulur; reklam bütçesi olmadan.',
        },
        {
          title: 'Talep formu otomasyonu',
          description:
            'Gelen talep ve teklif istekleri tek panelde; satış ekibi anında haberdar.',
        },
      ],
    },
    faq: [
      {
        question: 'Kurumsal site fiyat aralığı nedir?',
        answer:
          'Kurumsal site projesi; sayfa sayısı, dil sayısı, özel modül ihtiyaçlarına göre değişiyor. 5-7 sayfalık tek dilli kurumsal site ile 30+ sayfalı 4 dilli ihracat sitesi arasında 3-5 kat fark olabiliyor. Ücretsiz keşif görüşmesinde net teklif veriyoruz.',
      },
      {
        question: 'Mevcut sitemi yenileyebilir misiniz?',
        answer:
          'Evet. Mevcut WordPress, Wix veya statik sitenizi modern bir altyapıya taşıyabiliriz. SEO\'yu kaybetmeden, mevcut Google sıralamalarını koruyarak yenileme yapıyoruz; yönlendirme planı titizlikle hazırlanıyor.',
      },
      {
        question: 'KVKK uyumu nasıl sağlanıyor?',
        answer:
          'Aydınlatma metni şablonu, çerez bildirimi, açık rıza yönetimi, kişisel veri silme talep formu — tüm KVKK gereklilikleri için altyapı kuruyoruz. Avukatla yapılacak son kontrol için doküman hazırlığı bizden.',
      },
      {
        question: 'Hosting ve sürekli destek nasıl?',
        answer:
          'Türkiye veya Avrupa veri merkezlerinde hosting; aylık veya yıllık plan. SSL sertifikası, günlük yedekleme, 7/24 izleme dahil. İçerik güncelleme ve teknik destek için aylık bakım anlaşması.',
      },
    ],
    cta: {
      title: 'Kurumsal kimliğinizi dijitalde yansıtalım',
      description:
        'Kayseri\'de kurumsal web sitesi için 30 dakikalık ücretsiz keşif görüşmesi.',
    },
  },

  {
    slug: 'kayseri-seo-hizmeti',
    category: 'Hizmet',
    metaTitle: 'Kayseri SEO Hizmeti | Google\'da Üst Sıralara Çıkın',
    metaDescription:
      'Kayseri\'de SEO hizmeti. Google\'da organik aramalarda üst sıralara çıkmak için teknik SEO, içerik stratejisi, yerel SEO ve performans optimizasyonu.',
    hero: {
      eyebrow: 'Hizmet · SEO',
      title: 'Kayseri\'de Google\'da görünür olun',
      description:
        'Reklamsız, organik olarak Google\'da üst sıralara çıkmak için bütüncül SEO stratejisi. Teknik SEO, içerik, yerel SEO ve raporlama.',
      imageSrc: '/parallax-tech.jpg',
    },
    intro: {
      eyebrow: 'SEO yaklaşımı',
      title: 'SEO sihir değil, sistemli iş',
      paragraphs: [
        'Kayseri\'deki çoğu firma SEO\'yu "anahtar kelime ekleme" veya "site hızı" gibi tek bir aksiyon olarak görüyor. Oysa SEO bütüncül bir disiplin: teknik altyapı, içerik kalitesi, kullanıcı deneyimi, dış bağlantı stratejisi — hepsi birlikte çalışmalı.',
        'Biz SEO çalışmasına; mevcut durum analizi, rakip analizi ve hedef anahtar kelime listesi ile başlıyoruz. Sonra teknik düzeltmeler, içerik üretimi ve yerel SEO çalışmasını paralel yürütüyoruz. Aylık raporlarla ilerlemeyi şeffaf gösteriyoruz.',
      ],
    },
    services: {
      eyebrow: 'SEO modülleri',
      title: 'SEO çalışması neleri kapsıyor?',
      items: [
        {
          title: 'Teknik SEO denetimi',
          description:
            'Site hızı, mobil uyum, semantik HTML, sitemap, robots.txt — teknik altyapı analizi.',
          href: '/services/performans-optimizasyonu',
        },
        {
          title: 'Anahtar kelime araştırması',
          description:
            'Sektörünüzde aylık aranma hacmi yüksek, rekabet seviyesi makul kelimeler.',
          href: '/services/teknik-danismanlik',
        },
        {
          title: 'İçerik stratejisi',
          description:
            'Blog yazıları, hizmet sayfaları, sektörel landing page\'ler için planlama.',
          href: '/services/teknik-danismanlik',
        },
        {
          title: 'Yerel SEO',
          description:
            'Google İşletme Profili optimizasyonu, "Kayseri + sektör" aramalarında öne çıkma.',
          href: '/services/teknik-danismanlik',
        },
        {
          title: 'Backlink stratejisi',
          description:
            'Kaliteli, sektörel ve yerel siteler üzerinden organik bağlantı kazanımı.',
          href: '/services/teknik-danismanlik',
        },
        {
          title: 'Aylık raporlama',
          description:
            'Sıralamalar, trafik artışı, dönüşüm — şeffaf aylık rapor ve toplantı.',
          href: '/services/teknik-danismanlik',
        },
      ],
    },
    bullets: {
      eyebrow: 'SEO odakları',
      title: 'Hangi konularda SEO çalışıyoruz?',
      description: 'Kayseri\'de farklı SEO ihtiyaçlarına göre çalışmalar yürütüyoruz:',
      items: [
        'Yerel SEO (Kayseri + hizmet)',
        'E-ticaret SEO (kategori ve ürün)',
        'Hizmet SEO (sektörel landing page)',
        'Restoran ve otel SEO\'su',
        'Klinik ve sağlık SEO\'su',
        'Emlak ofisi SEO\'su',
        'B2B sanayi SEO\'su',
        'İhracat SEO\'su (çoklu dil)',
      ],
    },
    highlights: {
      eyebrow: 'Süreç',
      title: 'SEO süreci nasıl ilerliyor?',
      description: '',
      items: [
        {
          title: 'Ay 1: Analiz ve plan',
          description:
            'Mevcut durum, rakip analizi, anahtar kelime planı; ilk teknik düzeltmeler.',
        },
        {
          title: 'Ay 2-3: Teknik ve içerik',
          description:
            'Site hızı iyileştirmeleri, sayfa içi SEO, ilk blog yazıları ve landing page\'ler.',
        },
        {
          title: 'Ay 4-6: Görünürlük artışı',
          description:
            'Backlink kazanımları, içerik üretimine devam, ilk somut sıralama yükselmeleri.',
        },
        {
          title: 'Ay 7+: Sürdürülebilir büyüme',
          description:
            'Düzenli içerik, yeni anahtar kelimeler, dönüşüm optimizasyonu ile organik trafik patlaması.',
        },
      ],
    },
    faq: [
      {
        question: 'SEO\'da sonuç ne kadar sürede görünür?',
        answer:
          'İlk somut sonuçlar (sıralamada yükselme, organik trafik artışı) genellikle 3-4. ay görünür. Anlamlı dönüşüm ve müşteri akışı için 6-9 ay realistik bir hedef. SEO bir maraton; ama kalıcı bir varlık inşa ediyor — durdurduğunuzda da uzun süre fayda devam ediyor.',
      },
      {
        question: 'SEO ile Google Ads arasındaki fark nedir?',
        answer:
          'Google Ads para verdiğiniz sürece üst sırada. Durduğunuz anda biter. SEO ise; ilk yatırım ile yıllarca üst sıralarda kalabilirsiniz. Uzun vadede SEO 3-5 kat daha düşük maliyetli müşteri kazanımı sağlıyor.',
      },
      {
        question: 'Garantili sıralama veriyor musunuz?',
        answer:
          'Hayır, hiçbir ciddi SEO firması garanti veremez (Google\'ın algoritması üçüncü tarafların kontrolünde değil). Ama; somut metriklerle ilerleme garantisi veriyoruz: 6 ay sonunda organik trafik artışı, hedef anahtar kelimelerde sıralama yükselmesi gibi.',
      },
      {
        question: 'Aylık ücret ne kadar?',
        answer:
          'SEO paketlerimiz; içerik üretim hacmi, anahtar kelime sayısı, rapor sıklığına göre kademeli. Küçük yerel işletmeler için ulaşılabilir bir aylık paket var; büyük e-ticaret ve B2B siteleri için kapsamlı paketler.',
      },
    ],
    cta: {
      title: 'Kayseri\'de Google\'a yatırım yapın',
      description:
        'SEO çalışmasına başlamak için ücretsiz keşif görüşmesi. Mevcut sitenizin analizini yaparız.',
    },
  },

  {
    slug: 'kayseri-web-yazilim-fiyatlari',
    category: 'Hizmet',
    metaTitle: 'Kayseri Web Yazılım Fiyatları 2026 | Şeffaf Fiyat Aralıkları',
    metaDescription:
      'Kayseri\'de web sitesi, e-ticaret, mobil uygulama ve özel yazılım fiyatları 2026. Şeffaf fiyat aralıkları, paket içerikleri ve örnek bütçelendirme.',
    hero: {
      eyebrow: 'Bilgi · Fiyatlar',
      title: 'Kayseri\'de web ve yazılım fiyatları',
      description:
        '2026 yılı itibarıyla Kayseri\'de web sitesi, e-ticaret, mobil uygulama ve özel yazılım için gerçekçi fiyat aralıkları. Şeffaf, anlaşılır, doğru.',
      imageSrc: '/parallax-tech.jpg',
    },
    intro: {
      eyebrow: 'Şeffaf fiyatlandırma',
      title: 'Neden bu sayfa var?',
      paragraphs: [
        'Kayseri\'de yazılım hizmeti almak isteyen firmaların en büyük şikayeti: net fiyat öğrenememek. Telefon edilince "duruma göre değişir, bir gelin görüşelim" cevabı alınıyor; sonra alakasız tekliflerle karşılaşılıyor.',
        'Biz şeffaflığa inanıyoruz. Her proje benzersiz, evet — ama pazardaki gerçekçi fiyat aralıklarını paylaşmak yapılabilir. Bu sayfa size ne tür bir bütçe planlamanız gerektiğine dair net bir resim sunuyor; bizimle çalışmasanız bile faydalı olsun istiyoruz.',
      ],
    },
    services: {
      eyebrow: 'Hizmet kategorileri',
      title: 'Kategorilere göre fiyat aralıkları',
      items: [
        {
          title: 'Tek sayfalık tanıtım sitesi',
          description:
            'Küçük işletme, kişisel marka veya etkinlik için; orta segmente uygun başlangıç paketi.',
          href: '/fiyatlandirma',
        },
        {
          title: 'Kurumsal web sitesi (5-10 sayfa)',
          description:
            'Klasik kurumsal site; tasarım, KVKK uyumu, panel dahil. Standart paketimiz.',
          href: '/fiyatlandirma',
        },
        {
          title: 'E-ticaret sitesi',
          description:
            'Shopify temelli ve özel altyapılı seçenekler; ürün sayısı ve karmaşıklığa göre değişir.',
          href: '/fiyatlandirma',
        },
        {
          title: 'Mobil uygulama',
          description:
            'Cross-platform iOS/Android; özellik listesine göre orta-üst segment.',
          href: '/fiyatlandirma',
        },
        {
          title: 'Özel yazılım / ERP modülü',
          description:
            'İç süreç yazılımları; küçük araçlardan büyük entegre sistemlere geniş yelpaze.',
          href: '/fiyatlandirma',
        },
        {
          title: 'Aylık bakım anlaşması',
          description:
            'Site sonrası destek; içerik güncelleme, güvenlik, izleme. Aylık ücret.',
          href: '/fiyatlandirma',
        },
      ],
    },
    bullets: {
      eyebrow: 'Fiyatı etkileyen faktörler',
      title: 'Aynı tip projede neden farklı fiyatlar?',
      description:
        'Aynı kategoride iki proje arasında 5 kat fark olabilir. Sebepleri:',
      items: [
        'Sayfa veya ekran sayısı',
        'Çoklu dil desteği',
        'Özel entegrasyonlar (ERP, ödeme, kargo)',
        'Tasarım özgünlüğü (şablon vs özel)',
        'Performans gereksinimleri',
        'KVKK ve güvenlik gereksinimleri',
        'Bakım ve garantili destek süresi',
        'İçerik üretimi (yazı, görsel, çeviri)',
      ],
    },
    highlights: {
      eyebrow: 'Şeffaflık',
      title: 'Bizim fiyatlandırma yaklaşımımız',
      description: '',
      items: [
        {
          title: 'Sabit bedel',
          description:
            'Saatlik ücret değil; proje başında net teklif. Kapsam değişmedikçe rakam değişmez.',
        },
        {
          title: 'Aşamalı ödeme',
          description:
            '%30 başlangıç, %40 tasarım onayı, %30 yayın. Risk müşteriyle paylaşılıyor.',
        },
        {
          title: 'Sürpriz yok',
          description:
            'Teklif kapsamına dahil olmayan her şey, başında "şu özellik dahil değil" diye yazıyor.',
        },
        {
          title: 'KOBİ dostu seçenekler',
          description:
            'Küçük bütçeli işletmelere özel, sadeleştirilmiş paketlerimiz var.',
        },
      ],
    },
    faq: [
      {
        question: 'Fiyat aralıklarını paylaşır mısınız?',
        answer:
          'Telefonda veya keşif görüşmesinde net rakam veriyoruz; web sitesinde "X TL\'den başlıyor" demiyoruz çünkü her firmanın ihtiyacı farklı. Ücretsiz 30 dakikalık görüşmede, ihtiyacınızı dinleyip sektörel ortalamaya göre tahmini bütçe veriyoruz.',
      },
      {
        question: 'Daha ucuz teklifler var, neden sizinle çalışmalıyım?',
        answer:
          'Çok ucuz teklifler genellikle iki şeyden geliyor: ya öğrenci/junior geliştirici (deneyim eksikliği), ya da hazır şablon yapıştırma. Her iki durumda da; bakım, güvenlik, sürdürülebilirlik problemlerine girersiniz. Doğru fiyat doğru iş demek; biz bu dengeyi sağlamaya çalışıyoruz.',
      },
      {
        question: 'Tasarımı beğenmezsem ne olur?',
        answer:
          'Tasarım onay aşaması öncesinde projeniz başlamıyor. İlk tasarım taslağında beğenmezseniz, makul sayıda revizyon hakkınız var. Ondan sonra hâlâ olmadıysa, ödenen ilk peşinatı (varsa) iade ediyor, ayrılıyoruz. Memnun olmayan müşteriyle çalışmak istemiyoruz.',
      },
      {
        question: 'Aylık ödemeyle ödeyebilir miyim?',
        answer:
          'Evet, bazı paketlerde 6-12 ay taksitle ödeme planı sunabiliyoruz. Aylık SaaS modeli ile başlatmak isteyen küçük işletmelere de uygun seçenekler var.',
      },
    ],
    cta: {
      title: 'Projenize özel fiyat teklifi alın',
      description:
        'Kayseri\'de fiyat netliği ile çalışan bir partner için 30 dakikalık ücretsiz keşif görüşmesi.',
    },
  },

  {
    slug: 'melikgazi-yazilim-firmasi',
    category: 'İlçe',
    metaTitle: 'Melikgazi Yazılım Firması | Web ve Yazılım Hizmetleri',
    metaDescription:
      'Melikgazi\'deki firmalara web sitesi, e-ticaret, özel yazılım ve mobil uygulama hizmeti. Yerinde keşif, hızlı destek, şeffaf fiyat.',
    hero: {
      eyebrow: 'İlçe · Melikgazi',
      title: 'Melikgazi\'nin yazılım partneri',
      description:
        'Melikgazi\'deki kurumsal firmalara, KOBİ\'lere ve start-up\'lara web sitesi, e-ticaret ve özel yazılım hizmeti. Yerinde keşif görüşmesi, hızlı destek.',
      imageSrc: '/kayseri-1.jpg',
    },
    intro: {
      eyebrow: 'Melikgazi\'de hizmet',
      title: 'İlçenizin dijitalleşme partneri',
      paragraphs: [
        'Melikgazi; Kayseri\'nin en büyük ve en hareketli ilçesi. Erciyes\'in eteklerinden Talas sınırına kadar uzanan bu geniş bölgede; perakende, restoran, sağlık, eğitim ve hizmet sektörlerinden binlerce işletme yer alıyor. Hepsinin dijital ihtiyaçları benzer ama detayda farklı.',
        'Melikgazi\'de yer alan müşterilerimize "yerel hizmet" sözü veriyoruz: yerinde keşif görüşmesi, telefonla ulaşılabilir destek, gerektiğinde ofise gelme. Online hizmet vermenin avantajları yanına yerel olmanın güvenini ekliyoruz.',
      ],
    },
    services: {
      eyebrow: 'Hizmetlerimiz',
      title: 'Melikgazi firmalarına sunduğumuz çözümler',
      items: [
        {
          title: 'Web sitesi tasarım',
          description:
            'Kurumsal, e-ticaret veya tanıtım — Melikgazi\'deki firmalara modern siteler.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'E-ticaret kurulumu',
          description:
            'Online satışa başlamak isteyen perakendeciler için Shopify veya özel altyapı.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Özel yazılım',
          description:
            'İç süreçlerinizi yöneten, Excel\'i bırakmanızı sağlayan özel yazılımlar.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Mobil uygulama',
          description:
            'Müşteri sadakat, randevu, sipariş gibi mobil uygulamalar.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'SEO ve dijital pazarlama',
          description:
            'Google\'da Melikgazi araması yapanlara organik olarak ulaşın.',
          href: '/services/performans-optimizasyonu',
        },
        {
          title: 'Bakım ve destek',
          description:
            'Aylık paketlerle site, uygulama ve sunucu yönetimi.',
          href: '/services/teknik-danismanlik',
        },
      ],
    },
    bullets: {
      eyebrow: 'Sektörel deneyim',
      title: 'Hangi sektörlere hizmet veriyoruz?',
      description: 'Melikgazi\'de farklı sektörlerden firmalara çözüm üretiyoruz:',
      items: [
        'Restoran ve kafeler',
        'Klinik ve sağlık merkezleri',
        'Emlak ofisleri',
        'Otomotiv galerileri',
        'Eğitim kurumları',
        'Perakende ve mağazalar',
        'Üretim ve atölyeler',
        'Kurumsal hizmet firmaları',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'Melikgazi\'de yerel partner olmanın avantajı',
      description: '',
      items: [
        {
          title: 'Yerinde keşif',
          description:
            'Ofisinize geliriz, süreçleri yerinde görürüz. Online toplantıdan çok daha verimli.',
        },
        {
          title: 'Hızlı yanıt',
          description:
            'Mesai saatlerinde 2-3 saat içinde dönüş; acil durumlarda anında müdahale.',
        },
        {
          title: 'Yerel referanslar',
          description:
            'Melikgazi\'de halihazırda hizmet verdiğimiz firmalar; referans paylaşımı kolay.',
        },
        {
          title: 'Kayseri\'ye uygun fiyat',
          description:
            'İstanbul/Ankara fiyatları değil; yerel ekonomiye uygun, makul fiyatlama.',
        },
      ],
    },
    faq: [
      {
        question: 'Melikgazi\'de yüz yüze görüşme oluyor mu?',
        answer:
          'Evet, Melikgazi\'deki müşterilerimize yerinde keşif görüşmesi sunuyoruz. Ofisinize geliriz, ihtiyaçları yerinde dinleriz. Sonraki süreç (geliştirme aşaması) çoğunlukla uzaktan ilerler; ama kritik aşamalarda (tasarım onay, eğitim) yine yüz yüze geliyoruz.',
      },
      {
        question: 'Sadece Melikgazi\'ye mi hizmet veriyorsunuz?',
        answer:
          'Hayır, Kayseri geneli ve Türkiye genelinde uzaktan çalışıyoruz. Melikgazi yakınlarına yerinde gelmek daha kolay olduğu için bu sayfada vurguladık; başka illerden müşterilerimiz de var.',
      },
      {
        question: 'Hangi semtlere yakınsınız?',
        answer:
          'Melikgazi merkez, Talas, Hisarcık, Köşk, Hacılar bölgelerine kolay ulaşabiliyoruz. Yine de büyük çoğunlukla Google Meet üzerinden çalışıyoruz; gereksiz trafik ve zaman kaybı yaratmıyoruz.',
      },
      {
        question: 'Acil destek aldığımda hızlı gelir misiniz?',
        answer:
          'Kritik bir sorunda (site çöktü, ödeme almıyor) yerinde olmak gerekirse; mesai saatlerinde 1-2 saat içinde geliyoruz. Çoğu sorun uzaktan çözüldüğü için yerinde gelme talebi nadiren oluyor.',
      },
    ],
    cta: {
      title: 'Melikgazi\'deki firmanızı dijitale taşıyalım',
      description:
        'Yerinde keşif görüşmesi için bizi arayın; ihtiyaçlarınızı dinleyelim.',
    },
  },

  {
    slug: 'kocasinan-yazilim-firmasi',
    category: 'İlçe',
    metaTitle: 'Kocasinan Yazılım Firması | Web ve Özel Yazılım',
    metaDescription:
      'Kocasinan\'daki sanayi, ticaret ve hizmet firmalarına web sitesi, ERP modülü ve özel yazılım. Yerel destek, sanayi entegrasyonu deneyimi.',
    hero: {
      eyebrow: 'İlçe · Kocasinan',
      title: 'Kocasinan\'ın yazılım çözüm ortağı',
      description:
        'Kocasinan\'daki sanayi siteleri, ticaret merkezi ve hizmet firmalarına; web sitesi, ERP entegrasyonu ve özel yazılım çözümleri.',
      imageSrc: '/kayseri-2.jpg',
    },
    intro: {
      eyebrow: 'Kocasinan\'da hizmet',
      title: 'Sanayi ve ticaretin merkezinde',
      paragraphs: [
        'Kocasinan; Kayseri\'nin sanayi gücünü temsil eden ilçe. OSB\'nin önemli bir bölümü, küçük ve orta ölçekli üretim atölyeleri, toptan ticaret merkezleri burada. Bu firmaların dijital ihtiyaçları farklı: ERP entegrasyonu, üretim takip, B2B sipariş portalı.',
        'Kocasinan\'daki firmalara hizmet verirken; sanayi süreçlerini ve toptan ticareti anlayan bir partner olarak konumlanıyoruz. Kurumsal web sitesinden çok, iş süreçlerinizi optimize eden yazılımlara odaklanıyoruz.',
      ],
    },
    services: {
      eyebrow: 'Hizmetlerimiz',
      title: 'Kocasinan firmalarına çözümler',
      items: [
        {
          title: 'Sanayi ve üretim sitesi',
          description:
            'Üretim kapasiteni, sertifikaları, ürün katalogunu profesyonelce sunan site.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'ERP entegrasyon yazılımı',
          description:
            'Logo, Netsis, SAP\'ye bağlanan özel modüller ve raporlar.',
          href: '/services/backend-api',
        },
        {
          title: 'Üretim takip sistemi',
          description:
            'Tezgah bazlı üretim görünürlüğü, parça takibi, fire raporları.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'B2B sipariş portalı',
          description:
            'Bayi ve toptan müşterilerinizin online sipariş geçtiği özel portal.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'İhracat sitesi',
          description:
            'İhracat hedeflerinize uygun çoklu dilli kurumsal site; ihracatçı vitrini.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Sunucu ve VPN',
          description:
            'Kurumsal sunucu kurulumu, çalışanlar için güvenli VPN, otomatik yedekleme.',
          href: '/services/devops-altyapi',
        },
      ],
    },
    bullets: {
      eyebrow: 'Sektörel deneyim',
      title: 'Hangi sektörlere hizmet veriyoruz?',
      description: 'Kocasinan\'ın sanayi-ticaret yoğun yapısında çalıştığımız sektörler:',
      items: [
        'Mobilya ve ahşap üretimi',
        'Tekstil ve halı imalatı',
        'Metal ve makine sanayi',
        'Otomotiv yedek parça',
        'Yapı malzemeleri toptan',
        'Gıda imalatı',
        'Lojistik ve nakliye',
        'Endüstriyel ekipman',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'Sanayi firmalarına özel yaklaşımımız',
      description: '',
      items: [
        {
          title: 'Sanayi süreç bilgisi',
          description:
            'Üretim, depo, kalite kontrol süreçlerini anlayan ekip; öğrenme zamanı kısa.',
        },
        {
          title: 'Mevcut ERP entegrasyonu',
          description:
            'Logo Tiger, Netsis, SAP gibi mevcut sistemleri ezmeden, etrafına sarmal yazılım.',
        },
        {
          title: 'KOBİ uygun ölçek',
          description:
            'Büyük şirket çözümlerini KOBİ\'ye sığacak şekilde ölçeklendirip uyguluyoruz.',
        },
        {
          title: 'Saha ziyareti',
          description:
            'Atölyeye, depoya, üretim hattına geliriz; süreci yerinde görmeden çözüm tasarlamayız.',
        },
      ],
    },
    faq: [
      {
        question: 'Kocasinan OSB\'deki firmalara hizmet veriyor musunuz?',
        answer:
          'Evet, Kayseri OSB içindeki firmalara da hizmet veriyoruz. Üretim takip yazılımları, depo yönetimi, B2B portal gibi ihtiyaçlarda OSB firmalarıyla deneyimliyiz. Yerinde keşif yapmak için OSB\'ye geliyoruz.',
      },
      {
        question: 'Mevcut ERP\'mi koruyup üzerine yazılım yapabilir miyim?',
        answer:
          'Evet, çoğu projemiz bu şekilde. Mevcut Logo, Netsis, SAP gibi ERP\'yi koruyor, etrafına entegre olan özel modüller geliştiriyoruz. ERP\'nizi tamamen değiştirmek nadiren gerekiyor.',
      },
      {
        question: 'B2B sipariş portalı nasıl çalışıyor?',
        answer:
          'Bayi ve toptan müşterileriniz kendi şifreleriyle giriyor, kendilerine özel fiyatlarla ürün listesi görüyor, sipariş geçiyor. Sipariş ERP\'nize otomatik düşüyor; manuel veri girişi yok.',
      },
      {
        question: 'Süreç ne kadar sürer?',
        answer:
          'Kurumsal web sitesi 3-4 hafta. ERP entegrasyonu ve üretim takip sistemi 2-4 ay arası. Aşamalı teslim ile ilk kullanılabilir versiyon 4-6 hafta içinde elinizde.',
      },
    ],
    cta: {
      title: 'Kocasinan\'da iş süreçlerinizi dijitalleştirin',
      description:
        'Atölyenize/ofisinize gelelim, süreci yerinde görelim. Ücretsiz keşif görüşmesi.',
    },
  },

  {
    slug: 'talas-yazilim-firmasi',
    category: 'İlçe',
    metaTitle: 'Talas Yazılım Firması | Web Sitesi ve Mobil Uygulama',
    metaDescription:
      'Talas\'taki firmalara, kliniklere, restoranlara ve eğitim kurumlarına web sitesi ve mobil uygulama hizmetleri. Yerel destek, hızlı yanıt.',
    hero: {
      eyebrow: 'İlçe · Talas',
      title: 'Talas\'ın dijital dönüşüm partneri',
      description:
        'Talas\'ta hizmet veren restoranlara, kliniklere, eğitim kurumlarına ve KOBİ\'lere web sitesi, mobil uygulama ve özel yazılım çözümleri.',
      imageSrc: '/kayseri-3.jpg',
    },
    intro: {
      eyebrow: 'Talas\'ta hizmet',
      title: 'Genç ve hareketli bir bölgenin partneri',
      paragraphs: [
        'Talas son 10 yılda Kayseri\'nin en hızlı büyüyen ilçesi haline geldi. Üniversite, modern AVM\'ler, lüks konut projeleri, butik kafeler ve özel klinikler... Genç nüfusun yoğun olduğu bu bölgede; dijital ihtiyaçlar farklı, beklentiler yüksek.',
        'Talas\'taki müşterilerimize daha modern, daha sosyal medya odaklı, daha mobil uyumlu çözümler sunuyoruz. Bu bölgenin müşteri profili, modern bir online deneyim arıyor; bunu sağlayan firmalar fark yaratıyor.',
      ],
    },
    services: {
      eyebrow: 'Hizmetlerimiz',
      title: 'Talas firmalarına çözümler',
      items: [
        {
          title: 'Modern web sitesi',
          description:
            'Genç nüfusun beklediği seviyede modern, mobil-öncelikli, hızlı yüklenen siteler.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Restoran/kafe sistemi',
          description:
            'Talas\'taki kafe ve restoranlara QR menü, online sipariş, rezervasyon.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Klinik randevu sistemi',
          description:
            'Talas\'taki özel klinik ve estetik merkezlerine online randevu altyapısı.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Eğitim kurumu paneli',
          description:
            'Kreş, kurs, dershane için öğrenci-veli takip ve iletişim sistemi.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Mobil uygulama',
          description:
            'Sadakat, randevu, sipariş — Talas\'taki müşterileriniz uygulamadan ulaşsın.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Sosyal medya entegrasyonu',
          description:
            'Instagram, TikTok ile entegre çalışan kampanya ve içerik yönetim altyapıları.',
          href: '/services/web-uygulamalari',
        },
      ],
    },
    bullets: {
      eyebrow: 'Sektörel deneyim',
      title: 'Talas\'ta hangi sektörlere hizmet veriyoruz',
      description:
        'Talas\'ın hareketli ekonomisinde farklı sektörlere çözüm üretiyoruz:',
      items: [
        'Restoran, kafe ve bistro',
        'Estetik ve güzellik klinikleri',
        'Eğitim kurumları (kreş, kurs)',
        'Modern emlak ofisleri',
        'Spor salonları ve fitness',
        'Butik mağaza ve perakende',
        'Sağlık ve diş klinikleri',
        'Profesyonel hizmet firmaları',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'Talas\'ta neden bizi tercih etmelisiniz?',
      description: '',
      items: [
        {
          title: 'Modern beklentiye uygun',
          description:
            'Talas\'ın genç müşteri profilinin beklediği modern dijital deneyimi anlıyoruz.',
        },
        {
          title: 'Yakın bölge',
          description:
            'Talas yakınımızda; yerinde keşif görüşmesi için ulaşmak kolay ve hızlı.',
        },
        {
          title: 'Hızlı teslim',
          description:
            'Standart projelerde 2-3 hafta teslim; AVM açılışı, kafe açılışı gibi tarih hassas projelere uygun.',
        },
        {
          title: 'Sürdürülebilir destek',
          description:
            'Aylık bakım paketleri ile sitenizin sürekli güncel ve aktif kalmasını sağlıyoruz.',
        },
      ],
    },
    faq: [
      {
        question: 'Talas\'ta hangi tip işletmelerle çalıştınız?',
        answer:
          'Talas\'ta restoran, kafe, klinik ve eğitim kurumları en sık çalıştığımız sektörler. Spor salonları ve butik mağazalarla da projelerimiz oldu. Müşteri gizliliği nedeniyle isim paylaşmıyoruz; ama görüşmemizde sektörel referans veriyoruz.',
      },
      {
        question: 'Talas\'taki üniversiteyle bağlantınız var mı?',
        answer:
          'Erciyes Üniversitesi mezunlarıyla çalışıyoruz; öğrencilere yönelik bazı projelerde de yer aldık. Üniversiteyle veya kulüplerle özel projeler için bize yazabilirsiniz.',
      },
      {
        question: 'Yerinde gelir misiniz?',
        answer:
          'Evet, Talas yakınımızda olduğu için yerinde keşif görüşmesi yapıyoruz. Hatta tasarım sunumu, eğitim gibi aşamalarda da yerinde olmayı tercih ediyoruz.',
      },
      {
        question: 'Daha küçük bütçelerle nasıl çalışıyorsunuz?',
        answer:
          'Talas\'taki yeni açılan kafe, küçük klinik gibi işletmeler için sadeleştirilmiş başlangıç paketlerimiz var. Tek sayfalık modern landing page + WhatsApp formu gibi minimum altyapıyla başlayıp büyütebiliyoruz.',
      },
    ],
    cta: {
      title: 'Talas\'taki işletmenizi öne çıkaralım',
      description:
        'Modern, mobil uyumlu, sosyal medya entegre çözümler için ücretsiz görüşme.',
    },
  },

  {
    slug: 'incesu-yazilim-firmasi',
    category: 'İlçe',
    metaTitle: 'İncesu Yazılım Firması | Sanayi ve Ticaret Web Çözümleri',
    metaDescription:
      'İncesu OSB ve civarındaki sanayi, ticaret ve tarım firmalarına web sitesi, ERP entegrasyonu ve özel yazılım. Yerel destek, sanayi deneyimi.',
    hero: {
      eyebrow: 'İlçe · İncesu',
      title: 'İncesu\'nun yazılım partneri',
      description:
        'İncesu OSB ve civarındaki sanayi, ticaret ve tarım sektörlerindeki firmalara; ihracat sitesi, ERP entegrasyonu ve özel yazılım çözümleri.',
      imageSrc: '/kayseri-4.jpg',
    },
    intro: {
      eyebrow: 'İncesu\'da hizmet',
      title: 'Sanayi gücünün dijital yansıması',
      paragraphs: [
        'İncesu OSB; Kayseri\'nin önemli sanayi yatırım bölgelerinden biri. Mobilya, tekstil, gıda ve metal sektörlerinde önemli üretim kapasitesi burada. Bu firmaların dijital ihtiyaçları çoğunlukla ihracat odaklı: çoklu dilli kurumsal site, B2B portal, ERP entegrasyonu.',
        'İncesu\'daki üretici ve ihracatçı firmalara; uluslararası standartlarda dijital sunum yapan, ERP\'lerine entegre, sürdürülebilir çözümler sunuyoruz. Hedef pazarlarınıza ulaşmak için doğru altyapıyı kuruyoruz.',
      ],
    },
    services: {
      eyebrow: 'Hizmetlerimiz',
      title: 'İncesu firmalarına özel çözümler',
      items: [
        {
          title: 'Çoklu dilli ihracat sitesi',
          description:
            'İngilizce, Arapça, Rusça, Almanca dillerinde kurumsal site; uluslararası alıcı için hazır.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'Ürün kataloğu yönetimi',
          description:
            'Yüzlerce ürünü kategorili, görsel destekli, teknik dokümanlı sunan katalog.',
          href: '/services/web-uygulamalari',
        },
        {
          title: 'ERP entegrasyonu',
          description:
            'Mevcut Logo, Netsis veya SAP sisteminize özel modüller ve raporlar.',
          href: '/services/backend-api',
        },
        {
          title: 'Üretim takip yazılımı',
          description:
            'Hangi parça hangi tezgahta, ne aşamada — gerçek zamanlı üretim görünürlüğü.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'B2B sipariş portalı',
          description:
            'Yurt içi bayi ve yurt dışı distribütörler için online sipariş portalı.',
          href: '/services/ozel-yazilim',
        },
        {
          title: 'Sunucu altyapısı',
          description:
            'Türkiye veya AB veri merkezlerinde sunucu, otomatik yedekleme, KVKK uyumu.',
          href: '/services/devops-altyapi',
        },
      ],
    },
    bullets: {
      eyebrow: 'Sektörel deneyim',
      title: 'İncesu OSB\'de hangi sektörlere hizmet veriyoruz',
      description:
        'İncesu sanayi bölgesinde çalıştığımız sektörler:',
      items: [
        'Mobilya ve ev tekstili imalatı',
        'Halı ve kilim üretimi',
        'Gıda imalatı ve paketleme',
        'Plastik ve metal sanayi',
        'Yapı malzemeleri imalatı',
        'Tarım ürünleri ve ambalaj',
        'Lojistik ve nakliye',
        'İhracat ticareti',
      ],
    },
    highlights: {
      eyebrow: 'Avantajlar',
      title: 'İncesu\'da yerel partner olmanın değeri',
      description: '',
      items: [
        {
          title: 'OSB tecrübesi',
          description:
            'İncesu OSB ve Kayseri OSB\'deki üretim firmalarıyla deneyimliyiz; süreçleri biliyoruz.',
        },
        {
          title: 'İhracat odaklı',
          description:
            'Çoklu dil, çoklu para birimi, uluslararası kargo ve fatura altyapıları için hazırız.',
        },
        {
          title: 'Saha ziyareti',
          description:
            'Üretim hattına gelir, süreci yerinde gözlemleriz. Çıkardığımız çözüm gerçeğe uyar.',
        },
        {
          title: 'Sürdürülebilir bakım',
          description:
            'Kurumsal aylık bakım paketleri; sistem her zaman güncel ve güvende.',
        },
      ],
    },
    faq: [
      {
        question: 'İncesu OSB\'ye yerinde gelir misiniz?',
        answer:
          'Evet, İncesu OSB\'deki firmalarımız için yerinde keşif görüşmesi yapıyoruz. Üretim hattını, depoyu, ofisi yerinde görmeden çözüm tasarlamayı doğru bulmuyoruz.',
      },
      {
        question: 'İhracat sitemde hangi diller olmalı?',
        answer:
          'Hedef pazarınıza göre değişir. Genel kurallarımız: İngilizce baz olmalı; Arapça (Orta Doğu) ve Rusça (Orta Asya, Rusya) sık talep ediliyor; Almanca ve Fransızca AB pazarı için. Hedef ülkelerinizi netleştirip dil planını birlikte yapıyoruz.',
      },
      {
        question: 'Mevcut Logo Tiger\'ımı koruyabilir miyim?',
        answer:
          'Evet, Logo Tiger\'ı koruyoruz. Onun üzerine veri çeken/yazan özel modüller geliştiriyoruz. Stok, müşteri, fatura verileri Logo\'da kalıyor; yeni iş akışları (B2B portal, üretim takip) etrafına ekleniyor.',
      },
      {
        question: 'B2B portal kurulum süresi?',
        answer:
          'Standart bir B2B sipariş portalı 6-10 hafta. ERP entegrasyonu, fiyat seviyeleri, çoklu dil eklendiğinde 3 aya yaklaşabiliyor. Aşamalı teslim ile ilk kullanılabilir versiyon 4-5 hafta içinde elinizde.',
      },
    ],
    cta: {
      title: 'İncesu\'da üretim gücünüzü dijitale taşıyın',
      description:
        'OSB\'deki üretim tesisinize gelelim, süreci yerinde değerlendirelim.',
    },
  },
];

export function getAllLandingPages(): LandingPage[] {
  return landingPages;
}

export function getLandingPage(slug: string): LandingPage | undefined {
  return landingPages.find((page) => page.slug === slug);
}

export function getLandingSlugs(): string[] {
  return landingPages.map((page) => page.slug);
}
