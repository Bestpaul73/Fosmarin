import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/technology-sections.scss';

function IntegrationSecurity({ id }) {
  const { translations } = useLanguage();
  const copy = translations.technology.integration;

  return (
    <section className='technology-section technology-integration' id={id} aria-labelledby='integration-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>{copy.eyebrow}</p>
          <h2 id='integration-title'>{copy.title}</h2>
          <p className='technology-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='integration-grid'>
          {copy.areas.map((area) => (
            <article className='integration-card' key={area.title}>
              <span>{area.label}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className='integration-path'>
          <span>{copy.path[0]}</span>
          <i aria-hidden='true'>→</i>
          <span>{copy.path[1]}</span>
          <i aria-hidden='true'>→</i>
          <span>{copy.path[2]}</span>
          <i aria-hidden='true'>+</i>
          <span>{copy.path[3]}</span>
        </Reveal>
      </div>
    </section>
  );
}

export default IntegrationSecurity;
