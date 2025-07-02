
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={toggleLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <Projects language={language} />
      <About language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
