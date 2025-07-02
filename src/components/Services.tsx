
import { Building, Hammer, Wrench, Construction, Home, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Commercial Construction",
      description: "Complete commercial building solutions from ground up, including offices, retail spaces, and industrial facilities."
    },
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, renovations, and additions tailored to your lifestyle and budget requirements."
    },
    {
      icon: Construction,
      title: "Industrial Projects",
      description: "Specialized construction for manufacturing, warehouses, and industrial facilities with safety focus."
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expert renovation and remodeling services for any property type."
    },
    {
      icon: Wrench,
      title: "Project Management",
      description: "Comprehensive project oversight ensuring timely delivery, budget control, and quality assurance."
    },
    {
      icon: Truck,
      title: "Site Preparation",
      description: "Professional excavation, grading, and site preparation services for all construction projects."
    }
  ];

  return (
    // Increased scroll margin to better account for the sticky header
    <section id="services" className="relative bg-white py-20 scroll-mt-40"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-gray mb-4">
            Our Services
          </h2>
          <p className="text-xl text-construction-steel max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive construction services 
            backed by decades of experience and unwavering commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg hover:transform hover:scale-105"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-construction-orange/10 rounded-full w-fit">
                  <service.icon className="h-12 w-12 text-construction-orange" />
                </div>
                <CardTitle className="text-xl font-bold text-construction-gray">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-construction-steel text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Services;
