import Reveal from './Reveal';
import '../styles/page-hero.scss';

function PageHero({ eyebrow, title, intro }) {
  return (
    <header className='page-hero'>
      <div className='page-hero-inner'>
        <Reveal className='page-hero-content'>
          <p className='page-hero-eyebrow'>{eyebrow}</p>

          <h1>{title}</h1>

          {intro && (
            <p className='page-hero-intro'>
              {intro}
            </p>
          )}
        </Reveal>
      </div>
    </header>
  );
}

export default PageHero;