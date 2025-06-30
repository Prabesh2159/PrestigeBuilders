
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              Building excellence since 1998. Your trusted partner for design and construction 
              needs with a commitment to quality, innovation, and client satisfaction.
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
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Commercial Construction</li>
              <li className="text-gray-300">Residential Construction</li>
              <li className="text-gray-300">Industrial Projects</li>
              <li className="text-gray-300">Renovation & Remodeling</li>
              <li className="text-gray-300">Project Management</li>
              <li className="text-gray-300">Site Preparation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-construction-orange mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Construction Ave</p>
                  <p>Building City, BC 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-construction-orange flex-shrink-0" />
                <div className="text-gray-300">
                  <p>(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-construction-orange flex-shrink-0" />
                <div className="text-gray-300">
                  <p>info@prestigedesignbuilders.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 mb-4 md:mb-0">
              © 2024 Prestige Design & Builders. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-construction-orange transition-colors">
                License & Insurance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
