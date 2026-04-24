import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      to="/projetos/$slug"
      params={{ slug: project.slug }}
      className="group block animate-fade-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="image-zoom relative aspect-[4/5] bg-muted overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          width={1280}
          height={1600}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        <div className="absolute top-4 left-4">
          <span className="text-[0.65rem] tracking-[0.25em] uppercase text-ivory bg-charcoal/60 backdrop-blur px-3 py-1.5">
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
          <div>
            <h3 className="font-display text-2xl text-ivory leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-ivory/70 mt-1 tracking-wide">{project.location}</p>
          </div>
          <span className="w-10 h-10 rounded-full bg-bronze flex items-center justify-center text-ivory shrink-0 group-hover:rotate-45 transition-transform duration-500">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}
