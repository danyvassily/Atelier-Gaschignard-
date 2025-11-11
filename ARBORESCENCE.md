# Arborescence fonctionnelle — Atelier Gaschignard

## 📋 Structure des pages créées

### ✅ Pages implémentées

1. **Accueil** (`/`)
   - Hero avec photo "Page d'accueil"
   - Titre "ATELIER GASCHIGNARD" en majuscules
   - Sous-titre "by Cyprien Gaschignard"
   - Design sombre élégant

2. **LE CHEF** (`/le-chef`)
   - Photo portrait à gauche
   - Titre "LE CHEF"
   - Texte éditorial à droite (structure prête pour intégration PPTX)
   - Mise en page avec respirations généreuses

3. **SERVICES** (`/services`)
   - Hero avec photo "SERVICES"
   - Titre "SERVICES"
   - Deux blocs de contenu :
     - "Cours et animation d'ateliers de cuisine"
     - "Prestation privée"
   - Structure prête pour intégration textes PPTX

4. **PHOTOS** (`/photos`)
   - Grille photo fluide inspirée de HomemadeLab
   - Utilise strictement le dossier "PHOTOS (FOOD)"
   - Animation légère au survol (zoom/fondu)
   - Pas de border ni shadow
   - Lightbox pour voir les images en grand

5. **CONTACT** (`/contact`)
   - Hero avec photo "CONTACT"
   - Titre "CONTACT"
   - Message d'intention (structure prête)
   - Email : ateliergaschignard@gmail.com (lien cliquable)
   - Lien Instagram : @ateliergaschignard (lien cliquable)

### ❌ Pages supprimées

- **BOOKING** : Supprimée selon spécifications (non affichée)

---

## 🧭 Navigation

### Menu principal
- **LE CHEF** → `/le-chef`
- **SERVICES** → `/services`
- **PHOTOS** → `/photos`
- **CONTACT** → `/contact`

### Logo
- Logo client affiché en haut à gauche
- Au clic, redirige vers l'accueil

### Footer
- Logo client en bas à gauche (remplace toute mention "MAGENTA")
- Copyright

---

## 📁 Structure des fichiers

```
src/
├── App.tsx                    # Routes principales
├── components/
│   ├── Navigation.tsx        # Menu avec logo et liens
│   └── Footer.tsx            # Footer avec logo (remplace MAGENTA)
├── pages/
│   ├── Home.tsx              # Page d'accueil
│   ├── LeChef.tsx            # Page LE CHEF (nouvelle)
│   ├── Services.tsx          # Page SERVICES (modifiée)
│   ├── Photos.tsx            # Page PHOTOS (modifiée, remplace Galerie)
│   └── Contact.tsx           # Page CONTACT (modifiée)
└── index.css                 # Styles globaux (design sombre)
```

---

## 🎨 Design appliqué

### Fond
- Fond principal : `#0a0a0a` (noir profond)
- Fond secondaire : `#1a1a1a` (anthracite)

### Typographie
- **Titres** : Raleway majuscules (font-heading)
- **Texte** : Manrope (font-body)
- **Couleurs texte** : Blanc (`#ffffff`) et gris clair (`#e5e5e5`, `#b3b3b3`)

### Couleur du logo
- Variable `--color-brand-primary` utilisée pour les liens et éléments interactifs
- À mettre à jour avec la couleur exacte du logo une fois identifiée

---

## 📝 Contenu à intégrer

### Page LE CHEF
- [ ] Texte FR exact du PPTX (section LE CHEF)
- [ ] Photo portrait du chef (si disponible dans le dossier)

### Page SERVICES
- [ ] Texte exact "Cours et animation d'ateliers de cuisine" du PPTX
- [ ] Texte exact "Prestation privée" du PPTX

### Page CONTACT
- [ ] Message d'intention exact du PPTX
- [ ] Email : ateliergaschignard@gmail.com ✅
- [ ] Instagram : @ateliergaschignard ✅

---

## 🖼️ Images utilisées

### Images principales
- `/images/page-accueil.jpg` → Page d'accueil
- `/images/services.jpeg` → Page SERVICES
- `/images/contact.jpg` → Page CONTACT
- `/images/logo.png` → Navigation et Footer

### Photos FOOD
- Toutes les images du dossier `/images/food/` utilisées dans la galerie PHOTOS
- Grille responsive avec animation au survol

---

## ✅ Points respectés

- ✅ Menu : LE CHEF, SERVICES, PHOTOS, CONTACT
- ✅ Pas de BOOKING (supprimée)
- ✅ Logo client remplace MAGENTA dans le footer
- ✅ Texte et liens en couleur du logo (variable CSS)
- ✅ Photos strictement du dossier "PHOTOS (FOOD)"
- ✅ Grille inspirée de HomemadeLab
- ✅ Animations légères (zoom/fondu) sans border ni shadow
- ✅ Structure prête pour intégration textes PPTX

---

## 🚀 Prochaines étapes

1. **Intégrer les textes du PPTX** :
   - Section LE CHEF
   - Section "Cours et animation d'ateliers de cuisine"
   - Section "Prestation privée"
   - Message d'intention CONTACT

2. **Vérifier les images** :
   - Photo portrait du chef (si disponible)
   - S'assurer que toutes les images sont bien présentes

3. **Extraire couleur logo** :
   - Identifier la couleur exacte du logo
   - Mettre à jour `--color-brand-primary` dans le CSS

4. **Tests** :
   - Vérifier toutes les routes
   - Tester la navigation
   - Vérifier les liens Instagram et email
   - Tester la galerie photos

---

**Note** : Toutes les pages existantes ont été préservées et réutilisées au maximum. La page Galerie a été renommée en Photos et adaptée selon les spécifications.

