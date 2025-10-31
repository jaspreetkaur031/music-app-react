import React, { useEffect } from 'react'; // 1. Import useEffect
import { Link } from 'react-router-dom';
// import './home.css'; // This comment is correct, we are re-using home.css

function ArtistsPage() {

  // 2. Add this useEffect hook to load the stylesheet
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "/home.css"; // This page also uses home.css
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // 3. Cleanup function to remove the stylesheet on unmount
    return () => {
      document.head.removeChild(link);
    };
  }, []); // The empty array ensures this runs only once

  return (
    <main className="container main-content">
      <section className="section animate-fadeInUp" style={{ paddingTop: '2rem' }}>
        <div className="section-header">
          <h2>All Artists</h2>
          <Link to="/">Discover</Link>
        </div>
        
        {/* Artist Grid */}
        <div className="artist-grid">
          
          {/* Card 1 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-200ms">
            <img src="/Images/artist-1.jpg" alt="Artist 1" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>Synth Riders</h4>
            <p>Artist</p>
          </div>
          
          {/* Card 2 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-300ms">
            <img src="/Images/artist-2.jpg" alt="Artist 2" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>Nova Wave</h4>
            <p>Artist</p>
          </div>
          
          {/* Card 3 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-400ms">
            <img src="/Images/artist-3.jpg" alt="Artist 3" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>The Virtuals</h4>
            <p>Artist</p>
          </div>
          
          {/* Card 4 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-500ms">
            <img src="/Images/artist-4.jpg" alt="Artist 4" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>The Weeknd</h4>
            <p>Artist</p>
          </div>
          
          {/* Card 5 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-600ms">
            <img src="/Images/artist-5.jpg" alt="Artist 5" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>Cyber Dreamers</h4>
            <p>Artist</p>
          </div>
          
          {/* Card 6 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-700ms">
            <img src="/Images/artist-6.jpg" alt="Artist 6" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>Retro Future</h4>
            <p>Artist</p>
          </div>
          
          {/* Card 7 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-200ms">
            <img src="/Images/artist-7.jpg" alt="Artist 7" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>Lana Del Rey</h4>
            <p>Artist</p>
          </div>

          {/* Card 8 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-300ms">
            <img src="/Images/artist-8.jpg" alt="Artist 8" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>Dua Lipa</h4>
            <p>Artist</p>
          </div>

          {/* Card 9 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-400ms">
            <img src="/Images/artist-9.jpg" alt="Artist 9" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>Tame Impala</h4>
            <p>Artist</p>
          </div>

          {/* Card 10 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-500ms">
            <img src="/Images/artist-10.jpg" alt="Artist 10" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>Glass Animals</h4>
            <p>Artist</p>
          </div>

          {/* Card 11 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-600ms">
            <img src="/Images/artist-11.jpg" alt="Artist 11" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>CHVRCHES</h4>
            <p>Artist</p>
          </div>

          {/* Card 12 */}
          <div className="artist-card tilt-card glass-card glowing-border animate-fadeInUp delay-700ms">
            <img src="/Images/artist-12.jpg" alt="Artist 12" onError={(e) => e.target.src='https://placehold.co/128x128/374151/e5e7eb?text=Err'} />
            <h4>M83</h4>
            <p>Artist</p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default ArtistsPage;