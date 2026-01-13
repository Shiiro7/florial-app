import { Metadata } from 'next';
import Link from 'next/link';
import { Trees, Shovel, Axe, ArrowRight, CheckCircle } from 'lucide-react';
import { Section, SectionHeader, SectionTitle, SectionSubtitle } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
  title: 'Nos Services',
  description:
    'Découvrez nos services d\'aménagement paysager, entretien de jardins et travaux forestiers à Beaumont et dans toute la région.',
};

const services = [
  {
    icon: Trees,
    title: 'Parcs & Jardins',
    slug: 'parcs-jardins',
    description:
      'Création, aménagement et entretien de vos espaces verts. Nous transformons vos idées en réalité.',
    features: [
      'Création de jardins sur mesure',
      'Plantation d\'arbres et arbustes',
      'Pose de gazon et semis',
      'Entretien régulier',
      'Taille de haies et arbustes',
      'Désherbage et traitement',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    color: 'bg-primary-600',
  },
  {
    icon: Shovel,
    title: 'Aménagements extérieurs',
    slug: 'amenagements',
    description:
      'Terrasses, clôtures, allées... Nous créons des espaces de vie extérieurs fonctionnels et esthétiques.',
    features: [
      'Création de terrasses',
      'Pose de clôtures',
      'Allées et chemins',
      'Murets et bordures',
      'Éclairage extérieur',
      'Systèmes d\'arrosage',
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    color: 'bg-secondary-600',
  },
  {
    icon: Axe,
    title: 'Travaux forestiers',
    slug: 'travaux-forestiers',
    description:
      'Abattage, élagage et entretien forestier réalisés par des professionnels qualifiés et équipés.',
    features: [
      'Abattage d\'arbres',
      'Élagage et taille',
      'Dessouchage',
      'Débroussaillage',
      'Broyage de branches',
      'Évacuation des déchets',
    ],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    color: 'bg-earth-700',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Nos Services' }]} />

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
              <span className="text-primary-400 font-medium mb-2 block">Nos Services</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                Des experts à votre service
              </h1>
              <p className="text-xl text-white/80">
                Aménagement, entretien et travaux forestiers : notre équipe de professionnels
                vous accompagne dans tous vos projets.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Services */}
      <Section>
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-6 left-6 w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <service.icon className="text-white" size={32} />
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-earth-800 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-earth-600 mb-6">{service.description}</p>

                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-earth-700">
                      <CheckCircle className="text-primary-500 flex-shrink-0" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href={`/services/${service.slug}`}>
                  <Button>
                    En savoir plus
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Vous avez un projet ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis gratuit et personnalisé. Notre équipe se fera
            un plaisir de vous accompagner.
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
