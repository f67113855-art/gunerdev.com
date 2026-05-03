'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { reviews, type Review } from '@/lib/reviews';
import { cn } from '@/lib/utils';

const AVATAR_COLORS = [
  'bg-indigo-500',
  'bg-emerald-500',
  'bg-amber-500',
  'bg-pink-500',
  'bg-purple-500',
  'bg-cyan-500',
  'bg-rose-500',
  'bg-blue-500',
  'bg-teal-500',
  'bg-violet-500',
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0] ?? '')
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(name: string): string {
  const code = name
    .split('')
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return AVATAR_COLORS[code % AVATAR_COLORS.length] ?? AVATAR_COLORS[0]!;
}

function formatDaysAgo(days: number): string {
  if (days < 1) return 'Bugün';
  if (days < 7) return `${days} gün önce`;
  if (days < 30) return `${Math.floor(days / 7)} hafta önce`;
  if (days < 365) return `${Math.floor(days / 30)} ay önce`;
  return `${Math.floor(days / 365)} yıl önce`;
}

function pickRandomReviews(pool: Review[], count: number): Review[] {
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function StarRow({ rating }: { rating: 4 | 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} yıldız`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? '#fbbf24' : 'none'}
          stroke={i < rating ? '#fbbf24' : 'currentColor'}
          strokeWidth="1.5"
          className={i < rating ? '' : 'text-muted-foreground/30'}
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/30"
    >
      <header className="flex items-start gap-3">
        <div
          className={cn(
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white',
            getAvatarColor(review.name),
          )}
          aria-hidden="true"
        >
          {getInitials(review.name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate text-sm font-semibold text-foreground">
              {review.name}
            </h3>
          </div>
          <div className="mt-1.5 flex items-center gap-2">
            <StarRow rating={review.rating} />
            <span className="text-[11px] text-muted-foreground/70">
              {formatDaysAgo(review.daysAgo)}
            </span>
          </div>
        </div>
      </header>

      <p className="text-sm leading-relaxed text-muted-foreground">{review.text}</p>
    </motion.article>
  );
}

function ReviewSkeleton({ index }: { index: number }) {
  return (
    <div
      key={index}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6"
      aria-hidden="true"
    >
      <header className="flex items-start gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-muted/40" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-24 rounded bg-muted/40" />
          <div className="h-2.5 w-32 rounded bg-muted/30" />
          <div className="h-2.5 w-20 rounded bg-muted/30" />
        </div>
      </header>
      <div className="space-y-1.5">
        <div className="h-2.5 rounded bg-muted/30" />
        <div className="h-2.5 w-5/6 rounded bg-muted/30" />
        <div className="h-2.5 w-4/6 rounded bg-muted/30" />
      </div>
    </div>
  );
}

export function Reviews() {
  // Server'da bos render et — random secim client'ta yapilir.
  const [picked, setPicked] = useState<Review[] | null>(null);

  useEffect(() => {
    setPicked(pickRandomReviews(reviews, 4));
  }, []);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Müşteri Görüşleri"
          title="Birlikte çalıştığımız markalardan."
          description="Farklı sektörlerden müşterilerimizin geri dönüşleri. Sayfa her yenilendiğinde yeni görüşler görüntülenir."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {picked
            ? picked.map((review, index) => (
                <ReviewCard
                  key={`${review.name}-${index}`}
                  review={review}
                  index={index}
                />
              ))
            : Array.from({ length: 4 }, (_, i) => (
                <ReviewSkeleton key={i} index={i} />
              ))}
        </div>

        <p className="mt-8 text-center text-[11px] text-muted-foreground/60">
          * Yukarıdaki görüşler temsili niteliktedir; gerçek müşteri kimliklerini
          korumak amacıyla rastgele örnekler gösterilmektedir.
        </p>
      </div>
    </section>
  );
}
