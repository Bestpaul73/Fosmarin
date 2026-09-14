import { Link } from 'react-router-dom';

import Reveal from './Reveal';
import { newsItems } from '../data/news';

import '../styles/latest-news.scss';

function LatestNews({ id, showLink = true }) {
  const latestNews = newsItems[0];

  if (!latestNews) {
    return null;
  }

  return (
    <section className='latest-news' id={id} aria-labelledby='latest-news-title'>
      <div className='latest-news-inner'>
        <Reveal as='header' className='latest-news-header'>
          <p className='latest-news-eyebrow'>Latest news</p>

          <h2 id='latest-news-title'>Follow FOSMARIN as the project begins.</h2>
        </Reveal>

        <Reveal className='latest-news-card'>
          <div className='latest-news-meta'>
            <span className='latest-news-status'>{latestNews.status}</span>

            <span className='latest-news-category'>{latestNews.category}</span>

            <time dateTime={latestNews.date}>{latestNews.dateLabel}</time>
          </div>

          <div className='latest-news-content'>
            <h3>{latestNews.title}</h3>

            <p>{latestNews.excerpt}</p>

            <span className='latest-news-location'>{latestNews.location}</span>
          </div>

          {showLink && (
            <Link className='latest-news-link' to={latestNews.href}>
              Read update
              <span aria-hidden='true'>→</span>
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default LatestNews;
