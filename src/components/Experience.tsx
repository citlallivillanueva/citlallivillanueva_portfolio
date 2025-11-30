import { useEffect, useRef, useState } from "react";
import MarqueeText from "./MarqueeText";

const experiences = [
  {
    title: "Stylist Assistant",
    company: "Edgard Lopez Davila",
    location: "New York, NY",
    period: "Spring 2025",
    category: "Fashion Styling",
    description: "Supported lead stylists in curating and assembling high-fashion looks for photo shoots, fashion shows, and private clients. Managed garment sourcing and sample coordination with PR agencies and designer showrooms. Oversaw on-set styling logistics, ensuring smooth creative execution and timely sample returns.",
    color: "hsl(var(--burgundy))"
  },
  {
    title: "Executive Assistant Intern",
    company: "EASTEAM",
    location: "New York, NY",
    period: "Fall 2024",
    category: "Executive Support & Branding",
    description: "Provided comprehensive executive support to the CEO, managing critical communication channels and preparing professional sales reports. Coordinated Fashion Week events, photoshoots, and campaign logistics. Enhanced brand visibility through multiple social media platforms by developing tailored content strategies. Spearheaded PR collaborations with renowned models and influencers.",
    color: "hsl(var(--coral))"
  },
  {
    title: "Fashion Week Intern",
    company: "Haus Incubator",
    location: "New York, NY",
    period: "September 2024",
    category: "Event Coordination",
    description: "Coordinated logistics for multiple fashion brands within the incubator, meticulously tailoring event preparations and showroom experiences to each brand's unique vision during Fashion Week. Designed and implemented email and mail campaigns using Joor and Sendy. Managed PR efforts for client brands, building relationships with media outlets and curating engaging Instagram content.",
    color: "hsl(280 70% 65%)"
  },
  {
    title: "Marketing Intern",
    company: "NuWa Marketing",
    location: "New York, NY",
    period: "Summer 2024",
    category: "Marketing Research",
    description: "Conducted in-depth influencer and marketing research across multiple social media platforms, manually identifying 500+ key influencers in the beauty, tech, and jewelry sectors. Led efforts to identify and evaluate pop-up locations tailored to client needs. Developed comprehensive market research reports analyzing influencer demographics and engagement rates.",
    color: "hsl(180 70% 65%)"
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('.experience-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="min-h-screen py-32 bg-background" ref={sectionRef}>
      {/* Marquee Header */}
      <div className="mb-32">
        <MarqueeText 
          text="EXPERIENCE ★ WORK HISTORY ★ PROFESSIONAL JOURNEY ★" 
          className="text-5xl md:text-7xl font-light text-coral py-8 border-y border-border"
        />
      </div>

      <div className="px-6 md:px-12 lg:px-24 space-y-48">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            data-index={index}
            className={`experience-card grid md:grid-cols-2 gap-12 items-start ${
              visibleCards.includes(index) ? 'animate-reveal-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            {/* Image/Visual Side */}
            <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'} space-y-6`}>
              <div 
                className="aspect-[3/4] rounded-sm overflow-hidden relative group cursor-pointer"
                style={{ 
                  backgroundColor: exp.color,
                  opacity: 0.9
                }}
              >
                {/* Placeholder for image - will be replaced with actual work photos */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-light opacity-20 group-hover:opacity-30 transition-opacity duration-500 p-12 text-center">
                  {exp.company}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Category badge */}
              <div 
                className="inline-block px-6 py-2 text-sm tracking-[0.3em] uppercase font-light"
                style={{ 
                  backgroundColor: exp.color,
                  color: 'hsl(var(--background))'
                }}
              >
                {exp.category}
              </div>
            </div>

            {/* Content Side */}
            <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} space-y-6`}>
              <div>
                <h3 className="text-5xl md:text-6xl font-light mb-4 leading-tight tracking-tight">
                  {exp.title}
                </h3>
                <div className="text-2xl text-foreground/90 mb-2">{exp.company}</div>
                <div className="text-lg text-muted-foreground">{exp.location}</div>
                <div className="text-lg text-muted-foreground">{exp.period}</div>
              </div>
              
              <div className="w-20 h-px bg-border my-6" />
              
              <p className="text-lg text-foreground/70 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Marquee */}
      <div className="mt-32">
        <MarqueeText 
          text="★ VIEW MORE WORK ★ PORTFOLIO ★ PROJECTS ★" 
          className="text-3xl md:text-5xl font-light text-muted-foreground py-6"
        />
      </div>
    </section>
  );
};

export default Experience;
