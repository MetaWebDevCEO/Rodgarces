import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Contenido izquierdo */}
        <div className="hero-left">
          <h1 className="hero-title">
            Transformo Ideas en<br />
            <span className="hero-title-highlight">Estrategias Exitosas</span>
          </h1>
          <p className="hero-description">
            Consultor estratégico y escritor especializado en ayudar a 
            empresarios y líderes a alcanzar sus objetivos más ambiciosos 
            a través de metodologías probadas.
          </p>
          
          {/* Botones de acción */}
          <div className="hero-buttons">
            <button className="hero-cta-primary">
              Agenda tu Consulta
            </button>
            <button className="hero-cta-secondary">
              Ver Mis Libros
            </button>
          </div>

          {/* Estadísticas */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Clientes Atendidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Libros Publicados</div>
            </div>
          </div>
        </div>

        {/* Contenido derecho - Imagen del consultor */}
        <div className="hero-right">
          <div className="hero-image-container">
            <div className="hero-image-placeholder">
              <span>Foto Profesional del Consultor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;