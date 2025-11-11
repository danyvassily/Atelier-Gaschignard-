# Design System — Atelier Gaschignard
## Guide de styles chic, sobre et luxueux

---

## 🎨 COULEURS

### Couleur principale du texte (Logo)
**Variable de thème : `--color-brand-primary`**
- **Valeur actuelle :** `#3d352e` (anthracite foncé)
- **Note :** Cette valeur doit être remplacée par la couleur exacte du logo client une fois identifiée
- **Usage :** Texte principal, éléments de navigation actifs, liens au survol

### Palette de fonds
- **Fond principal :** `#0a0a0a` (noir profond)
- **Fond secondaire :** `#1a1a1a` (anthracite)
- **Fond tertiaire :** `#2a2a2a` (anthracite clair)
- **Surfaces élevées :** `#1f1f1f` (pour cards, modals)

### Palette de textes
- **Texte principal :** `#ffffff` (blanc pur)
- **Texte secondaire :** `#e5e5e5` (blanc cassé)
- **Texte tertiaire :** `#b3b3b3` (gris clair)
- **Texte désactivé :** `#666666` (gris moyen)
- **Texte sur fond sombre :** `#ffffff` (contraste AA garanti)

### Accents et interactions
- **Lien au survol :** `--color-brand-primary` (couleur logo)
- **Focus visible :** `#ffffff` avec outline `2px solid`
- **Bordures subtiles :** `rgba(255, 255, 255, 0.1)` (blanc 10% opacity)
- **Séparateurs :** `rgba(255, 255, 255, 0.05)` (blanc 5% opacity)

### États
- **Hover :** Opacity `0.8` sur les éléments interactifs
- **Active :** Opacity `0.6`
- **Focus :** Outline `2px solid #ffffff` avec `outline-offset: 4px`

---

## 📐 ESPACEMENTS

### Système de grille (basé sur 8px)
- **Unité de base :** `8px`
- **Multiples :** 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px, 128px

### Espacements verticaux (sections)
- **Section compacte :** `64px` (4rem)
- **Section standard :** `96px` (6rem)
- **Section large :** `128px` (8rem)
- **Section hero :** `160px` (10rem)

### Espacements horizontaux (conteneur)
- **Mobile :** `24px` (1.5rem)
- **Tablette :** `48px` (3rem)
- **Desktop :** `64px` (4rem)
- **Large :** `80px` (5rem)

### Espacements internes (composants)
- **Padding petit :** `16px` (1rem)
- **Padding moyen :** `24px` (1.5rem)
- **Padding large :** `32px` (2rem)
- **Padding XL :** `48px` (3rem)

### Espacements entre éléments
- **Éléments proches :** `8px` (0.5rem)
- **Éléments liés :** `16px` (1rem)
- **Éléments séparés :** `24px` (1.5rem)
- **Éléments distants :** `32px` (2rem)
- **Éléments très distants :** `48px` (3rem)

---

## ✍️ TYPOGRAPHIE

### Familles de polices
- **Titres :** Raleway (majuscules, gras)
- **Texte courant :** Manrope (normal, régulier)
- **Display spécial :** Bebas Neue (uniquement pour "Atelier Gaschignard by Cyprien Gaschignard" si Raleway gras manque d'impact)

### Échelle typographique

#### Titres (Raleway, majuscules)
- **H1 Hero :** `72px` / `80px` line-height / `-0.02em` letter-spacing / `900` weight
- **H1 Standard :** `56px` / `64px` line-height / `-0.02em` letter-spacing / `800` weight
- **H2 :** `40px` / `48px` line-height / `-0.01em` letter-spacing / `700` weight
- **H3 :** `32px` / `40px` line-height / `0em` letter-spacing / `700` weight
- **H4 :** `24px` / `32px` line-height / `0em` letter-spacing / `600` weight
- **H5 :** `20px` / `28px` line-height / `0.01em` letter-spacing / `600` weight
- **H6 :** `18px` / `24px` line-height / `0.02em` letter-spacing / `600` weight

#### Texte courant (Manrope)
- **Grand texte :** `20px` / `32px` line-height / `400` weight
- **Texte standard :** `16px` / `28px` line-height / `400` weight
- **Petit texte :** `14px` / `24px` line-height / `400` weight
- **Très petit texte :** `12px` / `20px` line-height / `400` weight

#### Navigation (Raleway, majuscules)
- **Desktop :** `14px` / `20px` line-height / `0.1em` letter-spacing / `600` weight
- **Mobile :** `18px` / `24px` line-height / `0.1em` letter-spacing / `600` weight

#### Display spécial (Bebas Neue)
- **"Atelier Gaschignard by Cyprien Gaschignard" :** `32px` / `36px` line-height / `0.05em` letter-spacing / `400` weight
- **Usage conditionnel :** Seulement si Raleway gras ne donne pas assez d'impact

### Interlignages
- **Titres :** `1.1` à `1.2` (serré pour impact)
- **Texte courant :** `1.6` à `1.75` (aéré pour lisibilité)
- **Texte long :** `1.8` (confortable pour lecture)

### Espacements typographiques
- **Après H1 :** `48px` (3rem)
- **Après H2 :** `32px` (2rem)
- **Après H3 :** `24px` (1.5rem)
- **Après paragraphe :** `24px` (1.5rem)
- **Entre éléments de liste :** `16px` (1rem)

---

## 🎭 ANIMATIONS

### Principes
- **Durée :** Courte (200ms à 400ms maximum)
- **Easing :** `cubic-bezier(0.4, 0, 0.2, 1)` (ease-in-out doux)
- **Effets :** Fondu (opacity) et scale léger uniquement
- **Pas de parallax :** Interdit
- **Pas d'effets tape-à-l'œil :** Interdit

### Transitions standards
- **Fondu simple :** `opacity 0 → 1` en `300ms`
- **Fondu + slide léger :** `opacity 0 → 1` + `translateY(8px) → 0` en `400ms`
- **Scale léger :** `scale(0.98) → 1` en `200ms` (hover)
- **Scale hover :** `scale(1) → 1.02` en `200ms` (images, cards)

### Respect de prefers-reduced-motion
- **Règle :** `@media (prefers-reduced-motion: reduce)`
- **Action :** Désactiver toutes les animations, garder uniquement les transitions essentielles
- **Fallback :** Opacity uniquement, pas de transform

### Animations spécifiques
- **Apparition au scroll :** Fondu + slide léger (8px max)
- **Hover liens :** Opacity `1 → 0.8` en `200ms`
- **Hover images :** Scale `1 → 1.02` en `200ms` + opacity légère
- **Menu mobile :** Slide down avec fondu en `300ms`

---

## 🧩 COMPOSANTS

### Navigation
- **Style :** Minimale, discrète
- **Fond :** Transparent par défaut, `rgba(10, 10, 10, 0.95)` au scroll
- **Hauteur :** `80px` (5rem)
- **Logo :** `48px` de hauteur
- **Liens :** Raleway majuscules, `14px`, espacement `32px` entre liens
- **État actif :** Soulignement `2px` avec couleur logo
- **Mobile :** Menu plein écran avec fond `#0a0a0a`

### Footer
- **Style :** Discret, minimal
- **Fond :** `#0a0a0a` (noir profond)
- **Texte :** `#b3b3b3` (gris clair)
- **Padding :** `64px` vertical, `48px` horizontal
- **Bordures :** Séparateurs `rgba(255, 255, 255, 0.05)`
- **Liens :** Hover vers `#ffffff` avec transition `200ms`

### Boutons
- **Primaire :** Fond `--color-brand-primary`, texte `#ffffff`, padding `16px 32px`
- **Secondaire :** Bordure `1px solid rgba(255, 255, 255, 0.2)`, texte `#ffffff`, padding `16px 32px`
- **Texte :** Texte uniquement, hover opacity `0.8`
- **Hover :** Scale léger `1 → 1.02` en `200ms`
- **Focus :** Outline `2px solid #ffffff` avec `outline-offset: 4px`

### Cards / Surfaces
- **Fond :** `#1f1f1f` (surface élevée)
- **Padding :** `32px`
- **Bordures :** Aucune (design épuré)
- **Hover :** Scale léger `1 → 1.01` + opacity légère
- **Espacement :** `24px` entre cards

### Images
- **Style :** Pleine largeur, object-fit cover
- **Hover :** Scale léger `1 → 1.02` en `200ms`
- **Overlay :** `rgba(0, 0, 0, 0.3)` sur images hero si nécessaire
- **Lazy loading :** Activé avec placeholder flou

### Formulaires
- **Inputs :** Fond `#1a1a1a`, bordure `rgba(255, 255, 255, 0.1)`, texte `#ffffff`
- **Focus :** Bordure `1px solid #ffffff` + outline `2px solid #ffffff` avec offset
- **Placeholder :** `#666666` (gris moyen)
- **Labels :** Raleway majuscules, `12px`, `0.1em` letter-spacing

---

## ♿ ACCESSIBILITÉ

### Contrastes (WCAG AA)
- **Texte principal sur fond sombre :** `#ffffff` sur `#0a0a0a` = 21:1 ✅
- **Texte secondaire sur fond sombre :** `#e5e5e5` sur `#0a0a0a` = 15.8:1 ✅
- **Texte tertiaire sur fond sombre :** `#b3b3b3` sur `#0a0a0a` = 9.2:1 ✅
- **Liens sur fond sombre :** `--color-brand-primary` sur `#0a0a0a` = À vérifier selon couleur logo

### Focus visibles
- **Outline :** `2px solid #ffffff`
- **Offset :** `4px` (outline-offset)
- **Radius :** `2px` (border-radius sur outline)
- **Tous les éléments interactifs :** Focus visible obligatoire

### Prefers-reduced-motion
- **Règle CSS :** `@media (prefers-reduced-motion: reduce)`
- **Action :** 
  - Désactiver toutes les animations de transform
  - Garder uniquement les transitions d'opacity
  - Durée réduite à `0ms` ou `1ms`
  - Pas de parallax, pas de scroll animations complexes

### Navigation clavier
- **Tab order :** Logique et prévisible
- **Skip links :** Lien "Aller au contenu" en haut de page
- **Focus trap :** Dans modals et menus mobiles

---

## 📱 RESPONSIVE

### Breakpoints
- **Mobile :** `0px - 767px`
- **Tablette :** `768px - 1023px`
- **Desktop :** `1024px - 1439px`
- **Large :** `1440px+`

### Adaptations typographiques
- **H1 Hero :** `48px` mobile → `72px` desktop
- **H1 Standard :** `40px` mobile → `56px` desktop
- **H2 :** `32px` mobile → `40px` desktop
- **Texte standard :** `14px` mobile → `16px` desktop

### Adaptations espacements
- **Sections :** `48px` mobile → `96px` desktop
- **Conteneur padding :** `24px` mobile → `64px` desktop
- **Navigation :** `64px` hauteur mobile → `80px` desktop

---

## 🎯 TOKENS DE DESIGN

### Variables CSS (à définir)
```css
--color-brand-primary: #3d352e; /* À remplacer par couleur logo */
--color-bg-primary: #0a0a0a;
--color-bg-secondary: #1a1a1a;
--color-text-primary: #ffffff;
--color-text-secondary: #e5e5e5;
--color-text-tertiary: #b3b3b3;
--spacing-unit: 8px;
--transition-fast: 200ms;
--transition-normal: 300ms;
--transition-slow: 400ms;
--easing-default: cubic-bezier(0.4, 0, 0.2, 1);
```

### Classes utilitaires Tailwind (à créer)
- `.font-heading` → Raleway majuscules
- `.font-body` → Manrope
- `.font-display` → Bebas Neue (usage conditionnel)
- `.transition-smooth` → Transition douce standard
- `.focus-visible` → Focus accessible
- `.container-luxury` → Conteneur avec grands espaces

---

## 📋 CHECKLIST D'APPLICATION

### À faire avant intégration
- [ ] Extraire la couleur exacte du logo (hex)
- [ ] Remplacer `--color-brand-primary` par la valeur hex du logo
- [ ] Vérifier les contrastes avec la couleur logo réelle
- [ ] Tester "Atelier Gaschignard by Cyprien Gaschignard" en Raleway gras
- [ ] Si impact insuffisant, utiliser Bebas Neue pour cette ligne uniquement

### Principes à respecter
- ✅ Fond sombre élégant (noir/anthracite)
- ✅ Texte clair (blanc/gris clair)
- ✅ Grands espaces blancs (padding généreux)
- ✅ Pas d'ombres lourdes (design épuré)
- ✅ Titres en Raleway majuscules
- ✅ Texte courant en Manrope
- ✅ Animations douces et courtes
- ✅ Accessibilité AA garantie
- ✅ Prefers-reduced-motion respecté

---

**Note importante :** La couleur principale du texte (`--color-brand-primary`) doit être mise à jour avec la valeur hex exacte du logo une fois identifiée. En attendant, utiliser `#3d352e` comme valeur par défaut.

