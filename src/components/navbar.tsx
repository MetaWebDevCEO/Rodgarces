"use client";

import { useState } from "react";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center animate-fade-in">
            <Link href="/" className="flex flex-col group">
              <span className="text-2xl font-bold text-[#094293] tracking-tight group-hover:text-[#07306b] transition-colors leading-none">
                Rod Garcés
              </span>
              <span className="text-[0.65rem] font-medium text-gray-500 tracking-widest uppercase mt-1 group-hover:text-gray-800 transition-colors">
                Liderazgo • Duelo • Crianza
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Inicio
            </Link>
            <Link href="/conferencia" className="text-gray-600 hover:text-gray-900 font-medium transition-colors animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Conferencias
            </Link>
            <Link href="/libros" className="text-gray-600 hover:text-gray-900 font-medium transition-colors animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Libros
            </Link>
            <Link href="/sobre-mi" className="text-gray-600 hover:text-gray-900 font-medium transition-colors animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Sobre mí
            </Link>
            <Link
              href="/contacto"
              className="bg-[#094293] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#07306b] transition-all transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              Contacto
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block animate-slide-down" : "hidden"} bg-white border-b border-gray-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Inicio
          </Link>
          <Link
            href="/conferencia"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Conferencias
          </Link>
          <Link
            href="/libros"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Libros
          </Link>
          <Link
            href="/sobre-mi"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Sobre mí
          </Link>
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-4 px-5 py-3 rounded-full font-medium bg-gray-900 text-white hover:bg-gray-800"
          >
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
