import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Top: Contacto a la izquierda, Navegación y Social a la derecha */}
        <div className="footer-top">
          <div className="footer-contact">
            <div className="contact-phone">+1 (120) 233-01231</div>
            <div className="contact-email">Rodgarces@gmail.com</div>
          </div>

          <div className="footer-lists">
            <div className="list">
              <div className="list-title">Navegar</div>
              <ul className="list-items">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#books">Libros</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#pricing">Precios</a></li>
                <li><a href="#login">Login</a></li>
              </ul>
            </div>

            <div className="list">
              <div className="list-title">Social</div>
              <ul className="list-items">
                <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Marca grande centrada con logo SVG */}
        <img src="/RodGarces.svg" alt="Rod Garcés logo" className="footer-brand-logo" />

        {/* Barra inferior */}
        <div className="footer-bottom">
          <div className="footer-copy">© {new Date().getFullYear()} Rod Garcés. Todos los derechos reservados.</div>
          <a href="https://metawebdev.space/" target="_blank" rel="noreferrer" className="footer-powered" aria-label="MetaWeb Dev Solutions">
            <img src="/logosmvd.svg" alt="MetaWeb Dev logo" className="powered-logo" />
            Powered by Metaweb Dev Solutions
          </a>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
