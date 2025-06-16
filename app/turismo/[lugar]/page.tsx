import { Navbar } from "@/app/myComponents/NavBar";
import { Footer } from "@/app/myComponents/Footer";
import { AttractionDetail } from "@/app/myComponents/turismo/atraction-details";
import { RelatedAttractions } from "@/app/myComponents/turismo/realted-attractions";
import { notFound } from "next/navigation";
import { getAttraction, getAllAttractionSlugs } from "@/lib/atractions";
import type { Metadata } from "next";

// Generate static params for all attractions
export async function generateStaticParams() {
  const slugs = getAllAttractionSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each attraction page
export async function generateMetadata({
  params,
}: {
  params: { lugar: string };
}): Promise<Metadata> {
  const { lugar } = await params;
  const attraction = getAttraction(lugar);

  if (!attraction) {
    return {
      title: "Atracción no encontrada | Turismo en Maunabo",
      description:
        "La atracción turística que busca no se encuentra disponible.",
    };
  }

  return {
    title: `${attraction.name} | Turismo en Maunabo`,
    description: attraction.shortDescription,
    openGraph: {
      title: `${attraction.name} | Turismo en Maunabo, Puerto Rico`,
      description: attraction.shortDescription,
      images: [attraction.images[0]],
    },
  };
}

export default function AttractionPage({
  params,
}: {
  params: { lugar: string };
}) {
  const { lugar } = params;
  const attraction = getAttraction(lugar);

  if (!attraction) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <AttractionDetail attraction={attraction} />
      <RelatedAttractions currentSlug={params.lugar} />
      <Footer />
    </main>
  );
}
