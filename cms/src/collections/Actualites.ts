import { CollectionConfig } from 'payload/types';

export const Actualites: CollectionConfig = {
  slug: 'actualites',
  admin: {
    useAsTitle: 'titre',
    defaultColumns: ['titre', 'datePublication', 'epingle', '_status'],
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
