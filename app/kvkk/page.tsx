import { PageHero } from '@/components/PageHero';
import { CTA } from '@/components/CTA';
import { buildMetadata } from '@/lib/seo';
import { site, businessInfo } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'KVKK Aydınlatma Metni',
  description:
    '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Gunerdev tarafından kişisel verilerin işlenmesine ilişkin aydınlatma metni.',
  path: '/kvkk',
});

const lastUpdated = '5 Mayıs 2026';

export default function KvkkPage() {
  return (
    <>
      <PageHero
        eyebrow="Yasal · KVKK"
        title="KVKK Aydınlatma Metni"
        description="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kişisel verilerinizin nasıl işlendiğine dair detaylı aydınlatma."
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
                {site.legalName} ("Gunerdev"), 6698 sayılı Kişisel Verilerin Korunması Kanunu
                ("KVKK") kapsamında veri sorumlusu sıfatıyla hareket etmektedir. Bu aydınlatma
                metni, kişisel verilerinizin hangi amaçlarla, hangi hukuki sebeplere dayanılarak
                işlendiğini, kimlere aktarılabileceğini ve haklarınızı açıklamak amacıyla
                hazırlanmıştır.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">1. Veri sorumlusu</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                <strong className="text-foreground">{site.legalName}</strong>
                <br />
                Adres: {site.address}
                <br />
                E-posta:{' '}
                <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                  {site.email}
                </a>
                <br />
                Telefon: {site.phone}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">2. İşlenen kişisel veriler</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Hizmetlerimizden yararlanmanız ve bizimle iletişim kurmanız sırasında aşağıdaki
                veri kategorilerini işliyoruz:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>
                  <strong className="text-foreground">Kimlik:</strong> Ad, soyad, ünvan
                </li>
                <li>
                  <strong className="text-foreground">İletişim:</strong> E-posta, telefon, adres
                </li>
                <li>
                  <strong className="text-foreground">Müşteri işlem:</strong> Talep ve şikayet
                  içerikleri, hizmet kapsamına ait yazışmalar
                </li>
                <li>
                  <strong className="text-foreground">İşlem güvenliği:</strong> IP adresi,
                  tarayıcı bilgisi, oturum kayıtları
                </li>
                <li>
                  <strong className="text-foreground">Finansal:</strong> Faturalama bilgileri,
                  vergi bilgileri (kurumsal müşteriler)
                </li>
                <li>
                  <strong className="text-foreground">Pazarlama:</strong> Ziyaret istatistikleri
                  (anonim) ve isteğe bağlı bülten kayıtları
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">3. İşleme amaçları</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Kişisel verileriniz aşağıdaki amaçlarla işlenir:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>• Talebinize yanıt vermek ve hizmet sunmak</li>
                <li>• Sözleşme süreçlerini yürütmek ve yükümlülükleri yerine getirmek</li>
                <li>• Yasal yükümlülüklerin (faturalama, muhasebe, vergi) ifası</li>
                <li>• Hizmet kalitesinin ölçülmesi ve geliştirilmesi</li>
                <li>• Bilgi güvenliği süreçlerinin yürütülmesi</li>
                <li>• Şikayet ve önerilerin değerlendirilmesi</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">4. Hukuki sebepler</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Verileriniz KVKK madde 5 kapsamında aşağıdaki hukuki sebeplere dayanılarak
                işlenir:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>• Sözleşmenin kurulması ve ifası için zorunlu olması</li>
                <li>• Kanunlarda açıkça öngörülmesi</li>
                <li>• Hukuki yükümlülüklerin yerine getirilmesi</li>
                <li>• Meşru menfaatlerin korunması</li>
                <li>• Açık rıza (yasal dayanak gerekmediği durumlarda)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">5. Aktarım</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Kişisel verileriniz, hizmetin gerektirdiği ölçüde ve amaçlarla sınırlı olmak
                üzere aşağıdaki taraflara aktarılabilir:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>• Sunucu ve altyapı sağlayıcıları (KVKK uyumlu hizmet sağlayıcılar)</li>
                <li>• Mali müşavirlik ve muhasebe hizmeti aldığımız kuruluşlar</li>
                <li>• Yasal zorunluluk olduğu hallerde yetkili kamu kurum ve kuruluşları</li>
                <li>• Hizmet aldığımız üçüncü taraf yazılım sağlayıcıları</li>
              </ul>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Yurt dışına veri aktarımı yalnızca KVKK madde 9 kapsamında yeterli korumanın
                bulunduğu ülkelere veya gerekli güvenceler alınarak yapılır.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">6. Saklama süresi</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Kişisel veriler, işleme amacının gerektirdiği süre ve ilgili mevzuatın öngördüğü
                zamanaşımı süreleri (örn. ticari defter ve belgeler için 10 yıl) boyunca
                saklanır. Sürelerin dolması veya işleme amacının ortadan kalkması halinde
                verileriniz silinir, yok edilir veya anonim hale getirilir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">7. Veri sahibinin hakları (KVKK md. 11)</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Veri sahibi olarak Gunerdev'e başvurarak aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>• Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>• İşlenmişse, buna ilişkin bilgi talep etme</li>
                <li>• İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>• Yurt içinde veya yurt dışında aktarıldığı tarafları bilme</li>
                <li>• Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                <li>• KVKK madde 7'de öngörülen şartlar çerçevesinde silinmesini isteme</li>
                <li>• İşlenen verilere yönelik aleyhine bir sonuç çıkmasına itiraz etme</li>
                <li>• Kanuna aykırı işlenme nedeniyle uğradığınız zararın giderilmesini talep etme</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">8. Başvuru yöntemi</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Yukarıda belirtilen haklarınızı kullanmak için Veri Sorumlusuna Başvuru Usul ve
                Esasları Hakkında Tebliğ'e uygun şekilde:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>
                  • E-posta ile:{' '}
                  <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                    {site.email}
                  </a>
                </li>
                <li>• Posta ile: {site.address}</li>
              </ul>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Başvurularınız en geç 30 gün içinde, talebin niteliğine göre ücretsiz olarak
                yanıtlanır. Başvurunun masrafı olması halinde KVKK Kurulu tarafından belirlenen
                tarifeye göre ücret alınabilir.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">9. Güvenlik tedbirleri</h2>
              <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
                Gunerdev, kişisel verilerin güvenliğini sağlamak için aşağıdakiler dahil olmak
                üzere makul teknik ve idari tedbirleri uygular:
              </p>
              <ul className="space-y-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li>• Verilerin şifrelenerek depolanması ve aktarımı</li>
                <li>• Erişim yetkilendirmesi ve denetim kayıtları</li>
                <li>• Düzenli yedekleme ve felaket kurtarma planı</li>
                <li>• Sızma testi ve güvenlik denetimleri</li>
                <li>• Personelin gizlilik yükümlülükleri</li>
              </ul>
            </div>

            <div className="space-y-4 border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                {site.legalName} · {site.address} ·{' '}
                <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                  {site.email}
                </a>{' '}
                · {businessInfo.workingHours}
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Soru veya başvurunuz var mı?"
        description="KVKK kapsamındaki haklarınız için yazılı veya elektronik başvuru kanallarımızı kullanabilirsiniz."
      />
    </>
  );
}
