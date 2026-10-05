import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Seo from '../components/Seo';
import AccessibilityTools from '../components/AccessibilityTools';
import ScrollToHash from '../components/ScrollToHash';
import ScrollToTop from '../components/ScrollToTop';

import '../styles/main-layout.scss';

function MainLayout() {
  return (
    <>
      <div className='site-layout'>
        <Seo />

        <Header />

        <ScrollToHash />

        <main className='site-main'>
          <Outlet />
        </main>

        <Footer />
      </div>

      <AccessibilityTools />

      <ScrollToTop />
    </>
  );
}

export default MainLayout;
