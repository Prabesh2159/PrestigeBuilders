
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  language: "english" | "nepali";
}

const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const content = {
    english: {
      title: "Get In Touch",
      subtitle: "Ready to start your construction project? Contact us today for a free consultation and detailed information tailored to your specific needs.",
      contactInfo: [
        {
          title: "Phone",
          lines: ["(555) 123-4567", "(555) 123-4568"]
        },
        {
          title: "Email", 
          lines: ["info@prestigedesignbuilders.com", "projects@prestigedesignbuilders.com"]
        },
        {
          title: "Address",
          lines: ["123 Construction Ave", "Building City, BC 12345"]
        },
        {
          title: "Hours",
          lines: ["Sun - Fri: 8:00 AM - 7:00 PM", "Sat: Emergency Only", "Sat: Closed"]
        }
      ],
      form: {
        title: "Contact Us",
        name: "Full Name *",
        email: "Email *",
        phone: "Phone Number",
        service: "Service Needed",
        message: "Project Details *",
        messagePlaceholder: "Please describe your project requirements, timeline, and any specific details...",
        submit: "Send Message",
        services: [
          { value: "", label: "Select a service" },
          { value: "commercial", label: "Commercial Construction" },
          { value: "residential", label: "Residential Construction" },
          { value: "industrial", label: "Industrial Projects" },
          { value: "renovation", label: "Renovation & Remodeling" },
          { value: "consultation", label: "Consultation" }
        ]
      },
      toastTitle: "Thank you for your inquiry!",
      toastDescription: "We'll get back to you within 24 hours."
    },
    nepali: {
      title: "सम्पर्कमा रहनुहोस्",
      subtitle: "तपाईंको निर्माण परियोजना सुरु गर्न तयार हुनुहुन्छ? तपाईंको विशिष्ट आवश्यकताहरूको लागि निःशुल्क परामर्श र विस्तृत जानकारीको लागि आज नै हामीलाई सम्पर्क गर्नुहोस्।",
      contactInfo: [
        {
          title: "फोन",
          lines: ["(५५५) १२३-४५६७", "(५५५) १२३-४५६८"]
        },
        {
          title: "इमेल",
          lines: ["info@prestigedesignbuilders.com", "projects@prestigedesignbuilders.com"]
        },
        {
          title: "ठेगाना",
          lines: ["१२३ निर्माण एवेन्यू", "बिल्डिङ सिटी, BC १२३४५"]
        },
        {
          title: "समय",
          lines: ["आइत - शुक्रबार: बिहान ८:०० - साँझ ७:००", "शनिबार: आपातकालीन मात्र", "शनिबार: बन्द"]
        }
      ],
      form: {
        title: "हामीलाई सम्पर्क गर्नुहोस्",
        name: "पूरा नाम *",
        email: "इमेल *",
        phone: "फोन नम्बर",
        service: "आवश्यक सेवा",
        message: "परियोजना विवरण *",
        messagePlaceholder: "कृपया तपाईंको परियोजना आवश्यकताहरू, समयसीमा, र कुनै विशिष्ट विवरणहरू वर्णन गर्नुहोस्...",
        submit: "सन्देश पठाउनुहोस्",
        services: [
          { value: "", label: "सेवा छान्नुहोस्" },
          { value: "commercial", label: "व्यावसायिक निर्माण" },
          { value: "residential", label: "आवासीय निर्माण" },
          { value: "industrial", label: "औद्योगिक परियोजनाहरू" },
          { value: "renovation", label: "नवीकरण र पुनर्निर्माण" },
          { value: "consultation", label: "परामर्श" }
        ]
      },
      toastTitle: "तपाईंको सोधपुछको लागि धन्यवाद!",
      toastDescription: "हामी २४ घण्टा भित्र तपाईंलाई फिर्ता सम्पर्क गर्नेछौं।"
    }
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.toastTitle,
      description: t.toastDescription,
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const icons = [Phone, Mail, MapPin, Clock];

  return (
    <section id="contact" className="scroll-mt-32 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-gray mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-construction-steel max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {t.contactInfo.map((info, index) => {
              const IconComponent = icons[index];
              return (
                <Card key={index} className="border-0 shadow-lg h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-construction-orange/10 rounded-full">
                        <IconComponent className="h-6 w-6 text-construction-orange" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-construction-gray mb-1">{info.title}</h3>
                        {info.lines.map((line, i) => (
                          <p key={i} className="text-construction-steel">{line}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 h-full">
            <Card className="border-0 shadow-lg h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-construction-gray">{t.form.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6 flex-grow flex flex-col justify-between h-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-construction-gray mb-2">
                        {t.form.name}
                      </label>
                      <Input 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-construction-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-construction-gray mb-2">
                        {t.form.email}
                      </label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-construction-orange"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-construction-gray mb-2">
                        {t.form.phone}
                      </label>
                      <Input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-construction-orange"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-construction-gray mb-2">
                        {t.form.service}
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-construction-orange focus:outline-none"
                      >
                        {t.form.services.map((service, index) => (
                          <option key={index} value={service.value}>{service.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-construction-gray mb-2">
                      {t.form.message}
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder={t.form.messagePlaceholder}
                      className="border-gray-300 focus:border-construction-orange"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-construction-orange hover:bg-construction-darkOrange text-white mt-4"
                  >
                    {t.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
