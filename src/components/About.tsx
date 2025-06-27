import React from 'react';
import { CheckCircle, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-teal-600" />,
      title: "Experiência Comprovada",
      description: "Mais de 8 anos no mercado com resultados consistentes e reconhecimento profissional."
    },
    {
      icon: <Target className="w-6 h-6 text-teal-600" />,
      title: "Foco em Resultados",
      description: "Estratégias personalizadas que geram impacto real no crescimento do seu negócio."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-teal-600" />,
      title: "Soluções Inovadoras",
      description: "Metodologias modernas e tecnologias avançadas para soluções eficientes."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-teal-600" />,
      title: "Qualidade Garantida",
      description: "Comprometimento com a excelência em cada projeto e entrega pontual."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre Meus Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofereço soluções profissionais especializadas com foco na excelência 
            e resultados que superam expectativas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Minha Missão
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Transformar ideias em soluções práticas e eficientes, proporcionando 
                aos meus clientes as ferramentas necessárias para alcançar seus 
                objetivos com excelência e inovação.
              </p>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-teal-600" />
                <span className="text-sm font-medium text-gray-800">
                  Compromisso com a qualidade desde 2016
                </span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Minha Visão
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ser referência no mercado de serviços profissionais, reconhecido 
                pela inovação, qualidade e capacidade de gerar resultados 
                extraordinários para meus clientes.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-teal-50 p-3 rounded-lg mr-4">
                    {feature.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;