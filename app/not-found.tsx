import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sayfa bulunamadı',
  description: 'Aradığınız sayfa taşınmış veya kaldırılmış olabilir.',
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-7xl font-semibold tracking-tight text-accent md:text-8xl">
            404
          </span>
          <h1 className="mt-6 text-display-md font-semibold tracking-tight text-balance gradient-text">
            Aradığınız sayfa bulunamadı.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground text-pretty">
            Bağlantı eski olabilir veya sayfa taşınmış olabilir. Sizi anasayfaya yönlendirelim.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/" className="btn-primary">
              Anasayfaya Dön
            </Link>
            <Link href="/contact" className="btn-secondary">
              Bize Yazın
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
