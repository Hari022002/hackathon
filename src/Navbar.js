// Navbar.js
import React from 'react';
import './Navbar.css';
import logo1 from './assets/tomcat.png';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className='header_1'><h1 className="navbar-heading">My Website</h1></div>
                <div className="logo-container">
                    <img src={logo1} alt="Logo 1" className="navbar-logo" />
                    <img src={logo1} alt="Logo 2" className="navbar-logo" />
                    <img src={logo1} alt="Logo 3" className="navbar-logo" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

