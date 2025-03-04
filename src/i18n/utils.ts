import { ui, defaultLang } from './ui';
import type { GetStaticPaths } from "astro";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  
  if (lang in ui) return lang as keyof typeof ui;

  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}


export const getI18nPaths = ((extraParams?: {[k: string]: string}) => {
  return [{ params: { i18n: "es", ...extraParams } }, { params: { i18n: "en", ...extraParams } }];
});
