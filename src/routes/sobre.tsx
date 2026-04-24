import { createFileRoute } from "@tanstack/react-router";
import { Award, Hammer, Heart, Leaf } from "lucide-react";
import detailCraft from "@/assets/detail-craft.jpg";
import projectLiving from "@/assets/project-living.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Casa Tua Prime" },
      {
        name: "description",
        content:
          "Casa Tua Prime: marcenaria autoral, design exclusivo e atendimento sob medida. Conheça nossa história e filosofia.",
      },
      { property: "og:title", content: "Sobre — Casa Tua Prime" },
      { property: "og:description", content: "Marcenaria autoral e atendimento exclusivo." },
      { property: "og:image", content: detailCraft },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-charcoal text-ivory">
        <div className="container-prime max-w-4xl">
          <p className="eyebrow !text-bronze-light mb-6">Quem somos</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
            CasaTua Prime, do Instagram para a sua casa.
          </h1>
          <p className="mt-8 text-ivory/75 text-lg leading-relaxed max-w-2xl">
            Nosso trabalho mostra o antes e depois real de cada ambiente: marcenaria
            planejada, soluções inteligentes e acabamento com padrão elevado.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container-prime grid lg:grid-cols-2 gap-16 items-center">
          <div className="image-zoom aspect-[4/5] overflow-hidden">
            <img
              src={projectLiving}
              alt="Ambiente Casa Tua Prime"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">Nossa filosofia</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Cada projeto é pensado para sua rotina, não para um catálogo.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Na CasaTua Prime, cada detalhe é desenhado para resolver o uso real do espaço:
              circulação, armazenamento, ergonomia e estética em equilíbrio.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              O resultado é o que você vê no nosso Instagram: ambientes elegantes,
              funcionais e com identidade própria.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-prime">
          <p className="eyebrow mb-4">Valores</p>
          <h2 className="font-display text-4xl md:text-5xl mb-16 max-w-2xl leading-tight">
            O que nos move todos os dias.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { i: Award, t: "Excelência", d: "Padrão premium em cada milímetro, sem concessões." },
              { i: Hammer, t: "Artesania", d: "Marcenaria como ofício, valorizando o feito à mão." },
              { i: Heart, t: "Cuidado", d: "Atendimento próximo, humano e absolutamente atencioso." },
              { i: Leaf, t: "Sustentabilidade", d: "Madeiras certificadas e processos responsáveis." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t}>
                <Icon size={32} className="text-bronze mb-5" strokeWidth={1.2} />
                <h3 className="font-display text-2xl mb-3">{t}</h3>
                <p className="text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
