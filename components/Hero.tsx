'use client';

// Arka plan: Ömer Haktan Bulut, Unsplash (https://unsplash.com/photos/jJpJu5bsoFQ)
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  motion,
  animate,
  useInView,
  useMotionValue,
  useTransform,
} from 'framer-motion';

// Tamamlanan proje sayisi: 2026-05-03'ten itibaren 10 ile baslar, her 3 gunde +1.
const PROJECT_COUNT_START = 10;
const PROJECT_COUNT_ANCHOR = Date.UTC(2026, 4, 3);

function getProjectCount(): number {
  const days = Math.floor((Date.now() - PROJECT_COUNT_ANCHOR) / 86_400_000);
  return PROJECT_COUNT_START + Math.max(0, Math.floor(days / 3));
}

type Stat = {
  value: string;
  label: string;
  count?: number;
  live?: boolean;
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/erciyes.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,transparent_0%,hsl(var(--background)/0.28)_75%)]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-fade opacity-40"
      />

      <div className="container relative pt-20 pb-24 md:pt-28 md:pb-32 lg:pt-32 lg:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Yeni projeler için müsaitiz
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mt-6 text-display-xl font-semibold tracking-tight text-balance"
            style={{ textShadow: '0 2px 24px hsl(var(--background) / 0.6)' }}
          >
            <span className="gradient-text">Hızlı, ölçeklenebilir ve modern</span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-br from-accent via-accent to-accent-muted bg-clip-text text-transparent">
              {' '}web uygulamaları
            </span>{' '}
            <span className="gradient-text">geliştiriyoruz.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty"
            style={{ textShadow: '0 1px 12px hsl(var(--background) / 0.6)' }}
          >
            Startup&apos;lar ve büyüyen işletmeler için yüksek performanslı web uygulamaları,
            özel yazılım çözümleri ve sağlam backend sistemleri inşa ediyoruz. Mühendislik
            disiplini ve ürün odaklı yaklaşımla işinizi büyütüyoruz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link href="/contact" className="btn-primary">
              Projenizi Konuşalım
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/services" className="btn-secondary">
              Hizmetlerimizi İnceleyin
            </Link>
          </motion.div>
        </motion.div>

        <StatsGrid />
      </div>
    </section>
  );
}

function StatsGrid() {
  // Hidratasyon guvenli: server'da 0 render et, client'ta gercek deger.
  const [projectCount, setProjectCount] = useState(0);
  useEffect(() => {
    setProjectCount(getProjectCount());
  }, []);

  const stats: Stat[] = [
    {
      value: '+',
      label: 'Tamamlanan proje',
      count: projectCount,
      live: true,
    },
    { value: '%99.9', label: 'Uptime garantisi' },
    { value: '<100ms', label: 'Ortalama API yanıtı' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
      className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border/60 sm:grid-cols-3"
    >
      {stats.map((stat, index) => (
        <StatCard key={stat.label} stat={stat} index={index} />
      ))}
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 + index * 0.08 }}
      whileHover={{ scale: 1.02 }}
      className="group relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-surface/70 px-6 py-8 text-center backdrop-blur transition-colors hover:bg-surface"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px bg-gradient-to-b from-accent/0 via-accent/0 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      {stat.live && (
        <span
          aria-label="Canlı sayaç"
          className="absolute right-4 top-4 flex h-2 w-2"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
        </span>
      )}
      <span className="relative font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {typeof stat.count === 'number' ? (
          <CountUp to={stat.count} suffix={stat.value} />
        ) : (
          stat.value
        )}
      </span>
      <span className="relative font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {stat.label}
      </span>
    </motion.div>
  );
}

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    return rounded.on('change', (v) => setDisplay(v));
  }, [rounded]);

  useEffect(() => {
    if (!inView || to === 0) return;
    const controls = animate(count, to, {
      duration: 1.6,
      ease: [0.21, 0.47, 0.32, 0.98],
    });
    return controls.stop;
  }, [inView, to, count]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

