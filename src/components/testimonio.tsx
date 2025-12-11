'use client';

import './testimonio.css';

const Testimonio = () => {
  const testimonials = [
    {
      quote: "Gracias a sus conferencias, logré encontrar un nuevo propósito después de una pérdida difícil. Su mensaje es sanador y lleno de esperanza.",
      author: "María González",
      role: "Asistente a conferencia",
      initial: "M"
    },
    {
      quote: "Las herramientas de liderazgo que comparte son prácticas y muy profundas. Transformó la manera en que dirijo mi equipo.",
      author: "Carlos Ramírez",
      role: "Director de Organización",
      initial: "C"
    },
    {
      quote: "Una guía invaluable para la crianza. Me ayudó a conectar mejor con mis hijos y entender mi rol como padre desde el amor.",
      author: "Ana Martínez",
      role: "Madre de familia",
      initial: "A"
    }
  ];

  return (
    <section className="bg-white py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center fade-in-up">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-600 uppercase">Testimonios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display">
            Lo que dicen quienes han vivido la experiencia
          </p>
        </div>
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none fade-in-up delay-200">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <blockquote className="text-gray-700 leading-7 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-x-4 mt-auto">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm leading-6 text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonio;
