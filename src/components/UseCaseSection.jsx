import Reveal from './Reveal';
import UnderConstructionNotice from './UnderConstructionNotice';
import { useLanguage } from '../i18n/LanguageContext';

function UseCaseSection({ id, useCase, reverse = false }) {
  const { translations } = useLanguage();
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
              title={`${useCase.eyebrow} ${translations.common.underConstruction.contentSuffix}`}
              text={translations.useCases.clientInputText}
            />
          ) : (
            <>
              <ul className='use-case-tags' aria-label={`${useCase.eyebrow} ${translations.useCases.topics}`}>
                {useCase.tags.map((tag) => <li key={tag}>{tag}</li>)}
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
