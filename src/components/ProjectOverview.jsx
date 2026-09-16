import Reveal from './Reveal';

import {
  useLanguage,
} from '../i18n/LanguageContext';

import '../styles/project-overview.scss';

function ProjectOverview({ id }) {
  const {
    translations,
  } = useLanguage();

  const overview =
    translations.about.overview;

  return (
    <section
      className='project-overview'
      id={id}
      aria-labelledby='project-overview-title'
    >
      <div className='project-overview-inner'>
        <Reveal
          as='header'
          className='project-overview-header'
        >
          <p className='project-overview-eyebrow'>
            {overview.eyebrow}
          </p>

          <h2 id='project-overview-title'>
            {overview.title}
          </h2>

          <p className='project-overview-intro'>
            {overview.intro}
          </p>
        </Reveal>

        <div className='project-overview-main'>
          <Reveal className='project-overview-copy'>
            {overview.paragraphs.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              )
            )}
          </Reveal>

          <Reveal className='project-overview-facts'>
            {overview.facts.map(
              (fact) => (
                <div
                  className='project-overview-fact'
                  key={fact.label}
                >
                  <span>
                    {fact.label}
                  </span>

                  <strong>
                    {fact.value}
                  </strong>
                </div>
              )
            )}
          </Reveal>
        </div>

        <Reveal className='project-overview-outputs'>
          {overview.outputs.map(
            (output) => (
              <article
                className='project-overview-output'
                key={output.number}
              >
                <span className='project-overview-number'>
                  {output.number}
                </span>

                <div>
                  <h3>
                    {output.title}
                  </h3>

                  <p>
                    {output.text}
                  </p>
                </div>
              </article>
            )
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default ProjectOverview;
