import { Award, BookOpen } from "lucide-react";

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

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Achievements & <span className="bg-gradient-primary bg-clip-text text-transparent">Recognition</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 animate-slide-in-left">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/80">
                  <span className="text-primary mt-1">🎓</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Achievements */}
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 animate-slide-in-right">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3 text-foreground/80">
                  <span className="text-secondary mt-1">🏆</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Publications */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20 animate-scale-in">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Publications</h3>
            </div>
            <div className="space-y-4">
              {publications.map((pub, index) => (
                <div key={index} className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="font-semibold text-foreground mb-1">{pub.title}</p>
                  <p className="text-sm text-secondary">{pub.conference}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
