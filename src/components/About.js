import React from 'react';
import ScrollReveal from './ScrollReveal';

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title">About WolvesEden</h2>
        <div className="about-grid">
          <ScrollReveal className="about-text">
            <p className="about-lead">
              WolvesEden (WDN) has been a home for gamers, streamers, and content creators since 2016.
              What started as a small group of friends has grown into a thriving community.
            </p>
            <p>
              We're a welcoming community built on respect, fun, and genuine connections. Whether you're
              looking for people to game with, a place to share your creative work, or just somewhere to
              hang out — the den has a spot for you.
            </p>
            <p>
              Our pack is diverse, inclusive, and always growing. We host regular events, game nights,
              movie watches, and community activities to keep things exciting.
            </p>
          </ScrollReveal>
          <ScrollReveal className="about-banner">
            <img src="/images/banner.png" alt="WolvesEden Banner" className="about-banner-img" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default About;
