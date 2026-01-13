# 🌱 Florial Centre et Compagnie

Site vitrine moderne pour Florial Centre et Compagnie, une jardinerie familiale avec plus de 20 ans d'expérience située à Beaumont, Belgique.

## 📋 Description

Ce projet comprend :
- **Frontend** : Application Next.js 14 avec TypeScript et Tailwind CSS
- **Backend/CMS** : Payload CMS 2.x avec PostgreSQL

## 🛠️ Stack Technique

### Frontend
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- Lucide React

### Backend
- Payload CMS 2.x
- PostgreSQL
- REST + GraphQL API

## 🚀 Installation

### Prérequis
- Node.js 18+
- pnpm (recommandé) ou npm
- PostgreSQL

### Frontend

```bash
cd frontend
pnpm install
pnpm dev
```

Le site sera accessible sur http://localhost:3000

### CMS (Backend)

```bash
cd cms
pnpm install
pnpm dev
```

Le dashboard admin sera accessible sur http://localhost:3001/admin

## 📁 Structure du Projet

```
florial-app/
├── frontend/          # Application Next.js
│   ├── src/
│   │   ├── app/       # Pages (App Router)
│   │   ├── components/# Composants React
│   │   ├── lib/       # Utilitaires et API
│   │   └── types/     # Types TypeScript
│   └── public/        # Assets statiques
│
└── cms/               # Payload CMS
    └── src/
        ├── collections/# Collections de données
        ├── globals/    # Paramètres globaux
        └── fields/     # Champs réutilisables
```

## 🔧 Variables d'environnement

### Frontend (.env.local)
```
NEXT_PUBLIC_CMS_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### CMS (.env)
```
DATABASE_URI=postgresql://user:pass@localhost:5432/florial
PAYLOAD_SECRET=votre-secret-aleatoire-32-caracteres
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
```

## 📝 Fonctionnalités

- ✅ Site vitrine moderne et responsive
- ✅ Dashboard admin complet pour gestion du contenu
- ✅ Gestion des actualités
- ✅ Portfolio de réalisations avec avant/après
- ✅ Catalogue produits de la jardinerie
- ✅ Présentation des services
- ✅ Témoignages clients
- ✅ Formulaire de contact et demande de devis
- ✅ Intégration Google Maps
- ✅ SEO optimisé

## 📄 Licence

Projet privé - Tous droits réservés © Florial Centre et Compagnie
