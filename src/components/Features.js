import React from 'react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: '🎮',
    title: 'Gaming',
    desc: 'Find teammates, join game nights, and compete in community tournaments across all platforms.',
  },
  {
    icon: '🎙️',
    title: 'Voice Hangouts',
    desc: 'Active voice channels where you can chill, chat, or find someone to queue with any time of day.',
  },
  {
    icon: '🎨',
    title: 'Creative Corner',
    desc: 'Share your art, music, streams, videos, and creative projects with a supportive audience.',
  },
  {
    icon: '🎉',
    title: 'Events & Giveaways',
    desc: 'Regular community events, game nights, movie watches, and giveaways to keep things lively.',
  },
  {
    icon: '🤖',
    title: 'Custom Bots',
    desc: 'Leveling systems, music bots, moderation tools, and fun commands to enhance your experience.',
  },
  {
    icon: '🛡️',
    title: 'Safe Space',
    desc: 'Active moderation team ensuring a friendly, respectful, and inclusive environment for all.',
  },
];

function Features() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <h2 className="section-title">What We Offer</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <ScrollReveal key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
