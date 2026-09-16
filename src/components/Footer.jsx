import { Link } from 'react-router-dom';

import { navigation } from '../data/navigation';

import { useLanguage } from '../i18n/LanguageContext';

import euFundedLogo from '../assets/eu-funded.png';

import '../styles/footer.scss';

function Footer() {
  const { translations, getLocalizedPath } = useLanguage();

  const aboutPage = navigation.find((page) => page.path === '/about');

  const resourcesPage = navigation.find((page) => page.path === '/resources');

  // Footer использует те же разделы
  // About Fosmarin, что и Header.
  const aboutLinks = aboutPage?.sections ?? [];

  // Quick Links — все основные страницы,
  // кроме About Fosmarin.
  const quickLinks = navigation.filter((page) => page.path !== '/about');

  // Footer использует те же разделы
  // Resources, что и Header.
  const resourceLinks = resourcesPage?.sections ?? [];

  const translatedAboutPage = translations.navigation['/about'];

  const translatedResourcesPage = translations.navigation['/resources'];

  return (
    <footer className='footer'>
      <div className='footer-inner'>
        <div className='footer-navigation'>
          <nav className='footer-column' aria-label={translations.footer.aboutNavigation}>
            <h2 className='footer-heading'>{translations.footer.about}</h2>

            {aboutLinks.map((section) => {
              const sectionTitle = translatedAboutPage?.sections?.[section.id] ?? section.title;

              return (
                <Link key={section.id} to={getLocalizedPath(`/about#${section.id}`)}>
                  {sectionTitle}
                </Link>
              );
            })}
          </nav>

          <nav className='footer-column' aria-label={translations.footer.quickLinksNavigation}>
            <h2 className='footer-heading'>{translations.footer.quickLinks}</h2>

            {quickLinks.map((page) => {
              const pageTitle = translations.navigation[page.path]?.title ?? page.title;

              return (
                <Link key={page.path} to={getLocalizedPath(page.path)}>
                  {pageTitle}
                </Link>
              );
            })}
          </nav>

          <nav className='footer-column' aria-label={translations.footer.resourcesNavigation}>
            <h2 className='footer-heading'>{translations.footer.resources}</h2>

            {resourceLinks.map((section) => {
              const sectionTitle = translatedResourcesPage?.sections?.[section.id] ?? section.title;

              return (
                <Link key={section.id} to={getLocalizedPath(`/resources#${section.id}`)}>
                  {sectionTitle}
                </Link>
              );
            })}
          </nav>

          <div className='footer-column'>
            <h2 className='footer-heading'>{translations.footer.followUs}</h2>

            <div className='footer-socials'>
              <span>LinkedIn</span>

              <span>X (Twitter)</span>

              <span>YouTube</span>
            </div>
          </div>

          <div className='footer-column'>
            <h2 className='footer-heading'>{translations.footer.contact}</h2>

            <a href='mailto:info@fosmarin.eu'>info@fosmarin.eu</a>

            <Link to={getLocalizedPath('/')}>www.fosmarin.eu</Link>
          </div>
        </div>

        <div className='footer-funding'>
          <div className='footer-eu-logo'>
            <img src={euFundedLogo} alt={translations.footer.euLogoAlt} />
          </div>

          <div className='footer-funding-text'>
            <p className='footer-grant'>{translations.footer.grant}</p>

            <p>{translations.footer.disclaimer}</p>
          </div>
        </div>

        <div className='footer-bottom'>
          <p>{translations.footer.copyright}</p>

          <p>{translations.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
