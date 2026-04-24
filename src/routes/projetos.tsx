import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categories, projects } from "@/lib/projects";
import { ProjectCard } from "@/components/site/ProjectCard";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Casa Tua Prime" },
      {
        name: "description",
        content:
          "Conheça nosso portfólio de móveis planejados sob medida: cozinhas, closets, salas, dormitórios e ambientes premium.",
      },
      { property: "og:title", content: "Projetos — Casa Tua Prime" },
      {
        property: "og:description",
        content:
          "Portfólio de marcenaria autoral e móveis planejados de alto padrão.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<string>("Todos");

  const filtered =
    filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Header section */}
      <section className="pt-40 pb-16 bg-charcoal text-ivory">
        <div className="container-prime">
          <p className="eyebrow !text-bronze-light mb-6">Portfólio</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Projetos que assinamos com orgulho.
          </h1>
          <p className="mt-6 text-ivory/70 text-lg max-w-2xl">
            Uma seleção de ambientes criados por nossa equipe — cada um com história,
            propósito e identidade próprios.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-prime py-5 flex gap-3 overflow-x-auto scrollbar-hide">
          {["Todos", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`shrink-0 px-5 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-300 border ${
                filter === cat
                  ? "bg-charcoal text-ivory border-charcoal"
                  : "bg-transparent text-muted-foreground border-border hover:border-bronze hover:text-bronze"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-prime">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">
              Nenhum projeto encontrado nesta categoria.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
