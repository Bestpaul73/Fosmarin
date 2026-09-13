import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../data/navigation';
import '../styles/header.scss';
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
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Показываем keyboard-focus только при работе клавиатурой.
  const [keyboardMode, setKeyboardMode] = useState(false);

  // Сам Header — чтобы определять клики за его пределами.
  const headerRef = useRef(null);

  // Первые ссылки каждого submenu — для переноса focus после ArrowDown.
  const firstSubmenuLinkRefs = useRef({});

  // Submenu, куда нужно поставить focus после его открытия.
  const submenuToFocusRef = useRef(null);

  // Основные ссылки меню — для возврата focus после Escape.
  const mainMenuLinkRefs = useRef({});

  // Показывает, что текущее submenu открыто с клавиатуры.
  const menuOpenedByKeyboardRef = useRef(false);

  useEffect(() => {
    const path = submenuToFocusRef.current;

    if (!path) {
      return;
    }

    firstSubmenuLinkRefs.current[path]?.focus();

    submenuToFocusRef.current = null;
  }, [openMenu]);

  useEffect(() => {
    function handleKeyDown(event) {
      // Keyboard-mode включаем только при навигации клавиатурой.
      if (
        event.key === 'Tab' ||
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'ArrowLeft' ||
        event.key === 'ArrowRight'
      ) {
        setKeyboardMode(true);

        // Tab закрывает hover-submenu, но не мешает
        // Tab-навигации внутри keyboard-submenu.
        if (event.key === 'Tab' && !event.target.closest?.('.submenu')) {
          setOpenMenu(null);
          menuOpenedByKeyboardRef.current = false;
        }
      }

      // Escape закрывает любое открытое submenu.
      if (event.key === 'Escape') {
        setOpenMenu(null);
        menuOpenedByKeyboardRef.current = false;
      }
    }

    function handlePointerDown(event) {
      setKeyboardMode(false);

      // Если нажали вне Header — закрываем открытое submenu.
      if (!headerRef.current?.contains(event.target)) {
        setOpenMenu(null);
        menuOpenedByKeyboardRef.current = false;
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
  }

  function openDesktopMenu(path) {
    if (usesDesktopNavigation() && canUseHover()) {
      // Если мышь попала в уже открытое keyboard-menu —
      // режим не меняем.
      if (menuOpenedByKeyboardRef.current && openMenu === path) {
        return;
      }

      // Наведение на другой пункт переключает управление
      // обратно на мышь.
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

    // Не закрываем меню при переходе стрелками
    // в соседнее submenu.
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

    // Дальше меню управляется клавиатурой.
    menuOpenedByKeyboardRef.current = true;

    // Если submenu уже открыто —
    // можно сразу перевести focus внутрь.
    if (openMenu === path) {
      firstSubmenuLinkRefs.current[path]?.focus();
    } else {
      // Иначе запоминаем цель focus
      // и сначала открываем submenu.
      submenuToFocusRef.current = path;
      setOpenMenu(path);
    }
  }

  function handleSubmenuKeyDown(event, path) {
    // Keyboard-навигация submenu нужна
    // только в desktop-режиме.
    if (!usesDesktopNavigation()) {
      return;
    }

    switch (event.key) {
      case 'Escape':
        event.preventDefault();

        setOpenMenu(null);

        menuOpenedByKeyboardRef.current = false;

        // Возвращаем focus на основной пункт текущего submenu.
        mainMenuLinkRefs.current[path]?.focus();

        break;

      case 'ArrowDown': {
        event.preventDefault();

        // Все ссылки текущего submenu.
        const submenuLinks = Array.from(event.currentTarget.querySelectorAll('a'));

        const currentIndex = submenuLinks.indexOf(event.target);

        // Следующий пункт; после последнего
        // возвращаемся к первому.
        const nextIndex = (currentIndex + 1) % submenuLinks.length;

        submenuLinks[nextIndex]?.focus();

        break;
      }

      case 'ArrowUp': {
        event.preventDefault();

        const submenuLinks = Array.from(event.currentTarget.querySelectorAll('a'));

        const currentIndex = submenuLinks.indexOf(event.target);

        // Предыдущий пункт; с первого переходим на последний.
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

        // Предыдущая страница;
        // с первой переходим к последней.
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
        <Link className='logo' to='/' onClick={closeMobileMenu}>
          FOSMARIN
        </Link>

        <button
          className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
          type='button'
          aria-label='Toggle navigation'
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
          aria-label='Primary navigation'
        >
          {navigation.map((page) => (
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
                to={page.path}
                onClick={closeMobileMenu}
                onKeyDown={(event) => handleMainLinkKeyDown(event, page.path)}
              >
                {page.title}
              </NavLink>

              <button
                className={`submenu-toggle ${openMenu === page.path ? 'open' : ''}`}
                type='button'
                aria-label={`${page.title} sections`}
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
                {page.sections.map((section, index) => (
                  <Link
                    key={section.id}
                    ref={
                      index === 0
                        ? (element) => {
                            firstSubmenuLinkRefs.current[page.path] = element;
                          }
                        : null
                    }
                    to={`${page.path}#${section.id}`}
                    onClick={closeMobileMenu}
                  >
                    {section.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
