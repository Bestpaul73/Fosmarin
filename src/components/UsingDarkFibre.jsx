import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/technology-sections.scss';

function UsingDarkFibre({ id }) {
  const { translations } = useLanguage();
  const copy = translations.technology.darkFibre;

  return (
    <section className='technology-section technology-dark-fibre' id={id} aria-labelledby='dark-fibre-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>{copy.eyebrow}</p>
          <h2 id='dark-fibre-title'>{copy.title}</h2>
          <p className='technology-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='dark-fibre-diagram'>
          <div className='dark-fibre-endpoint'>
            <span>{copy.onshore}</span>
            <strong>{copy.interrogator}</strong>
          </div>

          <div className='dark-fibre-line' aria-hidden='true'>
            <span /><span /><span /><span /><span />
          </div>

          <div className='dark-fibre-endpoint'>
            <span>{copy.subsea}</span>
            <strong>{copy.existingCable}</strong>
          </div>
        </Reveal>

        <Reveal className='technology-card-grid technology-card-grid--3'>
          {copy.benefits.map((benefit) => (
            <article className='technology-card' key={benefit.number}>
              <span className='technology-card-number'>{benefit.number}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className='technology-highlight'>
          <strong>0</strong>
          <div>
            <span>{copy.highlightLabel}</span>
            <p>{copy.highlightText}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default UsingDarkFibre;
