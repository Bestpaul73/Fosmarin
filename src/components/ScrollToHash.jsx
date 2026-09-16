import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Если у нового URL нет #section,
    // обычный переход между страницами
    // всегда начинается с начала страницы.
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });

      return;
    }

    // Если URL содержит hash,
    // прокручиваем к соответствующей секции.
    const id = location.hash.slice(1);

    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  }, [location]);

  return null;
}

export default ScrollToHash;
