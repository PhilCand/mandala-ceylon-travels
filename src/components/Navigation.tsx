
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-semibold text-charcoal">Ceylon Dreams</div>
          <div className="hidden md:flex space-x-8">
            {['destinations', 'tours', 'about', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-charcoal hover:text-cinnamon transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
          <Button 
            variant="ghost"
            className="bg-cinnamon text-white hover:bg-cinnamon-light transition-colors"
            onClick={() => scrollToSection('contact')}
          >
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
};
