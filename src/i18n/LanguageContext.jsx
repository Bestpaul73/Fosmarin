import { createContext, useContext, useEffect, useMemo } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import {
  defaultLanguage,
  languages,
  getLanguageFromPath,
  getLanguagePrefix,
  localizePath,
  stripLanguagePrefix,
} from './languages';

import { getTranslations } from './translations';

const LanguageContext = createContext(null);

const LANGUAGE_STORAGE_KEY = 'fosmarin-language';

function getBrowserLanguage() {
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const browserLanguage of browserLanguages) {
    const languageCode = browserLanguage?.toLowerCase().split('-')[0];

    if (languages.some((item) => item.code === languageCode)) {
      return languageCode;
    }
  }

  return defaultLanguage;
}

function getStoredLanguage() {
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (languages.some((item) => item.code === storedLanguage)) {
      return storedLanguage;
    }
  } catch {
    // Если localStorage недоступен,
    // просто продолжаем без него.
  }

  return null;
}

function storeLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Работа сайта не должна зависеть
    // от доступности localStorage.
  }
}

export function LanguageProvider({ children }) {
  const location = useLocation();

  const navigate = useNavigate();

  const language = getLanguageFromPath(location.pathname);

  const translations = useMemo(() => getTranslations(language), [language]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    // Автоопределение языка работает
    // только на главной английской странице "/".
    //
    // Если пользователь открыл:
    // /about
    // /de/about
    // /es/about
    // /da/about
    // /sv/about
    // /el/about
    // /it/about
    //
    // URL имеет высший приоритет,
    // поэтому ничего не меняем.
    if (location.pathname !== '/') {
      return;
    }

    const storedLanguage = getStoredLanguage();

    const preferredLanguage = storedLanguage ?? getBrowserLanguage();

    if (preferredLanguage === defaultLanguage) {
      return;
    }

    const prefix = getLanguagePrefix(preferredLanguage);

    navigate(`${prefix}${location.search}${location.hash}`, {
      replace: true,
    });
  }, [location.pathname, location.search, location.hash, navigate]);

  function getLocalizedPath(path) {
    return localizePath(path, language);
  }

  function switchLanguage(nextLanguage) {
    storeLanguage(nextLanguage);

    const basePath = stripLanguagePrefix(location.pathname);

    const nextPath = localizePath(basePath, nextLanguage);

    navigate(`${nextPath}${location.search}${location.hash}`);
  }

  const value = useMemo(
    () => ({
      language,
      translations,
      getLocalizedPath,
      switchLanguage,
    }),
    [language, translations, location.pathname, location.search, location.hash],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
}
