# WolvesEden (WDN) Website Documentation

## Overview

**WolvesEden (WDN)** is a single-page React landing website for the WolvesEden Discord community — a Filipino gaming community established in 2016. The website serves as an informational hub and invite gateway to the Discord server.

- **Live URL:** Deployed on Vercel
- **Discord Invite:** https://discord.gg/GtyhYFUkzr
- **Framework:** React 19 (Create React App)
- **Hosting:** Vercel (with serverless API)

---

## Table of Contents

1. [Project Structure](#project-structure)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Page Sections](#page-sections)
5. [Components](#components)
6. [API (Serverless Functions)](#api-serverless-functions)
7. [Styling](#styling)
8. [Deployment](#deployment)
9. [Team & Staff](#team--staff)
10. [Environment Variables](#environment-variables)

---

## Project Structure

```
wdn-site/
├── api/
│   └── discord-stats.js        # Vercel serverless function (Discord API)
├── public/
│   ├── images/
│   │   ├── banner.png          # Banner image
│   │   └── logo.png           # WolvesEden logo
│   ├── favicon.ico
│   ├── favicon.png
│   ├── favicon.svg
│   ├── index.html             # HTML entry point
│   ├── manifest.json          # PWA manifest
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── About.js           # About section
│   │   ├── Community.js       # Team/community section
│   │   ├── CountUp.js         # Animated counter component
│   │   ├── Features.js        # Features section
│   │   ├── Footer.js          # Footer
│   │   ├── Hero.js            # Hero/landing section
│   │   ├── Join.js            # Call-to-action join section
│   │   ├── Navbar.js          # Navigation bar
│   │   ├── Rules.js           # Server rules section
│   │   └── ScrollReveal.js    # Scroll animation wrapper
│   ├── styles/
│   │   └── index.css          # All CSS styles
│   ├── App.js                 # Root component
│   └── index.js               # React entry point
├── package.json
├── vercel.json                # Vercel deployment config
└── README.md
```

---

## Tech Stack

| Technology       | Purpose                          |
|-----------------|----------------------------------|
| React 19        | UI framework                     |
| Create React App| Build tooling                    |
| Vercel          | Hosting & serverless functions   |
| Discord API     | Real-time member/server stats    |
| CSS (vanilla)   | Styling with CSS variables       |

### Dependencies

- `react` ^19.2.7
- `react-dom` ^19.2.7
- `react-scripts` 5.0.1
- `web-vitals` ^2.1.4
- `@testing-library/react` ^16.3.2

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd wdn-site

# Install dependencies
npm install

# Start development server
npm start
```

The app runs at `http://localhost:3000`.

### Available Scripts

| Command         | Description                    |
|----------------|--------------------------------|
| `npm start`    | Run dev server (port 3000)     |
| `npm run build`| Production build to `/build`   |
| `npm test`     | Run tests                      |
| `npm run eject`| Eject from CRA (irreversible)  |

---

## Page Sections

The site is a single-page app with these sections in order:

### 1. Hero
- Animated welcome screen with particles and shooting stars
- WolvesEden logo with parallax mouse effect
- Animated letter-by-letter title reveal
- Discord join button + Learn More scroll
- Real-time stats (member count, years active) fetched from API

### 2. About
- Story of WolvesEden (established 2016)
- Description of community focus: Gaming + Chill & Anime
- Tags: Gaming, Anime & Chill, Filipino, Events
- Games list: Dota 2, Minecraft, Path of Exile 2, Palworld, Heartopia, Euro Truck Simulator 2, VALORANT, The Division 2, Monster Hunter Wilds, Left 4 Dead 2

### 3. Features
Six feature cards highlighting what the community offers:
- 🎮 Gaming — Teammates, game nights, tournaments
- 🎙️ Voice Hangouts — Active voice channels
- 🎨 Creative Corner — Art, music, streams
- 🎉 Events & Giveaways — Regular community events
- 🤖 Custom Bots — Leveling, music, moderation
- 🛡️ Safe Space — Active moderation

### 4. Community (The Pack)
Displays the staff hierarchy with member names:
- Owner (The Alpha Wolf)
- Admins (Other Alpha Wolves)
- Moderators (Beta Wolves)
- Members (The Pack)

### 5. Rules
Four main server guidelines:
1. Be Respectful and Kind
2. No Drama or Toxicity
3. Moderation and Bans
4. Enjoy Your Stay!

### 6. Join (CTA)
- Final call-to-action to join the Discord server
- Animated floating particles background

### 7. Footer
- Brand logo and tagline
- Quick navigation links
- Discord join button
- Copyright: WolvesEden © 2016 - 2026

---

## Components

### `Navbar.js`
- Sticky navigation that becomes opaque on scroll
- Active section highlighting based on scroll position
- Mobile hamburger menu toggle
- Smooth scroll navigation

### `Hero.js`
- Particle system (80 particles + periodic shooting stars)
- Mouse-based parallax on logo and glow elements
- Animated text reveal with per-letter animation
- `CountUp` component for stats animation
- Fetches live Discord stats from `/api/discord-stats`

### `CountUp.js`
- Animated number counter using Intersection Observer
- Triggers animation when element scrolls into view

### `ScrollReveal.js`
- Wrapper component for scroll-triggered reveal animations
- Uses Intersection Observer
- Supports configurable delay and direction (up, left, right)

### `About.js`
- Static content with highlight bar accent
- Games list rendered as tags

### `Features.js`
- 6 feature cards in a responsive grid
- Each card has accent color, icon, hover effects

### `Community.js`
- Staff roles with member name tags
- Four role categories with themed colors

### `Rules.js`
- Four numbered rule cards with icons
- Slide-in reveal animations

### `Join.js`
- CTA section with floating particle background
- Pulsing Discord join button

### `Footer.js`
- Three-column layout: brand, links, social
- Smooth scroll navigation links

---

## API (Serverless Functions)

### `GET /api/discord-stats`

Fetches real-time statistics from the Discord API for the WolvesEden server.

**Response:**
```json
{
  "members": 233,
  "channels": 50,
  "years": 10,
  "online": 45,
  "name": "WolvesEden"
}
```

**Caching:** 5 minutes (`s-maxage=300`), stale-while-revalidate for 10 minutes.

**Fallback:** If Discord API is unavailable or env vars are missing, returns default values (members: 233, years: calculated from 2016).

**Required Environment Variables:**
- `DISCORD_BOT_TOKEN` — Discord bot token with guild read permissions
- `DISCORD_GUILD_ID` — The WolvesEden Discord server ID

---

## Styling

All styles are in `src/styles/index.css` using a single-file approach.

### Design System

| Variable               | Value          | Usage                  |
|-----------------------|----------------|------------------------|
| `--color-bg-dark`     | `#080b1a`      | Darkest backgrounds    |
| `--color-bg`          | `#0d1027`      | Main background        |
| `--color-bg-light`    | `#141836`      | Elevated surfaces      |
| `--color-bg-card`     | `#111433`      | Card backgrounds       |
| `--color-primary`     | `#e6b422`      | Gold primary accent    |
| `--color-accent`      | `#7c5cbf`      | Purple accent          |
| `--color-text`        | `#e2e8f0`      | Primary text           |
| `--color-text-muted`  | `#94a3b8`      | Secondary text         |

### Fonts
- **Display:** Cinzel (serif) — headings and titles
- **Body:** Inter (sans-serif) — body text

### Key Animations
- Particle float and shooting stars
- Scroll-triggered reveal (fade up/left/right)
- Hero letter-by-letter entrance
- Counter number animation
- Card hover glow effects
- Button pulse effects

---

## Deployment

### Vercel Configuration (`vercel.json`)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Deploy Steps
1. Push to GitHub (connected to Vercel)
2. Vercel auto-builds and deploys
3. Set environment variables in Vercel dashboard:
   - `DISCORD_BOT_TOKEN`
   - `DISCORD_GUILD_ID`

### API Routes
- `/api/discord-stats` — handled by `api/discord-stats.js` serverless function
- All other routes — SPA fallback to `index.html`

---

## Team & Staff

| Role        | Title              | Members                                                    |
|------------|--------------------|------------------------------------------------------------|
| Owner       | The Alpha Wolf     | Patzyu                                                     |
| Admins      | Other Alpha Wolves | Sammiee, Silent Focus                                      |
| Moderators  | Beta Wolves        | Paran0ia, Cobra (A7FX), Kush, Carzy, Acceruz, Kondolmao  |
| Members     | The Pack           | All community members                                      |

---

## Environment Variables

| Variable             | Required | Description                              |
|---------------------|----------|------------------------------------------|
| `DISCORD_BOT_TOKEN` | Yes      | Bot token for Discord API access         |
| `DISCORD_GUILD_ID`  | Yes      | WolvesEden Discord server (guild) ID     |

These must be set in the Vercel project settings for the API to return live data.

---

## Browser Support

**Production:**
- Browsers with >0.2% market share
- Excludes dead browsers and Opera Mini

**Development:**
- Latest Chrome, Firefox, Safari

---

## License

WolvesEden © 2016 - 2026. All rights reserved.
