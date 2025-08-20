import React from 'react';
import { Quote, Award, Users, Target } from 'lucide-react';

const Fondateur: React.FC = () => {
  const founder = {
    name: 'Jean-Pierre Dubois',
    title: 'Fondateur & Directeur Général',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    quote: 'Ma vision était simple : créer un pont entre l\'excellence académique et la réussite professionnelle. Aujourd\'hui, GATM forme les leaders de demain.',
    experience: '25+ ans d\'expérience',
    background: 'Diplômé HEC Paris, ancien directeur chez LVMH',
    achievements: [
      'Création de GATM en 2013',
      '500+ talents formés',
      'Partenariats avec 150+ entreprises',
      'Prix de l\'Innovation Pédagogique 2023'
    ]
  };

  const values = [
    {
      icon: Target,
      title: 'Vision',
      description: 'Révolutionner l\'alternance en plaçant l\'excellence au cœur de chaque parcours.'
    },
    {
      icon: Users,
      title: 'Mission',
      description: 'Détecter et développer les talents pour créer les leaders de demain.'
    },
    {
      icon: Award,
      title: 'Engagement',
      description: 'Garantir l\'insertion professionnelle de chaque étudiant dans les meilleures conditions.'
    }
  ];

  return (
    <section id="founder" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-gold/15 to-navy/15 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tl from-navy/15 to-gold/15 rounded-full blur-2xl" />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-lora">
            Notre <span className="text-gold">Fondateur</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'homme visionnaire derrière GATM et sa passion pour 
            l'excellence dans la formation des talents.
          </p>
        </div>

        {/* Founder Profile */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={founder.image}
                alt={founder.name}
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-xl shadow-lg">
                <div className="text-navy text-center">
                  <div className="text-lg font-bold">{founder.experience}</div>
                  <div className="text-sm font-medium">d'Excellence</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-navy text-center">
                <Award className="text-gold mx-auto mb-2" size={24} />
                <div className="text-sm font-medium">Leader Visionnaire</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-navy mb-2 font-lora">
              {founder.name}
            </h3>
            <p className="text-gold text-lg font-semibold mb-4">{founder.title}</p>
            <p className="text-gray-600 mb-6 leading-relaxed">{founder.background}</p>
            
            <div className="bg-navy p-6 rounded-xl text-white mb-8 relative">
              <Quote className="text-gold mb-4" size={32} />
              <blockquote className="text-lg italic leading-relaxed">
                "{founder.quote}"
              </blockquote>
            </div>

            <div className="space-y-3">
              <h4 className="text-xl font-semibold text-navy mb-4">Réalisations Clés</h4>
              {founder.achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-navy to-navy-light rounded-xl flex items-center justify-center mx-auto mb-6">
                <value.icon className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-12 text-white text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center">
              {/* Logo placeholder */}
              <div className="text-gold text-xl font-bold">G</div>
            </div>
            <div className="text-gold font-semibold text-lg">GATM</div>
          </div>
          <h3 className="text-3xl font-bold mb-4 font-lora">
            Rejoignez l'Aventure GATM
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Découvrez comment notre vision peut transformer votre avenir professionnel 
            et vous propulser vers l'excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold-light transition-colors duration-300">
              Rencontrer notre équipe
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-navy transition-colors duration-300">
              Notre histoire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Fondateur;
