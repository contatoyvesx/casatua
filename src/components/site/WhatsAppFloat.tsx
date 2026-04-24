import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloat({ message }: { message?: string }) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[var(--whatsapp)] animate-ping opacity-20" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[var(--whatsapp)] text-white shadow-elegant hover:scale-110 transition-transform duration-300">
        <MessageCircle size={26} fill="currentColor" />
      </span>
    </a>
  );
}
