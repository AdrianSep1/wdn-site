import React from 'react';
import ScrollReveal from './ScrollReveal';

const rules = [
  {
    number: '01',
    title: 'Be Respectful and Kind',
    desc: 'Be courteous, respectful, and understanding to everyone in the group. We will not put up with harassment, hate speech, bullying, or harsh comments about any person or organization.',
    icon: '🤝',
  },
  {
    number: '02',
    title: 'No Drama or Toxicity',
    desc: "Don't do it here if you want to make drama. You shouldn't attack anyone personally, be overly negative, or start fights on this server. We don't want a stressful environment; rather, we want a nice one.",
    icon: '🚫',
  },
  {
    number: '03',
    title: 'Moderation and Bans',
    desc: 'We believe that everyone should get a second chance. Only serious, ongoing violating rules or a member who is completely out of control and obviously disrespecting others after being warned will get a ban.',
    icon: '🔨',
  },
  {
    number: '04',
    title: 'Enjoy Your Stay!',
    desc: 'Most importantly, have fun, make new friends, and talk about what you like! This group of people does well when everyone works together in a good way.',
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
            <h2 className="section-title">Server <span className="text-gradient">Rules</span></h2>
            <p className="section-subtitle">
              Simple and designed to keep our community a fun and positive place for everyone
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
