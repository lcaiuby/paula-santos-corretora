
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-insurance-blue text-white py-20 md:py-28">
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      <div 
        className="absolute inset-0 z-10 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 93, 143, 0.85)'
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center md:text-left md:max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow">
            Protegemos o que é mais importante para você
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Há mais de 15 anos oferecendo as melhores soluções em seguros para você e sua empresa. Conte com quem entende do assunto.
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
