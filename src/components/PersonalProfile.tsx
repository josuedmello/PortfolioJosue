import React from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Target, 
  Lightbulb,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  PieChart
} from 'lucide-react';

const PersonalProfile = () => {
  const specialties = [
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      title: "Consultoria Estratégica",
      description: "Desenvolvimento de estratégias personalizadas para maximizar resultados empresariais"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-teal-600" />,
      title: "Otimização de Processos",
      description: "Identificação e eliminação de gargalos para aumentar eficiência operacional"
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      title: "Gestão de Equipes",
      description: "Desenvolvimento de liderança e otimização do desempenho de equipes"
    },
    {
      icon: <PieChart className="w-6 h-6 text-purple-600" />,
      title: "Análise de Dados",
      description: "Transformação de dados em insights valiosos para tomada de decisões estratégicas"
    }
  ];

  const achievements = [
    "Mais de 200 projetos concluídos com sucesso",
    "98% de taxa de satisfação dos clientes",
    "8 anos de experiência comprovada no mercado",
    "Especialização em transformação digital",
    "Certificações em gestão empresarial",
    "Experiência com empresas de diversos segmentos"
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Foco em Resultados",
      description: "Cada projeto é desenvolvido com objetivos claros e métricas de sucesso bem definidas."
    },
    {
      icon: <Award className="w-8 h-8 text-teal-600" />,
      title: "Excelência",
      description: "Compromisso com a qualidade superior em todas as entregas e relacionamentos."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-orange-600" />,
      title: "Inovação",
      description: "Busca constante por soluções criativas e tecnologias de ponta."
    }
  ];

  return (
    <section id="perfil" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quem é Josué Mello
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissional especializado em transformar desafios empresariais em oportunidades de crescimento
          </p>
        </div>

        {/* Main Profile Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Minha Trajetória</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Com mais de 8 anos de experiência no mercado, dedico-me a ajudar empresas e profissionais 
                a alcançarem seus objetivos através de soluções estratégicas personalizadas. Minha paixão 
                é transformar ideias em resultados concretos, sempre focando na excelência e inovação.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao longo da minha carreira, tive o privilégio de trabalhar com empresas de diversos 
                segmentos, desde startups em crescimento até corporações estabelecidas, sempre 
                entregando soluções que geram impacto real e duradouro.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <GraduationCap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Formação & Expertise</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Formação sólida em gestão empresarial com especializações em consultoria estratégica, 
                transformação digital e liderança. Mantenho-me sempre atualizado com as últimas 
                tendências do mercado e metodologias inovadoras para oferecer o melhor aos meus clientes.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Principais Conquistas</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 rounded-2xl text-white mt-8">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 mr-2" />
                <h4 className="text-lg font-semibold">Diferencial Competitivo</h4>
              </div>
              <p className="text-blue-100">
                Combino experiência técnica sólida com uma abordagem humanizada, 
                sempre priorizando o entendimento profundo das necessidades específicas 
                de cada cliente para entregar soluções verdadeiramente personalizadas.
              </p>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Minhas Especialidades
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="bg-gray-50 p-3 rounded-lg w-fit mb-4">
                  {specialty.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {specialty.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meus Valores Profissionais
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-full w-fit mx-auto mb-6 shadow-lg">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Vamos Trabalhar Juntos?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Estou sempre em busca de novos desafios e oportunidades para criar 
              soluções que façam a diferença. Entre em contato e vamos conversar 
              sobre como posso ajudar seu negócio a crescer.
            </p>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Iniciar Conversa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProfile;