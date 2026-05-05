'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceIcon } from '@/components/ServiceIcon';

type Service = {
  id: string;
  iconSlug: string;
  title: string;
  description: string;
  value: string;
};

const services: Service[] = [
  {
    id: 'web-applications',
    iconSlug: 'web-uygulamalari',
    title: 'Web Uygulamaları',
    description:
      'React, Next.js ve modern web teknolojileri ile yüksek performanslı, SEO uyumlu ve ölçeklenebilir web uygulamaları geliştiriyoruz.',
    value: 'Daha hızlı yüklenen sayfalar, daha yüksek dönüşüm oranları.',
  },
  {
    id: 'custom-software',
    iconSlug: 'ozel-yazilim',
    title: 'Özel Yazılım Geliştirme',
    description:
      'Hazır çözümlerin yetersiz kaldığı durumlarda, iş süreçlerinize özel uçtan uca yazılım sistemleri tasarlıyor ve geliştiriyoruz.',
    value: 'Operasyonel verimlilik ve rekabet avantajı.',
  },
  {
    id: 'backend-api',
    iconSlug: 'backend-api',
    title: 'Backend & API Sistemleri',
    description:
      'Yüksek trafikli sistemler için sağlam, güvenli ve sürdürülebilir API mimarileri kuruyoruz. Mikroservis ve monolitik yapılarda derin deneyim.',
    value: 'Güvenilir altyapı, kesintisiz iş sürekliliği.',
  },
  {
    id: 'performance',
    iconSlug: 'performans-optimizasyonu',
    title: 'Performans Optimizasyonu',
    description:
      'Mevcut uygulamalarınızın hızını, ölçeklenebilirliğini ve kaynak verimliliğini artırıyoruz. Core Web Vitals ve sunucu metriklerinde ölçülebilir iyileştirmeler.',
    value: 'Düşük altyapı maliyeti, yüksek kullanıcı memnuniyeti.',
  },
  {
    id: 'consulting',
    iconSlug: 'teknik-danismanlik',
    title: 'Teknik Danışmanlık',
    description:
      'Mimari kararlardan kod kalitesine, ekip yapılandırmasından teknoloji seçimine kadar mühendislik süreçlerinize stratejik danışmanlık sağlıyoruz.',
    value: 'Doğru teknik kararlar, daha az teknik borç.',
  },
  {
    id: 'devops',
    iconSlug: 'devops-altyapi',
    title: 'DevOps & Altyapı',
    description:
      'CI/CD pipeline\'ları, containerization, izlenebilirlik ve sunucu altyapısı yönetimi. Geliştirme hızınızı artırırken güvenliği koruyoruz.',
    value: 'Daha hızlı yayın döngüsü, güvenilir deploy süreci.',
  },
];

export function Services() {
  return (
    <section className="section relative">
      <div className="container">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Mühendislik odaklı çözümler, ölçülebilir sonuçlar."
          description="Her projeyi uzun vadeli bir ortaklık olarak ele alıyoruz. Teknik kararlarımızı işinizin hedeflerine göre şekillendiriyoruz."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
              className="group relative flex flex-col gap-5 bg-background p-7 transition-colors duration-300 hover:bg-surface md:p-8"
            >
              <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/15 shadow-[0_0_24px_-6px_hsl(var(--accent)/0.5)] ring-1 ring-accent/30 transition-all group-hover:bg-accent/25 group-hover:shadow-[0_0_32px_-4px_hsl(var(--accent)/0.7)]">
                <ServiceIcon slug={service.iconSlug} className="h-9 w-9" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-auto pt-4">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent/80">
                  İş değeri
                </p>
                <p className="mt-1.5 text-sm font-medium text-foreground">{service.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/services" className="btn-secondary">
            Tüm hizmetleri görüntüle
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
