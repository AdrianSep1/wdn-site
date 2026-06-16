import React from 'react';

function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="WDN" style={{ width: 32, height: 32, borderRadius: '50%' }} />
            <span className="logo-text">WDN</span>
            <p>WolvesEden &copy; 2016 - 2026. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
            <a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Features</a>
            <a href="#rules" onClick={(e) => handleNavClick(e, '#rules')}>Rules</a>
            <a
              href="https://discord.gg/wolveseden"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
