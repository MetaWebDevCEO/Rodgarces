import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-subtitle">LEADERSHIP ELEVATION</span>
            <h1 className="hero-title">
              Strategic Coaching For Business Growth
            </h1>
            <p className="hero-description">
              Aut officiis repellat sunt sapiente rerum non numquam necessitatibus ab ipsum 
              illo. Qui dolor quasi ex eligendi optio eum porro molestiae ea impedit nihil sed.
            </p>
            <button className="hero-cta">
              Book Appointment
              <span className="cta-icon">●</span>
            </button>
          </div>
        </div>
        <div className="hero-image">
          {/* Imagen de fondo se manejará con CSS */}
        </div>
      </div>
    </section>
  );
};

export default Hero;