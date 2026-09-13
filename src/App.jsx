import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { navigation } from './data/navigation';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import Challenge from './pages/Challenge';
import UseCases from './pages/UseCases';
import Technology from './pages/Technology';
import ContentPage from './pages/ContentPage';

const aboutPage = navigation.find((page) => page.path === '/about');

const challengePage = navigation.find((page) => page.path === '/challenge');

const useCasesPage = navigation.find((page) => page.path === '/use-cases');

const technologyPage = navigation.find((page) => page.path === '/technology');

const customPagePaths = new Set(['/about', '/challenge', '/use-cases', '/technology']);

const genericPages = navigation.filter((page) => !customPagePaths.has(page.path));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About page={aboutPage} />} />

          <Route path='/challenge' element={<Challenge page={challengePage} />} />

          <Route path='/use-cases' element={<UseCases page={useCasesPage} />} />

          <Route path='/technology' element={<Technology page={technologyPage} />} />

          {genericPages.map((page) => (
            <Route key={page.path} path={page.path} element={<ContentPage page={page} />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
