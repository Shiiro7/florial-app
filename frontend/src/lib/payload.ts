const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001';

interface FetchOptions {
  revalidate?: number | false;
  tags?: string[];
}

async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { revalidate = 300, tags } = options;

  const res = await fetch(`${CMS_URL}/api${endpoint}`, {
    next: {
      revalidate,
      tags,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
  }

  return res.json();
}

// Paramètres globaux
export async function getParametres() {
  return fetchAPI('/globals/parametres', { revalidate: 60, tags: ['parametres'] });
}

// Actualités
export async function getActualites(limit = 10) {
  return fetchAPI(
    `/actualites?limit=${limit}&sort=-datePublication&where[_status][equals]=published`,
    { revalidate: 300, tags: ['actualites'] }
  );
}

export async function getActualite(slug: string) {
  const data = await fetchAPI<{ docs: unknown[] }>(
    `/actualites?where[slug][equals]=${slug}&where[_status][equals]=published`,
    { revalidate: 300, tags: ['actualites', `actualite-${slug}`] }
  );
  return data.docs[0];
}

// Réalisations
export async function getRealisations(limit = 12, categorie?: string) {
  let query = `/realisations?limit=${limit}&sort=-dateRealisation&where[_status][equals]=published`;
  if (categorie) {
    query += `&where[categorie][equals]=${categorie}`;
  }
  return fetchAPI(query, { revalidate: 300, tags: ['realisations'] });
}

export async function getRealisationsMisesEnAvant() {
  return fetchAPI(
    `/realisations?where[miseEnAvant][equals]=true&where[_status][equals]=published&limit=6`,
    { revalidate: 300, tags: ['realisations'] }
  );
}

export async function getRealisation(slug: string) {
  const data = await fetchAPI<{ docs: unknown[] }>(
    `/realisations?where[slug][equals]=${slug}&where[_status][equals]=published`,
    { revalidate: 300, tags: ['realisations', `realisation-${slug}`] }
  );
  return data.docs[0];
}

// Produits
export async function getProduits(limit = 20, categorie?: string) {
  let query = `/produits?limit=${limit}&where[_status][equals]=published`;
  if (categorie) {
    query += `&where[categorie][equals]=${categorie}`;
  }
  return fetchAPI(query, { revalidate: 300, tags: ['produits'] });
}

export async function getProduitsNouveautes() {
  return fetchAPI(
    `/produits?where[nouveaute][equals]=true&where[_status][equals]=published&limit=8`,
    { revalidate: 300, tags: ['produits'] }
  );
}

// Services
export async function getServices(type?: string) {
  let query = `/services?where[_status][equals]=published`;
  if (type) {
    query += `&where[type][equals]=${type}`;
  }
  return fetchAPI(query, { revalidate: 300, tags: ['services'] });
}

export async function getService(slug: string) {
  const data = await fetchAPI<{ docs: unknown[] }>(
    `/services?where[slug][equals]=${slug}&where[_status][equals]=published`,
    { revalidate: 300, tags: ['services', `service-${slug}`] }
  );
  return data.docs[0];
}

// Témoignages
export async function getTemoignages(limit = 10, accueilOnly = false) {
  let query = `/temoignages?limit=${limit}&sort=-dateAvis&where[_status][equals]=published`;
  if (accueilOnly) {
    query += `&where[afficherAccueil][equals]=true`;
  }
  return fetchAPI(query, { revalidate: 300, tags: ['temoignages'] });
}

// Pages
export async function getPage(slug: string) {
  const data = await fetchAPI<{ docs: unknown[] }>(
    `/pages?where[slug][equals]=${slug}&where[_status][equals]=published`,
    { revalidate: 300, tags: ['pages', `page-${slug}`] }
  );
  return data.docs[0];
}

// Helper pour les images
export function getMediaUrl(media: { url?: string } | string | null): string {
  if (!media) return '/images/placeholder.jpg';
  if (typeof media === 'string') return media;
  if (media.url) return `${CMS_URL}${media.url}`;
  return '/images/placeholder.jpg';
}
