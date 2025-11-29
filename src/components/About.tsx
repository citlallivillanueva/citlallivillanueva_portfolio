const About = () => {
  return (
    <section id="about" className="py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-6xl md:text-7xl font-light text-foreground mb-4 tracking-tight">
              About <span className="font-semibold">Me</span>
            </h2>
            <div className="h-px w-32 bg-burgundy mb-8" />
          </div>
          <div className="space-y-6">
            <p className="font-sans text-lg text-foreground/80 leading-relaxed font-light">
              I am citlalli With a unique background bridging business strategy and fashion creativity, I bring a comprehensive approach to styling that understands both aesthetic vision and commercial viability.
            </p>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed font-light">
              My work spans editorial styling, corporate fashion consulting, and creative direction for brands seeking to merge style with strategic business thinking.
            </p>
            <p className="font-sans text-lg text-foreground/80 leading-relaxed font-light">
              I believe fashion is not just about what we wear, but how we present ourselves to achieve our goals—whether that's making a statement on the runway or commanding presence in the boardroom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
