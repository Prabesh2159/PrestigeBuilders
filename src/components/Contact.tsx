import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you within 24 hours.",
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

  return (
    <section id="contact" className="scroll-mt-32 py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-construction-gray mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-construction-steel max-w-3xl mx-auto">
            Ready to start your construction project? Contact us today for a free consultation 
            and detailed information tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {[{
              icon: Phone,
              title: "Phone",
              lines: ["(555) 123-4567", "(555) 123-4568"]
            }, {
              icon: Mail,
              title: "Email",
              lines: ["info@prestigedesignbuilders.com", "projects@prestigedesignbuilders.com"]
            }, {
              icon: MapPin,
              title: "Address",
              lines: ["123 Construction Ave", "Building City, BC 12345"]
            }, {
              icon: Clock,
              title: "Hours",
              lines: ["Sun - Fri: 8:00 AM - 7:00 PM", "Sat: Emergency Only", "Sat: Closed"]
            }].map((info, index) => (
              <Card key={index} className="border-0 shadow-lg h-full">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-construction-orange/10 rounded-full">
                      <info.icon className="h-6 w-6 text-construction-orange" />
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
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 h-full">
            <Card className="border-0 shadow-lg h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-construction-gray">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6 flex-grow flex flex-col justify-between h-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-construction-gray mb-2">
                        Full Name *
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
                        Email *
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
                        Phone Number
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
                        Service Needed
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md focus:border-construction-orange focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        <option value="commercial">Commercial Construction</option>
                        <option value="residential">Residential Construction</option>
                        <option value="industrial">Industrial Projects</option>
                        <option value="renovation">Renovation & Remodeling</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-construction-gray mb-2">
                      Project Details *
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Please describe your project requirements, timeline, and any specific details..."
                      className="border-gray-300 focus:border-construction-orange"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-construction-orange hover:bg-construction-darkOrange text-white mt-4"
                  >
                    Send Message
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