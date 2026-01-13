import { Metadata } from 'next';
import Link from 'next/link';
import { Trees, CheckCircle, ArrowRight } from 'lucide-react';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Parcs & Jardins',
  description:
    'Services de création, aménagement et entretien de parcs et jardins à Beaumont et dans toute la région.',
};

const prestations = [
  {
    title: 'Création de jardins',
    description: 'Conception et réalisation de jardins sur mesure selon vos envies et votre budget.',
    items: [
      'Étude et conception du projet',
      'Préparation du terrain',
      'Plantation d\'arbres et arbustes',
      'Création de massifs floraux',
      'Pose de gazon naturel ou synthétique',
    ],
  },
  {
    title: 'Entretien régulier',
    description: 'Prenez soin de votre jardin tout au long de l\'année avec nos services d\'entretien.',
    items: [
      'Tonte de pelouse',
      'Taille de haies et arbustes',
      'Désherbage et traitement',
      'Ramassage des feuilles',
      'Fertilisation et amendement',
    ],
  },
  {
    title: 'Aménagement paysager',
    description: 'Transformez votre espace extérieur en un véritable lieu de vie.',
    items: [
      'Création d\'espaces verts',
      'Rocailles et jardins japonais',
      'Bassins et points d\'eau',
      'Éclairage paysager',
      'Systèmes d\'arrosage automatique',
    ],
  },
];

export default function ParcsJardinsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Nos Services', href: '/services' },
          { label: 'Parcs & Jardins' },
        ]}
      />

      {/* Hero */}
      <div className="relative h-[450px] bg-earth-900">
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
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center">
                  <Trees size={28} />
                </div>
                <span className="text-primary-400 font-medium">Nos Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Parcs & Jardins
              </h1>
              <p className="text-xl text-white/80">
                Création, aménagement et entretien de vos espaces verts par des professionnels
                passionnés.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Introduction */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
            Donnez vie à vos espaces verts
          </h2>
          <p className="text-lg text-earth-600 leading-relaxed">
            Que vous souhaitiez créer un nouveau jardin, aménager votre espace extérieur ou
            entretenir vos plantations existantes, notre équipe de paysagistes qualifiés est à
            votre disposition. Avec plus de 20 ans d'expérience, nous mettons notre savoir-faire
            au service de vos projets.
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
                    <CheckCircle className="text-primary-500 flex-shrink-0 mt-0.5" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Galerie */}
      <Section>
        <SectionHeader>
          <SectionTitle>Nos réalisations</SectionTitle>
        </SectionHeader>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
            'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
            'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
            'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80',
            'https://images.unsplash.com/photo-1598902108854-10e335adac99?w=600&q=80',
            'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80',
          ].map((src, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img src={src} alt={`Réalisation ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/realisations">
            <Button variant="secondary">
              Voir toutes nos réalisations
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Prêt à transformer votre jardin ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Nous nous déplaçons pour
            étudier votre projet sur place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Demander un devis
              </Button>
            </Link>
            <a href="tel:071588634">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 hover:bg-white/20"
              >
                Appeler : 071 58 86 34
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
