# Inventaire des Assets — Atelier Gaschignard

## 📋 Règles appliquées

1. ✅ Aucune image existante n'a été déplacée
2. ✅ Aucune collision détectée (tous les noms sont uniques)
3. ✅ Logo existant préservé (pas de modification, pas de logo IA)
4. ✅ Photos affichées plein pot avec `object-cover`, ratio préservé, sans cadres
5. ✅ Tous les chemins sont relatifs stables (`/images/...`)

---

## 🖼️ ASSETS UTILISÉS DANS LE CODE

### Logo

| Chemin | Fichier physique | Statut | Usage |
|--------|----------------|--------|-------|
| `/images/logo.png` | `public/images/logo.png` | ✅ **PRÉSENT** | Navigation (ligne 51), Footer (ligne 14) |

**Note :** Logo original préservé, aucune modification effectuée.

---

### Images principales (Hero sections)

| Chemin | Fichier physique | Statut | Usage |
|--------|----------------|--------|-------|
| `/images/page-accueil.jpg` | `public/images/page-accueil.jpg` | ✅ **PRÉSENT** | Page Accueil - Hero section (ligne 38) |
| `/images/services.jpeg` | `public/images/services.jpeg` | ✅ **PRÉSENT** | Page Services - Hero section (ligne 51) |
| `/images/contact.jpg` | `public/images/contact.jpg` | ✅ **PRÉSENT** | Page Contact - Hero section (ligne 33) |

**Note :** Toutes les images hero utilisent `object-cover` pour préserver le ratio, affichage plein pot sans cadres.

---

### Photos FOOD (Galerie)

| Chemin | Fichier physique | Statut | Usage |
|--------|----------------|--------|-------|
| `/images/food/Oeuf parfait 1.jpg` | `public/images/food/Oeuf parfait 1.jpg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 0) |
| `/images/food/Oeuf parfait 2.jpg` | `public/images/food/Oeuf parfait 2.jpg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 1) |
| `/images/food/Ballotine de poulet 3.jpg` | `public/images/food/Ballotine de poulet 3.jpg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 2) |
| `/images/food/Amuse bouche.jpeg` | `public/images/food/Amuse bouche.jpeg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 3) |
| `/images/food/Amuse bouche à l_oignon et pomme granny.jpg` | `public/images/food/Amuse bouche à l_oignon et pomme granny.jpg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 4) |
| `/images/food/Tiramisu 1.jpeg` | `public/images/food/Tiramisu 1.jpeg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 5) |
| `/images/food/Tiramisu 3.jpg` | `public/images/food/Tiramisu 3.jpg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 6) |
| `/images/food/Steak de chou fleur 2.jpg` | `public/images/food/Steak de chou fleur 2.jpg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 7) |
| `/images/food/Tatin 1.jpeg` | `public/images/food/Tatin 1.jpeg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 8) |
| `/images/food/Tatin 2.jpeg` | `public/images/food/Tatin 2.jpeg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 9) |
| `/images/food/Tatin poire miso 1.jpeg` | `public/images/food/Tatin poire miso 1.jpeg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 10) |
| `/images/food/Flan Vanille 1.jpg` | `public/images/food/Flan Vanille 1.jpg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 11) |
| `/images/food/Flan Vanille 2.jpg` | `public/images/food/Flan Vanille 2.jpg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 12) |
| `/images/food/Ravioli au gorgonzola et PDT 1.jpeg` | `public/images/food/Ravioli au gorgonzola et PDT 1.jpeg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 13) |
| `/images/food/Poivrons.JPG` | `public/images/food/Poivrons.JPG` | ✅ **PRÉSENT** | Page Photos - Galerie (index 14) |
| `/images/food/Poireaux gribiche 2.jpg` | `public/images/food/Poireaux gribiche 2.jpg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 15) |
| `/images/food/Aubergines brulées sauce grec 2.jpg` | `public/images/food/Aubergines brulées sauce grec 2.jpg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 16) |
| `/images/food/Maquereaux 2.jpeg` | `public/images/food/Maquereaux 2.jpeg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 17) |
| `/images/food/Agneau en ballotine.jpeg` | `public/images/food/Agneau en ballotine.jpeg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 18) |
| `/images/food/Agneau précuit.jpeg` | `public/images/food/Agneau précuit.jpeg` | ✅ **PRÉSENT** | Page Photos - Galerie (index 19) |

**Note :** Toutes les images de la galerie utilisent `object-cover` avec `aspect-square` pour préserver le ratio, affichage plein pot sans cadres ni bordures.

---

### Photo LE CHEF

| Chemin | Fichier physique | Statut | Usage |
|--------|----------------|--------|-------|
| `/images/food/Making off.jpg` | `public/images/food/Making off.jpg` | ✅ **PRÉSENT** | Page LE CHEF - Photo portrait (ligne 63) |

**Note :** Image utilisée temporairement pour la structure. À remplacer par la photo portrait du chef si disponible.

---

## 📊 RÉSUMÉ

### Par statut

- ✅ **PRÉSENT** : 25 fichiers
- ❌ **MANQUANT** : 0 fichier
- 🔄 **DUPLIQUÉ-V2** : 0 fichier

### Par catégorie

- **Logo** : 1 fichier (présent)
- **Images hero** : 3 fichiers (présents)
- **Photos FOOD (galerie)** : 20 fichiers (présents)
- **Photo LE CHEF** : 1 fichier (présent, temporaire)

### Total

**25 assets référencés dans le code, tous présents dans `public/images/`**

---

## 🔍 VÉRIFICATIONS EFFECTUÉES

### ✅ Collisions de noms
- Aucune collision détectée
- Tous les noms de fichiers sont uniques
- Aucun fichier `-v2` créé

### ✅ Chemins relatifs
- Tous les chemins utilisent `/images/...` (relatif à `public/`)
- Chemins stables et cohérents
- Aucun chemin absolu ou externe

### ✅ Préservation des assets
- Aucune image existante n'a été déplacée
- Aucune image existante n'a été modifiée
- Logo original préservé (pas de logo IA)

### ✅ Affichage des images
- Toutes les images utilisent `object-cover` pour préserver le ratio
- Affichage plein pot sans cadres
- Marges maîtrisées via Tailwind CSS
- Pas de bordures ni d'ombres sur les images de galerie

---

## 📝 NOTES IMPORTANTES

### Photo LE CHEF
- **Image actuelle :** `/images/food/Making off.jpg` (temporaire)
- **Action requise :** Remplacer par la photo portrait du chef si disponible dans le dossier partagé
- **Si nouvelle photo ajoutée :** Vérifier qu'elle n'entre pas en collision avec un nom existant

### Images non utilisées
Les images suivantes sont présentes dans `public/images/` mais ne sont pas référencées dans le code :
- `public/images/hero.jpg` (ancienne image hero)
- `public/images/contact-hero.jpg` (ancienne image contact)
- `public/images/services-hero.jpg` (ancienne image services)

**Note :** Ces images sont conservées mais non utilisées. Elles peuvent être supprimées si nécessaire ou réutilisées plus tard.

---

## 🚀 PROCHAINES ÉTAPES

1. ✅ Vérifier que toutes les images référencées existent (fait)
2. ⏳ Remplacer l'image temporaire LE CHEF par la photo portrait du chef
3. ⏳ Si nouvelle image ajoutée, vérifier les collisions et créer `-v2` si nécessaire
4. ⏳ Optimiser les images si nécessaire (compression, formats WebP)

---

**Date de création :** 2024-11-10  
**Dernière mise à jour :** 2024-11-10  
**Statut :** ✅ Tous les assets sont présents et fonctionnels

