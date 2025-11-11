# Guide de déploiement sur Vercel

Ce projet est maintenant configuré pour être déployé sur Vercel.

## Prérequis

- Un compte Vercel (gratuit) : [vercel.com](https://vercel.com)
- Le projet Git (GitHub, GitLab ou Bitbucket)

## Déploiement automatique

### Option 1 : Via l'interface Vercel (Recommandé)

1. Connectez-vous à votre compte Vercel
2. Cliquez sur "Add New Project"
3. Importez votre dépôt Git
4. Vercel détectera automatiquement que c'est un projet Next.js
5. Les paramètres suivants seront utilisés automatiquement :
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Cliquez sur "Deploy"

### Option 2 : Via la CLI Vercel

```bash
# Installation de la CLI Vercel (si pas déjà installée)
npm i -g vercel

# Dans le répertoire du projet
cd atelier-gaschignard

# Déploiement
vercel

# Pour la production
vercel --prod
```

## Configuration

Les fichiers suivants ont été configurés pour Vercel :

- **`vercel.json`** : Configuration spécifique à Vercel
- **`.vercelignore`** : Fichiers à exclure du déploiement
- **`next.config.js`** : Configuration Next.js optimisée pour Vercel
- **`tsconfig.json`** : Alias de chemins configurés

## Variables d'environnement

Si vous avez des variables d'environnement à configurer :

1. Allez dans les paramètres du projet sur Vercel
2. Section "Environment Variables"
3. Ajoutez vos variables (ex: `NEXT_PUBLIC_API_URL`)

## Optimisations automatiques

Vercel optimise automatiquement :
- ✅ Images Next.js (optimisation automatique)
- ✅ Code splitting
- ✅ Edge Functions (si nécessaire)
- ✅ CDN global
- ✅ HTTPS automatique

## Régions de déploiement

Le projet est configuré pour être déployé dans la région `cdg1` (Paris). Vous pouvez modifier cela dans `vercel.json` si nécessaire.

## Commandes utiles

```bash
# Développement local
npm run dev

# Build de production local
npm run build

# Démarrer le serveur de production local
npm start

# Linting
npm run lint
```

## Support

Pour plus d'informations sur le déploiement Next.js sur Vercel :
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Next.js](https://nextjs.org/docs)

