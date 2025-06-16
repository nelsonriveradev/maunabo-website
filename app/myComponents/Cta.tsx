import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-[#01791A] py-16 text-white w-full">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Mantente conectado con tu municipio
          </h2>
          <p className="mb-8 text-lg">
            Suscríbete a nuestro boletín informativo para recibir las últimas
            noticias, eventos y actualizaciones de Maunabo directamente en tu
            correo electrónico.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white/70 focus:border-[#ffd300] focus:outline-none"
              required
            />
            <Button
              type="submit"
              className="bg-[#ffd300] text-black hover:bg-[#efb130]"
            >
              Suscribirse
            </Button>
          </form>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              variant="link"
              className="text-[#ffd300] hover:text-[#efb130]"
            >
              <Link href="/contacto">Contacto</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="text-white hover:text-[#ffd300]"
            >
              <Link href="/directorio">Directorio</Link>
            </Button>
            <Button
              asChild
              variant="link"
              className="text-white hover:text-[#ffd300]"
            >
              <Link href="/mapa">Mapa del Sitio</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
