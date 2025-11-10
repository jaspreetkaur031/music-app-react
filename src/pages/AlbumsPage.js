import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom';

function AlbumsPage() {

  // 2. Add this useEffect hook to load the stylesheet
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "/home.css"; 
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []); 

  return (
    <main className="container main-content">
      <section className="section animate-fadeInUp" style={{ paddingTop: '2rem' }}>
        <div className="section-header">
          <h2>All Albums</h2>
          <Link to="/">Discover</Link>
        </div>
        
        {/* Album Grid */}
        <div className="album-grid">
          
          {/* Card 1 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-200ms">
            <img src="/Images/album-1.jpg" alt="Album 1 Cover" />
            <div className="album-info">
              <h4>Echoes in Time</h4>
              <p>The Virtuals</p>
            </div>
          </Link>
          
          {/* Card 2 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-300ms">
            <img src="/Images/album-2.jpg" alt="Album 2 Cover" />
            <div className="album-info">
              <h4>Neon Nights</h4>
              <p>Synth Riders</p>
            </div>
          </Link>
          
          {/* Card 3 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-400ms">
            <img src="/Images/album-3.jpg" alt="Album 3 Cover" />
            <div className="album-info">
              <h4>After Hours</h4>
              <p>The Weeknd</p>
            </div>
          </Link>
          
          {/* Card 4 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-500ms">
            <img src="/Images/album-4.jpg" alt="Album 4 Cover" />
            <div className="album-info">
              <h4>Galaxy</h4>
              <p>Nova Wave</p>
            </div>
          </Link>

          {/* Card 5 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-600ms">
            <img src="/Images/album-5.jpg" alt="Album 5 Cover" />
            <div className="album-info">
              <h4>Dreamstate</h4>
              <p>Cyber Dreamers</p>
            </div>
          </Link>

          {/* Card 6 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-700ms">
            <img src="/Images/album-6.jpg" alt="Album 6 Cover" />
            <div className="album-info">
              <h4>Currents</h4>
              <p>Tame Impala</p>
            </div>
          </Link>

          {/* Card 7 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-200ms">
            <img src="/Images/album-7.jpg" alt="Album 7 Cover" />
            <div className="album-info">
              <h4>Born to Die</h4>
              <p>Lana Del Rey</p>
            </div>
          </Link>

          {/* Card 8 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-300ms">
            <img src="/Images/album-8.jpg" alt="Album 8 Cover" />
            <div className="album-info">
              <h4>Future Nostalgia</h4>
              <p>Dua Lipa</p>
            </div>
          </Link>
          
          {/* ... Add more cards as needed ... */}

        </div>



         <div className="album-grid">
          {/* Card 1 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-200ms">
            <img src="/Images/album-5.jpg" alt="Album 1 Cover" />
            <div className="album-info">
              <h4>Echoes in Time</h4>
              <p>The Virtuals</p>
            </div>
          </Link>
          
          {/* Card 2 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-300ms">
            <img src="/Images/album-6.jpg" alt="Album 2 Cover" />
            <div className="album-info">
              <h4>Neon Nights</h4>
              <p>Synth Riders</p>
            </div>
          </Link>
          
          {/* Card 3 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-400ms">
            <img src="/Images/album-9.jpg" alt="Album 3 Cover" />
            <div className="album-info">
              <h4>After Hours</h4>
              <p>The Weeknd</p>
            </div>
          </Link>
          
          {/* Card 4 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-500ms">
            <img src="/Images/album-7.jpg" alt="Album 4 Cover" />
            <div className="album-info">
              <h4>Galaxy</h4>
              <p>Nova Wave</p>
            </div>
          </Link>

          {/* Card 5 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-600ms">
            <img src="/Images/album-12.jpg" alt="Album 5 Cover" />
            <div className="album-info">
              <h4>Dreamstate</h4>
              <p>Cyber Dreamers</p>
            </div>
          </Link>

          {/* Card 6 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-700ms">
            <img src="/Images/album-11.jpg" alt="Album 6 Cover" />
            <div className="album-info">
              <h4>Currents</h4>
              <p>Tame Impala</p>
            </div>
          </Link>

          {/* Card 7 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-200ms">
            <img src="/Images/album-10.jpg" alt="Album 7 Cover" />
            <div className="album-info">
              <h4>Born to Die</h4>
              <p>Lana Del Rey</p>
            </div>
          </Link>

          {/* Card 8 */}
          <Link to="/music" className="album-card tilt-card glass-card glowing-border animate-fadeInUp delay-300ms">
            <img src="/Images/album-9.jpg" alt="Album 8 Cover" />
            <div className="album-info">
              <h4>Future Nostalgia</h4>
              <p>Dua Lipa</p>
            </div>
          </Link>
          
          {/* ... Add more cards as needed ... */}

        </div>
      </section>
    </main>
  );
}

export default AlbumsPage;