import { CollectionConfig } from 'payload/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'titre',
    defaultColumns: ['titre', 'slug', 'updatedAt', '_status'],
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
            condition: (data, siblingData) => siblingData?.type === 'texte-image',
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
