import Reveal from './Reveal';
import '../styles/challenge-sections.scss';

const naturalThreats = [
  {
    title: 'Seismic activity',
    risk: 'Medium',
  },
  {
    title: 'Submarine landslide',
    risk: 'Medium',
  },
  {
    title: 'Submarine current drag',
    risk: 'High',
  },
  {
    title: 'Shark or other animal bite',
    risk: 'Low',
  },
  {
    title: 'Cable degradation',
    risk: 'High',
  },
];

const humanThreats = [
  {
    title: 'Anchor drop',
    risk: 'High',
  },
  {
    title: 'Trawling',
    risk: 'High',
  },
  {
    title: 'Divers at cable / sabotage',
    risk: 'Low',
  },
  {
    title: 'Seafloor works and dredging',
    risk: 'Low',
  },
  {
    title: 'Loitering near infrastructure',
    risk: 'Medium',
  },
  {
    title: 'Submarine explosives / sabotage',
    risk: 'Medium',
  },
  {
    title: 'Unmanned sub / ROV sabotage',
    risk: 'Medium',
  },
];

function ThreatGroup({ type, title, intro, threats }) {
  return (
    <article className={`threat-group threat-group--${type}`}>
      <div className='threat-group-header'>
        <span>{type === 'natural' ? 'Natural' : 'Human-related'}</span>
        <h3>{title}</h3>
        <p>{intro}</p>
      </div>

      <ul className='threat-list'>
        {threats.map((threat) => (
          <li key={threat.title}>
            <span className='threat-name'>{threat.title}</span>

            <span className={`threat-risk threat-risk--${threat.risk.toLowerCase()}`}>{threat.risk}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ThreatsToSubseaCables({ id }) {
  return (
    <section className='challenge-section challenge-threats' id={id} aria-labelledby='challenge-threats-title'>
      <div className='challenge-inner'>
        <Reveal as='header' className='challenge-section-header'>
          <p className='challenge-eyebrow'>Threats to subsea cables</p>

          <h2 id='challenge-threats-title'>
            Critical infrastructure faces threats from both nature and human activity.
          </h2>

          <p className='challenge-section-intro'>
            Subsea cables and related infrastructure can be affected by geological events, long-term degradation,
            accidental maritime activity and deliberate interference. FOSMARIN considers a broad range of scenarios that
            can damage infrastructure or indicate suspicious activity nearby.
          </p>
        </Reveal>

        <Reveal className='threat-groups'>
          <ThreatGroup
            type='natural'
            title='Natural and environmental'
            intro='Events and processes that can damage or degrade subsea infrastructure without direct human intervention.'
            threats={naturalThreats}
          />

          <ThreatGroup
            type='human'
            title='Maritime and human activity'
            intro='Accidental activity and deliberate interference that may put cables and other subsea assets at risk.'
            threats={humanThreats}
          />
        </Reveal>

        <Reveal className='challenge-source-note'>
          <span>Threat model</span>
          <p>Risk levels shown here follow the threat assessment contained in the FOSMARIN proposal material.</p>
        </Reveal>
      </div>
    </section>
  );
}

export default ThreatsToSubseaCables;
