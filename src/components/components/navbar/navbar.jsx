import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">Logo</a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">View All</a></li>
                <li><a href="/addStudent">Add Student</a></li>
                <li><a href="/services">Seat Allocation</a></li>
                <li><a href="/contact">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
