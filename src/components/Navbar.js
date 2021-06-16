import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { GiBurningDot } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    // return {
    //   window.removeEventListener('resize', showButton)
    // }
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/gasbooking' className='navbar-logo' onClick={closeMobileMenu}>
              <GiBurningDot className='navbar-icon' />
              Online E Gas Booking
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/gasbooking'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Gas Booking
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/insertsurrendercylinder'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Surrender Cylinder
                </Link>
              </li>
              
              <li className='nav-btn'>
                {button ? (
                  <Link to='/logoutcustomer' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Log Out</Button>
                  </Link>
                ) : (
                  <Link to='/logoutcustomer' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Logout
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
