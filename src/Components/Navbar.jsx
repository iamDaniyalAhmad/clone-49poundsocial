import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="navbar-section">
            <div className="navbar-content">
                <div className="logo">
                    <img src="images/49-pound-social-logo-yellow-and-white.webp" alt="" />
                </div>
                {/* Mobile menu button */}
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                </button>
                {/* Navbar menu */}
                <div className={`navbar-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>OUR STORY</li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                WHAT WE DO
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Social Media Management</a></li>
                                <li><a className="dropdown-item" href="#">Social Media Marketing</a></li>
                                <li><a className="dropdown-item" href="#">SEO Blogs</a></li>
                                <li><a className="dropdown-item" href="#">Branding & Design</a></li>
                                <li><a className="dropdown-item" href="#">Resell</a></li>
                                <li><a className="dropdown-item" href="#">Referral Scheme</a></li>
                            </ul>
                        </li>
                        <li>CONTACT</li>
                        <li>SAMPLES</li>
                        <li>SIGN IN</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
