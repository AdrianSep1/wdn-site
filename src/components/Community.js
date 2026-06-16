import React from 'react';
import ScrollReveal from './ScrollReveal';

const roles = [
  {
    role: 'Owner',
    roleClass: 'owner',
    title: 'Server Leadership',
    desc: 'Dedicated leaders who keep the den running smoothly and make sure every wolf feels at home.',
    icon: '👑',
    color: '#e6b422',
  },
  {
    role: 'Admins',
    roleClass: 'admin',
    title: 'Administration',
    desc: 'Experienced members who help manage the community and organize events.',
    icon: '⚡',
    color: '#a78bfa',
  },
  {
    role: 'Moderators',
    roleClass: 'mod',
    title: 'Moderation Team',
    desc: 'Keeping the peace and making sure everyone follows the rules with fairness.',
    icon: '🛡️',
    color: '#06b6d4',
  },
  {
    role: 'Members',
    roleClass: 'member',
    title: 'The Pack',
    desc: 'The heart and soul of WolvesEden — every member makes this community special.',
    icon: '🐺',
    color: '#10b981',
  },
];

function Community() {
  return (
    <section className="section community" id="community">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-badge">🐾 Community</span>
            <h2 className="section-title">The <span className="text-gradient">Pack</span></h2>
            <p className="section-subtitle">
              Our community is made up of amazing people from all walks of life
            </p>
          </div>
        </ScrollReveal>
        <div className="community-grid">
          {roles.map((item, index) => (
            <ScrollReveal key={index} delay={index * 150} direction="up">
              <div className={`community-card`} style={{ '--role-color': item.color }}>
                <div className="community-card-glow"></div>
                <div className="community-icon">{item.icon}</div>
                <div className="community-role-badge">{item.role}</div>
                <h3 className="community-title">{item.title}</h3>
                <p className="community-desc">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Community;
