import { useState, useEffect, useRef } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { navigation } from '../data/navigation';

import { languages } from '../i18n/languages';

import { useLanguage } from '../i18n/LanguageContext';

import SiteSearch from './SiteSearch';

import '../styles/header.scss';
import '../styles/site-search.scss';

import tokens from '../tokens/tokens.json';

const BREAKPOINT_TABLET = tokens.breakpoints.tablet;

const BREAKPOINT_WIDE_TOUCH_HEADER = tokens.breakpoints.wideTouchHeader;

function canUseHover() {
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function usesTouchNavigation() {
  return window.matchMedia('(hover: none), (pointer: coarse)').matches;
}

function getLayoutWidth() {
  return document.documentElement.clientWidth;
}

function usesDesktopNavigation() {
  if (usesTouchNavigation()) {
    return getLayoutWidth() >= BREAKPOINT_WIDE_TOUCH_HEADER;
  }

  return getLayoutWidth() > BREAKPOINT_TABLET;
}

function Header() {
  const { language, translations, getLocalizedPath, switchLanguage } = useLanguage();

  const [openMenu, setOpenMenu] = useState(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [languageOpen, setLanguageOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);

  // Показываем keyboard-focus только
  // при работе клавиатурой.
  const [keyboardMode, setKeyboardMode] = useState(false);

  // Сам Header — чтобы определять
  // клики за его пределами.
  const headerRef = useRef(null);

  // Весь блок переключателя языка.
  const languageSelectorRef = useRef(null);

  // Кнопка, открывающая поиск.
  const searchButtonRef = useRef(null);

  // Кнопка, открывающая список языков.
  const languageButtonRef = useRef(null);

  // Кнопки языков внутри dropdown.
  const languageOptionRefs = useRef({});

  // Какой язык нужно сфокусировать
  // после открытия dropdown.
  const languageToFocusRef = useRef(null);

  // Первые ссылки каждого submenu —
  // для переноса focus после ArrowDown.
  const firstSubmenuLinkRefs = useRef({});

  // Submenu, куда нужно поставить focus
  // после его открытия.
  const submenuToFocusRef = useRef(null);

  // Основные ссылки меню —
  // для возврата focus после Escape.
  const mainMenuLinkRefs = useRef({});

  // Показывает, что текущее submenu
  // открыто с клавиатуры.
  const menuOpenedByKeyboardRef = useRef(false);

  const currentLanguage = languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    const path = submenuToFocusRef.current;

    if (!path) {
      return;
    }

    firstSubmenuLinkRefs.current[path]?.focus();

    submenuToFocusRef.current = null;
  }, [openMenu]);

  useEffect(() => {
    if (!languageOpen) {
      return;
    }

    const languageCode = languageToFocusRef.current;

    if (!languageCode) {
      return;
    }

    languageOptionRefs.current[languageCode]?.focus();

    languageToFocusRef.current = null;
  }, [languageOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (
        event.key === 'Tab' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight'
      ) {
        setKeyboardMode(true);

        if (event.key === 'Tab' && !event.target.closest?.('.submenu')) {
          setOpenMenu(null);

          menuOpenedByKeyboardRef.current = false;
        }
      }

      if (event.key === 'Escape') {
        setOpenMenu(null);
        setSearchOpen(false);

        menuOpenedByKeyboardRef.current = false;
      }
    }

    function handlePointerDown(event) {
      setKeyboardMode(false);

      if (!headerRef.current?.contains(event.target)) {
        setOpenMenu(null);

        menuOpenedByKeyboardRef.current = false;
      }

      if (!languageSelectorRef.current?.contains(event.target)) {
        setLanguageOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    window.addEventListener('pointerdown', handlePointerDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);

      window.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  function closeMobileMenu() {
    setMobileOpen(false);
    setOpenMenu(null);
    setLanguageOpen(false);
    setSearchOpen(false);
  }

  function toggleSearch() {
    setOpenMenu(null);
    setMobileOpen(false);
    setLanguageOpen(false);

    setSearchOpen((currentValue) => !currentValue);
  }

  function closeSearch() {
    setSearchOpen(false);
  }

  function handleLogoClick() {
    closeMobileMenu();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }

  function handleLanguageChange(nextLanguage) {
    setLanguageOpen(false);
    setMobileOpen(false);
    setSearchOpen(false);

    switchLanguage(nextLanguage);
  }

  function openLanguageMenu(languageCode = language) {
    languageToFocusRef.current = languageCode;

    setLanguageOpen(true);
  }

  function handleLanguageButtonKeyDown(event) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') {
      return;
    }

    event.preventDefault();

    const currentIndex = languages.findIndex((item) => item.code === language);

    if (event.key === 'ArrowDown') {
      const nextIndex = (currentIndex + 1) % languages.length;

      openLanguageMenu(languages[nextIndex].code);

      return;
    }

    const previousIndex = (currentIndex - 1 + languages.length) % languages.length;

    openLanguageMenu(languages[previousIndex].code);
  }

  function handleLanguageMenuKeyDown(event) {
    const currentIndex = languages.findIndex((item) => item.code === event.target.dataset.language);

    switch (event.key) {
      case 'Escape':
        event.preventDefault();

        setLanguageOpen(false);

        languageButtonRef.current?.focus();

        break;

      case 'ArrowDown': {
        event.preventDefault();

        const nextIndex = (currentIndex + 1) % languages.length;

        languageOptionRefs.current[languages[nextIndex].code]?.focus();

        break;
      }

      case 'ArrowUp': {
        event.preventDefault();

        const previousIndex = (currentIndex - 1 + languages.length) % languages.length;

        languageOptionRefs.current[languages[previousIndex].code]?.focus();

        break;
      }

      case 'Home':
        event.preventDefault();

        languageOptionRefs.current[languages[0].code]?.focus();

        break;

      case 'End':
        event.preventDefault();

        languageOptionRefs.current[languages[languages.length - 1].code]?.focus();

        break;

      default:
        break;
    }
  }

  function openDesktopMenu(path) {
    if (usesDesktopNavigation() && canUseHover()) {
      if (menuOpenedByKeyboardRef.current && openMenu === path) {
        return;
      }

      menuOpenedByKeyboardRef.current = false;

      setKeyboardMode(false);

      setOpenMenu(path);
    }
  }

  function closeDesktopMenu() {
    if (usesDesktopNavigation() && canUseHover() && !menuOpenedByKeyboardRef.current) {
      setOpenMenu(null);
    }
  }

  function closeDesktopMenuByKeyboard(event) {
    if (!usesDesktopNavigation() || !menuOpenedByKeyboardRef.current) {
      return;
    }

    if (submenuToFocusRef.current) {
      return;
    }

    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpenMenu(null);

      menuOpenedByKeyboardRef.current = false;
    }
  }

  function handleMainLinkKeyDown(event, path) {
    if (event.key !== 'ArrowDown' || !usesDesktopNavigation()) {
      return;
    }

    event.preventDefault();

    menuOpenedByKeyboardRef.current = true;

    if (openMenu === path) {
      firstSubmenuLinkRefs.current[path]?.focus();
    } else {
      submenuToFocusRef.current = path;

      setOpenMenu(path);
    }
  }

  function handleSubmenuKeyDown(event, path) {
    if (!usesDesktopNavigation()) {
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();

        setOpenMenu(null);

        menuOpenedByKeyboardRef.current = false;

        mainMenuLinkRefs.current[path]?.focus();

        break;

      case 'ArrowDown': {
        event.preventDefault();

        const submenuLinks = Array.from(event.currentTarget.querySelectorAll('a'));

        const currentIndex = submenuLinks.indexOf(event.target);

        const nextIndex = (currentIndex + 1) % submenuLinks.length;

        submenuLinks[nextIndex]?.focus();

        break;
      }

      case 'ArrowUp': {
        event.preventDefault();

        const submenuLinks = Array.from(event.currentTarget.querySelectorAll('a'));

        const currentIndex = submenuLinks.indexOf(event.target);

        const previousIndex = (currentIndex - 1 + submenuLinks.length) % submenuLinks.length;

        submenuLinks[previousIndex]?.focus();

        break;
      }

      case 'ArrowRight': {
        event.preventDefault();

        const currentPageIndex = navigation.findIndex((page) => page.path === path);

        const nextPageIndex = (currentPageIndex + 1) % navigation.length;

        const nextPath = navigation[nextPageIndex].path;

        submenuToFocusRef.current = nextPath;

        setOpenMenu(nextPath);

        break;
      }

      case 'ArrowLeft': {
        event.preventDefault();

        const currentPageIndex = navigation.findIndex((page) => page.path === path);

        const previousPageIndex = (currentPageIndex - 1 + navigation.length) % navigation.length;

        const previousPath = navigation[previousPageIndex].path;

        submenuToFocusRef.current = previousPath;

        setOpenMenu(previousPath);

        break;
      }

      default:
        break;
    }
  }

  return (
    <header ref={headerRef} className={`header ${keyboardMode ? 'keyboard-mode' : ''}`}>
      <div className='header-inner'>
        <Link className='logo' to={getLocalizedPath('/')} onClick={handleLogoClick}>
          FOSMARIN
        </Link>

        <button
          className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
          type='button'
          aria-label={translations.header.toggleNavigation}
          aria-expanded={mobileOpen}
          aria-controls='primary-navigation'
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          id='primary-navigation'
          className={`main-nav ${mobileOpen ? 'mobile-open' : ''}`}
          aria-label={translations.header.primaryNavigation}
        >
          {navigation.map((page) => {
            const translatedPage = translations.navigation[page.path];

            const pageTitle = translatedPage?.title ?? page.title;

            return (
              <div
                className={`nav-item ${openMenu === page.path ? 'open' : ''}`}
                key={page.path}
                onMouseEnter={() => openDesktopMenu(page.path)}
                onMouseLeave={closeDesktopMenu}
                onBlur={closeDesktopMenuByKeyboard}
              >
                <NavLink
                  ref={(element) => {
                    mainMenuLinkRefs.current[page.path] = element;
                  }}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  to={getLocalizedPath(page.path)}
                  onClick={closeMobileMenu}
                  onKeyDown={(event) => handleMainLinkKeyDown(event, page.path)}
                >
                  {pageTitle}
                </NavLink>

                <button
                  className={`submenu-toggle ${openMenu === page.path ? 'open' : ''}`}
                  type='button'
                  aria-label={`${pageTitle} ${translations.header.sections}`}
                  aria-expanded={openMenu === page.path}
                  aria-controls={`submenu-${page.path.slice(1)}`}
                  onClick={() => setOpenMenu(openMenu === page.path ? null : page.path)}
                >
                  <span className='submenu-arrow'></span>
                </button>

                <div
                  id={`submenu-${page.path.slice(1)}`}
                  className='submenu'
                  onKeyDown={(event) => handleSubmenuKeyDown(event, page.path)}
                >
                  {page.sections.map((section, index) => {
                    const sectionTitle = translatedPage?.sections?.[section.id] ?? section.title;

                    return (
                      <Link
                        key={section.id}
                        ref={
                          index === 0
                            ? (element) => {
                                firstSubmenuLinkRefs.current[page.path] = element;
                              }
                            : null
                        }
                        to={getLocalizedPath(`${page.path}#${section.id}`)}
                        onClick={closeMobileMenu}
                      >
                        {sectionTitle}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </nav>

        <div className='search-control'>
          <button
            ref={searchButtonRef}
            className={`search-trigger ${searchOpen ? 'open' : ''}`}
            type='button'
            aria-label='Search FOSMARIN'
            aria-expanded={searchOpen}
            aria-controls='site-search-panel'
            onClick={toggleSearch}
          >
            <svg viewBox='0 0 24 24' aria-hidden='true'>
              <circle cx='11' cy='11' r='6.5'></circle>

              <path d='M16 16L21 21'></path>
            </svg>
          </button>
        </div>

        <div ref={languageSelectorRef} className='language-selector'>
          <button
            ref={languageButtonRef}
            className={`language-trigger ${languageOpen ? 'open' : ''}`}
            type='button'
            aria-label={translations.header.selectLanguage}
            aria-haspopup='menu'
            aria-expanded={languageOpen}
            aria-controls='language-menu'
            onClick={() => setLanguageOpen(!languageOpen)}
            onKeyDown={handleLanguageButtonKeyDown}
          >
            <span>{currentLanguage.label}</span>

            <span className='language-arrow' aria-hidden='true'></span>
          </button>

          {languageOpen && (
            <div
              id='language-menu'
              className='language-menu'
              role='menu'
              aria-label={translations.header.languageMenu}
              onKeyDown={handleLanguageMenuKeyDown}
            >
              {languages.map((languageOption) => (
                <button
                  key={languageOption.code}
                  ref={(element) => {
                    languageOptionRefs.current[languageOption.code] = element;
                  }}
                  className={`language-option ${language === languageOption.code ? 'active' : ''}`}
                  type='button'
                  role='menuitemradio'
                  aria-checked={language === languageOption.code}
                  aria-label={`${translations.header.switchLanguageTo} ${languageOption.name}`}
                  data-language={languageOption.code}
                  onClick={() => handleLanguageChange(languageOption.code)}
                >
                  <span>{languageOption.name}</span>

                  <span className='language-option-code'>{languageOption.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <SiteSearch open={searchOpen} onClose={closeSearch} triggerRef={searchButtonRef} />
    </header>
  );
}

export default Header;
