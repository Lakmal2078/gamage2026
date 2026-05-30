import { useState } from 'react';

export const Reviews = () => {
  // පාරිභෝගිකයින්ගේ අදහස් ඇතුළත් Array එක
  const reviewsList = [
    {
      name: "සුපුන් ජයවර්ධන",
      role: "CEO, Jayasinghe Outfits",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      text: "Gamage Marketing කණ්ඩායම අපේ Clothing Business එකේ Social Media Campaigns කරන්න පටන් ගත්තට පස්සේ මාස 3ක් ඇතුළත අපේ Sales 200% කින් වැඩි වුණා! ඉතාමත් වගකීමෙන් වැඩ කරන කට්ටියක්."
    },
    {
      name: "දිල්ශානි පෙරේරා",
      role: "Founder, Glow & Care",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      text: "මගේ Online Cosmetics Shop එකට Premium වෙබ් සයිට් එකක් හදලා දුන්නේ මුන්. මාරම Speed වගේම Customersලට ලේසියෙන් බඩු ගන්න පුළුවන් විදිහට හදලා තියෙනවා. Highly recommended!"
    },
    {
      name: "කසුන් රාජපක්ෂ",
      role: "Managing Director, Apex Education",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      text: "අපේ ආයතනයට Google Ads සහ SEO සේවාවන් ලබා ගත්තේ මුන්ගෙන්. දැන් කිසිම වියදමක් නැතුව Google සර්ච් එකෙන් දිනපතාම අලුත් සතුටුදායක ශිෂ්‍යයින් අපව සොයාගෙන එනවා."
    }
  ];

  // දැනට පේන Review එකේ Index එක බලාගන්න State එක
  const [currentIndex, setCurrentIndex] = useState(0);

  // ඊළඟ Review එකට යන Function එක
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsList.length);
  };

  // කලින් Review එකට යන Function එක
  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviewsList.length) % reviewsList.length);
  };

  return (
    <section className="py-20 px-6 bg-white" id="reviews">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">අපේ සේවාදායකයින් පවසන දේ</h2>
          <p className="text-gray-600">Gamage Marketing සමඟ අත්වැල් බැඳගෙන තම ව්‍යාපාර සාර්ථක කරගත් ව්‍යවසායකයින්ගේ අත්දැකීම්.</p>
        </div>

        {/* Review Card Slider Box */}
        <div className="relative bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-3xl shadow-xl transition-all duration-500">
          
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-indigo-200 text-6xl opacity-50 font-serif">“</div>

          <div className="flex flex-col items-center text-center space-y-6">
            
            {/* Customer Image */}
            <img 
              src={reviewsList[currentIndex].image} 
              alt={reviewsList[currentIndex].name} 
              className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-md"
            />

            {/* Review Text */}
            <p className="text-lg md:text-xl text-gray-700 font-medium italic max-w-2xl leading-relaxed">
              "{reviewsList[currentIndex].text}"
            </p>

            {/* Customer Details */}
            <div>
              <h4 className="text-xl font-bold text-gray-900">{reviewsList[currentIndex].name}</h4>
              <span className="text-sm text-indigo-600 font-semibold">{reviewsList[currentIndex].role}</span>
            </div>

            {/* Stars */}
            <div className="text-yellow-400 flex space-x-1">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>

          </div>

          {/* Slider Navigation Buttons (වම් සහ දකුණු ඊතල) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-6">
            <button 
              onClick={prevReview}
              className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-100 text-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-6">
            <button 
              onClick={nextReview}
              className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-100 text-gray-700 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

        </div>

        {/* Slider Dots (යටින් තියෙන පොඩි බෝල 3) */}
        <div className="flex justify-center space-x-2 mt-6">
          {reviewsList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-indigo-600' : 'w-2.5 bg-gray-300'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

