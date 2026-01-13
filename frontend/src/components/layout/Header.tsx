'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Qui sommes-nous', href: '/a-propos' },
  {
    name: 'Jardinerie',
    href: '/jardinerie',
    children: [
      { name: 'Plantes', href: '/jardinerie/plantes' },
      { name: 'Potager', href: '/jardinerie/potager' },
      { name: 'Accessoires', href: '/jardinerie/accessoires' },
      { name: 'Animalerie', href: '/jardinerie/animalerie' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Parcs & Jardins', href: '/services/parcs-jardins' },
      { name: 'Aménagements extérieurs', href: '/services/amenagements' },
      { name: 'Travaux forestiers', href: '/services/travaux-forestiers' },
    ],
  },
  { name: 'Nos Réalisations', href: '/realisations' },
  { name: 'Actualités', href: '/actualites' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white shadow-md' : 'bg-white'
      )}
    >
      {/* Barre supérieure */}
      <div className="bg-primary-700 text-white">
        <Container>
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <a
                href="tel:071588634"
                className="flex items-center gap-2 hover:text-primary-200 transition"
              >
                <Phone size={14} />
                <span className="hidden sm:inline">071 58 86 34</span>
              </a>
              <a
                href="mailto:florialcentrebeaumont@yahoo.be"
                className="hidden md:flex items-center gap-2 hover:text-primary-200 transition"
              >
                <Mail size={14} />
                florialcentrebeaumont@yahoo.be
              </a>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <MapPin size={14} />
              <span>Lun-Sam: 9h-18h | Beaumont</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Navigation principale */}
      <Container>
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-display text-2xl font-bold">F</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-xl text-primary-700">
                Florial Centre
              </div>
              <div className="text-xs text-earth-500">et Compagnie</div>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button className="flex items-center gap-1 px-4 py-2 text-earth-700 hover:text-primary-600 font-medium transition">
                      {item.name}
                      <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-earth-100">
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-earth-700 hover:bg-primary-50 hover:text-primary-700 transition"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-earth-700 hover:text-primary-600 font-medium transition"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button>Devis gratuit</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-earth-700 hover:text-primary-600 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300',
          mobileMenuOpen ? 'max-h-screen border-t' : 'max-h-0'
        )}
      >
        <Container>
          <nav className="py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-3 text-earth-700 hover:text-primary-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="pl-4 space-y-1 border-l-2 border-primary-200 ml-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block py-2 text-earth-600 hover:text-primary-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">Devis gratuit</Button>
              </Link>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
