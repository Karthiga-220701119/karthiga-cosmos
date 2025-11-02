import { ExternalLink, Github } from "lucide-react";
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
  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
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
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-foreground/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button 
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
