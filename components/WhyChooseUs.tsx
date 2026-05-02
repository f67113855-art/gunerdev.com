'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';

const reasons = [
  {
    title: 'Mühendislik disiplini',
    description:
      'Test edilmiş kod, code review kültürü ve sürekli entegrasyon. Hız ile kaliteyi birlikte teslim ediyoruz.',
  },
  {
    title: 'Performans önceliği',
    description:
      'Her satır kod performans gözetilerek yazılır. Core Web Vitals ve ölçülebilir metriklerle çalışırız.',
  },
  {
    title: 'Şeffaf iletişim',
    description:
      'Haftalık demo, açık roadmap ve doğrudan erişilebilir geliştiriciler. Sürpriz olmaz.',
  },
  {
    title: 'Ürün odaklı yaklaşım',
    description:
      'Sadece kod yazmıyoruz; iş sonuçlarına odaklanıyoruz. Her teknik karar ürün hedefinizle hizalanır.',
  },
  {
    title: 'Ölçeklenebilir mimari',
    description:
      'Bugünün ihtiyacını çözen, yarının yüküne hazır sistemler tasarlıyoruz. Yeniden yazma maliyetinden kaçının.',
  },
  {
    title: 'Uzun vadeli ortaklık',
    description:
      'Proje teslim sonrası sizi bırakmıyoruz. Bakım, izleme ve sürekli iyileştirmede yanınızdayız.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Neden Biz"
          title="Hızlı teslim, doğru mimari, sürdürülebilir kod."
          description="Yazılım geliştirmenin sadece teknik değil, stratejik bir karar olduğunu biliyoruz. İşinizi anlamadan satır kod yazmıyoruz."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
              className="card group"
            >
              <div className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent transition-colors group-hover:bg-accent/20"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
