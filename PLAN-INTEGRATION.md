# Plan d'intégration — Design System
## Application du design chic, sobre et luxueux sur les pages

---

## 🎯 OBJECTIFS D'INTÉGRATION

Transformer l'interface actuelle (fond clair) en design sombre élégant avec :
- Fond noir/anthracite profond
- Texte clair (blanc/gris clair)
- Grands espaces blancs
- Typographies Raleway (titres) et Manrope (texte)
- Animations douces et discrètes
- Accessibilité AA garantie

---

## 📄 PAGE PAR PAGE

### 1. PAGE D'ACCUEIL (`/`)

#### Hero Section
- **Fond :** `#0a0a0a` (noir profond)
- **Image hero :** Overlay `rgba(0, 0, 0, 0.5)` pour assombrir
- **Titre H1 :** Raleway majuscules, `72px` desktop, `48px` mobile, `900` weight, `#ffffff`
- **Sous-titre :** Manrope, `20px`, `400` weight, `#e5e5e5`
- **Boutons CTA :** 
  - Primaire : Fond `--color-brand-primary`, texte `#ffffff`
  - Secondaire : Bordure `rgba(255, 255, 255, 0.2)`, texte `#ffffff`
- **Espacement :** `160px` vertical (section hero)

#### Section "À propos"
- **Fond :** `#0a0a0a` (noir profond)
- **Titre H2 :** Raleway majuscules, `40px`, `700` weight, `#ffffff`
- **Texte :** Manrope, `16px`, `28px` line-height, `#e5e5e5`
- **Image :** Bordure subtile `rgba(255, 255, 255, 0.05)` si nécessaire
- **Espacement :** `96px` vertical entre sections

#### Galerie préview
- **Fond :** `#1a1a1a` (anthracite)
- **Titre H2 :** Raleway majuscules, `40px`, `700` weight, `#ffffff`
- **Grille images :** Gap `24px` entre images
- **Images :** Hover scale `1 → 1.02` en `200ms`
- **Overlay hover :** `rgba(255, 255, 255, 0.1)`

#### Section CTA finale
- **Fond :** `#0a0a0a` (noir profond)
- **Titre H2 :** Raleway majuscules, `40px`, `700` weight, `#ffffff`
- **Bouton :** Fond `--color-brand-primary`, texte `#ffffff`

---

### 2. PAGE SERVICES (`/services`)

#### Hero Section
- **Fond :** `#0a0a0a` avec image en overlay
- **Titre H1 :** Raleway majuscules, `56px`, `800` weight, `#ffffff`
- **Overlay image :** `rgba(0, 0, 0, 0.6)`

#### Grille de services
- **Fond :** `#0a0a0a` (noir profond)
- **Cards services :** 
  - Fond `#1f1f1f` (surface élevée)
  - Padding `32px`
  - Hover scale `1 → 1.01` en `200ms`
- **Titres H3 :** Raleway majuscules, `32px`, `700` weight, `#ffffff`
- **Texte :** Manrope, `16px`, `28px` line-height, `#e5e5e5`
- **Espacement :** `48px` entre cards

#### Section Processus
- **Fond :** `#1a1a1a` (anthracite)
- **Titre H2 :** Raleway majuscules, `40px`, `700` weight, `#ffffff`
- **Numéros (01, 02, 03) :** Raleway, `72px`, `900` weight, `rgba(255, 255, 255, 0.1)` (très discret)
- **Titres H3 :** Raleway majuscules, `32px`, `700` weight, `#ffffff`
- **Texte :** Manrope, `16px`, `28px` line-height, `#e5e5e5`

---

### 3. PAGE GALERIE (`/galerie`)

#### Hero Section
- **Fond :** `#0a0a0a` avec image en overlay
- **Titre H1 :** Raleway majuscules, `56px`, `800` weight, `#ffffff`
- **Overlay image :** `rgba(0, 0, 0, 0.6)`

#### Grille photos
- **Fond :** `#0a0a0a` (noir profond)
- **Grille :** Gap `16px` mobile, `24px` desktop
- **Images :** 
  - Aspect ratio carré `1:1`
  - Hover scale `1 → 1.02` en `200ms`
  - Overlay hover `rgba(255, 255, 255, 0.1)`
- **Lightbox :** 
  - Fond `rgba(0, 0, 0, 0.95)`
  - Bouton fermer : `#ffffff`, hover opacity `0.8`

---

### 4. PAGE CONTACT (`/contact`)

#### Hero Section
- **Fond :** `#0a0a0a` avec image en overlay
- **Titre H1 :** Raleway majuscules, `56px`, `800` weight, `#ffffff`
- **Overlay image :** `rgba(0, 0, 0, 0.6)`

#### Section Contact
- **Fond :** `#0a0a0a` (noir profond)
- **Titre H2 :** Raleway majuscules, `40px`, `700` weight, `#ffffff`
- **Texte intro :** Manrope, `16px`, `28px` line-height, `#e5e5e5`

#### Informations de contact
- **Labels :** Raleway majuscules, `12px`, `0.1em` letter-spacing, `#b3b3b3`
- **Valeurs :** Manrope, `16px`, `#ffffff`
- **Espacement :** `24px` entre groupes d'infos

#### Formulaire
- **Inputs :** 
  - Fond `#1a1a1a`
  - Bordure `1px solid rgba(255, 255, 255, 0.1)`
  - Texte `#ffffff`
  - Placeholder `#666666`
  - Focus : Bordure `1px solid #ffffff` + outline `2px solid #ffffff` avec offset `4px`
- **Labels :** Raleway majuscules, `12px`, `0.1em` letter-spacing, `#b3b3b3`
- **Bouton submit :** 
  - Fond `--color-brand-primary`
  - Texte `#ffffff`
  - Padding `16px 32px`
  - Hover scale `1 → 1.02` en `200ms`

---

## 🧭 NAVIGATION

### Navigation principale
- **Fond par défaut :** Transparent
- **Fond au scroll :** `rgba(10, 10, 10, 0.95)` avec backdrop-blur léger
- **Hauteur :** `80px` desktop, `64px` mobile
- **Logo :** `48px` de hauteur
- **Liens :** 
  - Raleway majuscules, `14px`, `600` weight
  - Texte `#e5e5e5` par défaut
  - Hover `#ffffff`
  - Actif : Soulignement `2px solid --color-brand-primary`
- **Espacement entre liens :** `32px`
- **Menu mobile :** 
  - Fond plein écran `#0a0a0a`
  - Liens `18px`, espacement `24px` vertical
  - Animation slide down + fondu en `300ms`

---

## 🦶 FOOTER

### Footer principal
- **Fond :** `#0a0a0a` (noir profond)
- **Padding :** `64px` vertical, `48px` horizontal
- **Titre "Atelier Gaschignard" :** 
  - Tester d'abord en Raleway gras `700`
  - Si impact insuffisant, utiliser Bebas Neue `32px`
- **Sous-titre :** Manrope, `14px`, `#b3b3b3`
- **Liens :** 
  - Manrope, `14px`, `#b3b3b3`
  - Hover `#ffffff` avec transition `200ms`
- **Séparateurs :** `rgba(255, 255, 255, 0.05)`
- **Copyright :** Manrope, `12px`, `#666666`

---

## 🎬 ANIMATIONS À APPLIQUER

### Au chargement de page
- **Hero titre :** Fondu `opacity 0 → 1` + slide léger `translateY(8px) → 0` en `400ms`
- **Hero sous-titre :** Fondu `opacity 0 → 1` en `300ms` (délai `100ms`)
- **Boutons CTA :** Fondu `opacity 0 → 1` en `300ms` (délai `200ms`)

### Au scroll
- **Sections :** Fondu `opacity 0 → 1` + slide léger `translateY(16px) → 0` en `400ms`
- **Images :** Fondu `opacity 0 → 1` en `300ms` (stagger `50ms` entre images)
- **Cards :** Fondu `opacity 0 → 1` + scale léger `scale(0.98) → 1` en `400ms`

### Interactions
- **Liens :** Opacity `1 → 0.8` en `200ms`
- **Boutons :** Scale `1 → 1.02` en `200ms`
- **Images hover :** Scale `1 → 1.02` en `200ms` + overlay léger
- **Cards hover :** Scale `1 → 1.01` en `200ms` + opacity légère

### Respect prefers-reduced-motion
- **Règle CSS :** `@media (prefers-reduced-motion: reduce)`
- **Action :** 
  - Désactiver toutes les animations de transform (translateY, scale)
  - Garder uniquement les transitions d'opacity
  - Durée réduite à `0ms` ou `1ms`

---

## ♿ ACCESSIBILITÉ À VÉRIFIER

### Contrastes
- [ ] Texte principal `#ffffff` sur fond `#0a0a0a` = 21:1 ✅
- [ ] Texte secondaire `#e5e5e5` sur fond `#0a0a0a` = 15.8:1 ✅
- [ ] Texte tertiaire `#b3b3b3` sur fond `#0a0a0a` = 9.2:1 ✅
- [ ] Couleur logo `--color-brand-primary` sur fond `#0a0a0a` = À vérifier

### Focus visibles
- [ ] Tous les liens ont un focus visible (`2px solid #ffffff` avec offset `4px`)
- [ ] Tous les boutons ont un focus visible
- [ ] Tous les inputs ont un focus visible
- [ ] Navigation clavier fonctionnelle (Tab order logique)

### Prefers-reduced-motion
- [ ] Toutes les animations respectent `prefers-reduced-motion: reduce`
- [ ] Pas d'animations de transform si reduced-motion activé
- [ ] Seules les transitions d'opacity restent actives

---

## 📋 CHECKLIST D'INTÉGRATION

### Phase 1 : Fondations
- [ ] Remplacer tous les fonds clairs par `#0a0a0a` ou `#1a1a1a`
- [ ] Remplacer tous les textes sombres par `#ffffff` ou `#e5e5e5`
- [ ] Appliquer Raleway majuscules sur tous les titres
- [ ] Appliquer Manrope sur tout le texte courant
- [ ] Extraire couleur logo et mettre à jour `--color-brand-primary`

### Phase 2 : Espacements
- [ ] Appliquer grands espaces blancs (padding généreux)
- [ ] Espacement sections : `96px` vertical
- [ ] Espacement conteneur : `64px` horizontal desktop
- [ ] Espacement entre éléments : `24px` minimum

### Phase 3 : Typographie
- [ ] Vérifier toutes les tailles de titres (H1 à H6)
- [ ] Appliquer majuscules sur tous les titres Raleway
- [ ] Tester "Atelier Gaschignard by Cyprien Gaschignard" en Raleway gras
- [ ] Si impact insuffisant, utiliser Bebas Neue pour cette ligne uniquement
- [ ] Vérifier interlignages (1.1-1.2 pour titres, 1.6-1.75 pour texte)

### Phase 4 : Animations
- [ ] Remplacer toutes les animations lourdes par animations douces
- [ ] Durée max `400ms` pour toutes les animations
- [ ] Utiliser uniquement opacity et scale léger
- [ ] Ajouter `prefers-reduced-motion` sur toutes les animations
- [ ] Tester avec reduced-motion activé

### Phase 5 : Composants
- [ ] Navigation : Fond transparent → `rgba(10, 10, 10, 0.95)` au scroll
- [ ] Footer : Fond `#0a0a0a`, texte `#b3b3b3`
- [ ] Boutons : Styles selon design system
- [ ] Cards : Fond `#1f1f1f`, hover scale léger
- [ ] Formulaires : Styles selon design system

### Phase 6 : Accessibilité
- [ ] Vérifier tous les contrastes (outil WCAG)
- [ ] Ajouter focus visible sur tous les éléments interactifs
- [ ] Tester navigation clavier
- [ ] Vérifier `prefers-reduced-motion`
- [ ] Tester avec lecteur d'écran

---

## 🎯 ORDRE D'APPLICATION RECOMMANDÉ

1. **Variables CSS** : Créer toutes les variables de couleur et espacement
2. **Fondations** : Appliquer fonds sombres et textes clairs sur toutes les pages
3. **Typographie** : Appliquer Raleway et Manrope partout
4. **Espacements** : Appliquer grands espaces blancs
5. **Composants** : Mettre à jour Navigation et Footer
6. **Animations** : Remplacer par animations douces
7. **Accessibilité** : Vérifier contrastes et focus
8. **Tests** : Tester sur mobile, tablette, desktop
9. **Ajustements** : Ajuster selon retours

---

**Note importante :** Avant de commencer l'intégration, extraire la couleur exacte du logo et mettre à jour la variable `--color-brand-primary` dans le design system.

