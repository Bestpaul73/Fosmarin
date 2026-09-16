import PageHero from '../components/PageHero';
import ContactFormSection from '../components/ContactFormSection';
import GetInTouchSection from '../components/GetInTouchSection';
import ContactSocialSection from '../components/ContactSocialSection';

import { useLanguage } from '../i18n/LanguageContext';

import '../styles/contact-page.scss';

function Contact({ page }) {
  const { translations } = useLanguage();
  const contact = translations.contact;

  return (
    <>
      <PageHero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        intro={contact.hero.intro}
      />

      {page.sections.map((section) => {
        switch (section.id) {
          case 'contact-form':
            return <ContactFormSection id={section.id} key={section.id} />;
          case 'get-in-touch':
            return <GetInTouchSection id={section.id} key={section.id} />;
          case 'social-media-links':
            return <ContactSocialSection id={section.id} key={section.id} />;
          default:
            return null;
        }
      })}
    </>
  );
}

export default Contact;
