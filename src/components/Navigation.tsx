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
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-black bg-opacity-80 backdrop-blur-sm">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-light tracking-wider hover:opacity-70 transition-opacity"
        >
          CITLALLI VILLANUEVA
        </button>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-40 flex items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="text-center space-y-8">
          {menuItems.map((item, i) => (
            <div 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-5xl md:text-7xl font-light cursor-pointer hover:text-muted-foreground transition-colors duration-300"
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
