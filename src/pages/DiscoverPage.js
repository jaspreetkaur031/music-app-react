import React, { useState, useContext, useEffect } from 'react'; 
import { MusicContext } from '../context/MusicContext';
import SongListItem from '../components/SongListItem';

function DiscoverPage({ toggleSidebar }) {
  
  const [activeTab, setActiveTab] = useState(1);
  const { songs } = useContext(MusicContext);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  useEffect(() => {
    const heroContainer = document.querySelector('.hero_container');
    
    if (heroContainer) {
      heroContainer.style.backgroundImage = 'url(/Images/hero_bg.png)';
      heroContainer.style.backgroundRepeat = 'no-repeat';
      heroContainer.style.backgroundPosition = 'center right';
      heroContainer.style.backgroundSize = '58.5%';
    }

    return () => {
      if (heroContainer) {
        heroContainer.style.backgroundImage = '';
        heroContainer.style.backgroundRepeat = '';
        heroContainer.style.backgroundPosition = '';
        heroContainer.style.backgroundSize = '';
      }
    };
  }, []); 

  const topPicksSongs = songs; 

  const trendingSongs = [...songs].reverse();

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
            <img src="/Images/album-8.jpg" alt="" />
          </div>

          <div 
            className="user_login_wrapper"
            onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
          >
            <h2>Hello, Jaspreeet<i className="ri-arrow-down-s-fill"></i></h2>
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
        
     
        {/* songs_wrapper1 (Today Top Picks) */}
        {activeTab === 1 && (
          <div className="songs_wrapper songs_wrapper1 show_songs">
            {topPicksSongs.map((song, index) => (
              <SongListItem 
                key={index} 
                song={song} 
                index={index} 
              />
            ))}
          </div>
        )}

        {/* songs_wrapper2 (Trending Songs) */}
        {activeTab === 2 && (
          <div className="songs_wrapper show_songs">
            {trendingSongs.map((song, mapIndex) => {
    
              const originalIndex = songs.findIndex(s => s.src === song.src);
              return (
                <SongListItem 
                  key={mapIndex} 
                  song={song} 
                  index={originalIndex}
                />
              );
            })}
          </div>
        )}

        {/* songs_wrapper3 (New Release) */}
        {activeTab === 3 && (
          <div className="songs_wrapper show_songs">
            {newReleaseSongs.map((song, mapIndex) => {
              const originalIndex = songs.findIndex(s => s.src === song.src);
              return (
                <SongListItem 
                  key={mapIndex}
                  song={song} 
                  index={originalIndex} 
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