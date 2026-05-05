type ChannelIconProps = {
  type: 'email' | 'phone' | 'telegram' | 'location' | 'whatsapp' | 'github' | 'linkedin';
  className?: string;
};

export function ChannelIcon({ type, className }: ChannelIconProps) {
  const baseProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className,
  };

  switch (type) {
    case 'email':
      return (
        <svg {...baseProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...baseProps}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        </svg>
      );
    case 'telegram':
      return (
        <svg {...baseProps}>
          <path d="M21 4 2 11l6 2 2 6 3-4 5 4 3-15z" />
          <path d="m8 13 8-5-6 7" />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg {...baseProps}>
          <path d="M3 21l1.5-5A9 9 0 1 1 8 19.5L3 21z" />
          <path d="M8 10c.5 2 1.5 3 3.5 4 .5-.5 1-1 1.5-1l2.5 1c0 1-.5 2-1.5 2.5-2 .5-5-1-7-3.5C5 11 6 9.5 7 9c.5 0 1.5 0 2 .5l-1 .5z" />
        </svg>
      );
    case 'location':
      return (
        <svg {...baseProps}>
          <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 'github':
      return (
        <svg {...baseProps}>
          <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.2c2.8-.3 5.8-1.4 5.8-6.2a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.3s-1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.4 2.2 5.4 2.5 5.4 2.5a4.5 4.5 0 0 0-.1 3.3A4.8 4.8 0 0 0 4 9.1c0 4.7 3 5.9 5.8 6.2a3 3 0 0 0-.8 2.2V21" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...baseProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="8" y1="11" x2="8" y2="17" />
          <circle cx="8" cy="7.5" r="0.5" fill="currentColor" />
          <path d="M12 17v-3.5a2 2 0 0 1 4 0V17M12 11v6" />
        </svg>
      );
    default:
      return null;
  }
}
