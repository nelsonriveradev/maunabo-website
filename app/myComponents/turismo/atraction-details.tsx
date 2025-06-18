"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  DollarSign,
  ShipWheelIcon as Wheelchair,
  Calendar,
  AlertTriangle,
  Star,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Attraction } from "@/lib/atractions";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AttractionDetailProps {
  attraction: Attraction;
}

export function AttractionDetail({ attraction }: AttractionDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % attraction.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + attraction.images.length) % attraction.images.length
    );
  };

  return (
    <article>
      {/* Breadcrumb */}
      <div className="bg-maunabo-white py-4">
        <div className="container mx-auto">
          <nav className="text-sm text-gray-500">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-[#01791A]">
                  Inicio
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/turismo" className="hover:text-[#01791A]">
                  Turismo
                </Link>
              </li>
              <li>/</li>
              <li className="text-[#01791A] font-medium">{attraction.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section with Image Gallery */}
      <section className="bg-maunabo-white">
        <div className="container py-8 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
              width={800}
              height={800}
                src={attraction.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${attraction.name} - Imagen ${currentImageIndex + 1}`}
                className="h-full w-full object-cover"
              />

              {/* Image Navigation */}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-black/30 text-white hover:bg-black/50"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Imagen anterior</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-black/30 text-white hover:bg-black/50"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Imagen siguiente</span>
                </Button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
                {currentImageIndex + 1} / {attraction.images.length}
              </div>
            </div>

            {/* Attraction Info */}
            <div className="flex flex-col justify-between mx-auto">
              <div className="">
                <div className="mb-4 flex items-center justify-between mx-auto">
                  <Badge className="bg-[#52A355]">{attraction.category}</Badge>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center text-amber-500">
                      <Star className="h-5 w-5 fill-current" />
                      <span className="ml-1 font-medium">
                        {attraction.rating}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-500 hover:text-[#01791A]"
                    >
                      <Heart className="h-5 w-5" />
                      <span className="sr-only">Guardar como favorito</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-500 hover:text-[#01791A]"
                    >
                      <Share2 className="h-5 w-5" />
                      <span className="sr-only">Compartir</span>
                    </Button>
                  </div>
                </div>

                <h1 className="mb-4 text-3xl font-bold text-[#01791A] md:text-4xl">
                  {attraction.name}
                </h1>

                <div className="mb-6 flex items-start gap-2 text-gray-600">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#52A355]" />
                  <p>{attraction.location.address}</p>
                </div>

                <div className="mb-6 space-y-4">
                  {attraction.shortDescription && (
                    <p className="text-lg font-medium text-gray-700">
                      {attraction.shortDescription}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {attraction.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-gray-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <Button asChild className="bg-[#01791A] hover:bg-[#52A355]">
                  <Link
                    href={`https://maps.google.com/?q=${attraction.location.coordinates.lat},${attraction.location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Cómo Llegar
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#52A355] text-[#01791A] hover:bg-[#52A355] hover:text-white"
                >
                  <Link href="/contacto">
                    <Phone className="mr-2 h-4 w-4" />
                    Contactar
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
            {attraction.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={cn(
                  "flex-shrink-0 overflow-hidden rounded",
                  currentImageIndex === index
                    ? "ring-2 ring-[#FFD300]"
                    : "opacity-70 hover:opacity-100"
                )}
              >
                <Image
                width={96}
                height={96}
                  src={image || "/placeholder.svg"}
                  alt={`${attraction.name} - Miniatura ${index + 1}`}
                  className="h-16 w-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information Tabs */}
      <section className="bg-white py-12 mx-auto">
        <div className="container mx-auto">
          <Tabs defaultValue="description" className="w-full ">
            <TabsList className="mb-8 flex bg-maunabo-white overflow-x-scroll w-5/6 mx-auto">
              <TabsTrigger value="description">Descripción</TabsTrigger>
              <TabsTrigger value="visitor-info">
                Información para Visitantes
              </TabsTrigger>
              <TabsTrigger value="amenities">Facilidades</TabsTrigger>
              <TabsTrigger value="location">Ubicación</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <div className="prose max-w-none w-full">
                    {attraction.fullDescription
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p key={index} className="mb-4 mx-auto">
                          {paragraph}
                        </p>
                      ))}
                  </div>

                  {/* Contact Information */}
                  <div className="mt-8 rounded-lg bg-maunabo-white p-6 mx-auto">
                    <h3 className="mb-4 text-xl font-bold text-[#01791A]">
                      Información de Contacto
                    </h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      {attraction.contact.phone && (
                        <div className="flex items-start gap-3">
                          <Phone className="mt-1 h-5 w-5 text-[#52A355]" />
                          <div>
                            <p className="font-medium">Teléfono</p>
                            <p className="text-gray-600">
                              {attraction.contact.phone}
                            </p>
                          </div>
                        </div>
                      )}

                      {attraction.contact.email && (
                        <div className="flex items-start gap-3">
                          <Mail className="mt-1 h-5 w-5 text-[#52A355]" />
                          <div>
                            <p className="font-medium">Correo Electrónico</p>
                            <p className="text-gray-600">
                              {attraction.contact.email}
                            </p>
                          </div>
                        </div>
                      )}

                      {attraction.contact.website && (
                        <div className="flex items-start gap-3">
                          <Globe className="mt-1 h-5 w-5 text-[#52A355]" />
                          <div>
                            <p className="font-medium">Sitio Web</p>
                            <a
                              href={attraction.contact.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#01791A] hover:underline"
                            >
                              Visitar Sitio Web
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="visitor-info" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <div className="flex items-start gap-3">
                        <Clock className="mt-1 h-5 w-5 text-[#52A355]" />
                        <div>
                          <p className="font-medium">Horario</p>
                          <p className="text-gray-600">
                            {attraction.visitorInfo.hours}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <DollarSign className="mt-1 h-5 w-5 text-[#52A355]" />
                        <div>
                          <p className="font-medium">Tarifas</p>
                          <p className="text-gray-600">
                            {attraction.visitorInfo.fees}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Wheelchair className="mt-1 h-5 w-5 text-[#52A355]" />
                        <div>
                          <p className="font-medium">Accesibilidad</p>
                          <p className="text-gray-600">
                            {attraction.visitorInfo.accessibility}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="mt-1 h-5 w-5 text-[#52A355]" />
                        <div>
                          <p className="font-medium">
                            Mejor Época para Visitar
                          </p>
                          <p className="text-gray-600">
                            {attraction.visitorInfo.bestTimeToVisit}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="mt-1 h-5 w-5 text-[#52A355]" />
                        <div>
                          <p className="font-medium">
                            Consejos para Visitantes
                          </p>
                          <ul className="mt-2 list-inside list-disc space-y-1 text-gray-600">
                            {attraction.visitorInfo.tips.map((tip, index) => (
                              <li key={index}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="amenities" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-bold text-[#01791A]">
                    Facilidades Disponibles
                  </h3>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {attraction.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#52A355]/10 text-[#52A355]">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="location" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-6 text-xl font-bold text-[#01791A]">
                    Ubicación
                  </h3>

                  <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                    {/* Placeholder for map - in a real implementation, you would use Google Maps, Mapbox, or similar */}
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#52A355]/20 flex items-center justify-center">
                          <MapPin className="h-8 w-8 text-[#01791A]" />
                        </div>
                        <h3 className="text-lg font-semibold text-[#01791A]">
                          {attraction.name}
                        </h3>
                        <p className="text-gray-600">
                          {attraction.location.address}
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                          Coordenadas: {attraction.location.coordinates.lat},{" "}
                          {attraction.location.coordinates.lng}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-medium text-[#01791A]">
                        Cómo Llegar
                      </h4>
                      <p className="text-gray-600">
                        Desde San Juan, tome la PR-52 Sur hasta la PR-53 Este
                        hacia Yabucoa. Continúe por la PR-3 Este hasta Maunabo y
                        siga las indicaciones hacia {attraction.name}.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-medium text-[#01791A]">
                        Estacionamiento
                      </h4>
                      <p className="text-gray-600">
                        Estacionamiento gratuito disponible en el lugar. Se
                        recomienda llegar temprano durante temporada alta y
                        fines de semana.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button asChild className="bg-[#01791A] hover:bg-[#52A355]">
                      <Link
                        href={`https://maps.google.com/?q=${attraction.location.coordinates.lat},${attraction.location.coordinates.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Ver en Google Maps
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristAttraction",
            name: attraction.name,
            description: attraction.shortDescription,
            url: `https://www.maunabo.pr.gov/turismo/${attraction.slug}`,
            image: attraction.images[0],
            address: {
              "@type": "PostalAddress",
              streetAddress: attraction.location.address,
              addressLocality: "Maunabo",
              addressRegion: "PR",
              postalCode: "00707",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: attraction.location.coordinates.lat,
              longitude: attraction.location.coordinates.lng,
            },
            openingHours: attraction.visitorInfo.hours,
            telephone: attraction.contact.phone,
          }),
        }}
      />
    </article>
  );
}
