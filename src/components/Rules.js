import React from 'react';
import ScrollReveal from './ScrollReveal';

const rules = [
  {
    number: '01',
    title: 'Respect Everyone',
    desc: 'Treat all members with kindness and respect. No harassment, hate speech, or discrimination.',
    icon: '💛',
  },
  {
    number: '02',
    title: 'No Spam',
    desc: 'Keep conversations meaningful. No excessive messaging, self-promotion, or unwanted advertising.',
    icon: '🚫',
  },
  {
    number: '03',
    title: 'Keep It SFW',
    desc: 'All content must be safe for work. No NSFW content in any channels unless specifically marked.',
    icon: '✅',
  },
  {
    number: '04',
    title: 'Use Correct Channels',
    desc: 'Post content in the appropriate channels. Check channel descriptions if you\'re unsure.',
    icon: '📌',
  },
  {
    number: '05',
    title: 'Follow Discord TOS',
    desc: 'All Discord Terms of Service and Community Guidelines must be followed at all times.',
    icon: '📜',
  },
  {
    number: '06',
    title: 'Have Fun',
    desc: 'This is a community. Engage, make friends, and enjoy your time in the den!',
    icon: '🎉',
  },
];

function Rules() {
  return (
    <section className="section rules" id="rules">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-badge">📋 Guidelines</span>
            <h2 className="section-title">Pack <span className="text-gradient">Rules</span></h2>
            <p className="section-subtitle">
              Simple guidelines to keep our den welcoming for everyone
            </p>
          </div>
        </ScrollReveal>
        <div className="rules-grid">
          {rules.map((rule, index) => (
            <ScrollReveal key={index} delay={index * 100} direction="left">
              <div className="rule-card">
                <div className="rule-number-badge">{rule.number}</div>
                <div className="rule-icon">{rule.icon}</div>
                <div className="rule-content">
                  <h3 className="rule-title">{rule.title}</h3>
                  <p className="rule-desc">{rule.desc}</p>
                </div>
                <div className="rule-card-line"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rules;
