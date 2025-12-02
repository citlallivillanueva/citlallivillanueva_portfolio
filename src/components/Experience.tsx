import { useEffect, useRef, useState } from "react";
import stylistAssistantImg from "@/assets/stylist-assistant-1.jpeg";

const experiences = [
  {
    title: "Stylist Assistant",
    company: "Edgard Lopez Davila",
    location: "New York, NY",
    period: "Spring 2025",
    description: "Supported lead stylists in curating and assembling high-fashion looks for photo shoots, fashion shows, and private clients. Managed garment sourcing and sample coordination with PR agencies and designer showrooms.",
    image: stylistAssistantImg
  },
  {
    title: "Executive Assistant Intern",
    company: "EASTEAM",
    location: "New York, NY",
    period: "Fall 2024",
    description: "Provided comprehensive executive support to the CEO, managing critical communication channels. Coordinated Fashion Week events, photoshoots, and campaign logistics. Spearheaded PR collaborations with renowned models and influencers."
  },
  {
    title: "Fashion Week Intern",
    company: "Haus Incubator",
    location: "New York, NY",
    period: "September 2024",
    description: "Coordinated logistics for multiple fashion brands within the incubator during Fashion Week. Designed and implemented email campaigns using Joor and Sendy. Managed PR efforts and curated engaging Instagram content."
  },
  {
    title: "Marketing Intern",
    company: "NuWa Marketing",
    location: "New York, NY",
    period: "Summer 2024",
    description: "Conducted in-depth influencer and marketing research across multiple social media platforms, identifying 500+ key influencers. Led efforts to identify and evaluate pop-up locations tailored to client needs."
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [imageOpacity, setImageOpacity] = useState(1);

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
      { threshold: 0.15 }
    );

    const cards = sectionRef.current?.querySelectorAll('.experience-item');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.experience-image');
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const imageCenter = rect.top + rect.height / 2;
        
        // Start fading when image center is at 60% of viewport, fully faded at 20%
        const fadeStart = windowHeight * 0.6;
        const fadeEnd = windowHeight * 0.15;
        
        if (imageCenter <= fadeStart && imageCenter >= fadeEnd) {
          const opacity = (imageCenter - fadeEnd) / (fadeStart - fadeEnd);
          (img as HTMLElement).style.opacity = String(Math.max(0, Math.min(1, opacity)));
        } else if (imageCenter > fadeStart) {
          (img as HTMLElement).style.opacity = '1';
        } else {
          (img as HTMLElement).style.opacity = '0';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="min-h-screen py-32 md:py-40 bg-background" ref={sectionRef}>
      <div className="px-8 md:px-16 lg:px-32 max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-serif text-6xl md:text-8xl font-light tracking-tight text-foreground mb-4">
            Work
          </h2>
          <div className="w-20 h-px bg-border mt-8" />
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              data-index={index}
              className={`experience-item border-b border-border py-12 md:py-16 ${
                visibleCards.includes(index) ? 'animate-reveal-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-12 gap-8 md:gap-12">
                {/* Left Column - Title & Company */}
                <div className="md:col-span-5">
                  <h3 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-3 leading-tight">
                    {exp.title}
                  </h3>
                  <div className="font-sans text-lg text-foreground/80 mb-2">{exp.company}</div>
                  <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider">
                    {exp.location}
                  </div>
                </div>

                {/* Middle Column - Period */}
                <div className="md:col-span-2 flex items-start">
                  <div className="font-sans text-sm text-muted-foreground uppercase tracking-wider">
                    {exp.period}
                  </div>
                </div>

                {/* Right Column - Description */}
                <div className="md:col-span-5">
                  <p className="font-sans text-base text-foreground/70 leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>
              </div>
              
              {exp.image && (
                <div className="mt-16 md:mt-24 flex justify-center">
                  <img 
                    src={exp.image} 
                    alt={`${exp.title} at ${exp.company}`}
                    className="experience-image w-full max-w-4xl h-auto object-cover transition-opacity duration-300 ease-out"
                    style={{ 
                      aspectRatio: '16/10',
                      objectPosition: 'center top'
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
