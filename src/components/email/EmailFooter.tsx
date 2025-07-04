
import React from 'react';

const EmailFooter: React.FC = () => {
  return (
    <div className="bg-insurance-blue text-white py-8 px-6">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-4">
          <span className="text-insurance-accent">Paula Santos</span> Corretora de Seguros
        </h3>
        <p className="text-sm text-gray-300 mb-6">
          Sua corretora de seguros de confiança, oferecendo as melhores soluções para você e sua empresa desde 1970.
        </p>
        
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-6">
          <div className="bg-white p-3 rounded-md h-16 flex items-center justify-center">
            <img 
              src="/lovable-uploads/cc2f8322-02c5-45c3-a761-3ab6d0b4d6c7.png" 
              alt="Porto Seguro" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="bg-white p-3 rounded-md h-16 flex items-center justify-center">
            <img 
              src="/lovable-uploads/daa19e0c-f4f4-4e49-9e2a-65bea24000f6.png" 
              alt="Bradesco Seguros" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="bg-white p-3 rounded-md h-16 flex items-center justify-center">
            <img 
              src="/lovable-uploads/7d5dd105-6c95-437d-a8ab-25b1fe7f3a34.png" 
              alt="Sura" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="bg-white p-3 rounded-md h-16 flex items-center justify-center">
            <img 
              src="/lovable-uploads/e8858d6b-7649-44b0-b63d-baa80c30edf8.png" 
              alt="Allianz" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="bg-white p-3 rounded-md h-16 flex items-center justify-center">
            <img 
              src="/lovable-uploads/ad3c9d82-71ce-423e-992d-dc70536ed9e1.png" 
              alt="Tokio Marine" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="bg-white p-3 rounded-md h-16 flex items-center justify-center">
            <img 
              src="/lovable-uploads/da3fe90c-6fd3-4f23-905c-8052fa45ec9c.png" 
              alt="Yelum Seguradora" 
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Paula Santos Corretora de Seguros. Todos os direitos reservados. CNPJ: 54.340.567/0001-36
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailFooter;
