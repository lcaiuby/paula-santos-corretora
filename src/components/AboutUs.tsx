
import React from 'react';
import { ShieldCheck, Users, Briefcase } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-insurance-blue">Sobre Nossa Corretora</h2>
          <div className="h-1 w-24 bg-insurance-accent mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            A Paula Santos Corretora de Seguros é especializada em oferecer soluções personalizadas de seguros
            para proteger você, sua família e seu negócio. Nossa missão é proporcionar tranquilidade
            e segurança através de um atendimento diferenciado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center p-4 bg-insurance-blue rounded-full text-white mb-6">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-insurance-blue">Experiência e Confiança</h3>
            <p className="text-gray-600">
              Mais de 15 anos no mercado oferecendo as melhores coberturas com o suporte que você precisa no momento em que mais importa.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center p-4 bg-insurance-blue rounded-full text-white mb-6">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-insurance-blue">Atendimento Personalizado</h3>
            <p className="text-gray-600">
              Entendemos que cada cliente tem necessidades únicas. Por isso, oferecemos soluções personalizadas para cada perfil.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center p-4 bg-insurance-blue rounded-full text-white mb-6">
              <Briefcase size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 text-insurance-blue">Melhores Seguradoras</h3>
            <p className="text-gray-600">
              Trabalhamos com as principais seguradoras do mercado para garantir o melhor custo-benefício para nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
