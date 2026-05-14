export const site = {
  name: 'Gunerdev',
  legalName: 'Gunerdev Yazılım',
  domain: 'gunerdev.com',
  url: 'https://gunerdev.com',
  tagline: 'Hızlı, ölçeklenebilir ve modern web uygulamaları geliştiriyoruz.',
  description:
    'Gunerdev; startup ve büyüyen işletmeler için yüksek performanslı web uygulamaları, özel yazılım çözümleri ve backend sistemleri geliştiren kurumsal bir yazılım ekibidir.',
  email: 'f67113855@gmail.com',
  phone: '+90 536 215 16 44',
  address: 'Kayseri, Türkiye',
  telegram: 'FurkanGUNERDEV',
  instagram: 'furkn1_',
  locale: 'tr_TR',
  language: 'tr',
} as const;

export const navigation = [
  { label: 'Anasayfa', href: '/', icon: 'home' },
  { label: 'Hakkımızda', href: '/about', icon: 'about' },
  { label: 'Hizmetler', href: '/services', icon: 'services' },
  { label: 'Projeler', href: '/projects', icon: 'projects' },
  { label: 'Blog', href: '/blog', icon: 'blog' },
  { label: 'İletişim', href: '/contact', icon: 'contact' },
] as const;

export const footerNavigation = {
  company: {
    title: 'Şirket',
    links: [
      { label: 'Hakkımızda', href: '/about' },
      { label: 'Hizmetler', href: '/services' },
      { label: 'Projeler', href: '/projects' },
      { label: 'Fiyatlandırma', href: '/fiyatlandirma' },
      { label: 'Blog', href: '/blog' },
      { label: 'SSS', href: '/sss' },
      { label: 'İletişim', href: '/contact' },
    ],
  },
  services: {
    title: 'Hizmetler',
    links: [
      { label: 'Web Uygulamaları', href: '/services/web-uygulamalari' },
      { label: 'Özel Yazılım', href: '/services/ozel-yazilim' },
      { label: 'Backend & API', href: '/services/backend-api' },
      { label: 'Performans Optimizasyonu', href: '/services/performans-optimizasyonu' },
      { label: 'Teknik Danışmanlık', href: '/services/teknik-danismanlik' },
    ],
  },
  solutions: {
    title: 'Çözümler',
    links: [
      { label: 'Kayseri Web Tasarım', href: '/kayseri-web-tasarim' },
      { label: 'Kayseri E-Ticaret', href: '/kayseri-e-ticaret-yazilim' },
      { label: 'Kayseri Mobil Uygulama', href: '/kayseri-mobil-uygulama' },
      { label: 'Kurumsal Web Sitesi', href: '/kayseri-kurumsal-web-sitesi' },
      { label: 'Restoran Web Sitesi', href: '/kayseri-restoran-web-sitesi' },
      { label: 'Klinik Randevu Sistemi', href: '/kayseri-klinik-randevu-sistemi' },
      { label: 'Kuaför Randevu Sistemi', href: '/kayseri-kuafor-randevu-sistemi' },
      { label: 'Kayseri SEO Hizmeti', href: '/kayseri-seo-hizmeti' },
    ],
  },
  regions: {
    title: 'Hizmet Bölgeleri',
    links: [
      { label: 'Kayseri', href: '/kayseri-yazilim-firmasi' },
      { label: 'Melikgazi', href: '/melikgazi-yazilim-firmasi' },
      { label: 'Kocasinan', href: '/kocasinan-yazilim-firmasi' },
      { label: 'Talas', href: '/talas-yazilim-firmasi' },
      { label: 'İncesu', href: '/incesu-yazilim-firmasi' },
    ],
  },
  legal: {
    title: 'Yasal',
    links: [
      { label: 'Gizlilik Politikası', href: '/privacy' },
      { label: 'Kullanım Koşulları', href: '/terms' },
      { label: 'KVKK', href: '/kvkk' },
    ],
  },
} as const;

export const businessInfo = {
  workingHours: 'Pzt – Cuma · 09:00 – 18:00',
  responseTime: '24 saat içinde yanıt',
  founded: 2024,
  founder: 'Furkan Güner',
} as const;

export const social = [
  { label: 'GitHub', href: 'https://github.com', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
  { label: 'X', href: 'https://x.com', external: true },
] as const;

export type NavItem = (typeof navigation)[number];
