import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/why-it-matters.scss';

function WhyItMatters({ id }) {
  const { translations } = useLanguage();
  const copy = translations.challenge.globalContext;

  return (
    <section className='why-it-matters' id={id} aria-labelledby='why-it-matters-title'>
      <div className='why-it-matters-inner'>
        <Reveal as='header' className='why-it-matters-header'>
          <p className='why-it-matters-eyebrow'>{copy.eyebrow}</p>
          <h2 id='why-it-matters-title'>{copy.title}</h2>
          <p className='why-it-matters-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='why-it-matters-grid'>
          {copy.stats.map((stat) => (
            <article className='why-it-matters-card' key={stat.value}>
              <strong>{stat.value}</strong>
              <p>{stat.text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default WhyItMatters;
