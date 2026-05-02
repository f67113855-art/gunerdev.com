import Link from 'next/link';
import { footerNavigation, site, social } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label={`${site.name} ana sayfa`}>
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-muted shadow-glow">
                <span className="font-display text-sm font-bold text-accent-foreground">G</span>
              </span>
              <span className="font-display text-base font-semibold tracking-tight">
                {site.name}
                <span className="text-accent">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-xs uppercase tracking-widest text-muted-foreground/70">E-posta</span>
                <span>{site.email}</span>
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <span className="text-xs uppercase tracking-widest text-muted-foreground/70">Konum</span>
                <span>{site.address}</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {Object.values(footerNavigation).map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <ul className="flex items-center gap-5">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
