type ServiceIconProps = {
  slug: string;
  className?: string;
};

export function ServiceIcon({ slug, className }: ServiceIconProps) {
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

  switch (slug) {
    case 'web-uygulamalari':
      return (
        <svg {...baseProps}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <circle cx="6" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="9" cy="6.5" r="0.5" fill="currentColor" />
          <line x1="9" y1="21" x2="15" y2="21" />
          <line x1="12" y1="18" x2="12" y2="21" />
        </svg>
      );
    case 'ozel-yazilim':
      return (
        <svg {...baseProps}>
          <polyline points="8 16 4 12 8 8" />
          <polyline points="16 8 20 12 16 16" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case 'backend-api':
      return (
        <svg {...baseProps}>
          <ellipse cx="12" cy="5" rx="8" ry="2.5" />
          <path d="M4 5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5V5" />
          <path d="M4 11v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
        </svg>
      );
    case 'performans-optimizasyonu':
      return (
        <svg {...baseProps}>
          <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      );
    case 'teknik-danismanlik':
      return (
        <svg {...baseProps}>
          <path d="M9 14a4 4 0 1 1 6 0c-.6.6-1 1.4-1 2.2V17H10v-.8c0-.8-.4-1.6-1-2.2z" />
          <line x1="10" y1="20" x2="14" y2="20" />
          <line x1="11" y1="22" x2="13" y2="22" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="3" y1="11" x2="5" y2="11" />
          <line x1="19" y1="11" x2="21" y2="11" />
        </svg>
      );
    case 'devops-altyapi':
      return (
        <svg {...baseProps}>
          <rect x="3" y="4" width="18" height="6" rx="1" />
          <rect x="3" y="14" width="18" height="6" rx="1" />
          <line x1="7" y1="7" x2="7" y2="7" />
          <line x1="7" y1="17" x2="7" y2="17" />
          <line x1="11" y1="7" x2="17" y2="7" />
          <line x1="11" y1="17" x2="17" y2="17" />
        </svg>
      );
    default:
      return (
        <svg {...baseProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="13" y2="17" />
        </svg>
      );
  }
}
