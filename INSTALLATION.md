# 🚀 Guide d'Installation - Florial Centre

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** 18+ ([télécharger](https://nodejs.org/))
- **pnpm** (recommandé) ou **npm** ([installer pnpm](https://pnpm.io/installation))
- **PostgreSQL** 14+ ([télécharger](https://www.postgresql.org/download/))

## 🔧 Installation

### 1. Cloner le projet (si pas déjà fait)

```bash
git clone https://github.com/Shiiro7/florial-app.git
cd florial-app
```

### 2. Installer les dépendances

#### Frontend
```bash
cd frontend
pnpm install
```

#### CMS (Backend)
```bash
cd ../cms
pnpm install
```

### 3. Configuration de la base de données PostgreSQL

1. Créer une base de données PostgreSQL :
```sql
CREATE DATABASE florial;
```

2. Créer un utilisateur (optionnel) :
```sql
CREATE USER florial_user WITH PASSWORD 'votre_mot_de_passe';
GRANT ALL PRIVILEGES ON DATABASE florial TO florial_user;
```

### 4. Configuration des variables d'environnement

#### CMS (.env)
```bash
cd cms
cp .env.example .env
```

Puis éditez `.env` avec vos informations :
```env
DATABASE_URI=postgresql://florial_user:votre_mot_de_passe@localhost:5432/florial
PAYLOAD_SECRET=votre-secret-aleatoire-tres-long-et-securise-32-caracteres-minimum
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
```

**⚠️ Important** : Générez un `PAYLOAD_SECRET` sécurisé :
```bash
# Sur macOS/Linux
openssl rand -base64 32

# Ou utilisez un générateur en ligne
```

#### Frontend (.env.local)
```bash
cd frontend
cp .env.local.example .env.local
```

Puis éditez `.env.local` :
```env
NEXT_PUBLIC_CMS_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 5. Lancer le projet

#### Terminal 1 - CMS (Backend)
```bash
cd cms
pnpm dev
```

Le CMS sera accessible sur : **http://localhost:3001/admin**

#### Terminal 2 - Frontend
```bash
cd frontend
pnpm dev
```

Le site sera accessible sur : **http://localhost:3000**

## 👤 Créer le premier utilisateur admin

1. Accédez à **http://localhost:3001/admin**
2. Vous serez invité à créer votre premier utilisateur administrateur
3. Remplissez le formulaire avec :
   - Email
   - Mot de passe (minimum 8 caractères)
   - Rôle : Administrateur

## 📝 Prochaines étapes

Une fois le site lancé :

1. **Configurer les paramètres globaux** :
   - Aller dans `/admin/globals/parametres`
   - Remplir les informations de l'entreprise, contact, horaires, etc.

2. **Ajouter du contenu** :
   - Créer des actualités
   - Ajouter des réalisations
   - Ajouter des produits
   - Créer des services
   - Ajouter des témoignages

3. **Uploader des images** :
   - Aller dans `/admin/collections/media`
   - Uploader vos images (logo, photos de réalisations, etc.)

4. **Tester le site** :
   - Naviguer sur http://localhost:3000
   - Vérifier que toutes les pages fonctionnent
   - Tester le formulaire de contact

## 🐛 Dépannage

### Erreur de connexion à la base de données
- Vérifiez que PostgreSQL est bien lancé
- Vérifiez les identifiants dans `.env`
- Testez la connexion : `psql -U florial_user -d florial`

### Erreur "PAYLOAD_SECRET is required"
- Vérifiez que le fichier `.env` existe dans le dossier `cms`
- Vérifiez que `PAYLOAD_SECRET` est bien défini et assez long (32+ caractères)

### Le frontend ne se connecte pas au CMS
- Vérifiez que le CMS est bien lancé sur le port 3001
- Vérifiez `NEXT_PUBLIC_CMS_URL` dans `frontend/.env.local`

### Erreurs TypeScript
- Exécutez `pnpm install` dans les deux dossiers
- Vérifiez que Node.js est en version 18+

## 📚 Ressources

- [Documentation Payload CMS](https://payloadcms.com/docs)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)

## 🆘 Besoin d'aide ?

Si vous rencontrez des problèmes, vérifiez :
1. Les logs dans les terminaux
2. La console du navigateur (F12)
3. Les fichiers `.env` sont bien configurés
