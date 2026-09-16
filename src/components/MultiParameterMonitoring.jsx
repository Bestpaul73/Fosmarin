import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/technology-sections.scss';

function MultiParameterMonitoring({ id }) {
  const { translations } = useLanguage();
  const copy = translations.technology.multi;

  return (
    <section className='technology-section technology-multi' id={id} aria-labelledby='multi-parameter-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>{copy.eyebrow}</p>
          <h2 id='multi-parameter-title'>{copy.title}</h2>
          <p className='technology-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='signal-layers'>
          {copy.layers.map((layer, index) => (
            <article className='signal-layer' key={layer.title}>
              <span className='signal-layer-index'>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <small>{layer.label}</small>
                <h3>{layer.title}</h3>
                <p>{layer.text}</p>
              </div>
            </article>
          ))}
        </Reveal>

        <Reveal className='technology-flow-note'>
          <span>{copy.flowLabel}</span>
          <p>{copy.flowText}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default MultiParameterMonitoring;
