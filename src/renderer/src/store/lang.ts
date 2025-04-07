import { create } from 'zustand';
import i18n from '../i18n';

interface LangState {
  language: "en" | "es";
  setLanguage: (lang: 'en' | 'es') => void;
}

export const useLangStore = create<LangState>((set) => ({
  language: i18n.language as "en" | "es",
  setLanguage: (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang); 
    set({ language: lang });
  },
}));
