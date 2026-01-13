import { CollectionConfig } from 'payload/types';

export const Produits: CollectionConfig = {
  slug: 'produits',
  admin: {
    useAsTitle: 'nom',
    defaultColumns: ['nom', 'categorie', 'enStock', 'nouveaute', '_status'],
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
            condition: (data, siblingData) => siblingData?.actif,
          },
        },
        {
          name: 'textePromo',
          type: 'text',
          label: 'Texte promo',
          admin: {
            description: 'Ex: -20%, Offre spéciale',
            condition: (data, siblingData) => siblingData?.actif,
          },
        },
      ],
    },
  ],
};
