import { Award, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const certifications = [
  "Full Stack Web Development – InternEzy",
  "Programming in Java – NPTEL",
  "AI Infrastructure & Operations Fundamentals – NVIDIA",
  "JavaScript for Web Designers – LinkedIn Learning"
];

const achievements = [
  "Guest Speaker on Machine Learning at DEVS Club Workshop",
  "Top 5 – Project & Paper Presentation at Datatrix Symposium, SRM IST",
  "Finalist – 24-hour Hackathon for TerraDefender Project",
  "Volunteer – IEEE CS Hackathon Xyntra'25 & NSS Beach Cleanup Drive"
];

const publications = [
  {
    title: "TerraDefender: A Deep Learning Approach to Disaster Response",
    conference: "Mi-IRICT '24"
  },
  {
    title: "TerraDefender: Navigating Disaster Zones with Precision Terrain Insight",
    conference: "Research Publication"
  }
];

const AchievementBadge = ({ text, index }: { text: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      className="flex items-start gap-3 text-foreground/80 cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.span 
        className="mt-1"
        animate={{
          scale: isHovered ? 1.3 : 1,
          rotate: isHovered ? 360 : 0,
        }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        🏆
      </motion.span>
      <motion.span
        animate={{
          x: isHovered ? 10 : 0,
          color: isHovered ? "hsl(var(--primary))" : "hsl(var(--foreground) / 0.8)"
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.span>
      
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-primary/5 rounded-lg -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.li>
  );
};

const CertificationBadge = ({ text, index }: { text: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      className="flex items-start gap-3 text-foreground/80 cursor-pointer relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <motion.span 
        className="mt-1"
        animate={{
          scale: isHovered ? 1.3 : 1,
          rotateY: isHovered ? 360 : 0,
        }}
        transition={{ duration: 0.6 }}
      >
        🎓
      </motion.span>
      <motion.span
        animate={{
          x: isHovered ? 10 : 0,
          color: isHovered ? "hsl(var(--secondary))" : "hsl(var(--foreground) / 0.8)"
        }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.span>
      
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-secondary/5 rounded-lg -z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            boxShadow: "0 0 20px hsl(var(--secondary) / 0.3)"
          }}
        />
      )}
    </motion.li>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements & <span className="bg-gradient-primary bg-clip-text text-transparent">Recognition</span>
        </motion.h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <motion.div 
            className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              borderColor: "hsl(var(--secondary) / 0.4)",
              boxShadow: "var(--glow-secondary)",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Award className="w-6 h-6 text-secondary" />
              </motion.div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <CertificationBadge key={index} text={cert} index={index} />
              ))}
            </ul>
          </motion.div>
          
          {/* Achievements */}
          <motion.div 
            className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
              borderColor: "hsl(var(--primary) / 0.4)",
              boxShadow: "var(--glow-primary)",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3, delay: 1 }}
              >
                <Award className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <AchievementBadge key={index} text={achievement} index={index} />
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Publications */}
        <div className="max-w-4xl mx-auto mt-8">
          <motion.div 
            className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              borderColor: "hsl(var(--primary) / 0.4)",
              boxShadow: "var(--glow-primary)",
            }}
          >
            <div className="flex items-center gap-2 mb-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
              >
                <BookOpen className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-bold">Publications</h3>
            </div>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 bg-primary/5 rounded-lg border border-primary/10 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "hsl(var(--primary) / 0.1)",
                    borderColor: "hsl(var(--primary) / 0.3)",
                  }}
                >
                  <p className="font-semibold text-foreground mb-1">{pub.title}</p>
                  <p className="text-sm text-secondary">{pub.conference}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
