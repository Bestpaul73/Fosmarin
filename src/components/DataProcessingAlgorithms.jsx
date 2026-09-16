import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/technology-sections.scss';

function DataProcessingAlgorithms({ id }) {
  const { translations } = useLanguage();
  const copy = translations.technology.processing;

  return (
    <section className='technology-section technology-processing' id={id} aria-labelledby='data-processing-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>{copy.eyebrow}</p>
          <h2 id='data-processing-title'>{copy.title}</h2>
          <p className='technology-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='processing-grid'>
          {copy.stages.map((stage) => (
            <article className='processing-card' key={stage.number}>
              <span>{stage.number}</span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className='technology-highlight technology-highlight--data'>
          <strong>10</strong>
          <div>
            <span>{copy.highlightLabel}</span>
            <p>{copy.highlightText}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default DataProcessingAlgorithms;
