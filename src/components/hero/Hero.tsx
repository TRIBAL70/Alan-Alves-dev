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


export function HeroSection() {
  const href = "https://wa.me/5551999938323?text=Ol%C3%A1%20Alan!%20Vi%20seu%20site%20e%20quero%20criar%20meu%20projeto.";
  const socials = [
    { href: "https://www.instagram.com/alan.alves.1?rpxt=MWJhMmxtZm1uMzIxdw==", Icon: Instagram, label: "Instagram" },
    { href: "https://www.linkedin.com/in/alan-everton-alves?utm_source=share_via&utm_content=profile&utm_medium=member_android", Icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <section id="inicio" className="aan-hero aan-blue-hero aan-reference-hero relative min-h-screen overflow-hidden pt-16 font-aan-sans text-aan-white">
      {/* Clean navy background; no smoke or lightning, subtle stars only. */}
      <div className="aan-reference-stars" aria-hidden="true" />

      <div className="aan-reference-layout relative mx-auto grid w-full max-w-7xl items-center gap-7 px-4 pb-24 pt-8 lg:min-h-[730px] lg:grid-cols-[minmax(0,1.06fr)_minmax(0,.94fr)] lg:gap-10 lg:px-8 lg:pt-12">
        <div className="aan-reference-copy relative z-10">
          <p className="aan-enter aan-reference-slogan" style={{ animationDelay: ".12s" }}>
            <span className="aan-status-dot aan-reference-green-dot" aria-hidden="true" />
            EU AUTOMATIZO.
          </p>




          {/* Original artwork from GitHub, unchanged. */}
          <div className="aan-enter aan-reference-lettering" style={{ animationDelay: ".25s" }}>
            <h1 className="m-0 leading-none" aria-label="Alan Alves">
              <img
                src="/assets/alan-digital-letreiro-ref.png"
                alt="Alan Alves"
                width={820}
                height={240}
                decoding="async"
                fetchPriority="high"
                className="aan-reference-lettering-image"
              />
            </h1>
          </div>

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



        <figure className="aan-portrait-panel aan-reference-portrait relative z-10 mx-auto w-full max-w-xl" aria-label="Foto de Alan Alves">
          {/* HUD arcs positioned behind the original transparent portrait, not lightning bolts. */}
          <div className="aan-hud" aria-hidden="true">
            <span className="aan-hud-ring aan-hud-ring-outer" />
            <span className="aan-hud-ring aan-hud-ring-inner" />
            <span className="aan-hud-ticks" />
            <span className="aan-hud-halo" />
          </div>
          <img
            src={retrato}
            alt="Retrato de Alan Alves"
            width={928}
            height={1152}
            decoding="async"
            fetchPriority="high"
            className="aan-portrait-image aan-reference-photo relative z-10 block h-auto w-full object-contain"
          />
          <figcaption className="aan-projects-availability aan-reference-availability absolute bottom-[9%] left-[4%] z-20">
            <span className="aan-projects-online"><span className="aan-status-dot size-3 rounded-full" /> ONLINE</span>
            <strong>DISPONÍVEL PARA<br />PROJETOS</strong>
          </figcaption>
        </figure>
      </div>

      <div aria-hidden className="aan-reference-bottom-waves pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden">
        <svg viewBox="0 0 2400 160" preserveAspectRatio="none" className="absolute bottom-0 h-full w-[200%] [animation:aan-wave_14s_linear_infinite]">
          <path d="M0 110 Q300 40 600 110 T1200 110 T1800 110 T2400 110" stroke="var(--aan-blue)" strokeWidth="3" fill="none" style={{ filter: "drop-shadow(0 0 8px var(--aan-cyan))" }} />
          <path d="M0 130 Q300 80 600 130 T1200 130 T1800 130 T2400 130" stroke="#9c3aff" strokeWidth="2" fill="none" style={{ filter: "drop-shadow(0 0 9px #9c3aff)" }} />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-aan-space" />
      </div>
    </section>
  );
}