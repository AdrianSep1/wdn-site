import React from 'react';
import { DiscordIcon } from './Hero';

function Join() {
  return (
    <section className="section join" id="join">
      <div className="container">
        <div className="join-content">
          <h2 className="join-title">Ready to Join the Pack?</h2>
          <p className="join-description">
            Click below to join WolvesEden on Discord and become part of our growing family.
            The pack is waiting for you.
          </p>
          <a
            href="https://discord.gg/wolveseden"
            className="btn btn-primary btn-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon size={24} />
            Join WolvesEden
          </a>

        </div>
      </div>
    </section>
  );
}

export default Join;
