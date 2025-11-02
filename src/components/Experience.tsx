import { Briefcase } from "lucide-react";

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
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 animate-slide-in-left group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background group-hover:scale-125 transition-transform duration-300" />
              
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.title}
                    </h3>
                    <p className="text-secondary font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2 ml-7">
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-foreground/80 flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
