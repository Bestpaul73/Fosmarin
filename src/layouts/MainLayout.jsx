import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToHash from '../components/ScrollToHash';
import '../styles/main-layout.scss';

function MainLayout() {
  return (
    <div className='site-layout'>
      <Header />

      <ScrollToHash />

      <main className='site-main'>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
