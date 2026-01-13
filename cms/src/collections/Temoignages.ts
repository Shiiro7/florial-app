import { CollectionConfig } from 'payload/types';

export const Temoignages: CollectionConfig = {
  slug: 'temoignages',
  admin: {
    useAsTitle: 'nomClient',
    defaultColumns: ['nomClient', 'note', 'dateAvis', '_status'],
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
