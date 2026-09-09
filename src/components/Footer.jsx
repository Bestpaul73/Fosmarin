import { Link } from 'react-router-dom';
import { navigation } from '../data/navigation';
import euFundedLogo from '../assets/eu-funded.png';
import '../styles/footer.scss';

function Footer() {
  const aboutPage = navigation.find((page) => page.path === '/about');
  const resourcesPage = navigation.find((page) => page.path === '/resources');

  // Footer использует те же разделы About Fosmarin, что и Header.
  const aboutLinks = aboutPage?.sections ?? [];

  // Quick Links — все основные страницы, кроме About Fosmarin.
  const quickLinks = navigation.filter((page) => page.path !== '/about');

  // Footer использует те же разделы Resources, что и Header.
  const resourceLinks = resourcesPage?.sections ?? [];

  return (
    <footer className='footer'>
      <div className='footer-inner'>
        <div className='footer-navigation'>
          <nav
            className='footer-column'
            aria-label='About Fosmarin footer navigation'
          >
            <h2 className='footer-heading'>About Fosmarin</h2>

            {aboutLinks.map((section) => (
              <Link key={section.id} to={`/about#${section.id}`}>
                {section.title}
              </Link>
            ))}
          </nav>

          <nav
            className='footer-column'
            aria-label='Quick links footer navigation'
          >
            <h2 className='footer-heading'>Quick Links</h2>

            {quickLinks.map((page) => (
              <Link key={page.path} to={page.path}>
                {page.title}
              </Link>
            ))}
          </nav>

          <nav
            className='footer-column'
            aria-label='Resources footer navigation'
          >
            <h2 className='footer-heading'>Resources</h2>

            {resourceLinks.map((section) => (
              <Link key={section.id} to={`/resources#${section.id}`}>
                {section.title}
              </Link>
            ))}
          </nav>

          <div className='footer-column'>
            <h2 className='footer-heading'>Follow Us</h2>

            <div className='footer-socials'>
              <span>LinkedIn</span>
              <span>X (Twitter)</span>
              <span>YouTube</span>
            </div>
          </div>

          <div className='footer-column'>
            <h2 className='footer-heading'>Contact</h2>

            <a href='mailto:info@fosmarin.eu'>info@fosmarin.eu</a>
            <Link to='/'>www.fosmarin.eu</Link>
          </div>
        </div>

        <div className='footer-funding'>
          <div className='footer-eu-logo'>
            <img
              src={euFundedLogo}
              alt='Funded by the European Union'
            />
          </div>

          <div className='footer-funding-text'>
            <p className='footer-grant'>
              The project is funded by the EU under 101309039 — FOSMARIN —
              HORIZON-CL3-2025-01 grant agreement.
            </p>

            <p>
              Views and opinions expressed are however those of the author(s)
              only and do not necessarily reflect those of the European Union
              or European Research Executive Agency. Neither the European
              Union nor the European Research Executive Agency can be held
              responsible for them.
            </p>
          </div>
        </div>

        <div className='footer-bottom'>
          <p>© 2026 FOSMARIN CONSORTIUM</p>
          <p>FOAS · PREDICTIVE ANALYTICS · SUBSEA RESILIENCE</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;