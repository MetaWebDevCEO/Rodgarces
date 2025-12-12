import Link from "next/link";
import "./plan.css";

const Plan = () => {
  return (
    <section className="plan-section relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/IZz5IhF.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Headline and CTA */}
          <div className="flex flex-col space-y-8 fade-in-up relative lg:sticky lg:top-24 text-center lg:text-left">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#094293] leading-[1.1] uppercase tracking-tight">
              <span className="block lg:whitespace-nowrap">Tu nuevo comienzo</span>
              <span className="block lg:whitespace-nowrap">es más sencillo</span>
              <span className="block lg:whitespace-nowrap">de lo que crees.</span>
            </h2>

            <div className="pt-4 flex justify-center lg:justify-start">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-900 text-base font-medium rounded-full text-gray-900 bg-white/50 backdrop-blur-sm hover:bg-gray-900 hover:text-white transition-all duration-300 w-full sm:w-auto shadow-sm"
              >
                Quiero iniciar este camino
              </Link>
            </div>
          </div>

          {/* Right Column: Steps List */}
          <div className="flex flex-col space-y-0 border-l border-gray-200">
            {/* Step 1 */}
            <div className="pl-8 pb-12 relative fade-in-up delay-100 group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-300 group-hover:bg-gray-900 transition-colors duration-300"></div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Paso 01</span>
              <h3 className="text-2xl font-bold text-[#094293] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                Conecta conmigo
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Agenda una llamada o solicita una conferencia. Es el momento de abrir la puerta a nuevas posibilidades.
              </p>
            </div>

            {/* Step 2 */}
            <div className="pl-8 pb-12 relative fade-in-up delay-200 group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-300 group-hover:bg-gray-900 transition-colors duration-300"></div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Paso 02</span>
              <h3 className="text-2xl font-bold text-[#094293] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                Definimos lo que necesitas
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Diseño un mensaje o proceso adaptado a tu comunidad, grupo o institución. Personalizado para tu realidad.
              </p>
            </div>

            {/* Step 3 */}
            <div className="pl-8 relative fade-in-up delay-300 group">
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-300 group-hover:bg-gray-900 transition-colors duration-300"></div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2 block">Paso 03</span>
              <h3 className="text-2xl font-bold text-[#094293] mb-3 group-hover:translate-x-1 transition-transform duration-300">
                Vive una transformación real
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md">
                Gana claridad, esperanza y herramientas prácticas para avanzar. El cambio que buscas comienza aquí.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Plan;
