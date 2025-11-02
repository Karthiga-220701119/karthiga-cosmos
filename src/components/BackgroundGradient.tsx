import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BackgroundGradient = () => {
  const [timeGradient, setTimeGradient] = useState("");

  useEffect(() => {
    const updateGradient = () => {
      const hour = new Date().getHours();
      
      let gradient = "";
      if (hour >= 5 && hour < 12) {
        // Morning: Soft blue with warm orange
        gradient = "linear-gradient(135deg, hsl(200 80% 40%), hsl(30 90% 60%))";
      } else if (hour >= 12 && hour < 17) {
        // Afternoon: Bright blue with cyan
        gradient = "linear-gradient(135deg, hsl(217 91% 60%), hsl(194 100% 55%))";
      } else if (hour >= 17 && hour < 20) {
        // Evening: Purple with pink
        gradient = "linear-gradient(135deg, hsl(280 70% 50%), hsl(330 80% 60%))";
      } else {
        // Night: Deep blue with dark purple
        gradient = "linear-gradient(135deg, hsl(230 50% 30%), hsl(270 60% 40%))";
      }
      
      setTimeGradient(gradient);
    };

    updateGradient();
    const interval = setInterval(updateGradient, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Animated gradient background */}
      <motion.div
        className="fixed inset-0 opacity-20 blur-3xl pointer-events-none"
        style={{ background: timeGradient }}
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating orbs */}
      <motion.div
        className="fixed top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="fixed bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, -80, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </>
  );
};

export default BackgroundGradient;
