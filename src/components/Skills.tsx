import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skillsData: Skill[] = [
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Python", level: 88, category: "Languages" },
  { name: "MongoDB", level: 82, category: "Database" },
  { name: "Express.js", level: 85, category: "Backend" },
  { name: "Machine Learning", level: 80, category: "AI/ML" },
  { name: "JavaScript", level: 92, category: "Languages" },
  { name: "MySQL", level: 78, category: "Database" },
  { name: "Flask", level: 83, category: "Backend" },
  { name: "TensorFlow", level: 75, category: "AI/ML" },
  { name: "Git & GitHub", level: 88, category: "Tools" },
  { name: "RESTful APIs", level: 87, category: "Backend" },
];

const SkillBar = ({ skill, inView, index }: { skill: Skill; inView: boolean; index: number }) => {
  return (
    <motion.div 
      className="mb-6 group"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ x: 5 }}
    >
      <div className="flex justify-between mb-2">
        <motion.span 
          className="text-sm font-medium text-foreground"
          whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
        >
          {skill.name}
        </motion.span>
        <motion.span 
          className="text-sm text-muted-foreground"
          animate={inView ? { opacity: [0, 1] } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden relative">
        <motion.div
          className="h-full bg-gradient-primary rounded-full relative overflow-hidden"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ 
            delay: index * 0.1 + 0.2,
            duration: 1,
            ease: "easeOut"
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{
              background: "linear-gradient(90deg, transparent, hsl(var(--primary-foreground) / 0.3), transparent)",
              backgroundSize: "200% 100%",
            }}
            animate={{
              backgroundPosition: ["200% 0", "-200% 0"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = Array.from(new Set(skillsData.map(s => s.category)));

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
        </motion.h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {categories.map((category, catIndex) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-secondary mb-4">{category}</h3>
                {skillsData
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <SkillBar key={index} skill={skill} inView={inView} index={index} />
                  ))}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">Additional Technologies</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Java", "C", "HTML/CSS", "Android Studio", "VS Code", "Postman", "XAMPP", 
                "JWT", "Pandas", "NumPy", "Scikit-learn", "Keras", "Oracle"].map((tech, index) => (
                <motion.span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-medium"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
