import Reveal from './Reveal';

import {
  useLanguage,
} from '../i18n/LanguageContext';

import '../styles/mission-vision.scss';

function MissionIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      focusable='false'
    >
      <circle
        cx='12'
        cy='12'
        r='9'
      />

      <circle
        cx='12'
        cy='12'
        r='5'
      />

      <circle
        className='mission-vision-icon-dot'
        cx='12'
        cy='12'
        r='1.6'
      />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg
      viewBox='0 0 24 24'
      aria-hidden='true'
      focusable='false'
    >
      <path d='M2 12c2.5-5 6.5-8 10-8s7.5 3 10 8c-2.5 5-6.5 8-10 8s-7.5-3-10-8Z' />

      <circle
        cx='12'
        cy='12'
        r='3'
      />
    </svg>
  );
}

function MissionVision({ id }) {
  const {
    translations,
  } = useLanguage();

  const content =
    translations.about.missionVision;

  return (
    <section
      className='mission-vision'
      id={id}
      aria-labelledby='mission-vision-title'
    >
      <div className='mission-vision-inner'>
        <Reveal
          as='header'
          className='mission-vision-header'
        >
          <p className='mission-vision-eyebrow'>
            {content.eyebrow}
          </p>

          <h2 id='mission-vision-title'>
            {content.title}
          </h2>
        </Reveal>

        <Reveal className='mission-vision-grid'>
          <article className='mission-vision-card'>
            <div className='mission-vision-icon'>
              <MissionIcon />
            </div>

            <h3>
              {content.missionTitle}
            </h3>

            <p>
              {content.missionText}
            </p>
          </article>

          <article className='mission-vision-card'>
            <div className='mission-vision-icon'>
              <VisionIcon />
            </div>

            <h3>
              {content.visionTitle}
            </h3>

            <p>
              {content.visionText}
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

export default MissionVision;
