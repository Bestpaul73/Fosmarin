import { Link } from 'react-router-dom';

import { useLanguage } from '../i18n/LanguageContext';

import '../styles/not-found.scss';

const COPY = {
  en: { title: 'Page not found', text: 'The page you are looking for does not exist or has moved.', action: 'Back to home' },
  de: { title: 'Seite nicht gefunden', text: 'Die gesuchte Seite existiert nicht oder wurde verschoben.', action: 'Zur Startseite' },
  es: { title: 'Página no encontrada', text: 'La página que busca no existe o ha sido movida.', action: 'Volver al inicio' },
  da: { title: 'Siden blev ikke fundet', text: 'Den side, du leder efter, findes ikke eller er blevet flyttet.', action: 'Til forsiden' },
  sv: { title: 'Sidan hittades inte', text: 'Sidan du söker finns inte eller har flyttats.', action: 'Till startsidan' },
  el: { title: 'Η σελίδα δεν βρέθηκε', text: 'Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.', action: 'Επιστροφή στην αρχική' },
  it: { title: 'Pagina non trovata', text: 'La pagina che stai cercando non esiste o è stata spostata.', action: 'Torna alla home' },
};

function NotFound() {
  const { language, getLocalizedPath } = useLanguage();

  const copy = COPY[language] ?? COPY.en;

  return (
    <section className='not-found' aria-labelledby='not-found-title'>
      <div className='not-found__inner'>
        <p className='not-found__code' aria-hidden='true'>404</p>

        <h1 id='not-found-title'>{copy.title}</h1>

        <p className='not-found__text'>{copy.text}</p>

        <Link className='not-found__link' to={getLocalizedPath('/')}>
          {copy.action}
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
