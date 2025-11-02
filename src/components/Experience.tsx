import { Briefcase } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Web Development Intern",
    company: "EY Global Delivery Services & AICTE",
    period: "Feb 2025 – Mar 2025",
    points: [
      "Developed and deployed MERN stack web applications with CRUD operations and responsive interfaces",
      "Implemented JWT authentication, dynamic routing, and RESTful APIs",
      "Collaborated on frontend-backend integration, and used Git & GitHub for version control"
    ]
  },
  {
    title: "Android App Development Intern",
    company: "CodSoft",
    period: "Jan 2024 – Feb 2024",
    points: [
      "Built Android applications such as a calculator, flashlight, and medicine reminder app",
      "Worked with Java, Kotlin, and XML to create interactive and responsive UIs",
      "Gained expertise in debugging, app lifecycle management, and API integration"
    ]
  }
];

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
        </motion.h2>
        
        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          {/* Animated timeline line */}
          <div className="absolute left-[31px] top-0 bottom-0 w-0.5 bg-primary/20">
            <motion.div
              className="w-full bg-gradient-primary origin-top"
              style={{ height: lineHeight }}
            >
              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 bg-primary/50 blur-sm"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-16"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.2
                }}
              >
                {/* Animated timeline dot */}
                <motion.div 
                  className="absolute left-0 top-0 w-16 h-16 bg-card border-4 border-primary rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.2 + 0.2
                  }}
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0px hsl(var(--primary))",
                        "0 0 20px hsl(var(--primary))",
                        "0 0 0px hsl(var(--primary))"
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Briefcase className="w-6 h-6 text-primary" />
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20"
                  whileHover={{
                    borderColor: "hsl(var(--primary) / 0.4)",
                    boxShadow: "var(--glow-primary)",
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-secondary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.points.map((point, pointIndex) => (
                      <motion.li 
                        key={pointIndex} 
                        className="text-foreground/80 flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pointIndex * 0.1 }}
                      >
                        <span className="text-primary mr-2">▸</span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
