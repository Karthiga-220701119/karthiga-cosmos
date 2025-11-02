import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer & AI Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-secondary" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <div className="inline-block mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20">
          <p className="text-sm text-secondary font-medium">Available for opportunities</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Karthiga R
        </h1>
        
        <div className="h-8 mb-6">
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            {text}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Computer Science Student specializing in MERN Stack, AI/ML, and building innovative solutions that make a difference
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
