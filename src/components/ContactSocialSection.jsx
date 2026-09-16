import Reveal from './Reveal';
import UnderConstructionNotice from './UnderConstructionNotice';
import { useLanguage } from '../i18n/LanguageContext';

function ContactSocialSection({ id }) {
  const { translations } = useLanguage();
  const copy = translations.contact.social;

  return (
    <section className='contact-section contact-social-section' id={id} aria-labelledby='social-media-title'>
      <div className='contact-inner'>
        <Reveal as='header' className='contact-section-header'>
          <p className='contact-eyebrow'>{copy.eyebrow}</p>
          <h2 id='social-media-title'>{copy.title}</h2>
          <p className='contact-section-intro'>{copy.intro}</p>
        </Reveal>

        <Reveal>
          <UnderConstructionNotice title={copy.noticeTitle} text={copy.noticeText} />
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSocialSection;
