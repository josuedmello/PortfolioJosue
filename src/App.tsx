import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PersonalProfile from './components/PersonalProfile';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <PersonalProfile />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;