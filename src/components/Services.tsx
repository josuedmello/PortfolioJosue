import React from 'react';
import { 
  Briefcase, 
  TrendingUp, 
  Users, 
  PieChart, 
  Target, 
  Lightbulb,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      title: "Consultoria Estratégica",
      description: "Análise completa do seu negócio e desenvolvimento de estratégias personalizadas para maximizar resultados.",
      features: ["Análise de mercado", "Planejamento estratégico", "Implementação de melhorias"],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Otimização de Processos",
      description: "Identificação e eliminação de gargalos operacionais para aumentar a eficiência e produtividade.",
      features: ["Mapeamento de processos", "Automação inteligente", "Monitoramento contínuo"],
      color: "from-teal-600 to-teal-700"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Gestão de Equipes",
      description: "Desenvolvimento de liderança e otimização do desempenho de equipes para resultados excepcionais.",
      features: ["Treinamento especializado", "Avaliação de performance", "Desenvolvimento de líderes"],
      color: "from-orange-600 to-orange-700"
    },
    {
      icon: <PieChart className="w-8 h-8 text-white" />,
      title: "Análise de Dados",
      description: "Transformação de dados em insights valiosos para tomada de decisões estratégicas informadas.",
      features: ["Business Intelligence", "Relatórios personalizados", "Dashboards interativos"],
      color: "from-purple-600 to-purple-700"
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Planejamento Financeiro",
      description: "Estruturação financeira e planejamento orçamentário para sustentabilidade e crescimento.",
      features: ["Análise financeira", "Projeções orçamentárias", "Controle de custos"],
      color: "from-green-600 to-green-700"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      title: "Inovação e Desenvolvimento",
      description: "Implementação de soluções inovadoras e desenvolvimento de novos produtos e serviços.",
      features: ["Pesquisa e desenvolvimento", "Prototipagem rápida", "Testes de mercado"],
      color: "from-indigo-600 to-indigo-700"
    }
  ];

  return (
    <section id="serviços" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas e especializadas para impulsionar seu negócio ao próximo nível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <div className={`bg-gradient-to-r ${service.color} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-teal-600 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Saiba Mais
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Solicitar Orçamento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;