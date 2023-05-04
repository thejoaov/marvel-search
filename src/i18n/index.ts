import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { locale } from 'expo-localization';

import ptBR from './translations/ptBR.json';
import en from './translations/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en,
    'pt-BR': ptBR,
  },
  fallbackLng: 'en',
  lng: locale,
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});
