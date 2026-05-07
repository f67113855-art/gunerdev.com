import type { BlogPost } from '@/lib/blog';

type BlogCoverProps = {
  post: Pick<BlogPost, 'slug' | 'category' | 'title'>;
  className?: string;
};

function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const techPalettes: Array<[string, string, string]> = [
  ['#0ea5e9', '#6366f1', '#22d3ee'],
  ['#8b5cf6', '#06b6d4', '#3b82f6'],
  ['#10b981', '#0ea5e9', '#14b8a6'],
  ['#f59e0b', '#ef4444', '#ec4899'],
  ['#6366f1', '#a855f7', '#d946ef'],
  ['#0891b2', '#7c3aed', '#2563eb'],
  ['#059669', '#0284c7', '#7c3aed'],
  ['#dc2626', '#7c3aed', '#0ea5e9'],
];

const sectorPalettes: Array<[string, string, string]> = [
  ['#f97316', '#fb923c', '#fbbf24'],
  ['#0d9488', '#14b8a6', '#06b6d4'],
  ['#dc2626', '#f59e0b', '#fb923c'],
  ['#db2777', '#a855f7', '#6366f1'],
  ['#16a34a', '#65a30d', '#facc15'],
  ['#0284c7', '#0ea5e9', '#22d3ee'],
];

const techGlyphCount = 8;
const sectorGlyphCount = 6;

function renderGlyph(category: 'Teknoloji' | 'Sektörel Çözümler', index: number) {
  if (category === 'Teknoloji') {
    switch (index) {
      case 0: // Code brackets
        return (
          <>
            <path d="M30 38 L18 50 L30 62" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M70 38 L82 50 L70 62" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M56 36 L44 64" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
          </>
        );
      case 1: // Stack
        return (
          <>
            <path d="M50 30 L30 40 L50 50 L70 40 z" fill="white" fillOpacity="0.9" />
            <path d="M30 50 L50 60 L70 50" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 60 L50 70 L70 60" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </>
        );
      case 2: // Speed gauge
        return (
          <>
            <path d="M28 58 A22 22 0 0 1 72 58" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <path d="M50 58 L64 42" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="50" cy="58" r="3" fill="white" />
          </>
        );
      case 3: // Shield
        return (
          <>
            <path d="M50 28 L68 36 V50 C68 60 60 68 50 72 C40 68 32 60 32 50 V36 z" fill="white" fillOpacity="0.18" stroke="white" strokeWidth="3" strokeLinejoin="round" />
            <path d="M42 50 L48 56 L58 44" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </>
        );
      case 4: // Mobile
        return (
          <>
            <rect x="40" y="28" width="20" height="44" rx="3" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.12" />
            <line x1="46" y1="34" x2="54" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <circle cx="50" cy="66" r="2" fill="white" />
          </>
        );
      case 5: // Network nodes
        return (
          <>
            <circle cx="32" cy="40" r="4" fill="white" />
            <circle cx="68" cy="40" r="4" fill="white" />
            <circle cx="50" cy="64" r="4" fill="white" />
            <line x1="32" y1="40" x2="68" y2="40" stroke="white" strokeWidth="2.5" />
            <line x1="32" y1="40" x2="50" y2="64" stroke="white" strokeWidth="2.5" />
            <line x1="68" y1="40" x2="50" y2="64" stroke="white" strokeWidth="2.5" />
          </>
        );
      case 6: // Lightning
        return (
          <path d="M56 28 L38 52 L50 52 L44 72 L62 48 L50 48 z" fill="white" fillOpacity="0.95" />
        );
      case 7: // Document
      default:
        return (
          <>
            <path d="M36 28 L56 28 L64 36 L64 72 L36 72 z" fill="white" fillOpacity="0.18" stroke="white" strokeWidth="3" strokeLinejoin="round" />
            <line x1="42" y1="48" x2="58" y2="48" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="42" y1="56" x2="58" y2="56" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="42" y1="64" x2="52" y2="64" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </>
        );
    }
  }
  switch (index) {
    case 0: // Car
      return (
        <>
          <path d="M28 55 L34 44 L66 44 L72 55 z" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="3" strokeLinejoin="round" />
          <rect x="26" y="55" width="48" height="10" rx="3" fill="white" fillOpacity="0.95" />
          <circle cx="36" cy="68" r="4" fill="white" />
          <circle cx="64" cy="68" r="4" fill="white" />
        </>
      );
    case 1: // Building
      return (
        <>
          <rect x="34" y="32" width="32" height="40" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15" />
          <rect x="40" y="40" width="6" height="6" fill="white" />
          <rect x="54" y="40" width="6" height="6" fill="white" />
          <rect x="40" y="52" width="6" height="6" fill="white" />
          <rect x="54" y="52" width="6" height="6" fill="white" />
          <rect x="46" y="62" width="8" height="10" fill="white" />
        </>
      );
    case 2: // Cutlery
      return (
        <>
          <path d="M40 30 L40 72" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <path d="M36 30 L36 44 M44 30 L44 44 M36 44 Q40 48 44 44" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="62" cy="40" r="10" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.2" />
          <path d="M62 50 L62 72" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </>
      );
    case 3: // Scissors
      return (
        <>
          <circle cx="36" cy="64" r="6" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15" />
          <circle cx="64" cy="64" r="6" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15" />
          <line x1="40" y1="60" x2="68" y2="32" stroke="white" strokeWidth="3" strokeLinecap="round" />
          <line x1="60" y1="60" x2="32" y2="32" stroke="white" strokeWidth="3" strokeLinecap="round" />
        </>
      );
    case 4: // Briefcase
      return (
        <>
          <rect x="28" y="40" width="44" height="30" rx="3" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15" />
          <path d="M42 40 L42 34 L58 34 L58 40" stroke="white" strokeWidth="3" fill="none" strokeLinejoin="round" />
          <line x1="28" y1="54" x2="72" y2="54" stroke="white" strokeWidth="2" />
        </>
      );
    case 5: // Storefront
    default:
      return (
        <>
          <path d="M28 42 L32 32 L68 32 L72 42 z" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="3" strokeLinejoin="round" />
          <rect x="32" y="42" width="36" height="30" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.1" />
          <rect x="44" y="50" width="12" height="22" fill="white" fillOpacity="0.95" />
        </>
      );
  }
}

export function BlogCover({ post, className }: BlogCoverProps) {
  const seed = hash(post.slug);
  const isTech = post.category === 'Teknoloji';
  const palettes = isTech ? techPalettes : sectorPalettes;
  const glyphCount = isTech ? techGlyphCount : sectorGlyphCount;
  const palette = palettes[seed % palettes.length]!;
  const glyphIndex = (seed >> 4) % glyphCount;
  const angle = (seed >> 8) % 90;
  const blob1 = (seed >> 12) % 30;
  const blob2 = (seed >> 16) % 30;

  const gradId = `blogCoverGrad-${post.slug}`;
  const blurId = `blogCoverBlur-${post.slug}`;
  const patternId = `blogCoverPattern-${post.slug}`;
  const scrimId = `blogCoverScrim-${post.slug}`;

  return (
    <svg
      viewBox="0 0 160 100"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label={post.title}
    >
      <defs>
        <linearGradient id={gradId} gradientTransform={`rotate(${angle})`}>
          <stop offset="0%" stopColor={palette[0]} />
          <stop offset="55%" stopColor={palette[1]} />
          <stop offset="100%" stopColor={palette[2]} />
        </linearGradient>
        <filter id={blurId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
        <pattern id={patternId} width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="white" fillOpacity="0.18" />
        </pattern>
        <linearGradient id={scrimId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="55%" stopColor="black" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      <rect width="160" height="100" fill={`url(#${gradId})`} />

      <g filter={`url(#${blurId})`} opacity="0.6">
        <circle cx={30 + blob1} cy={28} r="36" fill={palette[2]} />
        <circle cx={130 - blob2} cy={78} r="42" fill={palette[0]} />
      </g>

      <rect width="160" height="100" fill={`url(#${patternId})`} />

      <g transform="translate(30, 0)">
        {renderGlyph(post.category, glyphIndex)}
      </g>

      <rect width="160" height="100" fill={`url(#${scrimId})`} />
    </svg>
  );
}
