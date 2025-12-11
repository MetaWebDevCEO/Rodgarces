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
              Conferencias que transforman vidas e inspiran nuevos comienzos
            </h1>
            <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Liderazgo */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 conference-card fade-in-up delay-100 flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
                  01
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Liderazgo</h2>
                <p className="text-gray-600 mb-6">
                  Conferencias y talleres para jóvenes, docentes, organizaciones y comunidades que buscan liderazgo con propósito.
                </p>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Temas destacados</h3>
                <ul className="text-gray-600 topic-list space-y-2">
                  <li>El gran reto del liderazgo auténtico</li>
                  <li>Liderazgo en el servicio</li>
                  <li>Voluntariado: la mejor escuela de liderazgo</li>
                  <li>Ikigai y sentido de vida para jóvenes</li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <Link 
                  href="/contacto" 
                  className="block w-full text-center bg-gray-900 text-white font-medium py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Solicitar conferencia
                </Link>
              </div>
            </div>

            {/* 2. Duelo y Sanación */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 conference-card fade-in-up delay-200 flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-semibold mb-4">
                  02
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Duelo y Sanación</h2>
                <p className="text-gray-600 mb-6">
                  Mensajes profundos, sensibles y esperanzadores para quienes atraviesan pérdidas o procesos de reconstrucción emocional.
                </p>
                
                <div className="bg-purple-50 p-4 rounded-xl mb-6">
                  <h3 className="text-sm font-bold text-purple-900 uppercase tracking-wider mb-1">Conferencia principal</h3>
                  <p className="font-semibold text-gray-900 italic">"Nunca te canses de comenzar de nuevo"</p>
                  <p className="text-sm text-gray-600 mt-1">Una conferencia para transformar el dolor en esperanza.</p>
                </div>

                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Otros temas</h3>
                <ul className="text-gray-600 topic-list space-y-2">
                  <li>Claves para vivir un duelo</li>
                  <li>Quítate el curita del corazón</li>
                  <li>Encontrar sentido en medio del dolor</li>
                  <li>Reconstruirse con fe, amor y resiliencia</li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <Link 
                  href="/contacto" 
                  className="block w-full text-center bg-gray-900 text-white font-medium py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Solicitar conferencia
                </Link>
              </div>
            </div>

            {/* 3. Crianza y Familia */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 conference-card fade-in-up delay-300 flex flex-col">
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-semibold mb-4">
                  03
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-display">Crianza y Familia</h2>
                <p className="text-gray-600 mb-6">
                  Acompañamiento para padres, educadores y comunidades que buscan fortalecer vínculos y construir familias sólidas.
                </p>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Temas destacados</h3>
                <ul className="text-gray-600 topic-list space-y-2">
                  <li>La aventura de ser papá</li>
                  <li>Pistas para transmitir la fe y educar a tus hijos</li>
                  <li>La ecuación de la unión familiar</li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <Link 
                  href="/contacto" 
                  className="block w-full text-center bg-gray-900 text-white font-medium py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors"
                >
                  Solicitar conferencia
                </Link>
              </div>
            </div>

          </div>

          {/* Footer CTA */}
          <div className="mt-20 text-center bg-white rounded-3xl p-10 md:p-16 shadow-sm border border-gray-100 fade-in-up delay-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              ¿Quieres conocer más de mi trabajo?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              También soy autor de dos libros que han acompañado a cientos de personas.
            </p>
            <Link 
              href="/libros" 
              className="inline-flex items-center justify-center bg-white text-gray-900 border-2 border-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105"
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
