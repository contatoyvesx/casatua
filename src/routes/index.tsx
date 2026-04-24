import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChefHat, Sparkles, Sofa, Briefcase, Bed, Bath, Wine, Award, Hammer, Ruler, ShieldCheck } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import detailCraft from "@/assets/detail-craft.jpg";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { Reveal } from "@/components/site/Reveal";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa Tua Prime — Móveis Planejados Sob Medida de Alto Padrão" },
      {
        name: "description",
        content:
          "Móveis planejados sob medida com design exclusivo. Cozinhas, closets, salas e dormitórios premium em São Paulo. Solicite seu orçamento.",
      },
      { property: "og:image", content: heroKitchen },
      { name: "twitter:image", content: heroKitchen },
    ],
  }),
  component: HomePage,
});

const categoryIcons = [
  { icon: ChefHat, label: "Cozinhas", desc: "Espaços que recebem com sofisticação." },
  { icon: Sparkles, label: "Closets", desc: "Organização como expressão de luxo." },
  { icon: Sofa, label: "Salas", desc: "Painéis, racks e estantes autorais." },
  { icon: Briefcase, label: "Home Office", desc: "Foco e elegância no seu trabalho." },
  { icon: Bed, label: "Dormitórios", desc: "Conforto desenhado sob medida." },
  { icon: Bath, label: "Banheiros", desc: "Refúgios sensoriais e funcionais." },
  { icon: Wine, label: "Salas de Jantar", desc: "Ambientes para celebrar a vida." },
];

function HomePage() {
  const featured = projects.slice(0, 4);
  const heroRef = useRef<HTMLElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const heroImgRef = useRef<HTMLDivElement | null>(null);
  const [scrolledHero, setScrolledHero] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current || !glowRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      glowRef.current.style.left = `${e.clientX - rect.left}px`;
      glowRef.current.style.top = `${e.clientY - rect.top}px`;
    };
    const onScroll = () => {
      const y = window.scrollY;
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${y * 0.25}px)`;
      }
      setScrolledHero(y > 60);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
        <div ref={heroImgRef} className="absolute inset-0 will-change-transform">
          <div className="absolute inset-0 animate-ken-burns">
            <img
              src={heroKitchen}
              alt="Cozinha planejada de alto padrão Casa Tua Prime"
              width={1920}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute inset-0 gradient-hero" />
        <div ref={glowRef} className="cursor-glow hidden lg:block opacity-70" />
        <div className="container-prime relative z-10 pb-24 md:pb-32">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow !text-bronze-light mb-6">Casa Tua Prime · Marcenaria autoral</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-ivory leading-[1.05] tracking-tight">
              Ambientes que traduzem o seu jeito de viver.
            </h1>
            <p className="mt-8 text-lg text-ivory/80 max-w-xl leading-relaxed">
              Móveis planejados sob medida, com design exclusivo, materiais nobres e
              acabamento impecável. Cada projeto é único — assim como você.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 bg-bronze text-ivory text-xs tracking-[0.25em] uppercase hover:bg-[var(--bronze-dark)] transition-all duration-300"
              >
                Solicitar Orçamento <ArrowRight size={14} className="icon-spin-on-hover" />
              </a>
              <Link
                to="/projetos"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-ivory/40 text-ivory text-xs tracking-[0.25em] uppercase hover:bg-ivory hover:text-charcoal transition-all duration-300"
              >
                Ver Projetos <ArrowRight size={14} className="icon-spin-on-hover" />
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll cue */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 transition-opacity duration-700 ${
            scrolledHero ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-ivory/70">
            <span className="text-[0.6rem] tracking-[0.3em] uppercase">Role</span>
            <span className="relative w-px h-12 bg-ivory/20 overflow-hidden">
              <span className="absolute left-0 right-0 top-0 h-1/3 bg-bronze-light animate-scroll-cue" />
            </span>
          </div>
        </div>
      </section>

      {/* MARQUEE de diferenciais */}
      <section className="bg-charcoal text-ivory border-y border-bronze/30 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-5">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6 shrink-0">
              {["Marcenaria autoral", "Materiais nobres", "Projetos exclusivos", "Garantia estendida", "Atendimento sob medida", "Design assinado"].map((t) => (
                <span key={t} className="flex items-center gap-12 text-sm tracking-[0.3em] uppercase text-ivory/70">
                  {t}
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-light" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="py-24 md:py-36 bg-background">
        <div className="container-prime grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal variant="left" className="lg:col-span-5 image-zoom aspect-[4/5] overflow-hidden">
            <img
              src={detailCraft}
              alt="Detalhe da marcenaria Casa Tua Prime"
              loading="lazy"
              width={1280}
              height={1600}
              className="w-full h-full object-cover"
            />
          </Reveal>
          <Reveal variant="right" className="lg:col-span-7" delay={120}>
            <p className="eyebrow mb-6">Sobre nós</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.1]">
              Cada peça nasce de uma <em className="text-bronze not-italic">conversa</em>, ganha forma no <em className="text-bronze not-italic">desenho</em> e se torna eterna na <em className="text-bronze not-italic">marcenaria</em>.
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">
              Há mais de uma década criamos móveis planejados que combinam funcionalidade,
              design contemporâneo e o melhor da marcenaria brasileira. Atendemos com
              exclusividade — um projeto por vez, do briefing à instalação.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "150+", l: "Projetos" },
                { n: "12", l: "Anos" },
                { n: "100%", l: "Sob medida" },
              ].map((s, i) => (
                <Reveal key={s.l} delay={200 + i * 100}>
                  <p className="font-display text-4xl text-bronze">{s.n}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.l}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-prime">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">Especialidades</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Marcenaria sob medida para cada ambiente.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border">
            {categoryIcons.map(({ icon: Icon, label, desc }, i) => (
              <Reveal
                key={label}
                delay={i * 70}
                className="bg-secondary p-8 md:p-10 hover:bg-background transition-colors duration-500 group cursor-pointer"
              >
                <Icon size={28} className="text-bronze mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500" strokeWidth={1.2} />
                <h3 className="font-display text-2xl mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS DESTAQUE */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-prime">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="eyebrow mb-4">Portfólio</p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Projetos selecionados.
              </h2>
            </div>
            <Link
              to="/projetos"
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-bronze hover:gap-4 transition-all duration-300"
            >
              Ver todos <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="py-24 md:py-32 bg-charcoal text-ivory">
        <div className="container-prime">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow !text-bronze-light mb-4">Como trabalhamos</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Um processo pensado para a sua tranquilidade.
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-12 md:gap-8">
            {[
              { n: "01", t: "Briefing", d: "Conversamos sobre seu estilo de vida, necessidades e referências." },
              { n: "02", t: "Projeto", d: "Apresentamos o projeto em 3D fotorrealista e ajustamos cada detalhe." },
              { n: "03", t: "Marcenaria", d: "Produção em ateliê próprio com materiais nobres e acabamento premium." },
              { n: "04", t: "Instalação", d: "Equipe própria, prazos cumpridos e entrega impecável." },
            ].map((s) => (
              <div key={s.n} className="border-t border-bronze pt-6">
                <p className="font-display text-5xl text-bronze-light">{s.n}</p>
                <h3 className="font-display text-2xl mt-4">{s.t}</h3>
                <p className="mt-3 text-sm text-ivory/65 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-prime">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { i: Award, t: "Design Exclusivo", d: "Nenhum projeto se repete. Cada peça é desenhada para o seu espaço." },
              { i: Hammer, t: "Marcenaria Própria", d: "Controle total da produção em ateliê próprio com mestres marceneiros." },
              { i: Ruler, t: "Precisão Milimétrica", d: "Levantamento técnico rigoroso e instalação sem ajustes improvisados." },
              { i: ShieldCheck, t: "Garantia Estendida", d: "5 anos de garantia em estrutura e ferragens. Suporte vitalício." },
              { i: Sparkles, t: "Materiais Nobres", d: "MDF naval, lâminas de madeira certificadas e ferragens importadas." },
              { i: Briefcase, t: "Atendimento Exclusivo", d: "Um projeto por vez. Você fala diretamente com o designer." },
            ].map(({ i: Icon, t, d }) => (
              <div key={t} className="flex gap-5">
                <Icon className="text-bronze shrink-0 mt-1" size={28} strokeWidth={1.2} />
                <div>
                  <h3 className="font-display text-2xl mb-2">{t}</h3>
                  <p className="text-muted-foreground leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container-prime">
          <p className="eyebrow text-center mb-4">Depoimentos</p>
          <h2 className="font-display text-4xl md:text-5xl text-center max-w-3xl mx-auto leading-tight">
            A confiança de quem vive os nossos projetos.
          </h2>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { q: "Superaram todas as expectativas. Cada detalhe foi pensado com cuidado e o resultado é impressionante.", n: "Marina C.", l: "Jardins, SP" },
              { q: "Profissionalismo do início ao fim. A marcenaria é de uma qualidade que dificilmente se encontra hoje.", n: "Ricardo M.", l: "Alphaville, SP" },
              { q: "Transformaram nosso apartamento em um lar com a nossa cara. Recomendo sem pensar duas vezes.", n: "Fernanda L.", l: "Itaim, SP" },
            ].map((t) => (
              <figure key={t.n} className="bg-background p-10 hover-lift">
                <p className="font-display text-2xl leading-snug text-charcoal">"{t.q}"</p>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <p className="font-medium">{t.n}</p>
                  <p className="text-xs text-muted-foreground tracking-wide mt-1">{t.l}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-32 md:py-44 bg-charcoal text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={detailCraft} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container-prime relative z-10 text-center max-w-3xl">
          <p className="eyebrow !text-bronze-light mb-6">Vamos começar?</p>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.1]">
            O seu próximo ambiente começa com uma conversa.
          </h2>
          <p className="mt-8 text-ivory/75 text-lg max-w-xl mx-auto">
            Conte-nos sobre seu projeto. Faremos um orçamento personalizado, sem compromisso.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-bronze text-ivory text-xs tracking-[0.25em] uppercase hover:bg-[var(--bronze-light)] hover:text-charcoal transition-all duration-300"
            >
              WhatsApp <ArrowRight size={14} />
            </a>
            <Link
              to="/contato"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-ivory/40 text-ivory text-xs tracking-[0.25em] uppercase hover:bg-ivory hover:text-charcoal transition-all duration-300"
            >
              Formulário de Orçamento
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
