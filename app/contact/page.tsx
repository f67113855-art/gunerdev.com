import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { ChannelIcon } from '@/components/ChannelIcon';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'İletişim',
  description:
    'Projenizi konuşmak, teklif almak veya teknik bir görüş paylaşmak için bize ulaşın. 24 saat içinde dönüş yapıyoruz.',
  path: '/contact',
});

type Channel = {
  icon: 'email' | 'phone' | 'telegram' | 'location';
  label: string;
  value: string;
  href: string | null;
  external?: boolean;
  description: string;
};

const channels: Channel[] = [
  {
    icon: 'email',
    label: 'E-posta',
    value: site.email,
    href: `mailto:${site.email}`,
    description: 'Detaylı projeler ve teklif talepleri için tercih edilen kanal.',
  },
  {
    icon: 'phone',
    label: 'Telefon',
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, '')}`,
    description: 'Pazartesi–Cuma, 09:00–18:00 (TSİ) arasında ulaşabilirsiniz.',
  },
  {
    icon: 'telegram',
    label: 'Telegram',
    value: `@${site.telegram}`,
    href: `https://t.me/${site.telegram}`,
    external: true,
    description: 'Hızlı yanıt için tercih edilen kanal; mesai dışında da takip edilir.',
  },
  {
    icon: 'location',
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
      <PageHero
        eyebrow="İletişim"
        title="Projenizi konuşalım."
        description="Mevcut bir ürünü büyütmek, yeni bir uygulama inşa etmek veya teknik bir konuda görüş almak için aşağıdaki formu doldurun ya da doğrudan bize yazın. Her başvuruya kişisel olarak dönüş yapıyoruz."
        imageSrc="/hero-contact.jpg"
        imageAlt=""
        imagePosition="center 60%"
      />

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-border bg-surface p-8">
                <h2 className="text-xl font-semibold tracking-tight">İletişim kanalları</h2>
                <ul className="mt-6 space-y-5">
                  {channels.map((item) => (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <ChannelIcon type={item.icon} className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            {...(item.external
                              ? { target: '_blank', rel: 'noopener noreferrer' }
                              : {})}
                            className="mt-1 block break-words text-base font-medium text-foreground transition-colors hover:text-accent"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-1 text-base font-medium text-foreground">{item.value}</p>
                        )}
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
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
