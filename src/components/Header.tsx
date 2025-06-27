import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-800">
            Josué<span className="text-teal-600">Mello</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['início', 'perfil', 'sobre', 'serviços', 'portfólio', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'início' ? 'hero' : item)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-teal-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            {['início', 'perfil', 'sobre', 'serviços', 'portfólio', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'início' ? 'hero' : item)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;