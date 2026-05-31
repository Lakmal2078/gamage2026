export const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* වම් පැත්තේ තියෙන Text සහ Buttons */}
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            ඔබේ Brand එක<br />
            <span className="text-yellow-300">Digital Powerhouse</span> එකක් කරන්න
          </h1>
          <p className="text-xl mb-8 opacity-90">
            AI-driven marketing strategies, premium branding solutions, high-converting campaigns සහ modern digital experiences එක්ක ඔබේ
            business එක next level එකට ගෙන යන්න.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-center transition-all shadow-lg">
              ව්‍යාපෘතිය ආරම්භ කරන්න
            </a>
            <a href="#portfolio" className="bg-white/15 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/25 text-center transition-all">
              Portfolio බලන්න
            </a>
          </div>
        </div>

        {/* දකුණු පැත්තේ තියෙන පින්තූරය */}
        <div className="relative">
          <div className="bg-white p-2 rounded-2xl shadow-2xl">
            <img
              src="https://i.pinimg.com/1200x/85/02/fa/8502facbe28857e2a2df425d0776db2b.jpg"
              alt="Digital Marketing Professional Team"
              className="rounded-xl w-full"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold shadow-lg">
            +25% ROI
          </div>
        </div>

      </div>
    </section>
  );
};

