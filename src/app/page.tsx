import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problema from "@/components/problema";
import Consecuencias from "@/components/consecuencias";
import Guia from "@/components/guia";
import Plan from "@/components/plan";
import Exito from "@/components/exito";
import Testimonio from "@/components/testimonio";
import CTAFinal from "@/components/cta-final";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Problema />
      <Consecuencias />
      <Guia />
      <Plan />
      <Exito />
      <Testimonio />
      <CTAFinal />
      <Footer />
    </main>
  );
}