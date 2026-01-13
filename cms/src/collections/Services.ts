import { CollectionConfig } from 'payload/types';

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'nom',
    defaultColumns: ['nom', 'type', '_status'],
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
