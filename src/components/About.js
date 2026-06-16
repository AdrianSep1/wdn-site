import React from 'react';
import ScrollReveal from './ScrollReveal';

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-badge">🐺 Our Story</span>
            <h2 className="section-title">About <span className="text-gradient">WolvesEden</span></h2>
            <p className="section-subtitle">A home for gamers, creators, and friends since 2016</p>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal className="about-text" delay={200} direction="left">
            <div className="about-content">
              <div className="about-highlight">
                <div className="about-highlight-bar"></div>
                <p className="about-lead">
                  WolvesEden (WDN) has been a home for gamers, streamers, and content creators since 2016.
                  What started as a small group of friends has grown into a thriving community.
                </p>
              </div>
              <p>
                We're a welcoming community built on respect, fun, and genuine connections. Whether you're
                looking for people to game with, a place to share your creative work, or just somewhere to
                hang out — the den has a spot for you.
              </p>
              <p>
                Our pack is diverse, inclusive, and always growing. We host regular events, game nights,
                movie watches, and community activities to keep things exciting.
              </p>
              <div className="about-tags">
                <span className="about-tag">🎮 Gaming</span>
                <span className="about-tag">🎨 Creative</span>
                <span className="about-tag">🎉 Events</span>
                <span className="about-tag">🌍 Inclusive</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="about-banner" delay={400} direction="right">
            <div className="about-banner-wrapper">
              <img src="/images/banner.png" alt="WolvesEden Banner" className="about-banner-img" />
              <div className="about-banner-overlay"></div>
              <div className="about-banner-glow"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default About;
