import PageHero from '../components/PageHero';
import ContactFormSection from '../components/ContactFormSection';
import GetInTouchSection from '../components/GetInTouchSection';
import ContactSocialSection from '../components/ContactSocialSection';

import '../styles/contact-page.scss';

function Contact({ page }) {
  return (
    <>
      <PageHero
        eyebrow='Contact'
        title='Get in touch with the FOSMARIN project.'
        intro='Contact the FOSMARIN consortium for project information, collaboration opportunities, media enquiries or other questions related to the project.'
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
