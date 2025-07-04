
import React from 'react';
import { Button } from "@/components/ui/button";

const EmailHeader: React.FC = () => {
  return (
    <div className="bg-insurance-blue text-white py-8 px-6">
      <div className="text-center">
        <img 
          src="/lovable-uploads/39c8bdd2-78ab-45e7-9a23-1553a9b73e49.png" 
          alt="Paula Santos Corretora de Seguros" 
          className="h-16 mx-auto mb-4"
        />
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Seguros para proteger o que é mais importante pra você
        </h1>
        <p className="text-lg mb-6">
          Oferecemos as melhores soluções em seguros para você e sua empresa. Conte com quem entende do assunto.
        </p>
        <Button 
          className="bg-insurance-accent hover:bg-white hover:text-insurance-blue text-white px-8 py-3 text-lg"
          onClick={() => window.open('https://wa.me/551532128080?text=Quero%20falar%20sobre%20seguros', '_blank')}
        >
          Solicite uma Cotação
        </Button>
      </div>
    </div>
  );
};

export default EmailHeader;
