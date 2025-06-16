import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import Link from "next/link";

export function TourismCTA() {
  return (
    <section className="bg-gradient-to-r from-[#01791A] to-[#52A355] py-16 text-white">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Planifica Tu Visita a Maunabo
          </h2>
          <p className="mb-8 text-lg">
            Descarga nuestra guía turística completa o visita nuestro centro de
            información turística para obtener asistencia personalizada.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="bg-[#FFD300] text-black hover:bg-[#EFB130]"
            >
              <Link href="/files/guia-turistica-maunabo.pdf">
                <Download className="mr-2 h-4 w-4" />
                Descargar Guía Turística
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#01791A]"
            >
              <Link href="/contacto">
                <MapPin className="mr-2 h-4 w-4" />
                Centro de Información Turística
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
