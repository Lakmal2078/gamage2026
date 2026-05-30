
export const Services = () => {
  // අපේ සේවාවන් ටික මෙතන Array එකක් විදිහට තියෙනවා
  const servicesList = [
    {
      title: "Social Media Marketing",
      icon: "fa-bullhorn",
      desc: "Facebook, Instagram, TikTok සහ YouTube හරහා ඔබේ ව්‍යාපාරයට ගැළපෙනම පාරිභෝගිකයින් ආකර්ෂණය කර දීම."
    },
    {
      title: "Premium Web Development",
      icon: "fa-code",
      desc: "Vite, React වැනි modern තාක්ෂණයන් පාවිච්චි කරලා වේගවත්, ලස්සන සහ Mobile-friendly වෙබ් අඩවි නිර්මාණය."
    },
    {
      title: "Brand Identity & Design",
      icon: "fa-palette",
      desc: "ඔබේ ව්‍යාපාරයට අනන්‍ය වූ Premium Logos, Graphics සහ සම්පූර්ණ Branding Solutions ලබා දීම."
    },
    {
      title: "SEO Optimization",
      icon: "fa-magnifying-glass",
      desc: "Google සර්ච් එකේ ඔබේ වෙබ් අඩවිය උඩටම (Top Rank) ගෙනැවිත් නොමිලේම Clientsලා ලබා දීමේ ක්‍රමවේදය."
    },
    {
      title: "Business Growth Strategy",
      icon: "fa-chart-line",
      desc: "Advanced AI tools සහ Data-driven marketing හරහා කෙටි කලකින් ඔබේ විකුණුම් (Sales) වැඩි දියුණු කිරීම."
    },
    {
      title: "Content Creation",
      icon: "fa-video",
      desc: "සන්නාමය (Brand) ප්‍රචලිත කිරීම සඳහා උසස් තත්වයේ Copywriting, Photoshoots සහ High-converting Videos නිර්මාණය."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        
        {/* Section හිසින්න (Header) */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            අපෙන් ඔබට ලැබෙන Premium සේවා
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ඔබේ ව්‍යාපාරය ඩිජිටල් අවකාශය තුළ සාර්ථක කරවීම සඳහා අවශ්‍ය සියලුම සේවාවන් එකම වහලක් යටින්.
          </p>
        </div>

        {/* Services Cards Grid එක */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="border border-gray-100 bg-gray-50/50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Icon එක */}
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                <i className={`fas ${service.icon} text-2xl text-indigo-600 group-hover:text-white transition-colors duration-300`}></i>
              </div>
              
              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

