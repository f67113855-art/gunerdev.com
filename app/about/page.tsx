import { SectionHeading } from '@/components/SectionHeading';
import { CTA } from '@/components/CTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Hakkımızda',
  description:
    'Gunerdev; mühendislik disiplini, ürün odaklı düşünme ve uzun vadeli ortaklık anlayışıyla web uygulamaları geliştiren kurumsal bir yazılım ekibidir.',
  path: '/about',
});

const values = [
  {
    title: 'Kalite ödün verilmez',
    description:
      'Hızlı teslim ile kaliteyi karşı karşıya getirmeyiz. Doğru süreçlerle ikisini birlikte sağlamak mümkündür.',
  },
  {
    title: 'Şeffaflık esastır',
    description:
      'Roadmap, ilerleme ve kararlar her zaman görünürdür. Müşterilerimiz sürpriz yaşamaz.',
  },
  {
    title: 'Ürün, koddan önce gelir',
    description:
      'Teknik tercihler iş hedefine hizmet eder. Modaya değil, ihtiyaca odaklanırız.',
  },
  {
    title: 'Sürdürülebilir tempo',
    description:
      'Tükenmişlikle teslim edilen kod uzun ömürlü olmaz. Sürdürülebilir hız, sürdürülebilir kalite getirir.',
  },
];

const principles = [
  {
    number: '01',
    title: 'Önce problem, sonra çözüm',
    description:
      'Her projeye yeterli keşif süresi ayırıyoruz. Yanlış tanımlanmış bir problemin doğru çözümü olmaz; bu nedenle ilk hafta hep dinleme, anlama ve sorgulama üzerine kuruludur.',
  },
  {
    number: '02',
    title: 'Basit, sonra ölçeklenebilir',
    description:
      'Gereksiz karmaşıklığı reddediyoruz. Bugünkü ihtiyacı en sade biçimde çözen, ancak büyümeye hazır bir mimari kurmak; over-engineering yapmaktan her zaman daha değerlidir.',
  },
  {
    number: '03',
    title: 'Veri ile karar',
    description:
      'Sezgiler değerlidir, ancak ürün kararları metriklerle desteklenmelidir. Performans, kullanıcı davranışı ve hata oranlarını sürekli izleyerek mühendislik kararlarımızı veriye dayandırırız.',
  },
  {
    number: '04',
    title: 'Otomasyon zorunlu',
    description:
      'Manuel adım, hata kaynağıdır. Test, dağıtım, izleme ve geri bildirim döngülerinin otomatize edilmesi; ekiplerin hızını ve güvenini artırır.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-radial-fade" />
        <div className="container relative pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-muted-foreground/40" aria-hidden="true" />
              Hakkımızda
            </span>
            <h1 className="mt-5 text-display-lg font-semibold tracking-tight text-balance gradient-text">
              Mühendisliği bir ürün disiplini olarak görüyoruz.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
              Gunerdev; startup&apos;lar ve büyüyen işletmeler için yüksek performanslı web
              uygulamaları geliştiren kurumsal bir yazılım ekibidir. Her projeyi uzun vadeli bir
              ortaklık olarak ele alıyor; teknik kararlarımızı işinizin uzun vadeli hedeflerine göre
              şekillendiriyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
                Vizyonumuz
              </span>
              <h2 className="mt-4 text-display-md font-semibold tracking-tight gradient-text">
                İşletmelerin dijital omurgasını inşa eden güvenilir teknik ortak olmak.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
                Hızlı, ölçeklenebilir ve sürdürülebilir yazılımı; her büyüklükteki şirket için
                erişilebilir kılmak istiyoruz. Mühendislik kalitesinin yalnızca dev şirketlerin
                ayrıcalığı olmadığına inanıyoruz.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8 md:p-10">
              <span className="eyebrow">
                <span className="h-px w-6 bg-accent/60" aria-hidden="true" />
                Misyonumuz
              </span>
              <h2 className="mt-4 text-display-md font-semibold tracking-tight gradient-text">
                İşinizi büyütmenize yardımcı olan yazılım çözümleri teslim etmek.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
                Müşterilerimizin iş hedeflerini derinlemesine anlayarak; bu hedeflere doğrudan
                hizmet eden, ölçülebilir sonuç üreten yazılım sistemleri tasarlıyor ve
                geliştiriyoruz. Sadece kod teslim etmiyor; iş sonucu teslim ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface/30 border-y border-border">
        <div className="container">
          <SectionHeading
            eyebrow="Mühendislik Yaklaşımımız"
            title="Karmaşık problemleri sade çözümlere indirgiyoruz."
            description="Her projede aynı dört temel ilkeyi uyguluyoruz. Bu ilkeler bizi rastgele kararlardan ve geçici çözümlerden uzak tutuyor."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.number} className="relative rounded-2xl border border-border bg-background p-8 md:p-10">
                <span className="font-display text-3xl font-semibold text-accent">
                  {principle.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Değerlerimiz"
            title="Çalışma şeklimizi tanımlayan dört temel."
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="bg-surface p-8 md:p-10">
                <h3 className="text-base font-semibold tracking-tight">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Birlikte çalışmaya hazır mısınız?"
        description="Projelerinizi mühendislik disiplini ile teslim edecek bir ekiple tanışın."
      />
    </>
  );
}
