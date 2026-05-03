'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Tema duyarli ozel imlec — accent renkli halka + dot, link/buton uzerinde buyur.
 * Mobilde otomatik kapali (touch detection).
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Touch cihaz tespiti — kapat
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window;
    if (isTouch) return;

    setEnabled(true);
    document.documentElement.style.cursor = 'none';
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let rafId = 0;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    }

    function tick() {
      // Halka mouse'u yumusak takip eder (lerp)
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive =
        target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]') !== null;
      setHovering(interactive);
    }

    function onLeave() {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    }
    function onEnter() {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafId);
      document.documentElement.style.cursor = '';
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Iç dot — anlık takip */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-accent transition-opacity duration-200"
        style={{ willChange: 'transform' }}
      />
      {/* Dış halka — yumuşak takip + hover'da büyür */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={
          'pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-accent/60 transition-[width,height,background-color,border-color] duration-200 ' +
          (hovering
            ? 'h-12 w-12 border-accent bg-accent/10'
            : 'h-7 w-7 bg-transparent')
        }
        style={{ willChange: 'transform' }}
      />
    </>
  );
}
