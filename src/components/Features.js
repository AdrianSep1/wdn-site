import React from 'react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: '🎮',
    title: 'Gaming',
    desc: 'Find teammates, join game nights, and compete in community tournaments across all platforms.',
    color: '#6366f1',
  },
  {
    icon: '🎙️',
    title: 'Voice Hangouts',
    desc: 'Active voice channels where you can chill, chat, or find someone to queue with any time of day.',
    color: '#8b5cf6',
  },
  {
    icon: '🎨',
    title: 'Creative Corner',
    desc: 'Share your art, music, streams, videos, and creative projects with a supportive audience.',
    color: '#ec4899',
  },
  {
    icon: '🎉',
    title: 'Events & Giveaways',
    desc: 'Regular community events, game nights, movie watches, and giveaways to keep things lively.',
    color: '#f59e0b',
  },
  {
    icon: '🤖',
    title: 'Custom Bots',
    desc: 'Leveling systems, music bots, moderation tools, and fun commands to enhance your experience.',
    color: '#10b981',
  },
  {
    icon: '🛡️',
    title: 'Safe Space',
    desc: 'Active moderation team ensuring a friendly, respectful, and inclusive environment for all.',
    color: '#06b6d4',
  },
];

function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-badge">✨ Features</span>
            <h2 className="section-title">What We <span className="text-gradient">Offer</span></h2>
            <p className="section-subtitle">Everything you need for a great community experience</p>
          </div>
        </ScrollReveal>
        <div className="features-grid">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="up">
              <div className="feature-card" style={{ '--card-accent': feature.color }}>
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-icon-ring"></div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
                <div className="feature-card-shine"></div>
                <div className="feature-card-border"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
