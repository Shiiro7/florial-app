import { Metadata } from 'next';
import { Flower2 } from 'lucide-react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Plantes & Fleurs',
  description:
    'Découvrez notre sélection de plantes d\'intérieur et d\'extérieur, fleurs de saison, arbustes et arbres à Beaumont.',
};

const categories = [
  {
    title: 'Plantes d\'intérieur',
    description: 'Plantes vertes, plantes fleuries, cactus et succulentes pour décorer votre intérieur.',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80',
  },
  {
    title: 'Plantes d\'extérieur',
    description: 'Arbustes, vivaces, grimpantes et plantes de haie pour aménager votre jardin.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
  },
  {
    title: 'Arbres fruitiers',
    description: 'Pommiers, poiriers, cerisiers et autres fruitiers pour votre verger.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    title: 'Fleurs de saison',
    description: 'Annuelles, bisannuelles et bulbes pour des massifs colorés toute l\'année.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80',
  },
  {
    title: 'Plantes aquatiques',
    description: 'Nénuphars, plantes oxygénantes et plantes de berge pour vos bassins.',
    image: 'https://images.unsplash.com/photo-1530968831187-a937ade97c21?w=600&q=80',
  },
  {
    title: 'Chrysanthèmes',
    description: 'Large choix de chrysanthèmes pour la Toussaint et la décoration automnale.',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80',
  },
];

export default function PlantesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Jardinerie', href: '/jardinerie' },
          { label: 'Plantes & Fleurs' },
        ]}
      />

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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center">
                  <Flower2 size={28} />
                </div>
                <span className="text-pink-400 font-medium">Jardinerie</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Plantes & Fleurs
              </h1>
              <p className="text-xl text-white/80">
                Découvrez notre vaste sélection de plantes d'intérieur et d'extérieur, fleurs de
                saison, arbustes et arbres.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
            Un univers végétal à découvrir
          </h2>
          <p className="text-lg text-earth-600 leading-relaxed">
            Notre équipe sélectionne avec soin les plus belles plantes pour votre intérieur et
            votre jardin. Bénéficiez de nos conseils personnalisés pour choisir les végétaux
            adaptés à vos envies et à votre environnement.
          </p>
        </div>
      </Section>

      {/* Catégories */}
      <Section background="nature">
        <SectionHeader>
          <SectionTitle>Nos univers</SectionTitle>
          <SectionSubtitle>Trouvez la plante idéale pour chaque situation</SectionSubtitle>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-earth-800 mb-2">{category.title}</h3>
                <p className="text-earth-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Venez découvrir nos plantes
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Notre jardinerie vous accueille du lundi au samedi de 9h à 18h. Notre équipe est là
            pour vous conseiller.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://goo.gl/maps/eFTGC2dXZRybeU2w9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Nous trouver
            </a>
            <a href="tel:071588634" className="btn btn-outline">
              071 58 86 34
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
