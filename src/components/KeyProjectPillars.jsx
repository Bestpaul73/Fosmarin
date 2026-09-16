import { Link } from 'react-router-dom';

import Reveal from './Reveal';

import { useLanguage } from '../i18n/LanguageContext';

import '../styles/key-project-pillars.scss';

function KeyProjectPillars() {
  const { translations, getLocalizedPath } = useLanguage();

  const pillars = translations.home.pillars;

  return (
    <section className='key-pillars' aria-labelledby='key-pillars-title'>
      <div className='key-pillars-inner'>
        <Reveal as='header' className='key-pillars-header'>
          <p className='key-pillars-eyebrow'>{pillars.eyebrow}</p>

          <h2 id='key-pillars-title'>{pillars.title}</h2>

          <p className='key-pillars-intro'>{pillars.intro}</p>
        </Reveal>

        <Reveal className='key-pillars-grid'>
          {pillars.items.map((pillar) => (
            <article className='key-pillar' key={pillar.number}>
              <span className='key-pillar-number'>{pillar.number}</span>

              <h3>{pillar.title}</h3>

              <p>{pillar.text}</p>

              <Link className='key-pillar-link' to={getLocalizedPath(pillar.link)}>
                {pillar.linkLabel}

                <span aria-hidden='true'>→</span>
              </Link>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default KeyProjectPillars;
