import { Link } from 'react-router-dom';

import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

function GetInTouchSection({ id }) {
  const { translations, getLocalizedPath } = useLanguage();
  const copy = translations.contact.details;

  return (
    <section className='contact-section contact-details-section' id={id} aria-labelledby='get-in-touch-title'>
      <div className='contact-inner'>
        <Reveal as='header' className='contact-section-header'>
          <p className='contact-eyebrow'>{copy.eyebrow}</p>
          <h2 id='get-in-touch-title'>{copy.title}</h2>
          <p className='contact-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='contact-details-grid'>
          <article className='contact-detail-card'>
            <span>{copy.emailLabel}</span>
            <h3>{copy.emailTitle}</h3>
            <a href='mailto:info@fosmarin.eu'>info@fosmarin.eu</a>
            <p>{copy.emailText}</p>
          </article>

          <article className='contact-detail-card'>
            <span>{copy.websiteLabel}</span>
            <h3>{copy.websiteTitle}</h3>
            <Link to={getLocalizedPath('/')}>www.fosmarin.eu</Link>
            <p>{copy.websiteText}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default GetInTouchSection;
