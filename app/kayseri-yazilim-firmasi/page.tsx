import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/components/CTA';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import {
  breadcrumbJsonLd,
  faqJsonLd,
  localBusinessJsonLd,
} from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Kayseri Yazılım Firması | Web ve Özel Yazılım Geliştirme',
  description:
    'Kayseri merkezli yazılım firması. Kurumsal web sitesi, e-ticaret, özel yazılım ve mobil uygulama geliştirme. Yerel firmalara hızlı, kaliteli ve şeffaf hizmet.',
  path: '/kayseri-yazilim-firmasi',
});

const services = [
  {
    title: 'Kurumsal Web Sitesi',
    description:
      'Kayseri\'deki firmalara, sektörünüze ve kimliğinize uygun, mobil ve SEO uyumlu kurumsal web siteleri geliştiriyoruz.',
    href: '/services/web-uygulamalari',
  },
  {
    title: 'E-ticaret ve Online Satış',
    description:
      'Yerel işletmelerin online satışa geçişi için özel veya hazır altyapı (Shopify, WooCommerce) tabanlı çözümler.',
    href: '/services/web-uygulamalari',
  },
  {
    title: 'Özel Yazılım',
    description:
      'Üretim, lojistik, perakende ve hizmet sektörlerindeki firmalara özel iç süreç ve operasyon yönetim sistemleri.',
    href: '/services/ozel-yazilim',
  },
  {
    title: 'Mobil Uygulama',
    description:
      'iOS ve Android için müşteri uygulaması, sahada saha personeli uygulaması ve QR menü gibi mobil çözümler.',
    href: '/services/ozel-yazilim',
  },
  {
    title: 'Performans Optimizasyonu',
    description:
      'Mevcut sitenizi hızlandırarak Google sıralamasında ve dönüşüm oranlarında ölçülebilir iyileştirme sağlıyoruz.',
    href: '/services/performans-optimizasyonu',
  },
  {
    title: 'Sunucu ve DevOps',
    description:
      'Kayseri ve civar firmalara VPS kurulumu, NGINX, SSL, otomatik yedekleme ve sürekli yayın altyapısı.',
    href: '/services/devops-altyapi',
  },
];

const sectors = [
  'Restoran ve kafeler',
  'Emlak ofisleri',
  'Otomotiv galerileri',
  'Güzellik salonları',
  'Üretim firmaları',
  'Lojistik ve kargo',
  'Perakende ve mağaza zincirleri',
  'Sağlık ve güzellik',
  'Eğitim kurumları',
];

const reasons = [
  {
    title: 'Yakın iletişim',
    description:
      'Kayseri merkezli olmamızın avantajı: ihtiyaç olduğunda yerinde kurulum ve eğitim için sahaya geliyoruz. Çoğu zaman uzaktan, ama gerektiğinde yüz yüze.',
  },
  {
    title: 'Yerel ekonomiye uygun fiyatlama',
    description:
      'İstanbul ve Ankara fiyatlarını dayatmıyor; Kayseri\'deki KOBİ\'ler için makul ve şeffaf bir fiyat politikamız var. Bütçenizi konuşmak için çekinmeyin.',
  },
  {
    title: 'Hızlı geri dönüş',
    description:
      'Mesai saatleri içinde 2-3 saat içinde, sonrasında en geç 24 saat içinde dönüş garantisi. Telefon, e-posta veya WhatsApp ile ulaşabilirsiniz.',
  },
  {
    title: 'Sektörel deneyim',
    description:
      'Kayseri ekonomisinin önemli sektörleri (üretim, lojistik, perakende) için özel olarak geliştirdiğimiz çözümler ve sektörel deneyim.',
  },
];

const faq = [
  {
    question: 'Kayseri dışındaki firmalara hizmet veriyor musunuz?',
    answer:
      'Evet. Kayseri merkezli olmamıza rağmen Türkiye\'nin her yerinden müşteriyle uzaktan çalışıyoruz. Ankara, İstanbul, İzmir, Adana ve Anadolu\'nun farklı şehirlerindeki firmalara hizmet sunduk.',
  },
  {
    question: 'Yüz yüze görüşme yapabilir miyiz?',
    answer:
      'Kayseri içinde evet, ofisinize gelebiliriz. Kayseri dışında ise online toplantılar (Google Meet, Zoom) tercih ediyoruz; gerektiğinde kritik kurulum ve eğitim için sahaya gidiyoruz.',
  },
  {
    question: 'Küçük bütçeli projeler için de uygun musunuz?',
    answer:
      'Tek başına özel yazılım projelerinde minimum bütçemiz var; ama küçük bütçeli ihtiyaçlar için saatlik danışmanlık, küçük ölçekli web sitesi veya hazır altyapı (Shopify, WordPress) üzerine özelleştirme gibi alternatifler sunuyoruz.',
  },
  {
    question: 'Kayseri\'deki referanslarınız var mı?',
    answer:
      'Müşteri gizliliği nedeniyle sözleşmeli müşteri isimlerini kamuya açıklamıyoruz; ancak görüşmemizde sektörel referans paylaşabiliyoruz. Vaka çalışmalarımızı projeler sayfamızdan görebilirsiniz.',
  },
];

export default function KayseriPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessJsonLd({
            name: `${site.name} — Kayseri Yazılım Firması`,
            description:
              'Kayseri merkezli yazılım firması. Kurumsal web sitesi, e-ticaret, özel yazılım ve mobil uygulama geliştirme.',
            url: `${site.url}/kayseri-yazilim-firmasi`,
            areaName: 'Kayseri',
          }),
          breadcrumbJsonLd([
            { name: 'Anasayfa', path: '/' },
            { name: 'Kayseri Yazılım Firması', path: '/kayseri-yazilim-firmasi' },
          ]),
          faqJsonLd(faq),
        ]}
      />
      <PageHero
        eyebrow="Kayseri · Yerel hizmet"
        title="Kayseri'nin yazılım partneri"
        description="Kayseri merkezli, Türkiye geneline hizmet veren yazılım firmasıyız. Kurumsal web sitesinden özel yazılıma, e-ticaretten mobil uygulamaya kadar uçtan uca çözüm sunuyoruz."
        imageSrc="/erciyes.jpg"
        imageAlt=""
        imagePosition="center"
      />

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <p className="eyebrow justify-center">Hakkımızda</p>
            <h2 className="text-display-md font-semibold tracking-tight">
              Kayseri'nin büyüyen iş dünyasıyla aynı yolculukta
            </h2>
            <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
              {site.legalName} olarak Kayseri'de kurulduk; üretim ve ticaretin merkezindeki bu
              güçlü ekonomide, yerel firmaların dijitalleşmesinde küçük ama etkili bir rol
              üstleniyoruz. Bugün Kayseri'deki firmalara olduğu kadar Türkiye genelindeki
              müşterilerimize de aynı kaliteyle hizmet veriyoruz.
            </p>
            <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
              İstanbul tabanlı büyük ajansların aksine yakından çalışıyoruz; Anadolu'nun
              dürüst, doğrudan ve sonuca odaklı iş kültürünü yansıtan bir yaklaşımla projelerimizi
              yürütüyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-surface/30 border-y border-border">
        <div className="container">
          <header className="max-w-2xl">
            <p className="eyebrow">Hizmetlerimiz</p>
            <h2 className="mt-3 text-display-md font-semibold tracking-tight">
              Kayseri firmalarına sunduğumuz hizmetler
            </h2>
          </header>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-accent/40"
              >
                <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <p className="mt-4 text-xs font-medium text-accent">Detay →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="eyebrow">Sektörel deneyim</p>
              <h2 className="mt-3 text-display-md font-semibold tracking-tight">
                Hangi sektörlere hizmet veriyoruz?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                Kayseri ve Türkiye genelinde farklı sektörlerden firmalara hizmet veriyoruz. Her
                sektörün kendine özgü ihtiyaçları var; bu ihtiyaçları anlamak için süreç
                haritalama ile başlıyoruz.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {sectors.map((sector) => (
                <div
                  key={sector}
                  className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground"
                >
                  {sector}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface/30 border-y border-border">
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">Neden biz?</p>
            <h2 className="mt-3 text-display-md font-semibold tracking-tight">
              Kayseri'de yazılım firması seçerken
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Doğru partner; teknik yetkinliği yerel iletişim ve şeffaf fiyatlandırmayla
              birleştirir. İşte bizim farkımız:
            </p>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <h3 className="text-lg font-semibold tracking-tight">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-display-md font-semibold tracking-tight">Sıkça sorulanlar</h2>
            <div className="mt-8 space-y-3">
              {faq.map((item) => (
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
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/sss"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Tüm SSS'leri görüntüle →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Kayseri'den ya da Türkiye'nin neresinden olursanız olun"
        description="Projenizi anlatın; size uygun çözümü, tahmini süreyi ve yatırımı ücretsiz değerlendirelim."
      />
    </>
  );
}
