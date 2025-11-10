import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import MusicPlayer from './MusicPlayer';

function Layout() {
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };


  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <header>
     
      <Sidebar 
        isSidebarHidden={isSidebarHidden} 
        toggleSidebar={toggleSidebar}
        isMobileSidebarOpen={isMobileSidebarOpen} 
      />
      
      <div className={`hero_container ${isSidebarHidden ? 'sidebar_hide_main' : ''}`}>
        <Outlet context={{ toggleSidebar: toggleMobileSidebar }} />
      </div>

      {location.pathname === '/' ? null : <MusicPlayer />}
      
    </header>
  );
}

export default Layout;