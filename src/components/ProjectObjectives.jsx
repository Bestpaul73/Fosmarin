import Reveal from './Reveal';

import {
  useLanguage,
} from '../i18n/LanguageContext';

import '../styles/project-objectives.scss';

function ProjectObjectives({ id }) {
  const {
    translations,
  } = useLanguage();

  const objectives =
    translations.about.objectives;

  return (
    <section
      className='project-objectives'
      id={id}
      aria-labelledby='project-objectives-title'
    >
      <div className='project-objectives-inner'>
        <Reveal
          as='header'
          className='project-objectives-header'
        >
          <p className='project-objectives-eyebrow'>
            {objectives.eyebrow}
          </p>

          <h2 id='project-objectives-title'>
            {objectives.title}
          </h2>

          <p className='project-objectives-intro'>
            {objectives.intro}
          </p>
        </Reveal>

        <Reveal className='project-objectives-grid'>
          {objectives.items.map(
            (objective) => (
              <article
                className='project-objective'
                key={objective.number}
              >
                <span className='project-objective-number'>
                  {objective.number}
                </span>

                <h3>
                  {objective.title}
                </h3>

                <p>
                  {objective.text}
                </p>
              </article>
            )
          )}
        </Reveal>

        <Reveal className='project-objectives-outcome'>
          <span>
            {objectives.outcomeLabel}
          </span>

          <p>
            {objectives.outcomeText}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectObjectives;
