# 🚀 Modern Portfolio Website

A stunning, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode, and a modern design that showcases your work beautifully.

## ✨ Features

- **🎨 Modern Design**: Clean, professional layout with glassmorphism effects
- **🌙 Dark Mode**: Smooth theme switching with system preference detection
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎭 Smooth Animations**: Framer Motion powered animations and micro-interactions
- **🎯 Interactive Elements**: Hover effects, particle background, and dynamic content
- **📊 Skills Visualization**: Animated progress bars and skill categories
- **🔍 Project Filtering**: Filter projects by category with smooth transitions
- **📧 Contact Form**: Functional contact form with validation
- **🐳 Docker Ready**: Containerized for easy deployment
- **⚡ Performance Optimized**: Fast loading with Vite and optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Custom CSS animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Docker, Nginx
- **Development**: ESLint, Hot Module Replacement

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Docker (optional, for containerized deployment)

### Local Development

1. **Clone and install dependencies**:
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Production build
docker-compose up -d

# Development mode
docker-compose --profile dev up
```

### Manual Docker Build

```bash
# Build the image
docker build -t portfolio-website .

# Run the container
docker run -p 80:80 portfolio-website
```

Your website will be available at `http://localhost`

## 📝 Customization Guide

### 1. Personal Information

Edit `/src/data/portfolio-data.ts` to update:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  email: "your.email@example.com",
  bio: "Your bio description...",
  // ... other fields
};
```

### 2. Projects

Add your projects to the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: "unique-id",
    title: "Project Name",
    description: "Project description...",
    image: "/path/to/image.jpg",
    technologies: ["React", "TypeScript", "..."],
    category: "web-app",
    liveUrl: "https://your-demo.com",
    githubUrl: "https://github.com/you/repo",
    featured: true
  },
  // ... more projects
];
```

### 3. Skills and Tech Stack

Update your skills in the same file:

```typescript
export const skills: Skill[] = [
  {
    name: "React",
    level: 90,
    category: "frontend",
    icon: "⚛️"
  },
  // ... more skills
];
```

### 4. External Links

Configure your social and professional links:

```typescript
export const externalLinks: ExternalLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "🐙",
    description: "View my code repositories",
    color: "bg-gray-800 hover:bg-gray-700"
  },
  // ... more links
];
```

### 5. Styling and Theme

- **Colors**: Modify Tailwind config in `tailwind.config.js`
- **Animations**: Update CSS animations in `src/index.css`
- **Components**: Customize individual components in `/src/components/`

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Landing section with animated background
│   ├── About.tsx       # About section with skills
│   ├── TechStack.tsx   # Technology showcase
│   ├── Projects.tsx    # Project portfolio with filtering
│   ├── Links.tsx       # External links and social media
│   ├── Contact.tsx     # Contact form and information
│   └── DarkModeToggle.tsx
├── data/
│   └── portfolio-data.ts # All content and configuration
├── hooks/
│   └── useDarkMode.ts   # Dark mode functionality
└── utils/               # Utility functions
```

## 🎨 Design System

### Color Palette
- **Primary**: Purple (#8B5CF6) to Pink (#EC4899) gradients
- **Neutral**: Gray scales for light/dark modes
- **Accent**: Custom colors for different link types

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with good contrast ratios

### Animations
- **Page Load**: Staggered fade-in animations
- **Scroll**: Intersection Observer triggered animations
- **Hover**: Subtle scale and color transitions
- **Background**: Particle system and gradient animations

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `Dockerfile` - Container configuration
- `docker-compose.yml` - Multi-service setup

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

All components adapt gracefully to different screen sizes with optimized layouts and touch-friendly interactions on mobile devices.

## 🚀 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with Vite's tree shaking
- **Images**: Lazy loading and optimized formats
- **Fonts**: Preloaded Google Fonts
- **Caching**: Nginx configuration for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have questions or need help customizing the portfolio:

1. Check the [Issues](https://github.com/yourusername/portfolio/issues) page
2. Create a new issue with detailed description
3. Join the discussion in existing issues

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Vite** for lightning-fast development

---

Made with ❤️ for developers who want to showcase their work beautifully.