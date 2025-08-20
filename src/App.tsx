import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Fondateur from './components/Fondateur';
import Domains from './components/Domains';
import Programs from './components/Programs';
import Actualité from './components/Actualité';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-montserrat">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Fondateur />
        <Domains />
        <Programs />
        <Actualité />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;