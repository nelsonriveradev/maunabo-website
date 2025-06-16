"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";
import Link from "next/link";
import { getAllAttractions, getAllCategories } from "@/lib/atractions";

export function AttractionsList() {
  const attractions = getAllAttractions();
  const categories = getAllCategories();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredAttractions = activeCategory
    ? attractions.filter((attraction) => attraction.category === activeCategory)
    : attractions;

  return (
    <section className="bg-maunabo-white py-16 ">
      <div className="container mx-auto ">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#01791A]">
            Atracciones Turísticas
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explora los tesoros naturales, históricos y culturales que Maunabo
            tiene para ofrecer
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              className={
                activeCategory === null
                  ? "bg-[#01791A] hover:bg-[#52A355]"
                  : "border-[#52A355] text-[#01791A] hover:bg-[#52A355] hover:text-white"
              }
              onClick={() => setActiveCategory(null)}
            >
              Todos
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-[#01791A] hover:bg-[#52A355]"
                    : "border-[#52A355] text-[#01791A] hover:bg-[#52A355] hover:text-white"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAttractions.map((attraction) => (
            <Link key={attraction.id} href={`/turismo/${attraction.slug}`}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={attraction.images[0] || "/placeholder.svg"}
                    alt={attraction.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="border-[#52A355] text-[#01791A]"
                    >
                      {attraction.category}
                    </Badge>
                    <div className="flex items-center text-amber-500">
                      <Star className="mr-1 h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">
                        {attraction.rating}
                      </span>
                    </div>
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
