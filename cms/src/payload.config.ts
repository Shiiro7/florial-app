import { buildConfig } from 'payload/config';
import path from 'path';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { slateEditor } from '@payloadcms/richtext-slate';

// Collections
import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Pages } from './collections/Pages';
import { Actualites } from './collections/Actualites';
import { Realisations } from './collections/Realisations';
import { Produits } from './collections/Produits';
import { Services } from './collections/Services';
import { Temoignages } from './collections/Temoignages';

// Globals
import { Parametres } from './globals/Parametres';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    meta: {
      titleSuffix: ' - Florial Centre Admin',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  editor: slateEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://localhost:5432/florial',
    },
  }),
  collections: [
    Users,
    Media,
    Pages,
    Actualites,
    Realisations,
    Produits,
    Services,
    Temoignages,
  ],
  globals: [Parametres],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: [
    'http://localhost:3000',
    'https://florialcentre.be',
    'https://www.florialcentre.be',
  ],
  csrf: [
    'http://localhost:3000',
    'https://florialcentre.be',
    'https://www.florialcentre.be',
  ],
  upload: {
    limits: {
      fileSize: 10000000, // 10MB
    },
  },
});
