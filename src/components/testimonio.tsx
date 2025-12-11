'use client';

import { useState, useEffect } from 'react';
import './testimonio.css';

interface Testimonial {
  id: number;
  text: string;
  author: string; // Since author names weren't explicitly provided for all, I'll make generic ones or extract if implied.
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Rod nos ayudó a entender que los nuevos comienzos pueden ser hermosos...",
    author: "Participante de Taller",
    role: "Emprendedor"
  },
  {
    id: 2,
    text: "Su conferencia de liderazgo cambió la forma en que nuestros estudiantes…",
    author: "Director Académico",
    role: "Institución Educativa"
  },
  {
    id: 3,
    text: "Como padre, escuchar a Rod me dio claridad, paz y herramientas reales.",
    author: "Padre de Familia",
    role: "Asistente a Conferencia"
  }
];

export default function Testimonio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-24 sm:py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-lg font-semibold text-gray-900 tracking-wider uppercase">
            Testimonios
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
            Historias que inspiran
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto fade-in-up delay-200">
          <div className="overflow-hidden">
            <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <blockquote className="text-xl sm:text-2xl font-medium text-gray-900 max-w-2xl leading-relaxed italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    <div className="mt-6">
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      {testimonial.role && (
                        <div className="text-gray-500 text-sm mt-1">{testimonial.role}</div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-colors focus:outline-none"
                aria-label="Anterior testimonio"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                            index === currentIndex ? 'bg-gray-900' : 'bg-gray-200 hover:bg-gray-400'
                        }`}
                        aria-label={`Ir al testimonio ${index + 1}`}
                    />
                ))}
            </div>

            <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-900 transition-colors focus:outline-none"
                aria-label="Siguiente testimonio"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
