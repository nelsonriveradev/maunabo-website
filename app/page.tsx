import { CTA } from "@/app/myComponents/Cta";
import { Footer } from "@/app/myComponents/Footer";
import { Hero } from "@/app/myComponents/Hero";
import { Navbar } from "@/app/myComponents/NavBar";
// import { News } from "@/app/myComponents/News";
// import { Services } from "@/app/myComponents/Services";
import { Tourism } from "@/app/myComponents/tourism";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      {/* <Services /> */}
      <Tourism />
      {/* <News /> */}
      <CTA />
      <Footer />
    </main>
  );
}
