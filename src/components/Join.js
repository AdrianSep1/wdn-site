import React, { useEffect, useRef } from 'react';
import { DiscordIcon } from './Hero';
import ScrollReveal from './ScrollReveal';

function Join() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    // Floating particles in join section
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.classList.add('join-particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 5 + 's';
      particle.style.animationDuration = (5 + Math.random() * 5) + 's';
      const size = 2 + Math.random() * 4;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      container.appendChild(particle);
    }

    return () => {
      container.querySelectorAll('.join-particle').forEach(p => p.remove());
    };
  }, []);

  return (
    <section className="section join" id="join" ref={sectionRef}>
      <div className="container">
        <div className="join-content">
          <ScrollReveal>
            <h2 className="join-title">Ready to Join the Pack?</h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="join-description">
              Click below to join WolvesEden on Discord and become part of our growing family.
              The pack is waiting for you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <a
              href="https://discord.gg/wolveseden"
              className="btn btn-primary btn-large btn-glow btn-pulse"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DiscordIcon size={24} />
              Join WolvesEden
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Join;
