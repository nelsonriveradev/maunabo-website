import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="">
      <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <h2 className="mb-2 text-3xl font-bold text-[#01791A]">
          Página No Encontrada
        </h2>
        <p className="mb-8 text-lg text-gray-600">
          Lo sentimos, la página que busca no está disponible o está bajo
          desarrollo.
        </p>
        <Button asChild className="bg-[#01791A] hover:bg-[#52A355]">
          <Link href="/turismo">Volver a Inicio</Link>
        </Button>
      </div>
    </div>
  );
}
