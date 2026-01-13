import { CollectionConfig } from 'payload/types';

export const Realisations: CollectionConfig = {
  slug: 'realisations',
  admin: {
    useAsTitle: 'titre',
    defaultColumns: ['titre', 'categorie', 'lieu', 'dateRealisation', '_status'],
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
