import Reveal from './Reveal';
import UnderConstructionNotice from './UnderConstructionNotice';
import { useLanguage } from '../i18n/LanguageContext';

function ResourceSection({ id, title, intro, underConstruction = false, children }) {
  const { translations } = useLanguage();

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
              title={`${title} ${translations.common.underConstruction.contentSuffix}`}
              text={translations.common.underConstruction.resources}
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
