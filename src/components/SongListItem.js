import React, { useContext } from 'react';
import { MusicContext } from '../context/MusicContext'; // Import our global context

// We receive 'song' and 'index' as props from DiscoverPage
function SongListItem({ song, index }) {
  // Get the 'playSong' function from the global context
  const { playSong } = useContext(MusicContext);

  const handlePlay = () => {
    // When clicked, call playSong with this song's index
    playSong(index);
  };

  // This is the JSX from your original HTML for a single song
  return (
    <div className="song_col" onClick={handlePlay}>
      <div className="song_info">
        <img src="/Images/play_songlist.svg" alt="Play" className="play_img" />
        {/* Format the index to be two digits (e.g., 01, 02) */}
        <span>{String(index + 1).padStart(2, '0')}</span>
        <div className="song_box">
          <img src={song.img} alt={song.name} />
          <div className="song_det">
            <h2>{song.name}</h2>
            <p>{song.artist}</p>
          </div>
        </div>
      </div>
      <div className="song_icon_time">
        <i className="ri-heart-2-line"></i>
        {/* HERE IS THE FIX! 
          Changed from {/ ... /} to {/* ... *}
        */}
        <p>0.4:23</p> {/* TODO: Get real song duration */}
        <div className="song_option">
          <i className="ri-more-2-fill"></i>
          <div className="song_option_dropdown">
            <div className="song_option_box">
              <span className="icon fav_option_icon"></span>
              <h3>Favourites</h3>
            </div>
            <div className="song_option_box">
              <span className="icon download_option_icon"></span>
              <h3>Download Now</h3>
            </div>
            <div className="song_option_box">
              <span className="icon add_pl_option_icon"></span>
              <h3>Add to PlayList</h3>
            </div>
            <div className="song_option_box">
              <span className="icon share_option_icon"></span>
              <h3>Share</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongListItem;