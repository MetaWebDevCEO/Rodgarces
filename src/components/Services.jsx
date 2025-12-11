import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Estrategia Empresarial",
      description: "Desarrollo de planes estratégicos integrales para optimizar operaciones y acelerar el crecimiento sostenible.",
      icon: "�",
      buttonText: "Conocer más"
    },
    {
      id: 2,
      title: "Liderazgo Ejecutivo",
      description: "Coaching personalizado para líderes que buscan maximizar su impacto y desarrollar equipos de alto rendimiento.",
      icon: "�",
      buttonText: "Conocer más"
    },
    {
      id: 3,
      title: "Innovación y Cambio",
      description: "Transformación organizacional y gestión del cambio para adaptarse a mercados dinámicos y competitivos.",
      icon: "💡",
      buttonText: "Conocer más"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <h2 className="services-title">Servicios de Consultoría</h2>
          <p className="services-description">
            Ofrezco soluciones estratégicas personalizadas para impulsar el crecimiento de tu negocio y maximizar tu potencial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span className="icon-placeholder">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-button">
                <span>{service.buttonText}</span>
                <svg className="service-arrow" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;