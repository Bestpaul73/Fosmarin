import Reveal from './Reveal';
import '../styles/technology-sections.scss';

const benefits = [
  {
    number: '01',
    title: 'Existing infrastructure',
    text: 'FOSMARIN uses fibre that is already installed inside subsea cable systems.',
  },
  {
    number: '02',
    title: 'No new seabed hardware',
    text: 'The sensing capability is created from the fibre itself rather than by installing a new chain of underwater sensors.',
  },
  {
    number: '03',
    title: 'Long-range coverage',
    text: 'A FOAS interrogator can monitor large areas along the cable from an accessible cable endpoint.',
  },
];

function UsingDarkFibre({ id }) {
  return (
    <section className='technology-section technology-dark-fibre' id={id} aria-labelledby='dark-fibre-title'>
      <div className='technology-inner'>
        <Reveal as='header' className='technology-section-header'>
          <p className='technology-eyebrow'>Using dark fibre</p>

          <h2 id='dark-fibre-title'>Existing cables become part of the sensing system.</h2>

          <p className='technology-section-intro'>
            FOSMARIN is designed to use available optical fibre in existing subsea infrastructure. Instead of deploying
            a new sensor network on the seabed, an interrogator sends light through the fibre and observes how the
            returning signal changes.
          </p>
        </Reveal>

        <Reveal className='dark-fibre-diagram'>
          <div className='dark-fibre-endpoint'>
            <span>Onshore</span>
            <strong>FOAS interrogator</strong>
          </div>

          <div className='dark-fibre-line' aria-hidden='true'>
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className='dark-fibre-endpoint'>
            <span>Subsea</span>
            <strong>Existing fibre cable</strong>
          </div>
        </Reveal>

        <Reveal className='technology-card-grid technology-card-grid--3'>
          {benefits.map((benefit) => (
            <article className='technology-card' key={benefit.number}>
              <span className='technology-card-number'>{benefit.number}</span>

              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className='technology-highlight'>
          <strong>0</strong>

          <div>
            <span>new subsea sensing hardware</span>

            <p>The project builds on fibre infrastructure that is already deployed.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default UsingDarkFibre;
