
export const Contact = () => {
  return (
    <section className="py-20 px-6 bg-white" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* වම් පැත්ත: විස්තර සහ Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            අපි ඔබේ ව්‍යාපාරය <br />
            <span className="text-indigo-600">ඊළඟ මට්ටමට</span> ගෙන යමු!
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            ඔබේ අදහස් සහ අවශ්‍යතා අපට පවසන්න. අපගේ විශේෂඥ කණ්ඩායම ඉතා කෙටි කලකින් ඔබව සම්බන්ධ කරගනු ඇත.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 text-xl">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <span className="text-sm text-gray-400 block">ඇමතුම් ලබාගැනීමට</span>
                <a href="tel:+94765865387" className="font-semibold text-gray-800 hover:text-indigo-600">+94 76 586 5387</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 text-xl">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <span className="text-sm text-gray-400 block">ඊමේල් ලිපිනය</span>
                <a href="mailto:lakmalvidanagamage25@gmail.com" className="font-semibold text-gray-800 hover:text-indigo-600">lakmalvidanagamage25@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* දකුණු පැත්ත: Formspree Contact Form එක */}
        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-xl">
          <form action="https://formspree.io/f/mkoeqqpn" method="POST" className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">ඔබේ නම</label>
              <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" placeholder="ලක්මාල් ගමගේ" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">ඊමේල් ලිපිනය</label>
              <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" placeholder="lakmal@example.com" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">ඔබේ පණිවිඩය</label>
              <textarea name="message" rows={4} required className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white" placeholder="ඔබට අවශ්‍ය දේ මෙතන ලියන්න..."></textarea>
            </div>

            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
              පණිවිඩය යොමු කරන්න
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

