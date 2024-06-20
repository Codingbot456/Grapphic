import React from 'react';
import { Link } from 'react-router-dom';
import AppRouter from '../routes/Routes';

function Nav() {
  return (
    <nav className='navbar'>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        <div className='nav-logo p-3'>
         <h5>JANET</h5>
         <p1>KAMAU</p1>
        </div>
        <div className='nav-list d-flex'>
          <ul className='mr-3 list-unstyled container d-flex justify-content-center align-items-center'>
            <li className='p-3'>
              <Link  className="no-underline" to="/">Home</Link>
            </li>
            <li className='p-3'>
              <Link to="/about" className="no-underline">About</Link>
            </li>
            <li className='p-3'>
              <Link to="/portfolio" className="no-underline" >Portfolio</Link>
            </li>
            <li className='p-3'>
              <Link to="/contact" className="no-underline">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
