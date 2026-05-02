'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/Container';

export function ErciyesShowcase() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <span className="eyebrow">
              <span className="h-px w-6 bg-muted-foreground/40" aria-hidden="true" />
              Kayseri&apos;den
            </span>
            <h2 className="mt-5 text-display-lg tracking-tight text-balance">
              <span className="gradient-text">Erciyes&apos;in eteklerinden,</span>
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-br from-accent via-accent to-accent-muted bg-clip-text text-transparent">
                {' '}dünya çapında ürünler.
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
              Anadolu&apos;nun en yüksek dağlarından birinin gölgesinde, modern web
              teknolojileriyle ölçeklenebilir yazılım çözümleri inşa ediyoruz. Coğrafyamız
              yerel; vizyonumuz, müşterilerimiz ve teknolojimiz küresel.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Konum
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground">Kayseri / TR</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Çalışma
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground">Uzaktan</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Saat
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground">UTC+3</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-6"
          >
            <figure className="relative">
              <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/15 via-transparent to-transparent blur-2xl" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-surface shadow-soft">
                <Image
                  src="/erciyes.jpg"
                  alt="Karlı Erciyes Dağı'nın Kayseri üzerinde yükseldiği görünüm"
                  fill
                  sizes="(min-width: 1024px) 560px, (min-width: 640px) 80vw, 100vw"
                  className="object-cover"
                  priority={false}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
                />
              </div>
              <figcaption className="mt-3 text-right text-xs text-muted-foreground/70">
                Fotoğraf:{' '}
                <a
                  href="https://unsplash.com/@mustafakonuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
                >
                  Mustafa Konuk
                </a>
                {' · '}
                <a
                  href="https://unsplash.com/photos/UTeF1_1rDD8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
                >
                  Unsplash
                </a>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
