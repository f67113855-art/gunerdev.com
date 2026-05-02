'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Tamamlanan proje' },
  { value: '%99.9', label: 'Uptime garantisi' },
  { value: '<100ms', label: 'Ortalama API yanıtı' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-fade"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-grid-pattern [background-size:48px_48px] mask-fade-bottom"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
          className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-2 bg-surface/60 px-6 py-8 text-center backdrop-blur"
            >
              <span className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
