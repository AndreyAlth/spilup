import { initReactI18next } from "react-i18next";
import i18n from 'i18next';

export const i18Config = {
  resources: {
    en: {
      translation: {
        'Welcome to React': 'Welcome to React and react-i18next dss',
        key: 'njdsnjkns',
        hero: {
          title: 'titulo'
        }
      }
    }
  },
  lng: 'en', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18Config);

export default i18n

