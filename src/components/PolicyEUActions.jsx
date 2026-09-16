import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/challenge-sections.scss';

function PolicyEUActions({ id }) {
  const { translations } = useLanguage();
  const copy = translations.challenge.policy;

  return (
    <section className='challenge-section challenge-policy' id={id} aria-labelledby='policy-eu-actions-title'>
      <div className='challenge-inner'>
        <Reveal as='header' className='challenge-section-header'>
          <p className='challenge-eyebrow'>{copy.eyebrow}</p>
          <h2 id='policy-eu-actions-title'>{copy.title}</h2>
          <p className='challenge-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='policy-timeline'>
          {copy.items.map((item) => (
            <article className='policy-item' key={item.year}>
              <div className='policy-year'>{item.year}</div>
              <div className='policy-content'>
                <div className='policy-meta'>
                  <span>{item.type}</span>
                  <small>{item.reference}</small>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default PolicyEUActions;
