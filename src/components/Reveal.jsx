import { useEffect, useRef, useState } from 'react';

import { useLocation } from 'react-router-dom';

import '../styles/reveal.scss';

function Reveal({ as: Component = 'div', className = '', children, id, ...props }) {
  const location = useLocation();

  const elementRef = useRef(null);

  const isHashTarget = Boolean(id) && location.hash === `#${id}`;

  const [isVisible, setIsVisible] = useState(isHashTarget);

  /*
   * Если этот Reveal является целью
   * текущего hash-перехода,
   * показываем его сразу.
   */
  useEffect(() => {
    if (isHashTarget) {
      setIsVisible(true);
    }
  }, [isHashTarget]);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return undefined;
    }

    /*
     * Если элемент уже показан,
     * IntersectionObserver больше не нужен.
     */
    if (isVisible) {
      return undefined;
    }

    /*
     * Важный случай:
     *
     * страница была открыта или обновлена
     * уже в прокрученной позиции.
     *
     * Если Reveal находится выше viewport,
     * пользователь его уже "прошёл".
     *
     * Поэтому считаем его видимым сразу,
     * чтобы при прокрутке обратно вверх
     * он не анимировался задним числом.
     */
    const rect = element.getBoundingClientRect();

    if (rect.bottom <= 0) {
      setIsVisible(true);

      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);

      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <Component
      ref={elementRef}
      id={id}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Reveal;
