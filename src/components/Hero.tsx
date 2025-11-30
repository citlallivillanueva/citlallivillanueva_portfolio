import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        const hero = heroRef.current;
        const opacity = Math.max(0, 1 - scrolled / 600);
        hero.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="h-screen flex items-center justify-center relative overflow-hidden bg-background"
      ref={heroRef}
    >
      <div className="text-center z-10 px-8 max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <h1 className="font-serif text-7xl md:text-9xl lg:text-[12rem] font-light leading-none tracking-tight text-foreground opacity-0 animate-fade-in">
            Citlalli
          </h1>
          <h1 className="font-serif text-7xl md:text-9xl lg:text-[12rem] font-light leading-none tracking-tight text-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Villanueva
          </h1>
        </div>
        
        <p 
          className="font-sans text-xs md:text-sm text-muted-foreground font-normal tracking-[0.4em] uppercase mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Fashion Business & Creative Technologies
        </p>
        
        <p 
          className="font-sans text-base md:text-lg text-foreground/60 font-light max-w-2xl mx-auto leading-relaxed mb-20 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Bridging creative vision with strategic foresight. Specializing in Trend Forecasting, Styling, and Brand Strategy. Based in NYC.
        </p>
        
        <div 
          className="flex items-center justify-center gap-3 text-muted-foreground opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <ChevronDown size={20} className="animate-float" />
          <span className="text-xs tracking-[0.3em] uppercase">Explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
