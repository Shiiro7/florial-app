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
            condition: (data, siblingData) => siblingData?.ouvert,
          },
        },
        {
          name: 'heureFermeture',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData?.ouvert,
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
            condition: (data, siblingData) => siblingData?.actif,
          },
        },
        {
          name: 'lien',
          type: 'text',
          label: 'Lien (optionnel)',
          admin: {
            condition: (data, siblingData) => siblingData?.actif,
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
            condition: (data, siblingData) => siblingData?.actif,
          },
        },
      ],
    },

    // ZONE D'INTERVENTION
    {
      name: 'zoneIntervention',
      type: 'array',
      label: 'Zone d\'intervention',
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
