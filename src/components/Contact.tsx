import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "karthigarajesh2004@gmail.com",
      link: "mailto:karthigarajesh2004@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 93448 20905",
      link: "tel:+919344820905"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 animate-scale-in">
            <p className="text-center text-lg text-foreground/80 mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 rounded-full mb-3">
                    <div className="text-primary">{info.icon}</div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors text-center"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground text-center">{info.value}</p>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://www.linkedin.com/in/karthiga-r', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                onClick={() => window.open('mailto:karthigarajesh2004@gmail.com')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
