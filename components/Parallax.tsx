'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Parallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.25]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['8%', '-8%']);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0],
  );

  return (
    <section
      ref={ref}
      aria-label="Duruşumuz"
      className="relative h-[80vh] overflow-hidden border-y border-border md:h-[90vh]"
    >
      <motion.div
        aria-hidden="true"
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/kayseri-2.jpg"
          alt=""
          fill
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,transparent_0%,hsl(var(--background)/0.5)_75%)]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="container relative flex h-full flex-col items-center justify-center text-center"
      >
        <span className="eyebrow">
          <span className="h-px w-6 bg-muted-foreground/40" aria-hidden="true" />
          Duruşumuz
        </span>
        <h2
          className="mt-6 max-w-3xl text-display-lg font-semibold tracking-tight text-balance gradient-text"
          style={{ textShadow: '0 2px 24px hsl(var(--background) / 0.6)' }}
        >
          Yazılım, hızla yazılan kod değil; uzun vadede ayakta kalan sistemdir.
        </h2>
        <p
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty"
          style={{ textShadow: '0 1px 12px hsl(var(--background) / 0.6)' }}
        >
          Her satır kod, gelecekteki bir mühendisin, bir kullanıcının ve sizin
          işinizin yükünü taşır. Bu yüzden hızlı çözüm yerine, doğru çözümü
          kuruyoruz.
        </p>
      </motion.div>
    </section>
  );
}
