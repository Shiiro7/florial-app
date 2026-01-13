import { Metadata } from 'next';
import Link from 'next/link';
import { Shovel, CheckCircle, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Aménagements extérieurs',
  description:
    'Services d\'aménagement extérieur : terrasses, clôtures, allées et espaces de vie à Beaumont et dans toute la région.',
};

const prestations = [
  {
    title: 'Terrasses',
    description: 'Création de terrasses en bois, pierre, béton ou dalles pour profiter de votre extérieur.',
    items: [
      'Terrasses en bois exotique ou composite',
      'Terrasses en pierre naturelle',
      'Dalles béton et pavés',
      'Terrasses sur plots',
      'Intégration avec le jardin',
    ],
  },
  {
    title: 'Clôtures & Portails',
    description: 'Délimitez et sécurisez votre propriété avec nos solutions de clôture.',
    items: [
      'Clôtures en bois',
      'Clôtures métalliques',
      'Panneaux occultants',
      'Portails et portillons',
      'Automatisation',
    ],
  },
  {
    title: 'Allées & Accès',
    description: 'Créez des accès pratiques et esthétiques pour votre propriété.',
    items: [
      'Allées carrossables',
      'Chemins piétons',
      'Bordures et délimitations',
      'Éclairage extérieur',
      'Drainage et évacuation',
    ],
  },
];

export default function AmenagementsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Nos Services', href: '/services' },
          { label: 'Aménagements extérieurs' },
        ]}
      />

      {/* Hero */}
      <div className="relative h-[450px] bg-earth-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-secondary-600 rounded-xl flex items-center justify-center">
                  <Shovel size={28} />
                </div>
                <span className="text-secondary-400 font-medium">Nos Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Aménagements extérieurs
              </h1>
              <p className="text-xl text-white/80">
                Terrasses, clôtures, allées : nous créons des espaces de vie extérieurs
                fonctionnels et esthétiques.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
            Créez votre espace de vie extérieur
          </h2>
          <p className="text-lg text-earth-600 leading-relaxed">
            Votre extérieur mérite autant d'attention que votre intérieur. Nos équipes réalisent
            tous types d'aménagements pour transformer votre jardin en véritable lieu de vie :
            terrasses pour vos repas en plein air, allées pratiques, clôtures élégantes...
          </p>
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
                    <CheckCircle className="text-secondary-500 flex-shrink-0 mt-0.5" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="secondary">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Un projet d'aménagement ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit. Nous étudions votre projet et vous proposons
            des solutions adaptées à vos besoins et votre budget.
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
