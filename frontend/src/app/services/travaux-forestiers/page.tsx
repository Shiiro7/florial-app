import { Metadata } from 'next';
import Link from 'next/link';
import { Axe, CheckCircle, AlertTriangle } from 'lucide-react';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Travaux forestiers',
  description:
    'Services de travaux forestiers professionnels : abattage, élagage, dessouchage à Beaumont et dans toute la région.',
};

const prestations = [
  {
    title: 'Abattage d\'arbres',
    description: 'Abattage sécurisé d\'arbres de toutes tailles, même en milieu contraint.',
    items: [
      'Abattage directionnel',
      'Démontage par section',
      'Abattage en milieu urbain',
      'Gestion des arbres dangereux',
      'Évacuation et nettoyage',
    ],
  },
  {
    title: 'Élagage & Taille',
    description: 'Entretien et mise en forme de vos arbres pour leur santé et votre sécurité.',
    items: [
      'Élagage sanitaire',
      'Taille de formation',
      'Éclaircissement de couronne',
      'Haubanage et consolidation',
      'Taille douce et raisonnée',
    ],
  },
  {
    title: 'Débroussaillage',
    description: 'Nettoyage et entretien de terrains boisés ou en friche.',
    items: [
      'Débroussaillage mécanique',
      'Défrichage de terrains',
      'Entretien de sous-bois',
      'Broyage de végétaux',
      'Mise en conformité DFCI',
    ],
  },
];

export default function TravauxForestiersPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Nos Services', href: '/services' },
          { label: 'Travaux forestiers' },
        ]}
      />

      {/* Hero */}
      <div className="relative h-[450px] bg-earth-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-earth-700 rounded-xl flex items-center justify-center">
                  <Axe size={28} />
                </div>
                <span className="text-earth-400 font-medium">Nos Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Travaux forestiers
              </h1>
              <p className="text-xl text-white/80">
                Abattage, élagage et entretien forestier réalisés par des professionnels
                qualifiés et équipés.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Avertissement */}
      <Section>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 max-w-3xl mx-auto">
          <div className="flex gap-4">
            <AlertTriangle className="text-amber-600 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">Travaux dangereux</h3>
              <p className="text-amber-700">
                Les travaux forestiers sont des opérations dangereuses qui nécessitent une
                expertise professionnelle et un équipement adapté. Ne prenez aucun risque et
                faites appel à nos équipes qualifiées pour tous vos travaux d'abattage et
                d'élagage.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Prestations */}
      <Section background="nature">
        <SectionHeader>
          <SectionTitle>Nos prestations</SectionTitle>
        </SectionHeader>

        <div className="grid md:grid-cols-3 gap-8">
          {prestations.map((prestation) => (
            <div key={prestation.title} className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-earth-800 mb-3">{prestation.title}</h3>
              <p className="text-earth-600 mb-6">{prestation.description}</p>
              <ul className="space-y-3">
                {prestation.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-earth-700">
                    <CheckCircle className="text-earth-600 flex-shrink-0 mt-0.5" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Équipement */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
              Équipement professionnel
            </h2>
            <p className="text-lg text-earth-600 mb-6">
              Nous disposons d'un parc d'équipements professionnels pour réaliser tous types de
              travaux forestiers en toute sécurité :
            </p>
            <ul className="space-y-3">
              {[
                'Tronçonneuses professionnelles',
                'Broyeur de branches',
                'Nacelle élévatrice',
                'Équipements de sécurité EPI',
                'Véhicules d\'évacuation',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-earth-700">
                  <CheckCircle className="text-primary-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
              alt="Travaux forestiers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Besoin d'un devis ?
          </h2>
          <p className="text-xl text-earth-400 mb-8 max-w-2xl mx-auto">
            Nous nous déplaçons gratuitement pour évaluer vos besoins et vous proposer un devis
            détaillé.
          </p>
          <Link href="/contact">
            <Button size="lg">Demander un devis gratuit</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
