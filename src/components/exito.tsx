'use client';
import Image from 'next/image';
import './exito.css';

export default function Exito() {
  const benefits = [
    "Lideras con propósito",
    "Sanas tu corazón",
    "Fortaleces tu familia",
    "Encuentras claridad",
    "Inspirar a otros se vuelve natural",
    "Tu vida da un giro hacia la esperanza"
  ];

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2 lg:items-center">
          
          <div className="lg:pr-8 fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight text-[#094293] sm:text-4xl font-display mb-8">
              Imagina lo que puede pasar cuando eliges comenzar de nuevo
            </h2>
            
            <ul role="list" className="mt-8 space-y-4 text-gray-600">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex gap-x-3 items-center">
                  <svg className="h-6 w-5 flex-none text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-l-4 border-gray-900 pl-6 py-2">
              <p className="text-xl font-semibold text-[#094293] italic">
                Cada inicio tiene un poder inmenso. <br/>
                Estoy aquí para acompañarte.
              </p>
            </div>
          </div>

          <div className="relative fade-in-up delay-200">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
               <img 
                src="https://i.imgur.com/oXl9Cy7.jpg" 
                alt="Grupo de personas felices y unidas" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gray-900/10 mix-blend-multiply"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full bg-gray-100 rounded-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
