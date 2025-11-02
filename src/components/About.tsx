import { motion } from "framer-motion";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <motion.div 
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={itemVariants} className="text-lg text-foreground/90 leading-relaxed mb-6">
                I'm <span className="text-primary font-semibold">Karthiga R</span>, a passionate Computer Science and Engineering student 
                (2022–2026) at Rajalakshmi Engineering College, specializing in <span className="text-secondary font-semibold">Full-Stack Web Development</span> and 
                <span className="text-secondary font-semibold"> Artificial Intelligence</span>.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg text-foreground/90 leading-relaxed mb-6">
                I love building practical, data-driven applications that solve real-world problems — from intelligent expense managers 
                to AI-powered terrain analysis systems. My expertise spans across the MERN stack, Python-based ML frameworks, and 
                mobile app development.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg text-foreground/90 leading-relaxed">
                With strong analytical, communication, and leadership skills, I'm eager to contribute to innovative software teams 
                and continuously learn emerging technologies. I thrive in collaborative environments and enjoy tackling complex 
                challenges that push the boundaries of what's possible with code.
              </motion.p>
              
              <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
                {["Problem Solver", "Team Player", "Quick Learner", "Innovation Driven"].map((trait, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary) / 0.2)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
