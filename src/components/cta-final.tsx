'use client';

import Link from 'next/link';
import './cta-final.css';

export default function CTAFinal() {
  return (
    <section className="bg-gray-900 py-24 sm:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl translate-x-[-50%] translate-y-[-50%]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl translate-x-[50%] translate-y-[50%]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display mb-4">
            Nunca te canses de comenzar de nuevo.
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Hoy puedes dar el siguiente paso.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 fade-in-up delay-200">
          <Link
            href="#talks"
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
          >
            Agendar conferencia
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
          >
            Contactarme
          </Link>
        </div>
      </div>
    </section>
  );
}
