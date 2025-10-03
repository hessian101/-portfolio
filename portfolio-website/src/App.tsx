import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Links from './components/Links';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <DarkModeToggle />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Links />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Your Name. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed and developed with ❤️ for the web
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;