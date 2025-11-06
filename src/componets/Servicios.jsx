import React from 'react';
import './Servicios.css';

function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div className="servicios-container">
        {/* Banner CTA negro con dos columnas */}
        <section className="cta-banner">
          <div className="cta-content">
            <div className="cta-left">
              <p className="cta-kicker">Servicios</p>
              <h2 className="cta-title services-list">
                <span>Conferencias</span>
                <span>Talleres</span>
                <span>Consultorías</span>
                <span>Capacitaciones</span>
              </h2>
            </div>
            <div className="cta-right">
              <div className="cta-desc">
                <strong>Talleres prácticos:</strong>
                <ul>
                  <li>Quítate el curita del corazón</li>
                  <li>Descubre tu Misión (propósito de vida)</li>
                  <li>Liderazgo en Acción para equipos</li>
                </ul>
                <div>Formatos: presencial, virtual o híbrido</div>
              </div>
            </div>
          </div>
          <div className="cta-actions">
            <a href="#" className="btn btn-primary">Ver Servicios </a>
            <a href="#" className="btn btn-secondary">Contactar</a>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Servicios;
