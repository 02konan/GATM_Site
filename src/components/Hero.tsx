import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-navy via-navy-light to-navy transform"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11, 31, 59, 0.95) 0%, rgba(26, 54, 96, 0.90) 50%, rgba(11, 31, 59, 0.95) 100%), url('/GATM_Site/src/img/IMG-20250815-WA0004.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden" >
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-gold/10 rounded-full animate-float"/>
        <div className="absolute top-1/2 -left-8 w-64 h-64 bg-gold/5 rounded-full animate-float"/>
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-gold/15 rounded-full animate-float"/>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Logo Section
          <div className="animate-fade-in mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-white/90">
                <div className="text-sm font-medium">Groupe d'Alternance</div>
                <div className="text-lg font-bold text-gold">Talents et Métiers</div>
              </div>
            </div>
          </div> */}
          
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-lora leading-tight">
              Révélez vos 
              <span className="text-gold block">Talents</span>
              <span className="text-white">d'Exception</span>
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
              Le Groupe d’Alternance Talents et Métiers (GATM) détecte et façonne les talents dès le plus jeune âge pour en faire des acteurs compétents et performants.
               Présent dans les secteurs clés que sont le commerce, 
               la finance, l’industrie et l’immobilier, 
               GATM offre des programmes concrets alliant théorie et pratique, 
               pour une insertion professionnelle réussie.

            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.6s', opacity: 0 }}>
            <button className="group bg-gold text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-light transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Découvrir nos opportunités
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy transition-all duration-300 flex items-center justify-center">
              <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
              Voir notre présentation
            </button>
          </div>

          <div className="animate-slide-up mt-16 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ animationDelay: '0.9s', opacity: 0 }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">500+</div>
              <div className="text-white/80 text-sm">Étudiants accompagnés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">150+</div>
              <div className="text-white/80 text-sm">Entreprises partenaires</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">85%</div>
              <div className="text-white/80 text-sm">Taux d'insertion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">10+</div>
              <div className="text-white/80 text-sm">Années d'expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;