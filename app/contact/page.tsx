import { ContactForm } from '@/components/ContactForm';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'İletişim',
  description:
    'Projenizi konuşmak, teklif almak veya teknik bir görüş paylaşmak için bize ulaşın. 24 saat içinde dönüş yapıyoruz.',
  path: '/contact',
});

const channels = [
  {
    label: 'E-posta',
    value: site.email,
    href: `mailto:${site.email}`,
    description: 'Detaylı projeler ve teklif talepleri için tercih edilen kanal.',
  },
  {
    label: 'Telefon',
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, '')}`,
    description: 'Pazartesi–Cuma, 09:00–18:00 (TSİ) arasında ulaşabilirsiniz.',
  },
  {
    label: 'Telegram',
    value: `@${site.telegram}`,
    href: `https://t.me/${site.telegram}`,
    external: true,
    description: 'Hızlı yanıt için tercih edilen kanal; mesai dışında da takip edilir.',
  },
  {
    label: 'Konum',
    value: site.address,
    href: null,
    description: 'Görüşmeler uzaktan yürütülür; talep halinde yüz yüze toplantı düzenlenebilir.',
  },
];

const expectations = [
  'İlk e-postanıza 24 saat içinde dönüş yaparız.',
  'Uygun görürsek 30 dakikalık ücretsiz keşif görüşmesi planlarız.',
  'Görüşme sonrasında size özel bir teklif ve zaman planı hazırlarız.',
  'Beklentiler netleşmeden iş başlatmıyoruz; net olmayan kısımlar yazılı paylaşılır.',
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="container relative pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-muted-foreground/40" aria-hidden="true" />
              İletişim
            </span>
            <h1 className="mt-5 text-display-lg font-semibold tracking-tight text-balance gradient-text">
              Projenizi konuşalım.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
              Mevcut bir ürünü büyütmek, yeni bir uygulama inşa etmek veya teknik bir konuda görüş
              almak için aşağıdaki formu doldurun ya da doğrudan bize yazın. Her başvuruya kişisel
              olarak dönüş yapıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h2 className="text-xl font-semibold tracking-tight">İletişim kanalları</h2>
                <ul className="mt-6 space-y-6">
                  {channels.map((item) => (
                    <li key={item.label}>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...('external' in item && item.external
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          className="mt-1.5 block text-base font-medium text-foreground transition-colors hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1.5 text-base font-medium text-foreground">{item.value}</p>
                      )}
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-surface p-8">
                <h2 className="text-xl font-semibold tracking-tight">Süreç nasıl işler?</h2>
                <ol className="mt-6 space-y-4">
                  {expectations.map((item, index) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="font-display text-sm font-semibold text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
