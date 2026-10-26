import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { HomeMain } from "@/components/site/HomeMain";
import { Footer } from "@/components/site/Footer";
import { FloatWhats } from "@/components/site/FloatWhats";
import { useHomeBehaviors } from "@/components/site/useHomeBehaviors";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alan Alves — Sites, Sistemas e Robôs de WhatsApp com IA" },
      { name: "description", content: "Alan Alves cria sites profissionais, landing pages, sistemas web e robôs de WhatsApp com inteligência artificial." },
      { property: "og:title", content: "Alan Alves — Desenvolvimento Web, IA e Automações" },
      { property: "og:description", content: "Eu projeto. Eu desenvolvo. Eu automatizo. Fale comigo e crie seu projeto." },
    ],
    links: [{ rel: "stylesheet", href: "/assets/portfolio-neon.css" }],
    scripts: [{ type: "module", src: "/assets/portfolio-neon.js" }],
  }),
  component: Index,
});

function Index() {
  useHomeBehaviors();
  return (
    <>
      <Header />
      <HomeMain />
      <Footer />
      <FloatWhats />
    </>
  );
}
