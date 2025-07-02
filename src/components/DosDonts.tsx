
interface DosDontsProps {
  language: "english" | "nepali";
}

const DosDonts = ({ language }: DosDontsProps) => {
  const content = {
    english: {
      title: "Do's and Don'ts of Interior Design",
      subtitle: "Essential guidelines to create beautiful and functional spaces",
      dos: {
        title: "Do's",
        items: [
          "Plan your space layout before purchasing furniture",
          "Use natural light to enhance your rooms",
          "Choose a cohesive color scheme throughout",
          "Invest in quality pieces that will last",
          "Consider the function of each room",
          "Add personal touches and artwork",
          "Use mirrors to make spaces appear larger",
          "Ensure proper ventilation in all rooms"
        ]
      },
      donts: {
        title: "Don'ts",
        items: [
          "Don't overcrowd rooms with too much furniture",
          "Avoid using too many different patterns",
          "Don't ignore proper lighting needs",
          "Avoid purchasing furniture without measuring",
          "Don't follow trends blindly",
          "Avoid blocking natural light sources",
          "Don't neglect storage solutions",
          "Avoid using only overhead lighting"
        ]
      }
    },
    nepali: {
      title: "भित्री डिजाइनका गर्नुपर्ने र नगर्नुपर्ने कुराहरू",
      subtitle: "सुन्दर र कार्यात्मक स्थानहरू सिर्जना गर्न आवश्यक दिशानिर्देशहरू",
      dos: {
        title: "गर्नुपर्ने कुराहरू",
        items: [
          "फर्निचर किन्नु अघि आफ्नो स्थानको लेआउट योजना गर्नुहोस्",
          "आफ्ना कोठाहरूलाई बढाउन प्राकृतिक प्रकाश प्रयोग गर्नुहोस्",
          "भरिभरि सुसंगत रंग योजना छान्नुहोस्",
          "टिकाउ गुणस्तरका सामानहरूमा लगानी गर्नुहोस्",
          "प्रत्येक कोठाको कार्यलाई विचार गर्नुहोस्",
          "व्यक्तिगत स्पर्श र कलाकृति थप्नुहोस्",
          "ठाउँहरूलाई ठूलो देखाउन ऐना प्रयोग गर्नुहोस्",
          "सबै कोठाहरूमा उचित हावा चलाचल सुनिश्चित गर्नुहोस्"
        ]
      },
      donts: {
        title: "नगर्नुपर्ने कुराहरू",
        items: [
          "धेरै धेरै फर्निचरले कोठाहरूलाई भरिभराउ नगर्नुहोस्",
          "धेरै फरक ढाँचाहरू प्रयोग गर्नबाट बच्नुहोस्",
          "उचित प्रकाशको आवश्यकतालाई बेवास्ता नगर्नुहोस्",
          "नाप नगरी फर्निचर किन्नबाट बच्नुहोस्",
          "प्रचलनलाई आँखा छोपेर नपछ्याउनुहोस्",
          "प्राकृतिक प्रकाश स्रोतहरू रोक्नबाट बच्नुहोस्",
          "भण्डारण समाधानहरूलाई बेवास्ता नगर्नुहोस्",
          "केवल माथिको प्रकाश मात्र प्रयोग गर्नबाट बच्नुहोस्"
        ]
      }
    }
  };

  const t = content[language];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-gray mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-construction-steel max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Do's */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
              ✓ {t.dos.title}
            </h3>
            <ul className="space-y-3">
              {t.dos.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-500 text-xl">•</span>
                  <span className="text-construction-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
              ✗ {t.donts.title}
            </h3>
            <ul className="space-y-3">
              {t.donts.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">•</span>
                  <span className="text-construction-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DosDonts;
