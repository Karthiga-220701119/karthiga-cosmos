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
                (2022–2026) at Rajalakshmi Engineering College, specializing in <span className="text-secondary font-semibold">Full-Stack Web Development (MERN)</span>, 
                <span className="text-secondary font-semibold"> Artificial Intelligence/Machine Learning</span>, and 
                <span className="text-secondary font-semibold"> Mobile App Development</span>.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg text-foreground/90 leading-relaxed mb-6">
                I excel in building production-ready applications using the <span className="text-primary font-semibold">MERN stack</span> (MongoDB, Express.js, React.js, Node.js), 
                developing intelligent <span className="text-primary font-semibold">AI/ML solutions</span> with TensorFlow and Scikit-learn, and creating 
                native <span className="text-primary font-semibold">Android applications</span>. My projects range from smart expense trackers with OCR capabilities 
                to AI-powered terrain analysis systems for disaster management.
              </motion.p>
              
              <motion.p variants={itemVariants} className="text-lg text-foreground/90 leading-relaxed">
                With hands-on experience from internships at <span className="text-secondary font-semibold">EY Global Delivery Services</span> and 
                <span className="text-secondary font-semibold"> CodSoft</span>, I bring both technical expertise and collaborative problem-solving 
                skills to every project. I'm passionate about leveraging cutting-edge technologies to create impactful solutions.
              </motion.p>
              
              <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "MERN Stack Expert", color: "primary" },
                  { label: "AI/ML Engineer", color: "secondary" },
                  { label: "Mobile Developer", color: "accent" },
                  { label: "Innovation Driven", color: "primary" }
                ].map((trait, index) => (
                  <motion.span 
                    key={index}
                    className={`px-4 py-2 bg-${trait.color}/10 border border-${trait.color}/20 rounded-full text-sm font-medium text-${trait.color}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ 
                      scale: 1.15,
                      y: -5,
                      boxShadow: trait.color === "primary" ? "var(--glow-primary)" : "var(--glow-secondary)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {trait.label}
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
