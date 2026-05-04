import type { Metadata, Viewport } from 'next';
import { Inter, Fraunces, Geist_Mono } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { CustomCursor } from '@/components/CustomCursor';
import { ThemeRouter } from '@/components/ThemeRouter';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

const themeBootScript = `(function(){try{var p=location.pathname;var t='home';if(p.indexOf('/services')===0)t='services';else if(p.indexOf('/about')===0)t='about';else if(p.indexOf('/projects')===0)t='projects';else if(p.indexOf('/contact')===0)t='contact';else if(p.indexOf('/blog')===0)t='blog';document.documentElement.dataset.theme=t;}catch(e){}})();`;

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  axes: ['SOFT', 'opsz'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  verification: {
    google: "_cO7_s2vg8jPHn3HYfwS3_bIRfzxLt0-dqHJ7Caal7g",
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0b',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={site.language} className={cn(inter.variable, fraunces.variable, geistMono.variable, 'dark')} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body
        className="min-h-screen flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          İçeriğe geç
        </a>
        <ThemeRouter />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <CustomCursor />
      </body>
    </html>
  );
}
