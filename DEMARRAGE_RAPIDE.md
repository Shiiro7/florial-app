# 🚀 Démarrage Rapide

## ✅ Ce qui est déjà fait

- ✅ Dépendances frontend installées
- ✅ Dépendances CMS installées  
- ✅ Fichiers `.env` créés avec configuration par défaut
- ✅ Code poussé sur GitHub

## 🎯 Pour lancer le projet

### 1. Créer la base de données PostgreSQL

```bash
# Se connecter à PostgreSQL
psql postgres

# Créer la base de données
CREATE DATABASE florial;

# Quitter
\q
```

### 2. Lancer le CMS (Terminal 1)

```bash
cd cms
npm run dev
```

**→ Accessible sur : http://localhost:3001/admin**

À la première visite, vous devrez créer votre compte administrateur.

### 3. Lancer le Frontend (Terminal 2)

```bash
cd frontend
npm run dev
```

**→ Accessible sur : http://localhost:3000**

## ⚙️ Configuration

### Base de données

Si votre PostgreSQL utilise un utilisateur/mot de passe différent, modifiez `cms/.env` :

```env
DATABASE_URI=postgresql://utilisateur:mot_de_passe@localhost:5432/florial
```

### Ports

Par défaut :
- CMS : port 3001
- Frontend : port 3000

Si ces ports sont occupés, modifiez les fichiers `.env` respectifs.

## 📝 Première utilisation

1. **Créer votre compte admin** :
   - Aller sur http://localhost:3001/admin
   - Remplir le formulaire de création de compte

2. **Configurer les paramètres** :
   - Aller dans `/admin/globals/parametres`
   - Remplir les informations de l'entreprise, contact, horaires

3. **Ajouter du contenu** :
   - Actualités
   - Réalisations
   - Produits
   - Services
   - Témoignages

4. **Tester le site** :
   - Visiter http://localhost:3000
   - Vérifier toutes les pages

## 🐛 Problèmes courants

### PostgreSQL n'est pas lancé
```bash
# macOS (Homebrew)
brew services start postgresql

# Linux
sudo systemctl start postgresql
```

### Port déjà utilisé
Changez le port dans les fichiers `.env` ou arrêtez le processus qui utilise le port.

### Erreur de connexion à la base
Vérifiez que :
- PostgreSQL est lancé
- La base de données `florial` existe
- Les identifiants dans `cms/.env` sont corrects

## 🎉 C'est parti !

Votre site Florial Centre est prêt à être utilisé !
