import PageHero from '../components/PageHero';
import LatestNews from '../components/LatestNews';
import Reveal from '../components/Reveal';
import UnderConstructionNotice from '../components/UnderConstructionNotice';

import { eventItems } from '../data/news';

import '../styles/news-page.scss';

function News({ page }) {
  const event = eventItems[0];

  return (
    <>
      <PageHero
        eyebrow='News & Events'
        title='Follow FOSMARIN as the project develops.'
        intro='Project updates, events, press releases and media from FOSMARIN — documenting progress from project launch through development, validation and demonstration.'
      />

      {page.sections.map((section) => {
        switch (section.id) {
          case 'latest-news':
            return <LatestNews id={section.id} key={section.id} showLink={false} />;

          case 'events':
            return (
              <section
                className='news-section news-events'
                id={section.id}
                key={section.id}
                aria-labelledby={`${section.id}-title`}
              >
                <div className='news-inner'>
                  <Reveal as='header' className='news-section-header'>
                    <p className='news-eyebrow'>Events</p>

                    <h2 id={`${section.id}-title`}>Meet FOSMARIN at project events.</h2>

                    <p className='news-section-intro'>
                      Follow project launches, conferences and public events as FOSMARIN moves from development to
                      validation and demonstration.
                    </p>
                  </Reveal>

                  {event && (
                    <Reveal className='news-event-card'>
                      <div className='news-event-meta'>
                        <span className='news-event-status'>{event.status}</span>

                        <span className='news-event-type'>{event.type}</span>

                        <time dateTime={event.date}>{event.dateLabel}</time>
                      </div>

                      <div className='news-event-content'>
                        <h3>{event.title}</h3>

                        <p>{event.text}</p>

                        <span className='news-event-location'>{event.location}</span>
                      </div>
                    </Reveal>
                  )}
                </div>
              </section>
            );

          case 'press-releases':
          case 'media-gallery':
          case 'webinars':
            return (
              <section
                className='news-section'
                id={section.id}
                key={section.id}
                aria-labelledby={`${section.id}-title`}
              >
                <div className='news-inner'>
                  <Reveal as='header' className='news-section-header'>
                    <p className='news-eyebrow'>{section.title}</p>

                    <h2 id={`${section.id}-title`}>{section.title}</h2>
                  </Reveal>

                  <Reveal>
                    <UnderConstructionNotice
                      title={`${section.title} content is under construction`}
                      text='Content will be added when project material is available and approved for publication.'
                    />
                  </Reveal>
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </>
  );
}

export default News;
