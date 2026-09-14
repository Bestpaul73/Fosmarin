import Reveal from './Reveal';
import UnderConstructionNotice from './UnderConstructionNotice';

function ContactSocialSection({ id }) {
  return (
    <section className='contact-section contact-social-section' id={id} aria-labelledby='social-media-title'>
      <div className='contact-inner'>
        <Reveal as='header' className='contact-section-header'>
          <p className='contact-eyebrow'>Social media links</p>

          <h2 id='social-media-title'>Follow FOSMARIN online.</h2>

          <p className='contact-section-intro'>
            Official project social media channels will be added once the client confirms the relevant accounts and
            URLs.
          </p>
        </Reveal>

        <Reveal>
          <UnderConstructionNotice
            title='Social media links are under construction'
            text='Official LinkedIn, X and YouTube links will be added once the project accounts are confirmed by the client.'
          />
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSocialSection;
