// Configuration des textes et langues
// FR par défaut, EN préparé mais non exposé

export const content = {
  fr: {
    // Page LE CHEF
    leChef: {
      title: 'LE CHEF',
      // Texte exact du PPTX à intégrer ici
      text: [
        'Texte exact FR du PPTX - Section LE CHEF - Paragraphe 1',
        'Texte exact FR du PPTX - Section LE CHEF - Paragraphe 2',
        // Continuer avec tous les paragraphes du PPTX
      ],
    },
    
    // Page SERVICES
    services: {
      title: 'SERVICES',
      cours: {
        title: 'Cours et animation d\'ateliers de cuisine',
        // Texte exact du PPTX à intégrer ici
        text: 'Texte exact FR du PPTX - Section "Cours et animation d\'ateliers de cuisine"',
      },
      prestation: {
        title: 'Prestation privée',
        // Texte exact du PPTX à intégrer ici
        text: 'Texte exact FR du PPTX - Section "Prestation privée"',
      },
    },
    
    // Page CONTACT
    contact: {
      title: 'CONTACT',
      // Message d'intention exact du PPTX
      message: 'Texte exact FR du PPTX - Message d\'intention',
      email: 'ateliergaschignard@gmail.com',
      instagram: '@ateliergaschignard',
    },
  },
  
  // EN préparé mais non exposé (non activé)
  en: {
    leChef: {
      title: 'THE CHEF',
      text: [
        'English text from PPTX - Section THE CHEF - Paragraph 1',
        'English text from PPTX - Section THE CHEF - Paragraph 2',
      ],
    },
    services: {
      title: 'SERVICES',
      cours: {
        title: 'Cooking Classes and Workshops',
        text: 'English text from PPTX - Section "Cooking Classes and Workshops"',
      },
      prestation: {
        title: 'Private Service',
        text: 'English text from PPTX - Section "Private Service"',
      },
    },
    contact: {
      title: 'CONTACT',
      message: 'English text from PPTX - Intent message',
      email: 'ateliergaschignard@gmail.com',
      instagram: '@ateliergaschignard',
    },
  },
}

// Langue active (FR par défaut)
export const currentLang = 'fr'

// Fonction pour obtenir le contenu dans la langue active
export const getContent = (key: string) => {
  return content[currentLang as keyof typeof content][key as keyof typeof content.fr]
}

