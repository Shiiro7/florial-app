'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '071 58 86 34',
    href: 'tel:071588634',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'florialcentrebeaumont@yahoo.be',
    href: 'mailto:florialcentrebeaumont@yahoo.be',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Chaussée de Charleroi 35, 6500 Beaumont',
    href: 'https://goo.gl/maps/eFTGC2dXZRybeU2w9',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lun-Sam: 9h-18h',
    href: null,
  },
];

export function ContactCTA() {
  return (
    <Section background="light">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.3827899999997!2d4.2538!3d50.2311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDEzJzUyLjAiTiA0wrAxNScxMy43IkU!5e0!3m2!1sfr!2sbe!4v1234567890"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-600 font-medium mb-2 block">Contactez-nous</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
            Besoin d'un devis gratuit ?
          </h2>
          <p className="text-earth-600 text-lg mb-8 leading-relaxed">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et vous
            accompagner dans vos projets de jardinage et d'aménagement.
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <item.icon className="text-primary-600" size={24} />
                </div>
                <div>
                  <div className="text-sm text-earth-500">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-medium text-earth-800 hover:text-primary-600 transition"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-medium text-earth-800">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Demander un devis</Button>
            </Link>
            <a href="tel:071588634">
              <Button variant="secondary" size="lg">
                <Phone size={20} />
                Appeler
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
