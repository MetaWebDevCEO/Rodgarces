import React from 'react';
import './TrustedBy.css';

const logos = [
  { name: 'Astra', src: '/src/img/img3.jpg' },
  { name: 'Nimbus', src: '/src/img/img4.jpg' },
  { name: 'Solvex', src: '/src/img/img5.jpg' },
  { name: 'Zenith', src: '/src/img/img6.jpg' },
  { name: 'Vertex', src: '/src/img/img7.jpg' },
  { name: 'Helix', src: '/src/img/img9.jpg' },
];

function TrustedBy() {
  return (
    <section id="clients" className="trusted">
      <div className="trusted-container">
        <h2 className="trusted-title reveal">Con la confianza de</h2>
        <div className="trusted-logos">
          {logos.map(l => (
            <div className="logo-item reveal" key={l.name}>
              <img src={l.src} alt={l.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedBy;

