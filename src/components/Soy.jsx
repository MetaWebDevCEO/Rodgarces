import React from 'react';
import './soy.css';

const Soy = () => {
  return (
    <section className="soy-section">
      <div className="soy-container">
        {/* Contenido del lado izquierdo */}
        <div className="soy-content">
          <h2 className="soy-title">Sobre Mi Experiencia</h2>
          
          <div className="soy-text">
            <p className="main-paragraph">
              Con más de 15 años de experiencia en consultoría estratégica, he tenido el 
              privilegio de trabajar con empresas desde startups hasta Fortune 500, 
              ayudándolas a navegar desafíos complejos y alcanzar resultados extraordinarios.
            </p>
            
            <p className="description-paragraph">
              Mi enfoque combina análisis riguroso, pensamiento estratégico y una profunda 
              comprensión del comportamiento humano para crear soluciones que no solo 
              funcionan en teoría, sino que generan resultados tangibles en el mundo real.
            </p>
          </div>
          
          <div className="credentials-list">
            <div className="credential-item">
              <span className="check-icon">✓</span>
              <span className="credential-text">MBA en Estrategia Empresarial - Harvard Business School</span>
            </div>
            <div className="credential-item">
              <span className="check-icon">✓</span>
              <span className="credential-text">Certificación en Change Management - Prosci</span>
            </div>
            <div className="credential-item">
              <span className="check-icon">✓</span>
              <span className="credential-text">Autor de 8 libros sobre liderazgo y estrategia</span>
            </div>
          </div>
        </div>
        
        {/* Imagen del lado derecho */}
        <div className="soy-image">
          <div className="image-container">
            <div className="image-placeholder">
              <span>Imagen del Consultor Trabajando</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Soy;