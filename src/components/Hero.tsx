import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(var(--burgundy)) 0%, transparent 50%)',
          transform: `scale(${1 + scrollY * 0.0005})`
        }}
      />
      <div className="text-center z-10 px-4">
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-light mb-6 tracking-tight"
          style={{ 
            opacity: 1 - scrollY * 0.002,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          Citlalli
          <br />
          Villanueva
        </h1>
        <p 
          className="text-lg md:text-2xl text-muted-foreground font-light tracking-wide mb-12"
          style={{ 
            opacity: 1 - scrollY * 0.002,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          Fashion Stylist & Brand Strategist
        </p>
        <div 
          className="animate-float"
          style={{ 
            opacity: Math.max(0, 1 - scrollY * 0.01)
          }}
        >
          <ArrowDown size={32} className="mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
