import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import './page.css';

const ContactoPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-display text-[#094293]">
              Contacto
            </h1>
            <div className="w-24 h-1 bg-[#094293] mx-auto rounded-full mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info Card */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100 shadow-sm text-center fade-in-up delay-100 sticky top-24">
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                Rod Garcés
              </h2>
              
              <p className="text-xl md:text-2xl text-[#094293] font-medium italic mb-10">
                "Nunca te canses de comenzar de nuevo."
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 text-sm font-bold uppercase tracking-widest text-gray-500 mb-10">
                <span>Conferencista</span>
                <span className="text-gray-300">•</span>
                <span>Escritor</span>
                <span className="text-gray-300">•</span>
                <span>Formador</span>
              </div>

              <div className="space-y-8">
                {/* Location */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#094293] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <p className="text-lg text-gray-700">Boca del Río, Veracruz, México</p>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#094293] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <a href="mailto:rodgarcoachingjuvenil@gmail.com" className="text-lg text-gray-700 hover:text-[#094293] transition-colors border-b border-transparent hover:border-[#094293]">
                    rodgarcoachingjuvenil@gmail.com
                  </a>
                </div>

                {/* Social Media */}
                <div className="pt-8">
                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">Sígueme en redes sociales</p>
                  <div className="flex justify-center gap-6">
                    <Link href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:text-[#094293] hover:scale-110 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </Link>
                    <Link href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:text-[#094293] hover:scale-110 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </Link>
                    <Link href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:text-[#094293] hover:scale-110 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </Link>
                    <Link href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 hover:text-[#094293] hover:scale-110 transition-all">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl fade-in-up delay-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display">Envíame un mensaje</h3>
              <form className="space-y-6">
                
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#094293] focus:ring-2 focus:ring-[#094293]/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email & Telefono */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Correo electrónico</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#094293] focus:ring-2 focus:ring-[#094293]/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      id="telefono" 
                      name="telefono" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#094293] focus:ring-2 focus:ring-[#094293]/20 outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="+52 123 456 7890"
                    />
                  </div>
                </div>

                {/* Ubicacion */}
                <div>
                  <label htmlFor="ubicacion" className="block text-sm font-semibold text-gray-700 mb-2">¿De dónde nos escribes?</label>
                  <input 
                    type="text" 
                    id="ubicacion" 
                    name="ubicacion" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#094293] focus:ring-2 focus:ring-[#094293]/20 outline-none transition-all bg-gray-50 focus:bg-white"
                    placeholder="Ciudad, País"
                  />
                </div>

                {/* Servicio */}
                <div>
                  <label htmlFor="servicio" className="block text-sm font-semibold text-gray-700 mb-2">Servicio interesado</label>
                  <div className="relative">
                    <select 
                      id="servicio" 
                      name="servicio" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#094293] focus:ring-2 focus:ring-[#094293]/20 outline-none transition-all bg-gray-50 focus:bg-white appearance-none cursor-pointer"
                    >
                      <option value="" disabled selected>Selecciona una opción</option>
                      <option value="conferencia">Conferencia</option>
                      <option value="taller">Taller</option>
                      <option value="mentoria">Mentoría</option>
                      <option value="capacitacion">Capacitación</option>
                      <option value="acompanamiento">Acompañamiento</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                  <textarea 
                    id="mensaje" 
                    name="mensaje" 
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#094293] focus:ring-2 focus:ring-[#094293]/20 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="Cuéntame más sobre tu evento o consulta..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-[#094293] text-white font-bold py-4 rounded-xl hover:bg-[#07306b] transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Enviar mensaje</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>

              </form>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactoPage;
