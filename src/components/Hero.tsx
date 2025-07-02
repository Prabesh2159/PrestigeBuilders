
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";

interface HeroProps {
  language: "english" | "nepali";
}

const Hero = ({ language }: HeroProps) => {
  const content = {
    english: {
      mainTitle: "Designing & Building",
      subtitle: "Excellence Together",
      description: "With over 25 years of experience in design and construction, we create exceptional spaces that blend functionality with aesthetic appeal.",
      viewWork: "View Our Work",
      contactUs: "Contact Us",
      stats: {
        experience: "Years Experience",
        projects: "Projects Completed", 
        satisfaction: "Client Satisfaction"
      }
    },
    nepali: {
      mainTitle: "डिजाइन र निर्माण",
      subtitle: "उत्कृष्टता सँगै",
      description: "डिजाइन र निर्माणमा २५ वर्षभन्दा बढी अनुभवको साथ, हामी कार्यक्षमता र सौन्दर्य अपीलको मिश्रण गर्ने असाधारण स्थानहरू सिर्जना गर्छौं।",
      viewWork: "हाम्रो काम हेर्नुहोस्",
      contactUs: "सम्पर्क गर्नुहोस्",
      stats: {
        experience: "वर्षको अनुभव",
        projects: "परियोजनाहरू सम्पन्न",
        satisfaction: "ग्राहक सन्तुष्टि"
      }
    }
  };

  const t = content[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/yo.jpg')`
}}

      />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            {t.mainTitle}
            <span className="block text-construction-orange">{t.subtitle}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-construction-orange hover:bg-construction-darkOrange text-white text-lg px-8 py-4"
            >
              {t.viewWork}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          <Button
       onClick={() => scrollToSection('contact')}
      variant="outline"
      size="lg"
      className="relative text-white text-lg px-8 py-4 border border-white bg-white/10 backdrop-blur-sm group transition-all duration-500 overflow-hidden hover:bg-white hover:text-construction-gray"
>
  <span className="group-hover:blur-sm transition-all duration-500">
    {t.contactUs}
  </span>
</Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-construction-orange" />
              </div>
              <div className="text-3xl font-bold text-white">25+</div>
              <div className="text-gray-300">{t.stats.experience}</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="h-8 w-8 text-construction-orange" />
              </div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-gray-300">{t.stats.projects}</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-construction-orange" />
              </div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-gray-300">{t.stats.satisfaction}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
