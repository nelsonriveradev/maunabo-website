import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function TourismHero() {
  return (
    <section className="relative bg-[#01791A] py-20 md:py-32">
      <div className=" mx-auto absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Descubre <span className="text-[#FFD300]">Maunabo</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
          Explora nuestras hermosas playas, monumentos históricos y atracciones
          naturales
        </p>

        <div className="mx-auto mb-8 max-w-md">
          <form className="relative">
            <input
              type="text"
              placeholder="Buscar atracciones..."
              className="w-full rounded-full border-2 border-white/20 bg-white/10 px-6 py-3 pr-12 text-white placeholder:text-white/70 focus:border-[#FFD300] focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-[#FFD300] p-2 text-black hover:bg-[#EFB130]"
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Buscar</span>
            </button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <Button className="bg-[#FFD300] text-black hover:bg-[#EFB130]">
            Playas
          </Button>
          <Button className="bg-white/10 text-white hover:bg-white/20">
            Histórico
          </Button>
          <Button className="bg-white/10 text-white hover:bg-white/20">
            Natural
          </Button>
          <Button className="bg-white/10 text-white hover:bg-white/20">
            Gastronomía
          </Button>
          <Button className="bg-white/10 text-white hover:bg-white/20">
            Aventura
          </Button>
        </div>
      </div>
    </section>
  );
}
