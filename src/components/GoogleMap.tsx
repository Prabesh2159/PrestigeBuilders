
interface GoogleMapProps {
  language: "english" | "nepali";
}

const GoogleMap = ({ language }: GoogleMapProps) => {
  const content = {
    english: {
      title: "Our Location"
    },
    nepali: {
      title: "हाम्रो स्थान"
    }
  };

  const t = content[language];

  return (
    <div className="mt-8">
      <h4 className="text-lg font-semibold mb-4 text-white">{t.title}</h4>
      <div className="w-full h-64 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6939094042893!2d85.31682731506299!3d27.69767408279447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19968c0a5c05%3A0x7b8b4b0b7b8b4b0b!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Prestige Design & Builders Location"
        />
      </div>
    </div>
  );
};

export default GoogleMap;
