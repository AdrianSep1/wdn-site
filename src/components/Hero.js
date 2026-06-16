import React, { useEffect, useRef, useState } from 'react';
import CountUp from './CountUp';

function Hero() {
  const particlesRef = useRef(null);
  const heroRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({ members: 500, channels: 50, years: new Date().getFullYear() - 2016 });

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Fetch real-time Discord stats
  useEffect(() => {
    fetch('/api/discord-stats')
      .then((res) => res.json())
      .then((data) => {
        setStats({
          members: data.members || 500,
          channels: data.channels || 50,
          years: data.years || new Date().getFullYear() - 2016,
        });
      })
      .catch(() => {
        // Keep fallback values on error
      });
  }, []);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    // Create shooting stars
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.classList.add('shooting-star');
      star.style.top = Math.random() * 60 + '%';
      star.style.left = Math.random() * 100 + '%';
      star.style.animationDuration = (1 + Math.random() * 2) + 's';
      container.appendChild(star);
      setTimeout(() => star.remove(), 3000);
    };

    // Regular particles
    for (let i = 0; i < 80; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (4 + Math.random() * 6) + 's';
      const size = 1 + Math.random() * 3;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      const colors = ['#ffffff', '#c8d6e5', '#a0b4c8', '#d4b8ff', '#8fa4ff', '#e6b422'];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(particle);
    }

    // Shooting stars interval
    const interval = setInterval(createShootingStar, 4000);

    return () => {
      container.innerHTML = '';
      clearInterval(interval);
    };
  }, []);

  // Parallax mouse effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-bg">
        <div className="particles" ref={particlesRef}></div>
        <div className="hero-glow" style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`
        }}></div>
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
      </div>
      <div className={`hero-content ${loaded ? 'hero-loaded' : ''}`}>
        <div className="hero-logo" style={{
          transform: `translate(${mousePos.x * -8}px, ${mousePos.y * -8}px)`
        }}>
          <img src="/images/logo.png" alt="WolvesEden Logo" className="hero-logo-img" />
          <div className="hero-logo-ring"></div>
        </div>
        <h1 className="hero-title">
          <span className="hero-sub">Welcome to</span>
          <span className="hero-main">
            {'WOLVES EDEN'.split('').map((char, i) => (
              <span key={i} className="hero-letter" style={{ animationDelay: `${0.8 + i * 0.05}s` }}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </span>
          <span className="hero-tagline">Where the pack runs free</span>
        </h1>
        <p className="hero-description">
          Enter Wolves Eden — a growing sanctuary for Filipino gamers.
          Balance the thrill of the hunt with the peace of the den.
        </p>
        <div className="hero-actions">
          <a
            href="https://discord.gg/GtyhYFUkzr"
            className="btn btn-primary btn-glow"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon size={20} />
            Join Discord
          </a>
          <a href="#about" className="btn btn-secondary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            Learn More
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <CountUp target={stats.members} />
            <span className="stat-plus">+</span>
            <span className="stat-label">Members</span>
          </div>
          <div className="stat">
            <CountUp target={stats.channels} />
            <span className="stat-plus">+</span>
            <span className="stat-label">Channels</span>
          </div>
          <div className="stat">
            <CountUp target={stats.years} />
            <span className="stat-plus">+</span>
            <span className="stat-label">Years Active</span>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

function DiscordIcon({ size = 24 }) {
  return (
    <svg className="discord-icon" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

export { DiscordIcon };
export default Hero;
