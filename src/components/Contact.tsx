import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-6xl md:text-8xl font-light text-foreground mb-8 tracking-tight">
          Let's <span className="font-semibold">Connect</span>
        </h2>
        <p className="font-sans text-xl text-foreground/70 max-w-2xl mx-auto mb-12 font-light">
          Available for styling consultations, creative direction, and collaborative projects
        </p>
        <Button
          variant="default"
          size="lg"
          className="bg-burgundy hover:bg-burgundy/90 text-burgundy-foreground font-sans text-lg px-12 py-6 tracking-wide transition-all duration-300 hover:scale-105"
          onClick={() => window.location.href = "mailto:contact@example.com"}
        >
          Get In Touch
        </Button>
      </div>
    </section>
  );
};

export default Contact;
