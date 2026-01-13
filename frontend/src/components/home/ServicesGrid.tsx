'use client';

import Link from 'next/link';
import { Trees, Shovel, Axe, Flower2, Sprout, PawPrint, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Trees,
    title: 'Parcs & Jardins',
    description: 'Création, aménagement et entretien de vos espaces verts',
    href: '/services/parcs-jardins',
    color: 'bg-primary-500',
  },
  {
    icon: Shovel,
    title: 'Aménagements extérieurs',
    description: 'Terrasses, clôtures, allées et espaces de détente',
    href: '/services/amenagements',
    color: 'bg-secondary-500',
  },
  {
    icon: Axe,
    title: 'Travaux forestiers',
    description: 'Abattage, élagage et entretien forestier professionnel',
    href: '/services/travaux-forestiers',
    color: 'bg-earth-600',
  },
  {
    icon: Flower2,
    title: 'Plantes & Fleurs',
    description: 'Large sélection de plantes d\'intérieur et d\'extérieur',
    href: '/jardinerie/plantes',
    color: 'bg-pink-500',
  },
  {
    icon: Sprout,
    title: 'Potager',
    description: 'Tout pour créer et entretenir votre potager',
    href: '/jardinerie/potager',
    color: 'bg-lime-600',
  },
  {
    icon: PawPrint,
    title: 'Animalerie',
    description: 'Alimentation et accessoires pour vos compagnons',
    href: '/jardinerie/animalerie',
    color: 'bg-amber-600',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesGrid() {
  return (
    <Section background="nature">
      <SectionHeader>
        <SectionTitle>Nos Services & Produits</SectionTitle>
        <SectionSubtitle>
          Jardinerie complète et services d'aménagement paysager pour tous vos projets
        </SectionSubtitle>
      </SectionHeader>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={itemVariants}>
            <Link
              href={service.href}
              className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-earth-800 mb-2 group-hover:text-primary-600 transition">
                {service.title}
              </h3>
              <p className="text-earth-600 mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all">
                En savoir plus
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
