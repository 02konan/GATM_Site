import React from 'react';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';

const Actualité: React.FC = () => {
  const news = [
    {
      id: 1,
      title: 'GATM signe un partenariat stratégique',
      excerpt: 'Un nouveau partenariat d\'excellence pour former les futurs talents du luxe avec des opportunités uniques d\'alternance.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      date: '15 Janvier 2025',
      author: 'Direction GATM',
      category: 'Partenariats',
      readTime: '3 min',
      featured: true,
    },
    {
      id: 2,
      title: 'Ouverture de notre nouveau campus',
      excerpt: 'GATM étend son réseau avec l\'inauguration d\'un campus ultramoderne de 2000m²',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      date: '10 Janvier 2025',
      author: 'Équipe Communication',
      category: 'Campus',
      readTime: '2 min',
      featured: false,
    },
    {
      id: 3,
      title: 'Taux d\'insertion record : 92% de nos diplômés en CDI',
      excerpt: 'Les résultats exceptionnels de la promotion 2024 confirment l\'excellence de nos programmes d\'alternance.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      date: '8 Janvier 2025',
      author: 'Service Carrières',
      category: 'Résultats',
      readTime: '4 min',
      featured: false,
    },
    {
      id: 6,
      title: 'Prix de l\'Excellence Pédagogique 2024',
      excerpt: 'GATM reçoit le prestigieux prix national pour l\'innovation dans l\'enseignement supérieur.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
      date: '28 Décembre 2024',
      author: 'Direction Académique',
      category: 'Récompenses',
      readTime: '2 min',
      aftered: true,
    },
  ];

  const featuredNews = news.find(item => item.featured);
  const featuredNews_1 = news.find(item => item.aftered);
  const regularNews = news.filter(item => !item.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Partenariats': 'bg-blue-100 text-blue-800',
      'Campus': 'bg-green-100 text-green-800',
      'Résultats': 'bg-gold/20 text-gold-dark',
      'Innovation': 'bg-purple-100 text-purple-800',
      'Événements': 'bg-orange-100 text-orange-800',
      'Récompenses': 'bg-red-100 text-red-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="news" className="py-20 bg-white relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-gold/15 to-navy/15 rounded-full blur-2xl"
        />
        <div 
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-navy/15 to-gold/15 rounded-full blur-2xl"
        />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-lora">
            Nos <span className="text-gold">Actualités</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les dernières nouvelles, innovations et succès de GATM. 
            Restez informé de nos partenariats, événements et réalisations.
          </p>
        </div>

        {/* Featured News */}
        {featuredNews && (
          <div className="mb-16" >
            <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                      À la Une
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredNews.category)} bg-white/20 text-white`}>
                      {featuredNews.category}
                    </span>
                    <div className="flex items-center space-x-2 text-white/80 text-sm">
                      <Calendar size={14} />
                      <span>{featuredNews.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-lora">
                    {featuredNews.title}
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-white/80">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{featuredNews.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{featuredNews.readTime}</span>
                      </div>
                    </div>
                    <button className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors duration-300 flex items-center group">
                      Lire la suite
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular News Grid */}
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {regularNews.slice(0, 6).map((article) => (
            <article 
              key={article.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <User size={14} />
                    <span>{article.author}</span>
                  </div>
                  <button className="text-gold hover:text-gold-dark font-medium text-sm flex items-center group">
                    Lire plus
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {featuredNews_1 && (
          <div className="mb-16" >
            <div className="bg-gold-dark from-navy to-navy-light rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 text-white flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredNews_1.category)} bg-white/20 text-white`}>
                      {featuredNews_1.category}
                    </span>
                    <div className="flex items-center space-x-2 text-white/80 text-sm">
                      <Calendar size={14} />
                      <span>{featuredNews_1.date}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-lora">
                    {featuredNews_1.title}
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    {featuredNews_1.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-white/80">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{featuredNews_1.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{featuredNews_1.readTime}</span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors duration-300 flex items-center group">
                      Lire la suite
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
                    </button>
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredNews_1.image}
                    alt={featuredNews_1.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                      À la Une
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4 font-lora">
            Restez Informé de nos <span className="text-gold">Actualités</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir en exclusivité nos dernières actualités, 
            événements et opportunités d'alternance.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors duration-300"
              />
              <button className="bg-gold hover:bg-gold-light text-navy px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap">
                S'abonner
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Nous respectons votre vie privée. Désabonnement possible à tout moment.
            </p>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center mx-auto group">
            Voir toutes les actualités
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Actualité;