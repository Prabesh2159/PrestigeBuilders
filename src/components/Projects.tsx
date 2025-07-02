
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectsProps {
  language: "english" | "nepali";
}

const Projects = ({ language }: ProjectsProps) => {
  const content = {
    english: {
      title: "Our Projects",
      subtitle: "Explore our portfolio of successful construction projects that showcase our expertise across commercial, residential, and industrial sectors.",
      galleryTitle: "Project Gallery",
      viewAll: "View All Projects",
      projects: [
        { title: "Modern Ceiling", image: "/images/roofing1.jpg" },
        { title: "Modern Kitchen", image: "/images/kitchen.jpg" },
        { title: "TV Case", image: "/images/tvcase.jpg" },
        { title: "Modern Cupboard", image: "/images/cupboard.jpg" },
        { title: "Modern Living Room", image: "/images/yo.jpg" },
        { title: "Modern Bedroom", image: "/images/bedroom.jpg" }
      ]
    },
    nepali: {
      title: "हाम्रा परियोजनाहरू",
      subtitle: "व्यावसायिक, आवासीय, र औद्योगिक क्षेत्रहरूमा हाम्रो विशेषज्ञता प्रदर्शन गर्ने सफल निर्माण परियोजनाहरूको हाम्रो पोर्टफोलियो अन्वेषण गर्नुहोस्।",
      galleryTitle: "परियोजना ग्यालरी",
      viewAll: "सबै परियोजनाहरू हेर्नुहोस्",
      projects: [
        { title: "आधुनिक छत", image: "/images/roofing1.jpg" },
        { title: "आधुनिक भान्साघर", image: "/images/kitchen.jpg" },
        { title: "टिभी केस", image: "/images/tvcase.jpg" },
        { title: "आधुनिक अलमारी", image: "/images/cupboard.jpg" },
        { title: "आधुनिक बैठक कोठा", image: "/images/yo.jpg" },
        { title: "आधुनिक सुत्ने कोठा", image: "/images/bedroom.jpg" }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="projects" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-gray mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-construction-steel max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Project Gallery Section */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-construction-gray mb-4">
              {t.galleryTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.map((project, index) => (
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
            {t.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
