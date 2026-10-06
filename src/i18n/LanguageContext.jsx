import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { defaultLanguage, languages, getLanguageFromPath, localizePath, stripLanguagePrefix } from './languages';

import { getTranslations, loadTranslations, initialTranslationError } from './translations';

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
    // Продолжаем работу без localStorage.
  }

  return null;
}

function storeLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Переключение языка не зависит от localStorage.
  }
}

export function LanguageProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const language = getLanguageFromPath(location.pathname);
  const translations = getTranslations(language);

  const [, refreshTranslations] = useState(0);
  const [loadError, setLoadError] = useState(initialTranslationError);

  const switchRequest = useRef(0);
  const latestLocation = useRef(location);

  useEffect(() => {
    latestLocation.current = location;
  }, [location]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // Дополнительная защита для перехода через Router
  // на язык, который ещё не загружен.
  useEffect(() => {
    if (getTranslations(language) || initialTranslationError) {
      return;
    }

    let cancelled = false;

    loadTranslations(language)
      .then(() => {
        if (!cancelled) {
          setLoadError(null);
          refreshTranslations((version) => version + 1);
        }
      })
      .catch((error) => {
        if (!cancelled) {
          setLoadError(error);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [language]);

  const changeLanguage = useCallback(
    async (nextLanguage, { replace = false, persist = true } = {}) => {
      if (!languages.some((item) => item.code === nextLanguage)) {
        return;
      }

      const request = ++switchRequest.current;
      const sourceLocation = latestLocation.current;

      try {
        // Пока перевод загружается, текущая страница остаётся.
        await loadTranslations(nextLanguage);

        // Устаревший запрос не должен менять язык или страницу.
        if (request !== switchRequest.current || sourceLocation.key !== latestLocation.current.key) {
          return;
        }

        setLoadError(null);

        if (persist) {
          storeLanguage(nextLanguage);
        }

        const basePath = stripLanguagePrefix(sourceLocation.pathname);

        const nextPath = localizePath(basePath, nextLanguage);

        navigate(`${nextPath}${sourceLocation.search}${sourceLocation.hash}`, { replace });
      } catch (error) {
        if (request === switchRequest.current && sourceLocation.key === latestLocation.current.key) {
          setLoadError(error);
        }
      }
    },
    [navigate],
  );

  useEffect(() => {
    // Явный URL страницы имеет высший приоритет.
    // Автоопределение работает только на "/".
    if (location.pathname !== '/') {
      return;
    }

    const preferredLanguage = getStoredLanguage() ?? getBrowserLanguage();

    if (preferredLanguage !== defaultLanguage) {
      void changeLanguage(preferredLanguage, {
        replace: true,
        persist: false,
      });
    }
  }, [location.pathname, location.search, location.hash, changeLanguage]);

  const getLocalizedPath = useCallback((path) => localizePath(path, language), [language]);

  const switchLanguage = useCallback(
    (nextLanguage) => {
      void changeLanguage(nextLanguage);
    },
    [changeLanguage],
  );

  const value = useMemo(
    () => ({
      language,
      translations,
      getLocalizedPath,
      switchLanguage,
    }),
    [language, translations, getLocalizedPath, switchLanguage],
  );

  if (!translations) {
    return (
      <div role={loadError ? 'alert' : 'status'}>
        <p>{loadError ? 'The page language could not be loaded. Please reload the page.' : 'Loading…'}</p>

        {loadError && (
          <button type='button' onClick={() => window.location.reload()}>
            Reload page
          </button>
        )}
      </div>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {loadError && (
        <div role='alert'>
          <p>The selected language could not be loaded. Your current page is still available. Please try again.</p>

          <button type='button' onClick={() => setLoadError(null)}>
            Close
          </button>
        </div>
      )}

      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }

  return context;
}
