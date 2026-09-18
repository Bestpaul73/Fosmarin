import en from './en';
import de from './de';
import es from './es';
import da from './da';
import sv from './sv';
import el from './el';
import it from './it';

export const translations = {
  en,
  de,
  es,
  da,
  sv,
  el,
  it,
};

export function getTranslations(language) {
  return translations[language] ?? translations.en;
}
