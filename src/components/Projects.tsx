
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [language, setLanguage] = useState('english');

  const content = {
    english: {
      title: "Our Projects",
      subtitle: "Explore our portfolio of successful construction projects that showcase our expertise across commercial, residential, and industrial sectors.",
      galleryTitle: "Project Gallery",
      viewAll: "View All Projects",
      categories: ["Commercial", "Residential", "Industrial"]
    },
    nepali: {
      title: "हाम्रा परियोजनाहरू",
      subtitle: "व्यावसायिक, आवासीय र औद्योगिक क्षेत्रहरूमा हाम्रो विशेषज्ञता प्रदर्शन गर्ने सफल निर्माण परियोजनाहरूको हाम्रो पोर्टफोलियो अन्वेषण गर्नुहोस्।",
      galleryTitle: "परियोजना ग्यालेरी",
      viewAll: "सबै परियोजनाहरू हेर्नुहोस्",
      categories: ["व्यावसायिक", "आवासीय", "औद्योगिक"]
    }
  };

  const projects = [
    {
      title: language === 'english' ? "Downtown Office Complex" : "डाउनटाउन कार्यालय कम्प्लेक्स",
      category: content[language].categories[0],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: language === 'english' 
        ? "Modern 12-story office building with sustainable design features and state-of-the-art facilities."
        : "दिगो डिजाइन सुविधाहरू र अत्याधुनिक सुविधाहरूसहित आधुनिक १२ तले कार्यालय भवन।"
    },
    {
      title: language === 'english' ? "Luxury Residential Community" : "लक्जरी आवासीय समुदाय",
      category: content[language].categories[1],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: language === 'english'
        ? "Premium housing development featuring 150 custom homes with contemporary architectural design."
        : "समसामयिक वास्तुकला डिजाइनका साथ १५० कस्टम घरहरू भएको प्रिमियम आवास विकास।"
    },
    {
      title: language === 'english' ? "Industrial Manufacturing Plant" : "औद्योगिक उत्पादन प्लान्ट",
      category: content[language].categories[2],
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: language === 'english'
        ? "High-tech manufacturing facility with specialized infrastructure and safety systems."
        : "विशेष पूर्वाधार र सुरक्षा प्रणालीहरूसहित उच्च प्रविधि उत्पादन सुविधा।"
    }
  ];

  const galleryProjects = [
    {
      title: language === 'english' ? "Modern Villa Construction" : "आधुनिक भिला निर्माण",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: language === 'english' ? "Commercial Plaza" : "व्यावसायिक प्लाजा",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: language === 'english' ? "High Rise Apartment" : "अग्लो अपार्टमेन्ट",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: language === 'english' ? "Shopping Complex" : "सपिङ कम्प्लेक्स",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: language === 'english' ? "Residential Estate" : "आवासीय सम्पत्ति",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: language === 'english' ? "Office Building" : "कार्यालय भवन",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Language Toggle Button */}
        <div className="flex justify-end mb-8">
          <Button
            onClick={() => setLanguage(language === 'english' ? 'nepali' : 'english')}
            variant="outline"
            className="border-construction-orange text-construction-orange hover:bg-construction-orange hover:text-white"
          >
            {language === 'english' ? 'नेपाली' : 'English'}
          </Button>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-gray mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-construction-steel max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-construction-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-construction-gray mb-3">
                  {project.title}
                </h3>
                <p className="text-construction-steel leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Gallery Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-construction-gray mb-4">
              {content[language].galleryTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryProjects.map((project, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h4 className="text-white text-lg font-semibold mb-2">
                      {project.title}
                    </h4>
                    <ExternalLink className="h-6 w-6 text-white mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-construction-orange hover:bg-construction-darkOrange text-white px-8 py-4"
          >
            {content[language].viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
