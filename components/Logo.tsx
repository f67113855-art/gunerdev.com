import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  size?: number;
  monochrome?: boolean;
};

/**
 * Gunerdev marka isareti — stilize G + chevron (kod ileriye dogru cagrisimi).
 * Tek SVG, accent renk degiskenlerini kullanir.
 */
export function Logo({ className, size = 32, monochrome = false }: LogoProps) {
  const gradientId = 'gunerdev-logo-gradient';
  const fill = monochrome
    ? 'currentColor'
    : `url(#${gradientId})`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('shrink-0', className)}
      aria-label="Gunerdev"
      role="img"
    >
      {!monochrome && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--accent-muted))" />
          </linearGradient>
        </defs>
      )}
      <rect width="32" height="32" rx="7" fill={fill} />
      {/* G dis halkasi (3/4 ark, sagi acik) */}
      <path
        d="M 21.5 10.7 A 7 7 0 1 0 21.5 21.3"
        stroke="hsl(var(--accent-foreground))"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
      {/* G ic dili */}
      <path
        d="M 16 16 L 19.5 16"
        stroke="hsl(var(--accent-foreground))"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Chevron > ucu — kod / ileri */}
      <path
        d="M 18 13.4 L 21 16 L 18 18.6"
        stroke="hsl(var(--accent-foreground))"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

type BrandProps = {
  className?: string;
  size?: number;
  showWordmark?: boolean;
  withDot?: boolean;
};

/**
 * Mark + wordmark birlikte. Navbar ve Footer kullanir.
 */
export function Brand({
  className,
  size = 32,
  showWordmark = true,
  withDot = true,
}: BrandProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Logo size={size} className="shadow-glow rounded-[7px]" />
      {showWordmark && (
        <span className="font-display text-base font-semibold tracking-tight">
          Gunerdev
          {withDot && <span className="text-accent">.</span>}
        </span>
      )}
    </span>
  );
}
