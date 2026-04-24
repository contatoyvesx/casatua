import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, MapPin, Calendar, Maximize, ZoomIn } from "lucide-react";
import { getProjectBySlug, projects, type Project } from "@/lib/projects";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Lightbox } from "@/components/site/Lightbox";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = getProjectBySlug(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — Casa Tua Prime` },
        { name: "description", content: p.description.slice(0, 155) },
        { property: "og:title", content: `${p.title} — Casa Tua Prime` },
        { property: "og:description", content: p.description.slice(0, 155) },
        { property: "og:image", content: p.cover },
        { name: "twitter:image", content: p.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center pt-32 pb-20">
      <div className="text-center">
        <p className="eyebrow">Projeto não encontrado</p>
        <h1 className="font-display text-5xl mt-4">Ops!</h1>
        <Link to="/projetos" className="inline-block mt-8 px-8 py-3 bg-charcoal text-ivory text-xs tracking-[0.2em] uppercase">
          Ver todos os projetos
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => {
    const router = useRouter();
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="font-display text-3xl">Algo deu errado</h1>
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="mt-6 px-6 py-3 bg-charcoal text-ivory text-xs tracking-[0.2em] uppercase"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const openAt = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + project.gallery.length) % project.gallery.length));
  const next2 = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % project.gallery.length));

  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[520px] flex items-end overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          width={1920}
          height={1280}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="container-prime relative z-10 pb-16 md:pb-24">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-ivory/80 hover:text-bronze-light text-xs tracking-[0.2em] uppercase mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Voltar aos projetos
          </Link>
          <p className="eyebrow !text-bronze-light mb-4">{project.category}</p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-ivory leading-[1.05] max-w-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Meta + descrição */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-prime grid lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-8">
            <div className="border-t border-bronze pt-6 space-y-5">
              <Meta icon={MapPin} label="Local" value={project.location} />
              <Meta icon={Calendar} label="Ano" value={project.year} />
              <Meta icon={Maximize} label="Área" value={project.area} />
              <Meta label="Categoria" value={project.category} />
            </div>
            <a
              href={buildWhatsAppLink(`Olá! Tenho interesse em um projeto similar ao "${project.title}".`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 px-8 py-4 bg-bronze text-ivory text-xs tracking-[0.25em] uppercase hover:bg-[var(--bronze-dark)] transition-colors"
            >
              Quero algo assim <ArrowRight size={14} />
            </a>
          </aside>

          <div className="lg:col-span-8">
            <p className="eyebrow mb-4">Sobre o projeto</p>
            <p className="font-display text-2xl md:text-3xl leading-snug text-charcoal">
              {project.description}
            </p>

            <div className="mt-12">
              <p className="eyebrow mb-6">Diferenciais</p>
              <ul className="space-y-4">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-4 items-start text-lg">
                    <span className="w-6 h-6 rounded-full bg-bronze/10 flex items-center justify-center shrink-0 mt-1">
                      <Check size={14} className="text-bronze" strokeWidth={2.5} />
                    </span>
                    <span className="text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="pb-24 md:pb-32 bg-background">
        <div className="container-prime space-y-6 md:space-y-8">
          {project.gallery.map((img, i) => (
            <Reveal key={i} variant="scale">
              <button
                type="button"
                onClick={() => openAt(i)}
                className={`image-zoom group relative w-full overflow-hidden cursor-zoom-in ${
                  i === 0 ? "aspect-[16/9]" : i % 2 === 0 ? "aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} — imagem ${i + 1}`}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 w-11 h-11 rounded-full bg-charcoal/70 backdrop-blur text-ivory flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ZoomIn size={18} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox
        images={project.gallery}
        index={lightboxIndex}
        onClose={close}
        onPrev={prev}
        onNext={next2}
        alt={project.title}
      />

      {/* Próximo projeto */}
      <section className="bg-charcoal text-ivory">
        <Link
          to="/projetos/$slug"
          params={{ slug: next.slug }}
          className="block group relative h-[60vh] min-h-[400px] overflow-hidden"
        >
          <img
            src={next.cover}
            alt={next.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="eyebrow !text-bronze-light mb-4">Próximo projeto</p>
            <h2 className="font-display text-4xl md:text-6xl text-ivory">{next.title}</h2>
            <span className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-ivory group-hover:gap-4 transition-all">
              Ver projeto <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      </section>
    </>
  );
}

function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      {Icon && <Icon size={16} className="text-bronze mt-1" />}
      <div>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground">{label}</p>
        <p className="text-base mt-1">{value}</p>
      </div>
    </div>
  );
}
