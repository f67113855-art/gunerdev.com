import Link from 'next/link';
import { Brand } from '@/components/Logo';
import { businessInfo, footerNavigation, site, social } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label={`${site.name} ana sayfa`}
              className="inline-block transition-transform duration-200 hover:scale-[1.02]"
            >
              <Brand size={52} />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="w-20 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                  E-posta
                </span>
                <span>{site.email}</span>
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="w-20 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                  Telefon
                </span>
                <span>{site.phone}</span>
              </a>
              <a
                href={`https://wa.me/${site.phone.replace(/\s|\+/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="w-20 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                  WhatsApp
                </span>
                <span>{site.phone}</span>
              </a>
              <a
                href={`https://t.me/${site.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="w-20 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                  Telegram
                </span>
                <span>@{site.telegram}</span>
              </a>
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <span className="w-20 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                  Konum
                </span>
                <span>{site.address}</span>
              </span>
            </div>

            <div className="mt-7 inline-flex flex-col gap-2 rounded-xl border border-border bg-background/40 px-4 py-3 backdrop-blur">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                Çalışma
              </span>
              <span className="text-sm text-foreground">{businessInfo.workingHours}</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                {businessInfo.responseTime}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {Object.values(footerNavigation).map((column) => (
              <div key={column.title}>
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
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

        <div className="hairline mt-14" aria-hidden="true" />

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <p className="text-xs italic text-muted-foreground">
            <span className="font-display">{businessInfo.founder}</span>{' '}
            tarafından özenle geliştirildi.
          </p>
          <ul className="flex items-center gap-5">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
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
