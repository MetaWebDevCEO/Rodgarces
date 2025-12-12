import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problema from "@/components/problema";
import Guia from "@/components/guia";
import Plan from "@/components/plan";
import Testimonio from "@/components/testimonio";
import Exito from "@/components/exito";

import Consecuencias from "@/components/consecuencias";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Problema />
      <Guia />
      <Plan />
      <Testimonio />
      <Consecuencias />
      <Exito />
      <Footer />
    </main>
  );
}


