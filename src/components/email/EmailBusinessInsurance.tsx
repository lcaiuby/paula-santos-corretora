
import React from 'react';
import { Building, Briefcase, Users } from "lucide-react";

const EmailBusinessInsurance: React.FC = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-insurance-blue">Seguros para sua Empresa</h2>
        <div className="h-1 w-24 bg-insurance-accent mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Soluções completas para proteger seu negócio e garantir a continuidade das suas operações
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
          <div className="mb-4">
            <Building className="h-8 w-8 text-insurance-blue mx-auto" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-insurance-blue">Seguro Empresarial</h3>
          <p className="text-gray-600 text-sm">Proteção completa para seu negócio contra incêndios, roubos e responsabilidade civil.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
          <div className="mb-4">
            <Briefcase className="h-8 w-8 text-insurance-blue mx-auto" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-insurance-blue">Seguro de Responsabilidade Civil</h3>
          <p className="text-gray-600 text-sm">Proteção contra reclamações de terceiros por danos causados pela sua empresa.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
          <div className="mb-4">
            <Briefcase className="h-8 w-8 text-insurance-blue mx-auto" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-insurance-blue">Seguro de Frota</h3>
          <p className="text-gray-600 text-sm">Proteção para os veículos da sua empresa, garantindo a continuidade do seu negócio.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center border">
          <div className="mb-4">
            <Users className="h-8 w-8 text-insurance-blue mx-auto" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-insurance-blue">Seguro de Vida em Grupo</h3>
          <p className="text-gray-600 text-sm">Benefício para seus colaboradores, demonstrando cuidado com o seu time.</p>
        </div>
      </div>
    </div>
  );
};

export default EmailBusinessInsurance;
