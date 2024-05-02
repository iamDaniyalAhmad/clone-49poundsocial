import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="navbar-section bg-[#024963]">
            <div className="navbar-content flex justify-between items-center py-8">
                <div className="logo">
                    <img src="images/49-pound-social-logo-yellow-and-white.webp" alt="" className="ml-10 w-36 h-12" />
                </div>
                {/* Mobile menu button */}
                <button className="mobile-menu-button mr-10 md:hidden" onClick={toggleMobileMenu}>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                </button>
                {/* Navbar menu */}
                <div className={`navbar-menu md:block ${isMobileMenuOpen? 'block' : 'hidden'}`}>
                    <ul className="flex">
                        <li className="mr-10 text-white">OUR STORY</li>
                        <li className="mr-10 text-white nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        <li className="mr-10 text-white">CONTACT</li>
                        <li className="mr-10 text-white">SAMPLES</li>
                        <li className="mr-10 text-white">SIGN IN</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
