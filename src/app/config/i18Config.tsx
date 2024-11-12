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
