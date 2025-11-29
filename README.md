# Jayden's Portfolio

A high-performance personal portfolio website built for a University at Buffalo Business Administration student, showcasing expertise in Real Estate Market Analysis and Equity Strategy.

## 🚀 Features

- **Modern Dark Theme** - Financial terminal-inspired aesthetic with teal accent colors
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Interactive Alpha Dashboard** - Market intelligence hub with:
  - Real Estate Market Map (Leaflet integration)
  - Equity Strategy Watchlist
  - Live data visualization
- **Smooth Animations** - Framer Motion powered scroll animations and transitions
- **SEO Optimized** - Built with Next.js App Router for optimal performance

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Maps**: React-Leaflet
- **Icons**: Lucide React
- **Language**: TypeScript

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd jayden

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & theme
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main page component
├── components/
│   ├── Navigation.tsx   # Fixed navigation bar
│   ├── Hero.tsx         # Hero section with CTAs
│   ├── About.tsx        # Education & background
│   ├── AlphaDashboard.tsx  # Market analysis dashboard
│   ├── RealEstateMap.tsx   # Interactive map component
│   ├── Experience.tsx   # Timeline of experiences
│   ├── Contact.tsx      # Contact information
│   └── Footer.tsx       # Footer component
public/
└── resume.pdf           # Downloadable resume
```

## 🎨 Customization

### Theme Colors

Edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --background: #0a0b0d;
  --foreground: #f0f2f5;
  --accent: #00d4aa;
  /* ... */
}
```

### Content Updates

- **Personal Info**: Update components in `src/components/`
- **Resume**: Replace `public/resume.pdf` with your own
- **Map Pins**: Edit `realEstatePins` in `AlphaDashboard.tsx`
- **Equity Positions**: Edit `equityPositions` in `AlphaDashboard.tsx`

## 📱 Sections

1. **Hero** - Value proposition with CTAs
2. **About** - Education, coursework, skills, fraternity leadership
3. **Alpha Dashboard** - Interactive market analysis showcase
4. **Experience** - Professional timeline with leadership roles
5. **Contact** - Professional outreach links

## 🚀 Deployment

Optimized for [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js and Tailwind CSS
