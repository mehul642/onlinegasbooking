import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { GiBurningDot } from 'react-icons/gi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function NavbarAdmin() {
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
            <Link to='/admin' className='navbar-logo' onClick={closeMobileMenu}>
              <GiBurningDot className='navbar-icon' />
              Online E Gas Booking
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/admin' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/managecylinder'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Cylinder
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/viewsurrendercylinder'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  View SurrenderCylinder
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/logout' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Logout</Button>
                  </Link>
                ) : (
                  <Link to='/logout' className='btn-link'>
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

export default NavbarAdmin;
