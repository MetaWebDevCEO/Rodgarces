import React from 'react';
import './Banner.css';

const Banner = () => {
  const bannerText = "NUEVO LIBRO • \"La aventura de ser papá\" • DISPONIBLE 14 DE NOVIEMBRE • ¡CONSÍGUELO YA!";
  
  return (
    <div className="clean-banner">
      <div className="banner-content">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <div className="marquee-content">
              <span className="banner-text">{bannerText}</span>
            </div>
            <div className="marquee-content">
              <span className="banner-text">{bannerText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


