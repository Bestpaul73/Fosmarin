import { useEffect, useMemo, useRef, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { buildSearchItems, getResultSnippets, normalizeText } from '../data/searchIndex';

import { useLanguage } from '../i18n/LanguageContext';

const searchCopy = {
  en: {
    label: 'Search FOSMARIN',
    placeholder: 'Search pages and sections…',
    hint: 'Enter at least 2 characters',
    noResults: 'No results found',
    page: 'Page',
    section: 'Section',
    close: 'Close search',
  },

  de: {
    label: 'FOSMARIN durchsuchen',
    placeholder: 'Seiten und Abschnitte durchsuchen…',
    hint: 'Mindestens 2 Zeichen eingeben',
    noResults: 'Keine Ergebnisse gefunden',
    page: 'Seite',
    section: 'Abschnitt',
    close: 'Suche schließen',
  },

  es: {
    label: 'Buscar en FOSMARIN',
    placeholder: 'Buscar páginas y secciones…',
    hint: 'Introduce al menos 2 caracteres',
    noResults: 'No se encontraron resultados',
    page: 'Página',
    section: 'Sección',
    close: 'Cerrar búsqueda',
  },

  da: {
    label: 'Søg i FOSMARIN',
    placeholder: 'Søg i sider og sektioner…',
    hint: 'Indtast mindst 2 tegn',
    noResults: 'Ingen resultater fundet',
    page: 'Side',
    section: 'Sektion',
    close: 'Luk søgning',
  },

  sv: {
    label: 'Sök i FOSMARIN',
    placeholder: 'Sök på sidor och avsnitt…',
    hint: 'Ange minst 2 tecken',
    noResults: 'Inga resultat hittades',
    page: 'Sida',
    section: 'Avsnitt',
    close: 'Stäng sökning',
  },

  el: {
    label: 'Αναζήτηση στο FOSMARIN',
    placeholder: 'Αναζήτηση σε σελίδες και ενότητες…',
    hint: 'Πληκτρολογήστε τουλάχιστον 2 χαρακτήρες',
    noResults: 'Δεν βρέθηκαν αποτελέσματα',
    page: 'Σελίδα',
    section: 'Ενότητα',
    close: 'Κλείσιμο αναζήτησης',
  },

  it: {
    label: 'Cerca in FOSMARIN',
    placeholder: 'Cerca pagine e sezioni…',
    hint: 'Inserisci almeno 2 caratteri',
    noResults: 'Nessun risultato trovato',
    page: 'Pagina',
    section: 'Sezione',
    close: 'Chiudi ricerca',
  },
};

function findMatchRange(text, normalizedQuery) {
  const normalizedCharacters = [];

  const originalPositions = [];

  let originalIndex = 0;

  for (const character of text) {
    const normalizedCharacter = character
      .toLocaleLowerCase()
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '');

    for (let index = 0; index < normalizedCharacter.length; index += 1) {
      normalizedCharacters.push(normalizedCharacter[index]);

      originalPositions.push(originalIndex);
    }

    originalIndex += character.length;
  }

  const normalizedText = normalizedCharacters.join('');

  const matchIndex = normalizedText.indexOf(normalizedQuery);

  if (matchIndex === -1) {
    return null;
  }

  const start = originalPositions[matchIndex];

  const lastNormalizedIndex = matchIndex + normalizedQuery.length - 1;

  const end = originalPositions[lastNormalizedIndex] + 1;

  return {
    start,
    end,
  };
}

function HighlightedText({ text, normalizedQuery }) {
  const matchRange = findMatchRange(text, normalizedQuery);

  if (!matchRange) {
    return text;
  }

  return (
    <>
      {text.slice(0, matchRange.start)}

      <mark className='site-search-highlight'>{text.slice(matchRange.start, matchRange.end)}</mark>

      {text.slice(matchRange.end)}
    </>
  );
}

function SiteSearch({ open, onClose, triggerRef }) {
  const { language, translations, getLocalizedPath } = useLanguage();

  const navigate = useNavigate();

  const [query, setQuery] = useState('');

  const [activeIndex, setActiveIndex] = useState(-1);

  const inputRef = useRef(null);

  const copy = searchCopy[language] ?? searchCopy.en;

  const searchItems = useMemo(() => buildSearchItems(translations, getLocalizedPath), [translations, getLocalizedPath]);

  const normalizedQuery = normalizeText(query);

  const results = useMemo(() => {
    if (normalizedQuery.length < 2) {
      return [];
    }

    return searchItems
      .filter((item) => item.searchText.includes(normalizedQuery))
      .sort((firstItem, secondItem) => {
        const firstTitle = normalizeText(firstItem.title);

        const secondTitle = normalizeText(secondItem.title);

        const firstStartsWith = firstTitle.startsWith(normalizedQuery);

        const secondStartsWith = secondTitle.startsWith(normalizedQuery);

        if (firstStartsWith !== secondStartsWith) {
          return firstStartsWith ? -1 : 1;
        }

        const firstIncludes = firstTitle.includes(normalizedQuery);

        const secondIncludes = secondTitle.includes(normalizedQuery);

        if (firstIncludes !== secondIncludes) {
          return firstIncludes ? -1 : 1;
        }

        if (firstItem.type !== secondItem.type) {
          return firstItem.type === 'page' ? -1 : 1;
        }

        return firstItem.title.localeCompare(secondItem.title, language);
      })
      .slice(0, 10);
  }, [language, normalizedQuery, searchItems]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [normalizedQuery]);

  useEffect(() => {
    if (!open) {
      setQuery('');

      setActiveIndex(-1);

      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key !== 'Escape') {
        return;
      }

      event.preventDefault();

      onClose();

      window.requestAnimationFrame(() => {
        triggerRef.current?.focus();
      });
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, triggerRef]);

  function closeSearch() {
    onClose();

    window.requestAnimationFrame(() => {
      triggerRef.current?.focus();
    });
  }

  function getTargetUrl(path) {
    return new URL(path, window.location.origin);
  }

  function isCurrentTarget(path) {
    const targetUrl = getTargetUrl(path);

    return (
      targetUrl.pathname === window.location.pathname &&
      targetUrl.search === window.location.search &&
      targetUrl.hash === window.location.hash
    );
  }

  function repeatHashNavigation(path) {
    const targetUrl = getTargetUrl(path);

    if (!targetUrl.hash) {
      return;
    }

    window.dispatchEvent(
      new CustomEvent('fosmarin:hash-navigation', {
        detail: {
          hash: targetUrl.hash,
        },
      }),
    );
  }

  function navigateToResult(path) {
    if (isCurrentTarget(path)) {
      repeatHashNavigation(path);

      return;
    }

    navigate(path);
  }

  function handleResultClick(event, result) {
    onClose();

    /*
     * Обычный переход оставляем Link.
     *
     * Но если пользователь уже находится
     * на точно таком же pathname + hash,
     * React Router не создаст новое изменение
     * location.
     *
     * В этом случае отменяем обычный Link
     * и просим ScrollToHash повторить переход.
     */
    if (isCurrentTarget(result.path)) {
      event.preventDefault();

      repeatHashNavigation(result.path);
    }
  }

  function handleInputKeyDown(event) {
    if (results.length === 0) {
      return;
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();

      setActiveIndex((currentIndex) => {
        if (currentIndex >= results.length - 1) {
          return 0;
        }

        return currentIndex + 1;
      });

      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();

      setActiveIndex((currentIndex) => {
        if (currentIndex <= 0) {
          return results.length - 1;
        }

        return currentIndex - 1;
      });

      return;
    }

    if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault();

      const activeResult = results[activeIndex];

      if (!activeResult) {
        return;
      }

      onClose();

      navigateToResult(activeResult.path);
    }
  }

  if (!open) {
    return null;
  }

  return (
    <div className='site-search-layer'>
      <button className='site-search-backdrop' type='button' aria-label={copy.close} onClick={closeSearch}></button>

      <section id='site-search-panel' className='site-search-panel' aria-label={copy.label}>
        <div className='site-search-field'>
          <svg className='site-search-field-icon' viewBox='0 0 24 24' aria-hidden='true'>
            <circle cx='11' cy='11' r='6.5'></circle>

            <path d='M16 16L21 21'></path>
          </svg>

          <input
            ref={inputRef}
            type='search'
            value={query}
            placeholder={copy.placeholder}
            aria-label={copy.label}
            autoComplete='off'
            spellCheck='false'
            aria-controls='site-search-results'
            aria-activedescendant={activeIndex >= 0 ? `site-search-result-${activeIndex}` : undefined}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleInputKeyDown}
          />

          <button className='site-search-close' type='button' onClick={closeSearch}>
            <span aria-hidden='true'>×</span>

            <span className='sr-only'>{copy.close}</span>
          </button>
        </div>

        <div id='site-search-results' className='site-search-results' aria-live='polite'>
          {normalizedQuery.length < 2 && <p className='site-search-message'>{copy.hint}</p>}

          {normalizedQuery.length >= 2 && results.length === 0 && (
            <p className='site-search-message'>{copy.noResults}</p>
          )}

          {results.length > 0 && (
            <ul className='site-search-list'>
              {results.map((result, resultIndex) => {
                const snippets = getResultSnippets(result, normalizedQuery);

                const isActive = resultIndex === activeIndex;

                return (
                  <li key={result.id}>
                    <Link
                      id={`site-search-result-${resultIndex}`}
                      className={`site-search-result${isActive ? ' site-search-result--active' : ''}`}
                      to={result.path}
                      onClick={(event) => handleResultClick(event, result)}
                      onMouseEnter={() => setActiveIndex(resultIndex)}
                    >
                      <span className='site-search-result-type'>
                        {result.type === 'page' ? copy.page : copy.section}
                      </span>

                      <strong>{result.title}</strong>

                      {result.parentTitle && <span className='site-search-result-parent'>{result.parentTitle}</span>}

                      {snippets.map((snippet, index) => (
                        <span className='site-search-result-snippet' key={`${result.id}-snippet-${index}`}>
                          <HighlightedText text={snippet} normalizedQuery={normalizedQuery} />
                        </span>
                      ))}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}

export default SiteSearch;
