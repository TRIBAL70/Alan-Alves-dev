import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";
const retrato = "/assets/alan-CUJULnXC.png";

function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}


const SOURCE_STARS = [
  { l: "48%", t: "6%", d: "0s", s: 26 }, { l: "48%", t: "78%", d: "1.1s", s: 22 },
  { l: "12%", t: "30%", d: ".6s", s: 12 }, { l: "88%", t: "18%", d: "1.7s", s: 14 },
  { l: "70%", t: "86%", d: "2.3s", s: 10 },
];
const SOURCE_CIRCUITS: [string, string, string][] = [
  ["M30 120 H160 L190 90 H330", "var(--aan-cyan)", "0s"],
  ["M890 120 H760 L730 150 H600", "var(--aan-cyan)", ".8s"],
  ["M60 170 H200 L230 195 H380", "var(--aan-blue)", "1.6s"],
  ["M860 60 H720 L690 35 H560", "var(--aan-blue)", "2.2s"],
];
const SOURCE_BOLTS: [string, string, string][] = [
  ["M70 0 L95 90 L60 150 L110 260 L80 340", "7s", ".8s"],
  ["M1380 40 L1340 140 L1395 220 L1350 330 L1400 430", "9s", "2.4s"],
  ["M1250 520 L1300 600 L1260 680 L1320 780", "8s", "4.1s"],
  ["M30 480 L90 540 L50 620 L120 700", "10s", "5.6s"],
  ["M900 20 L880 110 L930 170 L900 260", "11s", "3.2s"],
];
function SourceLightning() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,color-mix(in_oklab,var(--aan-blue)_30%,transparent),transparent_60%)] [animation:aan-source-flash_9s_ease-in-out_2.4s_infinite] opacity-0" />
      <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" fill="none">
        {SOURCE_BOLTS.map(([d,dur,delay]) => (
          <path key={d} d={d} className="aan-source-bolt" stroke="var(--aan-cyan)" strokeWidth="2" strokeLinejoin="round" opacity="0"
            style={{animation: `aan-source-bolt ${dur} linear ${delay} infinite`, filter:"drop-shadow(0 0 6px var(--aan-cyan)) drop-shadow(0 0 16px var(--aan-blue))"}} />
        ))}
      </svg>
    </div>
  );
}

export function HeroSection() {
  const href = "https://wa.me/5551999938323?text=Ol%C3%A1%20Alan!%20Vi%20seu%20site%20e%20quero%20criar%20meu%20projeto.";
  const socials = [
    { href: "https://www.instagram.com/alan.alves.1?rpxt=MWJhMmxtZm1uMzIxdw==", Icon: Instagram, label: "Instagram" },
    { href: "https://www.linkedin.com/in/alan-everton-alves?utm_source=share_via&utm_content=profile&utm_medium=member_android", Icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <section id="inicio" className="aan-hero aan-blue-hero relative min-h-screen overflow-hidden pt-16 font-aan-sans text-aan-white">
      {/* Background atmosphere only: logo, portrait, navigation and interactive content remain independent. */}
      <div className="aan-aurora-bg" aria-hidden="true">
        <span className="aan-aurora-cloud aan-aurora-cloud-left" />
        <span className="aan-aurora-cloud aan-aurora-cloud-right" />
        <span className="aan-aurora-cloud aan-aurora-cloud-bottom" />
        <span className="aan-aurora-sparks" />
      </div>
      <SourceLightning />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-7 px-4 pb-24 pt-8 lg:min-h-[730px] lg:grid-cols-[minmax(0,1.06fr)_minmax(0,.94fr)] lg:gap-10 lg:px-8 lg:pt-12">
        <div className="relative z-10">
          <div className="aan-enter inline-flex items-center gap-3 rounded-full border border-aan-cyan/70 bg-aan-space/70 px-5 py-2 shadow-[0_0_12px_rgba(0,192,255,.24)]">
            <span className="aan-status-dot size-3 rounded-full" />
            <span className="font-aan-display text-xs tracking-[0.2em] sm:text-sm">OLÁ, EU SOU ALAN ALVES</span>
          </div>



          {/* Letreiro original extraído do repositório Alan Alves Digital, sem alteração na logo do menu. */}
          <div className="aan-enter relative my-4 select-none" style={{animationDelay:".5s"}}>
            <div className="relative overflow-hidden" style={{maskImage:"radial-gradient(ellipse 60% 60% at 50% 50%, black 70%, transparent 100%)"}}>
              <h1 className="m-0 leading-none" aria-label="Alan Alves">
                <img src="/assets/alan-digital-letreiro-ref.png" alt="" width={820} height={240}
                  className="block w-full [animation:aan-breathe_4s_ease-in-out_infinite] mix-blend-screen" />
              </h1>
              <span aria-hidden className="absolute inset-y-0 left-0 w-1/4 bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--aan-white)_45%,transparent),transparent)] mix-blend-overlay [animation:aan-sheen_5s_ease-in-out_1.2s_infinite]" />
            </div>
            <svg aria-hidden viewBox="0 0 920 230" className="pointer-events-none absolute inset-0 h-full w-full" fill="none">
              {SOURCE_CIRCUITS.map(([d,c,delay]) => (
                <path key={d} d={d} stroke={c} strokeWidth="3" strokeLinecap="round" strokeDasharray="40 360"
                  style={{animation: `aan-dash 3.4s linear ${delay} infinite`,filter: `drop-shadow(0 0 6px ${c})`}} />
              ))}
            </svg>
            {SOURCE_STARS.map((star,i) => (
              <svg key={i} aria-hidden viewBox="0 0 24 24" width={star.s} height={star.s} className="absolute text-aan-white"
                style={{left:star.l,top:star.t,animation: `aan-twinkle 2.8s ease-in-out ${star.d} infinite`,filter:"drop-shadow(0 0 6px var(--aan-cyan))"}}>
                <path fill="currentColor" d="M12 0 14 10 24 12 14 14 12 24 10 14 0 12 10 10Z" />
              </svg>
            ))}
          </div>

          <h2 className="border-l-4 border-aan-white pl-4 font-aan-display text-lg font-bold tracking-[0.18em] sm:text-2xl">
            <span className="aan-enter inline-block" style={{ animationDelay: "1s" }}>EU PROJETO.</span>{" "}
            <span className="aan-enter aan-text-cyan inline-block" style={{ animationDelay: "1.15s" }}>EU DESENVOLVO.</span>
            <br />
            <span className="aan-enter aan-text-cyan inline-block" style={{ animationDelay: "1.3s" }}>EU AUTOMATIZO.</span>
          </h2>
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


        <figure className="aan-portrait-panel relative z-10 mx-auto w-full max-w-xl" aria-label="Foto de Alan Alves">
          <div className="aan-portrait-energy" aria-hidden="true">
            <svg viewBox="0 0 640 760" preserveAspectRatio="xMidYMid slice" className="h-full w-full" focusable="false">
              <defs>
                <filter id="aanElectricBlur"><feGaussianBlur stdDeviation="7"/></filter>
                <linearGradient id="aanElectricLine" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#007fff"/><stop offset="50%" stopColor="#00e5ff"/><stop offset="100%" stopColor="#44abff"/>
                </linearGradient>
              </defs>
              <g fill="none" stroke="url(#aanElectricLine)" strokeLinecap="round" strokeLinejoin="round">
                <path d="M28 50L80 122 60 162 139 222 116 287 177 334 150 412 220 465 190 533" strokeWidth="19" opacity=".45" filter="url(#aanElectricBlur)" className="aan-electric-pulse"/>
                <path d="M28 50L80 122 60 162 139 222 116 287 177 334 150 412 220 465 190 533" strokeWidth="2.4" opacity=".95" className="aan-electric-pulse"/>
                <path d="M603 40L544 110 566 178 510 235 548 315 482 373 523 454 456 531 499 586 442 674" strokeWidth="23" opacity=".5" filter="url(#aanElectricBlur)" className="aan-electric-pulse aan-electric-delay"/>
                <path d="M603 40L544 110 566 178 510 235 548 315 482 373 523 454 456 531 499 586 442 674" strokeWidth="2.4" opacity=".95" className="aan-electric-pulse aan-electric-delay"/>
              </g>
            </svg>
          </div>
          <img
            src={retrato}
            alt="Retrato de Alan Alves"
            width={928}
            height={1152}
            decoding="async"
            fetchPriority="high"
            className="aan-portrait-image relative z-10 block h-auto w-full object-contain"
          />
          <figcaption className="aan-projects-availability absolute bottom-[9%] left-[4%] z-20">
            <span className="aan-projects-online"><span className="aan-status-dot size-3 rounded-full" /> ONLINE</span>
            <strong>DISPONÍVEL PARA<br />PROJETOS</strong>
          </figcaption>
        </figure>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden">
        <svg viewBox="0 0 2400 160" preserveAspectRatio="none" className="absolute bottom-0 h-full w-[200%] [animation:aan-wave_14s_linear_infinite]">
          <path d="M0 110 Q300 40 600 110 T1200 110 T1800 110 T2400 110" stroke="var(--aan-blue)" strokeWidth="3" fill="none" style={{ filter: "drop-shadow(0 0 8px var(--aan-cyan))" }} />
          <path d="M0 130 Q300 80 600 130 T1200 130 T1800 130 T2400 130" stroke="#9c3aff" strokeWidth="2" fill="none" style={{ filter: "drop-shadow(0 0 9px #9c3aff)" }} />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-aan-space" />
      </div>
    </section>
  );
}