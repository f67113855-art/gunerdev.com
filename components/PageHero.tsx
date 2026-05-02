'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  imagePosition?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt = '',
  imagePosition = 'center',
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden={imageAlt ? undefined : true} className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_50%,transparent_0%,hsl(var(--background)/0.45)_70%)]" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial-fade opacity-70"
      />

      <div className="container relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-36 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="eyebrow">
            <span className="h-px w-6 bg-muted-foreground/40" aria-hidden="true" />
            {eyebrow}
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="mt-5 text-display-lg font-semibold tracking-tight text-balance gradient-text"
            style={{ textShadow: '0 2px 24px hsl(var(--background) / 0.6)' }}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty"
            style={{ textShadow: '0 1px 12px hsl(var(--background) / 0.6)' }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

    </section>
  );
}
