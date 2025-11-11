# Atelier Gaschignard

Site web chic et luxueux pour Atelier Gaschignard - Cuisine d'exception et savoir-faire artisanal.

## Technologies utilisées

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **GSAP** (animations)
- **Framer Motion** (animations complémentaires)

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Démarrer le serveur de production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## Structure du projet

```
atelier-gaschignard/
├── app/                    # Pages Next.js (App Router)
│   ├── page.tsx           # Page d'accueil
│   ├── services/          # Page services
│   ├── galerie/           # Page galerie
│   ├── contact/           # Page contact
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Styles globaux
├── components/            # Composants React
│   ├── Navigation.tsx     # Navigation principale
│   └── Footer.tsx         # Footer
├── public/                # Assets statiques
│   └── images/           # Images et photos
└── ...
```

## Fonctionnalités

- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation épurée inspirée des références DA
- ✅ Animations sobres avec GSAP
- ✅ Galerie photo avec lightbox
- ✅ Formulaire de contact
- ✅ Mise en page éditoriale moderne

## Notes importantes

- Les images sont stockées dans `/public/images/`
- Le logo doit être présent dans `/public/images/logo.png`
- Le contenu textuel sera complété après lecture des documents PDF/PPTX fournis
- Pas d'éléments générés par IA (logo, icônes) - uniquement les visuels fournis

## Références Design

- [Homemade Lab](https://homemadelab.fr) - Structure minimaliste, grids photo, micro-animations sobres
- [Magenta Creative Studio](https://magenta-creative-studio.fr) - Navigation épurée, mise en page éditoriale

## Prochaines étapes

1. Intégrer le contenu textuel des documents PDF/PPTX
2. Compléter les informations de contact
3. Ajuster les textes selon les documents fournis
4. Optimiser les images si nécessaire

