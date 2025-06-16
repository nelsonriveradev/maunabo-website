import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getRelatedAttractions } from "@/lib/atractions";
import Image from "next/image";

interface RelatedAttractionsProps {
  currentSlug: string;
}

export function RelatedAttractions({ currentSlug }: RelatedAttractionsProps) {
  const relatedAttractions = getRelatedAttractions(currentSlug);

  if (relatedAttractions.length === 0) {
    return null;
  }

  return (
    <section className="bg-maunabo-white py-16 mx-auto">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h2 className="text-2xl font-bold text-[#01791A]">
            Atracciones Relacionadas
          </h2>
          <Button
            asChild
            variant="outline"
            className="border-[#52A355] text-[#01791A] hover:bg-[#52A355] hover:text-white"
          >
            <Link href="/turismo">
              Ver Todas las Atracciones
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedAttractions.map((attraction) => (
            <Link key={attraction.id} href={`/turismo/${attraction.slug}`}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={attraction.images[0] || "/placeholder.svg"}
                    alt={attraction.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge
                      variant="outline"
                      className="border-[#52A355] text-[#01791A]"
                    >
                      {attraction.category}
                    </Badge>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-[#01791A]">
                    {attraction.name}
                  </h3>
                  <p className="mb-4 text-gray-600">
                    {attraction.shortDescription}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{attraction.location.address}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
