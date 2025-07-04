
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const EmailContact: React.FC = () => {
  return (
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
        <p className="text-gray-600 mb-4">Segunda à Sexta: 08:30 às 17:30</p>
        <Button className="bg-insurance-blue hover:bg-insurance-dark-blue text-white px-8 py-3">
          Fale Conosco pelo WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default EmailContact;
