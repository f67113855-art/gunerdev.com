export type NavIconType =
  | 'home'
  | 'about'
  | 'services'
  | 'projects'
  | 'blog'
  | 'contact';

type NavIconProps = {
  type: NavIconType;
  className?: string;
};

function Defs({ accentId, highlightId }: { accentId: string; highlightId: string }) {
  return (
    <defs>
      <linearGradient id={accentId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--accent))" />
        <stop offset="100%" stopColor="hsl(var(--accent-muted))" />
      </linearGradient>
      <linearGradient id={highlightId} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0.55" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

export function NavIcon({ type, className }: NavIconProps) {
  const baseProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true,
    className,
  };
  const accentId = `navIconAccent-${type}`;
  const highlightId = `navIconHighlight-${type}`;
  const fillGrad = `url(#${accentId})`;
  const highlight = `url(#${highlightId})`;
  const stroke = 'hsl(var(--accent-foreground))';

  switch (type) {
    case 'home':
      return (
        <svg {...baseProps}>
          <Defs accentId={accentId} highlightId={highlightId} />
          <path
            d="M3 11 L12 3 L21 11 L21 20 A1 1 0 0 1 20 21 H4 A1 1 0 0 1 3 20 Z"
            fill={fillGrad}
          />
          <path
            d="M3 11 L12 3 L21 11"
            fill={highlight}
          />
          <rect
            x="9.5"
            y="13"
            width="5"
            height="8"
            rx="0.5"
            fill={stroke}
            fillOpacity="0.9"
          />
          <circle cx="13" cy="17" r="0.4" fill={fillGrad} />
        </svg>
      );
    case 'about':
      return (
        <svg {...baseProps}>
          <Defs accentId={accentId} highlightId={highlightId} />
          <path
            d="M4 21 a8 8 0 0 1 16 0 H4z"
            fill={fillGrad}
          />
          <circle cx="12" cy="8" r="4.2" fill={fillGrad} />
          <circle cx="12" cy="8" r="4.2" fill={highlight} />
          <circle cx="11" cy="7.2" r="0.8" fill={stroke} fillOpacity="0.6" />
        </svg>
      );
    case 'services':
      return (
        <svg {...baseProps}>
          <Defs accentId={accentId} highlightId={highlightId} />
          <rect x="3" y="3" width="8" height="8" rx="2" fill={fillGrad} />
          <rect x="13" y="3" width="8" height="8" rx="2" fill={fillGrad} fillOpacity="0.7" />
          <rect x="3" y="13" width="8" height="8" rx="2" fill={fillGrad} fillOpacity="0.7" />
          <rect x="13" y="13" width="8" height="8" rx="2" fill={fillGrad} />
          <rect x="3" y="3" width="8" height="8" rx="2" fill={highlight} />
          <rect x="13" y="13" width="8" height="8" rx="2" fill={highlight} />
        </svg>
      );
    case 'projects':
      return (
        <svg {...baseProps}>
          <Defs accentId={accentId} highlightId={highlightId} />
          <path
            d="M3 7 a2 2 0 0 1 2-2 h4 l2 2 h8 a2 2 0 0 1 2 2 v9 a2 2 0 0 1-2 2 H5 a2 2 0 0 1-2-2 z"
            fill={fillGrad}
          />
          <path
            d="M3 9 h18 v3 H3 z"
            fill={stroke}
            fillOpacity="0.18"
          />
          <path
            d="M3 7 a2 2 0 0 1 2-2 h4 l2 2 H3 z"
            fill={highlight}
          />
        </svg>
      );
    case 'blog':
      return (
        <svg {...baseProps}>
          <Defs accentId={accentId} highlightId={highlightId} />
          <path
            d="M5 3 H14 L20 9 V20 a1 1 0 0 1-1 1 H5 a1 1 0 0 1-1-1 V4 a1 1 0 0 1 1-1 z"
            fill={fillGrad}
          />
          <path d="M14 3 V9 H20" fill={stroke} fillOpacity="0.25" />
          <line x1="7" y1="13" x2="17" y2="13" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.7" />
          <line x1="7" y1="16" x2="17" y2="16" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.7" />
          <line x1="7" y1="19" x2="13" y2="19" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.7" />
          <path d="M5 3 H14 L20 9 V11 H5 z" fill={highlight} />
        </svg>
      );
    case 'contact':
      return (
        <svg {...baseProps}>
          <Defs accentId={accentId} highlightId={highlightId} />
          <rect x="3" y="5" width="18" height="14" rx="2" fill={fillGrad} />
          <path
            d="M3 6 L12 13 L21 6 V8 L12 14.5 L3 8 z"
            fill={stroke}
            fillOpacity="0.85"
          />
          <rect x="3" y="5" width="18" height="6" rx="2" fill={highlight} />
        </svg>
      );
  }
}
