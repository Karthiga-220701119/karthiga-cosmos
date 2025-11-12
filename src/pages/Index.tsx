import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import BackgroundGradient from "@/components/BackgroundGradient";
import FloatingParticles from "@/components/FloatingParticles";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <BackgroundGradient />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
      
      {/* Animated Footer */}
      <motion.footer 
        className="py-12 border-t border-primary/20 bg-card/30 backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-primary opacity-5"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.p 
            className="text-sm text-muted-foreground mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2025 Karthiga R. Built with{" "}
            <motion.span
              className="inline-block text-primary"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              ❤️
            </motion.span>
            {" "}using React, TypeScript & Tailwind CSS
          </motion.p>
          
          <motion.div
            className="flex justify-center gap-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {["MERN Stack", "AI/ML", "Mobile Dev"].map((tech, i) => (
              <motion.span
                key={i}
                className="text-xs text-secondary font-medium px-3 py-1 border border-secondary/20 rounded-full"
                whileHover={{
                  scale: 1.1,
                  borderColor: "hsl(var(--secondary) / 0.5)",
                  boxShadow: "0 0 20px hsl(var(--secondary) / 0.3)",
                }}
                transition={{ duration: 0.2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
