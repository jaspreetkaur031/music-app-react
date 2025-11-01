import React, { createContext, useState, useRef, useEffect, useCallback } from 'react';
import { songs } from '../songs'; // Import the song list

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // --- NEW: State for mute and play mode ---
  const [isMuted, setIsMuted] = useState(false);
  const [playMode, setPlayMode] = useState('normal'); // 'normal', 'repeat', 'shuffle'

  // Initialize audioRef with a new Audio object
  // We use useRef to hold the audio object so it persists through renders
  const audioRef = useRef(new Audio(songs[currentSongIndex].src));
  
  // Function to load and play a specific song by index
  const playSong = useCallback((index) => {
    if (index < 0 || index >= songs.length) return; // Guard clause

    const song = songs[index];
    audioRef.current.src = song.src; // Set the new song source
    
    // Attempt to play the audio
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Playback started successfully
        setCurrentSongIndex(index);
        setIsPlaying(true);
      }).catch(error => {
        // Autoplay was prevented (common in browsers)
        // We'll set the state, but playback might not start
        console.error("Audio playback error:", error);
        setCurrentSongIndex(index);
        setIsPlaying(true); // We set this to true, but user might need to click play again
      });
    }
  }, []); // Empty dependency array, this function is stable

  // Function to toggle between play and pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying); // Invert the state
  };

  // --- NEW: Next and Previous Song Logic ---
  const nextSong = useCallback(() => {
    if (playMode === 'shuffle') {
      // Play a random song, but not the same one twice
      let newIndex = currentSongIndex;
      while (newIndex === currentSongIndex) {
        newIndex = Math.floor(Math.random() * songs.length);
      }
      playSong(newIndex);
    } else {
      // Normal or Repeat mode
      const newIndex = (currentSongIndex + 1) % songs.length;
      playSong(newIndex);
    }
  }, [currentSongIndex, playMode, songs.length, playSong]);

  const prevSong = () => {
    if (playMode === 'shuffle') {
      // Play a random song
      let newIndex = currentSongIndex;
      while (newIndex === currentSongIndex) {
        newIndex = Math.floor(Math.random() * songs.length);
      }
      playSong(newIndex);
    } else {
      // Normal or Repeat mode
      const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      playSong(newIndex);
    }
  };

  // --- NEW: Seek and Mute Logic ---
  const toggleMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  const seek = (time) => {
    if (!isNaN(time) && isFinite(time)) {
      audioRef.current.currentTime = time;
    }
  };

  // --- NEW: Play Mode Logic ---
  const changePlayMode = () => {
    if (playMode === 'normal') {
      setPlayMode('repeat');
    } else if (playMode === 'repeat') {
      setPlayMode('shuffle');
    } else {
      setPlayMode('normal');
    }
  };

  // --- Effect for handling song end ---
  useEffect(() => {
    const audio = audioRef.current;

    const handleSongEnd = () => {
      if (playMode === 'repeat') {
        // Repeat the same song
        audio.currentTime = 0;
        audio.play();
      } else {
        // Go to the next song (handles 'shuffle' and 'normal')
        nextSong();
      }
    };

    audio.addEventListener('ended', handleSongEnd);

    return () => {
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, [playMode, nextSong]); // Re-run this effect if playMode or nextSong changes

  // The value provided to all consumer components
  const value = {
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
    // --- NEW: Expose playMode and its changer ---
    playMode,
    changePlayMode
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};