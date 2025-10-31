import React, { useState, useContext, useEffect } from 'react'; // 1. Import useEffect
import { MusicContext } from '../context/MusicContext';
import SongListItem from '../components/SongListItem';

// This page receives the toggleSidebar function from the <Outlet /> in Layout.js
function DiscoverPage({ toggleSidebar }) {
  
  // 1 = Top Picks, 2 = Trending, 3 = New Release
  const [activeTab, setActiveTab] = useState(1);
  const { songs } = useContext(MusicContext);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  // --- 2. ADD THIS UseEffect HOOK ---
  useEffect(() => {
    // Find the main content container
    const heroContainer = document.querySelector('.hero_container');
    
    if (heroContainer) {
      // Add the background styles when this page loads
      heroContainer.style.backgroundImage = 'url(/Images/hero_bg.png)';
      heroContainer.style.backgroundRepeat = 'no-repeat';
      heroContainer.style.backgroundPosition = 'center right';
      heroContainer.style.backgroundSize = '58.5%';
    }

    // Cleanup function: This runs when you navigate away from this page
    return () => {
      if (heroContainer) {
        // Remove the background styles
        heroContainer.style.backgroundImage = '';
        heroContainer.style.backgroundRepeat = '';
        heroContainer.style.backgroundPosition = '';
        heroContainer.style.backgroundSize = '';
      }
    };
  }, []); // The empty array [] means this runs only on mount and unmount
  // ---------------------------------

  // --- NEW: Create different song lists for each tab ---
  
  // Tab 1: Today Top Picks (Original order, 0-13)
  const topPicksSongs = songs; 

  // Tab 2: Trending Songs (Reversed list)
  // We create a new reversed array so we don't change the original
  const trendingSongs = [...songs].reverse();

  // Tab 3: New Release (Rotated list, e.g., starts from song 5)
  // This takes songs 5-13 and adds 0-4 to the end
  const newReleaseSongs = [...songs.slice(5), ...songs.slice(0, 5)];


  return (
    <>
      <div className="hero_top">
        <div className="hero_top_col">
          <div className="search_box">
            <input
              type="text"
              name=""
              id=""
              placeholder="search for sing, Artists, playlists and more....."
            />
            <i className="ri-search-2-line"></i>
          </div>
          <span className="notification_icon"></span>
        </div>
        <div className="user_info">
          <div className="user_img">
            <img src="/Images/proflile.jpg" alt="" />
          </div>
          
          {/* --- User Dropdown Logic --- */}
          <div 
            className="user_login_wrapper"
            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
          >
            <h2>Hello, David <i className="ri-arrow-down-s-fill"></i></h2>
            <ul 
              className={`user_wrapper_dropdown ${isUserDropdownOpen ? 'show_user_dropdown' : ''}`}
            >
              <li>
                <a href="/#">
                  <span className="icon icon_profile"></span>
                  <p>Profile</p>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span className="icon icon_logout"></span>
                  <p>Logout</p>
                </a>
              </li>
            </ul>
          </div>

          {/* --- Mobile Sidebar Toggle --- */}
          <div className="bars" onClick={toggleSidebar}>
            <i className="ri-menu-2-fill"></i>
          </div>
        </div>
      </div>
      
      <div className="songs_container">
        <div className="songs_tabs">
          <h2 
            className={activeTab === 1 ? 'tab1_active_song_list' : ''}
            onClick={() => setActiveTab(1)}
          >
            Today Top Picks
          </h2>
          <h2 
            className={activeTab === 2 ? 'tab1_active_song_list' : ''}
            onClick={() => setActiveTab(2)}
          >
            Trending Songs
          </h2>
          <h2 
            className={activeTab === 3 ? 'tab1_active_song_list' : ''}
            onClick={() => setActiveTab(3)}
          >
            New Release
          </h2>
        </div>
        
        {/* --- Conditionally render song lists based on activeTab --- */}
        
        {/* songs_wrapper1 (Today Top Picks) */}
        {activeTab === 1 && (
          // We keep songs_wrapper1 here as it's the default
          <div className="songs_wrapper songs_wrapper1 show_songs">
            {/* Map over the topPicksSongs list */}
            {topPicksSongs.map((song, index) => (
              <SongListItem 
                key={index} 
                song={song} 
                index={index} // Here, the map index (0-13) is correct
              />
            ))}
          </div>
        )}

        {/* songs_wrapper2 (Trending Songs) */}
        {activeTab === 2 && (
          // FIXED: Removed 'songs_wrapper2' class to prevent 'display: none'
          <div className="songs_wrapper show_songs">
            {/* Map over the trendingSongs list */}
            {trendingSongs.map((song, mapIndex) => {
              // Find the song's *real* index from the original 'songs' array
              // This is crucial for the player to play the right song
              const originalIndex = songs.findIndex(s => s.src === song.src);
              return (
                <SongListItem 
                  key={mapIndex} 
                  song={song} 
                  index={originalIndex} // Pass the *real* index
                />
              );
            })}
          </div>
        )}

        {/* songs_wrapper3 (New Release) */}
        {activeTab === 3 && (
          // FIXED: Removed 'songs_wrapper3' class to prevent 'display: none'
          <div className="songs_wrapper show_songs">
            {/* Map over the newReleaseSongs list */}
            {newReleaseSongs.map((song, mapIndex) => {
              // Find the song's *real* index
              const originalIndex = songs.findIndex(s => s.src === song.src);
              return (
                <SongListItem 
                  key={mapIndex}
                  song={song} 
                  index={originalIndex} // Pass the *real* index
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default DiscoverPage;