import { motion } from "framer-motion";
import { Code, Database, Brain, Smartphone } from "lucide-react";

const specializations = [
  {
    icon: Code,
    title: "MERN Stack",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js"],
    color: "hsl(217 91% 60%)",
    description: "Full-stack web development with modern JavaScript ecosystem"
  },
  {
    icon: Brain,
    title: "AI/ML",
    skills: ["TensorFlow", "Keras", "Scikit-learn", "Deep Learning"],
    color: "hsl(194 100% 55%)",
    description: "Machine learning and artificial intelligence solutions"
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL", "MongoDB", "Oracle", "Data Modeling"],
    color: "hsl(280 70% 60%)",
    description: "Robust database design and management"
  },
  {
    icon: Smartphone,
    title: "Mobile Dev",
    skills: ["Android Studio", "Java", "Kotlin", "XML"],
    color: "hsl(150 70% 50%)",
    description: "Native Android application development"
  }
];

const SkillShowcase = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-glow opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Core <span className="bg-gradient-primary bg-clip-text text-transparent">Specializations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise in cutting-edge technologies powering modern applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${spec.color}22, transparent 70%)`,
                  filter: "blur(20px)"
                }}
              />
              
              <motion.div
                className="relative bg-card/50 backdrop-blur-xl rounded-2xl p-6 border border-primary/20 h-full"
                whileHover={{ 
                  y: -10,
                  borderColor: spec.color + "66",
                  boxShadow: `0 20px 40px ${spec.color}33`
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon with animated glow */}
                <motion.div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 relative"
                  style={{ 
                    background: `linear-gradient(135deg, ${spec.color}22, ${spec.color}11)`,
                    border: `1px solid ${spec.color}44`
                  }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ background: spec.color }}
                    animate={{ 
                      opacity: [0.1, 0.3, 0.1],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <spec.icon className="w-8 h-8 relative z-10" style={{ color: spec.color }} />
                </motion.div>

                <h3 className="text-xl font-bold mb-2" style={{ color: spec.color }}>
                  {spec.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {spec.description}
                </p>

                {/* Animated skill tags */}
                <div className="space-y-2">
                  {spec.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium text-foreground"
                      style={{
                        background: `${spec.color}22`,
                        border: `1px solid ${spec.color}55`
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{
                        x: 5,
                        background: `${spec.color}33`,
                        borderColor: `${spec.color}77`
                      }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                {/* Progress indicator animation */}
                <motion.div 
                  className="mt-4 h-1 rounded-full overflow-hidden"
                  style={{ background: `${spec.color}22` }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: spec.color }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.1 + 0.3,
                      duration: 1,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 border-2 border-primary/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 border-2 border-secondary/20 rounded-lg"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default SkillShowcase;
