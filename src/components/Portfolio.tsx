import React from 'react';
import { ExternalLink, Calendar, Award } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Transformação Digital Empresarial",
      category: "Consultoria Estratégica",
      description: "Implementação completa de processos digitais em empresa do setor manufatureiro, resultando em 40% de aumento na eficiência operacional.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      results: ["40% aumento eficiência", "60% redução custos", "ROI em 8 meses"],
      year: "2024"
    },
    {
      title: "Reestruturação Organizacional",
      category: "Gestão de Equipes",
      description: "Reorganização completa da estrutura organizacional de startup em crescimento, otimizando hierarquias e processos de comunicação.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      results: ["50% melhoria comunicação", "30% aumento produtividade", "95% satisfação equipe"],
      year: "2024"
    },
    {
      title: "Sistema de Business Intelligence",
      category: "Análise de Dados",
      description: "Desenvolvimento e implementação de dashboard executivo com indicadores-chave de performance para tomada de decisões estratégicas.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      results: ["100% automatização relatórios", "70% redução tempo análise", "Decisões data-driven"],
      year: "2023"
    },
    {
      title: "Otimização Financeira",
      category: "Planejamento Financeiro",
      description: "Reestruturação completa do planejamento financeiro e implementação de controles de custos em empresa de médio porte.",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
      results: ["25% redução custos", "Fluxo de caixa otimizado", "Margem lucro +15%"],
      year: "2023"
    },
    {
      title: "Desenvolvimento de Produto Inovador",
      category: "Inovação e Desenvolvimento",
      description: "Pesquisa, desenvolvimento e lançamento de novo produto no mercado, desde a concepção até a comercialização.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      results: ["Produto market-ready", "3 meses para lançamento", "ROI positivo em 6 meses"],
      year: "2023"
    },
    {
      title: "Automação de Processos",
      category: "Otimização de Processos",
      description: "Implementação de automação inteligente em processos administrativos, eliminando gargalos e aumentando a produtividade.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      results: ["80% redução tempo processos", "Erro humano -90%", "Capacidade +200%"],
      year: "2022"
    }
  ];

  return (
    <section id="portfólio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfólio de Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos mais impactantes e os resultados extraordinários alcançados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-blue-600/90 backdrop-blur-sm p-2 rounded-full">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 text-teal-600 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Resultados:</span>
                  </div>
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600">{result}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 text-blue-800 font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                  Ver Detalhes
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Resultados que Falam por Si
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">150+</div>
                <div className="text-sm text-gray-600">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Taxa de Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-1">45%</div>
                <div className="text-sm text-gray-600">Melhoria Média</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">6 meses</div>
                <div className="text-sm text-gray-600">ROI Médio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;