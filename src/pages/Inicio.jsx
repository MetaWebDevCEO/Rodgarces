import React, { useEffect } from 'react';
import Header from '../componets/Header';
import Hero from '../componets/Hero';
import Marquee from '../componets/Marquee';
import Goals from '../componets/Goals';
import Research from '../componets/Research';
import Servicios from '../componets/Servicios';
import Books from '../componets/Books';
import Contact from '../componets/Contact';
import Footer from '../componets/Footer';
import { initScrollReveal } from '../lib/utils';

function Inicio() {
  const marqueeLogos = [
    { name: 'Astra', src: '/src/img/img3.jpg' },
    { name: 'Nimbus', src: '/src/img/img4.jpg' },
    { name: 'Solvex', src: '/src/img/img5.jpg' },
    { name: 'Zenith', src: '/src/img/img6.jpg' },
    { name: 'Vertex', src: '/src/img/img7.jpg' },
    { name: 'Helix', src: '/src/img/img9.jpg' },
  ];
  useEffect(() => {
    const cleanup = initScrollReveal();
    return cleanup;
  }, []);
  return (
    <div>
      <Header />
      <Hero />
      <Research />
      <Marquee speed="slow" className="py-4">
        {marqueeLogos.map(l => (
          <img key={l.name} src={l.src} alt={l.name} className="h-12 opacity-80 hover:opacity-100 transition" />
        ))}
      </Marquee>
      <Goals />
      <Servicios/>
      <Books />
      <Contact />
      <Footer />
    </div>
  );
}

export default Inicio;
