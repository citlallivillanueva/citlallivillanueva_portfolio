import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated gradient orbs */}
      <div 
        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(var(--burgundy)) 0%, transparent 70%)',
          transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.2}px) scale(${1 + scrollY * 0.001})`
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(var(--coral)) 0%, transparent 70%)',
          transform: `translate(${-scrollY * 0.2}px, ${scrollY * 0.3}px) scale(${1 + scrollY * 0.001})`
        }}
      />
      
      <div className="text-center z-10 px-4 max-w-6xl">
        <div 
          className="mb-8"
          style={{ 
            opacity: Math.max(0, 1 - scrollY * 0.003),
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <h1 className="text-8xl md:text-[12rem] lg:text-[14rem] font-light leading-none tracking-tighter mb-4">
            Citlalli
          </h1>
          <h1 className="text-8xl md:text-[12rem] lg:text-[14rem] font-light leading-none tracking-tighter">
            Villanueva
          </h1>
        </div>
        
        <p 
          className="text-xl md:text-3xl text-muted-foreground font-light tracking-[0.3em] uppercase mb-20"
          style={{ 
            opacity: Math.max(0, 1 - scrollY * 0.003),
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          Fashion Stylist / Brand Strategist
        </p>
        
        <div 
          className="flex items-center justify-center gap-3 text-muted-foreground"
          style={{ 
            opacity: Math.max(0, 1 - scrollY * 0.01)
          }}
        >
          <ChevronDown size={24} className="animate-float" />
          <span className="text-sm tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown size={24} className="animate-float" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
