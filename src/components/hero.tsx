import Link from "next/link";
import "./hero.css";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-in"
          style={{ backgroundImage: "url('https://i.imgur.com/hcSBDUO.jpg')" }}
        ></div>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40 animate-fade-in"></div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Text Content */}
        <div className="mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm shadow-sm mb-6">
            <span className="text-sm font-medium text-white">
              Escritor | Conferencista | Formador
            </span>
          </div>
          
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl fade-in-up delay-100 drop-shadow-lg">
            <span className="block">Te ayudo a transformar</span>
            <span className="block text-blue-200">cada nuevo comienzo</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 font-normal text-gray-100">en una oportunidad para tu vida.</span>
          </h1>
          
          <p className="mt-6 text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto fade-in-up delay-200 drop-shadow-md">
            Soy conferencista, escritor y formador. Acompaño a personas, familias, jóvenes y comunidades a encontrar esperanza, dirección y crecimiento en tres áreas fundamentales: liderazgo, duelo y crianza.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center fade-in-up delay-300">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-gray-900 bg-white hover:bg-gray-100 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Agenda una conferencia
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
