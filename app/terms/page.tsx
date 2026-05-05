import { PageHero } from '@/components/PageHero';
import { CTA } from '@/components/CTA';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Kullanım Koşulları',
  description:
    'Gunerdev tarafından sunulan hizmetlerin kullanım koşulları, hak ve yükümlülükler.',
  path: '/terms',
});

const lastUpdated = '5 Mayıs 2026';

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="Kullanım Koşulları"
        description="Sitemizi ve hizmetlerimizi kullanırken geçerli olan koşullar."
        imageSrc="/hero-about.jpg"
        imageAlt=""
        imagePosition="center"
      />

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-10">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Son güncelleme: {lastUpdated}
            </p>

            <div className="space-y-4">
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Bu Kullanım Koşulları, {site.legalName} ("Gunerdev") tarafından{' '}
                <a href={site.url} className="text-accent hover:underline">{site.domain}</a>{' '}
                üzerinden sunulan tüm hizmetlerin (web sitesi, içerik, danışmanlık ve yazılım
                geliştirme) kullanımını düzenler. Sitemizi kullanarak bu koşulları kabul etmiş
                sayılırsınız.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">1. Tanımlar</h2>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>
                  <strong className="text-foreground">"Site":</strong>{' '}
                  <a href={site.url} className="text-accent hover:underline">{site.domain}</a> alan
                  adı altındaki tüm sayfalar.
                </li>
                <li>
                  <strong className="text-foreground">"Hizmet":</strong> Gunerdev tarafından
                  sağlanan yazılım geliştirme, danışmanlık, performans iyileştirme ve DevOps
                  hizmetleri.
                </li>
                <li>
                  <strong className="text-foreground">"Kullanıcı":</strong> Siteyi ziyaret eden ya
                  da hizmetlerden yararlanan gerçek veya tüzel kişi.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">2. Hizmetlerin kapsamı</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Gunerdev, müşterilerinin ihtiyaçlarına uygun yazılım çözümleri geliştirir. Her
                proje için ayrı bir sözleşme yapılır; bu sözleşmede iş kapsamı, teslim süreleri,
                ücret ve diğer şartlar açıkça belirtilir. Bu sözleşmenin hükümleri, işbu Kullanım
                Koşulları ile çelişmesi halinde sözleşme hükümleri geçerlidir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">3. Fikri mülkiyet</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Bu sitedeki tüm içerik, tasarım, logo, yazı, görsel ve kod, aksi açıkça
                belirtilmedikçe Gunerdev'in mülkiyetindedir ve telif hakları yasalarıyla
                korunur. İçeriklerin izinsiz kopyalanması, çoğaltılması, dağıtılması veya ticari
                amaçla kullanılması yasaktır.
              </p>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Müşterilere özel olarak geliştirilen yazılımların fikri mülkiyet hakları,
                projeye özel sözleşmede belirtildiği şekilde devredilir veya lisanslanır.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">4. Kullanıcı yükümlülükleri</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Site ve hizmetleri kullanırken aşağıdaki davranışları sergilememeyi taahhüt
                edersiniz:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>• Yasalara aykırı, zarar verici veya rahatsız edici içerik göndermek</li>
                <li>• Site altyapısına izinsiz erişmeye çalışmak</li>
                <li>• Site veya hizmetlerin işleyişini bozacak otomatize işlemler yapmak</li>
                <li>• Üçüncü tarafların haklarını ihlal eden içerik paylaşmak</li>
                <li>• Site üzerinden spam veya yanıltıcı içerik dağıtmak</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">5. Sorumluluk reddi</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Site içeriği bilgilendirme amaçlıdır. Blog yazıları, makaleler ve diğer
                materyaller bağlayıcı tavsiye veya garanti niteliği taşımaz. Hizmet kapsamındaki
                taahhütler, müşteriyle imzalanan sözleşmede tanımlıdır.
              </p>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Gunerdev, sitenin sürekli erişilebilirliğini garanti etmez. Bakım, güncelleme
                veya teknik sorunlar nedeniyle erişim geçici olarak kesilebilir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">6. Üçüncü taraf bağlantıları</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Site, üçüncü taraflara ait sayfalara bağlantılar içerebilir. Bu bağlantılı
                sitelerin içeriği, gizlilik politikası veya hizmetleri Gunerdev'in
                sorumluluğunda değildir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">7. Koşullarda değişiklik</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Gunerdev, bu Kullanım Koşulları'nı dilediği zaman güncelleme hakkını saklı
                tutar. Önemli değişiklikler bu sayfanın üst kısmında belirtilen tarih
                güncellenerek duyurulur. Siteyi kullanmaya devam etmeniz güncel koşulları kabul
                ettiğiniz anlamına gelir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">8. Uygulanacak hukuk ve yetkili mahkeme</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Bu Kullanım Koşulları, Türkiye Cumhuriyeti hukukuna tabidir. Doğacak
                uyuşmazlıklarda Kayseri Mahkemeleri ve İcra Daireleri yetkilidir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">9. İletişim</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Sorularınız için{' '}
                <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                  {site.email}
                </a>{' '}
                adresinden bize ulaşabilirsiniz.
              </p>
              <p className="text-sm text-muted-foreground">
                {site.legalName} · {site.address}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Birlikte çalışmaya hazır mısınız?"
        description="Projenizi anlatın, ücretsiz bir keşif görüşmesiyle başlayalım."
      />
    </>
  );
}
