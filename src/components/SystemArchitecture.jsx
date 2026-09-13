import Reveal from './Reveal';
import '../styles/technology-sections.scss';

const architecture = [
  {
    number: '01',
    title: 'Subsea fibre',
    text: 'Existing fibre-optic infrastructure acts as the sensing medium.',
  },
  {
    number: '02',
    title: 'FOAS interrogator',
    text: 'Laser pulses are transmitted into the fibre and the returning light is measured.',
  },
  {
    number: '03',
    title: 'Signal processing',
    text: 'Raw measurements are transformed into useful acoustic and signal features.',
  },
  {
    number: '04',
    title: 'Data fusion',
    text: 'FOAS information is combined with external sources such as AIS.',
  },
  {
    number: '05',
    title: 'Analytics',
    text: 'Algorithms classify, identify, track and assess detected activity.',
  },
  {
    number: '06',
    title: 'Operational interface',
    text: 'Results are delivered to operators and relevant authorities.',
  },
];

function SystemArchitecture({ id }) {
  return (
    <section className='technology-section technology-architecture' id={id} aria-labelledby='system-architecture-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>System architecture & components</p>

          <h2 id='system-architecture-title'>From a vibration on the seabed to information an operator can act on.</h2>

          <p className='technology-section-intro'>
            FOSMARIN connects fibre sensing, processing, contextual information and predictive analytics into one
            operational chain.
          </p>
        </Reveal>

        <Reveal className='architecture-flow' aria-label='FOSMARIN system processing flow'>
          {architecture.map((item, index) => (
            <article className='architecture-node' key={item.number}>
              <div className='architecture-node-top'>
                <span>{item.number}</span>

                {index < architecture.length - 1 && (
                  <span className='architecture-arrow' aria-hidden='true'>
                    →
                  </span>
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
