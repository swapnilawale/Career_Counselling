import React, { useState } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
        <li><a href="#">About</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Fees</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;