import { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Nos Réalisations',
  description:
    'Découvrez nos réalisations en aménagement de jardins, travaux forestiers et aménagements extérieurs à Beaumont et dans la région.',
};

const realisations = [
  {
    id: 1,
    titre: 'Jardin contemporain à Thuin',
    categorie: 'jardin',
    lieu: 'Thuin',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    slug: 'jardin-contemporain-thuin',
  },
  {
    id: 2,
    titre: 'Terrasse en bois composite',
    categorie: 'amenagement',
    lieu: 'Beaumont',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80',
    slug: 'terrasse-bois-composite',
  },
  {
    id: 3,
    titre: 'Abattage d\'arbres dangereux',
    categorie: 'forestier',
    lieu: 'Couvin',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
    slug: 'abattage-arbres-dangereux',
  },
  {
    id: 4,
    titre: 'Création massifs floraux',
    categorie: 'jardin',
    lieu: 'Charleroi',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    slug: 'creation-massifs-floraux',
  },
  {
    id: 5,
    titre: 'Pose de clôture et portail',
    categorie: 'amenagement',
    lieu: 'Baileux',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=600&q=80',
    slug: 'pose-cloture-portail',
  },
  {
    id: 6,
    titre: 'Élagage de grands arbres',
    categorie: 'forestier',
    lieu: 'Beaumont',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80',
    slug: 'elagage-grands-arbres',
  },
];

const categorieLabels: Record<string, string> = {
  jardin: 'Aménagement de jardin',
  amenagement: 'Aménagement extérieur',
  forestier: 'Travaux forestiers',
  entretien: 'Entretien',
};

export default function RealisationsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Nos Réalisations' }]} />

      {/* Hero */}
      <div className="relative h-[400px] bg-earth-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl text-white">
              <span className="text-primary-400 font-medium mb-2 block">Portfolio</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Nos Réalisations
              </h1>
              <p className="text-xl text-white/80">
                Découvrez quelques-unes de nos réalisations en aménagement paysager, création de
                jardins et travaux forestiers.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Grille */}
      <Section>
        <SectionHeader>
          <SectionTitle>Nos projets récents</SectionTitle>
          <SectionSubtitle>
            Chaque projet est unique et réalisé avec passion par notre équipe
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realisations.map((realisation) => (
            <div
              key={realisation.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={realisation.image}
                  alt={realisation.titre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge>{categorieLabels[realisation.categorie]}</Badge>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-earth-800 mb-2 group-hover:text-primary-600 transition">
                  {realisation.titre}
                </h3>
                <p className="text-earth-500">{realisation.lieu}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Vous avez un projet similaire ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet. Nous nous ferons un plaisir de vous
            accompagner de A à Z.
          </p>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
