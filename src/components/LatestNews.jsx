import { Link } from 'react-router-dom';

import Reveal from './Reveal';

import { newsItems } from '../data/news';

import { useLanguage } from '../i18n/LanguageContext';

import '../styles/latest-news.scss';

function LatestNews({ id, showLink = true }) {
  const { translations, getLocalizedPath } = useLanguage();

  const latestNews = newsItems[0];

  if (!latestNews) {
    return null;
  }

  const newsTranslations = translations.home.latestNews;

  const translatedItem = newsTranslations.items[latestNews.id] ?? {};

  return (
    <section className='latest-news' id={id} aria-labelledby='latest-news-title'>
      <div className='latest-news-inner'>
        <Reveal as='header' className='latest-news-header'>
          <p className='latest-news-eyebrow'>{newsTranslations.eyebrow}</p>

          <h2 id='latest-news-title'>{newsTranslations.title}</h2>
        </Reveal>

        <Reveal className='latest-news-card'>
          <div className='latest-news-meta'>
            <span className='latest-news-status'>{translatedItem.status ?? latestNews.status}</span>

            <span className='latest-news-category'>{translatedItem.category ?? latestNews.category}</span>

            <time dateTime={latestNews.date}>{translatedItem.dateLabel ?? latestNews.dateLabel}</time>
          </div>

          <div className='latest-news-content'>
            <h3>{translatedItem.title ?? latestNews.title}</h3>

            <p>{translatedItem.excerpt ?? latestNews.excerpt}</p>

            <span className='latest-news-location'>{translatedItem.location ?? latestNews.location}</span>
          </div>

          {showLink && (
            <Link className='latest-news-link' to={getLocalizedPath(latestNews.href)}>
              {newsTranslations.readUpdate}

              <span aria-hidden='true'>→</span>
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default LatestNews;
