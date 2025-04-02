import { jobsEn, jobsEs } from "@/data/jobs";

export const languages = {
  en: 'English',
  esp: 'Español',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'title': "Portafolio de Carlos Cancino",
    'description': "",
    'nav.home': "Sobre mí",
    'nav.projects': "Proyectos",
    'hero.salute': "¡Hola! Soy",
    'hero.text': "Un ingeniero en sistemas computa­cionales con experiencia en desarrollo de aplicaciones web e híbridas, automatiza­ción y sistemas embebidos. Me apasiona la tecnología y siempre estoy buscando aprender cosas nuevas. Disfruto crear soluciones innovadoras enfrentando nuevos desafíos.",
    'employment.title': "Experiencia Laboral",
    'employment.jobs': jobsEs,
    'tech.title': "He trabajado con",
    'contact.title': "Contáctame",
    'contact.resume': "Currículum",
    'contact.resumeLink': "/cv_Carlos_Cancino.pdf",
  },
  en: {
    'title': "Carlos Cancino Portfolio",
    'description': "",
    'nav.home': "About me",
    'nav.projects': "Projects",
    'hero.salute': "Hello! I'm",
    'hero.text': "Computer systems engineer with expe­rience in web and hybrid application development, automation and embedded systems. Passionate about technology, always eager to learn and share my knowledge.",
    'employment.title': "Employment History",
    'employment.jobs': jobsEn,
    'tech.title': "I've worked with",
    'contact.title': "Contact me",
    'contact.resume': "Resume",
    'contact.resumeLink': "/resume_Carlos_Cancino.pdf",

  },
} as const;

export type UiKey = keyof typeof ui[typeof defaultLang];
export type UiTextGetter = (key: UiKey) => any;
export interface UiProps {
  t: UiTextGetter
} 
