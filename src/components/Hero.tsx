
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-insurance-blue text-white py-20 md:py-28">
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div 
        className="absolute inset-0 z-10 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000&q=80)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 93, 143, 0.85)'
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex flex-col items-center md:items-start mb-10">
          <img 
            src="/lovable-uploads/0c6689f9-bc23-44b9-9df6-19a60e0bdaaf.png" 
            alt="Paula Santos Imóveis e Seguros" 
            className="h-32 md:h-40 mb-6"
          />
        </div>
        <div className="text-center md:text-left md:max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow">
            Protegemos o que é mais importante para você
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Desde 1970 oferecendo as melhores soluções em seguros para você e sua empresa. Conte com quem entende do assunto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-insurance-accent hover:bg-white hover:text-insurance-blue text-white px-8 py-6 text-lg transition-colors duration-300">
              Solicite uma Cotação
            </Button>
            <Button variant="outline" className="bg-transparent border-white hover:bg-white hover:text-insurance-blue text-white px-8 py-6 text-lg transition-colors duration-300">
              Conheça Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
