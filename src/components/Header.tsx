
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const BRAND_NAME = "Prestige Design & Builders";

interface HeaderProps {
  language: "english" | "nepali";
  onLanguageChange: () => void;
}

const content = {
  english: {
    phone: "+977-9876543210",
    email: "info@prestigedesignbuilders.com",
    hours: "Mon - Fri: 8:00 AM - 7:00 PM",
    nav: ["Home", "Services", "Projects", "About", "Contact"],
    toggle: "नेपाली",
  },
  nepali: {
    phone: "+९७७-९८७६५४३२१०",
    email: "info@prestigedesignbuilders.com",
    hours: "सोम - शुक्रबार: बिहान ८:०० - साँझ ७:००",
    nav: ["गृहपृष्ठ", "सेवाहरू", "परियोजनाहरू", "हाम्रो बारेमा", "सम्पर्क"],
    toggle: "English",
  },
};

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const t = content[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const sectionIds = ["home", "services", "projects", "about", "contact"];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Contact Bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-200">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-construction-orange" />
              <span>{t.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-construction-orange" />
              <span>{t.email}</span>
            </div>
          </div>
          <div className="text-construction-gray">{t.hours}</div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-construction-gray">
            <span className="text-construction-orange">{BRAND_NAME.split(" ")[0]}</span>{" "}
            {BRAND_NAME.split(" ").slice(1).join(" ")}
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            {t.nav.map((label, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(sectionIds[index])}
                className="text-construction-gray hover:text-construction-orange transition"
              >
                {label}
              </button>
            ))}

            {/* Language Toggle */}
            <button
              onClick={onLanguageChange}
              className="text-construction-orange border border-construction-orange px-3 py-1 rounded hover:bg-construction-orange hover:text-white transition"
            >
              {t.toggle}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {t.nav.map((label, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(sectionIds[index])}
                  className="text-left text-construction-gray hover:text-construction-orange"
                >
                  {label}
                </button>
              ))}

              {/* Mobile Language Toggle */}
              <button
                onClick={onLanguageChange}
                className="text-left text-construction-orange border border-construction-orange px-3 py-1 rounded hover:bg-construction-orange hover:text-white transition"
              >
                {t.toggle}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
