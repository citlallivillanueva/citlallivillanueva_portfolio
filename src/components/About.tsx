import MarqueeText from "./MarqueeText";

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
    <section id="about" className="min-h-screen py-32 bg-background">
      {/* Marquee Header */}
      <div className="mb-32">
        <MarqueeText 
          text="ABOUT ★ BIOGRAPHY ★ BACKGROUND ★" 
          className="text-5xl md:text-7xl font-light text-burgundy py-8 border-y border-border"
        />
      </div>

      <div className="px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          {/* Main Bio */}
          <div className="space-y-8 text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
            <p className="text-3xl md:text-4xl leading-relaxed">
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
          <div>
            <h3 className="text-4xl md:text-5xl font-light mb-12 tracking-tight">Skills & Expertise</h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill, i) => (
                <div 
                  key={i}
                  className="text-lg text-muted-foreground hover:text-coral transition-colors duration-300 cursor-default py-2 border-b border-border/30"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="pt-20 border-t border-border">
          <h3 className="text-5xl md:text-6xl font-light mb-12 tracking-tight">Education</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-3xl md:text-4xl font-light mb-4">
                New York City College of Technology
              </div>
              <div className="text-xl text-muted-foreground mb-2">
                Bachelor of Arts in Business and Technologies of Fashion
              </div>
              <div className="text-lg text-muted-foreground">
                April 2020 – June 2025
              </div>
            </div>
            <div className="text-lg text-foreground/70 leading-relaxed">
              <span className="text-muted-foreground block mb-2">Key Focus Areas:</span>
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
