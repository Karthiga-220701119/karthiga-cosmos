import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";

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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isFlipped) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 12
      }}
      style={{ perspective: "1000px" }}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Front of card */}
        <motion.div
          className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 cursor-pointer h-full min-h-[400px] relative overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={() => setIsFlipped(true)}
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.1s ease-out"
          }}
          whileHover={{
            borderColor: "hsl(var(--primary) / 0.4)",
          }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.15), transparent 50%)"
            }}
          />
          
          <motion.h3 
            className="text-2xl font-bold mb-3 text-foreground relative z-10"
            whileHover={{ x: 10, transition: { duration: 0.2 } }}
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
                <li key={i} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-auto pt-4 border-t border-primary/10">
            <p className="text-xs text-secondary text-center">Click to view tech stack →</p>
          </div>
        </motion.div>

        {/* Back of card */}
        <motion.div
          className="bg-gradient-card backdrop-blur-sm rounded-xl p-6 border border-primary/40 cursor-pointer h-full min-h-[400px] flex flex-col"
          onClick={() => setIsFlipped(false)}
          whileHover={{
            borderColor: "hsl(var(--secondary) / 0.6)",
            boxShadow: "var(--glow-secondary)",
          }}
        >
          <h3 className="text-2xl font-bold mb-4 text-secondary">Tech Stack</h3>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {project.techStack.map((tech, techIndex) => (
                <motion.div
                  key={techIndex}
                  className="px-4 py-3 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: techIndex * 0.1 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-3 justify-center">
            <motion.a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/40 rounded-lg text-sm font-medium hover:bg-primary/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-lg text-sm font-medium hover:bg-secondary/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </motion.a>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-4">Click to flip back</p>
        </motion.div>
      </ReactCardFlip>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-card/30 relative">
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
