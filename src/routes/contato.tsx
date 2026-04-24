import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Casa Tua Prime" },
      {
        name: "description",
        content:
          "Solicite seu orçamento de móveis planejados sob medida. Atendimento exclusivo Casa Tua Prime.",
      },
      { property: "og:title", content: "Contato — Casa Tua Prime" },
      {
        property: "og:description",
        content: "Fale conosco e solicite seu orçamento personalizado.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", category: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppLink(), "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <>
      <section className="pt-40 pb-12 bg-charcoal text-ivory">
        <div className="container-prime max-w-3xl">
          <p className="eyebrow !text-bronze-light mb-6">Contato</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
            Vamos tirar seu projeto do papel.
          </h1>
          <p className="mt-6 text-ivory/75 text-lg max-w-xl">
            Fale direto com a equipe da CasaTua Prime pelo WhatsApp e receba orientação
            para orçamento, medidas e próximos passos.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container-prime grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Info */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <p className="eyebrow mb-4">Atendimento</p>
              <p className="text-muted-foreground leading-relaxed">
                Atendemos com hora marcada em nosso showroom em São Paulo, ou onde for
                mais conveniente para você.
              </p>
            </div>

            <div className="space-y-6 border-t border-bronze pt-8">
              <ContactItem icon={Phone} label="Telefone" value="(11) 94500-8989" href="https://wa.me/5511945008989" external />
              <ContactItem icon={MessageCircle} label="WhatsApp" value="Iniciar conversa" href={buildWhatsAppLink()} external />
              <ContactItem icon={Mail} label="E-mail" value="contato@casatuaprime.com.br" href="mailto:contato@casatuaprime.com.br" />
              <ContactItem icon={MapPin} label="Showroom" value="Rua dos Pinheiros, 000 — São Paulo, SP" />
            </div>

            <div className="border-t border-border pt-8">
              <p className="eyebrow mb-3">Horário</p>
              <p className="text-sm text-muted-foreground">Segunda a sexta · 9h — 18h</p>
              <p className="text-sm text-muted-foreground">Sábado · 9h — 13h</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-8 bg-secondary p-8 md:p-12"
          >
            <p className="eyebrow mb-2">Solicitar orçamento</p>
            <h2 className="font-display text-3xl md:text-4xl mb-10 leading-tight">
              Preencha os dados e continue no WhatsApp.
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Nome completo *" name="name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Telefone *" name="phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="(11) 94500-8989" />
              <Field label="E-mail" name="email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <div>
                <label className="block text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground mb-2">Ambiente</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-bronze focus:outline-none transition-colors"
                >
                  <option value="">Selecione...</option>
                  {["Cozinha", "Closet", "Sala", "Home Office", "Dormitório", "Banheiro", "Sala de Jantar", "Casa completa"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground mb-2">Sobre o projeto</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Conte-nos sobre seu espaço, estilo e expectativas..."
                className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-bronze focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center justify-center gap-3 w-full md:w-auto px-10 py-4 bg-charcoal text-ivory text-xs tracking-[0.25em] uppercase hover:bg-bronze transition-all duration-300"
            >
              Enviar via WhatsApp <Send size={14} />
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              * Campos obrigatórios. Não compartilhamos seus dados.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-bronze focus:outline-none transition-colors"
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <Icon size={18} className="text-bronze mt-1 shrink-0" />
      <div>
        <p className="text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground">{label}</p>
        <p className="text-base mt-1">{value}</p>
      </div>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="flex gap-3 hover:text-bronze transition-colors"
      >
        {content}
      </a>
    );
  }
  return <div className="flex gap-3">{content}</div>;
}
