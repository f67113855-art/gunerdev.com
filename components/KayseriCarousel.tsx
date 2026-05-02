'use client';

// Foto kaynaklari (Unsplash):
// 1. Omer Haktan Bulut    - https://unsplash.com/photos/atXBH67grOE
// 2. Ozgur Avsar          - https://unsplash.com/photos/ZFuC1DaaPlo
// 3. Mustafa Konuk        - https://unsplash.com/photos/JYEczUCVIwg
// 4. Yusuf Onuk           - https://unsplash.com/photos/4CggSkpM9Iw
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/Container';
import { cn } from '@/lib/utils';

type Slide = { src: string; alt: string };

const slides: Slide[] = [
  { src: '/kayseri-1.jpg', alt: 'Kayseri tarihi tas yapilari arasinda bir kubbe' },
  { src: '/kayseri-2.jpg', alt: 'Kayseri Cumhuriyet Meydani saat kulesi gece' },
  { src: '/kayseri-3.jpg', alt: 'Kayseri lale bahcesi, kirmizi laleler' },
  { src: '/kayseri-4.jpg', alt: 'Erciyes Dagi silueti, on planda camlar' },
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Kayseri görselleri"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-accent/20 via-accent/5 to-transparent blur-3xl md:-inset-10"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface shadow-soft sm:aspect-[16/10] md:aspect-[16/9]">
            <AnimatePresence mode="sync">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="absolute inset-0"
              >
                <Image
                  src={currentSlide.src}
                  alt={currentSlide.alt}
                  fill
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover object-[center_35%]"
                  priority={index === 0}
                />
              </motion.div>
            </AnimatePresence>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/40 via-transparent to-transparent"
            />

            <button
              type="button"
              onClick={prev}
              aria-label="Önceki görsel"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-surface/70 p-2.5 text-foreground backdrop-blur transition-all hover:border-accent/40 hover:bg-surface md:left-6 md:p-3"
            >
              <svg
                width="18"
                height="18"
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
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-surface/70 p-2.5 text-foreground backdrop-blur transition-all hover:border-accent/40 hover:bg-surface md:right-6 md:p-3"
            >
              <svg
                width="18"
                height="18"
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
      </Container>
    </section>
  );
}
