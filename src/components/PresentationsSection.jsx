import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

function PresentationsSection({ id }) {
  const { translations } = useLanguage();
  const copy = translations.resourcesPage.presentations;

  return (
    <section className='resources-section resources-presentations' id={id} aria-labelledby='presentations-title'>
      <div className='resources-inner'>
        <Reveal as='header' className='resources-section-header'>
          <p className='resources-eyebrow'>{copy.eyebrow}</p>
          <h2 id='presentations-title'>{copy.title}</h2>
          <p className='resources-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='presentation-grid'>
          {copy.items.map((presentation) => (
            <article className='presentation-card' key={presentation.id}>
              <div className='presentation-card-top'>
                <span>{presentation.type}</span>
                <span className='presentation-file-icon' aria-hidden='true'>↗</span>
              </div>

              <h3>{presentation.title}</h3>
              <p>{presentation.description}</p>
              <div className='presentation-card-status'>{copy.status}</div>
            </article>
          ))}
        </Reveal>

        <Reveal className='resources-publication-note'>
          <span>{copy.publication}</span>
          <p>{copy.publicationText}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default PresentationsSection;
