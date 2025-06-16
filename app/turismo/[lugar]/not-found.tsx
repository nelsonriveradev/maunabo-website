import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AttractionNotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h2 className="mb-2 text-3xl font-bold text-[#01791A]">
        Atracción No Encontrada
      </h2>
      <p className="mb-8 text-lg text-gray-600">
        Lo sentimos, la atracción turística que busca no está disponible o no
        existe.
      </p>
      <Button asChild className="bg-[#01791A] hover:bg-[#52A355]">
        <Link href="/turismo">Ver Todas las Atracciones</Link>
      </Button>
    </div>
  );
}
