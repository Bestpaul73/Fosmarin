import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { navigation } from './data/navigation';

import { LanguageProvider } from './i18n/LanguageContext';
import { languages } from './i18n/languages';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import About from './pages/About';
import Challenge from './pages/Challenge';
import UseCases from './pages/UseCases';
import Technology from './pages/Technology';
import Consortium from './pages/Consortium';
import News from './pages/News';
import Resources from './pages/Resources';
import ContentPage from './pages/ContentPage';
import Contact from './pages/Contact';

const aboutPage = navigation.find((page) => page.path === '/about');

const challengePage = navigation.find((page) => page.path === '/challenge');

const useCasesPage = navigation.find((page) => page.path === '/use-cases');

const technologyPage = navigation.find((page) => page.path === '/technology');

const consortiumPage = navigation.find((page) => page.path === '/consortium');

const newsPage = navigation.find((page) => page.path === '/news');

const resourcesPage = navigation.find((page) => page.path === '/resources');

const contactPage = navigation.find((page) => page.path === '/contact');

const customPagePaths = new Set([
  '/about',
  '/challenge',
  '/use-cases',
  '/technology',
  '/consortium',
  '/news',
  '/resources',
  '/contact',
]);

const genericPages = navigation.filter((page) => !customPagePaths.has(page.path));

const languagePrefixes = languages.map((language) => language.prefix);

function createPath(prefix, path) {
  if (path === '/') {
    return prefix || '/';
  }

  return `${prefix}${path}`;
}

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {languagePrefixes.map((prefix) => (
          <Route key={prefix || 'en'} path={createPath(prefix, '/')} element={<Home />} />
        ))}

        {languagePrefixes.map((prefix) => (
          <Route
            key={`${prefix || 'en'}-about`}
            path={createPath(prefix, '/about')}
            element={<About page={aboutPage} />}
          />
        ))}

        {languagePrefixes.map((prefix) => (
          <Route
            key={`${prefix || 'en'}-challenge`}
            path={createPath(prefix, '/challenge')}
            element={<Challenge page={challengePage} />}
          />
        ))}

        {languagePrefixes.map((prefix) => (
          <Route
            key={`${prefix || 'en'}-use-cases`}
            path={createPath(prefix, '/use-cases')}
            element={<UseCases page={useCasesPage} />}
          />
        ))}

        {languagePrefixes.map((prefix) => (
          <Route
            key={`${prefix || 'en'}-technology`}
            path={createPath(prefix, '/technology')}
            element={<Technology page={technologyPage} />}
          />
        ))}

        {languagePrefixes.map((prefix) => (
          <Route
            key={`${prefix || 'en'}-consortium`}
            path={createPath(prefix, '/consortium')}
            element={<Consortium page={consortiumPage} />}
          />
        ))}

        {languagePrefixes.map((prefix) => (
          <Route key={`${prefix || 'en'}-news`} path={createPath(prefix, '/news')} element={<News page={newsPage} />} />
        ))}

        {languagePrefixes.map((prefix) => (
          <Route
            key={`${prefix || 'en'}-resources`}
            path={createPath(prefix, '/resources')}
            element={<Resources page={resourcesPage} />}
          />
        ))}

        {languagePrefixes.map((prefix) => (
          <Route
            key={`${prefix || 'en'}-contact`}
            path={createPath(prefix, '/contact')}
            element={<Contact page={contactPage} />}
          />
        ))}

        {genericPages.flatMap((page) =>
          languagePrefixes.map((prefix) => (
            <Route
              key={`${prefix || 'en'}-${page.path}`}
              path={createPath(prefix, page.path)}
              element={<ContentPage page={page} />}
            />
          )),
        )}
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
