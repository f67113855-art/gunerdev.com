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
  const highlightId = 'gunerdev-logo-highlight';
  const strokeId = 'gunerdev-logo-stroke';
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
          <linearGradient id={gradientId} x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" />
            <stop offset="55%" stopColor="hsl(var(--accent))" />
            <stop offset="100%" stopColor="hsl(var(--accent-muted))" />
          </linearGradient>
          <linearGradient id={highlightId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="0.45" />
            <stop offset="50%" stopColor="white" stopOpacity="0.05" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={strokeId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0.85" />
          </linearGradient>
        </defs>
      )}
      <rect width="32" height="32" rx="8" fill={fill} />
      {!monochrome && (
        <>
          <rect width="32" height="32" rx="8" fill={`url(#${highlightId})`} />
          <rect
            x="0.5"
            y="0.5"
            width="31"
            height="31"
            rx="7.5"
            fill="none"
            stroke="white"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
        </>
      )}
      {/* G dis halkasi (3/4 ark, sagi acik) */}
      <path
        d="M 21.5 10.7 A 7 7 0 1 0 21.5 21.3"
        stroke={monochrome ? 'hsl(var(--accent-foreground))' : `url(#${strokeId})`}
        strokeWidth="3.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* G ic dili */}
      <path
        d="M 15.5 16 L 19.5 16"
        stroke={monochrome ? 'hsl(var(--accent-foreground))' : `url(#${strokeId})`}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      {/* Chevron > ucu — kod / ileri */}
      <path
        d="M 17.5 13.2 L 21 16 L 17.5 18.8"
        stroke={monochrome ? 'hsl(var(--accent-foreground))' : `url(#${strokeId})`}
        strokeWidth="3.4"
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
  size = 52,
  showWordmark = true,
  withDot = true,
}: BrandProps) {
  return (
    <span className={cn('group inline-flex items-center gap-3.5', className)}>
      <span className="relative inline-flex">
        <span
          aria-hidden="true"
          className="absolute -inset-1 rounded-2xl bg-accent/40 blur-lg transition-opacity duration-300 group-hover:bg-accent/60"
        />
        <Logo
          size={size}
          className="relative rounded-[12px] shadow-[0_0_36px_-4px_hsl(var(--accent)/0.75),0_8px_22px_-6px_rgb(0_0_0_/_0.45)] ring-2 ring-accent/40"
        />
      </span>
      {showWordmark && (
        <span className="font-display text-2xl font-extrabold tracking-tight md:text-[28px] leading-none">
          <span className="bg-gradient-to-br from-foreground via-foreground to-accent/80 bg-clip-text text-transparent">
            Gunerdev
          </span>
          {withDot && <span className="text-accent">.</span>}
        </span>
      )}
    </span>
  );
}
