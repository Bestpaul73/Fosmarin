import Reveal from './Reveal';

import {
  useLanguage,
} from '../i18n/LanguageContext';

import '../styles/project-impact.scss';

function ProjectImpact({ id }) {
  const {
    translations,
  } = useLanguage();

  const impact =
    translations.about.impact;

  return (
    <section
      className='project-impact'
      id={id}
      aria-labelledby='project-impact-title'
    >
      <div className='project-impact-inner'>
        <Reveal
          as='header'
          className='project-impact-header'
        >
          <p className='project-impact-eyebrow'>
            {impact.eyebrow}
          </p>

          <h2 id='project-impact-title'>
            {impact.title}
          </h2>

          <p className='project-impact-intro'>
            {impact.intro}
          </p>
        </Reveal>

        <Reveal className='project-impact-grid'>
          {impact.areas.map((area) => (
            <article
              className='project-impact-card'
              key={area.audience}
            >
              <div className='project-impact-meta'>
                <span className='project-impact-level'>
                  {area.level}
                </span>

                <span className='project-impact-audience'>
                  {area.audience}
                </span>
              </div>

              <h3>
                {area.title}
              </h3>

              <p className='project-impact-text'>
                {area.text}
              </p>

              <div className='project-impact-delivery'>
                <span>
                  {impact.deliveredThrough}
                </span>

                <p>
                  {area.delivery}
                </p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectImpact;
