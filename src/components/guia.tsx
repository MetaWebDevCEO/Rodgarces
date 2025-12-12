import Link from "next/link";
import "./guia.css";

const Guia = () => {
  return (
    <section className="guia-section py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Image */}
          <div className="relative fade-in-up max-w-sm mx-auto lg:max-w-none">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://i.imgur.com/8zEjB7K.jpg"
                alt="Rodrigo Garcés"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gray-900 rounded-full z-0 opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-gray-200 rounded-full z-0"></div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col space-y-4 text-sm text-gray-700 leading-relaxed fade-in-up delay-200">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight uppercase tracking-tight mb-2">
              <span className="block whitespace-nowrap">He estado ahí.</span>
              <span className="block whitespace-nowrap">Y puedo ayudarte a transformar</span>
              <span className="block whitespace-nowrap">tu historia.</span>
            </h2>

            <p>
              Yo también conozco el dolor del duelo, los retos de la crianza y la responsabilidad de liderar. Mi propia experiencia me enseñó una verdad que hoy guía cada conferencia, libro y programa que comparto:
            </p>
            
            <p className="text-base font-bold text-gray-900 italic">
              Nunca te canses de comenzar de nuevo.
            </p>

            <p>
              Durante más de 15 años he acompañado a estudiantes, familias, instituciones educativas y comunidades religiosas a encontrar herramientas para sanar, crecer y liderar con propósito.
            </p>

            <div>
              <p className="font-semibold text-gray-900 mb-2">
                Soy autor de dos libros que han inspirado a cientos de personas:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800">
                <li>Nunca te canses de comenzar de nuevo</li>
                <li>La aventura de ser papá</li>
              </ul>
            </div>

            <p className="font-medium text-gray-900">
              Mi misión es ayudarte a descubrir la fuerza que nace cuando decides comenzar otra vez.
            </p>

            <div className="pt-2 fade-in-up delay-300">
              <Link
                href="#about"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-gray-900 hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Ver más sobre mí
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Guia;
