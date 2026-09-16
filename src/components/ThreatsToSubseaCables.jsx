import Reveal from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import '../styles/challenge-sections.scss';

function ThreatGroup({ type, title, intro, threats, labels, riskLabels }) {
  return (
    <article className={`threat-group threat-group--${type}`}>
      <div className='threat-group-header'>
        <span>{type === 'natural' ? labels.natural : labels.human}</span>
        <h3>{title}</h3>
        <p>{intro}</p>
      </div>

      <ul className='threat-list'>
        {threats.map((threat) => (
          <li key={threat.title}>
            <span className='threat-name'>{threat.title}</span>
            <span className={`threat-risk threat-risk--${threat.risk.toLowerCase()}`}>
              {riskLabels[threat.risk]}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ThreatsToSubseaCables({ id }) {
  const { translations } = useLanguage();
  const copy = translations.challenge.threats;

  return (
    <section className='challenge-section challenge-threats' id={id} aria-labelledby='challenge-threats-title'>
      <div className='challenge-inner'>
        <Reveal as='header' className='challenge-section-header'>
          <p className='challenge-eyebrow'>{copy.eyebrow}</p>
          <h2 id='challenge-threats-title'>{copy.title}</h2>
          <p className='challenge-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal className='threat-groups'>
          <ThreatGroup
            type='natural'
            title={copy.naturalTitle}
            intro={copy.naturalIntro}
            threats={copy.natural}
            labels={{ natural: copy.naturalLabel, human: copy.humanLabel }}
            riskLabels={copy.riskLabels}
          />

          <ThreatGroup
            type='human'
            title={copy.humanTitle}
            intro={copy.humanIntro}
            threats={copy.human}
            labels={{ natural: copy.naturalLabel, human: copy.humanLabel }}
            riskLabels={copy.riskLabels}
          />
        </Reveal>

        <Reveal className='challenge-source-note'>
          <span>{copy.sourceLabel}</span>
          <p>{copy.sourceText}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default ThreatsToSubseaCables;
