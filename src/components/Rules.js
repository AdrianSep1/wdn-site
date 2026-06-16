import React from 'react';
import ScrollReveal from './ScrollReveal';

const rules = [
  {
    number: '01',
    title: 'Respect Everyone',
    desc: 'Treat all members with kindness and respect. No harassment, hate speech, or discrimination.',
  },
  {
    number: '02',
    title: 'No Spam',
    desc: 'Keep conversations meaningful. No excessive messaging, self-promotion, or unwanted advertising.',
  },
  {
    number: '03',
    title: 'Keep It SFW',
    desc: 'All content must be safe for work. No NSFW content in any channels unless specifically marked.',
  },
  {
    number: '04',
    title: 'Use Correct Channels',
    desc: 'Post content in the appropriate channels. Check channel descriptions if you\'re unsure.',
  },
  {
    number: '05',
    title: 'Follow Discord TOS',
    desc: 'All Discord Terms of Service and Community Guidelines must be followed at all times.',
  },
  {
    number: '06',
    title: 'Have Fun',
    desc: 'This is a community. Engage, make friends, and enjoy your time in the den!',
  },
];

function Rules() {
  return (
    <section className="section rules" id="rules">
      <div className="container">
        <h2 className="section-title">Pack Rules</h2>
        <p className="section-subtitle">
          Simple guidelines to keep our den welcoming for everyone
        </p>
        <div className="rules-list">
          {rules.map((rule, index) => (
            <ScrollReveal key={index} className="rule-item">
              <span className="rule-number">{rule.number}</span>
              <div className="rule-content">
                <h3>{rule.title}</h3>
                <p>{rule.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rules;
