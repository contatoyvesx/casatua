import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Informe um e-mail válido.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setEmail("");
    toast.success("Inscrição confirmada! Em breve você receberá nossas novidades.");
  };

  return (
    <form onSubmit={submit} className="flex w-full max-w-md border-b border-ivory/30 focus-within:border-bronze-light transition-colors">
      <input
        type="email"
        required
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 bg-transparent py-3 text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
      />
      <button
        type="submit"
        disabled={loading}
        aria-label="Inscrever-se"
        className="px-2 text-bronze-light hover:text-ivory transition-colors disabled:opacity-50"
      >
        <Send size={18} className={loading ? "animate-pulse" : ""} />
      </button>
    </form>
  );
}
