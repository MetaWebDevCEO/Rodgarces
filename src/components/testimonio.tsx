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
    },
    {
      quote: "El maestro Rodrigo ha sido un guía para mí y su influencia en mi proceso de vida es de mucha ayuda. Su esencia es única, su optimismo siempre es contagiado a los demás y sus grandes consejos siempre son hechos con el corazón.",
      author: "Karen López Alcántara",
      role: "Estudiante de la Universidad Cristóbal Colón",
      initial: "K"
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex flex-col justify-between bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <blockquote className="text-sm text-gray-700 leading-relaxed mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-x-3 mt-auto">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                    {testimonial.initial}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-gray-900 truncate">{testimonial.author}</div>
                    <div className="text-xs leading-tight text-gray-600 line-clamp-2">{testimonial.role}</div>
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
