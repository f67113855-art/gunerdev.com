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

const techGlyphs = [
  // Code brackets
  (s: number) => (
    <g key="code" opacity="0.85">
      <path d={`M${30} ${50 - 12} L${18} ${50} L${30} ${50 + 12}`} stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${70} ${50 - 12} L${82} ${50} L${70} ${50 + 12}`} stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${56} ${50 - 14} L${44} ${50 + 14}`} stroke="white" strokeWidth="3.5" strokeLinecap="round" />
    </g>
  ),
  // Stack / layers
  (s: number) => (
    <g key="stack" opacity="0.85">
      <path d={`M${50} ${30} L${30} ${40} L${50} ${50} L${70} ${40} z`} fill="white" fillOpacity="0.9" />
      <path d={`M${30} ${50} L${50} ${60} L${70} ${50}`} stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`M${30} ${60} L${50} ${70} L${70} ${60}`} stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  // Speed gauge
  (s: number) => (
    <g key="gauge" opacity="0.85">
      <path d={`M${28} ${58} A${22} ${22} 0 0 1 ${72} ${58}`} stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d={`M${50} ${58} L${64} ${42}`} stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="50" cy="58" r="3" fill="white" />
    </g>
  ),
  // Shield
  (s: number) => (
    <g key="shield" opacity="0.85">
      <path d={`M${50} ${28} L${68} ${36} V${50} C${68} ${60} ${60} ${68} ${50} ${72} C${40} ${68} ${32} ${60} ${32} ${50} V${36} z`} fill="white" fillOpacity="0.18" stroke="white" strokeWidth="3" strokeLinejoin="round" />
      <path d={`M${42} ${50} L${48} ${56} L${58} ${44}`} stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  // Mobile
  (s: number) => (
    <g key="mobile" opacity="0.85">
      <rect x="40" y="28" width="20" height="44" rx="3" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.12" />
      <line x1="46" y1="34" x2="54" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="66" r="2" fill="white" />
    </g>
  ),
  // Network nodes
  (s: number) => (
    <g key="net" opacity="0.85">
      <circle cx="32" cy="40" r="4" fill="white" />
      <circle cx="68" cy="40" r="4" fill="white" />
      <circle cx="50" cy="64" r="4" fill="white" />
      <line x1="32" y1="40" x2="68" y2="40" stroke="white" strokeWidth="2.5" />
      <line x1="32" y1="40" x2="50" y2="64" stroke="white" strokeWidth="2.5" />
      <line x1="68" y1="40" x2="50" y2="64" stroke="white" strokeWidth="2.5" />
    </g>
  ),
  // Spark / lightning
  (s: number) => (
    <g key="spark" opacity="0.85">
      <path d={`M${56} ${28} L${38} ${52} L${50} ${52} L${44} ${72} L${62} ${48} L${50} ${48} z`} fill="white" fillOpacity="0.95" />
    </g>
  ),
  // Document
  (s: number) => (
    <g key="doc" opacity="0.85">
      <path d={`M${36} ${28} L${56} ${28} L${64} ${36} L${64} ${72} L${36} ${72} z`} fill="white" fillOpacity="0.18" stroke="white" strokeWidth="3" strokeLinejoin="round" />
      <line x1="42" y1="48" x2="58" y2="48" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="42" y1="56" x2="58" y2="56" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="42" y1="64" x2="52" y2="64" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  ),
];

const sectorGlyphs = [
  // Car (galeri)
  (s: number) => (
    <g key="car" opacity="0.9">
      <path d={`M${28} ${55} L${34} ${44} L${66} ${44} L${72} ${55} z`} fill="white" fillOpacity="0.15" stroke="white" strokeWidth="3" strokeLinejoin="round" />
      <rect x="26" y="55" width="48" height="10" rx="3" fill="white" fillOpacity="0.95" />
      <circle cx="36" cy="68" r="4" fill="white" />
      <circle cx="64" cy="68" r="4" fill="white" />
    </g>
  ),
  // Building (emlak)
  (s: number) => (
    <g key="bldg" opacity="0.9">
      <rect x="34" y="32" width="32" height="40" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15" />
      <rect x="40" y="40" width="6" height="6" fill="white" />
      <rect x="54" y="40" width="6" height="6" fill="white" />
      <rect x="40" y="52" width="6" height="6" fill="white" />
      <rect x="54" y="52" width="6" height="6" fill="white" />
      <rect x="46" y="62" width="8" height="10" fill="white" />
    </g>
  ),
  // Restaurant cutlery
  (s: number) => (
    <g key="rest" opacity="0.9">
      <path d={`M${40} ${30} L${40} ${72}`} stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d={`M${36} ${30} L${36} ${44} M${44} ${30} L${44} ${44} M${36} ${44} Q${40} ${48} ${44} ${44}`} stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="62" cy="40" r="10" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.2" />
      <path d={`M${62} ${50} L${62} ${72}`} stroke="white" strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
  // Beauty / scissors
  (s: number) => (
    <g key="beauty" opacity="0.9">
      <circle cx="36" cy="64" r="6" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15" />
      <circle cx="64" cy="64" r="6" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15" />
      <line x1="40" y1="60" x2="68" y2="32" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="60" x2="32" y2="32" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
  // Briefcase (general business)
  (s: number) => (
    <g key="brief" opacity="0.9">
      <rect x="28" y="40" width="44" height="30" rx="3" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.15" />
      <path d={`M${42} ${40} L${42} ${34} L${58} ${34} L${58} ${40}`} stroke="white" strokeWidth="3" fill="none" strokeLinejoin="round" />
      <line x1="28" y1="54" x2="72" y2="54" stroke="white" strokeWidth="2" />
    </g>
  ),
  // Storefront
  (s: number) => (
    <g key="store" opacity="0.9">
      <path d={`M${28} ${42} L${32} ${32} L${68} ${32} L${72} ${42} z`} fill="white" fillOpacity="0.25" stroke="white" strokeWidth="3" strokeLinejoin="round" />
      <rect x="32" y="42" width="36" height="30" stroke="white" strokeWidth="3" fill="white" fillOpacity="0.1" />
      <rect x="44" y="50" width="12" height="22" fill="white" fillOpacity="0.95" />
    </g>
  ),
];

export function BlogCover({ post, className }: BlogCoverProps) {
  const seed = hash(post.slug);
  const isTech = post.category === 'Teknoloji';
  const palettes = isTech ? techPalettes : sectorPalettes;
  const glyphs = isTech ? techGlyphs : sectorGlyphs;
  const palette = palettes[seed % palettes.length]!;
  const glyph = glyphs[(seed >> 4) % glyphs.length]!;
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
        {glyph(seed)}
      </g>

      <rect width="160" height="100" fill={`url(#${scrimId})`} />
    </svg>
  );
}
