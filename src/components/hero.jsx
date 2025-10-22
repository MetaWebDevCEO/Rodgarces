import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-subtitle">CONFERENCISTA · ESCRITOR · FORMADOR</div>
            <h1 className="hero-title">
              Nunca te canses de comenzar de nuevo
            </h1>
            <p className="hero-description">
              Cada nuevo comienzo es una oportunidad para transformar tu vida
            </p>
            <button className="hero-cta">
              Ver mis libros
              <span className="cta-icon">●</span>
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/img/F1.jpg" alt="Strategic Coaching" className="hero-right-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;