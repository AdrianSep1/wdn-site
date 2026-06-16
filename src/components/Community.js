import React from 'react';
import ScrollReveal from './ScrollReveal';

const roles = [
  {
    role: 'Owner',
    roleClass: 'owner',
    title: 'Server Leadership',
    desc: 'Dedicated leaders who keep the den running smoothly and make sure every wolf feels at home.',
  },
  {
    role: 'Admins',
    roleClass: 'admin',
    title: 'Administration',
    desc: 'Experienced members who help manage the community and organize events.',
  },
  {
    role: 'Moderators',
    roleClass: 'mod',
    title: 'Moderation Team',
    desc: 'Keeping the peace and making sure everyone follows the rules with fairness.',
  },
  {
    role: 'Members',
    roleClass: 'member',
    title: 'The Pack',
    desc: 'The heart and soul of WolvesEden — every member makes this community special.',
  },
];

function Community() {
  return (
    <section className="section community" id="community">
      <div className="container">
        <h2 className="section-title">The Pack</h2>
        <p className="section-subtitle">
          Our community is made up of amazing people from all walks of life
        </p>
        <div className="community-grid">
          {roles.map((item, index) => (
            <ScrollReveal key={index} className="community-card">
              <div className={`community-role ${item.roleClass}`}>{item.role}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Community;
