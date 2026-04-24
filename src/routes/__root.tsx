import { Outlet, createRootRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { BackToTop } from "@/components/site/BackToTop";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center px-4 pt-32 pb-20">
        <div className="text-center max-w-md">
          <p className="eyebrow">Página não encontrada</p>
          <h1 className="font-display text-7xl mt-4">404</h1>
          <p className="mt-4 text-muted-foreground">
            A página que você procura não existe ou foi movida.
          </p>
          <a
            href="/"
            className="inline-block mt-8 px-8 py-3 bg-charcoal text-ivory text-xs tracking-[0.2em] uppercase hover:bg-bronze transition-colors"
          >
            Voltar ao início
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
      <Toaster />
    </>
  );
}
