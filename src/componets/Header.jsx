import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); // Animación de entrada al montar

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Dispara la animación de entrada del Header al montar el componente
    const t = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(t);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Semblanza', href: '#semlanza' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${mounted ? 'mounted' : ''}`}>
      <div className="topbar">
        <div className="topbar-container">
          <div className="brand">
            <div className="brand-name">ROD GARCÉS</div>
            <div className="brand-tag">Escritor|Conferencista|Formador</div>
          </div>
          <div className="contact-info">
            <a href="mailto:info@rodgarces.com">rodgarces@gmail.com</a>
            <span className="sep">|</span>
            <a href="tel:+15555555555">+1 (555) 555-5555</a>
          </div>
        </div>
      </div>

      <div className="mainbar">
        <div className="header-container">
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map(item => (
                <li key={item.name}><a href={item.href}>{item.name}</a></li>
              ))}
            </ul>
          </nav>

          {/* Botón de menú con animaciones y estado accesible */}
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="overlay" onClick={() => setIsOpen(false)}></div>
          {/* Menú móvil con animación de entrada */}
          <nav id="mobile-nav" className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map(item => (
                <li key={item.name}>
                  <a href={item.href} onClick={() => setIsOpen(false)}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header;
