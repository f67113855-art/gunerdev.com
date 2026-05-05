type ChannelIconProps = {
  type: 'email' | 'phone' | 'telegram' | 'location' | 'whatsapp' | 'github' | 'linkedin';
  className?: string;
};

const GRAD_ACCENT = 'channelIconAccent';
const GRAD_HIGHLIGHT = 'channelIconHighlight';

function Defs() {
  return (
    <defs>
      <linearGradient id={GRAD_ACCENT} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(var(--accent))" />
        <stop offset="100%" stopColor="hsl(var(--accent-muted))" />
      </linearGradient>
      <linearGradient id={GRAD_HIGHLIGHT} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0.55" />
        <stop offset="100%" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

export function ChannelIcon({ type, className }: ChannelIconProps) {
  const baseProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    'aria-hidden': true,
    className,
  };
  const fillGrad = `url(#${GRAD_ACCENT})`;
  const highlight = `url(#${GRAD_HIGHLIGHT})`;
  const stroke = 'hsl(var(--accent-foreground))';

  switch (type) {
    case 'email':
      return (
        <svg {...baseProps}>
          <Defs />
          <rect x="2" y="5" width="20" height="14" rx="2.5" fill={fillGrad} />
          <path
            d="M2 6 L12 13 L22 6 V8.5 L12 14.5 L2 8.5 z"
            fill={stroke}
            fillOpacity="0.85"
          />
          <rect x="2" y="5" width="20" height="6" rx="2.5" fill={highlight} />
        </svg>
      );
    case 'phone':
      return (
        <svg {...baseProps}>
          <Defs />
          <path
            d="M5 3 h4.5 l2 5.5 -3 2 a11 11 0 0 0 5 5 l2-3 5.5 2 V19 a2 2 0 0 1-2 2 A16 16 0 0 1 3 5 a2 2 0 0 1 2-2 z"
            fill={fillGrad}
          />
          <path
            d="M5 3 h4.5 l2 5.5 -3 2 z"
            fill={highlight}
          />
        </svg>
      );
    case 'telegram':
      return (
        <svg {...baseProps}>
          <Defs />
          <circle cx="12" cy="12" r="10" fill={fillGrad} />
          <circle cx="12" cy="12" r="10" fill={highlight} />
          <path
            d="M17 7 L6 12 L9.5 13.5 L11 18 L13.5 14.5 L17 7 z"
            fill={stroke}
            fillOpacity="0.95"
          />
          <path
            d="M9.5 13.5 L17 7 L13.5 14.5 z"
            fill={stroke}
            fillOpacity="0.55"
          />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...baseProps}>
          <Defs />
          <path
            d="M2.5 21.5 L4 17 a9 9 0 1 1 3.5 3.3 L2.5 21.5 z"
            fill={fillGrad}
          />
          <path
            d="M2.5 21.5 L4 17 a9 9 0 0 1 0-9 z"
            fill={highlight}
          />
          <path
            d="M8.5 9 c0.3-0.5 0.7-0.5 1-0.5 h0.7 c0.3 0 0.5 0.1 0.7 0.5 l0.7 1.5 c0.1 0.3 0 0.5-0.2 0.7 l-0.4 0.4 c0.6 1.4 1.6 2.4 3 3 l0.4-0.4 c0.2-0.2 0.4-0.3 0.7-0.2 l1.5 0.7 c0.4 0.2 0.5 0.4 0.5 0.7 v0.7 c0 0.3 0 0.7-0.5 1 c-1.5 1-3.5 1-6-1 c-2-2-2-4-1-5.5 z"
            fill={stroke}
            fillOpacity="0.95"
          />
        </svg>
      );
    case 'location':
      return (
        <svg {...baseProps}>
          <Defs />
          <path
            d="M12 22 c-4-5-7-8.5-7-12 a7 7 0 1 1 14 0 c0 3.5-3 7-7 12 z"
            fill={fillGrad}
          />
          <path
            d="M12 22 c-4-5-7-8.5-7-12 a7 7 0 1 1 14 0 z"
            fill={highlight}
          />
          <circle cx="12" cy="10" r="3" fill={stroke} fillOpacity="0.95" />
          <circle cx="12" cy="10" r="1.4" fill={fillGrad} />
        </svg>
      );
    case 'github':
      return (
        <svg {...baseProps}>
          <Defs />
          <circle cx="12" cy="12" r="10" fill={fillGrad} />
          <circle cx="12" cy="12" r="10" fill={highlight} />
          <path
            d="M12 4 a8 8 0 0 0-2.5 15.6 c0.4 0.1 0.5-0.2 0.5-0.4 v-1.4 c-2 0.4-2.5-0.9-2.5-0.9 c-0.3-0.8-0.8-1-0.8-1 c-0.7-0.4 0.1-0.4 0.1-0.4 c0.7 0 1.1 0.7 1.1 0.7 c0.7 1.1 1.7 0.8 2.1 0.6 c0.1-0.5 0.3-0.8 0.5-1 c-1.6-0.2-3.3-0.8-3.3-3.6 c0-0.8 0.3-1.4 0.7-1.9 c-0.1-0.2-0.3-0.9 0.1-1.9 c0 0 0.6-0.2 2 0.7 a7 7 0 0 1 3.6 0 c1.4-0.9 2-0.7 2-0.7 c0.4 1 0.2 1.7 0.1 1.9 c0.4 0.5 0.7 1.1 0.7 1.9 c0 2.8-1.7 3.4-3.3 3.6 c0.3 0.2 0.5 0.7 0.5 1.4 v2 c0 0.2 0.1 0.5 0.5 0.4 A8 8 0 0 0 12 4 z"
            fill={stroke}
            fillOpacity="0.95"
          />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...baseProps}>
          <Defs />
          <rect x="2" y="2" width="20" height="20" rx="3" fill={fillGrad} />
          <rect x="2" y="2" width="20" height="9" rx="3" fill={highlight} />
          <rect x="6" y="10" width="2.8" height="9" fill={stroke} fillOpacity="0.95" />
          <circle cx="7.4" cy="7" r="1.6" fill={stroke} fillOpacity="0.95" />
          <path
            d="M11 10 h2.6 v1.4 c0.5-0.9 1.6-1.6 3-1.6 c2.4 0 3.4 1.5 3.4 4.2 V19 H17 v-4.5 c0-1.2-0.4-1.9-1.4-1.9 c-1 0-1.6 0.7-1.6 1.9 V19 H11 z"
            fill={stroke}
            fillOpacity="0.95"
          />
        </svg>
      );
    default:
      return null;
  }
}
