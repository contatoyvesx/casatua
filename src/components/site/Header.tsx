import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ThemeToggle } from "./ThemeToggle";
import logo from "@/assets/logo_site.jpeg";

const links: { to: "/" | "/projetos" | "/sobre" | "/contato"; label: string; exact?: boolean }[] = [
  { to: "/", label: "Início", exact: true },
  { to: "/projetos", label: "Projetos" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled || open
          ? "bg-charcoal/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container-prime flex items-center justify-between h-20">

<Link to="/" className="flex items-center">
  <img
    src={logo}
    alt="Casa Tua Prime"
    className="h-10 w-auto object-contain"
  />
</Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              activeProps={{ className: "text-bronze-light" }}
              inactiveProps={{ className: "text-ivory/80 hover:text-ivory" }}
              className="text-sm tracking-wider uppercase transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="btn-shimmer inline-flex items-center px-6 py-2.5 border border-bronze text-ivory text-xs tracking-[0.2em] uppercase hover:bg-bronze transition-all duration-300"
          >
            Solicitar Orçamento
          </a>
        </nav>

        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-ivory p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-charcoal border-t border-white/10">
          <nav className="container-prime flex flex-col py-6 gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.exact }}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-bronze-light" }}
                inactiveProps={{ className: "text-ivory/85" }}
                className="text-sm tracking-wider uppercase"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center px-6 py-3 border border-bronze text-ivory text-xs tracking-[0.2em] uppercase"
            >
              Solicitar Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
