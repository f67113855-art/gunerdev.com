import { PageHero } from '@/components/PageHero';
import { CTA } from '@/components/CTA';
import { buildMetadata } from '@/lib/seo';
import { site, businessInfo } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Gizlilik Politikası',
  description:
    'Gunerdev olarak kişisel verilerinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında detaylı bilgi.',
  path: '/privacy',
});

const lastUpdated = '5 Mayıs 2026';

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal"
        title="Gizlilik Politikası"
        description="Verilerinizin nasıl toplandığı, işlendiği ve korunduğu konusunda şeffaf olmayı önemsiyoruz."
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
                Bu gizlilik politikası, {site.legalName} ("biz", "Gunerdev") tarafından{' '}
                <a href={site.url} className="text-accent hover:underline">{site.domain}</a>{' '}
                üzerinden sunulan hizmetler kapsamında topladığımız kişisel verilerin nasıl
                kullanıldığını açıklar. Politikayı okuyarak hizmetlerimizi kullanmaya devam
                ettiğinizde burada belirtilen koşulları kabul etmiş olursunuz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">1. Topladığımız bilgiler</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Bizimle iletişime geçtiğinizde veya hizmet aldığınızda aşağıdaki bilgileri
                toplayabiliriz:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>• Ad, soyad, e-posta adresi ve telefon numarası</li>
                <li>• Şirket adı ve görev (kurumsal müşteriler için)</li>
                <li>• İletişim formu üzerinden ilettiğiniz proje detayları</li>
                <li>• IP adresi, tarayıcı türü ve cihaz bilgileri (anonim analiz için)</li>
                <li>• Sözleşme ve faturalama kapsamında gerekli olan ticari bilgiler</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">2. Verileri nasıl kullanıyoruz</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Topladığımız bilgileri yalnızca aşağıdaki amaçlarla kullanırız:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>• Talebinize yanıt vermek ve teklif sunmak</li>
                <li>• Sözleşme yükümlülüklerini yerine getirmek</li>
                <li>• Yasal yükümlülükleri (faturalama, vergi) karşılamak</li>
                <li>• Hizmet kalitesini ölçmek ve iyileştirmek</li>
                <li>• Sizinle ilgili güncellemeleri (talep ettiğiniz takdirde) iletmek</li>
              </ul>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Verilerinizi pazarlama amacıyla üçüncü taraflara satmaz veya devretmeyiz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">3. Veri saklama süresi</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Kişisel verilerinizi yalnızca toplama amacının gerektirdiği süre boyunca saklarız.
                Yasal yükümlülükler kapsamında saklamamız gereken (faturalama, sözleşme) veriler,
                ilgili mevzuatın öngördüğü süre boyunca tutulur. Bunun dışında kalan veriler için
                tipik saklama süresi en fazla 24 aydır.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">4. Üçüncü taraf hizmetler</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Sitemiz ve hizmetlerimizin operasyonu için aşağıdaki gibi üçüncü taraf
                sağlayıcılarla çalışıyoruz:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>• Sunucu ve altyapı sağlayıcıları (VPS / bulut)</li>
                <li>• Analitik araçlar (anonim ziyaret istatistikleri)</li>
                <li>• E-posta ve iletişim altyapısı</li>
                <li>• Faturalama ve muhasebe yazılımları</li>
              </ul>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Bu sağlayıcılarla yalnızca hizmetin gerektirdiği veriyi paylaşırız ve veri
                güvenliği taahhütleri altında çalışırız.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">5. Çerezler</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Sitemiz, kullanıcı deneyimini iyileştirmek için zorunlu ve isteğe bağlı çerezler
                kullanabilir. Tarayıcı ayarlarından çerezleri reddedebilirsiniz; bu durumda bazı
                özellikler çalışmayabilir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">6. Haklarınız</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuat
                kapsamında aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>• Verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>• İşlenen verileriniz hakkında bilgi talep etme</li>
                <li>• Verilerinizin düzeltilmesini veya silinmesini isteme</li>
                <li>• Verilerinizin işlenmesine itiraz etme</li>
                <li>• Verilerinizin başka bir veri sorumlusuna aktarılmasını talep etme</li>
              </ul>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Bu haklarınızı kullanmak için{' '}
                <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                  {site.email}
                </a>{' '}
                adresine yazılı başvuruda bulunabilirsiniz. Daha detaylı bilgi için{' '}
                <a href="/kvkk" className="text-accent hover:underline">
                  KVKK Aydınlatma Metni
                </a>
                ’ni inceleyebilirsiniz.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">7. Güvenlik</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Verilerinizi yetkisiz erişime, değişikliğe veya kayba karşı korumak için makul
                teknik ve organizasyonel önlemler alırız. Bu önlemler şifreleme, erişim denetimi,
                düzenli yedekleme ve güvenlik denetimlerini içerir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">8. Politika değişiklikleri</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Bu politika zaman içinde güncellenebilir. Önemli değişiklikler olduğunda,
                değişiklik tarihini bu sayfanın başında gösteririz. Hizmetlerimizi kullanmaya
                devam etmeniz, güncel politikayı kabul ettiğiniz anlamına gelir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">9. İletişim</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Bu politika hakkında soru ve talepleriniz için bize{' '}
                <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                  {site.email}
                </a>{' '}
                üzerinden ulaşabilirsiniz.
              </p>
              <p className="text-sm text-muted-foreground">
                {site.legalName} · {site.address} · {businessInfo.workingHours}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Sorunuz mu var?"
        description="Verileriniz hakkında her türlü soruda yazılı ya da telefonla bize ulaşabilirsiniz."
      />
    </>
  );
}
