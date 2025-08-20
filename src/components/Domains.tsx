import React from 'react';
import { ShoppingBag, TrendingUp, Factory, Home, Search, Compass, Briefcase, Users } from 'lucide-react';

const Domains: React.FC = () => {
  const domains = [
  {
    icon: ShoppingBag,
    title: 'Commerce',
    description: 'Marketing digital, retail, e-commerce et relation client',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    stats: '200+ postes',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: TrendingUp,
    title: 'Finance',
    description: 'Banque, assurance, gestion de patrimoine et fintech',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    stats: '150+ postes',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Factory,
    title: 'Industrie',
    description: 'Manufacturing, logistique, supply chain et innovation',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    stats: '120+ postes',
    color: 'from-orange-500 to-orange-600', 
  },
  {
    icon: Home,
    title: 'Immobilier',
    description: 'Transaction, gestion locative, promotion immobilière',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    stats: '80+ postes',
    color: 'from-purple-500 to-purple-600', 
  },
  {
    icon: Search,
    title: 'Détection et accompagnement',
    description: 'Un processus rigoureux pour identifier et former les futurs leaders',
    image: '/GATM_Site/img/IMG-20250815-WA0008.jpg',
    stats: '200+ postes',
    color: 'from-blue-500 to-blue-600', 
  },
  {
    icon: Compass,
    title: 'Coaching et orientation professionnelle',
    description: 'Des experts dédiés pour guider chaque talent vers sa voie',
    image: '/GATM_Site/img/IMG-20250815-WA0001.jpg',
    stats: '150+ postes',
    color: 'from-pink-500 to-pink-600', // rose = humain / accompagnement
  },
  {
    icon: Briefcase,
    title: 'Accompagnement à l’insertion professionnelle',
    description: 'Mise en relation avec des entreprises partenaires et opportunités d’alternance pour une meilleure employabilité.',
    image: '/GATM_Site/img/IMG-20250815-WA0005.jpg',
    stats: '120+ postes',
    color: 'from-indigo-500 to-indigo-600', // indigo = sérieux / emploi
  },
  {
    icon: Users,
    title: 'Conseil aux entreprises',
    description: 'Appui dans le recrutement, la formation interne et le développement des compétences de leurs équipes.',
    image: '/GATM_Site/img/IMG-20250815-WA0003.jpg',
    stats: '80+ postes',
    color: 'from-red-500 to-red-600',
  },
];

  return (
    <section id="domains" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-lora">
            Nos <span className="text-gold">Domaines</span> d'Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos secteurs d'expertise où nous formons les talents de demain 
            avec des programmes d'alternance sur-mesure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((domain) => (
            <div 
              key={domain.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 overflow-hidden"
            >
              {/* Image Background */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={domain.image}
                  alt={domain.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${domain.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <domain.icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{domain.stats}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                  {domain.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {domain.description}
                </p>
                
                <button className="w-full bg-gray-100 hover:bg-gold hover:text-navy text-navy py-3 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105">
                  Découvrir les opportunités
                </button>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/0 to-navy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4 font-lora">
              Prêt à Rejoindre l'Excellence ?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Nos conseillers spécialisés vous accompagnent dans le choix 
              du programme d'alternance qui correspond à vos ambitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold-light transition-colors duration-300">
                Demander un entretien
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-navy transition-colors duration-300">
                Télécharger la brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domains;