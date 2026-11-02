import { useEffect, useRef } from "react";
import { ArrowUpRight, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { AlanSmoke } from "./AlanSmoke";

const CONTACT = "https://wa.me/5551999938323?text=Ol%C3%A1%20Alan!%20Vi%20seu%20site%20e%20quero%20criar%20meu%20projeto.";

const stars = [
  { left: "11%", top: "20%", delay: "0s" },
  { left: "49%", top: "8%", delay: "1.1s" },
  { left: "84%", top: "17%", delay: "1.9s" },
  { left: "72%", top: "84%", delay: ".5s" },
  { left: "27%", top: "79%", delay: "2.4s" },
];

export function AlanHero() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = ref.current;
    if (!section || !window.matchMedia("(pointer:fine)").matches || window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const move = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty("--aa-mouse-x", String(((event.clientX - rect.left) / Math.max(1, rect.width) - .5) * 10) + "px");
      section.style.setProperty("--aa-mouse-y", String(((event.clientY - rect.top) / Math.max(1, rect.height) - .5) * 8) + "px");
    };
    section.addEventListener("pointermove", move, { passive: true });
    return () => section.removeEventListener("pointermove", move);
  }, []);

  return (
    <section id="inicio" ref={ref} className="aa-hero-section">
      <div className="aa-hero-background" aria-hidden="true"><AlanSmoke /></div>
      <div className="aa-hero-container">
        <div className="aa-hero-copy">
          <span className="aa-hello"><span className="aa-online-dot" /> OLÁ, EU SOU ALAN ALVES</span>
          <div className="aa-hero-letter-wrap">
            <div className="aa-letter-ring" aria-hidden="true" />
            <h1 className="aa-hero-letter" aria-label="Alan Alves">
              <img src="/assets/alan-alves-original-logo.webp" width={750} height={250} alt="" fetchPriority="high" />
              <span className="aa-letter-sweep" aria-hidden="true" />
            </h1>
            <div className="aa-circuit aa-circuit-a" aria-hidden="true" />
            <div className="aa-circuit aa-circuit-b" aria-hidden="true" />
            {stars.map((s, index) => <span key={index} className="aa-star" aria-hidden="true" style={{ left: s.left, top: s.top, animationDelay: s.delay }}>✦</span>)}
          </div>
          <p className="aa-hero-slogan">
            EU PROJETO. <span className="aa-cyan-text">EU DESENVOLVO.</span>
            <span className="aa-magenta-text">EU AUTOMATIZO.</span>
          </p>
          <p className="aa-hero-description">
            Desenvolvedor web e especialista em automação e inteligência artificial. Crio sites, sistemas e robôs de WhatsApp que atendem, vendem e agendam por você — 24 horas por dia.
          </p>
          <div className="aa-hero-actions">
            <a href="/#projetos" className="aa-primary-button">
              EXPLORAR MEUS PROJETOS <ArrowUpRight aria-hidden="true" size={19} />
            </a>
            <a href={CONTACT} target="_blank" rel="noopener noreferrer" className="aa-outline-button">
              <MessageCircle aria-hidden="true" size={19} /> CRIAR MEU PROJETO
            </a>
          </div>
          <div className="aa-hero-socials">
            <span>SIGA-ME</span>
            <a href="https://www.instagram.com/alan.alves.1?rpxt=MWJhMmxtZm1uMzIxdw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Alan Alves"><Instagram size={17} /></a>
            <a href="https://www.linkedin.com/in/alan-everton-alves?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Alan Alves"><Linkedin size={17} /></a>
          </div>
        </div>
        <div className="aa-portrait-scene">
          <div className="aa-portrait-ring aa-portrait-ring-one" aria-hidden="true" />
          <div className="aa-portrait-ring aa-portrait-ring-two" aria-hidden="true" />
          <div className="aa-portrait-halo" aria-hidden="true" />
          <img src="/assets/alan-CUJULnXC.png" alt="Alan Alves, desenvolvedor web" className="aa-portrait-image" width={928} height={1152} loading="eager" />
          <div className="aa-online-card"><span><span className="aa-online-dot" /> ONLINE</span><strong>DISPONÍVEL PARA PROJETOS</strong></div>
        </div>
      </div>
      <div className="aa-energy-waves" aria-hidden="true">
        <svg viewBox="0 0 1200 130" preserveAspectRatio="none">
          <path d="M-20 90 Q130 15 280 85 T580 82 T880 75 T1220 84" />
          <path d="M-20 115 Q130 45 280 110 T580 99 T880 95 T1220 112" />
        </svg>
      </div>
    </section>
  );
}
