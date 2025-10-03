import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface GSAPAnimationsProps {
  children: React.ReactNode;
}

const GSAPAnimations = ({ children }: GSAPAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Parallax effect for sections
    const sections = container.querySelectorAll('section');
    sections.forEach((section) => {
      // Background parallax
      const bgElements = section.querySelectorAll('[data-parallax="bg"]');
      bgElements.forEach(bg => {
        gsap.fromTo(bg, 
          { y: 0 },
          {
            y: -100,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          }
        );
      });

      // Text reveal animation
      const textElements = section.querySelectorAll('[data-gsap="reveal"]');
      textElements.forEach((text, textIndex) => {
        gsap.fromTo(text,
          { 
            opacity: 0, 
            y: 100,
            rotationX: 45
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 1.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            },
            delay: textIndex * 0.1
          }
        );
      });

      // Scale animation for cards
      const cards = section.querySelectorAll('[data-gsap="scale"]');
      cards.forEach((card, cardIndex) => {
        gsap.fromTo(card,
          { 
            scale: 0.8,
            opacity: 0,
            rotationY: 45
          },
          {
            scale: 1,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            delay: cardIndex * 0.1
          }
        );
      });

      // Stagger animation for lists
      const lists = section.querySelectorAll('[data-gsap="stagger"]');
      lists.forEach(list => {
        const items = list.children;
        gsap.fromTo(items,
          { 
            opacity: 0,
            x: -50,
            rotationZ: -10
          },
          {
            opacity: 1,
            x: 0,
            rotationZ: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: list,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    // Smooth scrolling momentum
    let scrollTimeout: number;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      document.body.classList.add('scrolling');
      
      scrollTimeout = window.setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="gsap-container">
      {children}
    </div>
  );
};

export default GSAPAnimations;