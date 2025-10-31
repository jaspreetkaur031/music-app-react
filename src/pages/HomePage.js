import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './home.css'; // This is correct, we are loading it dynamically

function HomePage() {

  // --- HOOK 1: Load and unload the CSS file ---
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "/home.css"; // Path from the public folder
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Cleanup function to remove the stylesheet when component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []); // Empty array means this runs only on mount and unmount

  // --- HOOK 2: 3D Rotation Logic ---
  useEffect(() => {
    // 3D Rotation Logic from your Home.html
    const rotator = document.getElementById('circle-rotator');
    if (!rotator) return; // Exit if rotator not found

    const cards = rotator.querySelectorAll('.nft-card-3d'); 
    const numCards = cards.length;
    if (numCards === 0) return;

    const angleIncrement = 360 / numCards;
    const radius = 250; 
    const zDistance = radius / Math.tan(Math.PI / numCards); 

    cards.forEach((card, index) => {
      const angle = angleIncrement * index;
      
      // We must add 'translate(-50%, -50%)' here to keep the images centered.
      card.style.transform = `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${zDistance}px)`;
      
      card.style.animationDelay = `${index * 0.5}s`;
    });
    
  }, []); // The empty array [] means this runs once on mount

  return (
    // Note: The <header> and <footer> are in Layout.js,
    // so we only copy the <main> content.
    <main className="container main-content">

      {/* Section 1: NEW NFT Hero Section - Now with 3D Rotation! */}
      <section className="section nft-hero-section animate-fadeInUp delay-200ms" style={{ marginBottom: 0 }}>
        <h1 className="nft-hero-title">UNIQUE COLLECTION OF MUSIC</h1>
        <p className="nft-hero-subtitle">The largest collection of nmusic among all providers</p>
        
        {/*
          --- GAP FIX 1 ---
          Increased 'marginTop' to '8rem' (or '128px') to add more space
          between the title and the rotating images.
        */}
        <div id="circle-container" className="nft-hero-cards" style={{ marginTop: '8rem', marginBottom:'10rem' }} >
          <div id="circle-rotator">
            
            <div className="nft-card-3d glass-card glowing-border" >
              <img src="/Images/musicpur4.jpg" 
                alt="NFT Art 1"
                onError={(e) => e.target.src='https://placehold.co/400x500/0ea5e9/white?text=Error'} />
            </div>
            
            <div className="nft-card-3d glass-card glowing-border">
              <img src="/Images/conimg4.jpg" 
                alt="NFT Art 2"
                onError={(e) => e.target.src='https://placehold.co/400x500/db2777/white?text=Error'} />
            </div>
            
            <div className="nft-card-3d glass-card glowing-border">
              <img src="/Images/musicpur3.jpg" 
                alt="Central NFT Art"
                onError={(e) => e.target.src='https://placehold.co/400x500/c026d3/white?text=Error'} />
            </div>
            
            <div className="nft-card-3d glass-card glowing-border">
              <img src="/Images/conimg5.jpg" 
                alt="NFT Art 3"
                onError={(e) => e.target.src='https://placehold.co/400x500/e11d48/white?text=Error'} />
            </div>
            
            <div className="nft-card-3d glass-card glowing-border">
              <img src="/Images/musicpur1.jpg" 
                alt="NFT Art 4"
                onError={(e) => e.target.src='https://placehold.co/400x500/16a34a/white?text=Error'} />
            </div>
          </div>
        </div>
      </section>

      {/*
        --- GAP FIX 2 ---
        REMOVED the 'style={{marginTop: '20rem'}}' from this Link.
        This lets the 'home.css' file (which has 'margin-top: -4rem') 
        pull the card up and overlap the images, closing the large gap.
      */}
      <Link to="/" className="full-screen-card">
        <div className="overlay"></div>
        <div className="card-content">
          <h1>
            EXPLORE THE NEXT PAGE
          </h1>
          <p>
            (Click to listen the music)
          </p>
        </div>
        <div className="background-image-layer" style={{backgroundImage: 'url(/Images/conimg2.jpg)'}}></div>
      </Link>

      <section className="section animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
        <div className="section-header">
          <h2>New Albums</h2>
          <Link to="/">See All</Link>
        </div>

        <div className="album-grid">
          <Link to="/albums" className="album-card tilt-card glass-card glowing-border">
            <img src="/Images/musicAlbumCover.jpg" alt="Album 1 Cover" />
            <div className="album-info">
              <h4>ALBUMS</h4>
              <p>The Virtuals</p>
            </div>
          </Link>
          
          <Link to="/artists" className="album-card tilt-card glass-card glowing-border">
            <img src="/Images/artistscover.jpg" alt="Album 2 Cover" />
            <div className="album-info">
              <h4>ARTISTS</h4>
              <p>Synth Riders</p>
            </div>
          </Link>
          
          <Link to="/music" className="album-card tilt-card glass-card glowing-border">
            <img src="/Images/musiccover.jpg" alt="Album 3 Cover" />
            <div className="album-info ">
              <h4>MUSIC</h4>
              <p>The Weeknd</p>
            </div>
          </Link>
         
          <Link to="/purchased" className="album-card tilt-card glass-card glowing-border">
            <img src="/Images/premiumcover.jpg" alt="Album 4 Cover" />
            <div className="album-info">
              <h4>Premium</h4>
              <p>Nova Wave</p>
            </div>
          </Link>
          
        </div>
      </section>
      
    </main>
  );
}

export default HomePage;