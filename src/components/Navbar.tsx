
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl md:text-3xl font-bold text-insurance-blue">
                <span className="text-insurance-accent">Seguro</span> Brasileiro Digital
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#sobre" className="text-gray-700 hover:text-insurance-blue px-3 py-2 font-medium">
              Sobre Nós
            </a>
            <a href="#seguros-voce" className="text-gray-700 hover:text-insurance-blue px-3 py-2 font-medium">
              Para Você
            </a>
            <a href="#seguros-empresa" className="text-gray-700 hover:text-insurance-blue px-3 py-2 font-medium">
              Para Empresas
            </a>
            <a href="#contato" className="text-gray-700 hover:text-insurance-blue px-3 py-2 font-medium">
              Contato
            </a>
            <Button className="bg-insurance-accent hover:bg-insurance-blue text-white transition-colors duration-300">
              Cotação Online
            </Button>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-insurance-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-insurance-blue"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-4 space-y-1 px-4 bg-white">
            <a
              href="#sobre"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-insurance-blue hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </a>
            <a
              href="#seguros-voce"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-insurance-blue hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Para Você
            </a>
            <a
              href="#seguros-empresa"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-insurance-blue hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Para Empresas
            </a>
            <a
              href="#contato"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-insurance-blue hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
            <Button 
              className="w-full bg-insurance-accent hover:bg-insurance-blue text-white transition-colors duration-300 mt-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Cotação Online
            </Button>
          </div>
        </div>
      )}

      {/* Contact bar */}
      <div className="bg-insurance-blue text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left">Sua segurança é nossa prioridade</p>
          <div className="flex items-center space-x-4 mt-2 md:mt-0">
            <a href="tel:+551140028922" className="flex items-center hover:text-insurance-accent">
              <Phone size={16} className="mr-1" />
              <span>(11) 4002-8922</span>
            </a>
            <a href="mailto:contato@segurobrasileiro.com.br" className="flex items-center hover:text-insurance-accent">
              <Mail size={16} className="mr-1" />
              <span>contato@segurobrasileiro.com.br</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
