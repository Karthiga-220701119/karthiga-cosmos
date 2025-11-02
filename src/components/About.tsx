const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 animate-scale-in">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm <span className="text-primary font-semibold">Karthiga R</span>, a passionate Computer Science and Engineering student 
              (2022–2026) at Rajalakshmi Engineering College, specializing in <span className="text-secondary font-semibold">Full-Stack Web Development</span> and 
              <span className="text-secondary font-semibold"> Artificial Intelligence</span>.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I love building practical, data-driven applications that solve real-world problems — from intelligent expense managers 
              to AI-powered terrain analysis systems. My expertise spans across the MERN stack, Python-based ML frameworks, and 
              mobile app development.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              With strong analytical, communication, and leadership skills, I'm eager to contribute to innovative software teams 
              and continuously learn emerging technologies. I thrive in collaborative environments and enjoy tackling complex 
              challenges that push the boundaries of what's possible with code.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3">
              {["Problem Solver", "Team Player", "Quick Learner", "Innovation Driven"].map((trait, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
