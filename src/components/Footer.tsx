
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  language: "english" | "nepali";
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    english: {
      companyName: "Prestige Design & Builders",
      description: "Building excellence since 1998. Your trusted partner for design and construction needs with a commitment to quality, innovation, and client satisfaction.",
      quickLinks: "Quick Links",
      navigation: ["Home", "Services", "Projects", "About Us", "Contact"],
      ourServices: "Our Services",
      services: [
        "Commercial Construction",
        "Residential Construction", 
        "Industrial Projects",
        "Renovation & Remodeling",
        "Project Management",
        "Site Preparation"
      ],
      contactInfo: "Contact Info",
      address: {
        line1: "123 Construction Ave",
        line2: "Building City, BC 12345"
      },
      phone: "(555) 123-4567",
      email: "info@prestigedesignbuilders.com",
      copyright: "© 2024 Prestige Design & Builders. All rights reserved.",
      footerLinks: ["Privacy Policy", "Terms of Service", "License & Insurance"]
    },
    nepali: {
      companyName: "प्रेस्टिज डिजाइन र बिल्डर्स",
      description: "१९९८ देखि उत्कृष्टता निर्माण गर्दै। गुणस्तर, नवाचार, र ग्राहक सन्तुष्टिको प्रतिबद्धताका साथ डिजाइन र निर्माण आवश्यकताहरूको लागि तपाईंको विश्वसनीय साझेदार।",
      quickLinks: "द्रुत लिङ्कहरू",
      navigation: ["गृहपृष्ठ", "सेवाहरू", "परियोजनाहरू", "हाम्रो बारेमा", "सम्पर्क"],
      ourServices: "हाम्रा सेवाहरू",
      services: [
        "व्यावसायिक निर्माण",
        "आवासीय निर्माण",
        "औद्योगिक परियोजनाहरू", 
        "नवीकरण र पुनर्निर्माण",
        "परियोजना व्यवस्थापन",
        "साइट तयारी"
      ],
      contactInfo: "सम्पर्क जानकारी",
      address: {
        line1: "१२३ निर्माण एवेन्यू",
        line2: "बिल्डिङ सिटी, BC १२३४५"
      },
      phone: "(५५५) १२३-४५६७",
      email: "info@prestigedesignbuilders.com",
      copyright: "© २०२४ प्रेस्टिज डिजाइन र बिल्डर्स। सबै अधिकार सुरक्षित।",
      footerLinks: ["गोपनीयता नीति", "सेवाका सर्तहरू", "लाइसेन्स र बीमा"]
    }
  };

  const t = content[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sectionIds = ["home", "services", "projects", "about", "contact"];

  return (
    <footer className="bg-construction-gray text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Building className="h-8 w-8 text-construction-orange mr-3" />
              <h3 className="text-2xl font-bold">
                <span className="text-construction-orange">Prestige</span> Design & Builders
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3">
              {t.navigation.map((label, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(sectionIds[index])}
                    className="text-gray-300 hover:text-construction-orange transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.ourServices}</h4>
            <ul className="space-y-3">
              {t.services.map((service, index) => (
                <li key={index} className="text-gray-300">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.contactInfo}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-construction-orange mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>{t.address.line1}</p>
                  <p>{t.address.line2}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-construction-orange flex-shrink-0" />
                <div className="text-gray-300">
                  <p>{t.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-construction-orange flex-shrink-0" />
                <div className="text-gray-300">
                  <p>{t.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              {t.copyright}
            </p>
            <div className="flex space-x-6 text-sm">
              {t.footerLinks.map((link, index) => (
                <a key={index} href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
