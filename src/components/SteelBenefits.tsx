
import { Shield, Zap, Recycle, Clock, DollarSign, Wrench } from "lucide-react";

interface SteelBenefitsProps {
  language: "english" | "nepali";
}

const SteelBenefits = ({ language }: SteelBenefitsProps) => {
  const content = {
    english: {
      title: "Key Benefits of Steel Construction",
      subtitle: "Discover why steel is the preferred choice for modern construction projects",
      benefits: [
        {
          icon: Shield,
          title: "Superior Strength",
          description: "Steel provides exceptional structural integrity and can withstand extreme weather conditions and seismic activity."
        },
        {
          icon: Zap,
          title: "Fast Construction",
          description: "Prefabricated steel components allow for quicker assembly and reduced construction time."
        },
        {
          icon: Recycle,
          title: "Eco-Friendly",
          description: "Steel is 100% recyclable and contributes to sustainable construction practices."
        },
        {
          icon: Clock,
          title: "Long Lasting",
          description: "Steel structures have exceptional durability and require minimal maintenance over time."
        },
        {
          icon: DollarSign,
          title: "Cost Effective",
          description: "Lower maintenance costs and faster construction lead to significant long-term savings."
        },
        {
          icon: Wrench,
          title: "Design Flexibility",
          description: "Steel allows for innovative architectural designs and large open spaces without columns."
        }
      ]
    },
    nepali: {
      title: "स्टील निर्माणका मुख्य फाइदाहरू",
      subtitle: "आधुनिक निर्माण परियोजनाहरूको लागि स्टील किन रुचाइएको छनोट हो भनेर पत्ता लगाउनुहोस्",
      benefits: [
        {
          icon: Shield,
          title: "उत्कृष्ट बल",
          description: "स्टीलले असाधारण संरचनात्मक अखण्डता प्रदान गर्छ र चरम मौसमी अवस्था र भूकम्पीय गतिविधिको सामना गर्न सक्छ।"
        },
        {
          icon: Zap,
          title: "छिटो निर्माण",
          description: "पूर्व-निर्मित स्टील घटकहरूले छिटो जोडाइ र कम निर्माण समयको लागि अनुमति दिन्छ।"
        },
        {
          icon: Recycle,
          title: "पर्यावरण मैत्री",
          description: "स्टील १००% पुनर्चक्रणयोग्य छ र दिगो निर्माण अभ्यासहरूमा योगदान गर्छ।"
        },
        {
          icon: Clock,
          title: "लामो समयसम्म टिक्ने",
          description: "स्टील संरचनाहरूमा असाधारण स्थायित्व हुन्छ र समयसँगै न्यूनतम मर्मत आवश्यक पर्छ।"
        },
        {
          icon: DollarSign,
          title: "लागत प्रभावी",
          description: "कम मर्मत लागत र छिटो निर्माणले महत्वपूर्ण दीर्घकालीन बचत निम्त्याउँछ।"
        },
        {
          icon: Wrench,
          title: "डिजाइन लचकता",
          description: "स्टीलले नवाचार वास्तुकला डिजाइन र स्तम्भहरू बिना ठूला खुला ठाउँहरूको लागि अनुमति दिन्छ।"
        }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-gray mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-construction-steel max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <IconComponent className="h-12 w-12 text-construction-orange" />
                </div>
                <h3 className="text-xl font-bold text-construction-gray mb-3">
                  {benefit.title}
                </h3>
                <p className="text-construction-steel leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SteelBenefits;
