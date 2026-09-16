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
            return <LatestNews id={section.id} key={section.id} showLink={false} />;

          case 'events': {
            const event = news.events.item;

            return (
              <section
                className='news-section news-events'
                id={section.id}
                key={section.id}
                aria-labelledby={`${section.id}-title`}
              >
                <div className='news-inner'>
                  <Reveal as='header' className='news-section-header'>
                    <p className='news-eyebrow'>{news.events.eyebrow}</p>
                    <h2 id={`${section.id}-title`}>{news.events.title}</h2>
                    <p className='news-section-intro'>{news.events.intro}</p>
                  </Reveal>

                  <Reveal className='news-event-card'>
                    <div className='news-event-meta'>
                      <span className='news-event-status'>{event.status}</span>
                      <span className='news-event-type'>{event.type}</span>
                      <time dateTime='2026-10-01'>{event.dateLabel}</time>
                    </div>

                    <div className='news-event-content'>
                      <h3>{event.title}</h3>
                      <p>{event.text}</p>
                      <span className='news-event-location'>{event.location}</span>
                    </div>
                  </Reveal>
                </div>
              </section>
            );
          }

          case 'press-releases':
          case 'media-gallery':
          case 'webinars': {
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
                    <UnderConstructionNotice
                      title={`${title} ${translations.common.underConstruction.contentSuffix}`}
                      text={translations.common.underConstruction.projectMaterial}
                    />
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
