import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './navigation-bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navigation(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible); // Toggles the visibility state
    };
    const closeMobileMenu = () => setClick(false);

    return(
        <>
            <span className="hide-navigation" onClick={toggleVisibility}><FontAwesomeIcon icon={faBars} /></span>
            <nav className="navBar" style={{
                visibility: isVisible ? 'visible' : 'hidden',
            }}>
                <span className="hide-navigation" onClick={toggleVisibility}><FontAwesomeIcon icon={faBars} /></span>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        
                    </Link>
                    <div className="menu-icon" onClick={handleClick} >
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Tourism
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Account     
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navigation;