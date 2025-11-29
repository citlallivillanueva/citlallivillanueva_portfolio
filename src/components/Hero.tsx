import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/40" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-serif text-7xl md:text-9xl font-light text-foreground mb-6 tracking-tight animate-fade-in">
          Fashion
          <br />
          <span className="font-semibold">Stylist</span>
        </h1>
        <p className="font-sans text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-light tracking-wide animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Creative styling & business strategy at the intersection of fashion and commerce
        </p>
      </div>
    </section>
  );
};

export default Hero;
