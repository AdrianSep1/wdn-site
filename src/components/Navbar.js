import React, { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <img src="/images/logo.png" alt="WDN" className="nav-logo-img" />
          <span className="logo-text">WDN</span>
        </a>
        <ul className={`nav-links ${mobileOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Features</a></li>
          <li><a href="#community" onClick={(e) => handleNavClick(e, '#community')}>Community</a></li>
          <li><a href="#rules" onClick={(e) => handleNavClick(e, '#rules')}>Rules</a></li>
          <li>
            <a href="#join" className="nav-cta" onClick={(e) => handleNavClick(e, '#join')}>
              Join the Pack
            </a>
          </li>
        </ul>
        <button
          className={`nav-toggle ${mobileOpen ? 'active' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
