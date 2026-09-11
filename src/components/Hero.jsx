import { Link } from 'react-router-dom';
import HeroVisual from './HeroVisual';
import Reveal from './Reveal';
import '../styles/hero.scss';

const heroStats = [
  { value: '≈1 m', label: 'Sensing resolution' },
  { value: '<1 s', label: 'Detection latency' },
  { value: '0', label: 'New subsea hardware' },
];

function Hero() {
  return (
    <section className='hero' aria-labelledby='hero-title'>
      <div className='hero-inner'>
        <Reveal className='hero-copy'>
          <p className='hero-eyebrow'>
            EU-funded · Subsea infrastructure resilience
          </p>

          <h1 className='hero-title' id='hero-title'>
            A glass thread on the seabed can now <em>hear</em> everything above
            it.
          </h1>

          <p className='hero-lead'>
            FOSMARIN turns existing subsea fibre-optic cables into thousands of
            virtual underwater listening points — using Fibre Optic Acoustic
            Sensing (FOAS) and predictive analytics to detect vessel movements,
            anchor threats, seismic activity and other critical events along the
            cable route.
          </p>

          <div className='hero-actions'>
            <Link
              className='hero-button hero-button--primary'
              to='/technology#how-it-works'
            >
              See how it works
            </Link>

            <Link
              className='hero-button hero-button--secondary'
              to='/about#mission-and-vision'
            >
              Project mission
            </Link>
          </div>

          <ul className='hero-stats' aria-label='Key project figures'>
            {heroStats.map((stat) => (
              <li className='hero-stat' key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <HeroVisual />
      </div>

      <svg
        className='hero-wave'
        viewBox='0 0 1440 90'
        preserveAspectRatio='none'
        aria-hidden='true'
        focusable='false'
      >
        <path
          d='M0,40 C240,90 480,0 720,30 C960,60 1200,10 1440,45 L1440,90 L0,90 Z'
          fill='currentColor'
        />
      </svg>
    </section>
  );
}

export default Hero;