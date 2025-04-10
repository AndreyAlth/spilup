import { initReactI18next } from "react-i18next";
import i18n from 'i18next';

import en from './locales/en.json'
import es from './locales/es.json'
import service_es from './locales/services/es.json'
import service_en from './locales/services/en.json'


export const i18Config = {
  resources: {
    en: {
      translation: en,
      services: service_en
    },
    es: {
      translation: es,
      services: service_es
    }
  },
  lng: 'es', // if you're using a language detector, do not define the lng option
  fallbackLng: 'es',

  interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18Config);

export default i18n

