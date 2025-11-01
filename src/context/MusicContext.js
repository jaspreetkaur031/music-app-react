import React, { createContext, useState, useRef, useEffect, useCallback } from 'react';
import { songs } from '../songs'; // Import the song list

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playMode, setPlayMode] = useState('normal'); // 'normal', 'repeat', 'shuffle'

  // --- ADD THIS STATE ---
  // We need the context to hold the time and duration
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // ------------------------

  const audioRef = useRef(new Audio(songs[currentSongIndex].src));
  
  const playSong = useCallback((index) => {
    if (index < 0 || index >= songs.length) return; 

    const song = songs[index];
    audioRef.current.src = song.src; 
    
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setCurrentSongIndex(index);
        setIsPlaying(true);
      }).catch(error => {
        console.error("Audio playback error:", error);
        setCurrentSongIndex(index);
        setIsPlaying(true); 
      });
    }
  }, []); 

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying); 
  };

  const nextSong = useCallback(() => {
    if (playMode === 'shuffle') {
      let newIndex = currentSongIndex;
      while (newIndex === currentSongIndex) {
        newIndex = Math.floor(Math.random() * songs.length);
      }
      playSong(newIndex);
    } else {
      const newIndex = (currentSongIndex + 1) % songs.length;
      playSong(newIndex);
    }
  }, [currentSongIndex, playMode, songs.length, playSong]);

  const prevSong = useCallback(() => { // --- ADDED useCallback ---
    if (playMode === 'shuffle') {
      let newIndex = currentSongIndex;
      while (newIndex === currentSongIndex) {
        newIndex = Math.floor(Math.random() * songs.length);
      }
      playSong(newIndex);
    } else {
      const newIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      playSong(newIndex);
    }
  }, [currentSongIndex, playMode, songs.length, playSong]); // --- ADDED DEPENDENCIES ---

  const toggleMute = () => {
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  const seek = (time) => {
    if (!isNaN(time) && isFinite(time)) {
      audioRef.current.currentTime = time;
    }
  };

  const changePlayMode = () => {
    if (playMode === 'normal') {
      setPlayMode('repeat');
    } else if (playMode === 'repeat') {
      setPlayMode('shuffle');
    } else {
      setPlayMode('normal');
    }
  };

  // --- ADD THIS EFFECT ---
  // This effect will listen to the audio element and update our state
  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    // Add event listeners
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Cleanup function to remove listeners
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []); // Empty array so this only runs once

  // --- Effect for handling song end ---
  useEffect(() => {
    const audio = audioRef.current;

    const handleSongEnd = () => {
      if (playMode === 'repeat') {
        audio.currentTime = 0;
        audio.play();
      } else {
        nextSong();
      }
    };

    audio.addEventListener('ended', handleSongEnd);

    return () => {
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, [playMode, nextSong]); 

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
    playMode,
    changePlayMode,
    // --- ADD THESE TWO LINES ---
    currentTime,
    duration
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};