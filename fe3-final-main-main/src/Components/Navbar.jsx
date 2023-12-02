// Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { ContextGlobal } from '../Components/utils/global.context';
import LightButton from '../Components/buttons/LightButton'
import DarkButton from '../Components/buttons/DarkButton'

import './css/nav.css'

const Navbar = () => {
  const { state, dispatch } = ContextGlobal();

  const handleThemeChange = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', payload: newTheme });   
  };

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <header className={`header ${themeClass}`}>
      <div>
        <h1>
          <NavLink to='/' end>
            🚀🐼🦷 Rocket Panda Dentistry 🦝🐼🦷
          </NavLink>
        </h1>
        <nav className={`header ${themeClass}`}>
          <div>
            <div className="nav-right">
              <ul className='nav'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
                <li>
                  <Link to='/favs'>Favorites</Link>
                </li>
                <li>
                  <div className={`theme-switch ${themeClass}`} onClick={handleThemeChange}>
                    {state.theme === 'light' ? <LightButton /> : <DarkButton />}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>    
  );
};

export default Navbar;
