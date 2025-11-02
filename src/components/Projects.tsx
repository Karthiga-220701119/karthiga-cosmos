import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "AI-Enabled Personal Expense Manager",
    description: "A fullstack web app for smart expense tracking with OCR for automatic bill extraction and analytics dashboards.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tesseract.js", "Chart.js"],
    highlights: ["OCR bill extraction", "Real-time analytics", "JWT authentication", "PDF reports"]
  },
  {
    title: "Trash to Treasure",
    description: "A MERN-based recycling marketplace connecting waste-producing industries and recyclers with real-time dashboards.",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "MySQL"],
    highlights: ["Marketplace platform", "Real-time dashboards", "Secure authentication"]
  },
  {
    title: "Analyst Recommendation System",
    description: "A Flask-based web platform integrating ML models to generate real-time recommendations with RESTful APIs.",
    techStack: ["Python", "Flask", "Scikit-learn", "Pandas", "SQL"],
    highlights: ["ML integration", "RESTful APIs", "Real-time predictions"]
  },
  {
    title: "TerraDefender",
    description: "An AI-powered terrain analysis system that classifies terrain types from satellite data for disaster management.",
    techStack: ["TensorFlow", "Keras", "Deep Learning", "Python"],
    highlights: ["Hackathon Finalist", "Terrain classification", "Disaster management"]
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </motion.h2>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 group"
              whileHover={{ 
                y: -8,
                borderColor: "hsl(var(--primary) / 0.4)",
                boxShadow: "var(--glow-primary)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-3 text-foreground"
                whileHover={{ color: "hsl(var(--primary))" }}
              >
                {project.title}
              </motion.h3>
              
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-secondary mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <motion.li 
                      key={i} 
                      className="text-sm text-muted-foreground flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="text-primary mr-2">•</span>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <motion.span 
                    key={techIndex}
                    className="text-xs px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-foreground/90"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary) / 0.2)"
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
