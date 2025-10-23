import React from 'react';
import './Banner.css';

const Banner = () => {
  const text = "★ NUEVO LIBRO ★ \"La aventura de ser papá\" ★ DISPONIBLE 14 DE NOVIEMBRE ★";
  
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="marquee">
          <div className="marquee-text">
            {text}
          </div>
          <div className="marquee-text">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;