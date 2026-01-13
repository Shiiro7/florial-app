import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumb } from '@/components/shared/Breadcrumb';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Actualités',
  description:
    'Suivez les actualités de Florial Centre : nouveautés, conseils jardinage, événements et promotions.',
};

const actualites = [
  {
    id: 1,
    titre: 'Arrivage de plantes de printemps',
    resume:
      'Découvrez notre nouvelle collection de plantes de printemps : primevères, pensées, renoncules et bien plus encore.',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&q=80',
    date: '2024-03-15',
    slug: 'arrivage-plantes-printemps',
    epingle: true,
  },
  {
    id: 2,
    titre: 'Conseils pour préparer votre potager',
    resume:
      'Le printemps approche ! Voici nos conseils pour bien préparer votre potager et réussir vos semis.',
    image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=600&q=80',
    date: '2024-03-10',
    slug: 'conseils-preparer-potager',
    epingle: false,
  },
  {
    id: 3,
    titre: 'Promotion sur les terreaux',
    resume:
      'Profitez de -20% sur notre gamme de terreaux universels et terreaux spécifiques jusqu\'à fin mars.',
    image: 'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=600&q=80',
    date: '2024-03-05',
    slug: 'promotion-terreaux',
    epingle: false,
  },
  {
    id: 4,
    titre: 'Nouveauté : espace animalerie agrandi',
    resume:
      'Notre rayon animalerie s\'agrandit ! Découvrez notre nouvelle sélection d\'aliments et accessoires.',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80',
    date: '2024-02-28',
    slug: 'nouveaute-espace-animalerie',
    epingle: false,
  },
];

export default function ActualitesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Actualités' }]} />

      {/* Hero */}
      <div className="bg-primary-700 text-white py-16">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Actualités</h1>
            <p className="text-xl text-white/80">
              Suivez les actualités de Florial Centre : nouveautés, conseils jardinage, événements
              et promotions.
            </p>
          </div>
        </Container>
      </div>

      {/* Liste */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {actualites.map((actu) => (
            <article
              key={actu.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={actu.image}
                  alt={actu.titre}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {actu.epingle && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">À la une</Badge>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-earth-500 mb-3">
                  <Calendar size={16} />
                  {formatDate(actu.date)}
                </div>
                <h2 className="text-xl font-bold text-earth-800 mb-3 group-hover:text-primary-600 transition">
                  {actu.titre}
                </h2>
                <p className="text-earth-600 mb-4">{actu.resume}</p>
                <span className="inline-flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all">
                  Lire la suite
                  <ArrowRight size={18} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
