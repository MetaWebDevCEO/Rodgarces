import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Conferencias",
      description: "Nunca te canses de comenzar de nuevo • Liderazgo en el Servicio • Productividad Personal • ¿Cómo vivir el proceso del duelo?",
      image: "/public/img/F1.jpg",
      buttonText: "Más Información"
    },
    {
        id: 2,
        title: "Talleres",
        description: "Quítate el curita del corazón • Liderazgo en Acción: Creando Sinergia en tu Equipo • Guiando con Propósito • Descubre tu Misión",
        image: "/public/img/F1.jpg",
        buttonText: "Más Información"
      },
      {
        id: 3,
        title: "Consultorías",
        description: "Acompañamiento personalizado para procesos de duelo, desarrollo de liderazgo y crecimiento espiritual",
        image: "/public/img/F1.jpg",
        buttonText: "Más Información"
      },
      {
        id: 4,
        title: "Capacitaciones",
        description: "¿Cómo formar hijos fuertes en un mundo frágil? • Conferencias personalizadas • Formación integral",
        image: "/public/img/F1.jpg",
        buttonText: "Más Información"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <p className="services-subtitle">SERVICIOS CON PROPÓSITO</p>
          <h2 className="services-title">Áreas de Enfoque Especializado</h2>
          <p className="services-description">
            Conferencias, talleres, consultorías y capacitaciones enfocadas en el crecimiento personal, liderazgo y acompañamiento en procesos de vida
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-button">
                {service.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="services-navigation">
          <button className="nav-arrow nav-prev">←</button>
          <button className="nav-arrow nav-next">→</button>
        </div>
      </div>
    </section>
  );
};

export default Services;