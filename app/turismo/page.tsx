import { Navbar } from "@/app/myComponents/NavBar";
import { Footer } from "@/app/myComponents/Footer";
import { TourismHero } from "@/app/myComponents/turismo/hero-turismo";
import { AttractionsList } from "@/app/myComponents/turismo/attraction-list";
import { TourismCTA } from "@/app/myComponents/turismo/cta-turismo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turismo en Maunabo | Descubre Nuestras Atracciones",
  description:
    "Explora las hermosas playas, monumentos históricos y atracciones naturales que Maunabo, Puerto Rico tiene para ofrecer.",
  openGraph: {
    title: "Turismo en Maunabo | Puerto Rico",
    description: "Descubre las maravillas turísticas de Maunabo, Puerto Rico",
    images: ["/images/maunabo-tourism.jpg"],
  },
};

export default function TourismPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <TourismHero />
      <AttractionsList />
      <TourismCTA />
      <Footer />
    </main>
  );
}
