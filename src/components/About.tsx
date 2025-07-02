import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Heart, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Quality First",
      description:
        "We never compromise on quality, using premium materials and proven construction methods.",
    },
    {
      icon: Target,
      title: "On-Time Delivery",
      description:
        "Our project management ensures every project is completed on schedule and within budget.",
    },
    {
      icon: Heart,
      title: "Client Focused",
      description:
        "Your satisfaction is our priority. We work closely with you throughout the entire process.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace new technologies and sustainable practices to deliver modern solutions.",
    },
  ];

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
              Building Excellence Since 1998
            </h2>
            <p className="text-lg text-construction-steel mb-6 leading-relaxed">
              Craft Construction has been a trusted leader in the construction
              industry for over 25 years. What started as a small family
              business has grown into a full-service construction company known
              for delivering exceptional results.
            </p>
            <p className="text-lg text-construction-steel mb-8 leading-relaxed">
              Our team of skilled professionals brings together decades of
              combined experience, cutting-edge technology, and an unwavering
              commitment to safety and quality. From initial planning to final
              inspection, we're with you every step of the way.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-orange">
                  25+
                </div>
                <div className="text-sm text-construction-steel">
                  Years in Business
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-orange">
                  50+
                </div>
                <div className="text-sm text-construction-steel">
                  Team Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-construction-orange">
                  $50M+
                </div>
                <div className="text-sm text-construction-steel">
                  Projects Value
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-construction-orange/10 rounded-full w-fit">
                    <value.icon className="h-8 w-8 text-construction-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-construction-gray mb-3">
                    {value.title}
                  </h3>
                  <p className="text-construction-steel text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 