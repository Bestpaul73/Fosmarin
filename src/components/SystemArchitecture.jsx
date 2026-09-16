import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/technology-sections.scss';

function SystemArchitecture({ id }) {
  const { translations } = useLanguage();
  const copy = translations.technology.architecture;

  return (
    <section className='technology-section technology-architecture' id={id} aria-labelledby='system-architecture-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>{copy.eyebrow}</p>
          <h2 id='system-architecture-title'>{copy.title}</h2>
          <p className='technology-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='architecture-flow' aria-label={copy.ariaLabel}>
          {copy.items.map((item, index) => (
            <article className='architecture-node' key={item.number}>
              <div className='architecture-node-top'>
                <span>{item.number}</span>
                {index < copy.items.length - 1 && (
                  <span className='architecture-arrow' aria-hidden='true'>→</span>
                )}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default SystemArchitecture;
