import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import PDFBooklet from './PDFBooklet';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-insurance-blue">Entre em Contato</h2>
          <div className="h-1 w-24 bg-insurance-accent mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos prontos para atender e tirar todas as suas dúvidas. Fale conosco e descubra a melhor solução para você.
          </p>
        </div>

        {/* Seção para download do catálogo */}
        <div className="text-center mb-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-insurance-blue">Catálogo Digital</h3>
          <p className="text-gray-600 mb-6">
            Baixe nosso catálogo completo em PDF com todas as informações sobre nossos serviços de seguros.
          </p>
          <PDFBooklet />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-insurance-blue">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone size={24} className="text-insurance-blue mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Telefone</h4>
                  <p className="text-gray-600">(15) 3212-8080</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail size={24} className="text-insurance-blue mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">E-mail</h4>
                  <p className="text-gray-600">seguros@paulasantos.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin size={24} className="text-insurance-blue mt-1" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Endereço</h4>
                  <p className="text-gray-600">Av. Washington Luiz, 845 - Jardim Emília</p>
                  <p className="text-gray-600">Sorocaba - SP, 18031-000</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-insurance-blue">Horário de Atendimento</h3>
              <p className="text-gray-600">Segunda à Sexta: 08:00 às 18:00</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-insurance-blue">Envie uma Mensagem</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo
                </label>
                <Input id="name" placeholder="Seu nome" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <Input id="email" type="email" placeholder="seu.email@exemplo.com" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone
                </label>
                <Input id="phone" placeholder="(00) 00000-0000" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Assunto
                </label>
                <Input id="subject" placeholder="Assunto da mensagem" className="w-full" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensagem
                </label>
                <Textarea id="message" placeholder="Escreva sua mensagem aqui..." className="w-full" rows={4} />
              </div>
              
              <Button type="submit" className="w-full bg-insurance-blue hover:bg-insurance-dark-blue text-white">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
