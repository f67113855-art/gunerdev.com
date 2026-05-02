'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';

type Service = {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: 'web-applications',
    title: 'Web Uygulamaları',
    description:
      'React, Next.js ve modern web teknolojileri ile yüksek performanslı, SEO uyumlu ve ölçeklenebilir web uygulamaları geliştiriyoruz.',
    value: 'Daha hızlı yüklenen sayfalar, daha yüksek dönüşüm oranları.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="15" y2="21" />
        <line x1="12" y1="18" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'custom-software',
    title: 'Özel Yazılım Geliştirme',
    description:
      'Hazır çözümlerin yetersiz kaldığı durumlarda, iş süreçlerinize özel uçtan uca yazılım sistemleri tasarlıyor ve geliştiriyoruz.',
    value: 'Operasyonel verimlilik ve rekabet avantajı.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'backend-api',
    title: 'Backend & API Sistemleri',
    description:
      'Yüksek trafikli sistemler için sağlam, güvenli ve sürdürülebilir API mimarileri kuruyoruz. Mikroservis ve monolitik yapılarda derin deneyim.',
    value: 'Güvenilir altyapı, kesintisiz iş sürekliliği.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
  },
  {
    id: 'performance',
    title: 'Performans Optimizasyonu',
    description:
      'Mevcut uygulamalarınızın hızını, ölçeklenebilirliğini ve kaynak verimliliğini artırıyoruz. Core Web Vitals ve sunucu metriklerinde ölçülebilir iyileştirmeler.',
    value: 'Düşük altyapı maliyeti, yüksek kullanıcı memnuniyeti.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    id: 'consulting',
    title: 'Teknik Danışmanlık',
    description:
      'Mimari kararlardan kod kalitesine, ekip yapılandırmasından teknoloji seçimine kadar mühendislik süreçlerinize stratejik danışmanlık sağlıyoruz.',
    value: 'Doğru teknik kararlar, daha az teknik borç.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: 'devops',
    title: 'DevOps & Altyapı',
    description:
      'CI/CD pipeline\'ları, containerization, izlenebilirlik ve sunucu altyapısı yönetimi. Geliştirme hızınızı artırırken güvenliği koruyoruz.',
    value: 'Daha hızlı yayın döngüsü, güvenilir deploy süreci.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
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
              className="group relative flex flex-col gap-4 bg-background p-7 transition-colors duration-300 hover:bg-surface md:p-8"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-accent transition-colors group-hover:border-accent/40 group-hover:text-accent">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
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
