'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Marie Dupont',
    location: 'Beaumont',
    rating: 5,
    comment:
      'Excellent service ! L\'équipe a transformé notre jardin en véritable havre de paix. Professionnels, à l\'écoute et très compétents. Je recommande vivement !',
  },
  {
    id: 2,
    name: 'Jean-Pierre Martin',
    location: 'Thuin',
    rating: 5,
    comment:
      'Très satisfait des travaux d\'élagage réalisés. Travail soigné et équipe sympathique. Le devis était très clair et respecté.',
  },
  {
    id: 3,
    name: 'Sophie Leroy',
    location: 'Charleroi',
    rating: 5,
    comment:
      'Une jardinerie où l\'on trouve de tout avec des conseils de qualité. Les plantes sont magnifiques et l\'accueil est toujours chaleureux.',
  },
  {
    id: 4,
    name: 'Philippe Bernard',
    location: 'Couvin',
    rating: 5,
    comment:
      'Prestation impeccable pour l\'aménagement de notre terrasse. Du conseil jusqu\'à la réalisation, tout était parfait. Merci !',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <Section background="primary">
      <SectionHeader>
        <SectionTitle className="text-white">Ce que disent nos clients</SectionTitle>
        <SectionSubtitle className="text-white/80">
          Plus de 1000 clients satisfaits nous font confiance
        </SectionSubtitle>
      </SectionHeader>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <Quote className="text-primary-200 mb-6" size={48} />
            
            <p className="text-xl md:text-2xl text-earth-700 mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].comment}"
            </p>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-earth-800 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-earth-500">{testimonials[currentIndex].location}</div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={
                      i < testimonials[currentIndex].rating
                        ? 'text-secondary-500 fill-secondary-500'
                        : 'text-earth-300'
                    }
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="text-white" size={24} />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
                aria-label={`Témoignage ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
}
