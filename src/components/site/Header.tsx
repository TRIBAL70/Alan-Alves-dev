import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Início", hash: "inicio", url: "/#inicio" },
  { label: "Sobre", hash: "sobre", url: "/#sobre" },
  { label: "Serviços", hash: "servicos", url: "/#servicos" },
  { label: "Robô de IA", hash: "robo", url: "/robo-whatsapp" },
  { label: "Projetos", hash: "projetos", url: "/#projetos" },
  { label: "Processo", hash: "processo", url: "/#processo" },
  { label: "Depoimentos", hash: "depoimentos", url: "/#depoimentos" },
  { label: "Contato", hash: "contato", url: "/#contato" }
];
const WHATSAPP = "https://wa.me/5551999938323?text=Ol%C3%A1%20Alan!%20Vi%20seu%20site%20e%20quero%20criar%20meu%20projeto.";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 25);
      if (window.location.pathname !== "/") {
        setActive("robo");
        return;
      }
      const threshold = window.innerHeight * 0.4;
      let current = "inicio";
      for (const item of LINKS) {
        const el = document.getElementById(item.hash);
        if (el && el.getBoundingClientRect().top <= threshold) current = item.hash;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 6) current = "contato";
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  const links = () => LINKS.map((item) => (
    <a
      key={item.hash}
      href={item.url}
      aria-current={active === item.hash ? "page" : undefined}
      className={active === item.hash ? "aa-active" : undefined}
      onClick={() => setOpen(false)}
    >{item.label}</a>
  ));

  return (
    <header className="aa-navbar" data-scrolled={String(scrolled)}>
      <div className="aa-nav-inner">
        <a href="/#inicio" className="aa-brand" aria-label="Alan Alves Dev — Início" onClick={() => setOpen(false)}>
          <img src="/assets/alan-dev-robot-logo.png" className="aa-brand-logo" width={44} height={44} alt="" />
          <span>
            <span className="aa-brand-name">ALAN ALVES</span>
            <span className="aa-brand-subtitle">WEB DEVELOPER • AI AUTOMATION</span>
          </span>
        </a>
        <nav aria-label="Navegação principal" className="aa-nav-links">{links()}</nav>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="aa-nav-cta">VAMOS CONVERSAR <ArrowUpRight size={15} aria-hidden="true" /></a>
        <button type="button" className="aa-nav-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="aa-mobile-menu" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <nav id="aa-mobile-menu" aria-label="Menu no celular" className="aa-mobile-menu">
        {links()}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="aa-nav-cta" onClick={() => setOpen(false)}>VAMOS CONVERSAR <ArrowUpRight size={15} /></a>
      </nav>}
    </header>
  );
}
