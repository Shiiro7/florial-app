# 🌱 PLAN DE DÉVELOPPEMENT - FLORIAL CENTRE ET COMPAGNIE

## 📋 RÉSUMÉ DU PROJET

**Type**: Site vitrine pour jardinerie et services d'aménagement paysager  
**Client**: Florial Centre et Compagnie (entreprise familiale, 20+ ans d'expérience)  
**Localisation**: Beaumont, Belgique  
**Langue**: Français uniquement  
**Objectifs**: 
- Moderniser la présence en ligne
- Faciliter la prise de contact et demandes de devis
- Mettre en valeur les produits et réalisations
- Permettre une gestion autonome du contenu par l'admin

---

## 🛠️ STACK TECHNIQUE

### Frontend
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Formulaires**: React Hook Form + Zod
- **Icons**: Lucide React
- **Images**: Next/Image avec optimisation automatique

### Backend / CMS
- **CMS**: Payload CMS 2.x
- **Database**: PostgreSQL
- **Upload**: Payload Media (avec transformation d'images)
- **API**: REST + GraphQL (auto-généré par Payload)

### Déploiement
- **Frontend**: Vercel
- **Backend/CMS**: Railway
- **Database**: Railway PostgreSQL
- **Domain**: florialcentre.be

### Outils de développement
- **IDE**: Cursor
- **Version Control**: Git
- **Package Manager**: pnpm (recommandé) ou npm

---

## 📁 ARCHITECTURE DU PROJET

```
florial-website/
│
├── frontend/                      # Application Next.js
│   ├── .next/
│   ├── public/
│   │   ├── images/
│   │   └── favicon.ico
│   │
│   ├── src/
│   │   ├── app/
│   │   │   ├── layout.tsx        # Layout principal
│   │   │   ├── page.tsx          # Page d'accueil
│   │   │   ├── globals.css
│   │   │   │
│   │   │   ├── a-propos/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── jardinerie/
│   │   │   │   ├── page.tsx      # Hub jardinerie
│   │   │   │   ├── plantes/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── potager/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── accessoires/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── animalerie/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── services/
│   │   │   │   ├── page.tsx      # Hub services
│   │   │   │   ├── parcs-jardins/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── amenagements/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── travaux-forestiers/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── realisations/
│   │   │   │   ├── page.tsx      # Liste
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx  # Détail
│   │   │   │
│   │   │   ├── actualites/
│   │   │   │   ├── page.tsx      # Liste
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx  # Détail
│   │   │   │
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   └── api/
│   │   │       └── contact/
│   │   │           └── route.ts  # API endpoint pour formulaire
│   │   │
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   └── MobileMenu.tsx
│   │   │   │
│   │   │   ├── ui/               # Composants réutilisables
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Container.tsx
│   │   │   │   ├── Section.tsx
│   │   │   │   └── Badge.tsx
│   │   │   │
│   │   │   ├── home/             # Composants page accueil
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── PromoBanner.tsx
│   │   │   │   ├── ServicesGrid.tsx
│   │   │   │   ├── AboutSection.tsx
│   │   │   │   ├── NewsSection.tsx
│   │   │   │   ├── TestimonialsCarousel.tsx
│   │   │   │   └── InterventionMap.tsx
│   │   │   │
│   │   │   ├── shared/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── HoursDisplay.tsx
│   │   │   │   ├── SocialLinks.tsx
│   │   │   │   ├── WhatsAppButton.tsx
│   │   │   │   ├── CallButton.tsx
│   │   │   │   ├── Breadcrumb.tsx
│   │   │   │   └── ImageGallery.tsx
│   │   │   │
│   │   │   └── realisations/
│   │   │       ├── RealisationCard.tsx
│   │   │       ├── RealisationGrid.tsx
│   │   │       └── BeforeAfterSlider.tsx
│   │   │
│   │   ├── lib/
│   │   │   ├── payload.ts        # Client API Payload
│   │   │   ├── utils.ts          # Utilitaires
│   │   │   └── constants.ts      # Constantes
│   │   │
│   │   ├── types/
│   │   │   └── payload-types.ts  # Types générés par Payload
│   │   │
│   │   └── styles/
│   │       └── globals.css
│   │
│   ├── .env.local
│   ├── .env.production
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── package.json
│
└── cms/                           # Payload CMS
    ├── src/
    │   ├── collections/
    │   │   ├── Pages.ts
    │   │   ├── Actualites.ts
    │   │   ├── Realisations.ts
    │   │   ├── Produits.ts
    │   │   ├── Services.ts
    │   │   ├── Temoignages.ts
    │   │   ├── Media.ts
    │   │   └── Users.ts
    │   │
    │   ├── globals/
    │   │   └── Parametres.ts      # Config site (horaires, contact, etc.)
    │   │
    │   ├── fields/
    │   │   ├── seo.ts             # Champs SEO réutilisables
    │   │   └── richText.ts        # Config éditeur
    │   │
    │   ├── payload.config.ts
    │   └── server.ts
    │
    ├── .env
    ├── tsconfig.json
    └── package.json
```

---

## 🗂️ MODÈLES DE DONNÉES PAYLOAD CMS

### Collection: Pages

```typescript
// cms/src/collections/Pages.ts

import { CollectionConfig } from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'titre',
    defaultColumns: ['titre', 'slug', 'updatedAt', 'status'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'titre',
      type: 'text',
      required: true,
      label: 'Titre de la page',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL (slug)',
      admin: {
        description: 'Ex: a-propos, services, contact',
      },
    },
    {
      name: 'sections',
      type: 'array',
      label: 'Sections de la page',
      fields: [
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            { label: 'Hero/Bannière', value: 'hero' },
            { label: 'Texte', value: 'texte' },
            { label: 'Texte + Image', value: 'texte-image' },
            { label: 'Galerie Photos', value: 'galerie' },
            { label: 'Grille de Cards', value: 'grid' },
            { label: 'Call-to-Action', value: 'cta' },
            { label: 'Accordéon/FAQ', value: 'accordeon' },
          ],
        },
        {
          name: 'titre',
          type: 'text',
          label: 'Titre de la section',
        },
        {
          name: 'contenu',
          type: 'richText',
          label: 'Contenu',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'images',
          type: 'array',
          label: 'Images (pour galerie)',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'boutons',
          type: 'array',
          label: 'Boutons',
          fields: [
            {
              name: 'texte',
              type: 'text',
              required: true,
            },
            {
              name: 'lien',
              type: 'text',
              required: true,
            },
            {
              name: 'style',
              type: 'select',
              options: [
                { label: 'Principal', value: 'primary' },
                { label: 'Secondaire', value: 'secondary' },
                { label: 'Texte', value: 'text' },
              ],
            },
          ],
        },
        {
          name: 'positionImage',
          type: 'select',
          label: 'Position de l\'image',
          options: [
            { label: 'Gauche', value: 'left' },
            { label: 'Droite', value: 'right' },
          ],
          admin: {
            condition: (data, siblingData) => siblingData.type === 'texte-image',
          },
        },
      ],
    },
    // Champs SEO
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'titre',
          type: 'text',
          label: 'Titre SEO',
          admin: {
            description: 'Titre affiché dans les résultats Google (50-60 caractères)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
          admin: {
            description: 'Description affichée dans Google (150-160 caractères)',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image de partage (réseaux sociaux)',
        },
      ],
    },
  ],
};
```

### Collection: Actualités

```typescript
// cms/src/collections/Actualites.ts

import { CollectionConfig } from 'payload/types';

export const Actualites: CollectionConfig = {
  slug: 'actualites',
  admin: {
    useAsTitle: 'titre',
    defaultColumns: ['titre', 'datePublication', 'epingle', 'status'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'titre',
      type: 'text',
      required: true,
      label: 'Titre',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL (slug)',
      admin: {
        description: 'Généré automatiquement depuis le titre',
      },
    },
    {
      name: 'imagePrincipale',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image principale',
    },
    {
      name: 'resume',
      type: 'textarea',
      required: true,
      label: 'Résumé',
      admin: {
        description: 'Court résumé affiché dans la liste (150-200 caractères)',
      },
    },
    {
      name: 'contenu',
      type: 'richText',
      required: true,
      label: 'Contenu de l\'actualité',
    },
    {
      name: 'galerie',
      type: 'array',
      label: 'Galerie d\'images (optionnel)',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'legende',
          type: 'text',
          label: 'Légende',
        },
      ],
    },
    {
      name: 'datePublication',
      type: 'date',
      required: true,
      label: 'Date de publication',
      defaultValue: () => new Date().toISOString(),
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'epingle',
      type: 'checkbox',
      label: 'Épingler en haut',
      defaultValue: false,
      admin: {
        description: 'Afficher cette actualité en premier',
      },
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'titre',
          type: 'text',
          label: 'Titre SEO',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
        },
      ],
    },
  ],
};
```

### Collection: Réalisations

```typescript
// cms/src/collections/Realisations.ts

import { CollectionConfig } from 'payload/types';

export const Realisations: CollectionConfig = {
  slug: 'realisations',
  admin: {
    useAsTitle: 'titre',
    defaultColumns: ['titre', 'categorie', 'lieu', 'dateRealisation', 'status'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'titre',
      type: 'text',
      required: true,
      label: 'Titre du projet',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL (slug)',
    },
    {
      name: 'categorie',
      type: 'select',
      required: true,
      options: [
        { label: 'Aménagement de jardin', value: 'jardin' },
        { label: 'Aménagement extérieur', value: 'amenagement' },
        { label: 'Travaux forestiers', value: 'forestier' },
        { label: 'Entretien', value: 'entretien' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'Description du projet',
    },
    {
      name: 'imageAvant',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo AVANT',
      admin: {
        description: 'Photo avant les travaux (optionnel)',
      },
    },
    {
      name: 'imageApres',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Photo APRÈS',
    },
    {
      name: 'galerie',
      type: 'array',
      label: 'Galerie de photos',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'legende',
          type: 'text',
          label: 'Légende',
        },
      ],
    },
    {
      name: 'lieu',
      type: 'text',
      label: 'Lieu',
      admin: {
        description: 'Ex: Beaumont, Thuin, Charleroi...',
      },
    },
    {
      name: 'dateRealisation',
      type: 'date',
      label: 'Date de réalisation',
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
        },
      },
    },
    {
      name: 'miseEnAvant',
      type: 'checkbox',
      label: 'Mettre en avant sur la page d\'accueil',
      defaultValue: false,
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'titre',
          type: 'text',
          label: 'Titre SEO',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
        },
      ],
    },
  ],
};
```

### Collection: Produits

```typescript
// cms/src/collections/Produits.ts

import { CollectionConfig } from 'payload/types';

export const Produits: CollectionConfig = {
  slug: 'produits',
  admin: {
    useAsTitle: 'nom',
    defaultColumns: ['nom', 'categorie', 'enStock', 'nouveaute', 'status'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nom',
      type: 'text',
      required: true,
      label: 'Nom du produit',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL (slug)',
    },
    {
      name: 'categorie',
      type: 'select',
      required: true,
      options: [
        { label: 'Plantes d\'intérieur', value: 'plantes-interieur' },
        { label: 'Plantes extérieur', value: 'plantes-exterieur' },
        { label: 'Arbres fruitiers', value: 'arbres-fruitiers' },
        { label: 'Plantes grimpantes', value: 'plantes-grimpantes' },
        { label: 'Plantes vivaces', value: 'plantes-vivaces' },
        { label: 'Plantes annuelles', value: 'plantes-annuelles' },
        { label: 'Plantes aquatiques', value: 'plantes-aquatiques' },
        { label: 'Chrysanthèmes', value: 'chrysanthemes' },
        { label: 'Potager', value: 'potager' },
        { label: 'Accessoires jardin', value: 'accessoires' },
        { label: 'Animalerie', value: 'animalerie' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      label: 'Description',
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Photos du produit',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'prix',
      type: 'number',
      label: 'Prix indicatif (€)',
      admin: {
        description: 'Optionnel - Prix indicatif pour information',
      },
    },
    {
      name: 'enStock',
      type: 'checkbox',
      label: 'En stock',
      defaultValue: true,
    },
    {
      name: 'nouveaute',
      type: 'checkbox',
      label: 'Nouveauté',
      defaultValue: false,
    },
    {
      name: 'promotion',
      type: 'group',
      label: 'Promotion',
      fields: [
        {
          name: 'actif',
          type: 'checkbox',
          label: 'En promotion',
          defaultValue: false,
        },
        {
          name: 'prixPromo',
          type: 'number',
          label: 'Prix promotionnel (€)',
          admin: {
            condition: (data, siblingData) => siblingData.actif,
          },
        },
        {
          name: 'textePromo',
          type: 'text',
          label: 'Texte promo',
          admin: {
            description: 'Ex: -20%, Offre spéciale',
            condition: (data, siblingData) => siblingData.actif,
          },
        },
      ],
    },
  ],
};
```

### Collection: Services

```typescript
// cms/src/collections/Services.ts

import { CollectionConfig } from 'payload/types';

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'nom',
    defaultColumns: ['nom', 'type', 'status'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nom',
      type: 'text',
      required: true,
      label: 'Nom du service',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'URL (slug)',
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Parcs & Jardins', value: 'parcs-jardins' },
        { label: 'Aménagements extérieurs', value: 'amenagements' },
        { label: 'Travaux forestiers', value: 'forestier' },
      ],
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      label: 'Description',
    },
    {
      name: 'icone',
      type: 'text',
      label: 'Nom de l\'icône',
      admin: {
        description: 'Nom de l\'icône Lucide React (ex: Trees, Shovel, Scissors)',
      },
    },
    {
      name: 'imageHeader',
      type: 'upload',
      relationTo: 'media',
      label: 'Image d\'en-tête',
    },
    {
      name: 'prestations',
      type: 'array',
      label: 'Liste des prestations',
      fields: [
        {
          name: 'prestation',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'tarification',
      type: 'richText',
      label: 'Informations tarifs',
      admin: {
        description: 'Informations sur les tarifs, devis gratuit, etc.',
      },
    },
  ],
};
```

### Collection: Témoignages

```typescript
// cms/src/collections/Temoignages.ts

import { CollectionConfig } from 'payload/types';

export const Temoignages: CollectionConfig = {
  slug: 'temoignages',
  admin: {
    useAsTitle: 'nomClient',
    defaultColumns: ['nomClient', 'note', 'dateAvis', 'status'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nomClient',
      type: 'text',
      required: true,
      label: 'Nom du client',
    },
    {
      name: 'ville',
      type: 'text',
      label: 'Ville',
    },
    {
      name: 'note',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      label: 'Note (sur 5)',
    },
    {
      name: 'commentaire',
      type: 'textarea',
      required: true,
      label: 'Commentaire',
    },
    {
      name: 'dateAvis',
      type: 'date',
      required: true,
      label: 'Date de l\'avis',
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'afficherAccueil',
      type: 'checkbox',
      label: 'Afficher sur la page d\'accueil',
      defaultValue: false,
    },
  ],
};
```

### Collection: Media

```typescript
// cms/src/collections/Media.ts

import { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  upload: {
    staticDir: '../public/media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 576,
        position: 'centre',
      },
      {
        name: 'hero',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Texte alternatif',
      admin: {
        description: 'Description de l\'image pour l\'accessibilité et le SEO',
      },
    },
  ],
};
```

### Global: Paramètres

```typescript
// cms/src/globals/Parametres.ts

import { GlobalConfig } from 'payload/types';

export const Parametres: GlobalConfig = {
  slug: 'parametres',
  label: 'Paramètres du site',
  access: {
    read: () => true,
  },
  fields: [
    // ENTREPRISE
    {
      name: 'entreprise',
      type: 'group',
      label: 'Informations entreprise',
      fields: [
        {
          name: 'nom',
          type: 'text',
          required: true,
          defaultValue: 'Florial Centre et Compagnie',
        },
        {
          name: 'slogan',
          type: 'text',
          defaultValue: 'Le Centre de vos envies fleuries !',
        },
        {
          name: 'description',
          type: 'richText',
          label: 'Description de l\'entreprise',
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo',
        },
      ],
    },

    // CONTACT
    {
      name: 'contact',
      type: 'group',
      label: 'Coordonnées',
      fields: [
        {
          name: 'adresse',
          type: 'text',
          required: true,
          defaultValue: 'Chaussée de Charleroi 35',
        },
        {
          name: 'codePostal',
          type: 'text',
          required: true,
          defaultValue: '6500',
        },
        {
          name: 'ville',
          type: 'text',
          required: true,
          defaultValue: 'Beaumont',
        },
        {
          name: 'telephone',
          type: 'text',
          required: true,
          defaultValue: '071 58 86 34',
        },
        {
          name: 'mobile',
          type: 'text',
          defaultValue: '0495 84 04 61',
        },
        {
          name: 'email',
          type: 'email',
          required: true,
          defaultValue: 'florialcentrebeaumont@yahoo.be',
        },
        {
          name: 'tva',
          type: 'text',
          defaultValue: 'BE 0479.886.714',
        },
        {
          name: 'googleMapsUrl',
          type: 'text',
          label: 'Lien Google Maps',
          defaultValue: 'https://goo.gl/maps/eFTGC2dXZRybeU2w9',
        },
        {
          name: 'coordonneesGPS',
          type: 'group',
          label: 'Coordonnées GPS',
          fields: [
            {
              name: 'latitude',
              type: 'number',
              defaultValue: 50.2311,
            },
            {
              name: 'longitude',
              type: 'number',
              defaultValue: 4.2538,
            },
          ],
        },
      ],
    },

    // HORAIRES
    {
      name: 'horaires',
      type: 'array',
      label: 'Horaires d\'ouverture',
      defaultValue: [
        {
          jour: 'Lundi',
          ouvert: true,
          heureOuverture: '09:00',
          heureFermeture: '18:00',
        },
        {
          jour: 'Mardi',
          ouvert: true,
          heureOuverture: '09:00',
          heureFermeture: '18:00',
        },
        {
          jour: 'Mercredi',
          ouvert: true,
          heureOuverture: '09:00',
          heureFermeture: '18:00',
        },
        {
          jour: 'Jeudi',
          ouvert: true,
          heureOuverture: '09:00',
          heureFermeture: '18:00',
        },
        {
          jour: 'Vendredi',
          ouvert: true,
          heureOuverture: '09:00',
          heureFermeture: '18:00',
        },
        {
          jour: 'Samedi',
          ouvert: true,
          heureOuverture: '09:00',
          heureFermeture: '18:00',
        },
        {
          jour: 'Dimanche',
          ouvert: false,
        },
      ],
      fields: [
        {
          name: 'jour',
          type: 'text',
          required: true,
        },
        {
          name: 'ouvert',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'heureOuverture',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData.ouvert,
          },
        },
        {
          name: 'heureFermeture',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData.ouvert,
          },
        },
        {
          name: 'note',
          type: 'text',
          label: 'Note spéciale',
          admin: {
            description: 'Ex: Jours fériés 9h-13h',
          },
        },
      ],
    },

    // RÉSEAUX SOCIAUX
    {
      name: 'reseauxSociaux',
      type: 'group',
      label: 'Réseaux sociaux',
      fields: [
        {
          name: 'facebook',
          type: 'text',
          label: 'URL Facebook',
        },
        {
          name: 'instagram',
          type: 'text',
          label: 'URL Instagram',
        },
        {
          name: 'youtube',
          type: 'text',
          label: 'URL YouTube',
        },
      ],
    },

    // BANNIÈRE PROMO
    {
      name: 'bannierePromo',
      type: 'group',
      label: 'Bannière promotionnelle',
      fields: [
        {
          name: 'actif',
          type: 'checkbox',
          label: 'Afficher la bannière',
          defaultValue: false,
        },
        {
          name: 'texte',
          type: 'text',
          label: 'Texte de la bannière',
          admin: {
            condition: (data, siblingData) => siblingData.actif,
          },
        },
        {
          name: 'lien',
          type: 'text',
          label: 'Lien (optionnel)',
          admin: {
            condition: (data, siblingData) => siblingData.actif,
          },
        },
        {
          name: 'couleur',
          type: 'select',
          label: 'Couleur',
          options: [
            { label: 'Vert', value: 'green' },
            { label: 'Orange', value: 'orange' },
            { label: 'Rouge', value: 'red' },
            { label: 'Bleu', value: 'blue' },
          ],
          admin: {
            condition: (data, siblingData) => siblingData.actif,
          },
        },
      ],
    },

    // ZONE D'INTERVENTION
    {
      name: 'zoneIntervention',
      type: 'array',
      label: 'Zone d\'intervention',
      defaultValue: [
        { ville: 'Beaumont' },
        { ville: 'Thuin' },
        { ville: 'Couvin' },
        { ville: 'Baileux' },
        { ville: 'Tournai' },
        { ville: 'Mouscron' },
        { ville: 'Bruxelles' },
        { ville: 'Charleroi' },
      ],
      fields: [
        {
          name: 'ville',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};
```

---

## 🎨 DESIGN SYSTEM & COMPOSANTS

### Couleurs (Tailwind Config)

```javascript
// frontend/tailwind.config.js

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette nature/jardin
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',  // Vert principal
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',  // Jaune/Doré
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        earth: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',  // Marron terre
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
```

### Composant Header

```typescript
// frontend/src/components/layout/Header.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Barre de contact */}
      <div className="bg-primary-600 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-6">
              <a href="tel:071588634" className="flex items-center gap-2 hover:text-primary-100">
                <Phone size={16} />
                <span className="hidden md:inline">071 58 86 34</span>
              </a>
              <a href="mailto:florialcentrebeaumont@yahoo.be" className="hidden md:inline hover:text-primary-100">
                florialcentrebeaumont@yahoo.be
              </a>
            </div>
            <div className="text-xs">
              Lun-Sam: 9h-18h | Beaumont, Thuin
            </div>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Florial Centre et Compagnie"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="hover:text-primary-600 transition">
              Accueil
            </Link>
            <Link href="/a-propos" className="hover:text-primary-600 transition">
              Qui sommes-nous
            </Link>
            
            {/* Dropdown Jardinerie */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-primary-600 transition">
                Jardinerie
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/jardinerie/plantes" className="block px-4 py-3 hover:bg-primary-50">
                  Plantes
                </Link>
                <Link href="/jardinerie/potager" className="block px-4 py-3 hover:bg-primary-50">
                  Potager
                </Link>
                <Link href="/jardinerie/accessoires" className="block px-4 py-3 hover:bg-primary-50">
                  Accessoires
                </Link>
                <Link href="/jardinerie/animalerie" className="block px-4 py-3 hover:bg-primary-50">
                  Animalerie
                </Link>
              </div>
            </div>

            {/* Dropdown Services */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-primary-600 transition">
                Services
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/services/parcs-jardins" className="block px-4 py-3 hover:bg-primary-50">
                  Parcs & Jardins
                </Link>
                <Link href="/services/amenagements" className="block px-4 py-3 hover:bg-primary-50">
                  Aménagements extérieurs
                </Link>
                <Link href="/services/travaux-forestiers" className="block px-4 py-3 hover:bg-primary-50">
                  Travaux forestiers
                </Link>
              </div>
            </div>

            <Link href="/realisations" className="hover:text-primary-600 transition">
              Nos Réalisations
            </Link>
            <Link href="/actualites" className="hover:text-primary-600 transition">
              Actualités
            </Link>
            <Link href="/contact" className="hover:text-primary-600 transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Devis gratuit</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/" className="block py-2">Accueil</Link>
            <Link href="/a-propos" className="block py-2">Qui sommes-nous</Link>
            
            <div>
              <div className="font-semibold mb-2">Jardinerie</div>
              <div className="pl-4 space-y-2">
                <Link href="/jardinerie/plantes" className="block py-1">Plantes</Link>
                <Link href="/jardinerie/potager" className="block py-1">Potager</Link>
                <Link href="/jardinerie/accessoires" className="block py-1">Accessoires</Link>
                <Link href="/jardinerie/animalerie" className="block py-1">Animalerie</Link>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-2">Services</div>
              <div className="pl-4 space-y-2">
                <Link href="/services/parcs-jardins" className="block py-1">Parcs & Jardins</Link>
                <Link href="/services/amenagements" className="block py-1">Aménagements</Link>
                <Link href="/services/travaux-forestiers" className="block py-1">Travaux forestiers</Link>
              </div>
            </div>

            <Link href="/realisations" className="block py-2">Nos Réalisations</Link>
            <Link href="/actualites" className="block py-2">Actualités</Link>
            <Link href="/contact" className="block py-2">Contact</Link>
            
            <Button asChild className="w-full">
              <Link href="/contact">Devis gratuit</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
```

### Composant Hero (Page d'accueil)

```typescript
// frontend/src/components/home/Hero.tsx

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/images/hero-1.jpg',
    title: 'Votre jardinerie familiale depuis plus de 20 ans',
    subtitle: 'Découvrez notre large gamme de plantes et accessoires',
    cta: 'Découvrir',
    ctaLink: '/jardinerie',
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Des jardins qui vous ressemblent',
    subtitle: 'Aménagement et entretien de parcs et jardins',
    cta: 'Nos services',
    ctaLink: '/services',
  },
  {
    image: '/images/hero-3.jpg',
    title: 'Expertise et passion du végétal',
    subtitle: 'Une équipe à votre écoute pour tous vos projets',
    cta: 'Nous contacter',
    ctaLink: '/contact',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  {slide.subtitle}
                </p>
                <div className="flex gap-4">
                  <Button asChild size="lg">
                    <Link href={slide.ctaLink}>{slide.cta}</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/contact">Devis gratuit</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full transition"
        aria-label="Slide suivant"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
```

---

## 🚀 INSTRUCTIONS DE DÉVELOPPEMENT POUR CURSOR

### Phase 1: Setup Backend (CMS)

```bash
# 1. Créer le projet Payload CMS
mkdir florial-cms && cd florial-cms
npx create-payload-app@latest . --template blank

# 2. Installer les dépendances
pnpm install @payloadcms/db-postgres @payloadcms/richtext-slate

# 3. Configuration
# Créer .env avec:
# DATABASE_URI=postgresql://user:pass@localhost:5432/florial
# PAYLOAD_SECRET=votre-secret-aleatoire-32-caracteres
# PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001

# 4. Créer toutes les collections listées ci-dessus
# 5. Créer le global Parametres
# 6. Tester en local: pnpm dev
# 7. Accéder au dashboard: http://localhost:3001/admin
```

### Phase 2: Setup Frontend (Next.js)

```bash
# 1. Créer le projet Next.js
npx create-next-app@latest florial-frontend --typescript --tailwind --app
cd florial-frontend

# 2. Installer les dépendances
pnpm install lucide-react framer-motion react-hook-form zod @hookform/resolvers

# 3. Configuration .env.local:
# NEXT_PUBLIC_CMS_URL=http://localhost:3001
# NEXT_PUBLIC_SITE_URL=http://localhost:3000

# 4. Créer la structure de dossiers (voir architecture ci-dessus)
# 5. Développer les composants
# 6. Connecter à l'API Payload
# 7. Tester: pnpm dev
```

### Phase 3: Connexion Frontend ↔ Backend

```typescript
// frontend/src/lib/payload.ts

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001';

export async function getParametres() {
  const res = await fetch(`${CMS_URL}/api/globals/parametres`, {
    next: { revalidate: 60 },
  });
  return res.json();
}

export async function getActualites(limit = 10) {
  const res = await fetch(
    `${CMS_URL}/api/actualites?limit=${limit}&sort=-datePublication&where[status][equals]=published`,
    { next: { revalidate: 300 } }
  );
  return res.json();
}

export async function getRealisations(limit = 12) {
  const res = await fetch(
    `${CMS_URL}/api/realisations?limit=${limit}&sort=-dateRealisation&where[status][equals]=published`,
    { next: { revalidate: 300 } }
  );
  return res.json();
}

// Ajouter les autres fonctions similaires...
```

### Phase 4: Déploiement

**Railway (Backend):**
```bash
# 1. Créer un projet Railway
# 2. Ajouter PostgreSQL service
# 3. Ajouter Web Service (Payload)
# 4. Variables d'environnement:
#    - DATABASE_URI (auto depuis Postgres)
#    - PAYLOAD_SECRET
#    - PAYLOAD_PUBLIC_SERVER_URL=https://cms.florialcentre.be

# 5. Deploy: railway up
```

**Vercel (Frontend):**
```bash
# 1. Connecter le repo GitHub
# 2. Variables d'environnement:
#    - NEXT_PUBLIC_CMS_URL=https://cms.florialcentre.be
#    - NEXT_PUBLIC_SITE_URL=https://florialcentre.be

# 3. Deploy automatique à chaque push
```

---

## ✅ CHECKLIST DÉVELOPPEMENT

### Backend (Payload CMS)
- [ ] Installer Payload CMS
- [ ] Configurer PostgreSQL
- [ ] Créer collection Pages
- [ ] Créer collection Actualités
- [ ] Créer collection Réalisations
- [ ] Créer collection Produits
- [ ] Créer collection Services
- [ ] Créer collection Témoignages
- [ ] Créer collection Media
- [ ] Créer collection Users
- [ ] Créer global Parametres
- [ ] Configurer upload d'images
- [ ] Tester le dashboard admin
- [ ] Créer utilisateur admin initial
- [ ] Peupler avec données de base

### Frontend (Next.js)
- [ ] Installer Next.js + TypeScript
- [ ] Configurer Tailwind CSS
- [ ] Créer structure de dossiers
- [ ] Développer composants UI de base
- [ ] Développer Header
- [ ] Développer Footer
- [ ] Développer page Accueil
- [ ] Développer Hero slider
- [ ] Développer section Services
- [ ] Développer section Actualités
- [ ] Développer section Témoignages
- [ ] Développer page À propos
- [ ] Développer pages Jardinerie
- [ ] Développer pages Services
- [ ] Développer page Réalisations (liste)
- [ ] Développer page Réalisation (détail)
- [ ] Développer page Actualités (liste)
- [ ] Développer page Actualité (détail)
- [ ] Développer page Contact
- [ ] Développer formulaire de contact
- [ ] Intégrer Google Maps
- [ ] Ajouter bouton WhatsApp flottant
- [ ] Ajouter bouton Call mobile
- [ ] Optimiser SEO (metadata)
- [ ] Optimiser performance (images)
- [ ] Tester responsive mobile
- [ ] Tester tous les liens

### Intégration & Tests
- [ ] Connecter frontend à Payload API
- [ ] Tester récupération données
- [ ] Tester système de versions
- [ ] Tester draft/publish
- [ ] Tester upload images
- [ ] Tester formulaire contact
- [ ] Tester sur différents navigateurs
- [ ] Tester accessibilité (a11y)
- [ ] Tester vitesse de chargement

### Déploiement
- [ ] Déployer Payload sur Railway
- [ ] Déployer PostgreSQL sur Railway
- [ ] Configurer variables d'environnement
- [ ] Déployer Next.js sur Vercel
- [ ] Configurer domaine
- [ ] Configurer SSL/HTTPS
- [ ] Tester site en production
- [ ] Former l'admin à l'utilisation du CMS

---

## 📝 NOTES IMPORTANTES

### Fonctionnalités Dashboard Admin

L'admin pourra:
✅ **Modifier tout le contenu** via interface visuelle  
✅ **Ajouter/supprimer** des actualités, réalisations, produits  
✅ **Uploader des images** en drag & drop  
✅ **Prévisualiser** avant publication  
✅ **Sauvegarder en brouillon** (draft)  
✅ **Publier** quand prêt  
✅ **Voir l'historique** de toutes les modifications  
✅ **Restaurer** une version précédente  
✅ **Planifier** une publication future  
✅ **Gérer les horaires** facilement  
✅ **Activer/désactiver** la bannière promo  

### Workflow de publication

```
Admin se connecte → Modifie contenu → Save Draft
                                    ↓
                          Bouton Preview → Voir le rendu
                                    ↓
                          Modifications OK ?
                                    ↓
                          Bouton Publish → Site mis à jour
```

### Performance

- Images optimisées automatiquement (Next/Image)
- Cache Vercel CDN
- Revalidation Next.js (ISR)
- PostgreSQL rapide sur Railway

### Sécurité

- HTTPS obligatoire
- Dashboard protégé par login
- Validation des données
- Protection CSRF
- Rate limiting API

---

## 🎯 OBJECTIFS FINAUX

À la fin du développement, vous aurez:

1. ✅ Un **site moderne et professionnel**
2. ✅ Un **dashboard admin complet**
3. ✅ Un système de **gestion de contenu** autonome
4. ✅ Un site **ultra-rapide** et bien référencé
5. ✅ Une infrastructure **scalable** et maintenable
6. ✅ Un site **100% responsive**
7. ✅ Une **base solide** pour futures évolutions

---

## 🆘 BESOIN D'AIDE ?

Si vous rencontrez des problèmes lors du développement:

1. Vérifiez la documentation officielle:
   - [Payload CMS Docs](https://payloadcms.com/docs)
   - [Next.js Docs](https://nextjs.org/docs)
   - [Tailwind CSS Docs](https://tailwindcss.com/docs)

2. Utilisez Cursor AI pour:
   - Générer des composants
   - Déboguer des erreurs
   - Optimiser du code

3. Ressources utiles:
   - [Railway Docs](https://docs.railway.app)
   - [Vercel Docs](https://vercel.com/docs)

---

**Bon développement ! 🚀🌱**
