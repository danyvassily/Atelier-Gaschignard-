# Vérification de conformité — Textes FR vs. Source PPTX/PDF

## 📋 Règles d'intégration

1. ✅ **FR par défaut** : Tous les textes en français
2. ✅ **EN préparé** : Structure prête dans `src/lib/content.ts`, non exposée
3. ✅ **Titres en majuscules** : Raleway majuscules (`font-heading`, `uppercase`)
4. ✅ **Corps en Manrope** : Classe `text-body` appliquée
5. ✅ **Couleur du texte = couleur du logo** : Variable CSS `--color-brand-primary`

---

## 📝 CHECKLIST DE CONFORMITÉ

### Page LE CHEF (`src/pages/LeChef.tsx`)

#### Titre
- [ ] **Conforme** : "LE CHEF" en majuscules Raleway
- [ ] **Source PPTX** : Section "LE CHEF"
- [ ] **Vérification** : ✅ Titre conforme

#### Texte éditorial
- [ ] **Texte intégré** : Copier le texte exact du PPTX (section LE CHEF)
- [ ] **Ponctuation** : Respecter exactement (points, virgules, points-virgules)
- [ ] **Accents** : Respecter tous les accents (é, è, ê, à, ç, etc.)
- [ ] **Tirets cadratins** : Remplacer les tirets longs par `—` si présents dans le PPTX
- [ ] **Paragraphes** : Un `<p>` par paragraphe du PPTX
- [ ] **Typographie** : Classe `text-body` (Manrope) appliquée
- [ ] **Couleur** : `var(--color-brand-primary)` appliquée
- [ ] **Statut** : ⏳ En attente d'intégration du texte PPTX

**Emplacement dans le code** : Lignes 75-81 de `src/pages/LeChef.tsx`

---

### Page SERVICES (`src/pages/Services.tsx`)

#### Titre principal
- [ ] **Conforme** : "SERVICES" en majuscules Raleway
- [ ] **Source PPTX** : Section "SERVICES"
- [ ] **Vérification** : ✅ Titre conforme

#### Bloc 1 : "Cours et animation d'ateliers de cuisine"
- [ ] **Titre** : "Cours et animation d'ateliers de cuisine" en majuscules Raleway
- [ ] **Texte intégré** : Copier le texte exact du PPTX
- [ ] **Ponctuation** : Respecter exactement
- [ ] **Accents** : Respecter tous les accents
- [ ] **Tirets cadratins** : `—` si présents
- [ ] **Paragraphes** : Un `<p>` par paragraphe
- [ ] **Typographie** : Classe `text-body` (Manrope) appliquée
- [ ] **Couleur** : `var(--color-brand-primary)` appliquée
- [ ] **Statut** : ⏳ En attente d'intégration du texte PPTX

**Emplacement dans le code** : Lignes 76-79 de `src/pages/Services.tsx`

#### Bloc 2 : "Prestation privée"
- [ ] **Titre** : "Prestation privée" en majuscules Raleway
- [ ] **Texte intégré** : Copier le texte exact du PPTX
- [ ] **Ponctuation** : Respecter exactement
- [ ] **Accents** : Respecter tous les accents
- [ ] **Tirets cadratins** : `—` si présents
- [ ] **Paragraphes** : Un `<p>` par paragraphe
- [ ] **Typographie** : Classe `text-body` (Manrope) appliquée
- [ ] **Couleur** : `var(--color-brand-primary)` appliquée
- [ ] **Statut** : ⏳ En attente d'intégration du texte PPTX

**Emplacement dans le code** : Lignes 89-92 de `src/pages/Services.tsx`

---

### Page CONTACT (`src/pages/Contact.tsx`)

#### Titre principal
- [ ] **Conforme** : "CONTACT" en majuscules Raleway
- [ ] **Source PPTX** : Section "CONTACT"
- [ ] **Vérification** : ✅ Titre conforme

#### Message d'intention
- [ ] **Texte intégré** : Copier le message d'intention exact du PPTX
- [ ] **Ponctuation** : Respecter exactement
- [ ] **Accents** : Respecter tous les accents
- [ ] **Tirets cadratins** : `—` si présents
- [ ] **Paragraphes** : Un `<p>` par paragraphe
- [ ] **Typographie** : Classe `text-body` (Manrope) appliquée
- [ ] **Couleur** : `var(--color-brand-primary)` appliquée
- [ ] **Statut** : ⏳ En attente d'intégration du texte PPTX

**Emplacement dans le code** : Lignes 55-58 de `src/pages/Contact.tsx`

#### Email
- [ ] **Conforme** : ateliergaschignard@gmail.com
- [ ] **Couleur** : `var(--color-brand-primary)` appliquée
- [ ] **Vérification** : ✅ Email conforme

#### Instagram
- [ ] **Conforme** : @ateliergaschignard
- [ ] **Couleur** : `var(--color-brand-primary)` appliquée
- [ ] **Vérification** : ✅ Instagram conforme

---

## 🎨 Vérification typographique

### Titres
- ✅ **Police** : Raleway (`font-heading`)
- ✅ **Style** : Majuscules (`uppercase`)
- ✅ **Couleur** : Blanc (`#ffffff`)
- ✅ **Taille** : Responsive (5xl → 7xl)

### Corps de texte
- ✅ **Police** : Manrope (`text-body`)
- ✅ **Couleur** : Couleur du logo (`var(--color-brand-primary)`)
- ✅ **Taille** : `text-lg` (18px) ou `text-xl` (20px)
- ✅ **Interlignage** : `leading-relaxed` (1.75)

---

## 🔍 Points de vérification spécifiques

### Ponctuation
- [ ] Points finaux (.)
- [ ] Virgules (,)
- [ ] Points-virgules (;)
- [ ] Points d'exclamation (!)
- [ ] Points d'interrogation (?)
- [ ] Deux-points (:)
- [ ] Guillemets français (« ») si présents
- [ ] Apostrophes (') correctes

### Accents
- [ ] É, È, Ê, Ë
- [ ] À, Â
- [ ] Ç
- [ ] Ù, Û, Ü
- [ ] Ô, Œ
- [ ] Tous les accents présents dans le PPTX

### Tirets cadratins
- [ ] Remplacer les tirets longs par `—` (tiret cadratin)
- [ ] Exemple : "Paris — Lyon" au lieu de "Paris - Lyon"
- [ ] Vérifier dans le PPTX si des tirets cadratins sont utilisés

### Paragraphes
- [ ] Un `<p>` par paragraphe du PPTX
- [ ] Espacement entre paragraphes : `space-y-6`
- [ ] Pas de fusion de paragraphes

---

## 📄 Structure de contenu préparée

### Fichier `src/lib/content.ts`
- ✅ Structure FR créée
- ✅ Structure EN préparée (non exposée)
- ⏳ Textes exacts à intégrer depuis le PPTX

### Variables CSS
- ✅ `--color-brand-primary` : Couleur du logo (actuellement `#3d352e`)
- ⚠️ **Action requise** : Mettre à jour avec la couleur exacte du logo

---

## ✅ CONFORMITÉ ACTUELLE

### Conforme
- ✅ Titres en majuscules Raleway
- ✅ Structure typographique (Manrope pour corps)
- ✅ Couleur du texte = couleur du logo (variable CSS)
- ✅ Structure EN préparée mais non exposée
- ✅ Email et Instagram conformes

### En attente
- ⏳ Intégration des textes exacts du PPTX
- ⏳ Vérification ponctuation, accents, tirets cadratins
- ⏳ Mise à jour de la couleur du logo (`--color-brand-primary`)

---

## 📋 PROCÉDURE D'INTÉGRATION

1. **Extraire le texte du PPTX** :
   - Ouvrir "Texte.pptx"
   - Copier le texte exact de chaque section

2. **Intégrer dans les pages** :
   - Remplacer les placeholders dans les fichiers TSX
   - Respecter la structure HTML (un `<p>` par paragraphe)
   - Appliquer les classes CSS (`text-body`, `font-heading`)

3. **Vérifier la conformité** :
   - Ponctuation exacte
   - Accents respectés
   - Tirets cadratins si présents
   - Paragraphes respectés

4. **Mettre à jour la couleur du logo** :
   - Extraire la couleur hex du logo
   - Mettre à jour `--color-brand-primary` dans `src/index.css`

---

**Date de création** : 2024-11-10  
**Statut** : ⏳ En attente d'intégration des textes du PPTX  
**Prochaine étape** : Extraire et intégrer les textes exacts du PPTX

