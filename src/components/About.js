import React from 'react';
import ScrollReveal from './ScrollReveal';

const games = [
  'Dota 2',
  'Minecraft',
  'Path of Exile 2',
  'Palworld',
  'Heartopia',
  'Euro Truck Simulator 2',
  'VALORANT',
  'The Division 2',
  'Monster Hunter Wilds',
  'Left 4 Dead 2',
];

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-badge">🐺 Our Story</span>
            <h2 className="section-title">About <span className="text-gradient">Wolves Eden</span></h2>
            <p className="section-subtitle">A growing sanctuary for Filipino gamers since 2016</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="about-content">
            <div className="about-highlight">
              <div className="about-highlight-bar"></div>
              <p className="about-lead">
                Enter Wolves Eden. A growing sanctuary for Filipino gamers. We balance the thrill
                of the hunt (Gaming) with the peace of the den (Chill & Anime). Find your squad,
                share your plays, and relax with the pack.
              </p>
            </div>
            <p>
              What started as a small group of friends in 2016 has grown into a thriving community.
              We're built on respect, fun, and genuine connections — whether you're looking for
              teammates, a place to share creative work, or just somewhere to hang out.
            </p>
            <p>
              Our pack is diverse, inclusive, and always growing. We host regular game nights,
              movie watches, and community activities to keep things exciting.
            </p>
            <div className="about-tags">
              <span className="about-tag">🎮 Gaming</span>
              <span className="about-tag">🎬 Anime & Chill</span>
              <span className="about-tag">🇵🇭 Filipino</span>
              <span className="about-tag">🎉 Events</span>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="games-section">
            <h3 className="games-title">🎮 Games We Play</h3>
            <div className="games-list">
              {games.map((game, index) => (
                <span key={index} className="game-tag">{game}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default About;
