
import React from 'react';
import { Home, User, Shield } from "lucide-react";

const EmailPersonalInsurance: React.FC = () => {
  return (
    <div className="py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-insurance-blue">Seguros para Você</h2>
        <div className="h-1 w-24 bg-insurance-accent mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Proteja o que é mais importante na sua vida com nossas soluções completas de seguros pessoais
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
          <div className="mb-4">
            <User className="h-8 w-8 text-insurance-blue mx-auto" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-insurance-blue">Seguro Auto</h3>
          <p className="text-gray-600 text-sm">Proteção completa para seu veículo contra roubos, acidentes e danos a terceiros.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
          <div className="mb-4">
            <Home className="h-8 w-8 text-insurance-blue mx-auto" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-insurance-blue">Seguro Residencial</h3>
          <p className="text-gray-600 text-sm">Proteção para seu lar contra incêndios, roubos, danos elétricos e muito mais.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
          <div className="mb-4">
            <Shield className="h-8 w-8 text-insurance-blue mx-auto" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-insurance-blue">Seguro de Vida</h3>
          <p className="text-gray-600 text-sm">Tranquilidade para você e sua família em momentos difíceis.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
          <div className="mb-4">
            <Shield className="h-8 w-8 text-insurance-blue mx-auto" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-insurance-blue">Seguro Pet</h3>
          <p className="text-gray-600 text-sm">Cuidado completo para seu animal de estimação, incluindo assistência veterinária.</p>
        </div>
      </div>
    </div>
  );
};

export default EmailPersonalInsurance;
