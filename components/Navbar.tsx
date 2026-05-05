'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Brand } from '@/components/Logo';
import { NavIcon, type NavIconType } from '@/components/NavIcon';
import { navigation, site } from '@/lib/site';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="container flex h-20 items-center justify-between md:h-24">
        <Link
          href="/"
          aria-label={`${site.name} ana sayfa`}
          className="transition-transform duration-200 hover:scale-[1.03]"
        >
          <Brand size={52} />
        </Link>

        <nav className="hidden md:block" aria-label="Ana navigasyon">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'group relative inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-all',
                    isActive(item.href)
                      ? 'bg-accent/15 text-foreground ring-1 ring-accent/30'
                      : 'text-muted-foreground hover:bg-surface hover:text-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-all',
                      isActive(item.href)
                        ? 'bg-accent/20 text-accent shadow-[0_0_14px_-2px_hsl(var(--accent)/0.5)]'
                        : 'bg-surface text-muted-foreground group-hover:bg-accent/15 group-hover:text-accent',
                    )}
                  >
                    <NavIcon type={item.icon as NavIconType} className="h-5 w-5" />
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary">
            Teklif Al
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-elevated md:hidden"
        >
          <span className="sr-only">Menü</span>
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
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'md:hidden overflow-hidden border-b border-border bg-background transition-[max-height] duration-300 ease-in-out',
          open ? 'max-h-[480px]' : 'max-h-0',
        )}
      >
        <nav className="container py-4" aria-label="Mobil navigasyon">
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors',
                    isActive(item.href)
                      ? 'bg-accent/10 text-foreground'
                      : 'text-muted-foreground hover:bg-surface-elevated hover:text-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl transition-colors',
                      isActive(item.href)
                        ? 'bg-accent/20 text-accent shadow-[0_0_14px_-2px_hsl(var(--accent)/0.5)] ring-1 ring-accent/30'
                        : 'bg-surface text-muted-foreground',
                    )}
                  >
                    <NavIcon type={item.icon as NavIconType} className="h-6 w-6" />
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <Link href="/contact" className="btn-primary w-full">
                Teklif Al
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
