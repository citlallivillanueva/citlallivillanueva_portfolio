import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-serif text-2xl font-semibold tracking-tight text-foreground hover:text-burgundy transition-colors"
        >
          Portfolio
        </button>
        <div className="flex gap-8 items-center">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("work")}
            className="text-foreground hover:text-burgundy font-sans font-light tracking-wide"
          >
            Work
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-burgundy font-sans font-light tracking-wide"
          >
            About
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-burgundy font-sans font-light tracking-wide"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
