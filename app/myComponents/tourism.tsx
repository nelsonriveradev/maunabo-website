import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const attractions = [
  {
    title: "Faro de Punta Tuna",
    image: "https://boricuaonline.com/wp-content/uploads/2017/01/maunabo.jpg",
    href: "/turismo/faro-punta-tuna",
  },
  {
    title: "Playa Los Bohíos",
    image:
      "https://boricuaonline.com/wp-content/uploads/2019/09/manuabo-playa-los-bohios.jpg",
    href: "/turismo/playa-bohios",
  },
  {
    title: "Reserva Natural Punta Tuna",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKp7BrqT0GAEVH1lRW-TTkWE5A01GJyN_TLA&s",
    href: "/turismo/reserva-punta-tuna",
  },
];

export function Tourism() {
  return (
    <section className="bg-gradient-to-b from-[#52A355]/20 to-white py-16 w-full">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-[#01791A]">
            Descubre Maunabo
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explora los hermosos paisajes, playas y atracciones turísticas que
            nuestro municipio tiene para ofrecer
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {attractions.map((attraction) => (
            <div
              key={attraction.title}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={attraction.image || "/placeholder.svg"}
                alt={attraction.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {attraction.title}
                </h3>
                <Button
                  asChild
                  variant="link"
                  className="p-0 text-[#ffd300] hover:text-[#efb130]"
                >
                  <Link href={attraction.href}>
                    Explorar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-[#01791A] hover:bg-[#52A355]">
            <Link href="/turismo">Ver todas las atracciones</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
