import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* confimig options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "boricuaonline.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  }
};

export default nextConfig;
