import "./problema.css";

const Problema = () => {
  return (
    <section className="problema-section min-h-[90vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{ 
            backgroundImage: "url('https://i.imgur.com/OZj3NVX.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%'
          }}
        ></div>
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Big Headline */}
          <div className="flex flex-col">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#094293] leading-tight uppercase tracking-widest fade-in-up">
              Cuando la vida cambia, necesitamos guía para seguir avanzando.
            </h2>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col space-y-8 text-lg text-gray-700 leading-relaxed fade-in-up delay-200">
            <p className="font-medium text-gray-800">
              Las personas y comunidades enfrentan desafíos que pueden dejarlas sin claridad:
            </p>

            <ul className="space-y-4 list-none">
              <li className="flex items-start fade-in-up delay-300">
                <span className="mr-3 text-[#094293] font-bold">•</span>
                <span>
                  <strong className="text-[#094293]">Liderazgo:</strong> instituciones y jóvenes que buscan propósito y dirección.
                </span>
              </li>
              <li className="flex items-start fade-in-up delay-400">
                <span className="mr-3 text-[#094293] font-bold">•</span>
                <span>
                  <strong className="text-[#094293]">Duelo:</strong> heridas profundas que detienen la vida y el corazón.
                </span>
              </li>
              <li className="flex items-start fade-in-up delay-500">
                <span className="mr-3 text-[#094293] font-bold">•</span>
                <span>
                  <strong className="text-[#094293]">Crianza:</strong> padres que desean hacerlo bien, pero no siempre encuentran el camino.
                </span>
              </li>
            </ul>

            <div className="space-y-4 fade-in-up delay-500">
              <p>
                La incertidumbre puede paralizar, especialmente cuando un nuevo comienzo parece abrumador.
              </p>
              <p className="font-semibold text-gray-900">
                No tienes que recorrer este camino solo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problema;
