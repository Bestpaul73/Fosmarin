import PageHero from '../components/PageHero';
import LatestNewsSection from '../components/LatestNewsSection';
import EventsSection from '../components/EventsSection';
import PendingNewsSection from '../components/PendingNewsSection';

import '../styles/news-page.scss';

function News({ page }) {
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
            return <LatestNewsSection id={section.id} key={section.id} />;

          case 'events':
            return <EventsSection id={section.id} key={section.id} />;

          case 'press-releases':
          case 'media-gallery':
          case 'webinars':
            return <PendingNewsSection id={section.id} key={section.id} title={section.title} />;

          default:
            return null;
        }
      })}
    </>
  );
}

export default News;
