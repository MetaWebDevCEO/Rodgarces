import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-copy reveal">
          <h1 className="hero-title">Nunca te canses de <br />comenzar de nuevo</h1>
          <p className="hero-subtitle">Cada nuevo comienzo es una oportunidad para transformar tu vida </p>
          <ul className="hero-points">
            <li><span className="point-head">Conferencista</span> conferencias y talleres de temas como ,"El duelo y los nuevos comienzos","La crianza y la paternidad con propósito" y "Liderazgo juvenil desde el servicio y la fe" </li>
            <li><span className="point-head">Escritor</span>  Autor de “Nunca te canses de comenzar
de nuevo” y  de “La aventura de ser papá”</li>
            <li><span className="point-head">Formador</span> Con más de quince años de experiencia
formando líderes juveniles</li>
          </ul>
          <div className="hero-actions">
            <a className="btn btn-demo" href="#video"><span className="play"></span> Ver Servicios</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
