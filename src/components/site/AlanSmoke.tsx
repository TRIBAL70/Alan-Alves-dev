import { useEffect, useRef } from "react";

/** Fumaça e partículas cinematográficas, sem bloquear links do cabeçalho. */
export function AlanSmoke() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const colors = ["#00bfff", "#00f0ff", "#8b40ff", "#df35f7"];
    let frame = 0;
    let width = 0;
    let height = 0;
    let visible = !document.hidden;
    const pointer = { x: 0, y: 0 };
    const blobs: HTMLCanvasElement[] = colors.map((color) => {
      const tmp = document.createElement("canvas");
      tmp.width = tmp.height = 192;
      const g = tmp.getContext("2d");
      if (!g) return tmp;
      const grd = g.createRadialGradient(96, 96, 3, 96, 96, 96);
      grd.addColorStop(0, color);
      grd.addColorStop(0.36, color + "88");
      grd.addColorStop(1, color + "00");
      g.fillStyle = grd;
      g.fillRect(0, 0, 192, 192);
      return tmp;
    });
    type Puff = { x: number; y: number; size: number; shade: number; phase: number; speed: number };
    type Spark = { x: number; y: number; speed: number; shade: number; phase: number };
    let puffs: Puff[] = [];
    let sparks: Spark[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const small = width < 720;
      puffs = Array.from({ length: small ? 12 : 28 }, (_, index) => ({
        x: index % 2 ? width * (0.6 + Math.random() * 0.4) : width * Math.random() * 0.38,
        y: Math.random() * height,
        size: 80 + Math.random() * (small ? 110 : 190),
        shade: index % 2 ? 2 + Math.floor(Math.random() * 2) : Math.floor(Math.random() * 2),
        phase: Math.random() * 10,
        speed: 0.00015 + Math.random() * 0.00021
      }));
      sparks = Array.from({ length: small ? 35 : 90 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: 0.08 + Math.random() * 0.14,
        shade: Math.floor(Math.random() * 4),
        phase: Math.random() * 7
      }));
    };
    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "screen";
      for (const puff of puffs) {
        const t = time * puff.speed + puff.phase;
        const x = puff.x + Math.sin(t * 2.1) * 48 + pointer.x * 18;
        const y = puff.y + Math.cos(t * 1.4) * 36 + pointer.y * 12;
        const size = puff.size * (1 + Math.sin(t * 2.5) * 0.17);
        ctx.globalAlpha = 0.035 + 0.02 * (Math.sin(t) + 1);
        ctx.drawImage(blobs[puff.shade]!, x - size, y - size, size * 2.2, size * 2);
      }
      for (const spark of sparks) {
        spark.y -= spark.speed;
        if (spark.y < -6) { spark.y = height + 6; spark.x = Math.random() * width; }
        ctx.globalAlpha = (0.15 + (Math.sin(time * 0.002 + spark.phase) + 1) * 0.2);
        ctx.fillStyle = colors[spark.shade]!;
        ctx.beginPath();
        ctx.arc(spark.x + pointer.x * 9, spark.y + pointer.y * 9, 0.6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      if (visible) frame = window.requestAnimationFrame(draw);
    };
    const onPointer = (ev: PointerEvent) => {
      pointer.x = ev.clientX / window.innerWidth - 0.5;
      pointer.y = ev.clientY / window.innerHeight - 0.5;
    };
    const onVisibility = () => {
      visible = !document.hidden;
      window.cancelAnimationFrame(frame);
      if (visible) frame = window.requestAnimationFrame(draw);
    };
    resize();
    frame = window.requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="aa-smoke-canvas" />;
}
