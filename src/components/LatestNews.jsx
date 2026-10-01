import { Link } from 'react-router-dom';

import Reveal from './Reveal';

import { newsItems } from '../data/news';

import { useLanguage } from '../i18n/LanguageContext';

import '../styles/latest-news.scss';

function LatestNews({ id, showLink = true, showAll = false }) {
  const { translations, getLocalizedPath } = useLanguage();

  const newsTranslations = translations.home.latestNews;

  const visibleNewsItems = showAll ? newsItems : newsItems.slice(0, 1);

  if (visibleNewsItems.length === 0) {
    return null;
  }

  return (
    <section className='latest-news' id={id} aria-labelledby='latest-news-title'>
      <div className='latest-news-inner'>
        <Reveal as='header' className='latest-news-header'>
          <p className='latest-news-eyebrow'>{newsTranslations.eyebrow}</p>

          <h2 id='latest-news-title'>{newsTranslations.title}</h2>
        </Reveal>

        <div className='latest-news-list'>
          {visibleNewsItems.map((newsItem) => {
            const translatedItem = newsTranslations.items[newsItem.id] ?? {};

            return (
              <Reveal
                className='latest-news-card'
                id={newsItem.id}
                key={newsItem.id}
              >
                <div className='latest-news-meta'>
                  <span className='latest-news-status'>
                    {translatedItem.status ?? newsItem.status}
                  </span>

                  {(translatedItem.category ?? newsItem.category) && (
                    <span className='latest-news-category'>
                      {translatedItem.category ?? newsItem.category}
                    </span>
                  )}

                  <time dateTime={newsItem.date}>
                    {translatedItem.dateLabel ?? newsItem.dateLabel}
                  </time>
                </div>

                <div className='latest-news-content'>
                  <h3>{translatedItem.title ?? newsItem.title}</h3>

                  {(translatedItem.excerpt ?? newsItem.excerpt) && (
                    <p>{translatedItem.excerpt ?? newsItem.excerpt}</p>
                  )}

                  <span className='latest-news-location'>
                    {translatedItem.location ?? newsItem.location}
                  </span>
                </div>

                {showLink && (
                  <Link
                    className='latest-news-link'
                    to={getLocalizedPath(newsItem.href)}
                  >
                    {newsTranslations.readUpdate}

                    <span aria-hidden='true'>→</span>
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LatestNews;
