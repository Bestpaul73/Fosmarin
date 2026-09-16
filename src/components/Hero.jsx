import { Link } from 'react-router-dom';

import HeroVisual from './HeroVisual';
import Reveal from './Reveal';

import {
  useLanguage,
} from '../i18n/LanguageContext';

import '../styles/hero.scss';

function Hero() {
  const {
    translations,
    getLocalizedPath,
  } = useLanguage();

  const hero =
    translations.home.hero;

  return (
    <section
      className='hero'
      aria-labelledby='hero-title'
    >
      <div className='hero-inner'>
        <Reveal className='hero-copy'>
          <p className='hero-eyebrow'>
            {hero.eyebrow}
          </p>

          <h1
            className='hero-title'
            id='hero-title'
          >
            {hero.titleBefore}

            <em>
              {hero.titleEmphasis}
            </em>

            {hero.titleAfter}
          </h1>

          <p className='hero-lead'>
            {hero.lead}
          </p>

          <div className='hero-actions'>
            <Link
              className='hero-button hero-button--primary'
              to={getLocalizedPath(
                '/technology#how-it-works'
              )}
            >
              {hero.primaryAction}
            </Link>

            <Link
              className='hero-button hero-button--secondary'
              to={getLocalizedPath(
                '/about#mission-and-vision'
              )}
            >
              {hero.secondaryAction}
            </Link>
          </div>

          <ul
            className='hero-stats'
            aria-label={hero.statsLabel}
          >
            {hero.stats.map((stat) => (
              <li
                className='hero-stat'
                key={stat.label}
              >
                <strong>
                  {stat.value}
                </strong>

                <span>
                  {stat.label}
                </span>
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