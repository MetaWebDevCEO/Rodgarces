import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Contenido centrado */}
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-subtitle">CONFERENCISTA · ESCRITOR · FORMADOR</div>
          <h1 className="hero-title">
            Nunca te canses de comenzar de nuevo
          </h1>
          <p className="hero-description">
            Cada nuevo comienzo es una oportunidad para transformar tu vida y alcanzar tu máximo potencial
          </p>
          
          {/* Botones de acción */}
          <div className="hero-buttons">
            <button className="hero-cta-primary">
              Ver mis libros
            </button>
            <button className="hero-cta-secondary">
              Conoce más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;