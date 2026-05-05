'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  type MotionValue,
} from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { cn } from '@/lib/utils';

type ReasonIconType =
  | 'discipline'
  | 'performance'
  | 'communication'
  | 'product'
  | 'scalability'
  | 'partnership';

type Reason = {
  title: string;
  description: string;
  iconType: ReasonIconType;
  span: string;
};

const GRAD_ACCENT = 'reasonIconAccent';
const GRAD_HIGHLIGHT = 'reasonIconHighlight';

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

function ReasonIcon({ type, className }: { type: ReasonIconType; className?: string }) {
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
    case 'discipline':
      return (
        <svg {...baseProps}>
          <Defs />
          <path
            d="M12 2 L20 5 V11 c0 5-3.5 8-8 10 c-4.5-2-8-5-8-10 V5 z"
            fill={fillGrad}
          />
          <path
            d="M12 2 L20 5 V11 c0 1-0.2 2-0.5 3 H4.5 C4.2 13 4 12 4 11 V5 z"
            fill={highlight}
          />
          <path
            d="M8.5 12 L11 14.5 L15.5 10"
            fill="none"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'performance':
      return (
        <svg {...baseProps}>
          <Defs />
          <path
            d="M13 2 L3 14 H11 L10 22 L21 10 H13 L14 2 z"
            fill={fillGrad}
          />
          <path d="M13 2 L3 14 H11" fill={highlight} />
          <line
            x1="13"
            y1="2"
            x2="11"
            y2="14"
            stroke={stroke}
            strokeWidth="0.8"
            strokeOpacity="0.35"
          />
        </svg>
      );
    case 'communication':
      return (
        <svg {...baseProps}>
          <Defs />
          <path
            d="M3 5 a2 2 0 0 1 2-2 h14 a2 2 0 0 1 2 2 v10 a2 2 0 0 1-2 2 H10 L5 22 V17 H5 a2 2 0 0 1-2-2 z"
            fill={fillGrad}
          />
          <path
            d="M3 5 a2 2 0 0 1 2-2 h14 a2 2 0 0 1 2 2 v5 H3 z"
            fill={highlight}
          />
          <circle cx="8" cy="10" r="1" fill={stroke} fillOpacity="0.85" />
          <circle cx="12" cy="10" r="1" fill={stroke} fillOpacity="0.85" />
          <circle cx="16" cy="10" r="1" fill={stroke} fillOpacity="0.85" />
        </svg>
      );
    case 'product':
      return (
        <svg {...baseProps}>
          <Defs />
          <circle cx="12" cy="12" r="10" fill={fillGrad} />
          <circle cx="12" cy="12" r="10" fill={highlight} />
          <circle cx="12" cy="12" r="6.5" fill={stroke} fillOpacity="0.25" />
          <circle cx="12" cy="12" r="3.5" fill={stroke} fillOpacity="0.55" />
          <circle cx="12" cy="12" r="1.5" fill={fillGrad} />
        </svg>
      );
    case 'scalability':
      return (
        <svg {...baseProps}>
          <Defs />
          <path
            d="M12 2 L22 7 L12 12 L2 7 z"
            fill={fillGrad}
          />
          <path d="M12 2 L22 7 L12 12 L2 7 z" fill={highlight} />
          <path
            d="M2 12 L12 17 L22 12"
            fill="none"
            stroke={fillGrad}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17 L12 22 L22 17"
            fill="none"
            stroke={fillGrad}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.7"
          />
        </svg>
      );
    case 'partnership':
      return (
        <svg {...baseProps}>
          <Defs />
          <path
            d="M12 21 c-1.5-1-7-5-9-9 c-1-2-0.5-5 1.5-6.5 a4.5 4.5 0 0 1 6 0.8 L12 8 l1.5-1.7 a4.5 4.5 0 0 1 6-0.8 c2 1.5 2.5 4.5 1.5 6.5 c-2 4-7.5 8-9 9 z"
            fill={fillGrad}
          />
          <path
            d="M12 21 c-1.5-1-7-5-9-9 c-1-2-0.5-5 1.5-6.5 a4.5 4.5 0 0 1 6 0.8 L12 8 l1.5-1.7 a4.5 4.5 0 0 1 6-0.8 c2 1.5 2.5 4.5 1.5 6.5 z"
            fill={highlight}
          />
          <path
            d="M9 12 L11 14 L15 10"
            fill="none"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.85"
          />
        </svg>
      );
  }
}

const reasons: Reason[] = [
  {
    title: 'Mühendislik disiplini',
    description:
      'Test edilmiş kod, code review kültürü ve sürekli entegrasyon. Hız ile kaliteyi birlikte teslim ediyoruz.',
    span: 'lg:col-span-7',
    iconType: 'discipline',
  },
  {
    title: 'Performans önceliği',
    description:
      'Her satır kod performans gözetilerek yazılır. Core Web Vitals ve ölçülebilir metriklerle çalışırız.',
    span: 'lg:col-span-5',
    iconType: 'performance',
  },
  {
    title: 'Şeffaf iletişim',
    description:
      'Haftalık demo, açık roadmap ve doğrudan erişilebilir geliştiriciler. Sürpriz olmaz.',
    span: 'lg:col-span-4',
    iconType: 'communication',
  },
  {
    title: 'Ürün odaklı yaklaşım',
    description:
      'Sadece kod yazmıyoruz; iş sonuçlarına odaklanıyoruz. Her teknik karar ürün hedefinizle hizalanır.',
    span: 'lg:col-span-4',
    iconType: 'product',
  },
  {
    title: 'Ölçeklenebilir mimari',
    description:
      'Bugünün ihtiyacını çözen, yarının yüküne hazır sistemler tasarlıyoruz. Yeniden yazma maliyetinden kaçının.',
    span: 'lg:col-span-4',
    iconType: 'scalability',
  },
  {
    title: 'Uzun vadeli ortaklık',
    description:
      'Proje teslim sonrası sizi bırakmıyoruz. Bakım, izleme ve sürekli iyileştirmede yanınızdayız.',
    span: 'lg:col-span-12',
    iconType: 'partnership',
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
            className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 shadow-[0_0_24px_-6px_hsl(var(--accent)/0.5)] ring-1 ring-accent/30 transition-all duration-300 group-hover:scale-105 group-hover:bg-accent/25 group-hover:shadow-[0_0_32px_-4px_hsl(var(--accent)/0.7)]"
          >
            <ReasonIcon type={reason.iconType} className="h-8 w-8" />
          </span>
          <span className="font-mono text-sm font-semibold tabular-nums text-accent/80">
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
