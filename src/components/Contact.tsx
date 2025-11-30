import { Mail, Linkedin, Instagram } from "lucide-react";
import MarqueeText from "./MarqueeText";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-32 bg-background">
      {/* Marquee Header */}
      <div className="mb-32">
        <MarqueeText 
          text="LET'S CONNECT ★ GET IN TOUCH ★ CONTACT ★" 
          className="text-5xl md:text-7xl font-light text-coral py-8 border-y border-border"
        />
      </div>

      <div className="px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 mb-32">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-light text-muted-foreground mb-4 tracking-wider uppercase">Email</h3>
                <a 
                  href="mailto:Citlallivillanuevav@gmail.com" 
                  className="text-3xl md:text-4xl font-light hover:text-coral transition-colors duration-300 block"
                >
                  Citlallivillanuevav@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-2xl font-light text-muted-foreground mb-4 tracking-wider uppercase">Phone</h3>
                <div className="text-3xl md:text-4xl font-light">
                  (917) 774-3102
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-light text-muted-foreground mb-6 tracking-wider uppercase">Social</h3>
                <div className="flex gap-8">
                  <a 
                    href="https://www.linkedin.com/in/citlalli-villanueva" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-burgundy transition-colors duration-300 flex items-center gap-3"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={32} />
                    <span className="text-lg">LinkedIn</span>
                  </a>
                  <a 
                    href="https://instagram.com/knittedbycitlalli" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-burgundy transition-colors duration-300 flex items-center gap-3"
                    aria-label="Instagram"
                  >
                    <Instagram size={32} />
                    <span className="text-lg">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex items-center">
              <div className="space-y-6">
                <h3 className="text-5xl md:text-6xl font-light leading-tight tracking-tight">
                  Ready to collaborate?
                </h3>
                <p className="text-xl text-foreground/70 leading-relaxed">
                  I'm always excited to connect with creative professionals, brands, 
                  and anyone passionate about fashion and storytelling.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-20 border-t border-border text-center">
            <div className="text-sm text-muted-foreground tracking-wider">
              © 2025 CITLALLI VILLANUEVA. ALL RIGHTS RESERVED.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
