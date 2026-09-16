import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/technology-sections.scss';

function PredictiveAnalytics({ id }) {
  const { translations } = useLanguage();
  const copy = translations.technology.predictive;

  return (
    <section className='technology-section technology-predictive' id={id} aria-labelledby='predictive-analytics-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>{copy.eyebrow}</p>
          <h2 id='predictive-analytics-title'>{copy.title}</h2>
          <p className='technology-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='analytics-timeline'>
          {copy.stages.map((stage) => (
            <article className='analytics-stage' key={stage.time}>
              <span>{stage.time}</span>
              <strong>{stage.question}</strong>
              <small>{stage.title}</small>
            </article>
          ))}
        </Reveal>

        <Reveal className='predictive-layout'>
          <div className='predictive-copy'>
            <span className='technology-label'>{copy.label}</span>
            <h3>{copy.copyTitle}</h3>
            <p>{copy.copyText}</p>
          </div>

          <ul className='capability-list'>
            {copy.capabilities.map((capability) => (
              <li key={capability}>
                <span aria-hidden='true'>+</span>
                {capability}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default PredictiveAnalytics;
