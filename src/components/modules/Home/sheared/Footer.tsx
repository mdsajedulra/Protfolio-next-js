import { Github, Linkedin, Mail, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-portfolio-background border-t border-portfolio-primary/10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold gradient-text">YourName</p>
            <p className="mt-2 text-portfolio-text-secondary">
              Building digital experiences that matter.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-secondary hover:text-portfolio-primary transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-secondary hover:text-portfolio-primary transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-text-secondary hover:text-portfolio-primary transition-colors duration-200">
              <Twitter size={24} />
            </a>
            <a href="mailto:your.email@example.com" className="text-portfolio-text-secondary hover:text-portfolio-primary transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-portfolio-primary/10 mt-8 pt-8 text-center text-portfolio-text-secondary text-sm">
          <p>© {new Date().getFullYear()} Sajedul I.  All rights reserved.</p>
          <p className="mt-1">
            Designed & Built with <span className="text-portfolio-primary">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
