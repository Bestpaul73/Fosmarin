import Reveal from './Reveal';

import { presentations } from '../data/resources';

function PresentationsSection({ id }) {
  return (
    <section className='resources-section resources-presentations' id={id} aria-labelledby='presentations-title'>
      <div className='resources-inner'>
        <Reveal as='header' className='resources-section-header'>
          <p className='resources-eyebrow'>Presentations</p>

          <h2 id='presentations-title'>Project presentations and technical material.</h2>

          <p className='resources-section-intro'>
            FOSMARIN presentation material is being prepared for publication as the project develops.
          </p>
        </Reveal>

        <Reveal className='presentation-grid'>
          {presentations.map((presentation) => (
            <article className='presentation-card' key={presentation.id}>
              <div className='presentation-card-top'>
                <span>{presentation.type}</span>

                <span className='presentation-file-icon' aria-hidden='true'>
                  ↗
                </span>
              </div>

              <h3>{presentation.title}</h3>

              <p>{presentation.description}</p>

              <div className='presentation-card-status'>Public download to be confirmed</div>
            </article>
          ))}
        </Reveal>

        <Reveal className='resources-publication-note'>
          <span>Publication</span>

          <p>
            Public download links will be added once the relevant project material has been approved for publication.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default PresentationsSection;
