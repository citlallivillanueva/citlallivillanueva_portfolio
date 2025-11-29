import { Mail, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex items-center bg-black">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-5xl md:text-7xl font-light mb-16 tracking-tight">Let's Connect</h2>
        <div className="space-y-8 text-xl md:text-2xl">
          <a 
            href="mailto:Citlallivillanuevav@gmail.com" 
            className="flex items-center justify-center gap-4 text-foreground/80 hover:text-foreground transition-colors duration-300"
          >
            <Mail size={28} />
            Citlallivillanuevav@gmail.com
          </a>
          <div className="flex items-center justify-center gap-4 text-foreground/80">
            <span className="text-2xl">📱</span>
            (917) 774-3102
          </div>
          <div className="flex justify-center gap-8 pt-8">
            <a 
              href="https://www.linkedin.com/in/citlalli-villanueva" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="https://instagram.com/knittedbycitlalli" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={32} />
            </a>
          </div>
        </div>
        
        <div className="mt-20 text-sm text-muted-foreground">
          © 2025 Citlalli Villanueva. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;
