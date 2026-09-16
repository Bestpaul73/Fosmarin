import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/challenge-sections.scss';

function CostOfInaction({ id }) {
  const { translations } = useLanguage();
  const copy = translations.challenge.cost;

  return (
    <section className='challenge-section challenge-cost' id={id} aria-labelledby='cost-of-inaction-title'>
      <div className='challenge-inner'>
        <Reveal as='header' className='challenge-section-header'>
          <p className='challenge-eyebrow'>{copy.eyebrow}</p>
          <h2 id='cost-of-inaction-title'>{copy.title}</h2>
          <p className='challenge-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='cost-grid'>
          {copy.scenarios.map((scenario) => (
            <article className='cost-card' key={scenario.type}>
              <h3>{scenario.type}</h3>
              <dl>
                {scenario.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </Reveal>

        <Reveal className='challenge-source-note challenge-source-note--cost'>
          <span>{copy.sourceLabel}</span>
          <p>{copy.sourceText}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default CostOfInaction;
