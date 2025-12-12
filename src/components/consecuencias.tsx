'use client';

import './consecuencias.css';

export default function Consecuencias() {
  const points = [
    "La confusión del liderazgo",
    "El dolor no sanado",
    "La incertidumbre de la crianza",
    "La falta de propósito",
    "La parálisis emocional"
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{ 
            backgroundImage: "url('https://i.imgur.com/igjhGIr.jpg')",
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center fade-in-up">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
            No dejes que la vida avance sin claridad
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sin una guía adecuada, es fácil quedarse atrapado en:
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 fade-in-up delay-200">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-8">
            {points.map((point, index) => (
              <div key={index} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  {point}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 text-center fade-in-up delay-300">
             <p className="text-2xl font-medium text-gray-900 italic">
            Un nuevo comienzo está a tu alcance.
          </p>
        </div>
      </div>
    </section>
  );
}
