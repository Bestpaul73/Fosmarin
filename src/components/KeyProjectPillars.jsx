import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import '../styles/key-project-pillars.scss';

const pillars = [
  {
    number: '01',
    title: 'Protect Subsea Cables',
    text: 'Detect vessel activity, anchor threats, geological events and other risks before they become major disruptions.',
    link: '/challenge',
    linkLabel: 'Explore the challenge',
  },
  {
    number: '02',
    title: 'Advanced FOAS Technology',
    text: 'Turn existing fibre-optic cables into continuous sensing networks without adding new hardware to the seabed.',
    link: '/technology',
    linkLabel: 'Explore the technology',
  },
  {
    number: '03',
    title: 'AI & Predictive Analytics',
    text: 'Combine acoustic signals with intelligent analysis and external data to identify events, reduce false alarms and support earlier action.',
    link: '/technology#predictive-analytics-and-ai',
    linkLabel: 'See predictive analytics',
  },
  {
    number: '04',
    title: 'Resilient Infrastructure',
    text: 'Give operators and authorities better situational awareness, decision support and tools for preparedness, response and recovery.',
    link: '/about#impact',
    linkLabel: 'See project impact',
  },
  {
    number: '05',
    title: 'Stronger Maritime Future',
    text: 'Build knowledge, datasets, operational practices and technology that can strengthen European subsea infrastructure beyond the project itself.',
    link: '/about#objectives',
    linkLabel: 'Explore project objectives',
  },
];

function KeyProjectPillars() {
  return (
    <section className='key-pillars' aria-labelledby='key-pillars-title'>
      <div className='key-pillars-inner'>
        <Reveal as='header' className='key-pillars-header'>
          <p className='key-pillars-eyebrow'>Key project pillars</p>

          <h2 id='key-pillars-title'>Five priorities shaping a more resilient subsea future.</h2>

          <p className='key-pillars-intro'>
            FOSMARIN brings sensing, analytics and operational resilience together in one approach to protecting
            Europe&apos;s critical maritime infrastructure.
          </p>
        </Reveal>

        <Reveal className='key-pillars-grid'>
          {pillars.map((pillar) => (
            <article className='key-pillar' key={pillar.number}>
              <span className='key-pillar-number'>{pillar.number}</span>

              <h3>{pillar.title}</h3>

              <p>{pillar.text}</p>

              <Link className='key-pillar-link' to={pillar.link}>
                {pillar.linkLabel}
                <span aria-hidden='true'>→</span>
              </Link>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default KeyProjectPillars;
