import Reveal from './Reveal';
import UnderConstructionNotice from './UnderConstructionNotice';

function UseCaseSection({ id, useCase, reverse = false }) {
  const isClientInput = useCase.status === 'client-input';

  return (
    <section
      className={`use-case-section ${reverse ? 'use-case-section--reverse' : ''} ${
        isClientInput ? 'use-case-section--client-input' : ''
      }`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className='use-case-inner'>
        <Reveal className='use-case-number'>
          <span>{useCase.number}</span>
        </Reveal>

        <Reveal className='use-case-main'>
          <p className='use-case-eyebrow'>{useCase.eyebrow}</p>

          <h2 id={`${id}-title`}>{useCase.title}</h2>

          <p className='use-case-intro'>{useCase.intro}</p>

          {isClientInput ? (
            <UnderConstructionNotice
              title={`${useCase.eyebrow} content is under construction`}
              text='This use case is part of the approved FOSMARIN website structure. Detailed project content will be added when it is provided or confirmed by the client.'
            />
          ) : (
            <>
              <ul className='use-case-tags' aria-label={`${useCase.eyebrow} topics`}>
                {useCase.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <div className='use-case-points'>
                {useCase.points.map((point, index) => (
                  <article key={point.title}>
                    <span>{String(index + 1).padStart(2, '0')}</span>

                    <div>
                      <h3>{point.title}</h3>

                      <p>{point.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default UseCaseSection;
