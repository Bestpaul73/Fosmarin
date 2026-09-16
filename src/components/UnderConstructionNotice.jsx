import underConstructionImage from '../assets/under-construction.jpg';

import { useLanguage } from '../i18n/LanguageContext';

import '../styles/under-construction-notice.scss';

function UnderConstructionNotice({ title, text }) {
  const { translations } = useLanguage();
  const copy = translations.common.underConstruction;

  return (
    <div className='under-construction-notice'>
      <div className='under-construction-notice-image'>
        <img src={underConstructionImage} alt='' aria-hidden='true' loading='lazy' />
      </div>

      <div className='under-construction-notice-content'>
        <span className='under-construction-notice-label'>{copy.label}</span>
        <h3>{title || copy.defaultTitle}</h3>
        <p>{text || copy.defaultText}</p>
      </div>
    </div>
  );
}

export default UnderConstructionNotice;
