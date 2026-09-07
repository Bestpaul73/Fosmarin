import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { navigation } from './data/navigation'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ContentPage from './pages/ContentPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          {navigation.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={<ContentPage page={page} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App