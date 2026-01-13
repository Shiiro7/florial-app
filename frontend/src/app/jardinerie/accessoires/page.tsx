import { Metadata } from 'next';
import { Wrench } from 'lucide-react';
import { Section, SectionHeader, SectionTitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Accessoires',
  description:
    'Outillage, pots, terreaux, engrais et tout le nécessaire pour entretenir votre jardin à Beaumont.',
};

export default function AccessoiresPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Jardinerie', href: '/jardinerie' },
          { label: 'Accessoires' },
        ]}
      />

      {/* Hero */}
      <div className="relative h-[400px] bg-earth-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 flex items-center">
          <Container>
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-earth-600 rounded-xl flex items-center justify-center">
                  <Wrench size={28} />
                </div>
                <span className="text-earth-400 font-medium">Jardinerie</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Accessoires</h1>
              <p className="text-xl text-white/80">
                Outillage, pots, terreaux, engrais et tout le nécessaire pour entretenir votre
                jardin.
              </p>
            </div>
          </Container>
        </div>
      </div>

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
            Tout pour jardiner
          </h2>
          <p className="text-lg text-earth-600 leading-relaxed">
            Découvrez notre gamme complète d'accessoires et d'outillage pour l'entretien de
            votre jardin. Des outils de qualité aux terreaux et engrais, nous avons tout ce
            qu'il vous faut.
          </p>
        </div>
      </Section>

      <Section background="nature">
        <SectionHeader>
          <SectionTitle>Nos rayons</SectionTitle>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Outillage', desc: 'Bêches, râteaux, sécateurs, arrosoirs...' },
            { title: 'Pots & Jardinières', desc: 'Céramique, plastique, terre cuite...' },
            { title: 'Terreaux', desc: 'Universel, plantes fleuries, semis...' },
            { title: 'Engrais', desc: 'Organiques et minéraux pour toutes vos plantes' },
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
