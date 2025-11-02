import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full-Stack Developer & AI Enthusiast";
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 300], [0, 150]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
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
      {/* Parallax background layers */}
      <motion.div 
        className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div 
        className="absolute inset-0 bg-gradient-secondary"
        style={{ y: y2 }}
      />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border-2 border-primary/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-secondary/30 rounded-lg"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Content with entrance animation */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
      >
        <motion.div 
          className="inline-block mb-4 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }}
        >
          <p className="text-sm text-secondary font-medium">Available for opportunities</p>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.3,
            duration: 0.8,
            type: "spring"
          }}
        >
          Karthiga R
        </motion.h1>
        
        <motion.div 
          className="h-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            {text}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </p>
        </motion.div>
        
        <motion.p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Computer Science Student specializing in MERN Stack, AI/ML, and building innovative solutions that make a difference
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Animated scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;
