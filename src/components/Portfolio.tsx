import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  { id: 1, image: portfolio1, title: "Editorial Styling", category: "Fashion" },
  { id: 2, image: portfolio2, title: "Business Attire", category: "Corporate" },
  { id: 3, image: portfolio3, title: "Accessories", category: "Fashion" },
  { id: 4, image: portfolio4, title: "Runway", category: "Fashion" },
  { id: 5, image: portfolio5, title: "Contemporary", category: "Editorial" },
  { id: 6, image: portfolio6, title: "Luxury", category: "Fashion" },
];

const Portfolio = () => {
  return (
    <section id="work" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-6xl md:text-7xl font-light text-foreground mb-4 tracking-tight">
          Selected <span className="font-semibold">Work</span>
        </h2>
        <div className="h-px w-32 bg-burgundy mb-16" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden aspect-square cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-burgundy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-center text-burgundy-foreground">
                  <p className="font-sans text-sm uppercase tracking-widest mb-2">{item.category}</p>
                  <h3 className="font-serif text-3xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
