'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Tema duyarli alev imleci — canvas particle system.
 * Her mouse hareketinde sicak sari/turuncu + tema rengi kivilcimlar
 * uretilir, yukseklerek kaybolur. Hover'da alev yogunlasir.
 * Mobilde otomatik kapali.
 */
type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  hue: number;
};

const MAX_PARTICLES = 90;

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      'ontouchstart' in window;
    if (isTouch) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function setSize() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    setSize();
    window.addEventListener('resize', setSize);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let visible = true;
    let hovering = false;
    let lastEmit = 0;
    const particles: Particle[] = [];

    function emit(count: number) {
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) particles.shift();
        // Sade sari alev tonlari (45-55 arasi)
        const hue = 45 + Math.random() * 10;
        particles.push({
          x: mouseX + (Math.random() - 0.5) * 4,
          y: mouseY + (Math.random() - 0.5) * 4,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -0.3 - Math.random() * 0.5,
          life: 0,
          maxLife: 380 + Math.random() * 240,
          size: hovering ? 5 + Math.random() * 3 : 3 + Math.random() * 2,
          hue,
        });
      }
    }

    function onMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      hovering = !!target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor-hover]',
      );
    }

    function onLeaveDoc() {
      visible = false;
    }
    function onEnterDoc() {
      visible = true;
    }

    let prev = performance.now();
    let rafId = 0;

    function tick(now: number) {
      const dt = Math.min(now - prev, 32); // dt clamp (sekme arkaplandayken sıçramayı engeller)
      prev = now;
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Hareket dursa da alev yanmaya devam etsin — surekli emisyon (yavasletildi)
      if (visible && now - lastEmit > 32) {
        emit(hovering ? 2 : 1);
        lastEmit = now;
      }

      // Iz birakacak sekilde silme (sade gorunum icin daha hizli silme)
      ctx!.globalCompositeOperation = 'destination-out';
      ctx!.fillStyle = 'rgba(0, 0, 0, 0.32)';
      ctx!.fillRect(0, 0, w, h);

      ctx!.globalCompositeOperation = 'lighter';

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]!;
        p.life += dt;
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
          continue;
        }
        const t = p.life / p.maxLife;
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);
        p.vy -= 0.008 * (dt / 16); // yavas yukseliyor
        p.vx *= 0.985;

        const alpha = (1 - t) * 0.5;
        const radius = p.size * (1 - t * 0.45);

        const grad = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius * 2.2);
        grad.addColorStop(0, `hsla(${p.hue}, 95%, 70%, ${alpha})`);
        grad.addColorStop(0.5, `hsla(${p.hue}, 90%, 55%, ${alpha * 0.55})`);
        grad.addColorStop(1, 'transparent');

        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, radius * 2.2, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Sade sari iz - imlecin kendisi
      if (visible) {
        const coreSize = hovering ? 6 : 4;
        const coreGrad = ctx!.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          coreSize,
        );
        coreGrad.addColorStop(0, 'hsla(50, 95%, 70%, 0.85)');
        coreGrad.addColorStop(0.5, 'hsla(48, 90%, 60%, 0.45)');
        coreGrad.addColorStop(1, 'hsla(48, 90%, 55%, 0)');
        ctx!.globalCompositeOperation = 'source-over';
        ctx!.fillStyle = coreGrad;
        ctx!.beginPath();
        ctx!.arc(mouseX, mouseY, coreSize, 0, Math.PI * 2);
        ctx!.fill();
      }

      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeaveDoc);
    document.addEventListener('mouseenter', onEnterDoc);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeaveDoc);
      document.removeEventListener('mouseenter', onEnterDoc);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
    />
  );
}
