'use client';

// Arka plan: Florian Olivo, Unsplash (https://unsplash.com/photos/4hbJ-eymZ1o)
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Parallax() {
  return (
    <section className="relative isolate overflow-hidden border-y border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <Image
            src="/parallax-tech.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,transparent_0%,hsl(var(--background)/0.55)_75%)]" />
        </div>
      </div>

      <div className="container relative py-32 text-center md:py-48 lg:py-56">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="eyebrow"
        >
          <span className="h-px w-6 bg-muted-foreground/40" aria-hidden="true" />
          Duruşumuz
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mt-6 max-w-3xl mx-auto text-display-lg font-semibold tracking-tight text-balance gradient-text"
          style={{ textShadow: '0 2px 24px hsl(var(--background) / 0.6)' }}
        >
          Yazılım, hızla yazılan kod değil; uzun vadede ayakta kalan sistemdir.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty"
          style={{ textShadow: '0 1px 12px hsl(var(--background) / 0.6)' }}
        >
          Her satır kod, gelecekteki bir mühendisin, bir kullanıcının ve sizin
          işinizin yükünü taşır. Bu yüzden hızlı çözüm yerine, doğru çözümü
          kuruyoruz.
        </motion.p>
      </div>
    </section>
  );
}
