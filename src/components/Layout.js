import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import MusicPlayer from './MusicPlayer';

function Layout() {
  // 1. State now lives in the parent Layout component
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);

  // 2. The toggle function also lives here
  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };

  return (
    <>
      <div className="loader">
        <img src="/Images/loader.gif" alt="" />
      </div>

      <header>
        {/* 3. Pass the state and function down as props */}
        <Sidebar 
          isSidebarHidden={isSidebarHidden} 
          toggleSidebar={toggleSidebar} 
        />

        <div className="hero_container">
          {/* 4. Pass the toggle function to all pages via the Outlet's context */}
          <Outlet context={{ toggleSidebar }} />
        </div>

        <MusicPlayer />
      </header>
    </>
  );
}

export default Layout;
