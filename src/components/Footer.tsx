const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-sm font-light tracking-wide">
            © {new Date().getFullYear()} Fashion Portfolio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-light tracking-wide hover:text-accent transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-light tracking-wide hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@example.com"
              className="font-sans text-sm font-light tracking-wide hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
