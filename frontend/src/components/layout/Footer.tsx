import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Leaf,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';

const footerLinks = {
  jardinerie: [
    { name: 'Plantes', href: '/jardinerie/plantes' },
    { name: 'Potager', href: '/jardinerie/potager' },
    { name: 'Accessoires', href: '/jardinerie/accessoires' },
    { name: 'Animalerie', href: '/jardinerie/animalerie' },
  ],
  services: [
    { name: 'Parcs & Jardins', href: '/services/parcs-jardins' },
    { name: 'Aménagements extérieurs', href: '/services/amenagements' },
    { name: 'Travaux forestiers', href: '/services/travaux-forestiers' },
  ],
  liens: [
    { name: 'Accueil', href: '/' },
    { name: 'Qui sommes-nous', href: '/a-propos' },
    { name: 'Nos Réalisations', href: '/realisations' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-earth-900 text-white">
      {/* Section principale */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo et description */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                  <Leaf className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-display font-bold text-xl">Florial Centre</div>
                  <div className="text-xs text-earth-400">et Compagnie</div>
                </div>
              </Link>
              <p className="text-earth-400 mb-6 text-sm leading-relaxed">
                Votre jardinerie familiale depuis plus de 20 ans. Passionnés par le
                végétal, nous mettons notre expertise à votre service.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-earth-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-earth-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-earth-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Liens Jardinerie */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Jardinerie</h3>
              <ul className="space-y-3">
                {footerLinks.jardinerie.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-earth-400 hover:text-primary-400 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Liens Services */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Nos Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-earth-400 hover:text-primary-400 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="font-display font-bold text-lg mb-4 mt-8">Liens utiles</h3>
              <ul className="space-y-3">
                {footerLinks.liens.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-earth-400 hover:text-primary-400 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-bold text-lg mb-4">Contact</h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="https://goo.gl/maps/eFTGC2dXZRybeU2w9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-earth-400 hover:text-primary-400 transition"
                  >
                    <MapPin size={20} className="flex-shrink-0 mt-1" />
                    <span>
                      Chaussée de Charleroi 35
                      <br />
                      6500 Beaumont, Belgique
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:071588634"
                    className="flex items-center gap-3 text-earth-400 hover:text-primary-400 transition"
                  >
                    <Phone size={20} />
                    071 58 86 34
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:florialcentrebeaumont@yahoo.be"
                    className="flex items-center gap-3 text-earth-400 hover:text-primary-400 transition"
                  >
                    <Mail size={20} />
                    florialcentrebeaumont@yahoo.be
                  </a>
                </li>
                <li className="flex items-start gap-3 text-earth-400">
                  <Clock size={20} className="flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-white mb-1">Horaires</div>
                    <div>Lundi - Samedi: 9h - 18h</div>
                    <div>Dimanche: Fermé</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Copyright */}
      <div className="border-t border-earth-800 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-earth-500">
            <p>© {new Date().getFullYear()} Florial Centre et Compagnie. Tous droits réservés.</p>
            <p>TVA: BE 0479.886.714</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
