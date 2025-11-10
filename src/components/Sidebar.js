import React from 'react'; 
import { Link, NavLink } from 'react-router-dom';

// Accept the props from Layout.js
function Sidebar({ isSidebarHidden, toggleSidebar }) {

  // Use the props to conditionally apply classes
  return (
    <aside className={isSidebarHidden ? 'sidebar_hide' : ''}>
      <div className={`logo ${isSidebarHidden ? 'hide_element' : ''}`}>
        <Link to="/">
          <img src="/Images/logo.png" alt="" />
          <img src="/Images/mini_logo.png" alt="" className="small_screen_logo" />
        </Link>
      </div>
      <div className={`small_logo ${isSidebarHidden ? 'show-element' : ''}`}>
        <img src="/Images/mini_logo.png" alt="" />
      </div>
      <div className="music_menu">
        <h2 className={isSidebarHidden ? 'hide_element' : ''}>Browse music</h2>
        <ul>
          {/*  NavLink */}
          <li className={isSidebarHidden ? 'menu_gap' : ''}>
            <NavLink to="/discover" end className={({ isActive }) => isActive ? 'active_link' : ''}>
              <span className="icon icon-discover"></span>
              <p className={isSidebarHidden ? 'hide_element' : ''}>Discover</p>
            </NavLink>
          </li>
          <li className={isSidebarHidden ? 'menu_gap' : ''}>
            <NavLink to="/artists" className={({ isActive }) => isActive ? 'active_link' : ''}>
              <span className="icon icon-artists"></span>
              <p className={isSidebarHidden ? 'hide_element' : ''}>Artists</p>
            </NavLink>
          </li>
          <li className={isSidebarHidden ? 'menu_gap' : ''}>
            <NavLink to="/albums" className={({ isActive }) => isActive ? 'active_link' : ''}>
              <span className="icon icon-albums"></span>
              <p className={isSidebarHidden ? 'hide_element' : ''}>Albums</p>
            </NavLink>
          </li>
          <li className={isSidebarHidden ? 'menu_gap' : ''}>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active_link' : ''}>
              <span className="icon icon-Stations"></span>
              <p className={isSidebarHidden ? 'hide_element' : ''}>Home</p>
            </NavLink>
          </li>
          <li className={isSidebarHidden ? 'menu_gap' : ''}>
            <NavLink to="/music" className={({ isActive }) => isActive ? 'active_link' : ''}>
              <span className="icon icon-music"></span>
              <p className={isSidebarHidden ? 'hide_element' : ''}>Music</p>
            </NavLink>
          </li>
        </ul>

        <h2 className={isSidebarHidden ? 'hide_element' : ''}>Your Music</h2>
        <ul>
          <li className={isSidebarHidden ? 'menu_gap' : ''}>
            <NavLink to="/purchased" className={({ isActive }) => isActive ? 'active_link' : ''}>
              <span className="icon icon-purchased"></span>
              <p className={isSidebarHidden ? 'hide_element' : ''}>Purchased</p>
            </NavLink>
          </li>
          <li className={isSidebarHidden ? 'menu_gap' : ''}>
            <a href="/contact"> 
              <span className="icon icon-favourites"></span>
              <p className={isSidebarHidden ? 'hide_element' : ''}>Contact US</p>
            </a>
          </li>
        
        </ul>
      </div>
      {/* 5. Use the toggleSidebar prop passed from Layout.js */}
      <span className="sidebar_btn" onClick={toggleSidebar}>
        <i className={`ri-arrow-left-s-line ${isSidebarHidden ? 'toggle_sidebar_btn' : ''}`}> </i>
      </span>
    </aside>
  );
}

export default Sidebar;