import { useEffect, useRef } from "react";

type Puff = { x: number; y: number; r: number; hue: number; sp: number; ph: number; a: number };
type Spark = { x: number; y: number; z: number; vx: number; vy: number; hue: number; ph: number };

/** Procedural volumetric smoke + depth particles. Colors read from --aan-* header tokens. */
export function SmokeCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const css = getComputedStyle(c);
    const col = {
      blue: css.getPropertyValue("--aan-blue").trim(),
      cyan: css.getPropertyValue("--aan-cyan").trim(),
      violet: css.getPropertyValue("--aan-violet").trim(),
      magenta: css.getPropertyValue("--aan-magenta").trim(),
    };
    const palette = [col.blue, col.cyan, col.violet, col.magenta];
    let w = 0, h = 0, raf = 0;
    const mouse = { x: 0, y: 0 };
    let puffs: Puff[] = [];
    let sparks: Spark[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      w = c.clientWidth; h = c.clientHeight;
      c.width = w * dpr; c.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = w < 700 ? 18 : 34;
      puffs = Array.from({ length: n }, (_, i) => {
        const left = i % 2 === 0;
        return {
          x: left ? Math.random() * w * 0.4 : w * 0.55 + Math.random() * w * 0.45,
          y: Math.random() * h,
          r: 80 + Math.random() * 180,
          hue: left ? (Math.random() < 0.6 ? 0 : 1) : (Math.random() < 0.6 ? 2 : 3),
          sp: 0.00012 + Math.random() * 0.0002,
          ph: Math.random() * 1000,
          a: 0.05 + Math.random() * 0.07,
        };
      });
      sparks = Array.from({ length: w < 700 ? 50 : 110 }, () => ({
        x: Math.random() * w, y: Math.random() * h, z: Math.random(),
        vx: (Math.random() - 0.5) * 0.15, vy: -0.05 - Math.random() * 0.15,
        hue: Math.floor(Math.random() * 4), ph: Math.random() * 6.28,
      }));
      if (reduced) draw(0, false);
    };

    const color = (p: string, a: number) => `color-mix(in oklab, ${p} ${Math.round(a * 100)}%, transparent)`;
    const blobs = palette.map((p) => {
      const b = document.createElement("canvas");
      b.width = b.height = 256;
      const g = b.getContext("2d")!;
      const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
      grd.addColorStop(0, color(p, 1));
      grd.addColorStop(0.4, color(p, 0.45));
      grd.addColorStop(1, color(p, 0));
      g.fillStyle = grd;
      g.fillRect(0, 0, 256, 256);
      return b;
    });

    const draw = (t: number, loop = true) => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      const energy = 0.8 + Math.sin(t * 0.0012) * 0.2;
      for (const p of puffs) {
        const k = t * p.sp + p.ph;
        const x = p.x + Math.sin(k * 3) * 60 + Math.cos(k * 1.7) * 30 + mouse.x * 12;
        const y = p.y + Math.cos(k * 2.3) * 50 + mouse.y * 8;
        const r = p.r * (1 + Math.sin(k * 4) * 0.25);
        ctx.globalAlpha = p.a * energy;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(k);
        ctx.scale(1.6, 0.8 + Math.sin(k * 2) * 0.3);
        ctx.drawImage(blobs[p.hue]!, -r, -r, r * 2, r * 2);
        ctx.restore();
      }
      for (const s of sparks) {
        if (loop) { s.x += s.vx * (0.5 + s.z); s.y += s.vy * (0.5 + s.z); }
        if (s.y < -5) { s.y = h + 5; s.x = Math.random() * w; }
        const tw = (Math.sin(t * 0.002 + s.ph) + 1) / 2;
        ctx.globalAlpha = tw * (0.3 + s.z * 0.7);
        const size = 0.6 + s.z * 1.8;
        ctx.drawImage(blobs[s.hue]!, s.x + mouse.x * s.z * 20 - size * 3, s.y + mouse.y * s.z * 14 - size * 3, size * 6, size * 6);
      }
      ctx.globalAlpha = 1;
      if (loop) raf = requestAnimationFrame((n) => draw(n));
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
    };
    resize();
    if (!reduced) {
      raf = requestAnimationFrame((n) => draw(n));
      window.addEventListener("pointermove", onMove);
    }
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}