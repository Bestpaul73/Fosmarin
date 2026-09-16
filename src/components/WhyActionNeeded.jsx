import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/challenge-sections.scss';

function WhyActionNeeded({ id }) {
  const { translations } = useLanguage();
  const copy = translations.challenge.action;

  return (
    <section className='challenge-section challenge-action' id={id} aria-labelledby='why-action-needed-title'>
      <div className='challenge-inner'>
        <Reveal as='header' className='challenge-section-header'>
          <p className='challenge-eyebrow'>{copy.eyebrow}</p>
          <h2 id='why-action-needed-title'>{copy.title}</h2>
          <p className='challenge-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='action-flow'>
          {copy.steps.map((step, index) => (
            <article className='action-step' key={step.number}>
              <div className='action-step-top'>
                <span>{step.number}</span>
                {index < copy.steps.length - 1 && (
                  <span className='action-step-arrow' aria-hidden='true'>→</span>
                )}
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className='action-outcome'>
          <div className='action-outcome-marker'>{copy.outcomeLabel}</div>
          <p>{copy.outcomeText}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default WhyActionNeeded;
