import React from 'react'
import '../App.css';

const Navbar = () => {
    return (
        <div className="navbar-section">
            <div className="navbar-content">
                <div className="logo">
                    <img src="images/49-pound-social-logo-yellow-and-white.webp" alt="" />
                </div>
                <div className="navbar-menu">
                    <ul>
                        <li>OUR STORY</li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                WHAT WE DO
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Social Media Managment</a></li>
                                <li><a class="dropdown-item" href="#">Social Media Marketing</a></li>
                                <li><a class="dropdown-item" href="#">SEO Blogs</a></li>
                                <li><a class="dropdown-item" href="#">Branding & Design</a></li>
                                <li><a class="dropdown-item" href="#">Resell</a></li>
                                <li><a class="dropdown-item" href="#">Referral Scheme</a></li>
                            </ul>
                        </li>
                        <li>CONTACT</li>
                        <li>SAMPLES</li>
                        <li>SIGN IN</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
