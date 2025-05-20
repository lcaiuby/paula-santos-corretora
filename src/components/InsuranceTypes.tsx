
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Home, User, Building, Shield, Briefcase, Users } from "lucide-react";

const InsuranceTypes: React.FC = () => {
  const personalInsurances = [
    { 
      title: "Seguro Auto", 
      description: "Proteção completa para seu veículo contra roubos, acidentes e danos a terceiros.",
      icon: <User className="h-10 w-10 text-insurance-blue" /> 
    },
    { 
      title: "Seguro Residencial", 
      description: "Proteção para seu lar contra incêndios, roubos, danos elétricos e muito mais.",
      icon: <Home className="h-10 w-10 text-insurance-blue" /> 
    },
    { 
      title: "Seguro de Vida", 
      description: "Tranquilidade para você e sua família em momentos difíceis.",
      icon: <Shield className="h-10 w-10 text-insurance-blue" /> 
    },
    { 
      title: "Seguro Pet", 
      description: "Cuidado completo para seu animal de estimação, incluindo assistência veterinária.",
      icon: <Shield className="h-10 w-10 text-insurance-blue" /> 
    }
  ];

  const businessInsurances = [
    { 
      title: "Seguro Empresarial", 
      description: "Proteção completa para seu negócio contra incêndios, roubos e responsabilidade civil.",
      icon: <Building className="h-10 w-10 text-insurance-blue" /> 
    },
    { 
      title: "Seguro de Responsabilidade Civil", 
      description: "Proteção contra reclamações de terceiros por danos causados pela sua empresa.",
      icon: <Briefcase className="h-10 w-10 text-insurance-blue" /> 
    },
    { 
      title: "Seguro de Frota", 
      description: "Proteção para os veículos da sua empresa, garantindo a continuidade do seu negócio.",
      icon: <Briefcase className="h-10 w-10 text-insurance-blue" /> 
    },
    { 
      title: "Seguro de Vida em Grupo", 
      description: "Benefício para seus colaboradores, demonstrando cuidado com o seu time.",
      icon: <Users className="h-10 w-10 text-insurance-blue" /> 
    }
  ];

  return (
    <>
      <section id="seguros-voce" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-insurance-blue">Seguros para Você</h2>
            <div className="h-1 w-24 bg-insurance-accent mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Proteja o que é mais importante na sua vida com nossas soluções completas de seguros pessoais
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalInsurances.map((insurance, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {insurance.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-insurance-blue">{insurance.title}</h3>
                  <p className="text-gray-600">{insurance.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="seguros-empresa" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-insurance-blue">Seguros para sua Empresa</h2>
            <div className="h-1 w-24 bg-insurance-accent mx-auto"></div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Soluções completas para proteger seu negócio e garantir a continuidade das suas operações
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessInsurances.map((insurance, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">
                    {insurance.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-insurance-blue">{insurance.title}</h3>
                  <p className="text-gray-600">{insurance.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InsuranceTypes;
