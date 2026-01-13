'use client';

import Link from 'next/link';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Award,
    title: '20+ ans d\'expérience',
    description: 'Une expertise reconnue dans la région',
  },
  {
    icon: Users,
    title: 'Entreprise familiale',
    description: 'Un service personnalisé et de proximité',
  },
  {
    icon: Clock,
    title: 'Disponibilité',
    description: 'Ouvert 6 jours sur 7 pour vous servir',
  },
];

const checkpoints = [
  'Conseils personnalisés par des passionnés',
  'Large choix de plantes locales et exotiques',
  'Devis gratuit pour tous vos projets',
  'Intervention dans toute la région',
];

export function AboutSection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
              alt="Notre jardinerie"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80"
              alt="Nos plantes"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg">
            20+
            <span className="text-xs ml-1">ans</span>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-600 font-medium mb-2 block">À propos de nous</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
            Une passion familiale pour le végétal
          </h2>
          <p className="text-earth-600 text-lg mb-6 leading-relaxed">
            Depuis plus de 20 ans, Florial Centre et Compagnie accompagne les amateurs de jardinage
            et les professionnels dans tous leurs projets. Notre équipe passionnée vous accueille
            à Beaumont pour partager son expertise et vous conseiller.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-4 bg-earth-50 rounded-xl">
                <feature.icon className="text-primary-600 mx-auto mb-2" size={32} />
                <h4 className="font-bold text-earth-800 text-sm">{feature.title}</h4>
                <p className="text-earth-500 text-xs">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Checkpoints */}
          <ul className="space-y-3 mb-8">
            {checkpoints.map((item) => (
              <li key={item} className="flex items-center gap-3 text-earth-700">
                <CheckCircle2 className="text-primary-500 flex-shrink-0" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <Link href="/a-propos">
            <Button>En savoir plus sur nous</Button>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
