import React from 'react';
import './soy.css';

const Soy = () => {
  return (
    <section className="soy-section">
      <div className="soy-container">
        {/* Imagen del lado izquierdo */}
        <div className="soy-image">
          <div className="image-container">
            <img 
              src="/public/img/F1.jpg" 
              alt="Rodrigo García - Líder y Coach Profesional" 
              className="professional-image"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
        
        {/* Contenido del lado derecho */}
        <div className="soy-content">
          <div className="content-header">
            <div className="header-line"></div>
            <h2 className="soy-title">EN ESTO CREO</h2>
          </div>
          
          <div className="soy-text">
            <p className="main-paragraph">
              En que la única manera de transformar el mundo es una persona a la vez.
            </p>
            
            <p className="description-paragraph">
              En que necesitamos seres humanos más humanos, nuevos liderazgos conscientes, 
              transformadores, líderes con valores que descubran su propósito e inspiren a otros a 
              descubrirlo.
            </p>
            
            <p className="final-paragraph">
              Estoy convencido de que necesitamos vivir en equilibrio de cuerpo, alma, espíritu, familia, 
              trabajo, relaciones, ecología y finanzas. Y creo que las empresas y organizaciones deben 
              atender esta necesidad.
            </p>
          </div>
          
          <div className="soy-actions">
            <button className="btn-leer-mas">Leer más</button>
            <p className="leadership-text">liderazgo y desarrollo organizacional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Soy;