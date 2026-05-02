'use client';

// Foto kaynaklari (Unsplash):
// 1. Batuhan Dogan        - https://unsplash.com/photos/9y6U8igxFOo
// 2. Julia Arte           - https://unsplash.com/photos/2PovVgo1BvQ
// 3. Batuhan Dogan        - https://unsplash.com/photos/C6Gu8dRwxPg (gun batimi)
// 4. Batuhan Dogan        - https://unsplash.com/photos/s2jqcA1AoV8
// 5. Batuhan Dogan        - https://unsplash.com/photos/DIovIOoP1Ig (yesil ova)
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/Container';
import { cn } from '@/lib/utils';

type Slide = { src: string; alt: string; position?: string };

const slides: Slide[] = [
  {
    src: '/kayseri-1.jpg',
    alt: 'Erciyes uzakta, mor-pembe dramatik bulutlar altında geniş manzara',
    position: 'center 40%',
  },
  {
    src: '/kayseri-2.jpg',
    alt: 'Karlı Erciyes zirvesi, açık mavi gökyüzü ve geniş ova',
    position: 'center',
  },
  {
    src: '/kayseri-3.jpg',
    alt: 'Altın saatte Erciyes — karlı zirve, sinematik ışık',
    position: 'center 30%',
  },
  {
    src: '/kayseri-4.jpg',
    alt: 'Karlı Erciyes zirvesi, ön planda ağaçlık tepe silueti',
    position: 'center 35%',
  },
  {
    src: '/kayseri-5.jpg',
    alt: 'Yemyeşil Anadolu ovası, uzakta karlı Erciyes ve beyaz bulutlar',
    position: 'center',
  },
];

const AUTO_ADVANCE_MS = 6000;

export function KayseriCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % slides.length),
    [],
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(next, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [paused, next, index]);

  const currentSlide = slides[index];
  if (!currentSlide) return null;

  return (
    <section className="section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="eyebrow">
            <span className="h-px w-6 bg-muted-foreground/40" aria-hidden="true" />
            Kayseri&apos;den
          </span>
          <h2 className="mt-5 text-display-lg tracking-tight text-balance">
            <span className="gradient-text">Kadim bir şehir,</span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-br from-accent via-accent to-accent-muted bg-clip-text text-transparent">
              {' '}modern bir vizyon.
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            Anadolu&apos;nun en yüksek dağlarından birinin gölgesinde, tarihin ve
            modernliğin iç içe geçtiği bir coğrafyadan dünyaya çalışıyoruz.
          </p>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative mt-14 w-full px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Kayseri görselleri"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-accent/25 via-accent/5 to-transparent blur-3xl md:-inset-12"
        />

        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-soft sm:aspect-[2/1] lg:aspect-[21/9]">
          <AnimatePresence mode="sync">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute inset-0"
            >
              <Image
                src={currentSlide.src}
                alt={currentSlide.alt}
                fill
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: currentSlide.position ?? 'center' }}
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            aria-label="Önceki görsel"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-surface/70 p-3 text-foreground backdrop-blur transition-all hover:border-accent/40 hover:bg-surface md:left-6 md:p-3.5"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Sonraki görsel"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-surface/70 p-3 text-foreground backdrop-blur transition-all hover:border-accent/40 hover:bg-surface md:right-6 md:p-3.5"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div className="absolute bottom-4 right-4 z-10 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-[11px] text-muted-foreground backdrop-blur md:bottom-6 md:right-6">
            {String(index + 1).padStart(2, '0')}
            <span className="mx-1 text-muted-foreground/50">/</span>
            {String(slides.length).padStart(2, '0')}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${i + 1}. görsele geç`}
              aria-current={i === index}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300',
                i === index
                  ? 'w-8 bg-accent'
                  : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/60',
              )}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
