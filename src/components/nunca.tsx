'use client';

import Link from 'next/link';
import './nunca.css';

const Nunca = () => {
  return (
    <section className="nunca-section py-20 sm:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.imgur.com/hcSBDUO.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 nunca-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-display mb-6 tracking-tight">
            Nunca te canses de comenzar de nuevo
          </h2>
          <p className="text-xl sm:text-2xl text-blue-100 font-medium mb-10 max-w-2xl mx-auto">
            Hoy puedes dar el siguiente paso
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/conferencia"
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#094293] text-base font-bold rounded-full hover:bg-blue-50 transition-all hover:shadow-lg hover:-translate-y-1 text-center"
            >
              Agendar conferencia
            </Link>
            <Link
              href="/contacto"
              className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white text-base font-bold rounded-full hover:bg-white/10 transition-all hover:shadow-lg hover:-translate-y-1 text-center"
            >
              Contactarme 
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nunca;