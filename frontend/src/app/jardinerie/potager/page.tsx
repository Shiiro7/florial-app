import { Metadata } from 'next';
import { Sprout } from 'lucide-react';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Potager',
  description:
    'Tout pour votre potager : plants, semences, terreaux et accessoires pour cultiver vos légumes à Beaumont.',
};

export default function PotagerPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Jardinerie', href: '/jardinerie' },
          { label: 'Potager' },
        ]}
      />

      {/* Hero */}
      <div className="relative h-[400px] bg-earth-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-lime-600 rounded-xl flex items-center justify-center">
                  <Sprout size={28} />
                </div>
                <span className="text-lime-400 font-medium">Jardinerie</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Potager</h1>
              <p className="text-xl text-white/80">
                Tout pour créer et entretenir votre potager : plants de légumes, semences,
                terreaux et accessoires.
              </p>
            </div>
          </Container>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
            Cultivez vos propres légumes
          </h2>
          <p className="text-lg text-earth-600 leading-relaxed">
            Rien de tel que des légumes frais de son propre potager ! Nous vous proposons une
            large gamme de plants de légumes, de semences et tous les accessoires nécessaires
            pour réussir vos cultures.
          </p>
        </div>
      </Section>

      <Section background="nature">
        <SectionHeader>
          <SectionTitle>Ce que vous trouverez</SectionTitle>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Plants de légumes', desc: 'Tomates, salades, courgettes, poivrons...' },
            { title: 'Semences', desc: 'Large choix de graines potagères' },
            { title: 'Aromatiques', desc: 'Basilic, persil, thym, menthe...' },
            { title: 'Petits fruits', desc: 'Fraisiers, framboisiers, groseilliers...' },
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
