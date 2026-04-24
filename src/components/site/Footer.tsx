import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Newsletter } from "./Newsletter";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-8">
      <div className="container-prime grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-baseline gap-2 mb-5">
            <span className="font-display text-2xl">Casa Tua</span>
            <span className="eyebrow !text-bronze-light">Prime</span>
          </div>
          <p className="text-sm text-ivory/65 leading-relaxed max-w-xs">
            Móveis planejados sob medida com acabamento de alto padrão. Projetos
            assinados, marcenaria autoral e atendimento exclusivo.
          </p>
          <div className="mt-8">
            <p className="eyebrow mb-3">Newsletter</p>
            <Newsletter />
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Navegação</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-ivory/75 hover:text-bronze-light transition-colors">Início</Link></li>
            <li><Link to="/projetos" className="text-ivory/75 hover:text-bronze-light transition-colors">Projetos</Link></li>
            <li><Link to="/sobre" className="text-ivory/75 hover:text-bronze-light transition-colors">Sobre</Link></li>
            <li><Link to="/contato" className="text-ivory/75 hover:text-bronze-light transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Contato</h4>
          <ul className="space-y-3 text-sm text-ivory/75">
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-bronze-light mt-0.5 shrink-0" />
              <a href={buildWhatsAppLink()} target="_blank" rel="noreferrer" className="hover:text-bronze-light transition-colors">
                (11) 99999-9999
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="text-bronze-light mt-0.5 shrink-0" />
              <a href="mailto:contato@casatuaprime.com.br" className="hover:text-bronze-light transition-colors">
                contato@casatuaprime.com.br
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-bronze-light mt-0.5 shrink-0" />
              <span>Showroom — São Paulo / SP</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Siga-nos</h4>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-sm text-ivory/75 hover:text-bronze-light transition-colors"
          >
            <Instagram size={18} />
            @casatuaprime
          </a>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 border border-bronze text-ivory text-xs tracking-[0.2em] uppercase hover:bg-bronze transition-all"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      <div className="container-prime mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-ivory/50">
        <p>© {new Date().getFullYear()} Casa Tua Prime — Todos os direitos reservados.</p>
        <p>Marcenaria autoral · Projetos exclusivos</p>
      </div>
    </footer>
  );
}
