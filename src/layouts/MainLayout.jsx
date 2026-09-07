import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';  
import ScrollToHash from '../components/ScrollToHash';

function MainLayout() {
  return (
    <>
      <Header />
      <ScrollToHash />
      <Outlet />
      <Footer />  
    </>
  );
}

export default MainLayout;
