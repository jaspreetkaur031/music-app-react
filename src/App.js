import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MusicProvider } from './context/MusicContext';
import Layout from './components/Layout';

// Import all your pages
import DiscoverPage from './pages/DiscoverPage';
import HomePage from './pages/HomePage';
import ArtistsPage from './pages/ArtistsPage';
import AlbumsPage from './pages/AlbumsPage';
import MusicPage from './pages/MusicPage';
import ContactPage from './pages/ContactPage';
import PurchasedPage from './pages/PurchasedPage';

function App() {
  return (
    <MusicProvider>
      <BrowserRouter>
        <Routes>
          {/* All pages render inside the <Layout /> component */}
          <Route path="/" element={<Layout />}>
            
            {/* The main page (index.html) */}
            <Route index element={<DiscoverPage />} />
            
            {/* All your other pages */}
            <Route path="home" element={<HomePage />} />
            <Route path="artists" element={<ArtistsPage />} />
            <Route path="albums" element={<AlbumsPage />} />
            <Route path="music" element={<MusicPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="purchased" element={<PurchasedPage />} />
            
            {/* Add a simple 404 page */}
            <Route path="*" element={
              <div style={{ padding: '4rem', textAlign: 'center' }}>
                <h2>404: Page Not Found</h2>
                <Link to="/">Back to Discover</Link>
              </div>
            } />

          </Route>
        </Routes>
      </BrowserRouter>
    </MusicProvider>
  );
}

export default App;
