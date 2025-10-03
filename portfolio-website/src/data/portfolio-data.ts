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
  email: "k.hiromu@gmail.com",
  bio: "Passionate developer with expertise in modern web technologies and competitive programming. I love creating efficient, scalable solutions and solving complex algorithmic challenges.",
  avatar: "/api/placeholder/300/300",
  location: "Your Location",
  availability: "Available for freelance work"
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 90, category: "frontend", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Next.js", level: 80, category: "frontend", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Vue.js", level: 75, category: "frontend", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D" },

  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", level: 90, category: "backend", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "PostgreSQL", level: 80, category: "backend", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", level: 75, category: "backend", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Express.js", level: 80, category: "backend", icon: "https://cdn.simpleicons.org/express/000000" },

  // Languages
  { name: "JavaScript", level: 90, category: "languages", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Python", level: 85, category: "languages", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "C++", level: 80, category: "languages", icon: "https://cdn.simpleicons.org/cplusplus/00599C" },
  { name: "Java", level: 75, category: "languages", icon: "https://cdn.simpleicons.org/openjdk/ED8B00" },

  // Tools
  { name: "Git", level: 85, category: "tools", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Docker", level: 80, category: "tools", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "AWS", level: 75, category: "tools", icon: "https://cdn.simpleicons.org/amazonwebservices/232F3E" },
  { name: "VS Code", level: 90, category: "tools", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
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
    icon: "https://cdn.simpleicons.org/github/181717",
    description: "View my code repositories and open source contributions",
    color: "bg-gray-800 hover:bg-gray-700"
  },
  {
    name: "AtCoder",
    url: "https://atcoder.jp/users/username",
    icon: "https://img.atcoder.jp/assets/atcoder.png",
    description: "Check out my competitive programming achievements",
    color: "bg-orange-500 hover:bg-orange-600"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/username",
    icon: "https://cdn.simpleicons.org/linkedin/0A66C2",
    description: "Connect with me professionally",
    color: "bg-blue-600 hover:bg-blue-700"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/username",
    icon: "https://cdn.simpleicons.org/leetcode/FFA116",
    description: "See my algorithm problem solving progress",
    color: "bg-yellow-500 hover:bg-yellow-600"
  }
];

export const techStack = {
  frontend: [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", description: "UI Library" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000", description: "React Framework" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", description: "Type Safety" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", description: "Styling" },
    { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/000000", description: "3D Graphics" }
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", description: "Runtime" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express/000000", description: "Web Framework" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", description: "Database" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", description: "NoSQL Database" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D", description: "Caching" }
  ],
  tools: [
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", description: "Version Control" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", description: "Containerization" },
    { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/232F3E", description: "Cloud Platform" },
    { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC", description: "Editor" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", description: "Design" }
  ]
};