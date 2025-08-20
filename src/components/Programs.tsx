import React from 'react';
import { Star, Clock, Users, Award } from 'lucide-react';

const Programs: React.FC = () => {
  const testimonials = [
    {
      name: 'Marie Dupont',
      role: 'Alternante Commerce',
      company: 'LVMH',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'GATM m\'a permis de découvrir ma passion pour le luxe et de décrocher un CDI chez LVMH. L\'accompagnement est exceptionnel.',
      rating: 5,
    },
    {
      name: 'Thomas Martin',
      role: 'Alternant Finance',
      company: 'BNP Paribas',
      image: 'https://images.pexels.com/photos/3184348/pexels-photo-3184348.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Grâce au programme GATM, j\'ai pu allier théorie et pratique dans le secteur bancaire. Une expérience transformatrice.',
      rating: 5,
    },
    {
      name: 'Sarah Leroy',
      role: 'Alternante Industrie',
      company: 'Airbus',
      image: 'https://images.pexels.com/photos/3184355/pexels-photo-3184355.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Le programme m\'a ouvert les portes de l\'aéronautique. Aujourd\'hui, je travaille sur des projets d\'avenir chez Airbus.',
      rating: 5,
    },
  ];

  const programs = [
    {
      title: 'Bachelor Alternance',
      duration: '2 mois',
      level: 'Bac+3',
      description: 'Formation complète avec immersion professionnelle dès la première année.',
      features: ['Stage international', 'Projet de fin d\'études', 'Mentoring personnalisé'],
    },
    {
      title: 'Master Alternance',
      duration: '6 mois',
      level: 'Bac+5',
      description: 'Spécialisation expert avec responsabilités managériales en entreprise.',
      features: ['Leadership training', 'Thèse professionnelle', 'Réseau alumni'],
    },
    {
      title: 'Programme Intensif',
      duration: '1 an',
      level: 'Perfectionnement',
      description: 'Formation accélérée pour professionnels en reconversion.',
      features: ['Cours du soir', 'Week-ends intensifs', 'Certification rapide'],
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-lora">
            Formations & <span className="text-gold">Opportunités</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des programmes d'excellence conçus pour révéler votre potentiel 
            et vous propulser vers les plus grandes entreprises.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="text-gold" size={24} />
                  <span className="text-navy font-semibold">{program.duration}</span>
                </div>
                <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium">
                  {program.level}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-navy mb-4">{program.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
              
              <div className="space-y-3 mb-8">
                {program.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <Award className="text-gold flex-shrink-0" size={16} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-navy hover:bg-navy-light text-white py-3 rounded-lg font-semibold transition-colors duration-300">
                En savoir plus
              </button>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-navy mb-12 font-lora">
            Témoignages de nos <span className="text-gold">Talents</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-navy">{testimonial.name}</h4>
                    <p className="text-gold text-sm">{testimonial.role}</p>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold fill-current" size={16} />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-12 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">85%</div>
              <div className="text-navy font-medium">Taux d'insertion</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">550+</div>
              <div className="text-navy font-medium">Diplômés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">150+</div>
              <div className="text-navy font-medium">Entreprises partenaires</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">4.8/5</div>
              <div className="text-navy font-medium">Satisfaction moyenne</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;