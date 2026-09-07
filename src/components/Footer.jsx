import { Link } from 'react-router-dom';
import { navigation } from '../data/navigation';
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
        <nav className='footer-column' aria-label='About Fosmarin footer navigation'>
          <h2 className='footer-heading'>About Fosmarin</h2>

          {aboutLinks.map((section) => (
            <Link key={section.id} to={`/about#${section.id}`}>
              {section.title}
            </Link>
          ))}
        </nav>

        <nav className='footer-column' aria-label='Quick links footer navigation'>
          <h2 className='footer-heading'>Quick Links</h2>

          {quickLinks.map((page) => (
            <Link key={page.path} to={page.path}>
              {page.title}
            </Link>
          ))}
        </nav>

        <nav className='footer-column' aria-label='Resources footer navigation'>
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
    </footer>
  );
}

export default Footer;
