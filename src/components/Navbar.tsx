
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/39c8bdd2-78ab-45e7-9a23-1553a9b73e49.png" 
                alt="Paula Santos Corretora de Seguros" 
                className="h-10 md:h-12"
              />
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
            <a href="https://wa.me/551532128080?text=Quero%20falar%20sobre%20seguros" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-insurance-accent">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>(15) 3212-8080</span>
            </a>
            <a href="mailto:seguros@paulasantos.com.br" className="flex items-center hover:text-insurance-accent">
              <Mail size={16} className="mr-1" />
              <span>seguros@paulasantos.com.br</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
