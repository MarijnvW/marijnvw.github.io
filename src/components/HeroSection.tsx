
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-background to-accent/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 animate-fade-in">
            <span className="text-lg md:text-xl font-medium text-accent mb-2 inline-block">
              Hallo, ik ben
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
              Marijn van Waterschoot
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700">
              Data Scientist
            </p>
            <p className="mb-8 text-lg text-gray-600 max-w-lg">
              Gepassioneerde data scientist met een bedrijfseconomische achtergrond, voortdurend bezig met het versterken van mijn kennis en technische vaardigheden. Als data-enthousiasteling zet ik complexe gegevens om in praktische inzichten en oplossingen!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-primary" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button className="btn-secondary" asChild>
                <a href="#projects">Mijn Werk</a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="mt-10 flex space-x-4">
              <SocialIcon href="https://github.com/MarijnvW" label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/in/marijn-van-waterschoot/" label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </SocialIcon>
              <SocialIcon href="mailto:marijnvanwaterschoot@hotmail.com" label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
          
          <div className="md:w-2/5 mt-10 md:mt-0 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-10"></div>
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gray-200 border-4 border-white shadow-xl overflow-hidden">
              {/*profile image */}
                <img 
                  src="/images/marijn.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce-light">
          <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ children, href, label }) => {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-accent transition-all duration-300"
      aria-label={label}
    >
      {children}
    </a>
  );
};

export default HeroSection;
