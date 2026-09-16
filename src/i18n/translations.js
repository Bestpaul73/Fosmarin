import en from './en';
import de from './de';
import es from './es';

export const translations = {
  en,
  de,
  es,
};

export function getTranslations(language) {
  return translations[language] ?? translations.en;
}
