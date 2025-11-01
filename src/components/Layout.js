import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // 1. Import useLocation
import Sidebar from './Sidebar';
import MusicPlayer from './MusicPlayer';

// This component renders the main structure: Sidebar, Page Content (Outlet), and Music Player
function Layout() {
  // State for managing the sidebar (expanded/collapsed)
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  
  // State for managing the mobile sidebar (shown/hidden)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // 2. Get the current location object
  const location = useLocation();

  // Function to toggle the desktop sidebar
  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  // Function to toggle the mobile sidebar
  // We pass this down to the <Outlet /> so the header on the Discover page can use it
  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <header>
      {/* --- Sidebar --- */}
      {/* isSidebarHidden controls the *desktop* collapse
        isMobileSidebarOpen controls the *mobile* overlay
      */}
      <Sidebar 
        isSidebarHidden={isSidebarHidden} 
        toggleSidebar={toggleSidebar}
        isMobileSidebarOpen={isMobileSidebarOpen} 
      />
      
      {/* --- Main Content Area --- */}
      {/* This is the main scrollable content area.
        The 'Outlet' is replaced by the current page (e.g., HomePage, MusicPage).
        We pass the 'toggleMobileSidebar' function as a prop to the child pages.
      */}
      <div className={`hero_container ${isSidebarHidden ? 'sidebar_hide_main' : ''}`}>
        <Outlet context={{ toggleSidebar: toggleMobileSidebar }} />
      </div>

      {/* --- 3. THIS IS THE FIX ---
        We check the current 'location.pathname'.
        If it's '/home', we render 'null' (nothing).
        For all other pages, we render the <MusicPlayer />.
      */}
      {location.pathname === '/' ? null : <MusicPlayer />}
      
    </header>
  );
}

export default Layout;