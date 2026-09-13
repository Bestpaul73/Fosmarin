import { useEffect, useState } from 'react';
import '../styles/scroll-to-top.scss';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.55);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'is-visible' : ''}`}
      type='button'
      onClick={scrollToTop}
      aria-label='Back to top'
      title='Back to top'
    >
      <svg
        viewBox='0 0 24 24'
        aria-hidden='true'
        focusable='false'
      >
        <path d='M6 15l6-6 6 6' />
      </svg>
    </button>
  );
}

export default ScrollToTop;