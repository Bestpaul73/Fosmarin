import Reveal from './Reveal';
import '../styles/why-it-matters.scss';

const impactStats = [
  {
    value: '1.4M km',
    text: 'of subsea cable in service worldwide, carrying almost all intercontinental data traffic',
  },
  {
    value: '150+',
    text: 'reported cable faults every year, from anchors, trawling and natural hazards',
  },
  {
    value: 'Minutes',
    text: 'is how long it can take a dragging anchor to sever a cable once contact is made',
  },
  {
    value: '1 fibre',
    text: 'already in the ground is all FOSMARIN needs — no new subsea hardware required',
  },
];

function WhyItMatters() {
  return (
    <section
      className='why-it-matters'
      aria-labelledby='why-it-matters-title'
    >
      <div className='why-it-matters-inner'>
        <Reveal
          as='header'
          className='why-it-matters-header'
        >
          <p className='why-it-matters-eyebrow'>Why this matters</p>

          <h2 id='why-it-matters-title'>
            Europe&apos;s digital and energy lifelines run along the seabed —
            almost unwatched.
          </h2>

          <p className='why-it-matters-intro'>
            More than 95% of intercontinental data, and a growing share of
            Europe&apos;s offshore power, travels through subsea cables. They
            cross thousands of kilometres of ocean floor that no one can watch
            continuously — until now.
          </p>
        </Reveal>

        <Reveal className='why-it-matters-grid'>
          {impactStats.map((stat) => (
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