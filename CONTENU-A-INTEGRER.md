# Contenu à intégrer depuis les documents

## Instructions

Pour extraire le contenu des documents PDF et PPTX, vous pouvez :

1. **Option 1 : Installation des bibliothèques Python**
   ```bash
   pip3 install --user PyPDF2 python-pptx
   python3 extract-content.py
   ```

2. **Option 2 : Utiliser un outil en ligne**
   - Ouvrir les fichiers PDF/PPTX
   - Copier le texte manuellement
   - L'intégrer dans les fichiers suivants

## Fichiers à mettre à jour avec le contenu

### Page d'accueil (`app/page.tsx`)
- Section "About" : Description de l'atelier
- Section "Featured Gallery" : Texte d'introduction

### Page Services (`app/services/page.tsx`)
- Liste des services détaillés
- Description du processus

### Page Contact (`app/contact/page.tsx`)
- Informations de contact (email, téléphone, adresse)
- Texte d'introduction

### Footer (`components/Footer.tsx`)
- Informations de contact complètes
- Description de l'entreprise

## Structure de contenu attendue

### À partir du PDF "Présentation Canva"
- Présentation générale de l'atelier
- Valeurs et philosophie
- Services proposés
- Réalisations/photos avec légendes

### À partir du PPTX "Texte"
- Textes détaillés pour chaque section
- Descriptions des services
- Informations de contact
- Historique ou présentation du chef/atelier

## Notes

- Respecter le ton chic et luxueux
- Garder les textes en français (FR d'abord)
- Prévoir la traduction EN mais ne pas l'activer si non demandé
- Maintenir la cohérence avec le design épuré

