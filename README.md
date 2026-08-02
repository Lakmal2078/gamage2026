# ගමගේ Marketing — Official Website

A modern, fully responsive digital marketing agency website built with **React 19**, **TypeScript**, **Vite 8**, and **Tailwind CSS v4**.

🔗 **Live Site:** (https://lakmal2078.github.io/gamage_marketing/)

---

## ✨ Features

- **Hero Section** — Eye-catching gradient banner with CTA buttons
- **Services Section** — Six service cards with hover animations (SMM, Web Dev, Branding, SEO, Growth Strategy, Content Creation)
- **Price Calculator** — Interactive real-time quote calculator with page slider and 10% bulk discount
- **Reviews Slider** — Animated testimonial carousel with dot navigation
- **FAQ Accordion** — Collapsible FAQ section with smooth transitions
- **Contact Form** — Formspree-powered contact form with phone & email info
- **WhatsApp Button** — Fixed floating WhatsApp CTA button
- **Footer** — Social media links and copyright info
- **Sticky Navbar** — Responsive navigation bar

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19.x | UI Framework |
| TypeScript | 6.x | Type Safety |
| Vite | 8.x | Build Tool & Dev Server |
| Tailwind CSS | 4.x | Styling |
| Font Awesome | 6.5 | Icons |
| Google Fonts | — | Inter & Noto Sans Sinhala fonts |
| Formspree | — | Contact Form Backend |
| gh-pages | 6.x | GitHub Pages Deployment |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 20`
- npm `>= 10`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Lakmal2078/gamage2026.git
cd gamage2026

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at `http://localhost:5173/gamage2026/`

---

## 📦 Available Scripts

```bash
npm run dev        # Start local development server
npm run build      # Build for production (TypeScript check + Vite build)
npm run preview    # Preview the production build locally
npm run deploy     # Build and deploy to GitHub Pages
```

---

## 📁 Project Structure

```
gamage2026/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Calculator.tsx
│   │   ├── Reviews.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── assets/
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🌐 Deployment

This project is configured to deploy automatically to **GitHub Pages** using the `gh-pages` package.

```bash
npm run deploy
```

The `base` path in `vite.config.ts` is set to `/gamage2026/` to match the GitHub Pages repository URL.

---

## 📞 Contact

**Lakmal Vidanagamage**
- 📱 +94 76 586 5387
- 📧 lakmalvidanagamage25@gmail.com
- 💬 [WhatsApp](https://wa.me/94765865387)

---

## 📄 License

© 2026 Gamage Marketing. All rights reserved.
