import Reveal from './Reveal';

import fosmarinLogo from '../assets/fosmarin-logo-2.svg';

import '../styles/page-hero.scss';

function PageHero({ eyebrow, title, intro }) {
  return (
    <header className='page-hero'>
      <div className='page-hero-inner'>
        <Reveal className='page-hero-content'>
          <img className='page-hero-logo' src={fosmarinLogo} alt='' aria-hidden='true' />
          <p className='page-hero-eyebrow'>{eyebrow}</p>
          <h1>{title}</h1>
          {intro && <p className='page-hero-intro'>{intro}</p>}
        </Reveal>
      </div>
    </header>
  );
}

export default PageHero;
