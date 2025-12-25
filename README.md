# Chamakz - Livestreaming Platform Website

A modern, responsive website for Chamakz - The most exciting livestreaming platform. Built with React.js, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern, dynamic design with vibrant gradients
- 📱 Fully responsive (Mobile, Tablet, Desktop)
- 🎨 Beautiful animations with Framer Motion
- ⚡ Fast loading with Vite
- 🎯 SEO optimized
- ♿ Accessibility compliant

## Pages

- **Home** - Hero section, features, statistics, app screenshots
- **Features** - Detailed feature descriptions
- **Download** - App download links for Android and iOS
- **Contact** - Contact form and information
- **Privacy Policy** - Privacy policy page
- **Terms of Service** - Terms and conditions
- **Community Guidelines** - Community guidelines and rules

## Tech Stack

- **React.js** - UI library
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit:
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
chamak-web/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   └── StatCounter.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Features.jsx
│   │   ├── Download.jsx
│   │   ├── Contact.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── Terms.jsx
│   │   └── Guidelines.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Design System

### Colors

- **Primary**: #FF1B7C (Pink/Magenta)

### Typography

- **Headings**: Poppins (Bold, Semi-bold)
- **Body**: Inter (Regular, Medium)

### Animations

- Scroll-triggered fade-ins
- Hover effects
- Count-up animations for statistics
- Smooth transitions

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... },
}
```

### Content

Update content in respective page components in `src/pages/`.

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository on Vercel
3. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## License

Copyright © 2024 Chamakz. All rights reserved.


