const skills = [
  "Brand Storytelling",
  "Trend Analysis",
  "Social Media Strategy",
  "Visual Content Curation",
  "Event Coordination",
  "PR & Media Relations",
  "Marketing Research",
  "Creative Communication",
  "MS Office Suite",
  "Google Workspace",
  "Canva & Adobe Express",
  "Instagram Insights"
];

const About = () => {
  return (
    <section id="about" className="min-h-screen py-32 md:py-40 bg-background">
      <div className="px-8 md:px-16 lg:px-32 max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-serif text-6xl md:text-8xl font-light tracking-tight text-foreground mb-4">
            About
          </h2>
          <div className="w-20 h-px bg-border mt-8" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          {/* Main Bio */}
          <div className="lg:col-span-7 space-y-8 font-sans text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
            <p className="text-2xl md:text-3xl leading-relaxed text-foreground/80 font-light">
              Fashion professional currently pursuing a Bachelor of Arts in Business and Technologies 
              of Fashion at New York City College of Technology, with an expected graduation in June 2025.
            </p>
            <p>
              Specializing in brand storytelling, trend analysis, and visual content curation with hands-on 
              experience across styling, executive assistance, event coordination, and marketing research 
              within the fashion industry.
            </p>
            <p>
              Passionate about textile work including sewing, crocheting, and knitting, with a strong eye 
              for texture, proportion, and color. Fluent in both English and Spanish.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-5">
            <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
              Skills & Expertise
            </h3>
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div 
                  key={i}
                  className="font-sans text-base text-foreground/60 hover:text-foreground transition-colors duration-500 cursor-default pb-4 border-b border-border/50"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="pt-24 border-t border-border">
          <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12">
            Education
          </h3>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-6">
              <div className="font-serif text-3xl md:text-4xl font-light mb-4 text-foreground">
                New York City College of Technology
              </div>
              <div className="font-sans text-lg text-foreground/70 mb-2">
                Bachelor of Arts in Business and Technologies of Fashion
              </div>
              <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider">
                April 2020 – June 2025
              </div>
            </div>
            <div className="md:col-span-6 font-sans text-base text-foreground/60 leading-relaxed font-light">
              <span className="text-muted-foreground block mb-3 text-xs uppercase tracking-wider">Key Focus Areas:</span>
              Trend Forecasting and Social Media, Merchandising, Global Fashion, 
              E-Commerce Innovation, Advertisement, Financial Forecasting
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
