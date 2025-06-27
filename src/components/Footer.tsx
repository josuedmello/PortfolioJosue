import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Josué<span className="text-teal-400">Mello</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Especialista em transformar desafios empresariais em oportunidades de crescimento. 
              Sua parceria para o sucesso profissional.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/josu%C3%A9-melo-a32a7113b/"
                target="_blank"
                 rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-teal-600 p-2 rounded-lg transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Consultoria Estratégica</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Otimização de Processos</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Gestão de Equipes</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Análise de Dados</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Planejamento Financeiro</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors duration-200">Inovação</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-teal-400" />
                <span className="text-sm">josuedmello@outlook.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-teal-400" />
                <span className="text-sm">(63) 99249-5469</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-teal-400 mt-1" />
                <span className="text-sm">
                  Atendimento Nacional<br />
                  Presencial e Remoto
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Josué Mello. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;