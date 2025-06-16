import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const news = [
  {
    title: "Inauguración del nuevo centro comunitario",
    description:
      "El alcalde inauguró el nuevo centro comunitario que beneficiará a más de 500 familias del sector.",
    date: "15 mayo, 2025",
    image: "/placeholder.svg?height=200&width=400",
    href: "/noticias/centro-comunitario",
  },
  {
    title: "Programa de reciclaje escolar",
    description:
      "Las escuelas de Maunabo se unen al programa municipal de reciclaje para crear conciencia ambiental.",
    date: "10 mayo, 2025",
    image: "/placeholder.svg?height=200&width=400",
    href: "/noticias/reciclaje-escolar",
  },
  {
    title: "Festival de la Pana 2025",
    description:
      "Prepárese para el Festival de la Pana que se celebrará el próximo mes en la plaza pública.",
    date: "5 mayo, 2025",
    image: "/placeholder.svg?height=200&width=400",
    href: "/noticias/festival-pana",
  },
];

export function News() {
  return (
    <section className="bg-white py-16 w-full">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-[#01791A]">
              Últimas Noticias
            </h2>
            <p className="text-lg text-gray-600">
              Mantente informado sobre lo que sucede en nuestro municipio
            </p>
          </div>
          <Button
            asChild
            className="mt-4 bg-[#01791A] hover:bg-[#52A355] md:mt-0"
          >
            <Link href="/noticias">
              Ver todas las noticias
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.title} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardDescription>{item.date}</CardDescription>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="link"
                  className="px-0 text-[#01791A] hover:text-[#52A355]"
                >
                  <Link href={item.href}>
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
