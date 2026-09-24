import { useCallback, useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const location = useLocation();

  const cleanupRef = useRef(null);

  const runHashNavigation = useCallback((hash) => {
    cleanupRef.current?.();

    cleanupRef.current = null;

    if (!hash) {
      return;
    }

    const id = hash.slice(1);

    let frameId;
    let removeHighlightTimeoutId;

    let attempts = 0;

    const maxAttempts = 5;

    function navigateToElement() {
      const element = document.getElementById(id);

      /*
       * Обычно после useEffect
       * элемент уже находится в DOM.
       *
       * Несколько кадров оставляем
       * только как небольшую страховку.
       */
      if (!element) {
        attempts += 1;

        if (attempts < maxAttempts) {
          frameId = window.requestAnimationFrame(navigateToElement);
        }

        return;
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      /*
       * Сначала запускаем подсветку.
       *
       * Reveal уже знает, что этот
       * элемент является hash-целью,
       * поэтому карточка к этому моменту
       * должна быть видимой.
       */
      element.classList.remove('search-target-highlight');

      /*
       * Принудительный reflow нужен,
       * чтобы повторный переход
       * к той же карточке снова
       * запускал CSS-анимацию.
       */
      void element.offsetWidth;

      element.classList.add('search-target-highlight');

      /*
       * После этого едем к уже
       * видимой и подсвеченной карточке.
       */
      element.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',

        block: 'start',
      });

      removeHighlightTimeoutId = window.setTimeout(() => {
        element.classList.remove('search-target-highlight');
      }, 3200);
    }

    frameId = window.requestAnimationFrame(navigateToElement);

    cleanupRef.current = () => {
      window.cancelAnimationFrame(frameId);

      if (removeHighlightTimeoutId) {
        window.clearTimeout(removeHighlightTimeoutId);
      }
    };
  }, []);

  /*
   * Обычная навигация React Router.
   *
   * Работает как между страницами:
   *
   * /about
   * →
   * /consortium#advisory-tine-larsen
   *
   * так и внутри одной страницы.
   */
  useEffect(() => {
    if (!location.hash) {
      cleanupRef.current?.();

      cleanupRef.current = null;

      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });

      return;
    }

    runHashNavigation(location.hash);
  }, [location.pathname, location.hash, runHashNavigation]);

  /*
   * Повторный переход к точно тому же URL.
   *
   * Например:
   *
   * URL уже:
   * #advisory-tine-larsen
   *
   * пользователь прокрутил страницу вверх
   * и снова выбрал Tine Larsen в поиске.
   *
   * В этом случае SiteSearch отправляет
   * специальное событие, потому что
   * React Router location не изменяется.
   */
  useEffect(() => {
    function handleRepeatedHashNavigation(event) {
      const hash = event.detail?.hash;

      if (!hash) {
        return;
      }

      runHashNavigation(hash);
    }

    window.addEventListener('fosmarin:hash-navigation', handleRepeatedHashNavigation);

    return () => {
      window.removeEventListener('fosmarin:hash-navigation', handleRepeatedHashNavigation);

      cleanupRef.current?.();

      cleanupRef.current = null;
    };
  }, [runHashNavigation]);

  return null;
}

export default ScrollToHash;
