import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import './page.css';

const LibrosPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-tight text-[#094293] reveal-text">
            Mis libros
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light reveal-text delay-100">
            Historias escritas desde el corazón para acompañarte <br/>
            en tu proceso de sanación y crecimiento.
          </p>
        </div>
      </div>

      <main className="flex-grow">
        
        {/* Book 1 Section */}
        <section className="py-24 px-6 lg:px-12 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end book-container reveal-text delay-200">
                <div className="relative w-[300px] h-[450px] shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://i.imgur.com/AvTQ9me.png" 
                    alt="Portada del libro Nunca te canses de comenzar de nuevo" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 reveal-text delay-300">
                <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 block"></span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#094293] mb-8 font-display leading-tight">
                  Nunca te canses de comenzar de nuevo
                </h2>
                <div className="prose prose-lg text-gray-600 mb-10 space-y-6 font-light">
                  <p>
                    Mantener la esperanza cuando parece que la vida se te vuelve en contra no es una tarea sencilla y más cuando se viven situaciones de dolor y de pérdida.
                  </p>
                  <p>
                    En este libro te comparto mi experiencia personal de vivir el duelo, atravesando por las diferentes etapas del proceso como el enojo, la negación, la frustración, la tristeza hasta llegar a la reconciliación y aceptación con la pérdida.
                  </p>
                  <p className="italic text-gray-800 border-l-2 border-blue-600 pl-4">
                    Escrito a manera de diario, te comparto los momentos desde que ingresó mi esposa al hospital hasta el regreso a mi casa para iniciar una nueva etapa junto con mis hijos.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="https://www.amazon.com.mx/NUNCA-TE-CANSES-COMENZAR-NUEVO-ebook/dp/B09YXRNQS2/ref=sr_1_1?crid=376S03YHAIN17&dib=eyJ2IjoiMSJ9.tigN60isa96dVSFVEqWlTsMDoTxnwTSDkvTxudSV1Mo0Aym-As_T4dqBKKOljDga_LE_YJfETCsbE1yqpSUZvjsxOWuMSKoQ9HhRAbK14_TB5YdDXrWDoclasMtOw4Q1MZDJixrJ0ivcO_yCLwC4-5kozQjbee1YSBT2gZ9hcKafE7f9XCdeFoiG5DrJCZ0JCkp9ApoqcC2DnjKWw248ORr4O8OjBl7L4Zb0zuNo1qfwAkqzSjpNXhYpu4ZKcBvtRZKn3Pd2nY35JouVlQAHnkBB67XU-mtSZwrVmEwmcyg.S_tkZlylflLfVcxDK8oFi6mTZjw7F74YcfFQ7U1BQ48&dib_tag=se&keywords=nunca+te+canses+de+comenzar&qid=1764523871&sprefix=%2Caps%2C319&sr=8-1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 bg-[#094293] rounded-lg hover:bg-[#07306b] hover:scale-105 group"
                  >
                    <span>COMPRAR EN AMAZON</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Book 2 Section */}
        <section className="py-24 px-6 lg:px-12 bg-stone-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-start book-container reveal-text">
                <div className="relative w-[300px] h-[450px] shadow-2xl rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="https://i.imgur.com/wuLAu7I.png" 
                    alt="Portada del libro La aventura de ser papá" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 reveal-text delay-100">
                <span className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4 block">Nuevo Lanzamiento</span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#094293] mb-8 font-display leading-tight">
                  La aventura de ser papá
                </h2>
                <div className="prose prose-lg text-gray-600 mb-10 space-y-6 font-light">
                  <p>
                    La paternidad es toda una aventura llena de desafíos y alegrías, una travesía en la que cada día trae nuevas oportunidades para aprender y crecer junto a nuestros hijos.
                  </p>
                  <p>
                    A través de anécdotas conmovedoras, comparto lecciones valiosas sobre cómo los pequeños instantes con nuestros hijos se convierten en grandes aprendizajes sobre la vida, el amor y el verdadero significado de la paternidad.
                  </p>
                  <p className="italic text-gray-800 border-l-2 border-blue-600 pl-4">
                    Acompáñame en este viaje y descubre, los retos, las alegrías, las sorpresas y bendiciones, que cada día trae consigo, la aventura de ser papá.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="https://www.amazon.com.mx/aventura-ser-pap%C3%A1-Spanish/dp/B0FCM3X7V4/ref=sr_1_1?crid=1NA633D2IUXGF&dib=eyJ2IjoiMSJ9.5DUijvuboXNIAmOUWGtxNk8uRK8ulY54-BZ_6vvsT4f3RjRmkoAdj3Eeux4ks_1z6HYuZWUAHDSMpq0Rw9YlGPdfEgpv3W0O2BZvLHgnX37apJL0zaLgUsgvmFBzPGaumcEPP5I9fu_I8QCVR92cB5D7ikd9kI9v_Bq_k31XJZAB1jHYI7FVjmz1h9JFyVT6LaZf56Zqbqu80Mui2FZLoXO3KD3AtY7YuJXUIlk_JQQmmH7fK-aiv4FB0PmIaTk4Q5MBy1Kj1jHGJrrXJubzxvtcCONxxNtMBMrjMd_-T9A.z-Fqh575LqhGSBKa4ZkO0JUkF8vW3Hix6GlXwGFLQwM&dib_tag=se&keywords=la+aventura+de+ser+pap%C3%A1&qid=1764523803&sprefix=%2Caps%2C175&sr=8-1&ufe=app_do%3Aamzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 bg-[#094293] rounded-lg hover:bg-[#07306b] hover:scale-105 group"
                  >
                    <span>COMPRAR EN AMAZON</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default LibrosPage;
