import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <section className="support-section">
      <div className="support-container">
        <div className="support-content">
          <div className="support-left">
            <div className="support-subtitle">SOLUCIONES DE APOYO</div>
            <h2 className="support-title">
              Apoyo Empresarial Confiable, Te Espera una Vida Plena
            </h2>
          </div>
          
          <div className="support-right">
            <p className="support-description">
              Vel corporis vero sit unde cupiditate eum impedit optio. Sed accusantium assumenda 
              totam mollit et eveniet expedita dolore.
            </p>
            
            <div className="support-buttons">
              <button className="support-btn primary">
                Consultas Gratuitas
                <span className="btn-icon">●</span>
              </button>
              <button className="support-btn secondary">
                Más Detalles
                <span className="btn-icon">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;