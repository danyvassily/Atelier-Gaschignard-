# Solution définitive pour le logo en production

## Problème
Le logo affichait une erreur 400 sur Vercel avec une taille de 0.1 kB au lieu de 265 kB.
Les requêtes passaient par l'optimiseur Next.js : `/image?url=%2Fimages%2Flogo.png&w=96&q=75`

## Cause racine
Next.js/Vercel intercepte TOUTES les images, même les balises `<img>` standard, et les passe par son optimiseur d'images qui échoue.

## Solutions appliquées

### 1. Désactivation de l'optimiseur d'images (`next.config.js`)
```javascript
images: {
  unoptimized: true,  // Désactive complètement l'optimiseur
}
```

### 2. Déplacement du logo
- Copié de `public/images/logo.png` vers `public/logo.png`
- Chemin plus court = moins de risque d'interception

### 3. Désactivation du srcset (`Navigation.tsx`)
```javascript
<img 
  src="/logo.png"
  srcSet=""  // Force la désactivation du srcset automatique
/>
```

### 4. Nettoyage des attributs macOS
```bash
xattr -c public/logo.png
```

### 5. Headers HTTP personnalisés
```javascript
async headers() {
  return [
    {
      source: '/logo.png',
      headers: [
        { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
      ]
    }
  ]
}
```

## Vérification avant déploiement

```bash
# 1. Vérifier que le fichier existe et n'a pas d'attributs étendus
ls -la public/logo.png
# Doit afficher : -rw-r--r-- (PAS de @)

# 2. Vérifier la taille
ls -lh public/logo.png
# Doit afficher : ~265K

# 3. Vérifier le type
file public/logo.png
# Doit afficher : PNG image data, 675 x 298

# 4. Tester localement
npm run build && npm start
# Ouvrir http://localhost:3000 et vérifier le logo dans DevTools
```

## Après déploiement sur Vercel

1. Ouvrir DevTools > Network
2. Filtrer par "logo"
3. Vérifier :
   - URL : doit être `/logo.png` (pas `/image?url=...`)
   - Status : 200 (pas 400)
   - Size : ~265 kB (pas 0.1 kB)
   - Type : image/png

## Si le problème persiste

### Option A : Utiliser un background-image CSS
```css
.logo {
  background-image: url('/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
}
```

### Option B : Encoder en base64 (pour petites images uniquement)
```javascript
const logoBase64 = 'data:image/png;base64,iVBORw0KGgo...'
<img src={logoBase64} />
```

### Option C : Utiliser un CDN externe
1. Uploader le logo sur Cloudinary, Imgur ou S3
2. Utiliser l'URL complète : `https://cdn.example.com/logo.png`

## Fichiers modifiés
- ✅ `next.config.js` - unoptimized: true + headers
- ✅ `public/logo.png` - copié et nettoyé
- ✅ `components/Navigation.tsx` - src="/logo.png" + srcSet=""
- ✅ `.vercelignore` - forcer l'inclusion des PNG

## Commandes de déploiement
```bash
git add .
git commit -m "fix: solution définitive pour le logo (désactivation optimiseur)"
git push
```

