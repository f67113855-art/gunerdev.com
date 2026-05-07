export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  category: 'Teknoloji' | 'Sektörel Çözümler';
  tags: string[];
  cover: string;
  coverAlt: string;
  readingMinutes: number;
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: 'nextjs-15-modern-web-uygulamasi',
    title: 'Next.js 15 ile Modern Web Uygulaması Geliştirmek',
    excerpt:
      'App Router, server components ve streaming SSR ile birlikte modern web uygulamaları artık çok daha hızlı, ölçeklenebilir ve geliştirici dostu.',
    date: '2026-04-22',
    category: 'Teknoloji',
    tags: ['Next.js', 'React', 'Performans'],
    cover: '/blog/cover-tech-code.jpg',
    coverAlt: 'Next.js 15 yazılım geliştirme',
    readingMinutes: 7,
    content: `Modern web geliştirmede performans, SEO uyumu ve geliştirici verimliliği artık bir tercih değil; rekabet avantajı. Next.js 15, bu üç boyutu da köklü biçimde iyileştiren App Router mimarisini olgunluğa ulaştırdı. Bu yazıda; Next.js 15 ile yeni bir uygulama kurarken hangi kararları vermeniz gerektiğini, hangi tuzaklardan kaçınmanızı önerdiğimizi ve hangi durumlarda hâlâ klasik Pages Router'ı tercih edebileceğinizi anlatacağız.

## App Router gerçekten devrim mi?

App Router, Next.js'in son birkaç yıldır odaklandığı en büyük mimari değişiklik. React Server Components'i (RSC) yerel olarak kullanarak, varsayılan olarak sunucuda render edilen bileşenler oluşturmanıza olanak tanıyor. Bu sayede tarayıcıya gönderilen JavaScript miktarı belirgin biçimde azalıyor; Core Web Vitals metriklerinden Largest Contentful Paint (LCP) ve Total Blocking Time (TBT) doğrudan iyileşiyor.

Ancak bu özellik bir sihir değil. Yanlış kullanılırsa, "use client" sınırlarını dikkatsizce çekerseniz, tüm uygulamanız client component'a dönüşebilir ve avantajları yitirebilirsiniz.

## Sunucu vs istemci sınırını çizmek

Next.js 15 ile geliştirme yaparken kafanızda netleştirmeniz gereken ilk soru şu: Bu bileşen interaktif mi? Eğer state, useEffect, event handler'lar veya tarayıcıya özel API'lar kullanıyorsa client; aksi takdirde server.

Pratik bir kural: Sayfanın iskeleti server component olsun, içindeki interaktif öğeler küçük client component'lara izole edilsin. Örneğin bir blog yazısı sayfasında metin server'da render edilebilirken, "yorum yap" formu client component olarak ayrılabilir.

## Streaming ve loading state'leri

Suspense entegrasyonu sayesinde, sayfanın bir kısmı yüklenirken diğer kısımları gösterilebiliyor. Bu, kullanıcılara boş bir ekran yerine içeriğin parçalı olarak akmasını gösteren modern bir deneyim sağlıyor. \`loading.tsx\` dosyaları ile rota seviyesinde otomatik yüklenme göstergeleri tanımlamak çok kolay.

## Hangi durumda Next.js seçmemeli?

Her proje için Next.js doğru değil. Eğer projeniz tamamen statik (örneğin küçük bir kurumsal tanıtım sitesi) ve hiçbir dinamik içeriğe ihtiyacınız yoksa, Astro veya saf HTML/CSS daha hafif kalabilir. Eğer projeniz çok ağır gerçek zamanlı veri işleyen bir SPA ise, Next.js'in karmaşıklığı gereksiz olabilir.

## Üretime almadan önce kontrol listesi

Bir Next.js 15 uygulamasını yayına almadan önce şunları kontrol edin: \`output: 'standalone'\` ayarı build çıktısını minimumda tutar; \`images\` konfigürasyonunda kullanacağınız tüm uzak alan adları tanımlı olmalı; metadata API ile her sayfanın özel başlık ve açıklaması olmalı; sitemap ve robots dinamik olarak üretilmeli; CSP ve diğer güvenlik başlıkları middleware veya \`next.config.js\` üzerinden eklenmeli.

Bu temel adımlarla, Next.js 15 size sadece bir framework değil; uçtan uca üretim hazır bir platform sunuyor.`,
  },
  {
    slug: 'web-performans-yukleme-suresi',
    title: 'Web Sitenizin Yüklenme Süresini İkiye Katlamak: Performans İpuçları',
    excerpt:
      'Sayfa hızı doğrudan dönüşüme etki eder. 3 saniyeden uzun süren sayfaların ziyaretçilerinin %53\'ünü kaybettiğini biliyor muydunuz?',
    date: '2026-04-15',
    category: 'Teknoloji',
    tags: ['Performans', 'Core Web Vitals', 'SEO'],
    cover: '/blog/cover-tech-perf.jpg',
    coverAlt: 'Web performans ölçümü',
    readingMinutes: 6,
    content: `Performans, modern web sitelerinde hâlâ en çok ihmal edilen alanlardan biri. Tasarım güzel olabilir, içerik kaliteli olabilir; ancak ziyaretçi 3 saniyede sayfayı göremezse, Google Analytics'inizdeki bounce rate sayısı yükselmeye başlar. Bu yazıda, gerçekten ölçülebilir performans iyileştirmeleri için yapabileceğiniz somut adımları derliyoruz.

## Önce ölçün, sonra iyileştirin

Optimizasyona başlamadan önce mevcut durumu net biçimde bilmek gerekir. PageSpeed Insights, WebPageTest ve Lighthouse gibi araçlar size LCP, FID, CLS gibi Core Web Vitals metriklerini verir. Bu metriklerden hangisi kötü? Cevap, sizi nereye odaklanacağınızı söyler.

LCP (Largest Contentful Paint) yavaşsa, büyük ihtimalle hero görseliniz veya başlangıç bundle'ınız çok büyüktür. CLS (Cumulative Layout Shift) yüksekse, görsellere boyut vermemişsiniz veya yazı tipleri gec yükleniyordur. FID (First Input Delay) yüksekse, çok fazla JavaScript var demektir.

## Görselleri optimize etmek

Görseller genellikle bir web sayfasının en ağır yüküdür. Modern formatları (WebP, AVIF) kullanmak, doğru boyutta sunmak ve lazy loading uygulamak hızı iki katına çıkarabilir. Next.js \`<Image>\` component'i bunları otomatik yapar; siz sadece doğru \`sizes\` prop'unu vermeyi unutmayın.

Bir başka kritik nokta: hero görseliniz sayfanın görünür kısmındaysa ona \`priority\` özelliği verin. Bu, lazy loading'i devre dışı bırakır ve tarayıcının onu hemen indirmesini sağlar.

## JavaScript bütçesini koru

Modern bir SPA'nın 1 MB bundle ile gönderildiğini görmek artık şaşırtıcı değil. Ancak bu, mobilde 3G bağlantısı olan bir ziyaretçi için 5-6 saniyelik bir indirme süresi demek. Hedefiniz: ilk yüklemede 100-200 KB altında JavaScript göndermek.

Bunu nasıl başarırsınız? Önce kullanılmayan kütüphaneleri tespit edin (\`npm ls --prod\` ile başlayabilirsiniz). Sonra dynamic import ile sayfa bazlı kod bölmeleri uygulayın. React Server Components'i benimseyerek tarayıcıya hiç JavaScript göndermeden render edebileceğiniz bileşenleri belirleyin.

## Yazı tiplerini akıllı yükleyin

Web yazı tipleri, özellikle Google Fonts kullanılıyorsa, görünür içerik kaymalarına neden olur. \`font-display: swap\` ile başlayın; ardından Next.js'in \`next/font\` özelliğini kullanarak yazı tiplerini self-host edin. Bu, hem performans hem de gizlilik açısından kazanç.

## CDN ve cache stratejisi

Statik varlıklarınız (CSS, JS, görseller) bir CDN üzerinden sunulmalı. NGINX, Cloudflare veya BunnyCDN gibi seçenekler hem ucuz hem etkili. Cache header'larını doğru yapılandırın: değişmeyen varlıklara \`max-age=31536000, immutable\` verin; HTML için ise daha kısa süreler.

Bu adımları sistematik biçimde uyguladığınızda, mevcut sitenizin yüklenme süresini gerçekten ikiye katlamak — yani yarıya indirmek — mümkün. Ölçülebilir, gözlemlenebilir, satışlarınıza yansıyan bir kazanç.`,
  },
  {
    slug: 'core-web-vitals-seo',
    title: 'SEO İçin Teknik Temel: Core Web Vitals Nedir, Nasıl İyileştirilir?',
    excerpt:
      'Google\'ın 2021\'den beri sıralama faktörü olarak kullandığı Core Web Vitals metrikleri, hâlâ pek çok site sahibinin radarında değil.',
    date: '2026-04-08',
    category: 'Teknoloji',
    tags: ['SEO', 'Core Web Vitals', 'Performans'],
    cover: '/parallax-tech.jpg',
    coverAlt: 'SEO ve Google sıralaması',
    readingMinutes: 6,
    content: `Google, 2021 yılında Core Web Vitals'i resmi sıralama faktörü olarak duyurduğunda pek çok site sahibinin gündemine girdi. Aradan geçen yıllarda metrikler güncellendi, bazıları emekliye ayrıldı, yenileri eklendi. Bu yazıda 2026 yılı itibarıyla geçerli üç temel metriği ve nasıl iyileştireceğinizi anlatıyoruz.

## LCP: Largest Contentful Paint

Sayfanızdaki en büyük görünür öğenin (genellikle bir görsel veya başlık) ne kadar sürede yüklendiğini ölçer. Hedefiniz 2.5 saniyenin altı olmalı.

LCP'yi iyileştirmek için: hero görselinizi optimize edin, sunucu yanıt sürenizi (TTFB) azaltın, render-blocking kaynakları (JS, CSS) minimize edin. Bir CDN kullanmak ve görseller için \`fetchpriority="high"\` belirtmek hızlı kazanımlar getirir.

## INP: Interaction to Next Paint

2024'te FID'in yerine geçen INP, kullanıcının bir butona tıkladığında sayfanın bir sonraki tepkiyi vermesinin ne kadar sürdüğünü ölçer. Hedef: 200ms altı.

INP genellikle ana iş parçacığını uzun süre meşgul eden JavaScript'ten kaynaklanır. Kalın bir event handler'ınız mı var? Ağır hesaplamayı \`requestIdleCallback\` veya bir Web Worker'a taşıyın. Liste render'ları varsa, virtualization (örneğin react-window) düşünün.

## CLS: Cumulative Layout Shift

Sayfa yüklenirken öğelerin ne kadar kaydığını ölçer. 0.1 altı iyi sayılır.

CLS'i azaltmanın en hızlı yolu: tüm görsellere ve iframe'lere genişlik/yükseklik vermek; reklam alanlarına yer ayırmak; web fontlarını \`font-display: optional\` veya self-host ile yüklemek; dinamik içerik ekleyen pop-up ve banner'ları sayfanın üstüne enjekte etmek yerine alta veya modal olarak göstermek.

## Mobil mi masaüstü mü?

Google, sıralama için artık mobil-öncelikli indeksleme kullanıyor. Yani Core Web Vitals skorunuz mobilde değerlendiriliyor. Masaüstünüz mükemmel olabilir; eğer mobilde sorun varsa SEO'nuz etkilenir. Test ederken her zaman PageSpeed Insights'ın "Mobile" sekmesini öncelikleyin.

## Gerçek kullanıcı verisi (RUM) vs lab testi

Lighthouse gibi lab testleri, sınırlı koşullarda yapılan tekil ölçümlerdir. Google, sıralama için Chrome User Experience Report (CrUX) verisini kullanır — bu gerçek kullanıcılarınızdan toplanan veridir.

Yani sadece Lighthouse skorunuza güvenmeyin. Search Console'da Core Web Vitals raporunu düzenli takip edin. Burada gerçek kullanıcılarınızın yaşadığı durumu görürsünüz.

## Ne zaman dahili optimizasyon yetmez?

Bazen sadece kod optimize ederek hedef metriklere ulaşamazsınız. Eğer paylaşımlı hosting kullanıyorsanız sunucu yanıt süreniz yüksek olabilir; eğer eski bir CMS üzerinde çalışıyorsanız temiz HTML üretmek imkansız olabilir. Bu durumlarda mimari değişiklik (örneğin headless yapıya geçiş) gerekebilir.

Core Web Vitals teknik bir konu olsa da, sonunda kullanıcı deneyimine bakar. İyi metrikler, mutlu kullanıcılar ve daha iyi dönüşümler demek.`,
  },
  {
    slug: 'kvkk-uyumlu-iletisim-formu',
    title: 'Türkiye\'de KVKK Uyumlu İletişim Formu Nasıl Tasarlanır?',
    excerpt:
      'KVKK uyumu sadece "açık rıza metni eklemek" değildir. Veriyi nasıl topladığınız, sakladığınız ve sildiğiniz de denetlenebilir.',
    date: '2026-03-30',
    category: 'Teknoloji',
    tags: ['KVKK', 'Form', 'Güvenlik'],
    cover: '/blog/cover-tech-security.jpg',
    coverAlt: 'Veri gizliliği ve KVKK',
    readingMinutes: 7,
    content: `İletişim formu, hemen her web sitesinin sahip olduğu basit bir bileşen gibi görünür. Ancak Türkiye'de Kişisel Verilerin Korunması Kanunu (KVKK) çerçevesinde değerlendirildiğinde, bu basit form bir "veri sorumlusu" sıfatı doğurabilir. Yanlış yapılandırılmış bir form, kurumunuzu hukuki risk altına sokar.

Bu yazıda, KVKK uyumlu bir iletişim formu tasarlarken dikkat etmeniz gereken temel noktaları derliyoruz.

## Veri minimizasyonu prensibi

KVKK'nın temel ilkelerinden biri "amaçla bağlantılı, sınırlı ve ölçülü olmak"tır. Yani sadece ihtiyacınız olan veriyi toplayın. Sadece dönüş yapmak için iletişim formunda mı kullanıyorsunuz? O zaman ad ve e-posta yeterlidir; doğum tarihi, TC kimlik numarası gibi alanlar gereksizdir.

Pratik bir kural: Her form alanına bakın ve sorun: "Bu veriyi neden topluyoruz?" Cevap belirsizse, alanı kaldırın.

## Aydınlatma metni ve açık rıza

Form gönderiminden önce kullanıcıya iki şey gösterilmelidir: aydınlatma metni ve açık rıza onayı.

Aydınlatma metni şunları içermeli: kim olduğunuz (veri sorumlusu), hangi veriyi topladığınız, ne amaçla işlediğiniz, kimlerle paylaştığınız (varsa), ne kadar süre sakladığınız, kullanıcının hakları (silme, düzeltme, itiraz vb).

Açık rıza ise basit bir checkbox'tan ibaret değil. Kullanıcı, ne kadar bilgilendirildiğini ve neye onay verdiğini açıkça anlamalı. "Tüm koşulları kabul ediyorum" gibi muğlak ifadeler riskli; "Aydınlatma metnini okudum, kişisel verilerimin yukarıda belirtilen amaçla işlenmesine açık rızam vardır" gibi spesifik ifadeler tercih edilmeli.

## Verinin nereye gittiği önemli

Form gönderildiğinde veri nereye gidiyor? Bir e-posta servisine mi (Mailgun, SendGrid)? Bir CRM'e mi (HubSpot, Salesforce)? Üçüncü taraf bir hizmete veri aktarıldığında, KVKK kapsamında "yurt dışına veri aktarımı" olabilir. Bu durumda ek koşullar (ilgili kişinin açık rızası veya yeterli koruma sağlayan ülkeye aktarım) aranır.

Pratik öneri: mümkün olduğunca veriyi kendi sunucunuzda işleyin ve saklayın. Webhook ile Telegram'a bildirim göndermek (basit, kişisel kullanım) makul bir tercih olabilir; ancak bunun bile aydınlatma metninde belirtilmesi gerekir.

## Saklama süresi

KVKK, "süreyle sınırlı saklama" prensibini öngörür. İletişim formundan gelen bir mesajı 5 yıl tutmak için bir gerekçeniz var mı? Genellikle 6-12 ay yeterli; sonrasında veriyi anonim hale getirin veya silin.

Otomatik silme mekanizması (cron job veya benzeri) kurarak bu süreci insan müdahalesi olmadan yönetebilirsiniz.

## Teknik güvenlik önlemleri

Verinin güvenli iletilmesi (HTTPS şart), saklanması (veritabanında şifrelenmesi), ve erişiminin kısıtlanması (sadece yetkili kişilerin görmesi) KVKK'nın "uygun güvenlik önlemleri" şartını karşılar.

Form için ek olarak: bot saldırılarına karşı IP bazlı rate limiting, honeypot veya hCaptcha gibi koruma katmanları eklenmeli.

## Veri ihlali bildirimi

Eğer bir veri ihlali (örneğin form gönderimleri sızdırıldı) yaşanırsa, KVKK 72 saat içinde Kurum'a bildirim yapmanızı zorunlu tutar. İhlal kapsamı geniş olabilir: sızıntı, kayıp, izinsiz erişim. Bu yüzden başından itibaren doğru güvenlik mimarisi kurmak, sonradan kriz yönetiminden çok daha ucuz.

Sonuç olarak, KVKK uyumlu bir form bir hukuk işi değildir; teknik bir tasarım kararıdır. Doğru yapıldığında, hem yasal koruma sağlar hem de kullanıcılarınızın güvenini kazanırsınız.`,
  },
  {
    slug: 'headless-cms-vs-wordpress',
    title: 'Headless CMS mi, WordPress mi? Karar Verme Rehberi',
    excerpt:
      'WordPress hâlâ web\'in büyük bir kısmını çalıştırıyor. Ama modern projeler için headless yaklaşım giderek daha mantıklı hale geliyor.',
    date: '2026-03-22',
    category: 'Teknoloji',
    tags: ['CMS', 'Headless', 'WordPress'],
    cover: '/blog/cover-tech-mobile.jpg',
    coverAlt: 'CMS karşılaştırma',
    readingMinutes: 6,
    content: `İçerik yönetim sistemi (CMS) seçimi, bir web projesinin başında alınan en uzun ömürlü kararlardan biridir. WordPress, web'in yaklaşık %43'ünü çalıştırmaya devam ediyor; aynı zamanda Strapi, Sanity, Contentful gibi headless CMS'ler de hızla yayılıyor. Hangisi sizin projeniz için doğru?

## WordPress'in güçlü yanları

WordPress 20 yılı aşkın süredir geliştirilen, devasa bir eklenti ekosistemine sahip, neredeyse her geliştiricinin tanıdığı bir platform. Kurmak kolay, düşük maliyetli hosting ile hızlıca yayına alınır. Müşteriniz içerik üretmeye alışkınsa, WordPress'in editör arayüzü tanıdık gelir.

Eğer projeniz "biraz blog, biraz tanıtım sayfası" türündeyse, WordPress hâlâ pratik bir seçim. ACF, WPML, WooCommerce gibi olgun eklentilerle gelişmiş ihtiyaçları da karşılar.

## WordPress'in zayıf yanları

WordPress'in en büyük sorunu, monolitik mimarisi. Tema ve eklentiler içerik, sunucu ve sunum katmanlarını iç içe geçirir. Bu, performans optimizasyonunu zorlaştırır; güvenlik açıkları artırır; modern frontend frameworks ile entegrasyon karmaşıklaştırır.

Ayrıca her güncelleme bir potansiyel risktir. Eklentilerden biri güncel değilse, WordPress 6.5'e geçişte sitemiz kırılabilir. Bu yüzden çok eklenti kullanan WordPress siteleri, bir süre sonra "dokunmaya korkulan" hale gelir.

## Headless CMS yaklaşımı

Headless CMS, içerik yönetim arayüzünü (back-office) sunum katmanından (frontend) ayırır. İçerik bir API üzerinden sunulur; siz frontend'i istediğiniz framework ile (Next.js, Nuxt, SvelteKit) inşa edersiniz.

Avantajları belirgin: performans olağanüstü, çünkü statik veya streaming SSR ile sayfa üretebilirsiniz. Güvenlik daha iyi, çünkü içerik yönetim arayüzü ayrı bir alt alan adında. Çoklu kanala içerik dağıtmak (web, mobil uygulama, dijital tabela) tek API üzerinden mümkün.

## Maliyet karşılaştırması

WordPress: hosting ucuz (5-20 USD/ay), kurulum hızlı, eklentiler genellikle ücretsiz. Toplam maliyet düşüktür.

Headless CMS: Sanity ve Contentful'un ücretli planları ayda 50-500 USD bandında olabilir. Strapi self-hosted ise hosting maliyeti var. Geliştirme süresi de daha uzun çünkü frontend sıfırdan yazılır.

Ancak uzun vadede headless siteler daha az bakım gerektirir; performans avantajları SEO ve dönüşüme yansır. 3 yıllık toplam maliyet hesaplandığında fark kapanabilir.

## Hangi durumda hangisi?

WordPress seç:
- Bütçen sınırlıysa
- Ekibinde WordPress bilen var
- Klasik blog/tanıtım sitesi yapacaksan
- Eklenti ekosisteminden yararlanmak istiyorsan

Headless CMS seç:
- Yüksek performans gerekiyorsa
- Çoklu kanal hedefliyorsan
- Modern frontend framework ile çalışıyorsan
- İçerik üreticileriniz görsel editör konusunda esnek
- Uzun vadeli düşük bakım istiyorsan

## Hibrit yaklaşımlar

Son yıllarda WordPress'i bir headless CMS gibi kullanmak da yaygınlaştı. WordPress'in REST API veya WPGraphQL eklentisi ile içerik sunulur, frontend Next.js olarak yazılır. Hem WordPress'in tanıdık editörü, hem de modern frontend avantajları.

Sonuç: doğru CMS seçimi, projenizin gerçek ihtiyaçlarını anlamakla başlar. "Trend" olduğu için seçmeyin; sizin için doğru olanı seçin.`,
  },
  {
    slug: 'ssr-vs-ssg-karar',
    title: 'Server-Side Rendering vs Static Generation: Hangisi Sizin İçin?',
    excerpt:
      'SSR, SSG, ISR... Render stratejilerinin doğru seçimi performans, SEO ve maliyet üzerinde belirleyici etkiye sahip.',
    date: '2026-03-14',
    category: 'Teknoloji',
    tags: ['SSR', 'SSG', 'Mimari'],
    cover: '/kayseri-1.jpg',
    coverAlt: 'SSR ve SSG karşılaştırması',
    readingMinutes: 6,
    content: `Modern web framework'leri size birden fazla render stratejisi sunar: Static Site Generation (SSG), Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), Client-Side Rendering (CSR) ve karışım modeller. Hepsi kulağa benzer geliyor; ama her birinin kendine özgü avantajı, dezavantajı ve ideal kullanım senaryosu var.

## SSG: Build zamanında üretim

Static Site Generation'da sayfalar build zamanında HTML olarak oluşturulur. Bir kullanıcı geldiğinde sunucu sadece dosyayı sunar — hiçbir hesaplama yok, hiçbir veritabanı sorgusu yok. Sonuç: muhteşem hız, mükemmel cache, neredeyse sıfır sunucu maliyeti.

Hangi sayfalar için ideal? Blog yazıları, dokümantasyon, ürün katalogları (içeriği sık değişmeyen), pazarlama sayfaları. CDN üzerinden dünya çapında dağıtılabilir.

Dezavantajı? İçerik değiştiğinde tekrar build etmek gerek. 10.000 sayfalık bir site için bu dakikalar sürebilir.

## SSR: İstek zamanında üretim

Server-Side Rendering'de her HTTP isteğinde sunucu sayfayı dinamik olarak oluşturur. Kullanıcının diline, oturum durumuna, konumuna göre farklı içerik gösterebilirsiniz.

İdeal kullanım: kullanıcıya özel içerik (e-ticaret sepeti, hesap dashboard'u), gerçek zamanlı veri (borsa fiyatları, canlı skor), kişiselleştirilmiş öneri sistemleri.

Dezavantajı? Her istek sunucu kaynağı tüketir. Trafik artarsa sunucu maliyetiniz de artar. Cache ile bu durum yumuşatılabilir.

## ISR: İkisinin arası

Incremental Static Regeneration, SSG'nin avantajlarını korur ama içeriği belirli aralıklarla yeniden oluşturur. Örneğin bir blog yazısını her saat başı arka planda yeniden render etmek.

Bu, "büyük çoğunluk için statik hızı, içerik güncellemeleri için otomatik tazelik" sunar. Next.js'in en güçlü özelliklerinden biri.

İdeal kullanım: ürün sayfaları (fiyat değişebilir), haber siteleri, blog'lar (yorumlar dahil edilirse).

## On-demand revalidation

Klasik ISR'de sayfa belirli aralıklarla yenilenir. On-demand revalidation ile siz programatik olarak "şu sayfayı şimdi yenile" diyebilirsiniz. Örneğin admin panelinden bir ürün güncellendiğinde, ilgili sayfaları anında yenilemek için.

Bu, blog veya CMS güncellemeleri ile mükemmel uyum sağlar. WordPress webhook'undan tetiklenen Next.js revalidation tipik bir senaryo.

## CSR: Tarayıcıda render

Client-Side Rendering, eski usul React SPA'lar gibi tüm render'ı tarayıcıya bırakır. SEO açısından kötü, ilk yükleme yavaş; ama gerçekten interaktif uygulamalar için (örneğin Figma, Notion gibi araçlar) hâlâ yer var.

## Karışım modeller

Modern uygulamalarda tek bir strateji yetmez. Anasayfa SSG, ürün listesi ISR, sepet SSR, dashboard CSR olabilir. Next.js App Router bu seçimi sayfa bazında yapmanıza olanak tanır.

## Maliyet ve operasyon farkı

SSG: CDN'den sunulur, sunucu yok denecek kadar az maliyet (ayda 5-20 USD).

SSR: Sürekli çalışan sunucular gerektirir. PM2 + NGINX ile bir VPS yeterli olabilir, ama trafik arttıkça yatay ölçeklenme gerekir (50-200 USD/ay).

ISR: SSG ile aynı maliyet profili; tek fark sunucunun arada bir build çalıştırması.

## Sonuç

Tek bir doğru cevap yok. Sayfa bazında karar verin: bu sayfayı saniyede kaç kişi ziyaret ediyor, içeriği ne kadar sıklıkta değişiyor, kişiselleştirme gerekiyor mu. Bu sorulara verdiğiniz cevap, doğru render stratejisini söyler.`,
  },
  {
    slug: 'web-guvenlik-7-yol',
    title: 'Web Sitenizi Hacker\'lardan Korumanın 7 Yolu',
    excerpt:
      'Veri sızıntısı, fidye yazılımı, defacement... Web güvenliği artık büyük şirketlerin sorunu değil; her boyutta saldırıya açık.',
    date: '2026-03-06',
    category: 'Teknoloji',
    tags: ['Güvenlik', 'OWASP', 'DevOps'],
    cover: '/erciyes.jpg',
    coverAlt: 'Web güvenlik kalkanı',
    readingMinutes: 7,
    content: `Web güvenliği, çoğu küçük ve orta ölçekli işletme için "biz neden hedef olalım ki" tavrıyla atlanan bir konu. Oysa otomatik tarayıcılar saldırı için spesifik kurban seçmez; tüm internete dağılırlar. Bir gece, sitenizin defacement saldırısına uğradığını veya tüm veritabanınızın çalındığını öğrenmek istemiyorsanız, temel güvenlik adımlarını mutlaka uygulayın.

## 1. HTTPS, sadece HTTPS

Hâlâ HTTP üzerinden çalışan siteler var. 2026'da bu kabul edilemez. Let's Encrypt ile ücretsiz SSL sertifikası alın. NGINX veya Apache üzerinde HTTP'den HTTPS'e 301 yönlendirmesi yapın. HSTS başlığı ekleyin ki tarayıcı sizinle her zaman HTTPS üzerinden konuşsun.

\`Strict-Transport-Security: max-age=63072000; includeSubDomains; preload\`

## 2. Güçlü güvenlik başlıkları

Modern tarayıcılar bir dizi güvenlik başlığını destekler. En kritikleri:

- **Content-Security-Policy**: XSS saldırılarına karşı en güçlü kalkan
- **X-Frame-Options**: Clickjacking'i engeller
- **X-Content-Type-Options: nosniff**: MIME-type sniffing'i engeller
- **Referrer-Policy**: Hassas URL'lerin sızmasını önler
- **Permissions-Policy**: Tarayıcı API'lerine erişimi kısıtlar

Bu başlıkları NGINX veya framework seviyesinde tanımlayın ve düzenli olarak securityheaders.com gibi araçlarla test edin.

## 3. Bağımlılıkları güncel tutun

Çoğu güvenlik açığı, kullandığınız kütüphanelerden gelir. \`npm audit\`, Dependabot, Snyk gibi araçlar ile düzenli olarak bağımlılıklarınızı tarayın.

Sadece major güncellemelere değil, patch sürümlere de dikkat edin. \`react@18.3.0\`'dan \`18.3.1\`'e geçiş bir güvenlik açığını kapatmış olabilir.

## 4. Rate limiting ve bot koruması

Kötü niyetli botlar dakikada binlerce istek gönderebilir; iletişim formunuzu spam'le doldurur, login endpoint'inizi brute force eder. NGINX seviyesinde IP bazlı rate limiting kurun. Cloudflare veya benzer bir CDN kullanıyorsanız, bot management özelliklerini etkinleştirin.

İletişim formunuza honeypot alanı ekleyin (görünmez bir input — botlar doldurur, insanlar dolduramaz). Daha güçlü koruma için hCaptcha veya Cloudflare Turnstile kullanın.

## 5. Veritabanı erişimini kısıtlayın

Eğer bir saldırgan uygulamanıza sızarsa, veritabanına ne kadar erişebilir? İdeal olarak, uygulama veritabanı kullanıcısı sadece ihtiyacı olan tabloları okuyabilmeli, sadece ihtiyacı olan satırları yazabilmeli.

PostgreSQL veya MySQL'de farklı kullanıcılar farklı yetkilerle oluşturun. Production veritabanı şifresini asla kod repolarına commit etmeyin.

## 6. Loglama ve izleme

Saldırıya uğradığınızı fark etmek aylar alabilir. Düzenli loglama ile bu süreyi günlere indirebilirsiniz. NGINX access ve error logları, uygulama logları, sunucu auth logları (\`/var/log/auth.log\`) düzenli izlenmeli.

Sentry, Datadog, veya kendi self-hosted çözümlerinizle (Loki + Grafana) anormal aktiviteleri yakalayın. Beklenmeyen 500 hata patlaması, normal olmayan bir IP'den gelen yüksek trafik — bunlar erken uyarı sinyalleridir.

## 7. Yedekleme stratejisi

En iyi savunmaya rağmen bir gün saldırıya uğrayabilirsiniz. Yedekleriniz var mı? Test edilmiş mi?

Düzenli (günlük) veritabanı yedekleri, haftalık tam sistem yedekleri, en az iki farklı lokasyonda saklanmalı (sunucuda + cloud, örneğin Backblaze B2). Yedeklerinizi belirli aralıklarla test geri yükleme ile doğrulayın — yedek alındığını sandığınız ama bozuk olduğunu sonradan öğrenmek istemezsiniz.

## Bonus: 3-2-1 kuralı

3 yedek, 2 farklı medyada, 1 tanesi off-site. Bu klasik kural hâlâ geçerliliğini koruyor.

Güvenlik bir defalık iş değil; sürekli bir disiplindir. Bu 7 adımı uygulayarak çoğu otomatik saldırıya karşı korunmuş olursunuz. Hedefli saldırılara karşı ise ek katmanlar (WAF, penetrasyon testleri, security audit) gerekir.`,
  },
  {
    slug: 'pwa-progressive-web-app',
    title: 'PWA: Mobil Uygulama Maliyeti Olmadan Mobil Deneyim',
    excerpt:
      'Native uygulama geliştirme pahalı ve karmaşık. PWA, çoğu işletme için mantıklı ve hızlı bir alternatif sunuyor.',
    date: '2026-02-26',
    category: 'Teknoloji',
    tags: ['PWA', 'Mobil', 'Performans'],
    cover: '/kayseri-2.jpg',
    coverAlt: 'PWA mobil uygulama',
    readingMinutes: 6,
    content: `Bir mobil uygulama geliştirmek istediğinizde önünüze çıkan tablo: iOS için ayrı geliştirme, Android için ayrı geliştirme, App Store onay süreçleri, %30 komisyon, sürekli güncellemeler... Maliyet hızlıca 100.000 TL'leri bulur ve bakım masrafı sürer.

PWA (Progressive Web App), pek çok işletme için bu denkleme bir alternatif sunar. Hem maliyet hem geliştirme süresi açısından.

## PWA tam olarak nedir?

PWA, modern web teknolojileriyle yapılmış ve mobil uygulamalara benzer özelliklere sahip web siteleridir. Telefon ana ekranına eklenebilir, tam ekran çalışır, offline modda çalışabilir, push bildirim gönderebilir, GPS/kamera gibi cihaz API'larına erişebilir.

Tarayıcı tabanlıdırlar, ama kullanıcı deneyimi bir native uygulamaya çok yakındır.

## Hangi durumda PWA mükemmel?

İşinizin temel ihtiyacı içerik göstermek, sipariş almak, randevu yönetmek gibi standart akışlarsa, PWA fazlasıyla yeterli. Restoran, butik, danışmanlık ofisi, küçük e-ticaret, bilgi portalı — bunların hepsi PWA ile mükemmel hizmet verir.

Twitter, Spotify, Pinterest, Starbucks gibi markalar PWA versiyonlarını başarıyla kullanıyor. Starbucks PWA'sı, native uygulamalarına göre %2'si büyüklüğünde.

## Hangi durumda yetmez?

Eğer uygulamanız çok yoğun grafik işleme (3D oyunlar), düşük seviye donanım erişimi (Bluetooth gerektiren cihaz kontrolü), karmaşık arkaplan işlemleri (sürekli sensor takibi) gibi şeyler yapacaksa, native gerekebilir.

Ayrıca App Store ve Google Play'de görünmek bir pazarlama avantajıysa (ki kullanıcı edinme stratejiniz oraya dayanıyorsa), native veya hibrit (React Native, Flutter) düşünebilirsiniz.

## Maliyet karşılaştırması

Bir tipik PWA: 50.000-150.000 TL (varolan web sitenizin üzerine inşa edilirse, 20.000-60.000 TL). Geliştirme süresi: 4-8 hafta.

Native uygulama (iOS + Android): 200.000-500.000 TL. Geliştirme süresi: 4-9 ay.

Hibrit (React Native, Flutter): 150.000-300.000 TL. Geliştirme süresi: 3-6 ay.

PWA'nın maliyet avantajı yadsınamaz.

## SEO bonusu

PWA'lar aslında web siteleridir; Google tarafından indekslenirler. Yani aynı kod hem mobil uygulamanız, hem de SEO açısından güçlü web sitenizdir. Native uygulamalar Google aramasında görünmez (bazı app indeksleme istisnaları dışında).

## Push bildirim

PWA'ların en güçlü yanlarından biri, kullanıcılarına push bildirim gönderebilmesi. Yeni kampanya, sipariş durumu, randevu hatırlatması — kullanıcı uygulamayı kapalı olsa bile bildirim alır.

iOS'ta tarihsel olarak push bildirimler PWA'larda çalışmıyordu; ancak iOS 16.4'ten itibaren bu sınırlama kaldırıldı. Artık tüm major platformlar push bildirim destekliyor.

## Offline çalışma

Service Worker teknolojisi sayesinde PWA'lar offline modda da çalışabilir. Bağlantı koptuğunda ziyaretçiniz uygulamayı kullanmaya devam eder; bağlantı geri geldiğinde değişiklikler senkronize edilir.

Bu özellik özellikle saha çalışanlarına yönelik uygulamalar (dağıtım, kurye, denetim) için kritik.

## Uygulama mağazası alternatifi

Ana ekrana eklenmek için kullanıcıyı App Store/Play Store'a göndermenize gerek yok. Tarayıcıda "Ana ekrana ekle" butonu çıkar; tek tık ile uygulama ana ekrana yerleşir. Onay süreci yok, %30 komisyon yok.

İsterseniz Trusted Web Activity (TWA) ile PWA'nızı Play Store'a da yükleyebilirsiniz. App Store için PWABuilder gibi araçlar var.

## Sonuç

PWA, "uygulama gerekli" denkleminin tek cevabı değil. Ama 2026'da pek çok küçük-orta işletme için en akıllı, en hızlı ve en uygun maliyetli yol. Önce ihtiyacınızı net tanımlayın; PWA'nın size yetip yetmeyeceğini değerlendirin.`,
  },
  {
    slug: 'api-first-yaklasim',
    title: 'API-First Yaklaşım: Geleceğe Hazır Yazılım Mimarisi',
    excerpt:
      'API\'leri sonradan eklenecek bir özellik gibi düşünmek artık geride kaldı. Modern yazılım, API\'lerin etrafında kuruluyor.',
    date: '2026-02-18',
    category: 'Teknoloji',
    tags: ['API', 'Mimari', 'Backend'],
    cover: '/kayseri-3.jpg',
    coverAlt: 'API mimarisi',
    readingMinutes: 6,
    content: `Geleneksel yazılım geliştirme yaklaşımında, önce arayüz tasarlanır, sonra arayüze uygun bir backend yazılır. API'ler, başka bir kanaldan erişim gerekiyorsa sonradan eklenir. Bu yaklaşım hızlı başlangıç sağlar; ancak ilk yıldan sonra ciddi sorunlar üretir.

API-First yaklaşım bunu tersine çevirir: önce API tasarlanır, sonra bu API'yi tüketen frontend (web, mobil, dijital tabela, vb) inşa edilir.

## Neden API-First?

İşletmenizin müşterileri sadece web sitesinden mi geliyor? Mobil uygulamadan mı? Sosyal medya entegrasyonu var mı? Belki bir gün bir chat-bot, belki bir IoT cihaz, belki bir ortağa entegrasyon gerekecek.

Tüm bu kanalların ortak ihtiyacı şudur: aynı veri, aynı mantık. Eğer her kanal kendi backend'ini yazarsa, aynı işi defalarca yapmış olursunuz; tutarsızlıklar başlar.

API-First mimaride, iş mantığı tek bir yerde toplanır: API katmanı. Web, mobil, ortak entegrasyonları, tümü bu API'yi tüketir.

## Tasarım önce, kod sonra

API-First demek, ilk olarak API kontratını yazmak demek. OpenAPI (eski adıyla Swagger) spesifikasyonu bu iş için yaygın bir araç.

Endpoint'lerinizi, veri tiplerinizi, hata durumlarınızı önce dokümante edersiniz. Sonra hem backend hem frontend ekibi bu spesifikasyona göre paralel çalışır. Frontend için mock server kurulur (Prism, Mockoon gibi), backend tamamlanmadan UI geliştirilir.

Bu yaklaşım hem geliştirme süresini kısaltır hem de entegrasyon sürprizlerini önler.

## REST mi GraphQL mi tRPC mi?

REST, hâlâ en yaygın API mimari tarzı. Olgun, anlaşılır, geniş ekosistem. Çoğu işletme için ilk tercih.

GraphQL, frontend'in "ne lazımsa onu istemesine" izin verir. Aşırı/eksik veri sorunlarını çözer. Ancak öğrenme eğrisi dik, caching karmaşık.

tRPC, TypeScript merkezli ekosistemler için güçlü bir alternatif. Kontrat backend ve frontend arasında otomatik paylaşılır; tip güvenliği uçtan uca sağlanır.

Hangisini seçeceğiniz takıma, projeye, ekosisteme bağlı.

## Versioning kritik

API'leriniz dış dünyaya açıldığında, geri dönüşü olmayan kararlar vermiş olursunuz. Bir endpoint'i değiştirmek, mobil uygulamasının eski versiyonunu kıracaksa düşünmeniz gerek.

Versioning iki yaygın yöntemle yapılır: URL'de (\`/api/v1/...\`) veya header'da (\`Accept: application/vnd.company.v1+json\`). Her iki yaklaşımın avantajları var; ekibin tercihi belirleyici.

## Authentication ve authorization

API'leriniz dış dünyaya açıkken authentication şart. JWT, OAuth 2.0, API key gibi seçenekler var. Hangisini kullanacağınız tüketici tipine bağlı: kendi mobil uygulamanız için JWT, üçüncü taraf ortaklar için OAuth 2.0 mantıklı.

Authorization (kim neyi yapabilir) ayrı bir tartışma. Role-based veya attribute-based modeller kurun. Hassas endpoint'leri her zaman çift katmanlı koruyun: hem kimlik doğrulama hem yetki kontrolü.

## Rate limiting ve quota

API'lerinizin kötüye kullanımdan korunması için rate limiting şart. IP veya API key bazında dakikada/saatte/günde belirli istek sayısı tanımlanmalı. Aşan istekler 429 Too Many Requests ile reddedilir.

Premium müşterilere daha yüksek quota tanıyabilirsiniz. Bu hem güvenlik hem ticari bir araç.

## Dokümantasyon zorunlu

Bir API'yi başkalarının kullanması için dokümantasyon olmalı. OpenAPI spec'inden otomatik üretilen Swagger UI veya Redoc gibi araçlar bu işi kolaylaştırır.

İyi dokümantasyon: her endpoint açıklanmış, örnek istekler ve cevaplar verilmiş, hata durumları belirtilmiş, authentication akışı net anlatılmış.

## Sonuç

API-First yaklaşım kısa vadede biraz daha fazla planlama gerektirir; ama uzun vadede hem geliştirme hızı, hem entegrasyon kalitesi, hem de ölçeklenme açısından kazandırır. Yeni bir proje başlatıyorsanız, "API'leri sonra ekleriz" demek yerine ilk gün API tasarımına yatırım yapın.`,
  },
  {
    slug: 'web-erisilebilirlik',
    title: 'Web Erişilebilirliği: Sadece Yasal Zorunluluk Değil, Kullanıcı Deneyimi',
    excerpt:
      'Web erişilebilirliği "engelliler için ek özellik" olarak görülmemelidir. Doğru yapıldığında herkesin deneyimini iyileştirir.',
    date: '2026-02-10',
    category: 'Teknoloji',
    tags: ['Erişilebilirlik', 'A11y', 'UX'],
    cover: '/kayseri-4.jpg',
    coverAlt: 'Web erişilebilirlik',
    readingMinutes: 6,
    content: `Web erişilebilirliği (a11y), genellikle "ekran okuyucu kullanan görme engelliler için" olarak dar bir çerçevede algılanır. Oysa erişilebilirlik aslında çok daha geniş bir alandır ve doğru uygulandığında tüm kullanıcı deneyimini iyileştirir.

## Erişilebilirlik kimleri etkiler?

Doğrudan etkilenenler: görme engelliler (ekran okuyucu kullanırlar), hareket engelliler (sadece klavye kullanırlar), işitme engelliler (videolar için altyazı gerekir), bilişsel zorluk yaşayanlar (sade dil, net hiyerarşi gerekir).

Dolaylı olarak: yaşlılar (büyük yazı, yüksek kontrast), geçici sınırlamalar (kolu kırılan, gözünü ameliyat olan), zor koşullar (güneşli ortamda mobil ekran, gürültülü yer), yavaş bağlantılar.

WHO verilerine göre dünya nüfusunun yaklaşık %15'i bir tür engelle yaşıyor. Türkiye'de bu oran daha da yüksek. Erişilebilir olmayan bir web sitesi, bu pazarın tamamını dışlar.

## WCAG: Standart referans

Web Content Accessibility Guidelines (WCAG), erişilebilirlik için uluslararası standart. Üç seviye: A (asgari), AA (önerilen), AAA (mükemmel). Çoğu kurumsal site AA hedeflemeli.

WCAG dört prensip etrafında kurulu: Algılanabilir (Perceivable), Çalıştırılabilir (Operable), Anlaşılır (Understandable), Sağlam (Robust). Kısaca POUR.

## Semantik HTML temeldir

Doğru HTML elementleri kullanmak erişilebilirliğin %50'sidir. Buton için \`<button>\`, link için \`<a>\`, form için \`<form>\` ve \`<label>\`, başlık için \`<h1>\`-\`<h6>\` hiyerarşik kullanılmalı.

\`<div onClick={...}>\` ile buton yapmak erişilebilirlik faciasıdır. Ekran okuyucu bunu buton olarak tanımaz, klavye ile odaklanılamaz.

## Renk kontrastı ve görsel hiyerarşi

Metin ile arkaplan arasındaki kontrast oranı WCAG AA için en az 4.5:1 olmalı (büyük metin için 3:1). Açık gri üzerine açık gri yazmak, "zarif" görünebilir ama düşük görüş için okunmaz.

Sadece renkle bilgi iletmemek de önemli. "Kırmızı satır hata" yerine, "Kırmızı satır + ünlem ikonu + 'Hata:' kelimesi" hem renk körü kullanıcılara hem de ekran okuyuculara hitap eder.

## Klavye navigasyonu

Site fareyi kullanmadan tamamen gezilebilmeli. Tab tuşu ile odak bir interaktif elementten diğerine geçer. Odak halkası (focus ring) görünür olmalı; varsayılanı görsel kaygıyla kaldırmak yaygın bir hatadır.

Modal'lar açıldığında odak içeride kalmalı (focus trap), kapandığında odak açtıran elemana dönmeli.

## Skip-to-content linki

Sayfanın en üstüne, klavye odağı geldiğinde görünen bir "İçeriğe geç" linki ekleyin. Böylece klavye kullanıcısı her sayfada navbar'ı tabbing yapmak zorunda kalmaz.

## Form'lar erişilebilir mi?

Her input'un bir \`<label>\`'ı olmalı. Sadece placeholder kullanmak yetmez (kullanıcı yazınca kaybolur, ekran okuyucu güvenilmez biçimde okur).

Hata mesajları input'a \`aria-describedby\` ile bağlanmalı. \`aria-invalid="true"\` ile geçersiz durumu belirtilmeli.

## Görseller için alt metin

Anlamlı görsellerin \`alt\` özniteliği olmalı. Dekoratif görseller için \`alt=""\` (boş ama mevcut). \`alt="görsel"\` veya \`alt="image1.jpg"\` kötü uygulamadır.

## Test etmek

Manuel test: klavye ile baştan sona gezin, ekran okuyucu (NVDA, VoiceOver) ile sayfayı dinleyin.

Otomatik test: Lighthouse, axe DevTools, WAVE gibi araçlar pek çok sorunu yakalar. %100 otomasyon mümkün değil; manuel test şart.

## Yasal boyut

Avrupa'da Web Accessibility Directive (WAD), kamu kurumları için WCAG AA zorunlu. Türkiye'de henüz bu kapsamda bağlayıcı bir düzenleme olmasa da, KVKK'ya benzer bir trend geliyor. Erken uyum, sonradan acele yerine geçer.

## Sonuç

Erişilebilirlik bir "ek özellik" değil, kalite çıtasıdır. Kullanıcılarınızın daha geniş bir kesimine ulaşır, daha iyi UX sağlar, SEO'nuz iyileşir, yasal risk azalır. Üstelik doğru uygulandığında, kod karmaşıklığı azalır.`,
  },
  // Sektor odakli yazilar (5)
  {
    slug: 'galeri-dijital-vitrin',
    title: 'Galerinizi Dijitalleştirmek: Online Vitrin ile Satışlarınızı Katlayın',
    excerpt:
      'Otomotiv galerilerinin %70\'i hâlâ statik web sitelerine sahip. Dinamik bir online vitrin, müşteri trafiğini ciddi şekilde artırır.',
    date: '2026-02-02',
    category: 'Sektörel Çözümler',
    tags: ['Galeri', 'Otomotiv', 'E-ticaret'],
    cover: '/blog/cover-galeri.jpg',
    coverAlt: 'Otomotiv galeri vitrin',
    readingMinutes: 5,
    content: `Türkiye'de yaklaşık 25.000 otomotiv galerisi faaliyet gösteriyor. Bunların büyük çoğunluğu hâlâ statik HTML sayfalar veya birkaç fotoğraflı sosyal medya hesapları üzerinden müşteri çekmeye çalışıyor. Oysa modern bir online galeri vitrini, müşteri trafiğini birkaç katına çıkarabiliyor.

Bu yazıda, biz Gunerdev olarak otomotiv galerileri için sunduğumuz çözümleri ve neden bu alanın ihmal edilmemesi gerektiğini anlatıyoruz.

## Müşteriler artık önce internet üzerinden bakıyor

İkinci el araç almak isteyen bir müşteri, fiziksel olarak galeriye gelmeden önce ortalama 14 web sitesi ziyaret ediyor. sahibinden, arabam, letgo gibi platformlar bu yolculuğun ilk adımı; ancak ciddi alıcılar markaya doğrudan ulaşmak ister. İşte burada kendi sitenizin önemi devreye girer.

Markalı bir vitrine sahip galeri, sahibinden listesi içinde sıkışmış galeriden çok farklı algılanır. Güven, profesyonellik ve seriflik hissi uyandırır.

## Etkili bir galeri sitesinde olması gerekenler

**Detaylı araç sayfaları**: Her aracın ayrı bir sayfası olmalı. Birden fazla yüksek çözünürlüklü fotoğraf, 360° iç ve dış görseller, teknik özellikler tablosu, ekstra donanımlar listesi.

**Akıllı arama ve filtreleme**: Marka, model, yıl, kilometre, fiyat aralığı, vites tipi, yakıt tipi — kullanıcı tek bakışta envantere göz atabilmeli.

**Mobil uyumlu tasarım**: Müşteri trafiğinin %75'i mobilden geliyor. Mobilde sıkıntı yaşayan ziyaretçi 5 saniye sonra kaçar.

**WhatsApp ile direkt iletişim**: "İlgileniyorum" butonu doğrudan WhatsApp'a hazır mesajla yönlendirilmeli. Müşteri formu doldurmaya üşenir; tek tık ile yazışma başlar.

**Otomatik araç yönetim paneli**: Galeri sahibinin yeni araç eklemesi 5 dakika sürmeli. Fotoğraf yükle, başlık yaz, fiyat gir, yayınla.

## SEO neden kritik?

"İkinci el BMW Kayseri", "Mercedes C200 satılık" gibi spesifik aramalar yapılır. Sitenizin bu aramalarda Google'da üst sıralarda çıkması gerekir.

Bunun için her araç sayfasının optimize edilmiş başlığı, açıklaması ve yapısal verisi olmalı (Schema.org Vehicle markup). Doğru yapılandırıldığında, Google arama sonuçlarında araç fotoğrafı, fiyatı ve durumu doğrudan görünür.

## Stok güncellik

Müşterinin geldiği aracın satılmış olması — galerinin başına gelebilecek en kötü deneyim. Online vitrin gerçek zamanlı stok takibi ile entegre olmalı; satılan araç anında siteden kaldırılmalı veya "satıldı" etiketi almalı.

## Ne sunuyoruz?

Gunerdev olarak otomotiv galerileri için uçtan uca çözüm sunuyoruz: vitrin sitesi, yönetim paneli, WhatsApp entegrasyonu, SEO optimizasyonu, sahibinden gibi platformlardan otomatik veri senkronizasyonu (opsiyonel).

Tipik teslim süremiz 4-6 hafta. Maliyet, galerinin büyüklüğüne ve özelleştirme seviyesine göre değişiyor. Kayseri ve çevresindeki galerilerle bizzat çalışıyoruz; ihtiyacınızı dinlemek için iletişime geçin.`,
  },
  {
    slug: 'emlak-portfoy-yonetimi',
    title: 'Emlak Ofisleri İçin Web Çözümü: Portföy Yönetiminden Lead Toplama\'ya',
    excerpt:
      'Emlak işi hız ister. Portföyünüzü doğru sergilemek ve potansiyel müşteriyi hızlıca yakalamak rekabette belirleyici.',
    date: '2026-01-25',
    category: 'Sektörel Çözümler',
    tags: ['Emlak', 'CRM', 'Lead'],
    cover: '/blog/cover-emlak.jpg',
    coverAlt: 'Emlak portföy yönetimi',
    readingMinutes: 5,
    content: `Emlak sektörü Türkiye'de oldukça rekabetçi. Sahibinden, hepsiemlak, emlakjet gibi platformlar pazarın büyük bir kısmını domine ediyor. Bağımsız emlak ofisleri için kendi web sitesi sahibi olmak hâlâ büyük bir farklılaştırıcı.

Doğru kurgulanmış bir emlak sitesi sadece "vitrin" değildir; aynı zamanda bir lead toplama makinesidir.

## Portföy nasıl sergilenmeli?

Bir konutun online sayfasında olması gerekenler: yüksek çözünürlüklü fotoğraflar (en az 10 adet, ideal 20+), 360° iç tur (varsa video tur), kat planı, semt haritası, yakın mesafedeki noktalar (okul, hastane, market), benzer ilanlar.

Mobil uyumlu galeri kritik. Müşteri telefonundan fotoğrafları kaydırarak inceleyecek; deneyim akıcı olmalı.

## Akıllı filtreler

Emlak arayan müşteri çok seçici: bütçe, oda sayısı, m², kat, ısıtma tipi, asansör, balkon, eşyalı/eşyasız, kira/satılık, yapı tipi (apartman/villa)... Tüm bunlar filtrelenebilir olmalı.

Kullanıcı arama tercihlerini kaydedebilmeli; yeni eşleşmeler çıktığında bildirim alabilmeli. Bu, geri dönüş trafiğini ciddi artırır.

## Lead toplama mekanizmaları

Her ilan sayfasında "İlgileniyorum" / "Daha fazla bilgi" / "Görmek istiyorum" gibi CTA'lar olmalı. Form sade tutulmalı: ad, telefon, opsiyonel mesaj. Çok soru sormak dönüşümü düşürür.

Live chat veya WhatsApp entegrasyonu, çoğu müşterinin tercih ettiği iletişim kanalı. Form doldurmak yerine direkt yazışmak isterler.

## Harita entegrasyonu

İlanların haritada konumlandırılması güçlü bir özellik. Müşteri haritada bölge seçer, bölgedeki tüm portföyü görür. Google Maps API entegrasyonu standart hale gelmiştir.

## Emlakçı paneli

Emlak ofisi sahibinin kullanacağı yönetim paneli, aşağıdakileri kolayca yapabilmeli:

- Yeni ilan ekleme (fotoğraf yükleme, bilgileri girme — 10 dakikadan az)
- İlan güncelleme/silme/satıldı işaretleme
- Lead listesini görme (kim ne ile ilgilendi, ne zaman aradı)
- Müşteri arama geçmişi (CRM modülü)
- Performans raporları (hangi ilan ne kadar görüntülendi)

## Sahibinden ile rekabet değil tamamlayıcılık

Sahibinden'i bırakmak gerek değil; oradan da gelen müşterileri kendi sitenize çekmek mantıklı. İlanlarınızda "Daha fazla bilgi için www.ofisinizadi.com" şeklinde yönlendirme yapabilirsiniz.

Bir kez kendi sitenize gelen müşteri, oradaki diğer ilanlarınızı, hakkınızdaki bilgileri, müşteri yorumlarınızı görür. Markanızla doğrudan ilişki kurar.

## Otomatik ilan senkronizasyonu

Bir ilanı her platforma ayrı ayrı eklemek zaman kaybı. Modern sistemler, ana panelden eklenen ilanı sahibinden, hepsiemlak gibi platformlara da otomatik gönderebilir (XML feed veya API ile).

## Ne sunuyoruz?

Gunerdev olarak emlak ofisleri için anahtar teslim çözümler sunuyoruz: profesyonel vitrin sitesi, ilan yönetim paneli, lead/CRM sistemi, harita entegrasyonu, opsiyonel olarak diğer platformlara senkronizasyon.

Kayseri ve çevre illerdeki emlak ofisleri için yerel SEO çalışmaları da yapıyoruz; Google'da "Kayseri emlak", "Talas satılık daire" gibi aramaların ilk sayfasında görünmek için.`,
  },
  {
    slug: 'restoran-online-menu-siparis',
    title: 'Restoran Sahipleri için Online Menü ve Sipariş Sistemleri',
    excerpt:
      'Pandemi sonrası restoranların dijitalleşmesi hızlandı. Kendi sipariş sisteminize sahip olmak komisyon ödememek demek.',
    date: '2026-01-18',
    category: 'Sektörel Çözümler',
    tags: ['Restoran', 'F&B', 'Online Sipariş'],
    cover: '/blog/cover-restoran.jpg',
    coverAlt: 'Restoran online sipariş',
    readingMinutes: 5,
    content: `Restoran sektörü pandemi döneminde ciddi bir dijital sıçrama yaşadı. Yemeksepeti, Trendyol Yemek gibi platformlar büyük müşteri kitlesi sundu — ama %20-30 arası komisyonlarıyla restoran kârlılığını ciddi etkiledi.

Kendi online sipariş sisteminize sahip olmak, hem komisyondan kurtulmak hem de müşteri sadakatini artırmak için stratejik bir hamle.

## QR menü: Pandeminin getirdiği alışkanlık

Müşteriler artık QR kod menüye alışmış durumda. Fiziksel menü kartı yerine masada QR kod var; telefonla okutulur, menü açılır. Hem hijyenik hem de güncellenmesi kolay.

İyi bir QR menü: kategori bazlı navigasyon, ürün fotoğrafları (her ürünün), alerjen bilgisi, alternatif diller (turist bölgelerinde), masa bazında otomatik sipariş alabilme.

## Online sipariş ve teslimat

Restoran kendi web sitesi üzerinden sipariş alıyorsa, neredeyse tamamı kendi geliri. Yemeksepeti %25 komisyon alırsa, 100 TL'lik siparişten 75 TL kalır. Aynı sipariş kendi sitenizden gelirse 95 TL kalır (ödeme komisyonu hariç).

Web sitenizde sipariş sistemi olması için gerekli özellikler: sepet, kupon kodu desteği, ödeme entegrasyonu (iyzico, Stripe), teslimat veya gel-al seçeneği, sipariş durumu takibi.

## Müşteri sadakati ve kampanyalar

Kendi sisteminizde müşteri verisi sizin: telefon numarası, geçmiş siparişleri, doğum günü. Bu bilgilerle SMS veya WhatsApp ile kampanya gönderebilirsiniz: "Doğum gününüz kutlu olsun, bu hafta tatlı bizden!".

Loyalty programı ekleyebilirsiniz: 10 sipariş = 1 ücretsiz ana yemek. Müşteri kendi sitenizden sipariş vermek için ekstra motivasyon kazanır.

## Rezervasyon sistemi

Oturarak yemek yenen restoranlar için rezervasyon kritik. Telefonla rezervasyon almanın iki sorunu var: telefon meşgul olabilir, kayıt karışabilir.

Online rezervasyon ile müşteri 7/24 masa ayırtabilir; restoran tüm rezervasyonları tek panelden görür. Çakışma olmaz, hatalı not olmaz.

## Yorum yönetimi

Google Business profili ve yorum yönetimi de kritik bir alan. Olumlu yorumları teşvik etmek (kapanış mailinde "yorum bırakın" linki) ve olumsuz yorumlara profesyonel cevap vermek itibarınızı korur.

## Multi-şube yönetimi

Birden fazla şubeniz varsa, tek bir merkezi panelden hepsini yönetebilmeniz gerek. Her şubenin kendi menüsü, kendi siparişleri, kendi raporları olabilir; ancak markanız tek olarak görünür.

## Mutfak ekranı entegrasyonu

Sipariş geldiğinde mutfak ekranında otomatik görünmesi büyük zaman kazandırır. Kasiyer manuel olarak yazıcıya gönderme yerine, mutfak ekranı sürekli güncel sipariş listesini gösterir.

## Ne sunuyoruz?

Gunerdev olarak restoranlar için anahtar teslim dijital çözümler sunuyoruz: QR menü sistemi, online sipariş ve teslimat platformu, rezervasyon yönetimi, çoklu şube paneli, kampanya ve sadakat modülleri.

Kayseri'de bizzat çalıştığımız restoran sahiplerinin geri dönüşlerine göre, sistemimize geçtikten sonra ortalama 4. ayda komisyon tasarrufundan dolayı yatırımları geri dönüyor.`,
  },
  {
    slug: 'guzellik-salonu-online-randevu',
    title: 'Güzellik Salonu Sahipleri İçin Online Randevu Yönetimi',
    excerpt:
      'Telefonun susmadığı bir gün hayal edin. Online randevu sistemiyle bu mümkün; üstelik müşteri memnuniyeti artıyor.',
    date: '2026-01-10',
    category: 'Sektörel Çözümler',
    tags: ['Güzellik', 'Salon', 'Randevu'],
    cover: '/blog/cover-guzellik.jpg',
    coverAlt: 'Güzellik salonu randevu',
    readingMinutes: 5,
    content: `Güzellik salonu işletmek günlük işlerin uçucu olduğu bir iş. Mesai başında planlanmış 10 randevu, gün içinde gelen ek talepler, son anda iptaller, gelmeyen müşteriler... Bu kaosu organize etmek için telefon tek başına yeterli olmuyor artık.

Online randevu sistemi, hem salon sahibinin işini kolaylaştırır hem de müşteri deneyimini ciddi iyileştirir.

## Müşteri perspektifi

Müşterileriniz randevu almak istediğinde ne yapıyor? Telefon açıyor. Telefon meşgulse ne oluyor? Genellikle başka bir salondan bakıyor. Bu, kaybedilen iş demek.

Online randevu sistemi ile müşteri 7/24 telefondan randevu alabilir. Saat 23:00'da yarın 10:00 için randevu alabilir; pazar tatilinde ertesi hafta için planlama yapabilir.

İdeal sistem: salon sayfasında "Randevu Al" butonu, açılan ekranda hizmet seç (manikür, saç boyama, vb), uzman seç (varsa), uygun saatler listelenir, müşteri onaylayarak rezervasyon tamamlanır.

## Salon sahibinin perspektifi

Salonda bir tablet veya bilgisayardan tüm randevuları gün/hafta görünümünde takip edersiniz. Hangi uzmanın saat 14:00'te ne yapacağı, hangi koltuğun boş olduğu, kimin geç kaldığı net.

Yeni randevular otomatik olarak takvime düşer. Personel kendi günlük programını telefonundan görebilir.

## Hatırlatma SMS'leri

No-show (gelmeme) oranı, çoğu salonun en büyük gelir kaybı kaynağı. Müşteri unutuyor, randevu boşa gidiyor, salon o saati doldurulamıyor.

Otomatik hatırlatma SMS'i (24 saat ve 2 saat öncesinde) bu sorunu büyük ölçüde çözer. Müşteri unutsa bile hatırlatma alır; gelemeyecekse iptal eder, salon o saati başkasına verebilir.

## Müşteri kart sistemi

Her müşteri için dijital kart: hizmet geçmişi, kullandığı ürünler (alerji bilgisi), tercih ettiği uzman, doğum günü, son ziyaret tarihi.

Bu bilgilerle hizmet kalitesi artar. Müşteri salona her geldiğinde sıfırdan başlamak zorunda kalmaz; "geçen seferki saç boyanız 7B'ydi, aynısını mı istersiniz?" sorusu güven verir.

## Loyalty ve abonelik

Düzenli müşterileriniz için sadakat programı: belirli sayıda hizmet sonrası ücretsiz veya indirimli hizmet. Sistemde otomatik takip edilir.

Aylık abonelik modeli (örneğin "her ay bir manikür dahil 350 TL/ay") düzenli gelir akışı sağlar; müşteriyi bağlı tutar.

## Online ödeme

Müşteriler kapora yatırarak randevu alabilirse, no-show oranı belirgin düşer. Tam ödeme veya %20 kapora seçeneği sunulabilir.

iyzico veya benzer ödeme servislerinin entegrasyonu modern bir online randevu sisteminin standart parçası.

## Ürün satışı

Güzellik salonları sıklıkla profesyonel ürün de satar. Online randevu sistemine entegre küçük bir e-ticaret modülü, müşterinin "salon dönüşü kullanmaya alıştığı şampuanı eve sipariş etmesini" mümkün kılar.

## Sosyal medya entegrasyonu

Instagram'da gördüğü saç modelini deneyin müşteri, "randevu al" butonuna direkt Instagram bio'sundan gelir. Bu akış sorunsuz olmalı.

## Ne sunuyoruz?

Gunerdev olarak güzellik salonları için tasarladığımız sistem hem küçük tek koltuklu salonlar hem de çok personelli zincirler için ölçeklenir.

Sistem özellikleri: online randevu, çoklu uzman/hizmet desteği, hatırlatma SMS'leri, müşteri kart yönetimi, loyalty programı, sadakat puanı, opsiyonel online ödeme, raporlama paneli.

Kayseri'deki güzellik salonu sahibi müşterilerimize özel demo gösterebiliriz; iletişim formundan ulaşmanız yeterli.`,
  },
  {
    slug: 'ozel-yazilim-vs-hazir-program',
    title: 'Bilgisayar Programları ve Özel Yazılım: Standart Çözümler Yetmediğinde',
    excerpt:
      'Hazır yazılımlar her şeyi çözemez. İşinize özel ihtiyaçlar varsa, özel yazılım uzun vadede en kârlı yatırım.',
    date: '2026-01-02',
    category: 'Sektörel Çözümler',
    tags: ['Özel Yazılım', 'Otomasyon', 'Verimlilik'],
    cover: '/kayseri-5.jpg',
    coverAlt: 'Özel yazılım geliştirme',
    readingMinutes: 6,
    content: `Pek çok işletme bilgisayar programları ihtiyacını piyasadaki hazır yazılımlarla karşılamayı dener. Logo, Mikro, Excel makroları, çeşitli SaaS abonelikleri... Ancak her işletmenin özgün süreçleri vardır ve bir noktada hazır yazılımlar yetmemeye başlar.

Bu yazıda hangi durumlarda özel yazılım geliştirmek mantıklı, ne zaman hazır çözüm yeterli olduğunu inceliyoruz.

## Hazır yazılımın güçlü yanları

Hazır yazılımlar düşük başlangıç maliyeti, hızlı kullanıma alınabilirlik, geniş kullanıcı tabanına dayanan olgunluk, sürekli güncellemeler avantajları sunar.

Eğer ihtiyacınız standart bir muhasebe, müşteri ilişki yönetimi (CRM) veya proje takibi ise; Logo, Pipedrive, Asana gibi çözümler işinizi görür.

## Hazır yazılımın sınırları

Sorunlar, işletmenizin "tek tük" durumlarında başlar. Şu örneklere bakalım:

**Bir üretim tesisinin özel kalite kontrol süreci**: Hazır yazılımlar genel kalite süreçlerini kapsar; ama sizin tesisinize özgü makine entegrasyonları, sensör verisi okuma, özel formül hesaplamaları kapsam dışıdır.

**Bir zincir restoranın özel kampanya mantığı**: Standart loyalty modülleri "10 sipariş = 1 ücretsiz" gibi basit kuralları destekler. "Çarşamba akşamları çalışan müşterilere %20 + bedava içecek" gibi karmaşık kuralları kuramazsınız.

**Bir lojistik şirketinin rota optimizasyonu**: Genel rota optimizasyonu sunan SaaS'lar var; ama sizin şehrinizdeki trafik özellikleri, müşteri zaman pencereleri, araç kapasiteleri için özel hesaplama yapamazlar.

## Excel'in kırılma noktası

Pek çok işletme operasyonel veri için Excel'e güvenir. Excel başlangıçta mükemmel: hızlı, tanıdık, esnek. Ama belirli ölçeğe ulaştıktan sonra kırılma başlar.

Excel'de kırılma sinyalleri: dosya açılması yavaşlamaya başlamış, makrolar çökmeye başlamış, birden çok kişi aynı anda düzenleyemiyor, geçmiş yedeklerle güncel veri arasında tutarsızlıklar çıkıyor, raporları çıkarmak yarım gün alıyor.

Bu sinyalleri gördüyseniz, Excel'den kalkma zamanı gelmiş.

## Özel yazılım kazançları

Doğru yapılmış özel yazılım şunları sağlar:

- **Tam uyum**: İş süreçlerinize tam oturur; "alışmak zorunda olduğunuz" özellikler yoktur
- **Otomasyon**: Tekrar eden işler tamamen otomatize edilir; insan hatası azalır
- **Entegrasyon**: Mevcut sistemlerinizle (e-ticaret, muhasebe, e-posta) doğal entegrasyon
- **Ölçeklenme**: İşiniz büyüdükçe yazılım da büyür; kapasite duvarına çarpmaz
- **Veri sahipliği**: Tüm veri sizin; istediğinizde dışa aktarırsınız, başka bir sisteme geçirirsiniz

## Maliyet karşılaştırması

Hazır yazılım: Kullanıcı başına ayda 50-200 USD. 5 kullanıcı ile yıllık 3.000-12.000 USD.

Özel yazılım: 100.000-500.000 TL başlangıç maliyeti, sonrasında bakım için aylık 5.000-15.000 TL.

3 yıllık total cost of ownership hesaplandığında, ihtiyaçlarınızı tam karşılayan özel yazılım sıklıkla daha kârlı çıkar.

## Aşamalı geliştirme stratejisi

Tüm sistemi sıfırdan inşa etmeye gerek yok. Modern özel yazılım geliştirme aşamalı yapılır:

1. **MVP** (Minimum Viable Product): Temel ihtiyaçlar 6-10 hafta içinde teslim edilir
2. **İlk iyileştirme dalgası**: Gerçek kullanım üzerinden 2-3 ay sonra geri dönüşler değerlendirilir, eklemeler yapılır
3. **Modüler genişleme**: Yeni modüller (raporlama, mobil uygulama, API entegrasyonları) talep ettikçe eklenir

Bu yaklaşım hem riski azaltır hem de bütçenizi koruma altına alır.

## Hangi durumda özel yazılım?

Özel yazılım düşünmenizin doğru olduğu sinyaller:

- 3+ farklı SaaS abonman ödüyor ve aralarında manuel veri taşıyorsunuz
- Excel/Google Sheets ile yapılan iş haftada 5+ saat alıyor
- Hazır yazılımın yapamadığı bir özellik için "manuel yapıyoruz" dediğiniz işler var
- Müşterileriniz beklediğiniz hızda hizmet alamıyor (operasyonel darboğaz)

## Ne sunuyoruz?

Gunerdev olarak özel yazılım geliştirmenin tüm aşamalarında çalışıyoruz: ihtiyaç analizi, MVP geliştirme, modüler genişleme, bakım ve destek.

İlk görüşmemiz ücretsiz: işinizi anlamamız için 1 saatlik bir tanışma yapıyoruz, hangi tür çözümün size uygun olduğunu birlikte değerlendiriyoruz. Hazır çözüm de mantıklıysa, açıkça söylüyoruz.

Kayseri merkezli olmamıza rağmen Türkiye'nin her yerinden müşteriyle uzaktan çalışıyoruz; ihtiyaç olduğunda yerinde kurulum desteği için sahaya gidiyoruz.`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
