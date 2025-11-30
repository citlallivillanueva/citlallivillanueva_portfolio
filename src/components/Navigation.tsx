import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "Experience", id: "experience" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 flex justify-between items-center bg-background/80 backdrop-blur-md border-b border-border/20">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-lg md:text-xl font-light tracking-[0.3em] hover:text-coral transition-colors duration-300"
        >
          CV
        </button>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="hover:text-coral transition-colors duration-300 flex items-center gap-2"
          aria-label="Toggle menu"
        >
          <span className="text-sm tracking-widest hidden md:inline">MENU</span>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background z-40 flex items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="text-center space-y-12 px-6">
          {menuItems.map((item, i) => (
            <div 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-6xl md:text-8xl lg:text-9xl font-light cursor-pointer hover:text-coral transition-all duration-500 tracking-tight"
              style={{
                animation: menuOpen ? `fadeInUp 0.6s ease-out ${i * 0.1}s both` : 'none'
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
