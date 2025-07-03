
import React from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Users, Briefcase, Home, User, Building, Shield, Phone, Mail, MapPin } from "lucide-react";

const EmailMarketing: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Header com Logo */}
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
          <Button className="bg-insurance-accent hover:bg-white hover:text-insurance-blue text-white px-8 py-3 text-lg">
            Solicite uma Cotação
          </Button>
        </div>
      </div>

      {/* Sobre Nossa Corretora */}
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

      {/* Seguros para Você */}
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

      {/* Seguros para Empresas */}
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

      {/* Informações de Contato */}
      <div className="py-12 px-6 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-insurance-blue">Entre em Contato</h2>
          <div className="h-1 w-24 bg-insurance-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para atender e tirar todas as suas dúvidas. Fale conosco e descubra a melhor solução para você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex-shrink-0 mb-4">
              <Phone size={32} className="text-insurance-blue" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Telefone</h4>
            <p className="text-gray-600">(15) 3212-8080</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex-shrink-0 mb-4">
              <Mail size={32} className="text-insurance-blue" />
            </div>
            <h4 className="text-lg font-semibold mb-2">E-mail</h4>
            <p className="text-gray-600">seguros@paulasantos.com.br</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex-shrink-0 mb-4">
              <MapPin size={32} className="text-insurance-blue" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Endereço</h4>
            <p className="text-gray-600">Av. Washington Luiz, 845 - Jardim Emília</p>
            <p className="text-gray-600">Sorocaba - SP, 18031-000</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Segunda à Sexta: 08:00 às 18:00</p>
          <Button className="bg-insurance-blue hover:bg-insurance-dark-blue text-white px-8 py-3">
            Fale Conosco pelo WhatsApp
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-insurance-blue text-white py-8 px-6">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">
            <span className="text-insurance-accent">Paula Santos</span> Corretora de Seguros
          </h3>
          <p className="text-sm text-gray-300 mb-6">
            Sua corretora de seguros de confiança, oferecendo as melhores soluções para você e sua empresa desde 1970.
          </p>
          
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
            <div className="bg-white p-2 rounded-md h-12 flex items-center justify-center">
              <div className="text-insurance-blue text-xs font-bold">Porto</div>
            </div>
            <div className="bg-white p-2 rounded-md h-12 flex items-center justify-center">
              <div className="text-insurance-blue text-xs font-bold">Bradesco</div>
            </div>
            <div className="bg-white p-2 rounded-md h-12 flex items-center justify-center">
              <div className="text-insurance-blue text-xs font-bold">SulAmérica</div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Paula Santos Corretora de Seguros. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
