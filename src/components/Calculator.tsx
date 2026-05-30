import React, { useState } from 'react';

export const Calculator = () => {
  // සේවාවන් සහ ඒවායේ මිල ගණන් (LKR)
  const [services, setServices] = useState({
    smm: false,      // Social Media Marketing (50,000 LKR)
    web: false,      // Web Development (75,000 LKR)
    branding: false, // Branding (40,000 LKR)
    seo: false       // SEO (35,000 LKR)
  });

  // Pages ගණන සහ එක පිටුවක මිල (10,000 LKR)
  const [pages, setPages] = useState(1);

  // Discount එකක් (උදා: 10%)
  const discountRate = 0.10;

  // මුළු මුදල ගණනය කිරීම (Calculation Logic)
  let subtotal = 0;
  if (services.smm) subtotal += 50000;
  if (services.web) {
    subtotal += 75000;
    subtotal += (pages - 1) * 10000; // ප්‍රධාන පිටුවට අමතරව හැම පිටුවකටම 10,000 ගානේ
  }
  if (services.branding) subtotal += 40000;
  if (services.seo) subtotal += 35000;

  const discount = subtotal > 100000 ? subtotal * discountRate : 0;
  const total = subtotal - discount;

  // Checkbox එකක් ක්ලික් කරාම state එක මාරු කරන function එක
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setServices(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <section className="py-20 px-6 bg-gray-50" id="calculator">
      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ක්ෂණික මිල ගණන් කැල්කියුලේටරය</h2>
          <p className="text-gray-600">ඔබට අවශ්‍ය සේවාවන් තෝරා ඇස්තමේන්තුගත මුදල (Estimated Quote) ක්ෂණිකව ලබාගන්න.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          
          {/* වම් පැත්ත: Options තෝරන තැන */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 border-b pb-3 border-gray-100">අවශ්‍ය සේවා තෝරන්න:</h3>
            
            <label className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 hover:bg-indigo-50/30 cursor-pointer transition-all">
              <input type="checkbox" name="smm" checked={services.smm} onChange={handleCheckboxChange} className="w-5 h-5 accent-indigo-600" />
              <div>
                <span className="font-semibold block text-gray-800">Social Media Marketing</span>
                <span className="text-sm text-gray-500">රු. 50,000 / මසකට</span>
              </div>
            </label>

            <label className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 hover:bg-indigo-50/30 cursor-pointer transition-all">
              <input type="checkbox" name="web" checked={services.web} onChange={handleCheckboxChange} className="w-5 h-5 accent-indigo-600" />
              <div>
                <span className="font-semibold block text-gray-800">Premium Web Development</span>
                <span className="text-sm text-gray-500">රු. 75,000 සිට</span>
              </div>
            </label>

            {/* වෙබ් සයිට් එක සිලෙක්ට් කරොත් විතරක් පේන Pages ගණන තෝරන Slider එක */}
            {services.web && (
              <div className="p-4 bg-indigo-50/50 rounded-xl space-y-3 animate-fade-in">
                <div className="flex justify-between text-sm font-semibold text-gray-700">
                  <span>අවශ්‍ය වෙබ් පිටු ගණන (Web Pages):</span>
                  <span className="text-indigo-600 font-bold">{pages} Pages</span>
                </div>
                <input type="range" min="1" max="10" value={pages} onChange={(e) => setPages(Number(e.target.value))} className="w-full accent-indigo-600" />
              </div>
            )}

            <label className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 hover:bg-indigo-50/30 cursor-pointer transition-all">
              <input type="checkbox" name="branding" checked={services.branding} onChange={handleCheckboxChange} className="w-5 h-5 accent-indigo-600" />
              <div>
                <span className="font-semibold block text-gray-800">Brand Identity & Design</span>
                <span className="text-sm text-gray-500">රු. 40,000</span>
              </div>
            </label>

            <label className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 hover:bg-indigo-50/30 cursor-pointer transition-all">
              <input type="checkbox" name="seo" checked={services.seo} onChange={handleCheckboxChange} className="w-5 h-5 accent-indigo-600" />
              <div>
                <span className="font-semibold block text-gray-800">SEO Optimization</span>
                <span className="text-sm text-gray-500">රු. 35,000</span>
              </div>
            </label>
          </div>

          {/* දකුණු පැත්ත: Invoice එක පේන තැන */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl flex flex-col justify-between shadow-inner">
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-400 border-b border-gray-800 pb-3">මිල ගණන් විස්තරය</h3>
              
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>එකතුව (Subtotal):</span>
                  <span className="text-white font-semibold">රු. {subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-400 font-medium">
                    <span>විශේෂ වට්ටම (10% Bonus Discount):</span>
                    <span>- රු. {discount.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 mt-6">
              <div className="flex justify-between items-baseline mb-6">
                <span className="text-gray-400 font-medium">ඇස්තමේන්තුගත එකතුව:</span>
                <span className="text-3xl font-extrabold text-yellow-400">රු. {total.toLocaleString()}</span>
              </div>
              
              <a href="#contact" className="block w-full text-center bg-indigo-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
                මෙම මිල ගණනට වෙන්කරවා ගන්න
              </a>
              <p className="text-center text-xs text-gray-500 mt-3">*මෙය ස්වයංක්‍රීයව ගණනය වූවකි. අවසාන මිල වෙනස් විය හැක.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

