import Reveal from './Reveal';
import '../styles/challenge-sections.scss';

const surveillanceGaps = [
  {
    number: '01',
    system: 'Radar',
    limitation: 'Useful for surface awareness, but coverage is constrained by range.',
  },
  {
    number: '02',
    system: 'AIS',
    limitation: 'Reporting is voluntary and therefore cannot provide a complete picture on its own.',
  },
  {
    number: '03',
    system: 'Coastal cameras',
    limitation: 'Visual monitoring is inherently limited by range and line of sight.',
  },
  {
    number: '04',
    system: 'Satellites',
    limitation: 'Satellite-based monitoring can introduce latency between observation and operational response.',
  },
  {
    number: '05',
    system: 'Sonobuoys',
    limitation:
      'Can theoretically detect underwater activity, but deployment and maintenance are complex and civilian use is uncommon.',
  },
];

function CurrentGaps({ id }) {
  return (
    <section className='challenge-section challenge-gaps' id={id} aria-labelledby='current-gaps-title'>
      <div className='challenge-inner'>
        <Reveal as='header' className='challenge-section-header'>
          <p className='challenge-eyebrow'>Current gaps</p>

          <h2 id='current-gaps-title'>Existing surveillance leaves important parts of the picture unseen.</h2>

          <p className='challenge-section-intro'>
            Maritime awareness today typically relies on several systems working together. Each contributes useful
            information, but each also has limitations — especially when the event happens below the surface.
          </p>
        </Reveal>

        <Reveal className='surveillance-gaps-grid'>
          {surveillanceGaps.map((gap) => (
            <article className='surveillance-gap-card' key={gap.number}>
              <span className='surveillance-gap-number'>{gap.number}</span>

              <h3>{gap.system}</h3>

              <p>{gap.limitation}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className='challenge-callout'>
          <span>Missing layer</span>

          <p>
            Radar, AIS, cameras and satellites cannot reliably detect underwater activity or complex events near subsea
            infrastructure. FOSMARIN explores FOAS as an additional sensing layer that can complement these existing
            sources.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default CurrentGaps;
