import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptTranslation from './i18n/pt.json';
import enTranslation from './i18n/en.json';

const resources = {
  pt: {
    translation: ptTranslation
  },
  en: {
    translation: enTranslation
  }
}

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;