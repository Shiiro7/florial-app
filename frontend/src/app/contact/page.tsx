'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

const contactInfo = [
  {
    icon: Phone,
    title: 'Téléphone',
    details: ['071 58 86 34', '0495 84 04 61'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['florialcentrebeaumont@yahoo.be'],
  },
  {
    icon: MapPin,
    title: 'Adresse',
    details: ['Chaussée de Charleroi 35', '6500 Beaumont', 'Belgique'],
  },
  {
    icon: Clock,
    title: 'Horaires',
    details: ['Lundi - Samedi: 9h - 18h', 'Dimanche: Fermé'],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'Contact' }]} />

      {/* Hero */}
      <div className="bg-primary-700 text-white py-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/80">
              Une question ? Un projet ? Notre équipe est à votre disposition pour vous
              accompagner.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Informations de contact */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-display font-bold text-earth-800 mb-6">
              Nos coordonnées
            </h2>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-earth-800">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-earth-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 aspect-square rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.3827899999997!2d4.2538!3d50.2311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDEzJzUyLjAiTiA0wrAxNScxMy43IkU!5e0!3m2!1sfr!2sbe!4v1234567890"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-display font-bold text-earth-800 mb-2">
                Envoyez-nous un message
              </h2>
              <p className="text-earth-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs
                délais.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-primary-600" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-earth-800 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-earth-600">
                    Nous avons bien reçu votre message et vous répondrons très prochainement.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-sm font-medium text-earth-700 mb-2"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-earth-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="telephone"
                        className="block text-sm font-medium text-earth-700 mb-2"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                        placeholder="Votre numéro"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="sujet"
                        className="block text-sm font-medium text-earth-700 mb-2"
                      >
                        Sujet *
                      </label>
                      <select
                        id="sujet"
                        name="sujet"
                        required
                        value={formData.sujet}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                      >
                        <option value="">Choisir un sujet</option>
                        <option value="devis">Demande de devis</option>
                        <option value="jardinerie">Question jardinerie</option>
                        <option value="services">Question services</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-earth-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-earth-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition resize-none"
                      placeholder="Décrivez votre projet ou votre question..."
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
