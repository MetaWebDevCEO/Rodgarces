import React from 'react';
import './decorativeElements.css';

const DecorativeElements = () => {
  return (
    <div className="decorative-elements">
      {/* Elementos decorativos en las esquinas y bordes */}
      <img 
        src="/img/sources/-160.png" 
        alt="" 
        className="decorative-element top-left"
      />
      <img 
        src="/img/sources/-179.png" 
        alt="" 
        className="decorative-element top-right"
      />
      <img 
        src="/img/sources/-94.png" 
        alt="" 
        className="decorative-element bottom-left"
      />
      <img 
        src="/img/sources/-99.png" 
        alt="" 
        className="decorative-element bottom-right"
      />
      <img 
        src="/img/sources/35 (1).png" 
        alt="" 
        className="decorative-element center-floating"
      />
    </div>
  );
};

export default DecorativeElements;