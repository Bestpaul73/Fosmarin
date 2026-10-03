import underConstructionImage from '../assets/img_maintenance.png';

import { useLanguage } from '../i18n/LanguageContext';

import '../styles/under-construction-notice.scss';

function UnderConstructionNotice() {
  const { translations } = useLanguage();
  const copy = translations.common.underConstruction;

  return (
    <div className='under-construction-notice'>
      <div className='under-construction-notice-image'>
        <img src={underConstructionImage} alt='' aria-hidden='true' loading='lazy' />
      </div>

      <div className='under-construction-notice-content'>
        <h3>{copy.defaultTitle}</h3>
        <p>{copy.defaultText}</p>
      </div>
    </div>
  );
}

export default UnderConstructionNotice;
