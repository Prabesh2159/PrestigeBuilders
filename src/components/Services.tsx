
import { Building, Hammer, Wrench, Construction, Home, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServicesProps {
  language?: "english" | "nepali";
}

const Services = ({ language = "english" }: ServicesProps) => {
  const content = {
    english: {
      title: "Our Services",
      subtitle: "From concept to completion, we offer comprehensive construction services backed by decades of experience and unwavering commitment to quality.",
      services: [
        {
          title: "Commercial Construction",
          description: "Complete commercial building solutions from ground up, including offices, retail spaces, and industrial facilities."
        },
        {
          title: "Residential Construction",
          description: "Custom homes, renovations, and additions tailored to your lifestyle and budget requirements."
        },
        {
          title: "Industrial Projects",
          description: "Specialized construction for manufacturing, warehouses, and industrial facilities with safety focus."
        },
        {
          title: "Renovation & Remodeling",
          description: "Transform existing spaces with our expert renovation and remodeling services for any property type."
        },
        {
          title: "Project Management",
          description: "Comprehensive project oversight ensuring timely delivery, budget control, and quality assurance."
        },
        {
          title: "Site Preparation",
          description: "Professional excavation, grading, and site preparation services for all construction projects."
        }
      ]
    },
    nepali: {
      title: "हाम्रा सेवाहरू",
      subtitle: "अवधारणादेखि पूर्णता सम्म, हामी दशकौंको अनुभव र गुणस्तरप्रति अटुट प्रतिबद्धताद्वारा समर्थित व्यापक निर्माण सेवाहरू प्रदान गर्छौं।",
      services: [
        {
          title: "व्यावसायिक निर्माण",
          description: "कार्यालयहरू, खुद्रा स्थानहरू, र औद्योगिक सुविधाहरू सहित भूमिबाट पूर्ण व्यावसायिक भवन समाधानहरू।"
        },
        {
          title: "आवासीय निर्माण",
          description: "तपाईंको जीवनशैली र बजेट आवश्यकताहरू अनुसार अनुकूलित घरहरू, नवीकरणहरू, र थपघरहरू।"
        },
        {
          title: "औद्योगिक परियोजनाहरू",
          description: "सुरक्षा फोकसका साथ उत्पादन, गोदामहरू, र औद्योगिक सुविधाहरूको लागि विशेष निर्माण।"
        },
        {
          title: "नवीकरण र पुनर्निर्माण",
          description: "कुनै पनि सम्पत्ति प्रकारको लागि हाम्रो विशेषज्ञ नवीकरण र पुनर्निर्माण सेवाहरूसँग अवस्थित स्थानहरूको रूपान्तरण।"
        },
        {
          title: "परियोजना व्यवस्थापन",
          description: "समयमै डेलिभरी, बजेट नियन्त्रण, र गुणस्तर आश्वासन सुनिश्चित गर्ने व्यापक परियोजना निरीक्षण।"
        },
        {
          title: "साइट तयारी",
          description: "सबै निर्माण परियोजनाहरूको लागि पेशेवर उत्खनन, श्रेणीकरण, र साइट तयारी सेवाहरू।"
        }
      ]
    }
  };

  const t = content[language];
  const icons = [Building, Home, Construction, Hammer, Wrench, Truck];

  return (
    <section id="services" className="relative bg-white py-20 scroll-mt-24"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-gray mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-construction-steel max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => {
            const IconComponent = icons[index];
            return (
              <Card 
                key={service.title} 
                className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg hover:transform hover:scale-105"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-4 bg-construction-orange/10 rounded-full w-fit">
                    <IconComponent className="h-12 w-12 text-construction-orange" />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
 
export default Services;
