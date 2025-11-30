import { useState } from "react";

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
    { label: "Work", id: "experience" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 py-8 flex justify-between items-center bg-background/60 backdrop-blur-sm">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-sans text-xs tracking-[0.3em] uppercase hover:text-taupe transition-colors duration-500"
        >
          Citlalli Villanueva
        </button>
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="font-sans text-xs tracking-[0.3em] uppercase hover:text-taupe transition-colors duration-500 flex items-center gap-3"
          aria-label="Toggle menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-background z-40 flex items-center justify-center transition-all duration-700 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="text-center space-y-8 px-8">
          {menuItems.map((item, i) => (
            <div 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-light cursor-pointer hover:text-taupe transition-all duration-700 tracking-tight"
              style={{
                animation: menuOpen ? `fadeInUp 0.8s ease-out ${i * 0.15}s both` : 'none'
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
