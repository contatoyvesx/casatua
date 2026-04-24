import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  alt?: string;
}

export function Lightbox({ images, index, onClose, onPrev, onNext, alt = "" }: LightboxProps) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, onPrev, onNext]);

  if (index === null) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-fade-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Fechar"
        className="absolute top-5 right-5 w-11 h-11 flex items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-bronze transition-colors"
      >
        <X size={20} />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Imagem anterior"
        className="absolute left-3 md:left-6 w-12 h-12 flex items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-bronze transition-colors"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Próxima imagem"
        className="absolute right-3 md:right-6 w-12 h-12 flex items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-bronze transition-colors"
      >
        <ChevronRight size={22} />
      </button>
      <img
        key={index}
        src={images[index]}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[88vh] max-w-[92vw] object-contain shadow-elegant animate-fade-up"
      />
      <div className="absolute bottom-5 inset-x-0 text-center text-xs tracking-[0.25em] uppercase text-ivory/70">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
