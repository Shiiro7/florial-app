import { Metadata } from 'next';
import { Award, Users, Leaf, Heart, Target, Shield } from 'lucide-react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'À propos de nous',
  description:
    'Découvrez Florial Centre et Compagnie, votre jardinerie familiale depuis plus de 20 ans à Beaumont, Belgique.',
};

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'Le végétal est notre passion depuis plus de 20 ans. Nous partageons cette passion avec vous.',
  },
  {
    icon: Users,
    title: 'Proximité',
    description: 'Entreprise familiale, nous privilégions le contact humain et le conseil personnalisé.',
  },
  {
    icon: Target,
    title: 'Qualité',
    description: 'Nous sélectionnons avec soin nos plantes et produits pour vous garantir le meilleur.',
  },
  {
    icon: Shield,
    title: 'Confiance',
    description: 'Plus de 1000 clients satisfaits nous font confiance pour leurs projets.',
  },
];

const timeline = [
  { year: '2003', event: 'Création de Florial Centre et Compagnie à Beaumont' },
  { year: '2008', event: 'Extension de notre espace jardinerie' },
  { year: '2012', event: 'Lancement des services d\'aménagement paysager' },
  { year: '2018', event: 'Ouverture de l\'espace animalerie' },
  { year: '2023', event: 'Plus de 20 ans au service de nos clients' },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'À propos de nous' }]} />

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
              <span className="text-primary-400 font-medium mb-2 block">Qui sommes-nous</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Une histoire de passion et de savoir-faire
              </h1>
              <p className="text-xl text-white/80">
                Depuis plus de 20 ans, nous partageons notre amour du végétal avec vous.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Notre histoire */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary-600 font-medium mb-2 block">Notre histoire</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-6">
              Une entreprise familiale au service de votre jardin
            </h2>
            <div className="space-y-4 text-earth-600 leading-relaxed">
              <p>
                Fondée en 2003 à Beaumont, Florial Centre et Compagnie est née d'une passion
                familiale pour le végétal et l'aménagement des espaces verts.
              </p>
              <p>
                Au fil des années, nous avons développé notre expertise tant dans le domaine de
                la jardinerie que dans les services d'aménagement paysager, de création de jardins
                et de travaux forestiers.
              </p>
              <p>
                Aujourd'hui, notre équipe de professionnels passionnés vous accueille dans notre
                jardinerie de Beaumont et intervient dans toute la région pour réaliser vos projets,
                des plus simples aux plus ambitieux.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80"
              alt="Notre équipe"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-display font-bold">20+</div>
              <div className="text-sm">années d'expérience</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Nos valeurs */}
      <Section background="nature">
        <SectionHeader>
          <SectionTitle>Nos valeurs</SectionTitle>
          <SectionSubtitle>
            Des valeurs qui guident notre travail au quotidien
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-earth-800 mb-2">{value.title}</h3>
              <p className="text-earth-600">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader>
          <SectionTitle>Notre parcours</SectionTitle>
          <SectionSubtitle>Les étapes clés de notre développement</SectionSubtitle>
        </SectionHeader>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {item.year}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-0.5 h-full bg-primary-200 mt-4" />
                )}
              </div>
              <div className="flex-1 pt-4">
                <p className="text-lg text-earth-700">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Zone d'intervention */}
      <Section background="light">
        <SectionHeader>
          <SectionTitle>Notre zone d'intervention</SectionTitle>
          <SectionSubtitle>
            Nous intervenons dans toute la région du Hainaut et au-delà
          </SectionSubtitle>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {['Beaumont', 'Thuin', 'Charleroi', 'Couvin', 'Baileux', 'Tournai', 'Mouscron', 'Bruxelles'].map(
            (ville) => (
              <div
                key={ville}
                className="bg-white px-6 py-4 rounded-xl shadow text-center font-medium text-earth-700"
              >
                {ville}
              </div>
            )
          )}
        </div>
      </Section>
    </>
  );
}
