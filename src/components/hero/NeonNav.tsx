import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
// Preserve original Alan Alves Dev site logo; only navigation/header styling comes from Alan Alves Digital.
const icon = "/assets/a-sites-logo-3d.svg?v=20261102b";
const NAV = [
  { hash: "inicio", label: "Início" }, { hash: "sobre", label: "Sobre" },
  { hash: "servicos", label: "Serviços" }, { hash: "robo", label: "Robô de IA" },
  { hash: "projetos", label: "Projetos" }, { hash: "processo", label: "Processo" },
  { hash: "depoimentos", label: "Depoimentos" }, { hash: "contato", label: "Contato" },
] as const;
const CONTACT_URL = "https://wa.me/5551999938323?text=Ol%C3%A1%20Alan!%20Vi%20seu%20site%20e%20quero%20criar%20meu%20projeto.";

function NavItem({ hash, className, onClick, children }: { hash: string; className: string; onClick?: () => void; children: React.ReactNode }) {
  if (hash === "robo") return <Link to="/robo-whatsapp" className={className} onClick={onClick}>{children}</Link>;
  return <Link to="/" hash={hash} className={className} onClick={onClick}>{children}</Link>;
}

export function NeonNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atEnd && document.getElementById("contato")) return setActive("contato");
      let current = "";
      const line = window.innerHeight * 0.45;
      for (const n of NAV) {
        const el = document.getElementById(n.hash);
        if (el && el.getBoundingClientRect().top <= line) current = n.hash;
      }
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  const href = CONTACT_URL;

  return (
    <header data-scrolled={scrolled} className="aan-nav fixed inset-x-0 top-0 z-50 font-aan-sans text-aan-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 lg:px-8">
        <Link to="/" hash="inicio" className="flex items-center gap-3">
          <img src={icon} alt="" width={52} height={52} className="size-10 rounded-lg [animation:aan-portal_3s_ease-in-out_infinite] shadow-[0_0_14px_var(--aan-cyan)]" />
          <span className="leading-tight">
            <span className="block font-aan-display text-base font-bold tracking-wider">ALAN ALVES</span>
            <span className="block text-[10px] tracking-[0.25em] text-aan-blue">WEB DEVELOPER • AI AUTOMATION</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <NavItem key={n.hash} hash={n.hash}
              className={`relative text-sm transition-colors hover:text-aan-cyan ${active === n.hash ? "text-aan-cyan" : "text-aan-white"}`}>
              {n.label}
              {active === n.hash && <span className="absolute -bottom-1.5 left-0 h-px w-full bg-aan-cyan shadow-[0_0_8px_var(--aan-cyan)]" />}
            </NavItem>
          ))}
        </nav>
        <a href={href} target="_blank" rel="noopener noreferrer"
          className="aan-border aan-glow-hover group hidden items-center gap-2 rounded-full px-5 py-2 font-aan-display text-xs font-bold tracking-wider text-aan-cyan sm:inline-flex">
          VAMOS CONVERSAR <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <button aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} className="text-aan-cyan lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-aan-violet/40 bg-aan-space/95 px-4 py-3 lg:hidden">
          {NAV.map((n) => (
            <NavItem key={n.hash} hash={n.hash} onClick={() => setOpen(false)}
              className={`py-2 ${active === n.hash ? "text-aan-cyan" : ""}`}>{n.label}</NavItem>
          ))}
          <a href={href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="py-2 font-aan-display text-xs font-bold tracking-wider text-aan-cyan sm:hidden">
            VAMOS CONVERSAR
          </a>
        </nav>
      )}
    </header>
  );
}
