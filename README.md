# IT Director Candidate Presentation - Robinson Inc

An interactive portfolio website demonstrating research and strategic vision for the IT Director position at Robinson Inc.

![IT Director](https://img.shields.io/badge/Position-IT%20Director-0047AB)
![Robinson Inc](https://img.shields.io/badge/Company-Robinson%20Inc-FF6600)
![React](https://img.shields.io/badge/React-18.x-61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)

## Purpose

This website serves as an **interactive job interview presentation** that demonstrates:
- Deep research on Robinson Inc's business, culture, and strategic direction
- A comprehensive vision for IT leadership aligned with company goals
- Technical expertise in manufacturing IT and digital transformation
- Understanding of the unique opportunities presented by the Iowa expansion

## Key Pages

### Homepage
- Introduction as IT Director candidate
- Key Robinson Inc statistics (1.4M sq. ft., 6 locations, 100% ESOP, FAB 40 Top 10)
- Overview of strategic alignment and three pillars for digital transformation

### Why Robinson
- Detailed company research demonstrating due diligence
- Hub-and-spoke location architecture analysis
- ESOP culture understanding and alignment
- Tier-1 client requirements (Rolls-Royce, Caterpillar, John Deere)

### My Vision
- First 90 days action plan (Listen, Analyze, Execute)
- Strategic priorities with timelines and impact ratings
- Leadership principles and management philosophy
- ROI-focused approach to technology investments

### Digital Thread Strategy
- **ERP Modernization**: Unified platform across 6 locations
- **AI-Driven Predictive Maintenance**: IoT sensors + machine learning
- **OT/IT Convergence**: Bridging shop floor and enterprise systems
- Iowa facility IT blueprint (greenfield opportunity)
- Robinson Training Academy tech curriculum expansion
- Cybersecurity framework

### About Me
- 15+ years manufacturing IT experience
- Career history and key achievements
- Skills and certifications
- Personal alignment with Robinson's values

## Tech Stack

- **React 18** - UI Framework
- **Vite** - Build Tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/robinson-metal-website.git

# Navigate to project directory
cd robinson-website

# Install pnpm if not already installed
npm install -g pnpm

# Install dependencies (use pnpm to avoid npm optional dependency bugs)
pnpm install

# Start development server
pnpm run dev
```

### Build for Production

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

> **Note**: If using npm on Windows with Node.js v24+, you may encounter issues with optional dependencies. Using pnpm resolves these issues.

## Project Structure

```
robinson-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── StatsBar.jsx
│   │   ├── IowaCountdown.jsx
│   │   ├── ScrollytellingSection.jsx
│   │   └── CapabilitiesPreview.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── TechnologyPage.jsx
│   │   ├── CareersPage.jsx
│   │   ├── LocationsPage.jsx
│   │   ├── CapabilitiesPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Deployment

### GitHub Pages

1. Update `vite.config.js` with your repository name:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. Build and deploy:
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

### Netlify / Vercel

Simply connect your GitHub repository and deploy. The build command is `npm run build` and the output directory is `dist`.

## Key Highlights

- **100% Employee-Owned ESOP** - Every employee is an owner
- **1.4 Million Sq. Ft.** - Manufacturing space across 6 locations
- **FAB 40 Top 10** - Recognized industry leader
- **622,788 Sq. Ft. Iowa Expansion** - Opening 2027

## License

Copyright 2026 Robinson Inc. All rights reserved.

---

*Built with pride by employee-owners.*
