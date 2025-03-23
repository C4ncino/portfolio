export const languages = {
  en: 'English',
  esp: 'Español',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'title': "Portafolio de Carlos Cancino",
    'description': "",
    'text': "Esta página está en desarrollo",
    'textB': "¡Te espero de regreso pronto!",
    'nav.home': "Inicio",
    'nav.about': "Sobre mi",
    'nav.projects': "Proyectos",
  },
  en: {
    'title': "Carlos Cancino Portfolio",
    'description': "",
    'text': "This page is under construction",
    'textB': "Please check back soon!",
    'nav.home': "Home",
    'nav.about': "About me",
    'nav.projects': "Projects",
  },
} as const;

export type UiKey = keyof typeof ui[typeof defaultLang];
