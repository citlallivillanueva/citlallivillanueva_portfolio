const experiences = [
  {
    title: "Stylist Assistant",
    company: "Edgard Lopez Davila",
    location: "New York, NY",
    period: "Spring 2025",
    category: "Fashion Styling",
    description: "Supported lead stylists in curating and assembling high-fashion looks for photo shoots, fashion shows, and private clients. Managed garment sourcing and sample coordination with PR agencies and designer showrooms. Oversaw on-set styling logistics, ensuring smooth creative execution and timely sample returns.",
    color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "Executive Assistant Intern",
    company: "EASTEAM",
    location: "New York, NY",
    period: "Fall 2024",
    category: "Executive Support & Branding",
    description: "Provided comprehensive executive support to the CEO, managing critical communication channels and preparing professional sales reports. Coordinated Fashion Week events, photoshoots, and campaign logistics. Enhanced brand visibility through multiple social media platforms by developing tailored content strategies. Spearheaded PR collaborations with renowned models and influencers.",
    color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "Fashion Week Intern",
    company: "Haus Incubator",
    location: "New York, NY",
    period: "September 2024",
    category: "Event Coordination",
    description: "Coordinated logistics for multiple fashion brands within the incubator, meticulously tailoring event preparations and showroom experiences to each brand's unique vision during Fashion Week. Designed and implemented email and mail campaigns using Joor and Sendy. Managed PR efforts for client brands, building relationships with media outlets and curating engaging Instagram content.",
    color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  {
    title: "Marketing Intern",
    company: "NuWa Marketing",
    location: "New York, NY",
    period: "Summer 2024",
    category: "Marketing Research",
    description: "Conducted in-depth influencer and marketing research across multiple social media platforms, manually identifying 500+ key influencers in the beauty, tech, and jewelry sectors. Led efforts to identify and evaluate pop-up locations tailored to client needs. Developed comprehensive market research reports analyzing influencer demographics and engagement rates.",
    color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-black">
      <h2 className="text-5xl md:text-7xl font-light mb-20 tracking-tight">Experience</h2>
      <div className="space-y-32">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="grid md:grid-cols-2 gap-8 items-center group"
          >
            <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
              <div 
                className="aspect-square rounded-lg transition-transform duration-700 group-hover:scale-105"
                style={{ background: exp.color }}
              >
                <div className="w-full h-full flex items-center justify-center text-2xl md:text-4xl font-light opacity-30 p-8 text-center">
                  {exp.company}
                </div>
              </div>
            </div>
            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
              <div className="text-sm text-muted-foreground mb-2 tracking-widest uppercase">{exp.category}</div>
              <h3 className="text-3xl md:text-4xl font-light mb-2">{exp.title}</h3>
              <div className="text-xl text-muted-foreground mb-1">{exp.company}</div>
              <div className="text-sm text-muted-foreground mb-1">{exp.location}</div>
              <div className="text-sm text-muted-foreground mb-6">{exp.period}</div>
              <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
