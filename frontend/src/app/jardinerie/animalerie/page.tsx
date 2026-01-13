import { Metadata } from 'next';
import { PawPrint } from 'lucide-react';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Animalerie',
  description:
    'Alimentation et accessoires pour vos animaux de compagnie et animaux de basse-cour à Beaumont.',
};

export default function AnimaleriePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Jardinerie', href: '/jardinerie' },
          { label: 'Animalerie' },
        ]}
      />

      {/* Hero */}
      <div className="relative h-[400px] bg-earth-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-amber-600 rounded-xl flex items-center justify-center">
                  <PawPrint size={28} />
                </div>
                <span className="text-amber-400 font-medium">Jardinerie</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Animalerie</h1>
              <p className="text-xl text-white/80">
                Alimentation et accessoires pour vos animaux de compagnie et animaux de
                basse-cour.
              </p>
            </div>
          </Container>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
            Pour vos compagnons
          </h2>
          <p className="text-lg text-earth-600 leading-relaxed">
            Notre rayon animalerie propose une sélection d'aliments de qualité et d'accessoires
            pour le bien-être de vos animaux, qu'ils soient de compagnie ou de basse-cour.
          </p>
        </div>
      </Section>

      <Section background="nature">
        <SectionHeader>
          <SectionTitle>Ce que vous trouverez</SectionTitle>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Alimentation', desc: 'Croquettes, pâtées, graines, foin...' },
            { title: 'Accessoires', desc: 'Cages, aquariums, jouets, gamelles...' },
            { title: 'Hygiène', desc: 'Litières, shampooings, antiparasitaires...' },
            { title: 'Basse-cour', desc: 'Aliments et équipements pour poules, lapins...' },
          ].map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <h3 className="font-bold text-earth-800 mb-2">{item.title}</h3>
              <p className="text-earth-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
