import React, { useContext, useState, useEffect, useRef, useCallback } from 'react';
import { MusicContext } from '../context/MusicContext';

// Helper function to format time (e.s., 125 -> "2:05")
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

function MusicPlayer() {
  const {
    songs,
    currentSongIndex,
    isPlaying,
    audioRef,
    playSong,
    togglePlayPause,
    nextSong,
    prevSong,
    isMuted,
    toggleMute,
    seek,
    playMode,
    changePlayMode,
    // --- 1. GET TIME AND DURATION FROM CONTEXT ---
    currentTime,
    duration
  } = useContext(MusicContext);

  // --- 2. DELETE LOCAL TIME STATE ---
  // const [currentTime, setCurrentTime] = useState(0); // <-- DELETED
  // const [duration, setDuration] = useState(0);     // <-- DELETED
  
  // This is correct (UI state, local to this component)
  const [isDragging, setIsDragging] = useState(false);
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const [isPlayerHidden, setIsPlayerHidden] = useState(false);

  const progressBarRef = useRef(null);
  const currentSong = songs[currentSongIndex];

  // --- 3. DELETE THE BUGGY useEffect ---
  // The useEffect that listened for 'timeupdate' and 'loadedmetadata'
  // is GONE. The MusicContext now handles this.

  // --- 4. SEEK HANDLERS ---
  const handleSeek = useCallback((clientX) => {
    // This function now just takes the X coordinate
    if (!progressBarRef.current || isNaN(duration) || duration <= 0) return;
    
    const { left, width } = progressBarRef.current.getBoundingClientRect();
    const clickX = clientX - left;
    const seekPercentage = Math.max(0, Math.min(1, clickX / width));
    const seekTime = seekPercentage * duration;

    seek(seekTime);
  }, [progressBarRef, duration, seek]);


  const handleMouseDown = useCallback((e) => {
    setIsDragging(true);
    handleSeek(e.clientX); // Use clientX
  }, [handleSeek]);

  const handleTouchStart = useCallback((e) => {
    setIsDragging(true);
    handleSeek(e.changedTouches[0].clientX); // Use clientX
  }, [handleSeek]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      handleSeek(e.clientX); // Use clientX
    }
  }, [isDragging, handleSeek]);

  const handleTouchMove = useCallback((e) => {
    if (isDragging) {
      e.preventDefault();
      handleSeek(e.changedTouches[0].clientX); // Use clientX
    }
  }, [isDragging, handleSeek]);

  // Effect to add global listeners for drag-end
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);
  
  // This will now be correct!
  const progressPercent = (currentTime / duration) * 100 || 0;

  const togglePlayerHidden = () => {
    setIsPlayerHidden(!isPlayerHidden);
  };

  return (
    <div className={`bottom_container ${isPlayerHidden ? 'show_bottom_box' : ''}`}>
      <span className="bottom_container_btn" onClick={togglePlayerHidden}>
        <i className={`ri-arrow-left-s-line ${isPlayerHidden ? 'icon_rotate' : ''}`}></i>
      </span>
      
      <div className="music_box">
        <div className="music_box_img">
          <img src={currentSong.img} alt={currentSong.name} />
        </div>
        <div className="music_box_text">
          <h2>{currentSong.name}</h2>
          <p>{currentSong.artist}</p>
        </div>
        <i className="ri-arrow-right-s-line"></i>
      </div>
      <div className="music_play_wrapper">
        <div className="music_play_option">
          <button className="music_option_prev" onClick={prevSong}>
            <span className="icon play_option play_prev"></span>
          </button>
          <button 
            className={`play_button ${isPlaying ? 'playing' : ''}`}
            onClick={togglePlayPause}
          >
            <span className="icon play_pause"></span>
          </button>
          <button className="music_option_next" onClick={nextSong}>
            <span className="icon play_option play_next"></span>
          </button>
        </div>
        <div className="music_play_box">
          <div 
            className="music_play_col"
            ref={progressBarRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div 
              className="music_play_line" 
              style={{'--progress-percent': `${progressPercent}%`}}
            ></div>
          </div>
          <div className="music_timeline">
            {/* These will now be correct */}
            <p>{formatTime(currentTime)}</p>
            <p>{formatTime(duration)}</p>
          </div>
          <div className="music_val_option">
            <div className="music_volume" onClick={toggleMute}>
              <img 
                src={isMuted ? "/Images/volume-mute.png" : "/Images/volume.svg"}
                alt="Volume" 
              />
            </div>
            
            <button 
              className={`music_mode shuffle_mode ${playMode === 'shuffle' ? 'music_play_btn_active' : ''}`}
              onClick={changePlayMode}
            >
              <span className="shuffle_icon"></span>
            </button>
            
            <button 
              className={`music_mode repeat_mode ${playMode === 'repeat' ? 'music_play_btn_active' : ''}`}
              onClick={changePlayMode}
            >
              <span className="repeat_icon"></span>
            </button>

          </div>
        </div>
      </div>

      <div className="music_bottom_btn">
        <button onClick={() => setIsQueueOpen(true)}>
          <i className="ri-arrow-up-s-line"></i> Queue
        </button>
      </div>

      {/* --- QUEUE DROPDOWN (No changes needed) --- */}
      <div className={`queue_dropdown_box ${isQueueOpen ? 'show_queue_box' : ''}`}>
        <div className="sidebar_btn queue_btn" onClick={() => setIsQueueOpen(false)}>
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <h1>QUEUE</h1>
        
        <div className="queue_wrapper">
          {songs.map((song, index) => (
            <div 
              className={`queue_col ${index === currentSongIndex ? 'active_song_list' : ''}`}
              key={index}
              onClick={() => playSong(index)} 
            >
              <div className="queue_img">
                <img src={song.img} alt={song.name} />
              </div>
              <div className="queue_text">
                <h2>{song.name}</h2>
                <p>{song.artist}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="queue_btns">
          <button>Save PlayList</button>
          <a href="/#">Clear</a>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;