import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import './page.css';

const ConferenciaPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              <span className="block">Conferencias que transforman vidas</span>
              <span className="block">e inspiran nuevos comienzos</span>
            </h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Liderazgo */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 conference-card fade-in-up delay-100 flex flex-col min-h-[500px] group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://i.imgur.com/9KxMx3o.jpg" 
                  alt="Liderazgo" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300"></div>
              </div>
              
              <div className="relative z-10 p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-4 border border-white/30">
                    01
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">Liderazgo</h2>
                  <p className="text-gray-200 mb-6 font-medium">
                    Conferencias y talleres para jóvenes, docentes, organizaciones y comunidades que buscan liderazgo con propósito.
                  </p>
                  <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Temas destacados</h3>
                  <ul className="text-gray-200 topic-list space-y-2">
                    <li>El gran reto del liderazgo auténtico</li>
                    <li>Liderazgo en el servicio</li>
                    <li>Voluntariado: la mejor escuela de liderazgo</li>
                    <li>Ikigai y sentido de vida para jóvenes</li>
                  </ul>
                </div>
                <div className="mt-auto pt-6">
                  <Link 
                    href="/contacto" 
                    className="block w-full text-center bg-white text-gray-900 font-medium py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Solicitar conferencia
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Duelo y Sanación */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 conference-card fade-in-up delay-200 flex flex-col min-h-[500px] group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://i.imgur.com/5kViJ4P.jpg" 
                  alt="Duelo y Sanación" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300"></div>
              </div>

              <div className="relative z-10 p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-4 border border-white/30">
                    02
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">Duelo y Sanación</h2>
                  <p className="text-gray-200 mb-6 font-medium">
                    Mensajes profundos, sensibles y esperanzadores para quienes atraviesan pérdidas o procesos de reconstrucción emocional.
                  </p>
                  
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl mb-6 border border-white/20">
                    <h3 className="text-sm font-bold text-white/90 uppercase tracking-wider mb-1">Conferencia principal</h3>
                    <p className="font-semibold text-white italic">"Nunca te canses de comenzar de nuevo"</p>
                    <p className="text-sm text-gray-200 mt-1">Una conferencia para transformar el dolor en esperanza.</p>
                  </div>

                  <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Otros temas</h3>
                  <ul className="text-gray-200 topic-list space-y-2">
                    <li>Claves para vivir un duelo</li>
                    <li>Quítate el curita del corazón</li>
                    <li>Encontrar sentido en medio del dolor</li>
                    <li>Reconstruirse con fe, amor y resiliencia</li>
                  </ul>
                </div>
                <div className="mt-auto pt-6">
                  <Link 
                    href="/contacto" 
                    className="block w-full text-center bg-white text-gray-900 font-medium py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Solicitar conferencia
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Crianza y Familia */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 conference-card fade-in-up delay-300 flex flex-col min-h-[500px] group">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://i.imgur.com/7KTjoRd.jpg" 
                  alt="Crianza y Familia" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-colors duration-300"></div>
              </div>

              <div className="relative z-10 p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-4 border border-white/30">
                    03
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-4 font-display">Crianza y Familia</h2>
                  <p className="text-gray-200 mb-6 font-medium">
                    Acompañamiento para padres, educadores y comunidades que buscan fortalecer vínculos y construir familias sólidas.
                  </p>
                  <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">Temas destacados</h3>
                  <ul className="text-gray-200 topic-list space-y-2">
                    <li>La aventura de ser papá</li>
                    <li>Pistas para transmitir la fe y educar a tus hijos</li>
                    <li>La ecuación de la unión familiar</li>
                  </ul>
                </div>
                <div className="mt-auto pt-6">
                  <Link 
                    href="/contacto" 
                    className="block w-full text-center bg-white text-gray-900 font-medium py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Solicitar conferencia
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Footer CTA */}
          <div className="mt-20 text-center bg-[#094293] rounded-3xl p-10 md:p-16 shadow-lg fade-in-up delay-300">
            <h2 className="text-3xl font-bold text-white mb-4 font-display">
              ¿Quieres conocer más de mi trabajo?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              <span className="block">También soy Autor de dos libros</span>
              <span className="block">que han acompañado a cientos de personas.</span>
            </p>
            <Link 
              href="/libros" 
              className="inline-flex items-center justify-center bg-white text-[#094293] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-md"
            >
              Ver libros
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConferenciaPage;
