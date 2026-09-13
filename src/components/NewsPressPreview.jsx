import { Link } from 'react-router-dom';

import Reveal from './Reveal';
import { newsItems } from '../data/news';

import '../styles/news-press-preview.scss';

function NewsPressPreview({ id }) {
  const latestNews = newsItems[0];

  return (
    <section className='news-press-preview' id={id} aria-labelledby='news-press-preview-title'>
      <div className='news-press-preview-inner'>
        <Reveal as='header' className='news-press-preview-header'>
          <p className='news-press-preview-eyebrow'>News & Press</p>

          <h2 id='news-press-preview-title'>Follow the project from launch to deployment.</h2>

          <p className='news-press-preview-intro'>
            News, project milestones, events and press materials will be published throughout the FOSMARIN project.
          </p>
        </Reveal>

        {latestNews && (
          <Reveal className='news-press-preview-featured'>
            <div className='news-press-preview-meta'>
              <span>{latestNews.category}</span>

              <time dateTime={latestNews.date}>{latestNews.dateLabel}</time>
            </div>

            <div className='news-press-preview-content'>
              <h3>{latestNews.title}</h3>

              <p>{latestNews.excerpt}</p>

              <div className='news-press-preview-location'>{latestNews.location}</div>
            </div>
          </Reveal>
        )}

        <Reveal className='news-press-preview-footer'>
          <p>Further news and press materials will be added as the project progresses.</p>

          <Link className='news-press-preview-link' to='/news'>
            Visit News & Events
            <span aria-hidden='true'>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default NewsPressPreview;
