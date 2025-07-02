
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Heart, Lightbulb } from "lucide-react";

interface AboutProps {
  language: "english" | "nepali";
}

const About = ({ language }: AboutProps) => {
  const content = {
    english: {
      title: "Building Excellence Since 1998",
      description1: "Craft Construction has been a trusted leader in the construction industry for over 25 years. What started as a small family business has grown into a full-service construction company known for delivering exceptional results.",
      description2: "Our team of skilled professionals brings together decades of combined experience, cutting-edge technology, and an unwavering commitment to safety and quality. From initial planning to final inspection, we're with you every step of the way.",
      stats: {
        years: "Years in Business",
        team: "Team Members",
        value: "Projects Value"
      },
      values: [
        {
          title: "Quality First",
          description: "We never compromise on quality, using premium materials and proven construction methods."
        },
        {
          title: "On-Time Delivery",
          description: "Our project management ensures every project is completed on schedule and within budget."
        },
        {
          title: "Client Focused",
          description: "Your satisfaction is our priority. We work closely with you throughout the entire process."
        },
        {
          title: "Innovation",
          description: "We embrace new technologies and sustainable practices to deliver modern solutions."
        }
      ]
    },
    nepali: {
      title: "१९९८ देखि उत्कृष्टता निर्माण गर्दै",
      description1: "क्राफ्ट कन्स्ट्रक्शन २५ वर्षभन्दा बढी समयदेखि निर्माण उद्योगमा एक विश्वसनीय नेता भएको छ। सानो पारिवारिक व्यवसायको रूपमा सुरु भएको यो असाधारण परिणामहरू प्रदान गर्नका लागि चिनिने पूर्ण-सेवा निर्माण कम्पनीमा बढेको छ।",
      description2: "हाम्रो दक्ष पेशेवरहरूको टोलीले दशकौंको संयुक्त अनुभव, अत्याधुनिक प्रविधि, र सुरक्षा र गुणस्तरप्रति अटल प्रतिबद्धता सँगै ल्याउँछ। प्रारम्भिक योजनादेखि अन्तिम निरीक्षणसम्म, हामी हरेक चरणमा तपाईंसँग छौं।",
      stats: {
        years: "व्यवसायमा वर्षहरू",
        team: "टीम सदस्यहरू",
        value: "परियोजनाहरूको मूल्य"
      },
      values: [
        {
          title: "गुणस्तर पहिले",
          description: "हामी कहिल्यै गुणस्तरमा सम्झौता गर्दैनौं, प्रिमियम सामग्री र सिद्ध निर्माण विधिहरू प्रयोग गर्छौं।"
        },
        {
          title: "समयमै डेलिभरी",
          description: "हाम्रो परियोजना व्यवस्थापनले हरेक परियोजना तालिका र बजेट भित्र पूरा हुने सुनिश्चित गर्छ।"
        },
        {
          title: "ग्राहक केन्द्रित",
          description: "तपाईंको सन्तुष्टि हाम्रो प्राथमिकता हो। हामी सम्पूर्ण प्रक्रियामा तपाईंसँग नजिकबाट काम गर्छौं।"
        },
        {
          title: "नवाचार",
          description: "हामी आधुनिक समाधानहरू प्रदान गर्न नयाँ प्रविधिहरू र दिगो अभ्यासहरूलाई अँगाल्छौं।"
        }
      ]
    }
  };

  const t = content[language];
  const icons = [CheckCircle, Target, Heart, Lightbulb];

  return (
    <section
      id="about"
      className="scroll-mt-32 py-20 bg-construction-lightGray"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-construction-gray mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-construction-steel mb-6 leading-relaxed">
              {t.description1}
            </p>
            <p className="text-lg text-construction-steel mb-8 leading-relaxed">
              {t.description2}
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-orange">
                  25+
                </div>
                <div className="text-sm text-construction-steel">
                  {t.stats.years}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-orange">
                  50+
                </div>
                <div className="text-sm text-construction-steel">
                  {t.stats.team}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-orange">
                  $50M+
                </div>
                <div className="text-sm text-construction-steel">
                  {t.stats.value}
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.values.map((value, index) => {
              const IconComponent = icons[index];
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 p-3 bg-construction-orange/10 rounded-full w-fit">
                      <IconComponent className="h-8 w-8 text-construction-orange" />
                    </div>
                    <h3 className="text-lg font-bold text-construction-gray mb-3">
                      {value.title}
                    </h3>
                    <p className="text-construction-steel text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
