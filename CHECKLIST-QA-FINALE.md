# CHECKLIST QA AVANT MISE EN LIGNE
## Atelier Gaschignard - Vérification finale

---

## 1. AUCUNE SUPPRESSION DE FICHIER NI D'ÉCRASEMENT NON CONSENTI

**Statut : ✅ CONFORME**

- Tous les fichiers existants ont été préservés
- Aucun fichier n'a été supprimé sans autorisation
- Les modifications ont été apportées uniquement aux fichiers nécessaires
- Les fichiers sources Vite sont toujours présents dans `/src` (non utilisés mais préservés)
- Toutes les images dans `/public/images` sont intactes

**Fichiers modifiés uniquement :**
- `next.config.js` - Configuration pour Vercel
- `tsconfig.json` - Alias de chemins corrigés
- `app/globals.css` - Styles de focus ajoutés
- `app/contact/page.tsx` - Liens email/Instagram ajoutés
- `app/page.tsx` - Apostrophes corrigées
- `components/Navigation.tsx` - Image optimisée
- `components/Footer.tsx` - Apostrophes corrigées

---

## 2. MENUS CORRECTS FR, SANS BOOKING

**Statut : ✅ CONFORME**

**Navigation principale :**
- Accueil ✅
- Services ✅
- Galerie ✅
- Contact ✅
- **BOOKING : Absent** ✅

**Vérifications effectuées :**
- Aucune référence à "BOOKING" dans le code
- Aucune route `/booking` dans l'application
- Tous les menus sont en français
- Navigation cohérente sur toutes les pages

---

## 3. COULEURS CONFORMES : TEXTE = COULEUR DU LOGO

**Statut : ⚠️ À VÉRIFIER**

**Configuration actuelle :**
- Couleur primaire du texte : `#3d352e` (définie dans `tailwind.config.js`)
- Cette couleur est utilisée pour tous les textes principaux
- Couleur du logo : **À extraire et vérifier**

**Action requise :**
- Extraire la valeur hex exacte de la couleur du logo
- Comparer avec `#3d352e` actuellement utilisé
- Si différente, mettre à jour la couleur primaire dans `tailwind.config.js`

**Fichiers concernés :**
- `tailwind.config.js` - Ligne 23 : `900: '#3d352e'`
- `app/globals.css` - Ligne 22 : `color: #3d352e`

---

## 4. TYPOGRAPHIES CHARGÉES, FALLBACK BEBAS NEUE

**Statut : ⚠️ À AJUSTER**

**Typographies actuelles :**
- **Inter** : Chargée via Google Fonts (police principale)
- **Playfair Display** : Chargée via Google Fonts (titres)
- **Bebas Neue** : Non chargée actuellement

**Problème identifié :**
- La ligne "by Cyprien Gaschignard" n'existe pas encore dans l'application
- Si cette ligne doit être ajoutée, utiliser Raleway gras d'abord
- Si impact insuffisant, utiliser Bebas Neue comme fallback uniquement pour cette ligne

**Recommandation :**
- Ajouter Bebas Neue dans `app/layout.tsx` si nécessaire
- Utiliser uniquement pour la ligne "by Cyprien Gaschignard" si Raleway gras est insuffisant

---

## 5. GRILLE PHOTOS : FLUIDE, IMAGES NETTES, HOVER DISCRET

**Statut : ✅ CONFORME**

**Page Galerie (`/app/galerie/page.tsx`) :**
- Grille responsive : `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` ✅
- Images avec `aspect-square` pour éviter les déformations ✅
- Qualité d'image : `quality={85}` pour les vignettes ✅
- Hover discret : `group-hover:scale-110` avec transition douce ✅
- Overlay au hover : `bg-black/30` (30% d'opacité) ✅
- Lightbox pour vue agrandie avec qualité maximale ✅

**Vérifications :**
- Toutes les images utilisent `next/image` pour optimisation automatique
- Pas de déformation grâce à `object-cover` et `fill`
- Transitions fluides avec `transition-smooth` (0.3s)

---

## 6. CONTACT : EMAIL CLIQUABLE, INSTAGRAM CLIQUABLE

**Statut : ✅ CONFORME**

**Page Contact (`/app/contact/page.tsx`) :**

**Email :**
- Lien cliquable : `<a href="mailto:contact@ateliergaschignard.fr">` ✅
- Style : `hover:text-primary-700` pour feedback visuel ✅
- Adresse : `contact@ateliergaschignard.fr` ✅

**Instagram :**
- Lien cliquable : `<a href="https://instagram.com/ateliergaschignard">` ✅
- Ouverture dans nouvel onglet : `target="_blank" rel="noopener noreferrer"` ✅
- Style : `hover:text-primary-700` pour feedback visuel ✅
- Handle : `@ateliergaschignard` ✅

**Formulaire de contact :**
- Tous les champs fonctionnels ✅
- Validation HTML5 activée ✅
- Message de confirmation après envoi ✅

---

## 7. MOBILE D'ABORD : HEADER LISIBLE, MARGES SUFFISANTES

**Statut : ✅ CONFORME**

**Navigation mobile :**
- Header fixe avec hauteur adaptée : `h-20 md:h-24` ✅
- Logo visible et lisible sur mobile ✅
- Menu hamburger fonctionnel avec animation ✅
- Menu plein écran sur mobile avec fond blanc ✅
- Texte de navigation : `text-2xl` sur mobile pour lisibilité ✅

**Marges et espacements :**
- Container : `padding: 0 1.5rem` sur mobile, `0 3rem` sur tablette, `0 4rem` sur desktop ✅
- Sections : `py-20 md:py-32` (padding vertical généreux) ✅
- Espacement entre éléments : `gap-4 md:gap-6` dans les grilles ✅

**Vérifications responsive :**
- Pas de chevauchement de texte ✅
- Images adaptatives avec `fill` et `object-cover` ✅
- Breakpoints cohérents : `sm:`, `md:`, `lg:`, `xl:` ✅

---

## 8. PERFORMANCES : IMAGES NON DÉFORMÉES, PAS D'ASSETS GÉANTS

**Statut : ✅ CONFORME**

**Optimisation des images :**
- Utilisation de `next/image` partout pour optimisation automatique ✅
- Qualité adaptée : `quality={90}` pour hero, `quality={85}` pour galerie ✅
- Lazy loading automatique (sauf images prioritaires) ✅
- Formats préservés (JPEG/JPG) avec optimisation Next.js ✅

**Vérifications :**
- Aucune déformation grâce à `object-cover` et `fill` ✅
- Images avec dimensions appropriées ✅
- Pas d'images géantes chargées inutilement ✅

**Recommandation :**
- Surveiller la taille totale des assets lors du build
- Considérer la conversion WebP si nécessaire (Next.js le fait automatiquement)

---

## 9. ACCESSIBILITÉ : FOCUS VISIBLES, ORDRE DE TAB LOGIQUE

**Statut : ✅ CONFORME**

**Focus visibles :**
- Styles de focus ajoutés dans `app/globals.css` ✅
- Outline : `2px solid #3d352e` avec `outline-offset: 4px` ✅
- Appliqué à tous les éléments interactifs : liens, boutons, inputs, textarea ✅

**Ordre de tab logique :**
- Navigation : Logo → Items menu (ordre sémantique) ✅
- Pages : Contenu dans l'ordre HTML naturel ✅
- Galerie : Images avec navigation clavier fonctionnelle ✅
- Formulaire : Champs dans l'ordre logique ✅

**Éléments interactifs accessibles :**
- Tous les liens accessibles au clavier ✅
- Boutons avec `aria-label` appropriés ✅
- Menu mobile avec `aria-expanded` ✅
- Lightbox avec `aria-label` et bouton fermer accessible ✅

**Respect prefers-reduced-motion :**
- Règle CSS ajoutée pour désactiver les animations si nécessaire ✅

---

## 10. PAS DE CARTE, PAS DE LOGO IA

**Statut : ✅ CONFORME**

**Pas de carte :**
- Aucune référence à Google Maps ✅
- Aucun iframe de carte ✅
- Aucun composant de carte ✅
- Aucune dépendance liée aux cartes ✅

**Pas de logo IA :**
- Logo utilisé : `/images/logo.png` (fichier fourni) ✅
- Aucune génération de logo détectée ✅
- Aucune référence à outils IA (DALL-E, Midjourney, etc.) ✅
- Logo original préservé ✅

---

## 📊 RÉSUMÉ DE CONFORMITÉ

| Critère | Statut | Action requise |
|---------|--------|----------------|
| 1. Aucune suppression/écrasement | ✅ | Aucune |
| 2. Menus FR sans BOOKING | ✅ | Aucune |
| 3. Couleurs texte = logo | ⚠️ | Extraire couleur logo et vérifier |
| 4. Typographies + fallback | ⚠️ | Ajouter Bebas Neue si ligne "by Cyprien" ajoutée |
| 5. Grille PHOTOS fluide | ✅ | Aucune |
| 6. CONTACT email/Instagram cliquables | ✅ | Aucune |
| 7. Mobile d'abord | ✅ | Aucune |
| 8. Performances images | ✅ | Aucune |
| 9. Accessibilité focus/tab | ✅ | Aucune |
| 10. Pas de carte/logo IA | ✅ | Aucune |

---

## ✅ VALIDATION FINALE

**Prêt pour mise en ligne :** OUI (avec 2 points à vérifier)

**Points à vérifier avant mise en ligne :**
1. Extraire la valeur hex exacte de la couleur du logo et comparer avec `#3d352e`
2. Si la ligne "by Cyprien Gaschignard" doit être ajoutée, tester avec Raleway gras puis Bebas Neue si nécessaire

