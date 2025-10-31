// import React, { useState } from 'react'; // 1. Import useState
// import { Link } from 'react-router-dom';

// function Sidebar() {
//   // 2. Create a state variable to track if the sidebar is hidden
//   const [isSidebarHidden, setIsSidebarHidden] = useState(false);

//   // 3. Create a function to toggle the state
//   const toggleSidebar = () => {
//     setIsSidebarHidden(!isSidebarHidden);
//   };

//   // 4. Use the state to conditionally apply classes
//   return (
//     <aside className={isSidebarHidden ? 'sidebar_hide' : ''}>
//       <div className={`logo ${isSidebarHidden ? 'hide_element' : ''}`}>
//         <Link to="/home">
//           <img src="/Images/logo.png" alt="" />
//           <img src="/Images/mini_logo.png" alt="" className="small_screen_logo" />
//         </Link>
//       </div>
//       <div className={`small_logo ${isSidebarHidden ? 'show-element' : ''}`}>
//         <img src="/Images/mini_logo.png" alt="" />
//       </div>
//       <div className="music_menu">
//         <h2 className={isSidebarHidden ? 'hide_element' : ''}>Browse music</h2>
//         <ul>
//           <li className={isSidebarHidden ? 'menu_gap' : ''}>
//             <Link to="/" className="active_link">
//               <span className="icon icon-discover"></span>
//               <p className={isSidebarHidden ? 'hide_element' : ''}>Discover</p>
//             </Link>
//           </li>
//           <li className={isSidebarHidden ? 'menu_gap' : ''}>
//             <Link to="/artists">
//               <span className="icon icon-artists"></span>
//               <p className={isSidebarHidden ? 'hide_element' : ''}>Artists</p>
//             </Link>
//           </li>
//           <li className={isSidebarHidden ? 'menu_gap' : ''}>
//             <Link to="/albums">
//               <span className="icon icon-albums"></span>
//               <p className={isSidebarHidden ? 'hide_element' : ''}>Albums</p>
//             </Link>
//           </li>
//           <li className={isSidebarHidden ? 'menu_gap' : ''}>
//             <Link to="/contact">
//               <span className="icon icon-Stations"></span>
//               <p className={isSidebarHidden ? 'hide_element' : ''}>Contact US</p>
//             </Link>
//           </li>
//           <li className={isSidebarHidden ? 'menu_gap' : ''}>
//             <Link to="/music">
//               <span className="icon icon-music"></span>
//               <p className={isSidebarHidden ? 'hide_element' : ''}>Music</p>
//             </Link>
//           </li>
//         </ul>

//         <h2 className={isSidebarHidden ? 'hide_element' : ''}>Your Music</h2>
//         <ul>
//           <li className={isSidebarHidden ? 'menu_gap' : ''}>
//             <Link to="/purchased">
//               <span className="icon icon-purchased"></span>
//               <p className={isSidebarHidden ? 'hide_element' : ''}>Purchased</p>
//             </Link>
//           </li>
//           <li className={isSidebarHidden ? 'menu_gap' : ''}>
//             <a href="/#">
//               <span className="icon icon-favourites"></span>
//               <p className={isSidebarHidden ? 'hide_element' : ''}>Favourites</p>
//             </a>
//           </li>
//           <li className={isSidebarHidden ? 'menu_gap' : ''}>
//             <a href="/#">
//               <span className="icon icon-history"></span>
//               <p className={isSidebarHidden ? 'hide_element' : ''}>History</p>
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* 5. Add the onClick event to the button */}
//       <span className="sidebar_btn" onClick={toggleSidebar}>
//         <i className={`ri-arrow-left-s-line ${isSidebarHidden ? 'toggle_sidebar_btn' : ''}`}> </i>
//       </span>
//     </aside>
//   );
// }

// export default Sidebar;



import React from 'react'; // 1. Removed unused useState
import { Link, NavLink } from 'react-router-dom';

// 2. Accept the props from Layout.js
function Sidebar({ isSidebarHidden, toggleSidebar }) {

  // 3. Use the props (isSidebarHidden) to conditionally apply classes
  return (
    <aside className={isSidebarHidden ? 'sidebar_hide' : ''}>
      <div className={`logo ${isSidebarHidden ? 'hide_element' : ''}`}>
        <Link to="/home">
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
          {/* 4. Use NavLink for active styling */}
          <li className={isSidebarHidden ? 'menu_gap' : ''}>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active_link' : ''}>
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
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active_link' : ''}>
              <span className="icon icon-Stations"></span>
              <p className={isSidebarHidden ? 'hide_element' : ''}>Contact US</p>
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
            <a href="/#"> {/* Keeping as <a> since it's not a Route */}
              <span className="icon icon-favourites"></span>
              <p className={isSidebarHidden ? 'hide_element' : ''}>Favourites</p>
            </a>
          </li>
          <li className={isSidebarHidden ? 'menu_gap' : ''}>
            <a href="/#"> {/* Keeping as <a> since it's not a Route */}
              <span className="icon icon-history"></span>
              <p className={isSidebarHidden ? 'hide_element' : ''}>History</p>
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
