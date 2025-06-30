
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-200">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-construction-orange" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-construction-orange" />
              <span>info@prestigedesignbuilders.com</span>
            </div>
          </div>
          <div className="text-construction-gray">
            Mon - Fri: 8:00 AM - 7:00 PM
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-construction-gray">
              <span className="text-construction-orange">Prestige</span> Design & Builders
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-construction-gray hover:text-construction-orange transition-colors duration-200"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-construction-gray hover:text-construction-orange transition-colors duration-200"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-construction-gray hover:text-construction-orange transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-construction-gray hover:text-construction-orange transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-construction-gray hover:text-construction-orange transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-construction-gray hover:text-construction-orange transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-construction-gray hover:text-construction-orange transition-colors duration-200"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-construction-gray hover:text-construction-orange transition-colors duration-200"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-construction-gray hover:text-construction-orange transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-construction-gray hover:text-construction-orange transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
