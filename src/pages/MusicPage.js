import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// import './music.css'; // This is commented out, which is correct
import { MusicContext } from '../context/MusicContext';

function MusicPage() {
  const { playSong } = useContext(MusicContext);

  // --- HOOK 1: Load and unload the CSS file ---
  // (This was the missing part)
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "/music.css"; // Path from the public folder
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cleanup function to remove the stylesheet
    return () => {
      document.head.removeChild(link);
    };
  }, []); // Empty array means this runs only on mount and unmount
  // ---------------------------------

  // --- HOOK 2: Slider Logic ---
  // (This is your code, it is correct)
  useEffect(() => {
    const container = document.querySelector('.slider-container');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.querySelector('.slider-nav.prev');
    const nextBtn = document.querySelector('.slider-nav.next');
    
    if (!container || dots.length === 0 || !prevBtn || !nextBtn) {
      return; // Exit if elements aren't found
    }

    const numSlides = dots.length;
    let currentSlide = 0;
    let autoPlayInterval;

    function goToSlide(slideIndex) {
        container.style.transform = `translateX(-${slideIndex * (100 / numSlides)}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[slideIndex].classList.add('active');
        currentSlide = slideIndex;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % numSlides;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + numSlides) % numSlides;
        goToSlide(prevIndex);
    }

    function startAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 5000); // 5 seconds
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    // --- Event Listeners ---
    const dotListeners = [];
    dots.forEach((dot, index) => {
      const listener = () => {
        goToSlide(index);
        resetAutoPlay();
      };
      dot.addEventListener('click', listener);
      dotListeners.push({ dot, listener });
    });

    const nextListener = () => {
      nextSlide();
      resetAutoPlay();
    };
    prevBtn.addEventListener('click', nextListener); // Fixed: Was nextBtn

    const prevListener = () => {
      prevSlide();
      resetAutoPlay();
    };
    nextBtn.addEventListener('click', prevListener); // Fixed: Was prevBtn

    const viewport = document.querySelector('.hero-slider-viewport');
    if (viewport) {
      viewport.addEventListener('mouseenter', stopAutoPlay);
      viewport.addEventListener('mouseleave', startAutoPlay);
    }

    goToSlide(0);
    startAutoPlay();

    // Cleanup function to remove all listeners
    return () => {
      clearInterval(autoPlayInterval);
      dotListeners.forEach(({ dot, listener }) => {
        dot.removeEventListener('click', listener);
      });
      prevBtn.removeEventListener('click', nextListener);
      nextBtn.removeEventListener('click', prevListener);
      if (viewport) {
        viewport.removeEventListener('mouseenter', stopAutoPlay);
        viewport.removeEventListener('mouseleave', startAutoPlay);
      }
    };
  }, []); // Empty array ensures this runs only once

  return (
    <main className="container main-content" style={{marginTop:'3rem'}}>
      {/* Section 1: Hero (NEW SLIDER LAYOUT) */}
      <section className="hero-section animate-fadeInUp">
        <div className="hero-slider-viewport glass-card glowing-border">
          <div className="slider-container">
            {/* Slide 1 */}
            <div className="slider-slide">
              <div className="slide-content">
                <span className="tagline tagline-1">Featured Album</span>
                <h1>Echoes in Time</h1>
                <p>The new hit single by The Virtuals, streaming everywhere now.</p>
                <button onClick={() => playSong(0)} className="slide-button slide-button-1">Play Now</button>
              </div>
              <div className="slide-image-container">
                <img src="/Images/album-1.jpg" 
                     alt="Slide 1"
                     onError={(e) => e.target.src='https://placehold.co/800x400/4f46e5/white?text=Error'} />
                <div className="gradient-overlay"></div>
                <div className="glow-overlay glow-1"></div>
              </div>
            </div>
            
            {/* Slide 2 */}
            <div className="slider-slide">
              <div className="slide-content">
                <span className="tagline tagline-2">New Playlist</span>
                <h1>Neon Nights</h1>
                <p>The best in synthwave and retrowave. Updated weekly.</p>
                <button onClick={() => playSong(1)} className="slide-button slide-button-2">Listen Now</button>
              </div>
              <div className="slide-image-container">
                <img src="/Images/album-11.jpg" 
                     alt="Slide 2"
                     onError={(e) => e.target.src='https://placehold.co/800x400/db2777/white?text=Error'} />
                <div className="gradient-overlay"></div>
                <div className="glow-overlay glow-2"></div>
              </div>
            </div>
            
            {/* Slide 3 */}
            <div className="slider-slide">
              <div className="slide-content">
                <span className="tagline tagline-3">Popular Artist</span>
                <h1>Ocean Drive</h1>
                <p>The definitive collection from Synth Riders is here.</p>
                <button onClick={() => playSong(2)} className="slide-button slide-button-3">See Artist</button>
              </div>
              <div className="slide-image-container">
                <img src="/Images/artist-1.jpg" 
                     alt="Slide 3"
                     onError={(e) => e.target.src='https://placehold.co/800x400/0891b2/white?text=Error'} />
                <div className="gradient-overlay"></div>
                <div className="glow-overlay glow-3"></div>
              </div>
            </div>
          </div>
          
          <div className="slider-indicators">
            <div className="slider-dot active" data-slide-to="0"></div>
            <div className="slider-dot" data-slide-to="1"></div>
            <div className="slider-dot" data-slide-to="2"></div>
          </div>

          <button className="slider-nav prev" aria-label="Previous slide">&lt;</button>
          <button className="slider-nav next" aria-label="Next slide">&gt;</button>
        </div>
      </section>

      {/* Section 2: Today's Hit (Song List) */}
      <section className="section">
        <div className="section-header animate-fadeInUp delay-200ms">
          <h2>Today's Hits</h2>
          <Link to="/discover">See All</Link>
        </div>

        <div className="song-list-container">
          <div className="song-list-header animate-fadeInUp delay-300ms">
            <span className="song-list-header-col-1">#</span>
            <span className="song-list-header-col-2">Title</span>
            <span className="song-list-header-col-3">Album</span>
            <span className="song-list-header-col-4">Time</span>
          </div>
          
          {/* Song Row 1 */}
          <div onClick={() => playSong(3)} className="song-row tilt-card glass-card animate-fadeInUp delay-400ms">
            <div className="song-row-col-1">
              <span className="track-number">1</span>
              <div className="play-icon">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.118v3.764a1 1 0 001.555.832l3.197-1.882a1 1 0 000-1.664l-3.197-1.882z" clipRule="evenodd"></path></svg>
              </div>
            </div>
            <div className="song-row-col-2">
              <img src="/Images/artist-1.jpg" alt="Song 1" onError={(e) => e.target.src='https://placehold.co/48x48/374151/e5e7eb?text=Err'} />
              <div>
                <div className="song-title">Blinding Lights</div>
                <div className="song-artist">The Weeknd</div>
              </div>
            </div>
            <div className="song-row-col-3">After Hours</div>
            <div className="song-row-col-4">3:20</div>
          </div>

          {/* Song Row 2 */}
          <div onClick={() => playSong(4)} className="song-row tilt-card glass-card animate-fadeInUp delay-500ms">
            <div className="song-row-col-1">
              <span className="track-number">2</span>
              <div className="play-icon">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8.118v3.764a1 1 0 001.555.832l3.197-1.882a1 1 0 000-1.664l-3.197-1.882z" clipRule="evenodd"></path></svg>
              </div>
            </div>
            <div className="song-row-col-2">
              <img src="/Images/artist-2.jpg" alt="Song 2" onError={(e) => e.target.src='https://placehold.co/48x48/374151/e5e7eb?text=Err'} />
              <div>
                <div className="song-title">Starlight</div>
                <div className="song-artist">Nova Wave</div>
              </div>
            </div>
            <div className="song-row-col-3">Galaxy</div>
            <div className="song-row-col-4">4:01</div>
          </div>
        </div>
      </section>
      
      {/* Section 3: Popular Artists */}
      {/* <section className="section">
        <div className="section-header animate-fadeInUp delay-300ms">
          <h2>Popular Artists</h2>
          <Link to="/artists">See All</Link>
        </div>
        <div className="artist-grid">
          {/* ... (Artist cards) ... */}
        {/* </div> */}
    {/* //   </section>  */}
    </main>
  );
}

export default MusicPage;