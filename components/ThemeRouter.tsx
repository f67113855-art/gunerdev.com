'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function getTheme(pathname: string): string {
  if (pathname.startsWith('/services')) return 'services';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/projects')) return 'projects';
  if (pathname.startsWith('/contact')) return 'contact';
  return 'home';
}

export function ThemeRouter() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.dataset.theme = getTheme(pathname);
  }, [pathname]);

  return null;
}
