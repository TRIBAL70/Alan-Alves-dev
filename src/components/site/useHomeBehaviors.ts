import { useEffect } from "react";

const ON = ["border-transparent", "bg-gradient-btn"];
const OFF = ["border-border", "text-muted-foreground", "hover:text-neon-cyan"];

export function useHomeBehaviors() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    // Portfolio filter
    const section = document.getElementById("projetos");
    const buttons = Array.from(section?.querySelectorAll<HTMLButtonElement>(".mb-8 button") ?? []);
    const articles = Array.from(section?.querySelectorAll<HTMLElement>("article") ?? []);
    buttons.forEach((btn) => {
      const handler = () => {
        const cat = (btn.textContent ?? "").trim().toUpperCase();
        buttons.forEach((b) => {
          const active = b === btn;
          ON.forEach((c) => b.classList.toggle(c, active));
          OFF.forEach((c) => b.classList.toggle(c, !active));
        });
        articles.forEach((a) => {
          const tag = (a.querySelector("p")?.textContent ?? "").trim().toUpperCase();
          a.style.display = cat === "TODOS" || tag === cat ? "" : "none";
        });
        const rail = section?.querySelector<HTMLElement>(".overflow-x-auto");
        if (rail) rail.scrollLeft = 0;
      };
      btn.type = "button";
      btn.addEventListener("click", handler);
      cleanups.push(() => btn.removeEventListener("click", handler));
    });

    // Contact form -> WhatsApp
    const form = document.querySelector<HTMLFormElement>("#contato form");
    if (form) {
      const onSubmit = (e: Event) => {
        e.preventDefault();
        const [nome, email, zap] = Array.from(form.querySelectorAll("input")).map((i) => i.value.trim());
        const servico = form.querySelector("select")?.value ?? "";
        const msg = form.querySelector("textarea")?.value.trim() ?? "";
        const lines = [
          "Olá Alan! Vi seu site e quero criar meu projeto.",
          nome && `Nome: ${nome}`,
          email && `E-mail: ${email}`,
          zap && `WhatsApp: ${zap}`,
          servico && `Serviço: ${servico}`,
          msg && `Projeto: ${msg}`,
        ].filter(Boolean);
        window.open(`https://wa.me/5551999938323?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
      };
      form.addEventListener("submit", onSubmit);
      cleanups.push(() => form.removeEventListener("submit", onSubmit));
    }

    let stopNeon: (() => void) | undefined;
    let alive = true;
    import("@/lib/vendor/portfolio-neon.js").then((m) => {
      if (alive) stopNeon = m.startPortfolioNeon();
    });
    cleanups.push(() => {
      alive = false;
      stopNeon?.();
    });

    return () => cleanups.forEach((c) => c());
  }, []);
}
