import { GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Rajalakshmi Engineering College (Autonomous)",
    period: "2022 – 2026",
    score: "CGPA: 8.24 / 10.0"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Mount Park Higher Secondary School",
    period: "2020 – 2022",
    score: "Percentage: 93.33%"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary animate-slide-in-right"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                  <p className="text-secondary font-medium mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      📅 {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      🎯 {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
