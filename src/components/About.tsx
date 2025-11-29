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
    <section id="about" className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex items-center bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-light mb-16 tracking-tight">About</h2>
        <div className="space-y-8 text-lg md:text-xl text-foreground/80 leading-relaxed">
          <p>
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
          
          <div className="pt-12">
            <h3 className="text-3xl font-light mb-8">Skills & Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <div 
                  key={i}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12">
            <h3 className="text-3xl font-light mb-6">Education</h3>
            <div className="text-muted-foreground">
              <div className="text-xl text-foreground mb-2">New York City College of Technology</div>
              <div>Bachelor of Arts in Business and Technologies of Fashion</div>
              <div className="text-sm mt-2">April 2020 – June 2025</div>
              <div className="text-sm mt-4 italic">
                Key Focus: Trend Forecasting and Social Media, Merchandising, Global Fashion, 
                E-Commerce Innovation, Advertisement, Financial Forecasting
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
