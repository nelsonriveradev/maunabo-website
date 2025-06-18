import { CTA } from "@/app/myComponents/Cta";
import { Hero } from "@/app/myComponents/Hero";
// import { News } from "@/app/myComponents/News";
// import { Services } from "@/app/myComponents/Services";
import { Tourism } from "@/app/myComponents/tourism";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      {/* <Services /> */}
      <Tourism />
      {/* <News /> */}
      <CTA />
    </main>
  );
}
