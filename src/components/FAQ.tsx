import { useState } from 'react';

export const FAQ = () => {
  // නිතර අසන ප්‍රශ්න සහ උත්තර ඇතුළත් Array එක
  const faqList = [
    {
      question: "වෙබ් අඩවියක් නිර්මාණය කිරීමට කොපමණ කාලයක් ගතවේද?",
      answer: "සාමාන්‍යයෙන් සරල Landing Page එකක් හෝ Business වෙබ් අඩවියක් දින 5-10ක් ඇතුළත සම්පූර්ණයෙන් නිම කර දිය හැක. නමුත් එහි අඩංගු වන විශේෂාංග (Features) අනුව කාලය මීට වඩා වෙනස් විය හැක."
    },
    {
      question: "වැඩේ ආරම්භ කිරීමට පෙර අත්තිකාරම් මුදලක් (Advance) ගෙවිය යුතුද?",
      answer: "ඔව්, ව්‍යාපෘතිය නිල වශයෙන් ආරම්භ කිරීමට පෙර ඇස්තමේන්තුගත මුදලින් 50%ක අත්තිකාරම් මුදලක් අය කරනු ලැබේ. ඉතිරි 50% ව්‍යාපෘතිය සම්පූර්ණයෙන්ම නිම කර ඔබට බාර දෙන අවස්ථාවේදී ගෙවිය හැක."
    },
    {
      question: "වෙබ් අඩවිය නිර්මාණය කිරීමෙන් පසු මටම එය වෙනස් කරගත හැකිද?",
      answer: "අනිවාර්යයෙන්ම පුළුවන්. අපි වෙබ් අඩවිය නිම කිරීමෙන් පසු, ඔබට ඉතාම ලේසියෙන් text සහ images වෙනස් කරගන්නා ආකාරය පිළිබඳව නොමිලේම වීඩියෝ මාර්ගෝපදේශයක් (Video Guide) ලබා දෙනවා."
    },
    {
      question: "ඔබේ සේවාවන් සඳහා මාසිකව ගාස්තු අය කෙරේද?",
      answer: "වෙබ් අඩවි නිර්මාණය සහ Branding සඳහා අය කරන්නේ එක් වරක් පමණි (One-time fee). නමුත් Social Media Marketing (SMM) සහ SEO වැනි සේවාවන් සඳහා මාසිකව (Monthly Retainer) ගාස්තුවක් අය කරනු ලැබේ."
    }
  ];

  // දැනට open වෙලා තියෙන ප්‍රශ්නයේ Index එක තියාගන්න State එක (කිසිවක් open නැත්නම් null)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Accordion එක toggle කරන function එක
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-50" id="faq">
      <div className="max-w-3xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">නිතර අසන ප්‍රශ්න (FAQ)</h2>
          <p className="text-gray-600">අපගේ සේවාවන් සම්බන්ධයෙන් ඔබට ඇති විය හැකි පොදු ගැටළු කිහිපයකට පිළිතුරු.</p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              >
                {/* ප්‍රශ්නය තියෙන තීරුව (Header) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-bold text-gray-800 hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  <span className="text-base md:text-lg">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-600' : 'text-gray-400'}`}>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </button>

                {/* පිළිතුර (Content) - Open නම් පමණක් පේන විදිහට */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-48 border-t border-gray-50' : 'max-h-0'}`}
                >
                  <p className="p-6 text-gray-600 leading-relaxed bg-gray-50/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

