'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';

type StepIconType = 'discovery' | 'planning' | 'development' | 'launch';

const GRAD_ACCENT = 'processIconAccent';
const GRAD_HIGHLIGHT = 'processIconHighlight';

function Defs() {
  return (
    <defs>
      <linearGradient id={GRAD_ACCENT} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--accent))" />
        <stop offset="100%" stopColor="hsl(var(--accent-muted))" />
      </linearGradient>
      <linearGradient id={GRAD_HIGHLIGHT} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0.55" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

function StepIcon({ type, className }: { type: StepIconType; className?: string }) {
  const baseProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true,
    className,
  };
  const fillGrad = `url(#${GRAD_ACCENT})`;
  const highlight = `url(#${GRAD_HIGHLIGHT})`;
  const stroke = 'hsl(var(--accent-foreground))';

  switch (type) {
    case 'discovery':
      return (
        <svg {...baseProps}>
          <Defs />
          <circle cx="10" cy="10" r="7" fill={fillGrad} />
          <circle cx="10" cy="10" r="7" fill={highlight} />
          <circle cx="10" cy="10" r="3.5" fill={stroke} fillOpacity="0.7" />
          <line
            x1="15"
            y1="15"
            x2="21"
            y2="21"
            stroke={fillGrad}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'planning':
      return (
        <svg {...baseProps}>
          <Defs />
          <rect x="3" y="3" width="18" height="18" rx="2" fill={fillGrad} />
          <rect x="3" y="3" width="18" height="9" rx="2" fill={highlight} />
          <line x1="7" y1="8" x2="17" y2="8" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.7" />
          <line x1="7" y1="12" x2="14" y2="12" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.7" />
          <line x1="7" y1="16" x2="17" y2="16" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.7" />
        </svg>
      );
    case 'development':
      return (
        <svg {...baseProps}>
          <Defs />
          <rect x="2" y="3" width="20" height="18" rx="2.5" fill={fillGrad} />
          <rect x="2" y="3" width="20" height="9" rx="2.5" fill={highlight} />
          <polyline
            points="7 14 4 11 7 8"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="17 8 20 11 17 14"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="14"
            y1="6"
            x2="10"
            y2="16"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'launch':
      return (
        <svg {...baseProps}>
          <Defs />
          <path
            d="M14 3 c4 0 7 3 7 7 L14 17 L7 10 c0-4 3-7 7-7 z"
            fill={fillGrad}
          />
          <path
            d="M14 3 c4 0 7 3 7 7 L14 17 z"
            fill={highlight}
          />
          <circle cx="14" cy="9" r="2" fill={stroke} fillOpacity="0.85" />
          <path
            d="M7 17 c-1 1-1.5 3-1.5 4 c1 0 3-0.5 4-1.5"
            fill={fillGrad}
          />
          <path
            d="M3 21 L6 18"
            stroke={fillGrad}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

type Step = {
  number: string;
  title: string;
  description: string;
  iconType: StepIconType;
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Keşif & Analiz',
    iconType: 'discovery',
    description:
      'İş hedeflerinizi, kullanıcı ihtiyaçlarınızı ve teknik kısıtlarınızı derinlemesine anlamak için kapsamlı keşif görüşmeleri yapıyoruz. Doğru problemi tanımlamak, doğru çözümün başlangıcıdır.',
  },
  {
    number: '02',
    title: 'Mimari & Planlama',
    iconType: 'planning',
    description:
      'Ölçeklenebilir, sürdürülebilir ve maliyet etkin bir teknik mimari tasarlıyoruz. Teknoloji seçimleri, veri modeli ve sistem sınırları bu aşamada netleştirilir.',
  },
  {
    number: '03',
    title: 'Geliştirme & İterasyon',
    iconType: 'development',
    description:
      'Modern mühendislik pratikleriyle (test, code review, CI/CD) iki haftalık döngülerde sürekli teslim ederek ilerliyoruz. Her sprint sonunda çalışan bir ürün.',
  },
  {
    number: '04',
    title: 'Yayın & Optimizasyon',
    iconType: 'launch',
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
                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 shadow-[0_0_24px_-6px_hsl(var(--accent)/0.5)] ring-1 ring-accent/30">
                  <StepIcon type={step.iconType} className="h-8 w-8" />
                </span>
                <span className="font-display text-2xl font-bold text-accent">
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
