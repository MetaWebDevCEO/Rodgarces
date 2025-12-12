import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-gradient text-black py-16 px-4 relative overflow-hidden border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center z-10 relative">
        
        {/* Quote */}
        <h2 className="text-2xl md:text-3xl font-light italic mb-8 text-black">
          Nunca te canses de comenzar de nuevo.
        </h2>

        {/* Brand/Name */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-black">
          Rod Garcés
        </h1>

        {/* Title */}
        <p className="text-lg md:text-xl text-black mb-2 font-medium">
          Conferencista • Escritor • Formador
        </p>

        {/* Location */}
        <p className="text-black mb-8">
          Boca del Río, Veracruz, México
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mb-8">
           <a href="#" aria-label="Facebook" className="social-icon-hover text-black hover:text-blue-600">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
           </a>
           <a href="#" aria-label="Instagram" className="social-icon-hover text-black hover:text-blue-600">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
           </a>
           <a href="#" aria-label="TikTok" className="social-icon-hover text-black hover:text-blue-600">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v4a9 9 0 0 1-9-9Z"></path></svg>
           </a>
           <a href="#" aria-label="X" className="social-icon-hover text-black hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
           </a>
        </div>

        {/* Email */}
        <a href="mailto:rodgarcoachingjuvenil@gmail.com" className="text-lg text-black hover:text-blue-600 transition-colors border-b border-black hover:border-blue-600 pb-1">
          rodgarcoachingjuvenil@gmail.com
        </a>

        {/* Copyright */}
        <div className="mt-16 text-sm text-black flex flex-col gap-2">
          <p>© {new Date().getFullYear()} d Garcés. Todos los derechos reservados.</p>
          <p className="font-medium opacity-80">Made by MetaWeb Dev Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;