import PageHero from '../components/PageHero';
import LatestNews from '../components/LatestNews';
import Reveal from '../components/Reveal';
import UnderConstructionNotice from '../components/UnderConstructionNotice';

import { useLanguage } from '../i18n/LanguageContext';

import '../styles/news-page.scss';

function News({ page }) {
  const { translations } = useLanguage();
  const news = translations.news;
  const navSections = translations.navigation['/news'].sections;

  return (
    <>
      <PageHero
        eyebrow={news.hero.eyebrow}
        title={news.hero.title}
        intro={news.hero.intro}
      />

      {page.sections.map((section) => {
        switch (section.id) {
          case 'latest-news':
            return <LatestNews id={section.id} key={section.id} showLink={false} showAll />;

          case 'press-releases':
          case 'media-gallery':
          case 'workshops': {
            const title = navSections[section.id];

            return (
              <section
                className='news-section'
                id={section.id}
                key={section.id}
                aria-labelledby={`${section.id}-title`}
              >
                <div className='news-inner'>
                  <Reveal as='header' className='news-section-header'>
                    <p className='news-eyebrow'>{title}</p>
                    <h2 id={`${section.id}-title`}>{title}</h2>
                  </Reveal>

                  <Reveal>
                    <UnderConstructionNotice />
                  </Reveal>
                </div>
              </section>
            );
          }

          default:
            return null;
        }
      })}
    </>
  );
}

export default News;
