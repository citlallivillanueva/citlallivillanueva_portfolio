import { Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-32 md:py-40 bg-background">
      <div className="px-8 md:px-16 lg:px-32 max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-serif text-6xl md:text-8xl font-light tracking-tight text-foreground mb-4">
            Contact
          </h2>
          <div className="w-20 h-px bg-border mt-8" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
          {/* Contact Info */}
          <div className="lg:col-span-7 space-y-16">
            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Email
              </h3>
              <a 
                href="mailto:Citlallivillanuevav@gmail.com" 
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-light hover:text-taupe transition-colors duration-500 block leading-tight"
              >
                Citlallivillanuevav<wbr/>@gmail.com
              </a>
            </div>
            
            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Phone
              </h3>
              <div className="font-serif text-3xl md:text-4xl font-light text-foreground">
                (917) 774-3102
              </div>
            </div>
            
            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Location
              </h3>
              <div className="font-serif text-3xl md:text-4xl font-light text-foreground">
                New York, NY
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Social
              </h3>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.linkedin.com/in/citlalli-villanueva" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-lg text-foreground/70 hover:text-foreground transition-colors duration-500 flex items-center gap-3"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} strokeWidth={1.5} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://instagram.com/knittedbycitlalli" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-lg text-foreground/70 hover:text-foreground transition-colors duration-500 flex items-center gap-3"
                  aria-label="Instagram"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                  <span>@knittedbycitlalli</span>
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="lg:col-span-5 flex items-start lg:items-center">
            <div className="space-y-6">
              <h3 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight text-foreground">
                Ready to collaborate?
              </h3>
              <p className="font-sans text-lg text-foreground/60 leading-relaxed font-light">
                I'm always excited to connect with creative professionals, brands, 
                and anyone passionate about fashion and storytelling.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-16 border-t border-border text-center">
          <div className="font-sans text-xs text-muted-foreground tracking-[0.3em] uppercase">
            © 2025 Citlalli Villanueva. All Rights Reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
