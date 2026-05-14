import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTA } from '@/components/CTA';
import { JsonLd } from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import { breadcrumbJsonLd, faqJsonLd } from '@/lib/schema';

export const metadata = buildMetadata({
  title: 'Sıkça Sorulan Sorular',
  description:
    'Yazılım geliştirme süreçleri, fiyatlandırma, çalışma modeli ve hizmet kapsamımız hakkında en sık sorulan soruların yanıtları.',
  path: '/sss',
});

type FaqItem = { question: string; answer: string };

type FaqGroup = {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
};

const groups: FaqGroup[] = [
  {
    id: 'calisma-modeli',
    title: 'Çalışma modelimiz',
    description: 'Süreç, iletişim ve birlikte çalışma şeklimiz hakkında.',
    items: [
      {
        question: 'Bir projeyi nasıl başlatıyorsunuz?',
        answer:
          'Her proje 1 saatlik ücretsiz keşif görüşmesiyle başlar. Bu görüşmede iş hedeflerinizi, mevcut sistemi ve kısıtları anlıyoruz. Ardından önerdiğimiz yaklaşımı, tahmini süreyi ve yatırım aralığını içeren bir teklif gönderiyoruz. Net bir uyum varsa sözleşme + ön ödemeyle çalışmaya başlıyoruz.',
      },
      {
        question: 'Uzaktan mı çalışıyorsunuz, yerinde mi?',
        answer:
          'Kayseri merkezliyiz, Türkiye\'nin her yerinden müşteriyle uzaktan çalışıyoruz. İhtiyaç duyulduğunda kritik kurulumlar veya kick-off toplantıları için sahaya gidiyoruz. Yurt dışı projelerinde tamamen uzaktan çalışıyoruz.',
      },
      {
        question: 'Proje süresince iletişim nasıl yürüyor?',
        answer:
          'Slack veya benzer bir kanalda canlı iletişim, haftalık check-in toplantıları ve aşama sonu demo\'lar standart. Acil durumlarda telefon ile ulaşabilirsiniz. Tüm karar ve teslimleri takip edilebilir bir proje yönetimi aracında (Linear, Jira veya benzer) tutuyoruz.',
      },
      {
        question: 'Tek başınıza mı çalışıyorsunuz, ekibiniz var mı?',
        answer:
          'Çekirdek ekibimizin yanında uzun süreli çalıştığımız serbest çalışan uzmanlar var. Projenin gerektirdiği yetkinliklere göre ekibi şekillendiriyoruz. Tüm projelerde tek bir teknik sorumlu lider atıyoruz; iletişim hep aynı noktadan yürür.',
      },
    ],
  },
  {
    id: 'sureler-ve-teslimat',
    title: 'Süreler ve teslimat',
    description: 'Bir projenin ne kadar sürdüğü ve nasıl teslim edildiği.',
    items: [
      {
        question: 'Ortalama bir proje ne kadar sürüyor?',
        answer:
          'Kurumsal site: 4-6 hafta. Orta karmaşıklıkta web uygulaması: 8-12 hafta. SaaS ürünü ilk MVP: 3-5 ay. Performans optimizasyonu: 4-6 hafta. Tahmini süreyi keşif görüşmesi sonrası netleştiriyoruz; sürpriz sürelerden kaçınıyoruz.',
      },
      {
        question: 'Aşamalı teslim mi, tek seferde mi?',
        answer:
          'Çoğunlukla aşamalı teslim öneriyoruz. İlk modülü 4-6 hafta içinde canlıya alıp gerçek geri bildirimle devam etmek, beklemekten her zaman daha verimli. Tek seferlik proje gerekiyorsa (yasal sebepler, regülasyon) buna da uyum sağlıyoruz.',
      },
      {
        question: 'Teslim sonrası destek var mı?',
        answer:
          'Yayın sonrası 2 hafta yakın izleme dahil. Sonrasında aylık destek paketleri (saat-bazlı veya sabit ücret) sunuyoruz. Ayrıca müşterilerimize "uzun süreli teknik partner" modelini öneriyoruz; ürününüzün yaşam boyu sağlığı için.',
      },
    ],
  },
  {
    id: 'fiyatlandirma',
    title: 'Fiyatlandırma ve sözleşme',
    description: 'Ücretlendirme ve ticari koşullar.',
    items: [
      {
        question: 'Sabit fiyat mı, saat-bazlı mı?',
        answer:
          'Kapsamı netleşmiş projelerde sabit fiyat tercih ediyoruz. Süreç içinde tanımlanacak (discovery, danışmanlık) işlerde saat veya gün bazlı çalışıyoruz. Detaylı fiyat aralıkları için fiyatlandırma sayfamızı inceleyebilirsiniz.',
      },
      {
        question: 'Asgari proje bütçeniz ne?',
        answer:
          'Tek başına bir proje için tipik başlangıç bütçemiz 75.000 TL. Bunun altındaki işler için danışmanlık veya saat bazlı destek modelleri öneriyoruz.',
      },
      {
        question: 'Ödeme planı nasıl?',
        answer:
          'Genelde %30 başlangıç, %40 ara teslim, %30 yayın olmak üzere üç ödeme. Uzun süreli projelerde aylık ödeme planı uygulanabiliyor. Tüm ödemeler fatura ile, yasal süreçlere uygun.',
      },
      {
        question: 'KDV dahil mi?',
        answer:
          'Tüm fiyatlarımız KDV hariç olarak ifade edilir. Sözleşmede ve faturada KDV ayrı satır olarak gösterilir.',
      },
    ],
  },
  {
    id: 'teknoloji-ve-mimari',
    title: 'Teknoloji ve mimari',
    description: 'Hangi teknolojileri, neden kullanıyoruz.',
    items: [
      {
        question: 'Hangi teknolojilerle çalışıyorsunuz?',
        answer:
          'Frontend: Next.js, React, TypeScript, Tailwind. Backend: Node.js, Python, NestJS. Veritabanı: PostgreSQL, Redis, MongoDB. Altyapı: Docker, GitHub Actions, NGINX, Cloudflare. Mobil için React Native ve native bileşenler. Karar her zaman projenin ihtiyacına göre.',
      },
      {
        question: 'Mevcut sistemimiz başka bir teknolojide. Devam edebilir misiniz?',
        answer:
          'Çoğu durumda evet. PHP/Laravel, .NET, Python/Django, Ruby/Rails gibi yığınlarda da çalıştık. Mevcut yığını koruyarak iyileştirme yapabilir veya kademeli geçiş planlayabiliriz. Yeniden yazma kararı, ancak gerçekten gerektiğinde gündeme gelir.',
      },
      {
        question: 'Açık kaynak mı, kapalı sistem mi tercih ediyorsunuz?',
        answer:
          'Açık kaynak. Bağımsızlık, topluluk desteği ve uzun vadeli sürdürülebilirlik için. SaaS bağımlılığını minimize eden, kendi sunucunuzda çalışabilen mimariler tasarlıyoruz.',
      },
      {
        question: 'Kod sahipliği bizde mi olur?',
        answer:
          'Evet. Müşteri için yazılan tüm kod, sözleşmede aksi belirtilmedikçe ödeme tamamlandığında müşterinin mülkiyetine geçer. Geliştirilen kodun tamamı GitHub veya benzer bir platformda müşterinin hesabında tutulur.',
      },
    ],
  },
  {
    id: 'guvenlik-ve-uyum',
    title: 'Güvenlik ve uyum',
    description: 'Veri güvenliği, KVKK ve mevzuat uyumu.',
    items: [
      {
        question: 'KVKK uyumlu sistem geliştiriyor musunuz?',
        answer:
          'Evet. KVKK ve GDPR uyumlu kayıt/onay süreçleri, veri silme/anonimleştirme, denetim logları, açık rıza akışları ve sözleşmesel veri sorumluluğu yapıları geliştiriyoruz. Yasal danışmanlık değil teknik uygulama sağlıyoruz; mevzuat uzmanı yorumu için hukuk danışmanınızla çalışıyoruz.',
      },
      {
        question: 'Güvenlik testi yapıyor musunuz?',
        answer:
          'Önemli projelerde temel güvenlik denetimi (OWASP Top 10) standart kapsamımızda. Kapsamlı sızma testi gerekiyorsa konunun uzmanı bağımsız bir firma ile çalışmayı öneriyoruz; bu çalışmanın koordinasyonunu biz yürütüyoruz.',
      },
      {
        question: 'NDA imzalıyor musunuz?',
        answer:
          'Evet, talep eden tüm projelerde gizlilik sözleşmesi imzalıyoruz. Standart NDA örneğimizi ön görüşmede paylaşabilir veya sizinkini imzalayabiliriz.',
      },
    ],
  },
  {
    id: 'diger',
    title: 'Diğer',
    description: 'Sıkça sorulan diğer sorular.',
    items: [
      {
        question: 'WordPress ile çalışıyor musunuz?',
        answer:
          'Mevcut WordPress sitelerinin performansı, güvenliği ve özelleştirilmesi için danışmanlık veriyoruz. Yeni projelerde WordPress\'i sınırlı durumlarda öneriyoruz; çoğu projede headless CMS veya tamamen özel çözüm daha mantıklı oluyor.',
      },
      {
        question: 'Mobil uygulama geliştiriyor musunuz?',
        answer:
          'Evet, ağırlıklı olarak React Native ile. Tek kod tabanı ile iOS ve Android\'i hedefleyebildiğimiz için maliyet etkin ve hızlı geliştirme sağlanıyor. Yüksek performans gerektiren özellikler için native modül entegrasyonu yapıyoruz.',
      },
      {
        question: 'Yapay zeka entegrasyonu yapıyor musunuz?',
        answer:
          'Evet. OpenAI, Anthropic ve diğer LLM API\'leri ile entegrasyonlar; içerik üretimi, müşteri destek otomasyonu, RAG tabanlı doküman arama, akıllı form asistanları gibi alanlarda projeler yürütüyoruz.',
      },
      {
        question: 'E-ticaret sitesi yapıyor musunuz?',
        answer:
          'Yapıyoruz; özellikle özel ihtiyaçları olan veya hazır platformların (Shopify, WooCommerce) limitlerine takılmış işletmeler için. Hazır platform yeterliyse açıkça söylüyor, gerekirse sadece tema ve özelleştirme desteği veriyoruz.',
      },
    ],
  },
];

export default function FaqPage() {
  const allFaqItems = groups.flatMap((g) => g.items);
  return (
    <>
      <JsonLd
        data={[
          faqJsonLd(allFaqItems),
          breadcrumbJsonLd([
            { name: 'Anasayfa', path: '/' },
            { name: 'SSS', path: '/sss' },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Yardım"
        title="Sıkça sorulan sorular"
        description="Yazılım geliştirme süreçleri, fiyatlandırma, çalışma modeli ve hizmet kapsamımız hakkında en sık sorulan soruların yanıtları."
        imageSrc="/hero-services.jpg"
        imageAlt=""
        imagePosition="center"
      />

      <section className="section">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <aside className="lg:col-span-3">
              <nav className="lg:sticky lg:top-24 space-y-1">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Konular
                </p>
                {groups.map((group) => (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {group.title}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="lg:col-span-9 space-y-12">
              {groups.map((group) => (
                <section key={group.id} id={group.id} className="scroll-mt-24">
                  <header>
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {group.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground md:text-base">
                      {group.description}
                    </p>
                  </header>

                  <div className="mt-6 space-y-3">
                    {group.items.map((item) => (
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
                </section>
              ))}

              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Sorunuzu burada bulamadınız mı?
                </p>
                <p className="mt-2 text-base font-medium text-foreground md:text-lg">
                  Doğrudan iletişime geçin; 24 saat içinde yanıtlıyoruz.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                >
                  İletişime geç →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Sorunuz daha spesifik mi?"
        description="Projenizi kısaca anlatın; size özel net bir teklif hazırlayalım."
      />
    </>
  );
}
