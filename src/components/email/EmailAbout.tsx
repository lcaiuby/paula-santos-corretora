
import React from 'react';
import { ShieldCheck, Users, Briefcase } from "lucide-react";

const EmailAbout: React.FC = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-insurance-blue">Sobre Nossa Corretora</h2>
        <div className="h-1 w-24 bg-insurance-accent mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A Paula Santos Corretora de Seguros é especializada em oferecer soluções personalizadas de seguros
          para proteger você, sua família e seu negócio. Nossa missão é proporcionar tranquilidade
          e segurança através de um atendimento diferenciado.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="inline-flex items-center justify-center p-3 bg-insurance-blue rounded-full text-white mb-4">
            <ShieldCheck size={24} />
          </div>
          <h3 className="text-lg font-bold mb-3 text-insurance-blue">Experiência e Confiança</h3>
          <p className="text-gray-600 text-sm">
            Mais de 15 anos no mercado oferecendo as melhores coberturas com o suporte que você precisa.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="inline-flex items-center justify-center p-3 bg-insurance-blue rounded-full text-white mb-4">
            <Users size={24} />
          </div>
          <h3 className="text-lg font-bold mb-3 text-insurance-blue">Atendimento Personalizado</h3>
          <p className="text-gray-600 text-sm">
            Entendemos que cada cliente tem necessidades únicas. Por isso, oferecemos soluções personalizadas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="inline-flex items-center justify-center p-3 bg-insurance-blue rounded-full text-white mb-4">
            <Briefcase size={24} />
          </div>
          <h3 className="text-lg font-bold mb-3 text-insurance-blue">Melhores Seguradoras</h3>
          <p className="text-gray-600 text-sm">
            Trabalhamos com as principais seguradoras do mercado para garantir o melhor custo-benefício.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailAbout;
