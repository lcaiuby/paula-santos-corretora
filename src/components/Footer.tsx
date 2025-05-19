import React from 'react';
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-insurance-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-insurance-accent">Paula Santos</span> Corretora de Seguros
            </h3>
            <p className="text-sm text-gray-300 max-w-xs">
              Sua corretora de seguros de confiança, oferecendo as melhores soluções para você e sua empresa desde 1970.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/grupopaulasantos" target="_blank" rel="noopener noreferrer" className="text-white hover:text-insurance-accent">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/grupopaulasantos" target="_blank" rel="noopener noreferrer" className="text-white hover:text-insurance-accent">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://wa.me/551532128080?text=Quero%20falar%20sobre%20seguros" target="_blank" rel="noopener noreferrer" className="text-white hover:text-insurance-accent">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-insurance-accent">Sobre Nós</a>
              </li>
              <li>
                <a href="#seguros-voce" className="text-gray-300 hover:text-insurance-accent">Seguros para Você</a>
              </li>
              <li>
                <a href="#seguros-empresa" className="text-gray-300 hover:text-insurance-accent">Seguros para Empresas</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-insurance-accent">Contato</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-insurance-accent">Política de Privacidade</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-insurance-accent">Termos de Uso</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Seguradoras Parceiras</h3>
            <p className="text-sm text-gray-300 mb-4">
              Trabalhamos com as principais seguradoras do mercado para oferecer o melhor para você.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {/* Placeholder para logos de seguradoras */}
              <div className="bg-white p-2 rounded-md h-12 flex items-center justify-center">
                <div className="text-insurance-blue text-xs font-bold">Porto</div>
              </div>
              <div className="bg-white p-2 rounded-md h-12 flex items-center justify-center">
                <div className="text-insurance-blue text-xs font-bold">Bradesco</div>
              </div>
              <div className="bg-white p-2 rounded-md h-12 flex items-center justify-center">
                <div className="text-insurance-blue text-xs font-bold">SulAmérica</div>
              </div>
              <div className="bg-white p-2 rounded-md h-12 flex items-center justify-center">
                <div className="text-insurance-blue text-xs font-bold">Allianz</div>
              </div>
              <div className="bg-white p-2 rounded-md h-12 flex items-center justify-center">
                <div className="text-insurance-blue text-xs font-bold">Liberty</div>
              </div>
              <div className="bg-white p-2 rounded-md h-12 flex items-center justify-center">
                <div className="text-insurance-blue text-xs font-bold">HDI</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Paula Santos Corretora de Seguros. Todos os direitos reservados. CNPJ: 00.000.000/0000-00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
