'use client';

import type { ReactNode } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionValue,
} from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { cn } from '@/lib/utils';

type Reason = {
  title: string;
  description: string;
  icon: ReactNode;
  span: string;
};

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const reasons: Reason[] = [
  {
    title: 'Mühendislik disiplini',
    description:
      'Test edilmiş kod, code review kültürü ve sürekli entegrasyon. Hız ile kaliteyi birlikte teslim ediyoruz.',
    span: 'lg:col-span-7',
    icon: (
      <svg {...iconProps}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Performans önceliği',
    description:
      'Her satır kod performans gözetilerek yazılır. Core Web Vitals ve ölçülebilir metriklerle çalışırız.',
    span: 'lg:col-span-5',
    icon: (
      <svg {...iconProps}>
        <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
      </svg>
    ),
  },
  {
    title: 'Şeffaf iletişim',
    description:
      'Haftalık demo, açık roadmap ve doğrudan erişilebilir geliştiriciler. Sürpriz olmaz.',
    span: 'lg:col-span-4',
    icon: (
      <svg {...iconProps}>
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    ),
  },
  {
    title: 'Ürün odaklı yaklaşım',
    description:
      'Sadece kod yazmıyoruz; iş sonuçlarına odaklanıyoruz. Her teknik karar ürün hedefinizle hizalanır.',
    span: 'lg:col-span-4',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Ölçeklenebilir mimari',
    description:
      'Bugünün ihtiyacını çözen, yarının yüküne hazır sistemler tasarlıyoruz. Yeniden yazma maliyetinden kaçının.',
    span: 'lg:col-span-4',
    icon: (
      <svg {...iconProps}>
        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <path d="m22 12-8.58 3.91a2 2 0 0 1-1.66 0L2 12" />
        <path d="m22 17-8.58 3.91a2 2 0 0 1-1.66 0L2 17" />
      </svg>
    ),
  },
  {
    title: 'Uzun vadeli ortaklık',
    description:
      'Proje teslim sonrası sizi bırakmıyoruz. Bakım, izleme ve sürekli iyileştirmede yanınızdayız.',
    span: 'lg:col-span-12',
    icon: (
      <svg {...iconProps}>
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
        <path d="m18 15-2-2" />
        <path d="m15 18-2-2" />
      </svg>
    ),
  },
];

function ReasonCard({ reason, index }: { reason: Reason; index: number }) {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    mouseX.set(-200);
    mouseY.set(-200);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: index * 0.06,
      }}
      whileHover={{ y: -2 }}
      className={cn(
        'group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/30 sm:p-7',
        reason.span,
      )}
    >
      <Spotlight mouseX={mouseX} mouseY={mouseY} />
      <div className="pointer-events-none absolute inset-px rounded-[15px] bg-gradient-to-b from-white/[0.04] to-transparent opacity-60" />

      <div className="relative flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-all duration-300 group-hover:scale-105 group-hover:border-accent/40 group-hover:bg-accent/15"
          >
            {reason.icon}
          </span>
          <span className="text-xs font-mono text-muted-foreground/60 tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div>
          <h3 className="text-base font-semibold tracking-tight sm:text-lg">
            {reason.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {reason.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function Spotlight({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const background = useMotionTemplate`radial-gradient(420px circle at ${mouseX}px ${mouseY}px, hsl(var(--accent) / 0.16), transparent 45%)`;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{ background }}
    />
  );
}

export function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Neden Biz"
          title="Hızlı teslim, doğru mimari, sürdürülebilir kod."
          description="Yazılım geliştirmenin sadece teknik değil, stratejik bir karar olduğunu biliyoruz. İşinizi anlamadan satır kod yazmıyoruz."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
