import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
const letreiro = "https://id-preview--20b75f97-ca8c-4360-827a-2564e27c09f3.lovable.app/__l5e/assets-v1/0389119a-2ede-46a0-b009-5e291c894348/letreiro.png";
const retrato = "https://id-preview--20b75f97-ca8c-4360-827a-2564e27c09f3.lovable.app/__l5e/assets-v1/f7eb4a2c-6114-4514-b470-c4166d999031/retrato.jpg";
import { SmokeCanvas } from "./SmokeCanvas";

function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

const STARS = [
  { l: "48%", t: "6%", d: "0s", s: 26 }, { l: "48%", t: "78%", d: "1.1s", s: 22 },
  { l: "12%", t: "30%", d: ".6s", s: 12 }, { l: "88%", t: "18%", d: "1.7s", s: 14 },
  { l: "70%", t: "86%", d: "2.3s", s: 10 },
];

const CIRCUITS: [string, string, string][] = [
  ["M30 120 H160 L190 90 H330", "var(--aan-cyan)", "0s"],
  ["M890 120 H760 L730 150 H600", "var(--aan-magenta)", ".8s"],
  ["M60 170 H200 L230 195 H380", "var(--aan-blue)", "1.6s"],
  ["M860 60 H720 L690 35 H560", "var(--aan-violet)", "2.2s"],
];

export function HeroSection() {
  const scene = useRef<HTMLDivElement>(null);
  const href = "https://wa.me/5551999938323?text=Ol%C3%A1%20Alan!%20Vi%20seu%20site%20e%20quero%20criar%20meu%20projeto.";
  const socials = [
    { href: "https://www.instagram.com/alan.alves.1?rpxt=MWJhMmxtZm1uMzIxdw==", Icon: Instagram, label: "Instagram" },
    { href: "https://www.linkedin.com/in/alan-everton-alves?utm_source=share_via&utm_content=profile&utm_medium=member_android", Icon: Linkedin, label: "LinkedIn" },
  ];

  useEffect(() => {
    const el = scene.current;
    if (!el || !window.matchMedia("(pointer:fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const on = (e: PointerEvent) => {
      el.style.setProperty("--mx", String(e.clientX / window.innerWidth - 0.5));
      el.style.setProperty("--my", String(e.clientY / window.innerHeight - 0.5));
    };
    window.addEventListener("pointermove", on);
    return () => window.removeEventListener("pointermove", on);
  }, []);

  const par = (k: number) => ({ transform: `translate(calc(var(--mx,0) * ${k}px), calc(var(--my,0) * ${k}px))`, transition: "transform .6s ease-out" });

  return (
    <section id="inicio" ref={scene} className="aan-hero relative min-h-screen overflow-hidden pt-16 font-aan-sans text-aan-white">
      <div className="aan-enter-fade absolute inset-0" style={{ animationDelay: ".3s" }}><SmokeCanvas /></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 pb-28 pt-6 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:pt-10">
        <div className="relative z-10">
          <div className="aan-enter inline-flex items-center gap-3 rounded-full border-2 border-aan-violet bg-aan-space/60 px-5 py-2 shadow-[0_0_16px_var(--aan-violet)]">
            <span className="aan-status-dot size-3 rounded-full" />
            <span className="font-aan-display text-xs tracking-[0.2em] sm:text-sm">OLÁ, EU SOU ALAN ALVES</span>
          </div>

          <div className="aan-enter relative my-4 select-none" style={{ animationDelay: ".5s", ...par(-10) }}>
            <div aria-hidden className="absolute left-[48%] top-1/2 aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-aan-cyan/40 [animation:aan-spin_18s_linear_infinite]" />
              <div className="absolute inset-[6%] rounded-full border-t-2 border-r-2 border-aan-magenta/70 [animation:aan-spin_6s_linear_infinite_reverse] shadow-[0_0_14px_var(--aan-magenta)]" />
            </div>
            <div className="relative overflow-hidden" style={{ maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 50%, transparent 100%)" }}>
              <img src={letreiro} alt="Alan Alves" width={920} height={230} className="block w-full [animation:aan-breathe_4s_ease-in-out_infinite] mix-blend-screen" />
              <span aria-hidden className="absolute inset-y-0 left-0 w-1/4 bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--aan-white)_45%,transparent),transparent)] mix-blend-overlay [animation:aan-sheen_5s_ease-in-out_1.2s_infinite]" />
            </div>
            <svg aria-hidden viewBox="0 0 920 230" className="pointer-events-none absolute inset-0 h-full w-full" fill="none">
              {CIRCUITS.map(([d, c, delay]) => (
                <path key={d} d={d} stroke={c} strokeWidth="3" strokeLinecap="round" strokeDasharray="40 360"
                  style={{ animation: `aan-dash 3.4s linear ${delay} infinite`, filter: `drop-shadow(0 0 6px ${c})` }} />
              ))}
            </svg>
            {STARS.map((s, i) => (
              <svg key={i} aria-hidden viewBox="0 0 24 24" width={s.s} height={s.s} className="absolute text-aan-white"
                style={{ left: s.l, top: s.t, animation: `aan-twinkle 2.8s ease-in-out ${s.d} infinite`, filter: "drop-shadow(0 0 6px var(--aan-magenta))" }}>
                <path fill="currentColor" d="M12 0 14 10 24 12 14 14 12 24 10 14 0 12 10 10Z" />
              </svg>
            ))}
          </div>

          <h1 className="border-l-4 border-aan-white pl-4 font-aan-display text-lg font-bold tracking-[0.18em] sm:text-2xl">
            <span className="aan-enter inline-block" style={{ animationDelay: "1s" }}>EU PROJETO.</span>{" "}
            <span className="aan-enter aan-text-cyan inline-block" style={{ animationDelay: "1.15s" }}>EU DESENVOLVO.</span>
            <br />
            <span className="aan-enter aan-text-magenta inline-block" style={{ animationDelay: "1.3s" }}>EU AUTOMATIZO.</span>
          </h1>
          <p className="aan-enter mt-5 max-w-xl text-base leading-relaxed text-aan-white/85 sm:text-lg" style={{ animationDelay: "1.4s" }}>
            Desenvolvedor web e especialista em automação e inteligência artificial. Crio sites, sistemas e robôs de WhatsApp que atendem, vendem e agendam por você — 24 horas por dia.
          </p>

          <div className="aan-enter mt-7 flex max-w-md flex-col gap-4" style={{ animationDelay: "1.55s" }}>
            <Link to="/" hash="projetos" className="aan-btn inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-aan-display text-sm font-bold tracking-wider sm:text-base">
              EXPLORAR MEUS PROJETOS <ArrowUpRight className="size-5" />
            </Link>
            <a href={href} target="_blank" rel="noopener noreferrer"
              className="aan-border aan-glow-hover inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 font-aan-display text-sm font-bold tracking-wider text-aan-cyan sm:text-base">
              <WhatsIcon className="size-6 [animation:aan-portal_2s_ease-in-out_infinite]" /> CRIAR MEU PROJETO
            </a>
          </div>

          {socials.length > 0 && (
            <div className="aan-enter mt-8 flex items-center gap-4" style={{ animationDelay: "1.7s" }}>
              <span className="font-aan-display text-sm tracking-[0.25em]">SIGA-ME</span>
              {socials.map(({ href: h, Icon, label }) => (
                <a key={label} href={h} target="_blank" rel="noopener noreferrer" aria-label={label} className="aan-social-ring grid size-12 place-items-center rounded-full">
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-md lg:order-2 lg:max-w-none" style={par(8)}>
          <div aria-hidden className="absolute left-1/2 top-[44%] aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2 [animation:aan-portal_4s_ease-in-out_infinite]">
            <div className="absolute inset-0 rounded-full border-2 border-aan-blue shadow-[0_0_30px_var(--aan-blue),inset_0_0_30px_var(--aan-violet)]" />
            <div className="absolute inset-[-3%] rounded-full border-t-[3px] border-l-[3px] border-aan-magenta/80 [animation:aan-spin_7s_linear_infinite] shadow-[0_0_20px_var(--aan-magenta)]" />
          </div>
          <img src={retrato} alt="Retrato de Alan Alves" width={700} height={773}
            className="aan-enter-fade relative w-full"
            style={{ animationDelay: ".8s", maskImage: "radial-gradient(ellipse 50% 50% at 50% 48%, black 55%, transparent 100%)" }} />
          <div className="aan-glass aan-card-in absolute bottom-[10%] left-[4%] rounded-2xl px-5 py-3">
            <div className="flex items-center gap-2 font-aan-display text-xs font-bold tracking-widest text-aan-online">
              <span className="aan-status-dot size-2.5 rounded-full" /> ONLINE
            </div>
            <div className="mt-1 font-aan-display text-sm font-bold leading-tight sm:text-base">DISPONÍVEL PARA<br />PROJETOS</div>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden">
        <svg viewBox="0 0 2400 160" preserveAspectRatio="none" className="absolute bottom-0 h-full w-[200%] [animation:aan-wave_14s_linear_infinite]">
          <path d="M0 110 Q300 40 600 110 T1200 110 T1800 110 T2400 110" stroke="var(--aan-blue)" strokeWidth="3" fill="none" style={{ filter: "drop-shadow(0 0 8px var(--aan-cyan))" }} />
          <path d="M0 130 Q300 80 600 130 T1200 130 T1800 130 T2400 130" stroke="var(--aan-magenta)" strokeWidth="2" fill="none" style={{ filter: "drop-shadow(0 0 8px var(--aan-magenta))" }} />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-aan-space" />
      </div>
    </section>
  );
}