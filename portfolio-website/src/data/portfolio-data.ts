export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  icon: string;
}

export interface ExternalLink {
  name: string;
  url: string;
  icon: string;
  description: string;
  color: string;
}

export const personalInfo = {
  name: "Your Name",
  title: "Full Stack Developer & Problem Solver",
  email: "your.email@example.com",
  bio: "Passionate developer with expertise in modern web technologies and competitive programming. I love creating efficient, scalable solutions and solving complex algorithmic challenges.",
  avatar: "/api/placeholder/300/300",
  location: "Your Location",
  availability: "Available for freelance work"
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "🔷" },
  { name: "Next.js", level: 80, category: "frontend", icon: "▲" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "🎨" },
  { name: "Vue.js", level: 75, category: "frontend", icon: "💚" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "🟢" },
  { name: "Python", level: 90, category: "backend", icon: "🐍" },
  { name: "PostgreSQL", level: 80, category: "backend", icon: "🐘" },
  { name: "MongoDB", level: 75, category: "backend", icon: "🍃" },
  { name: "Express.js", level: 80, category: "backend", icon: "⚡" },
  
  // Languages
  { name: "JavaScript", level: 90, category: "languages", icon: "📜" },
  { name: "Python", level: 85, category: "languages", icon: "🐍" },
  { name: "C++", level: 80, category: "languages", icon: "⚙️" },
  { name: "Java", level: 75, category: "languages", icon: "☕" },
  
  // Tools
  { name: "Git", level: 85, category: "tools", icon: "🔀" },
  { name: "Docker", level: 80, category: "tools", icon: "🐳" },
  { name: "AWS", level: 75, category: "tools", icon: "☁️" },
  { name: "VS Code", level: 90, category: "tools", icon: "💻" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, admin dashboard, and real-time inventory management.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    category: "web-app",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Firebase", "Framer Motion", "TypeScript"],
    category: "web-app",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/task-manager",
    featured: true
  },
  {
    id: "3",
    title: "Algorithm Visualizer",
    description: "Interactive web application for visualizing sorting and pathfinding algorithms. Helps students understand complex algorithms through animations and step-by-step execution.",
    image: "/api/placeholder/600/400",
    technologies: ["JavaScript", "Canvas API", "CSS3", "HTML5"],
    category: "educational",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/algorithm-visualizer",
    featured: true
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description: "Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features responsive design and offline capabilities.",
    image: "/api/placeholder/600/400",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "PWA"],
    category: "web-app",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    featured: false
  },
  {
    id: "5",
    title: "Blog CMS",
    description: "Content management system for bloggers with markdown support, SEO optimization, and analytics dashboard. Built with Next.js and headless CMS architecture.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Strapi", "PostgreSQL", "Vercel"],
    category: "cms",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/blog-cms",
    featured: false
  }
];

export const externalLinks: ExternalLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/username",
    icon: "🐙",
    description: "View my code repositories and open source contributions",
    color: "bg-gray-800 hover:bg-gray-700"
  },
  {
    name: "AtCoder",
    url: "https://atcoder.jp/users/username",
    icon: "🏆",
    description: "Check out my competitive programming achievements",
    color: "bg-orange-500 hover:bg-orange-600"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "💼",
    description: "Connect with me professionally",
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/username",
    icon: "🧩",
    description: "See my algorithm problem solving progress",
    color: "bg-yellow-500 hover:bg-yellow-600"
  }
];

export const techStack = {
  frontend: [
    { name: "React", icon: "⚛️", description: "UI Library" },
    { name: "Next.js", icon: "▲", description: "React Framework" },
    { name: "TypeScript", icon: "🔷", description: "Type Safety" },
    { name: "Tailwind CSS", icon: "🎨", description: "Styling" },
    { name: "Framer Motion", icon: "🎭", description: "Animations" }
  ],
  backend: [
    { name: "Node.js", icon: "🟢", description: "Runtime" },
    { name: "Express.js", icon: "⚡", description: "Web Framework" },
    { name: "PostgreSQL", icon: "🐘", description: "Database" },
    { name: "MongoDB", icon: "🍃", description: "NoSQL Database" },
    { name: "Redis", icon: "🔴", description: "Caching" }
  ],
  tools: [
    { name: "Git", icon: "🔀", description: "Version Control" },
    { name: "Docker", icon: "🐳", description: "Containerization" },
    { name: "AWS", icon: "☁️", description: "Cloud Platform" },
    { name: "VS Code", icon: "💻", description: "Editor" },
    { name: "Figma", icon: "🎨", description: "Design" }
  ]
};