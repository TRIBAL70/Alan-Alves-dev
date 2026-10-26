import { useEffect, useRef } from "react";

type SkyModule = { mountSkyChat: (el: HTMLElement, o?: { tall?: boolean }) => (() => void) | void };

// Loads the original vanilla Sky chat script from /assets at runtime (browser only).
export function loadSky(): Promise<SkyModule> {
  const url = "/assets/sky-chat.js";
  return import(/* @vite-ignore */ url) as Promise<SkyModule>;
}

export function SkyChat({ tall = false }: { tall?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cleanup: (() => void) | void;
    let alive = true;
    loadSky().then((m) => {
      if (alive && ref.current) cleanup = m.mountSkyChat(ref.current, { tall });
    });
    return () => {
      alive = false;
      if (cleanup) cleanup();
    };
  }, [tall]);
  return <div ref={ref} />;
}
