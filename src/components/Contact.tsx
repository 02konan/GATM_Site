import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domain: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@gatm.fr',
      link: 'mailto:contact@gatm.fr',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+33 1 23 45 67 89',
      link: 'tel:+33123456789',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: '123 Avenue des Champs-Élysées, 75008 Paris',
      link: 'https://maps.google.com',
    },
    {
      icon: Clock,
      title: 'Horaires',
      value: 'Lun-Ven: 9h-18h, Sam: 9h-12h',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 font-lora">
            Contactez-<span className="text-gold">Nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à transformer votre avenir professionnel ? Nos conseillers experts 
            vous accompagnent dans votre projet d'alternance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-navy mb-6">
              Demander un Entretien
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-semibold text-navy mb-2">Message envoyé !</h4>
                <p className="text-gray-600">Nous vous recontacterons dans les 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-navy font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-navy font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-navy font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors duration-300"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                  <div>
                    <label htmlFor="domain" className="block text-navy font-medium mb-2">
                      Domaine d'intérêt
                    </label>
                    <select
                      id="domain"
                      name="domain"
                      value={formData.domain}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors duration-300"
                    >
                      <option value="">Choisir un domaine</option>
                      <option value="commerce">Commerce</option>
                      <option value="finance">Finance</option>
                      <option value="industrie">Industrie</option>
                      <option value="immobilier">Immobilier</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-navy font-medium mb-2">
                    Votre message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-colors duration-300 resize-none"
                    placeholder="Décrivez-nous votre projet et vos objectifs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-navy font-semibold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center group"
                >
                  Envoyer ma demande
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-8">
              Nos Coordonnées
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                    <info.icon size={24} className="text-gold group-hover:text-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-600 hover:text-gold transition-colors duration-300"
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-gray-200 h-64 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.2482749920623!2d2.2945006156744304!3d48.87373367928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8d%3A0x40b82c3688c9460!2sChamps-%C3%89lys%C3%A9es%2C%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1629814400000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* CTA Box */}
            <div className="mt-8 bg-gradient-to-r from-navy to-navy-light p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">
                Entretien Gratuit
              </h4>
              <p className="text-white/90 mb-4">
                Bénéficiez d'un entretien personnalisé pour définir 
                votre parcours d'alternance idéal.
              </p>
              <button className="bg-gold text-navy px-6 py-3 rounded-lg font-semibold hover:bg-gold-light transition-colors duration-300">
                Réserver un créneau
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;