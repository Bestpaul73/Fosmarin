import Reveal from './Reveal';
import UnderConstructionNotice from './UnderConstructionNotice';
import { useLanguage } from '../i18n/LanguageContext';

function AdvisoryBoard({ id }) {
  const { translations } = useLanguage();
  const copy = translations.consortium.advisory;

  return (
    <section className='consortium-section consortium-advisory' id={id} aria-labelledby='advisory-board-title'>
      <div className='consortium-page-inner'>
        <Reveal as='header' className='consortium-section-header'>
          <p className='consortium-page-eyebrow'>{copy.eyebrow}</p>
          <h2 id='advisory-board-title'>{copy.title}</h2>
        </Reveal>

        <Reveal>
          <UnderConstructionNotice title={copy.noticeTitle} text={copy.noticeText} />
        </Reveal>
      </div>
    </section>
  );
}

export default AdvisoryBoard;
