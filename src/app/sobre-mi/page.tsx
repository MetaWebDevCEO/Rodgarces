import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const SobreMiPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
             <h1 className="text-4xl font-bold mb-8 font-display">Sobre Mí</h1>
             <p className="text-xl text-gray-600">Próximamente...</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SobreMiPage;