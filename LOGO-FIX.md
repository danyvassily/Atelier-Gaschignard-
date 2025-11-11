# Correction du problème du logo en production

## Problème identifié

Le logo ne s'affichait pas sur Vercel avec :
- **Erreur 400** dans les requêtes réseau
- **Taille de 0.1 kB** au lieu de 265 kB
- Le fichier existe bien localement mais ne se charge pas en production

## Causes identifiées

### 1. Attributs étendus macOS
Le fichier `logo.png` avait des attributs étendus macOS :
- `com.apple.quarantine` (fichier mis en quarantaine)
- `com.apple.metadata:kMDLabel_cnbjxp5clvissjl4l55wch54yq`
- `com.apple.lastuseddate#PS`

Ces attributs peuvent causer des problèmes lors du déploiement sur Vercel.

### 2. Optimiseur d'image Next.js
Next.js/Vercel interceptait les requêtes d'images même avec `<img>` standard.

## Solutions appliquées

### 1. Nettoyage des attributs étendus
```bash
xattr -c public/images/logo.png
```

Le fichier n'a plus l'indicateur `@` dans les permissions :
- **Avant** : `-rw-r--r--@ 1 user staff 271050`
- **Après** : `-rw-r--r-- 1 user staff 271050`

### 2. Configuration des headers dans `next.config.js`
Ajout de headers HTTP pour forcer le serveur à servir les fichiers statiques correctement :

```javascript
async headers() {
  return [
    {
      source: '/images/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ]
}
```

### 3. Simplification du code dans `Navigation.tsx`
- Suppression du `useEffect` complexe
- Utilisation d'un simple chemin relatif : `/images/logo.png`
- Pas besoin de chemin absolu ni de cache-busting

## Fichiers modifiés

1. `public/images/logo.png` - Nettoyage des attributs étendus
2. `next.config.js` - Ajout de headers HTTP
3. `components/Navigation.tsx` - Simplification du code

## Vérification

Après déploiement sur Vercel :
1. Le logo devrait se charger avec un statut **200** (au lieu de 400)
2. La taille devrait être **265 kB** (au lieu de 0.1 kB)
3. Pas d'erreur dans la console

## Commandes pour vérifier localement

```bash
# Vérifier qu'il n'y a plus d'attributs étendus
ls -la public/images/logo.png
# Ne devrait plus afficher @ après les permissions

# Vérifier le type de fichier
file public/images/logo.png
# Devrait afficher : PNG image data, 675 x 298, 8-bit/color RGB

# Tester localement
npm run build && npm start
```

## Note importante

Si vous téléchargez de nouvelles images depuis macOS, pensez à toujours nettoyer les attributs étendus avant de les commit :

```bash
xattr -c public/images/nom-du-fichier.png
```

