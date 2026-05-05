type ServiceIconProps = {
  slug: string;
  className?: string;
};

const GRAD_ACCENT = 'serviceIconAccent';
const GRAD_HIGHLIGHT = 'serviceIconHighlight';
const GRAD_DEEP = 'serviceIconDeep';

function Defs() {
  return (
    <defs>
      <linearGradient id={GRAD_ACCENT} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--accent))" />
        <stop offset="100%" stopColor="hsl(var(--accent-muted))" />
      </linearGradient>
      <linearGradient id={GRAD_DEEP} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.85" />
        <stop offset="100%" stopColor="hsl(var(--accent-muted))" stopOpacity="0.55" />
      </linearGradient>
      <linearGradient id={GRAD_HIGHLIGHT} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0.55" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

export function ServiceIcon({ slug, className }: ServiceIconProps) {
  const baseProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true,
    className,
  };
  const fillGrad = `url(#${GRAD_ACCENT})`;
  const fillDeep = `url(#${GRAD_DEEP})`;
  const highlight = `url(#${GRAD_HIGHLIGHT})`;
  const stroke = 'hsl(var(--accent-foreground))';

  switch (slug) {
    case 'web-uygulamalari':
      return (
        <svg {...baseProps}>
          <Defs />
          <rect x="2" y="4" width="20" height="15" rx="2" fill={fillGrad} />
          <rect x="2" y="4" width="20" height="4.5" rx="2" fill={stroke} fillOpacity="0.18" />
          <circle cx="5" cy="6.5" r="0.7" fill={stroke} fillOpacity="0.9" />
          <circle cx="7.5" cy="6.5" r="0.7" fill={stroke} fillOpacity="0.9" />
          <circle cx="10" cy="6.5" r="0.7" fill={stroke} fillOpacity="0.9" />
          <rect x="2" y="4" width="20" height="7" rx="2" fill={highlight} />
          <line x1="9" y1="22" x2="15" y2="22" stroke={fillGrad} strokeWidth="1.8" strokeLinecap="round" />
          <line x1="12" y1="19" x2="12" y2="22" stroke={fillGrad} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'ozel-yazilim':
      return (
        <svg {...baseProps}>
          <Defs />
          <rect x="2" y="3" width="20" height="18" rx="2.5" fill={fillGrad} />
          <rect x="2" y="3" width="20" height="9" rx="2.5" fill={highlight} />
          <polyline
            points="7 14 4 11 7 8"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="17 8 20 11 17 14"
            fill="none"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="14"
            y1="6"
            x2="10"
            y2="16"
            stroke={stroke}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'backend-api':
      return (
        <svg {...baseProps}>
          <Defs />
          <ellipse cx="12" cy="5" rx="8.5" ry="2.6" fill={fillGrad} />
          <path
            d="M3.5 5 v6 c0 1.4 3.8 2.6 8.5 2.6 s8.5-1.2 8.5-2.6 V5"
            fill={fillDeep}
          />
          <path
            d="M3.5 11 v6 c0 1.4 3.8 2.6 8.5 2.6 s8.5-1.2 8.5-2.6 V11"
            fill={fillGrad}
          />
          <ellipse cx="12" cy="5" rx="8.5" ry="2.6" fill={highlight} />
          <circle cx="7" cy="10" r="0.7" fill={stroke} fillOpacity="0.85" />
          <circle cx="7" cy="16" r="0.7" fill={stroke} fillOpacity="0.85" />
        </svg>
      );
    case 'performans-optimizasyonu':
      return (
        <svg {...baseProps}>
          <Defs />
          <path
            d="M13 2 L3 14 H11 L10 22 L21 10 H13 L14 2 z"
            fill={fillGrad}
          />
          <path
            d="M13 2 L3 14 H11"
            fill={highlight}
          />
          <line
            x1="13"
            y1="2"
            x2="11"
            y2="14"
            stroke={stroke}
            strokeWidth="1"
            strokeOpacity="0.3"
          />
        </svg>
      );
    case 'teknik-danismanlik':
      return (
        <svg {...baseProps}>
          <Defs />
          <path
            d="M12 2 a7 7 0 0 0-4.5 12.4 V17 a1 1 0 0 0 1 1 h7 a1 1 0 0 0 1-1 v-2.6 A7 7 0 0 0 12 2 z"
            fill={fillGrad}
          />
          <path
            d="M12 2 a7 7 0 0 0-4.5 12.4 V14 h9 v0.4 A7 7 0 0 0 12 2 z"
            fill={highlight}
          />
          <rect x="9" y="19" width="6" height="1.6" rx="0.6" fill={fillDeep} />
          <rect x="10" y="21.4" width="4" height="1.4" rx="0.6" fill={fillDeep} />
          <circle cx="12" cy="9" r="2" fill={stroke} fillOpacity="0.7" />
        </svg>
      );
    case 'devops-altyapi':
      return (
        <svg {...baseProps}>
          <Defs />
          <rect x="2" y="3" width="20" height="7" rx="1.8" fill={fillGrad} />
          <rect x="2" y="14" width="20" height="7" rx="1.8" fill={fillGrad} />
          <rect x="2" y="3" width="20" height="3.5" rx="1.8" fill={highlight} />
          <rect x="2" y="14" width="20" height="3.5" rx="1.8" fill={highlight} />
          <circle cx="6" cy="6.5" r="1" fill="hsl(120 70% 55%)" />
          <circle cx="6" cy="17.5" r="1" fill="hsl(120 70% 55%)" />
          <line x1="10" y1="6.5" x2="18" y2="6.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />
          <line x1="10" y1="17.5" x2="18" y2="17.5" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.7" />
        </svg>
      );
    default:
      return (
        <svg {...baseProps}>
          <Defs />
          <rect x="3" y="3" width="18" height="18" rx="2" fill={fillGrad} />
          <rect x="3" y="3" width="18" height="9" rx="2" fill={highlight} />
        </svg>
      );
  }
}
