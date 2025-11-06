import React, { useEffect, useRef } from 'react';
import './Goals.css';

// Semblanza de Rod Garcés: secciones con imagen y texto
const services = [
  {
    title: 'Cada nuevo comienzo',
    desc: 'Rod Garcés está convencido de que cada nuevo comienzo es una oportunidad para transformar la vida. Su pasión es acompañar a las personas a sanar, crecer y redescubrir su propósito desde la fe, el amor y la esperanza.',
    img: '/src/img/img1.jpg',
    icon: '',
    color: 'blue',
  },
  {
    title: 'Conferencista, escritor y formador',
    desc: 'Conferencista, escritor y formador, ha dedicado su vida a inspirar procesos de desarrollo humano y espiritual.',
    img: '/src/img/img3.jpg',
    icon: '',
    color: 'green',
  },
  {
    title: 'Obras publicadas',
    desc: 'Es autor de "Nunca te canses de comenzar de nuevo", donde comparte su experiencia personal atravesando el duelo y las enseñanzas que nacen del dolor cuando se decide volver a levantarse; y de "La aventura de ser papá", una mirada entrañable sobre la paternidad, el amor y esos pequeños instantes que revelan los grandes significados de la vida.',
    img: '/src/img/img5.jpg',
    icon: '',
    color: 'purple',
  },
  {
    title: 'Liderazgo juvenil',
    desc: 'Con más de quince años de experiencia formando líderes juveniles, Rod impulsa espacios donde los jóvenes descubren su misión, reconocen sus talentos y aprenden a impactar positivamente en su comunidad y en quienes los rodean.',
    img: '/src/img/img6.jpg',
    icon: '',
    color: 'orange',
  },
];

function Goals() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="goals" className="goals">
      <div className="goals-container">
        <p className="goals-subtitle fade-in">SEMBLANZA</p>
        <h2 className="goals-title fade-in delay-1">Semblanza de Rod Garcés</h2>
        <div className="services-grid">
          {services.map((service, i) => (
            <article
              className={`service-card ${i % 2 === 0 ? 'image-top' : 'image-bottom'} color-${service.color}`}
              key={service.title}
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="service-image">
                <img src={service.img} alt={service.title} loading="lazy" />
              </div>
              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <button className="know-more-btn">▶ Leer más</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Goals;

