import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { RoboMain } from "@/components/site/RoboMain";
import { Footer } from "@/components/site/Footer";
import { FloatWhats } from "@/components/site/FloatWhats";

export const Route = createFileRoute("/robo-whatsapp")({
  head: () => ({
    meta: [
      { title: "Robô de WhatsApp com IA — Alan Alves" },
      { name: "description", content: "Simulador ao vivo do robô de WhatsApp com inteligência artificial de Alan Alves: agenda, responde e vende 24h." },
      { property: "og:title", content: "Robô de WhatsApp com IA — Alan Alves" },
      { property: "og:description", content: "Converse com a Sky IA e veja como o robô atende, agenda e vende 24 horas por dia." },
    ],
  }),
  component: RoboPage,
});

function RoboPage() {
  return (
    <>
      <Header />
      <RoboMain />
      <Footer />
      <FloatWhats />
    </>
  );
}
