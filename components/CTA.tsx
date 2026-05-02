'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { site } from '@/lib/site';

type CTAProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CTA({
  title = 'Bir sonraki ürününüzü birlikte inşa edelim.',
  description = 'Fikrinizi anlatın; uygun çözümü, tahmini süreyi ve yatırımı ücretsiz değerlendirelim.',
  primaryLabel = 'Projenizi Konuşalım',
  primaryHref = '/contact',
  secondaryLabel = 'E-posta Gönder',
  secondaryHref = `mailto:${site.email}`,
}: CTAProps) {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-14 sm:px-12 sm:py-20 lg:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-radial-fade opacity-80"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.05] bg-grid-pattern [background-size:32px_32px] mask-fade-bottom"
          />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-display-md font-semibold tracking-tight text-balance gradient-text">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
              {description}
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={primaryHref} className="btn-primary">
                {primaryLabel}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <a href={secondaryHref} className="btn-secondary">
                {secondaryLabel}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
