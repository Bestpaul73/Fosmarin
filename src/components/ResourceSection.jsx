import Reveal from './Reveal';
import UnderConstructionNotice from './UnderConstructionNotice';

function ResourceSection({ id, title, intro, underConstruction = false, children }) {
  return (
    <section className='resources-section' id={id} aria-labelledby={`${id}-title`}>
      <div className='resources-inner'>
        <Reveal as='header' className='resources-section-header'>
          <p className='resources-eyebrow'>{title}</p>

          <h2 id={`${id}-title`}>{title}</h2>

          {intro && <p className='resources-section-intro'>{intro}</p>}
        </Reveal>

        {underConstruction ? (
          <Reveal>
            <UnderConstructionNotice
              title={`${title} content is under construction`}
              text='Resources will be added as project outputs become available or are approved for publication.'
            />
          </Reveal>
        ) : (
          children
        )}
      </div>
    </section>
  );
}

export default ResourceSection;
