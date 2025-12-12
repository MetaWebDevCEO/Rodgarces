import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import './page.css';

const SobreMiPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-display text-[#094293]">
              Sobre mí
            </h1>
            <div className="w-24 h-1 bg-[#094293] mx-auto rounded-full mb-8"></div>
             <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Estoy convencido de que cada nuevo comienzo es una oportunidad para transformar la vida.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-16 text-lg text-gray-700 leading-relaxed fade-in-up delay-100">
            
            {/* Bio Section with Image */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 space-y-8">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <p className="mb-6 text-xl">
                    Mi misión es acompañar a las personas a descubrir la fuerza que surge cuando deciden comenzar de nuevo, ayudándolas a sanar, crecer y redescubrir su propósito desde la fe, el amor y la esperanza.
                  </p>
                  <p className="font-medium text-[#094293] text-lg">
                    Soy conferencista, escritor y formador. He dedicado mi vida a inspirar procesos de desarrollo humano y espiritual.
                  </p>
                </div>
                <p className="text-xl text-gray-600 px-2">
                  Durante más de 15 años he acompañado a estudiantes, familias, instituciones educativas y comunidades religiosas a encontrar herramientas para sanar, crecer y liderar con propósito.
                </p>
              </div>
              <div className="order-1 md:order-2 relative h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://i.imgur.com/HXo9Tv6.jpg" 
                  alt="Rodrigo Garcés Conferencista" 
                  className="w-full h-full object-cover object-[center_25%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#094293]/40 to-transparent"></div>
              </div>
            </div>

            {/* Topics & Books Grid */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              
              {/* Topics */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm h-full">
                <h3 className="text-2xl font-bold text-[#094293] mb-6 font-display">Mis conferencias y talleres</h3>
                <p className="mb-6 text-gray-600">Giran en torno a tres grandes temas:</p>
                <ul className="space-y-4">
                  {['Liderazgo', 'Duelo y sanación', 'Crianza y familia'].map((item) => (
                    <li key={item} className="flex items-center space-x-3 group">
                      <span className="w-2 h-2 bg-[#094293] rounded-full group-hover:scale-125 transition-transform"></span>
                      <span className="font-semibold text-gray-800 text-lg group-hover:text-[#094293] transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl overflow-hidden h-48 relative">
                   <img 
                    src="https://i.imgur.com/akgILUP.jpg" 
                    alt="Conferencia" 
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
              </div>
              
              {/* Books */}
              <div className="bg-[#094293]/5 p-8 rounded-3xl border border-[#094293]/10 h-full">
                <h3 className="text-2xl font-bold text-[#094293] mb-6 font-display">Soy autor de</h3>
                <ul className="space-y-8">
                  <li className="group flex gap-4 items-start">
                    <div className="w-20 flex-shrink-0 shadow-md rounded overflow-hidden">
                      <img src="https://i.imgur.com/AvTQ9me.png" alt="Portada Libro 1" className="w-full h-auto" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block mb-2 text-lg group-hover:text-[#094293] transition-colors">Nunca te canses de comenzar de nuevo</span>
                      <span className="text-base text-gray-600 leading-snug block">Donde comparto mi experiencia personal atravesando el duelo y las enseñanzas que nacen del dolor cuando se decide volver a levantarse.</span>
                    </div>
                  </li>
                  <li className="group flex gap-4 items-start">
                    <div className="w-20 flex-shrink-0 shadow-md rounded overflow-hidden">
                      <img src="https://i.imgur.com/wuLAu7I.png" alt="Portada Libro 2" className="w-full h-auto" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block mb-2 text-lg group-hover:text-[#094293] transition-colors">La aventura de ser papá</span>
                      <span className="text-base text-gray-600 leading-snug block">Una mirada entrañable sobre la paternidad, el amor y esos pequeños instantes que revelan los grandes significados de la vida.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Closing */}
            <div className="text-center pt-16 pb-8 fade-in-up delay-200">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-[#094293]">
                Nunca te canses de comenzar <br />
                de nuevo.
              </h2>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SobreMiPage;
