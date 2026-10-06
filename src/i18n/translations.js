import en from './en.js';

import { defaultLanguage, getLanguageFromPath } from './languages.js';

const loaders = {
  de: () => import('./de.js'),
  es: () => import('./es.js'),
  da: () => import('./da.js'),
  sv: () => import('./sv.js'),
  el: () => import('./el.js'),
  it: () => import('./it.js'),
};

export const translations = Object.assign(Object.create(null), { en });

const pendingLoads = new Map();

export function getTranslations(language) {
  return translations[language] ?? null;
}

export function loadTranslations(language) {
  if (translations[language]) {
    return Promise.resolve(translations[language]);
  }

  const loader = Object.hasOwn(loaders, language) ? loaders[language] : null;

  if (!loader) {
    return Promise.reject(new Error(`Unsupported language: ${language}`));
  }

  // Несколько запросов одного языка используют одну загрузку.
  if (!pendingLoads.has(language)) {
    const request = loader()
      .then((module) => {
        translations[language] = module.default;

        return module.default;
      })
      .finally(() => {
        pendingLoads.delete(language);
      });

    pendingLoads.set(language, request);
  }

  return pendingLoads.get(language);
}

export let initialTranslationError = null;

// При прямом открытии языкового URL готовим перевод
// до первого отображения приложения.
if (typeof window !== 'undefined') {
  const language = getLanguageFromPath(window.location.pathname);

  if (language !== defaultLanguage) {
    try {
      await loadTranslations(language);
    } catch (error) {
      initialTranslationError = error;
    }
  }
}
