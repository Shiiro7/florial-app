import { Metadata } from 'next';
import Link from 'next/link';
import { Flower2, Sprout, Wrench, PawPrint, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Jardinerie',
  description:
    'Découvrez notre jardinerie à Beaumont : plantes, potager, accessoires et animalerie. Conseils personnalisés par des experts.',
};

const categories = [
  {
    icon: Flower2,
    title: 'Plantes & Fleurs',
    slug: 'plantes',
    description:
      'Large sélection de plantes d\'intérieur et d\'extérieur, fleurs de saison, arbustes et arbres.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    color: 'bg-pink-500',
  },
  {
    icon: Sprout,
    title: 'Potager',
    slug: 'potager',
    description:
      'Tout pour votre potager : plants, semences, terreaux et accessoires pour cultiver vos légumes.',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600&q=80',
    color: 'bg-lime-600',
  },
  {
    icon: Wrench,
    title: 'Accessoires',
    slug: 'accessoires',
    description:
      'Outillage, pots, terreaux, engrais et tout le nécessaire pour entretenir votre jardin.',
    image: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=600&q=80',
    color: 'bg-earth-600',
  },
  {
    icon: PawPrint,
    title: 'Animalerie',
    slug: 'animalerie',
    description:
      'Alimentation et accessoires pour vos animaux de compagnie et animaux de basse-cour.',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80',
    color: 'bg-amber-600',
  },
];

export default function JardineriePage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Jardinerie' }]} />

      {/* Hero */}
      <div className="relative h-[400px] bg-earth-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl text-white">
              <span className="text-primary-400 font-medium mb-2 block">Notre Jardinerie</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Le Centre de vos envies fleuries !
              </h1>
              <p className="text-xl text-white/80">
                Découvrez notre vaste sélection de plantes, accessoires et produits pour votre
                jardin, avec les conseils de nos experts passionnés.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
            Une jardinerie complète à Beaumont
          </h2>
          <p className="text-lg text-earth-600 leading-relaxed">
            Depuis plus de 20 ans, Florial Centre et Compagnie vous accueille dans sa jardinerie
            à Beaumont. Vous y trouverez tout le nécessaire pour créer et entretenir votre jardin
            de rêve, avec les conseils avisés de notre équipe de passionnés.
          </p>
        </div>
      </Section>

      {/* Catégories */}
      <Section background="nature">
        <SectionHeader>
          <SectionTitle>Nos rayons</SectionTitle>
          <SectionSubtitle>Explorez nos différents univers</SectionSubtitle>
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/jardinerie/${category.slug}`}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div
                  className={`absolute top-4 left-4 w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-earth-800 mb-2 group-hover:text-primary-600 transition">
                  {category.title}
                </h3>
                <p className="text-earth-600 mb-4">{category.description}</p>
                <span className="inline-flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all">
                  Découvrir
                  <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Infos pratiques */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
              Venez nous rendre visite
            </h2>
            <div className="space-y-4 text-earth-600 leading-relaxed mb-6">
              <p>
                Notre jardinerie vous accueille du lundi au samedi de 9h à 18h. Venez découvrir
                nos espaces dédiés aux plantes, au potager, à l'outillage et à l'animalerie.
              </p>
              <p>
                Notre équipe de conseillers est là pour vous guider dans vos choix et vous
                apporter toute son expertise pour réussir vos plantations.
              </p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-primary-800 mb-2">Horaires d'ouverture</h3>
              <p className="text-primary-700">Lundi - Samedi : 9h00 - 18h00</p>
              <p className="text-primary-700">Dimanche : Fermé</p>
            </div>
            <Button asChild>
              <a
                href="https://goo.gl/maps/eFTGC2dXZRybeU2w9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur Google Maps
              </a>
            </Button>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
              alt="Notre jardinerie"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
