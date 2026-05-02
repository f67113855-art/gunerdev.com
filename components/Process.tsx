'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Keşif & Analiz',
    description:
      'İş hedeflerinizi, kullanıcı ihtiyaçlarınızı ve teknik kısıtlarınızı derinlemesine anlamak için kapsamlı keşif görüşmeleri yapıyoruz. Doğru problemi tanımlamak, doğru çözümün başlangıcıdır.',
  },
  {
    number: '02',
    title: 'Mimari & Planlama',
    description:
      'Ölçeklenebilir, sürdürülebilir ve maliyet etkin bir teknik mimari tasarlıyoruz. Teknoloji seçimleri, veri modeli ve sistem sınırları bu aşamada netleştirilir.',
  },
  {
    number: '03',
    title: 'Geliştirme & İterasyon',
    description:
      'Modern mühendislik pratikleriyle (test, code review, CI/CD) iki haftalık döngülerde sürekli teslim ederek ilerliyoruz. Her sprint sonunda çalışan bir ürün.',
  },
  {
    number: '04',
    title: 'Yayın & Optimizasyon',
    description:
      'Yayın sonrasında performansı, hataları ve kullanıcı davranışını sürekli izliyoruz. Sürekli iyileştirme döngüsüyle ürünü zaman içinde olgunlaştırıyoruz.',
  },
];

export function Process() {
  return (
    <section className="section bg-surface/30 border-y border-border relative">
      <div className="container">
        <SectionHeading
          eyebrow="Süreç"
          title="Öngörülebilir, şeffaf ve disiplinli bir geliştirme süreci."
          description="Her aşamada netlik sağlıyoruz. Sürprizleri en aza indirmek, mühendislik kalitesinin temelidir."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
              className="relative"
            >
              <div className="flex items-center gap-4">
                <span className="font-display text-2xl font-semibold text-accent">
                  {step.number}
                </span>
                <span className="hairline flex-1" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
