import { useCallback, useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/accessibility-tools.scss';

const COPY = {
  en: [
    'Accessibility tools',
    'Increase text',
    'Decrease text',
    'Grayscale',
    'High contrast',
    'Negative contrast',
    'Light background',
    'Underline links',
    'Readable font',
    'Reset',
    'Close',
  ],
  de: [
    'Barrierefreiheit',
    'Text vergrößern',
    'Text verkleinern',
    'Graustufen',
    'Hoher Kontrast',
    'Farben invertieren',
    'Heller Hintergrund',
    'Links unterstreichen',
    'Lesbare Schrift',
    'Zurücksetzen',
    'Schließen',
  ],
  es: [
    'Herramientas de accesibilidad',
    'Aumentar texto',
    'Reducir texto',
    'Escala de grises',
    'Alto contraste',
    'Invertir colores',
    'Fondo claro',
    'Subrayar enlaces',
    'Fuente legible',
    'Restablecer',
    'Cerrar',
  ],
  da: [
    'Tilgængelighedsværktøjer',
    'Forstør tekst',
    'Formindsk tekst',
    'Gråtoner',
    'Høj kontrast',
    'Invertér farver',
    'Lys baggrund',
    'Understreg links',
    'Læsbar skrifttype',
    'Nulstil',
    'Luk',
  ],
  sv: [
    'Tillgänglighetsverktyg',
    'Öka textstorleken',
    'Minska textstorleken',
    'Gråskala',
    'Hög kontrast',
    'Invertera färger',
    'Ljus bakgrund',
    'Stryk under länkar',
    'Lättläst typsnitt',
    'Återställ',
    'Stäng',
  ],
  el: [
    'Εργαλεία προσβασιμότητας',
    'Αύξηση κειμένου',
    'Μείωση κειμένου',
    'Κλίμακα του γκρι',
    'Υψηλή αντίθεση',
    'Αντιστροφή χρωμάτων',
    'Ανοιχτό φόντο',
    'Υπογράμμιση συνδέσμων',
    'Ευανάγνωστη γραμματοσειρά',
    'Επαναφορά',
    'Κλείσιμο',
  ],
  it: [
    'Strumenti di accessibilità',
    'Aumenta testo',
    'Riduci testo',
    'Scala di grigi',
    'Contrasto elevato',
    'Inverti colori',
    'Sfondo chiaro',
    'Sottolinea i link',
    'Carattere leggibile',
    'Ripristina',
    'Chiudi',
  ],
};

const STORAGE_KEY = 'fosmarin-accessibility';
const MODES = ['default', 'grayscale', 'high', 'negative', 'light'];

const DEFAULTS = {
  textSize: 0,
  mode: 'default',
  underlineLinks: false,
  readableFont: false,
};

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    return {
      textSize: Number.isInteger(saved?.textSize) ? Math.max(-2, Math.min(4, saved.textSize)) : 0,
      mode: MODES.includes(saved?.mode) ? saved.mode : 'default',
      underlineLinks: saved?.underlineLinks === true,
      readableFont: saved?.readableFont === true,
    };
  } catch {
    return { ...DEFAULTS };
  }
}

export default function AccessibilityTools() {
  const { language } = useLanguage();
  const labels = COPY[language] ?? COPY.en;

  const [settings, setSettings] = useState(loadSettings);
  const [isOpen, setIsOpen] = useState(false);

  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const closeTimer = useRef(null);

  const closePanel = useCallback((restoreFocus = true) => {
    clearTimeout(closeTimer.current);
    setIsOpen(false);

    if (restoreFocus) {
      triggerRef.current?.focus({ preventScroll: true });
    }

    // Ждём завершения движения, затем закрываем нативный dialog.
    const drawer = dialogRef.current?.parentElement;
    const seconds = drawer ? parseFloat(getComputedStyle(drawer).transitionDuration) : 0;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const duration = reducedMotion ? 0 : seconds > 0 ? seconds * 1000 + 20 : 0;

    closeTimer.current = setTimeout(() => dialogRef.current?.close(), duration);
  }, []);

  function openPanel() {
    clearTimeout(closeTimer.current);

    if (!dialogRef.current?.open) {
      dialogRef.current?.show();
    }

    setIsOpen(true);
  }

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    const root = document.documentElement;

    root.dataset.a11yMode = settings.mode;
    root.classList.toggle('a11y-large-text', settings.textSize > 0);
    root.classList.toggle('a11y-underline', settings.underlineLinks);
    root.classList.toggle('a11y-font', settings.readableFont);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Настройки работают и при недоступном localStorage.
    }

    return () => {
      delete root.dataset.a11yMode;
      root.classList.remove('a11y-underline', 'a11y-font', 'a11y-large-text');
    };
  }, [settings]);

  useEffect(() => {
    if (settings.textSize === 0) return;

    const page = document.querySelector('.site-layout');
    if (!page) return;

    const originals = new Map();
    const scale = 1 + settings.textSize * 0.1;

    function restore() {
      for (const [element, original] of originals) {
        if (original.value) {
          element.style.setProperty('font-size', original.value, original.priority);
        } else {
          element.style.removeProperty('font-size');
        }
      }

      originals.clear();
    }

    function apply() {
      restore();

      const elements = [...page.querySelectorAll('*')].filter(
        (element) =>
          element instanceof HTMLElement &&
          !element.matches('script, style') &&
          !element.closest('.logo') &&
          (element.matches('input, textarea, select') ||
            [...element.childNodes].some((node) => node.nodeType === 3 && node.textContent.trim())),
      );

      // Сначала измеряем размеры всех элементов, затем изменяем их.
      const sizes = elements.map((element) => parseFloat(getComputedStyle(element).fontSize));

      elements.forEach((element, index) => {
        originals.set(element, {
          value: element.style.getPropertyValue('font-size'),
          priority: element.style.getPropertyPriority('font-size'),
        });

        element.style.setProperty('font-size', `${sizes[index] * scale}px`, 'important');
      });
    }

    let frame;
    let disposed = false;

    function schedule() {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        if (!disposed) apply();
      });
    }

    apply();
    window.addEventListener('resize', schedule);
    document.fonts.ready.then(schedule);

    const observer = new MutationObserver(schedule);

    observer.observe(page, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', schedule);
      observer.disconnect();
      restore();
    };
  }, [settings.textSize, settings.readableFont]);

  useEffect(() => {
    if (!isOpen) return;

    // Язычок, заголовок и крестик — одна кнопка с одним фокусом.
    triggerRef.current?.focus({ preventScroll: true });

    function closeOutside(event) {
      if (!dialogRef.current?.contains(event.target) && !triggerRef.current?.contains(event.target)) {
        closePanel(false);
      }
    }

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closePanel();
      }
    }

    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen, closePanel]);

  function toggleMode(mode) {
    setSettings((previous) => ({
      ...previous,
      mode: previous.mode === mode ? 'default' : mode,
    }));
  }

  function toggle(key) {
    setSettings((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  }

  return (
    <div className='accessibility-tools__viewport'>
      <div className={`accessibility-tools ${isOpen ? 'is-open' : ''}`}>
        <div className='accessibility-tools__heading'>
          <button
            ref={triggerRef}
            className='accessibility-tools__trigger'
            type='button'
            title={isOpen ? labels[10] : labels[0]}
            aria-label={isOpen ? `${labels[0]}: ${labels[10]}` : labels[0]}
            aria-haspopup='dialog'
            aria-expanded={isOpen}
            aria-controls='accessibility-dialog'
            onClick={() => {
              if (isOpen) closePanel();
              else openPanel();
            }}
          >
            <span className='accessibility-tools__icon' aria-hidden='true'>
              <svg viewBox='0 0 24 24' focusable='false'>
                <circle cx='12' cy='12' r='10' />
                <circle cx='12' cy='6' r='1.5' />
                <path d='M6 10l6 1 6-1M12 11v4M12 15l-3 5M12 15l3 5' />
              </svg>
            </span>

            <span id='accessibility-title' className='accessibility-tools__heading-title'>
              {labels[0]}
            </span>

            <span className='accessibility-tools__heading-close' aria-hidden='true'>
              ×
            </span>
          </button>
        </div>

        <dialog
          id='accessibility-dialog'
          ref={dialogRef}
          aria-labelledby='accessibility-title'
          inert={!isOpen}
          onCancel={(event) => {
            event.preventDefault();
            closePanel();
          }}
          onClose={() => {
            clearTimeout(closeTimer.current);
            setIsOpen(false);
          }}
        >
          <div className='accessibility-tools__heading-space' aria-hidden='true' />

          <div className='accessibility-tools__controls'>
            <button
              type='button'
              disabled={settings.textSize === 4}
              onClick={() =>
                setSettings((previous) => ({
                  ...previous,
                  textSize: Math.min(4, previous.textSize + 1),
                }))
              }
            >
              <span aria-hidden='true'>A+</span>
              {labels[1]}
            </button>

            <button
              type='button'
              disabled={settings.textSize === -2}
              onClick={() =>
                setSettings((previous) => ({
                  ...previous,
                  textSize: Math.max(-2, previous.textSize - 1),
                }))
              }
            >
              <span aria-hidden='true'>A−</span>
              {labels[2]}
            </button>

            {['grayscale', 'high', 'negative', 'light'].map((mode, index) => (
              <button key={mode} type='button' aria-pressed={settings.mode === mode} onClick={() => toggleMode(mode)}>
                <span aria-hidden='true'>{['▥', '◐', '◑', '☀'][index]}</span>
                {labels[index + 3]}
              </button>
            ))}

            <button type='button' aria-pressed={settings.underlineLinks} onClick={() => toggle('underlineLinks')}>
              <span aria-hidden='true'>↗</span>
              {labels[7]}
            </button>

            <button type='button' aria-pressed={settings.readableFont} onClick={() => toggle('readableFont')}>
              <span aria-hidden='true'>Aa</span>
              {labels[8]}
            </button>

            <button type='button' onClick={() => setSettings({ ...DEFAULTS })}>
              <span aria-hidden='true'>↶</span>
              {labels[9]}
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
}
