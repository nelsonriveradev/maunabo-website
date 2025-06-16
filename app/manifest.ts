import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Municipio de Maunabo",
    short_name: "Maunabo",
    description: "Portal oficial de la Ciudad de Maunabo, Puerto Rico",
    start_url: "/",
    display: "standalone",
    background_color: "#01791A",
    theme_color: "#01791A",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
