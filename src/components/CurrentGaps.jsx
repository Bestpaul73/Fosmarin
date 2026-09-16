import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/challenge-sections.scss';

function CurrentGaps({ id }) {
  const { translations } = useLanguage();
  const copy = translations.challenge.gaps;

  return (
    <section className='challenge-section challenge-gaps' id={id} aria-labelledby='current-gaps-title'>
      <div className='challenge-inner'>
        <Reveal as='header' className='challenge-section-header'>
          <p className='challenge-eyebrow'>{copy.eyebrow}</p>
          <h2 id='current-gaps-title'>{copy.title}</h2>
          <p className='challenge-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='surveillance-gaps-grid'>
          {copy.items.map((gap) => (
            <article className='surveillance-gap-card' key={gap.number}>
              <span className='surveillance-gap-number'>{gap.number}</span>
              <h3>{gap.system}</h3>
              <p>{gap.limitation}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className='challenge-callout'>
          <span>{copy.calloutLabel}</span>
          <p>{copy.calloutText}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default CurrentGaps;
