import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsSidebarVisible(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getThemeClass = () => (darkTheme ? 'light-theme' : 'dark-theme');
  const getIconClass = () => (darkTheme ? 'icon-dark' : 'icon-light');

  const MainNav = () => (
    <nav className={`main-nav ${getThemeClass()}`}>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        <div className='nav-logo p-3'>
          <h5>JANET</h5>
          <p>KAMAU</p>
        </div>
        {isSmallScreen ? (
          <div className='d-flex align-center'>
            <div className={`theme p-3 ${getIconClass()}`} onClick={toggleTheme}>
              <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} className="icon" />
            </div>
            <div className={`toggler p-3 ${getIconClass()}`} onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} className="icon" />
            </div>
          </div>
        ) : (
          <div className='nav-list d-inline-flex'>
            <ul className='mr-3 list-unstyled container d-flex justify-content-center align-items-center'>
              <li className='p-3'>
                <Link className="no-underline" to="/">Home</Link>
              </li>
              <li className='p-3'>
                <Link to="/about" className="no-underline">About</Link>
              </li>
              <li className='p-3'>
                <Link to="/portfolio" className="no-underline">Portfolio</Link>
              </li>
              <li className='p-3'>
                <Link to="/contacts" className="no-underline">Contact</Link>
              </li>
            </ul>
            <div className={`p-3 ${getIconClass()}`} onClick={toggleTheme}>
              <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} className="icon" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const SidebarNav = () => (
    <div className={`sidebar ${getThemeClass()} p-3`}>
      <div className='nav-side'>
        <ul className='mr-3 list-unstyled container d-grid justify-content-left align-items-left'>
          <li className='p-3'>
            <Link className="no-underline" to="/">Home</Link>
          </li>
          <li className='p-3'>
            <Link to="/about" className="no-underline">About</Link>
          </li>
          <li className='p-3'>
            <Link to="/portfolio" className="no-underline">Portfolio</Link>
          </li>
          <li className='p-3'>
            <Link to="/contacts" className="no-underline">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      <MainNav />
      {isSmallScreen && isSidebarVisible && <SidebarNav />}
    </div>
  );
}

export default Nav;
