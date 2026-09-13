import underConstructionImage from '../assets/under-construction.jpg';

import '../styles/under-construction-notice.scss';

function UnderConstructionNotice({
  title = 'Content under construction',
  text = 'Detailed content for this section is pending client input.',
}) {
  return (
    <div className='under-construction-notice'>
      <div className='under-construction-notice-image'>
        <img src={underConstructionImage} alt='' aria-hidden='true' loading='lazy' />
      </div>

      <div className='under-construction-notice-content'>
        <span className='under-construction-notice-label'>Client input required</span>

        <h3>{title}</h3>

        <p>{text}</p>
      </div>
    </div>
  );
}

export default UnderConstructionNotice;
