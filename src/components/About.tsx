import React from 'react';
import { Target, Eye, Heart, Users } from 'lucide-react';

const About: React.FC = () => {

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'Détecter et développer les talents dès le plus jeune âge pour créer les leaders de demain dans le commerce et l\'industrie.',
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'Être le pont entre l\'excellence académique et la réussite professionnelle, en formant une nouvelle génération d\'experts.',
    },
    {
      icon: Heart,
      title: 'Valeurs',
      description: 'Excellence, innovation, accompagnement personnalisé et engagement vers la réussite de chaque talent que nous formons.',
    },
    {
      icon: Users,
      title: 'Approche',
      description: 'Un accompagnement sur-mesure avec des professionnels expérimentés et des entreprises partenaires de premier plan.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full"

        />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-navy/5 rounded-full"

        />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-lora">
            À Propos de <span className="text-gold">GATM</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depuis plus de 10 ans, GATM révolutionne l'alternance en plaçant l'excellence
            et le développement des talents au cœur de sa mission.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"

            >
              <div className="w-16 h-16 bg-gradient-to-r from-navy to-navy-light rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="text-gold" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Logo avec texte */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-20 h-20 rounded-xl flex items-center justify-center">
                <img src="src/img/WhatsApp Image 2025-08-15 à 05.24.23_64901d1a.jpg" alt="GATM Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-navy font-semibold">
                <div className="text-sm">Groupe d'Alternance</div>
                <div className="text-gold font-bold">Talents et Métiers</div>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-navy mb-6 font-lora">
              Notre Expertise au Service de Votre Réussite
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                GATM s'impose comme le leader de l'alternance premium en France,
                spécialisé dans la détection précoce des talents et leur développement
                dans les secteurs d'avenir : commerce, finance, industrie et immobilier.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre approche unique combine excellence académique, accompagnement
                personnalisé et immersion professionnelle au sein d'entreprises partenaires
                rigoureusement sélectionnées.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-navy font-medium">Certification Qualité</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-navy font-medium">Partenariats Premium</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Équipe GATM"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-gold p-6 rounded-xl shadow-lg">
              <div className="text-navy text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm font-medium">Années d'Excellence</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-navy text-center">
                <div className="text-2xl font-bold text-gold">95%</div>
                <div className="text-sm font-medium">Satisfaction Client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;