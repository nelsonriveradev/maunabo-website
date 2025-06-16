import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-[#01791A] py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('https://www.discoverpuertorico.com/sites/default/files/styles/horizontal/public/2019-04/DJI_0087%20El%20Faro.jpg?itok=ds_wJxRU')] bg-cover bg-center opacity-80"></div>
      <div className="container relative z-10 mx-auto px-4 text-center text-white">
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Bienvenidos a <span className="text-[#ffd300] ">Maunabo</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
          La Ciudad del Turismo y la Cultura en la costa sureste de Puerto Rico
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#ffd300] text-black hover:bg-[#efb130]"
          >
            <Link href="/turismo">Descubrir Maunabo</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-black hover:bg-white hover:text-[#01791A]"
          >
            <Link className="text-black" href="/contacto">
              Contáctanos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
