import React from 'react';
import { ArrowDown, Star, Users, Trophy } from 'lucide-react';

const Hero = () => {
  const scrollToProfile = () => {
    const element = document.getElementById('perfil');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-teal-600"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Josué Mello
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-orange-300 text-3xl md:text-4xl mt-4">
              Especialista em Soluções Profissionais
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Transformo desafios em oportunidades através de soluções inovadoras e estratégicas. 
            Experiência comprovada, resultados extraordinários.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex items-center space-x-2 text-white">
              <Trophy className="w-6 h-6 text-orange-300" />
              <span className="text-2xl font-bold">200+</span>
              <span className="text-blue-200">Projetos</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Users className="w-6 h-6 text-orange-300" />
              <span className="text-2xl font-bold">98%</span>
              <span className="text-blue-200">Satisfação</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Star className="w-6 h-6 text-orange-300" />
              <span className="text-2xl font-bold">8</span>
              <span className="text-blue-200">Anos</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <button 
              onClick={scrollToProfile}
              className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Conheça Meu Perfil
            </button>
            <button 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-800 transition-all duration-300"
            >
              Entre em Contato
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToProfile}
            className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
          >
            <span className="text-sm mb-2">Role para baixo</span>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;