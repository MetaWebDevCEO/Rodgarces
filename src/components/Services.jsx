import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Conferencias",
      description: "Nunca te canses de comenzar de nuevo • Liderazgo en el Servicio • Productividad Personal • ¿Cómo vivir el proceso del duelo?",
      image: "/public/img/F1.jpg",
      buttonText: "Más Información",
      size: "large",
      gridArea: "conferencias"
    },
    {
        id: 2,
        title: "Talleres",
        description: "Quítate el curita del corazón • Liderazgo en Acción: Creando Sinergia en tu Equipo • Guiando con Propósito • Descubre tu Misión",
        image: "/public/img/F1.jpg",
        buttonText: "Más Información",
        size: "medium",
        gridArea: "talleres"
      },
      {
        id: 3,
        title: "Consultorías",
        description: "Acompañamiento personalizado para procesos de duelo, desarrollo de liderazgo y crecimiento espiritual",
        image: "/public/img/F1.jpg",
        buttonText: "Más Información",
        size: "medium",
        gridArea: "consultorias"
      },
      {
        id: 4,
        title: "Capacitaciones",
        description: "¿Cómo formar hijos fuertes en un mundo frágil? • Conferencias personalizadas • Formación integral",
        image: "/public/img/F1.jpg",
        buttonText: "Más Información",
        size: "small",
        gridArea: "capacitaciones"
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

        {/* Bento Grid */}
        <div className="bento-grid">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`bento-card bento-card-${service.size}`}
              style={{ gridArea: service.gridArea }}
            >
              <div className="bento-background-image">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="bento-bg-img"
                />
              </div>
              <div className="bento-overlay"></div>
              <div className="bento-content">
                <h3 className="bento-title">{service.title}</h3>
                <p className="bento-description">{service.description}</p>
                <button className="bento-button">
                  <span>{service.buttonText}</span>
                  <svg className="bento-arrow" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;