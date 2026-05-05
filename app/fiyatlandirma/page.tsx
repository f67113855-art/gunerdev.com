import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/components/CTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Fiyatlandırma',
  description:
    'Şeffaf yazılım geliştirme fiyatlandırması. Web uygulaması, özel yazılım, performans ve danışmanlık hizmetleri için tipik bütçe aralıkları.',
  path: '/fiyatlandirma',
});

type Tier = {
  name: string;
  tagline: string;
  budget: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const tiers: Tier[] = [
  {
    name: 'Kurumsal Site',
    tagline: 'Tanıtım odaklı statik veya hafif dinamik site',
    budget: '75.000 – 150.000 TL',
    description:
      'Kurumsal kimlikli, mobil uyumlu, SEO optimize edilmiş ve içerik yönetim panelli web siteleri. Tipik teslim süresi 4-6 hafta.',
    features: [
      '5-15 sayfa, çoklu dil opsiyonu',
      'Headless CMS entegrasyonu (Sanity, Strapi)',
      'Core Web Vitals 90+ skoru',
      'Schema.org ve teknik SEO altyapısı',
      'İletişim ve form altyapısı',
      '2 hafta yakın izleme',
    ],
  },
  {
    name: 'Web Uygulaması',
    tagline: 'Orta karmaşıklıkta etkileşimli ürün',
    budget: '250.000 – 600.000 TL',
    description:
      'Kullanıcı hesabı, panel, ödeme entegrasyonu ve özel iş mantığı içeren web uygulamaları. Tipik teslim süresi 8-12 hafta.',
    features: [
      'Kimlik doğrulama ve rol bazlı yetkilendirme',
      'Özel iş mantığı ve süreç tasarımı',
      'Üçüncü parti entegrasyonlar',
      'Yönetim paneli ve raporlama',
      'CI/CD ve container tabanlı dağıtım',
      'Yayın sonrası 1 ay destek',
    ],
    highlighted: true,
  },
  {
    name: 'Özel SaaS / Platform',
    tagline: 'Çok kullanıcılı, ölçeklenebilir ürün',
    budget: '600.000 TL+',
    description:
      'Birden fazla rol, kompleks iş süreçleri, yüksek trafik ve uzun vadeli ürün vizyonu. MVP süresi 3-5 ay; sonrası iterasyonlu geliştirme.',
    features: [
      'Modüler mimari (monolit veya mikroservis)',
      'Çok kiracılı (multi-tenant) altyapı',
      'Otomatik test altyapısı',
      'İzleme, alerting ve gözlemleme',
      'Sürdürülebilir ürün yol haritası',
      'Aylık destek paketi seçeneği',
    ],
  },
];

type AddOn = {
  title: string;
  budget: string;
  description: string;
};

const addOns: AddOn[] = [
  {
    title: 'Performans Optimizasyonu',
    budget: '60.000 – 200.000 TL',
    description:
      'Mevcut sistemlerin Core Web Vitals, sunucu yanıt süresi, veritabanı sorguları ve cache stratejisi yönlerinden iyileştirilmesi. 4-6 hafta.',
  },
  {
    title: 'Teknik Danışmanlık',
    budget: '8.000 – 15.000 TL / gün',
    description:
      'Mimari değerlendirme, teknoloji seçimi, code review veya fractional CTO modeli. Saatlik (1.500 TL) veya aylık paket olarak.',
  },
  {
    title: 'DevOps & Altyapı Kurulumu',
    budget: '40.000 – 120.000 TL',
    description:
      'CI/CD, Docker, NGINX, izleme altyapısı, sunucu sertleştirme ve yedekleme. 2-4 hafta.',
  },
  {
    title: 'Aylık Destek Paketi',
    budget: '15.000 TL+',
    description:
      'Yayın sonrası bakım, küçük geliştirmeler, performans izleme. 10 saat / 20 saat / 40 saat paket seçenekleri.',
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Şeffaf fiyatlandırma"
        title="Yatırımınız hangi bandda olur?"
        description="Tüm fiyat aralıklarımızı açıkça paylaşıyoruz. Her proje benzersiz; ama bu rakamlar 'mantıklı bir başlangıç noktası' için yeterli netliği veriyor."
        imageSrc="/hero-services.jpg"
        imageAlt=""
        imagePosition="center 40%"
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className={
                  'flex flex-col rounded-2xl border bg-surface p-6 md:p-8 ' +
                  (tier.highlighted
                    ? 'border-accent/50 ring-1 ring-accent/20'
                    : 'border-border')
                }
              >
                <header>
                  {tier.highlighted && (
                    <span className="mb-3 inline-flex rounded-full bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                      En çok talep gören
                    </span>
                  )}
                  <h2 className="text-2xl font-semibold tracking-tight">{tier.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{tier.tagline}</p>
                </header>

                <div className="mt-6 border-y border-border py-5">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    Tipik bütçe (KDV hariç)
                  </p>
                  <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
                    {tier.budget}
                  </p>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 inline-flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  Teklif al →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface/30 border-y border-border">
        <div className="container">
          <header className="max-w-2xl">
            <p className="eyebrow">Ek hizmetler</p>
            <h2 className="mt-3 text-display-md font-semibold tracking-tight">
              Bağımsız hizmet kalemleri
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Yeni proje değil, mevcut sisteme spesifik bir destek arıyorsanız bu kalemleri tek
              başına da alabilirsiniz.
            </p>
          </header>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {addOns.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-background p-6">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 font-mono text-sm text-accent">{item.budget}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Bu rakamlar nasıl belirleniyor?
            </h2>
            <div className="mt-6 space-y-5 text-base leading-[1.8] text-muted-foreground md:text-lg">
              <p>
                Yazılım projelerinde gerçekçi tek bir fiyat vermek mümkün değil; çünkü kapsamı
                netleşmemiş bir projenin gerçek maliyeti, pratik bir blueprint çıkarılana kadar
                bilinemez. Bu yüzden net bir aralık paylaşıyoruz.
              </p>
              <p>
                Aralığın alt sınırı; standart kapsam, mevcut çözümlerimizden faydalanma ve
                hızlı karar verebilen bir müşteri ile ulaşılabilir. Üst sınırı ise; çok özel
                gereksinimler, yoğun entegrasyon ihtiyacı ve kapsamlı keşif süreci gerektiren
                projeler.
              </p>
              <p>
                Keşif görüşmesi sonrası; sözleşmede sabit fiyat veya saat bazlı çalışma modeli
                belirleniyor. Sürpriz ek ücret çıkarmıyoruz; kapsam değişikliği olduğunda
                önceden yazılı teklifle bilginize sunuyoruz.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
              <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                Bütçeniz bu rakamların altında mı?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Açıkça söyleyelim: tüm projeler bu aralıkta yer almıyor. 30.000 - 75.000 TL bandı
                için özel çözümlerimiz var; saatlik danışmanlık, küçük ölçekli web siteleri,
                hazır şablon üzerine özelleştirme. Görüşmemizde size en uygun seçeneği birlikte
                buluyoruz.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Bütçenizi konuşalım →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Net bir teklif ister misiniz?"
        description="1 saatlik ücretsiz keşif görüşmesi ile size özel, sürprizsiz bir teklif hazırlayalım."
      />
    </>
  );
}
