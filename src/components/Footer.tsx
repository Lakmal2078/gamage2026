
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div>
          <span className="text-xl font-bold text-white block mb-2">ගමගේ Marketing</span>
          <p className="text-sm text-gray-500">© 2026 Gamage Marketing. All rights reserved.</p>
        </div>

        {/* සෝෂල් මීඩියා ලින්ක්ස් */}
        <div className="flex space-x-6 text-xl">
          <a href="#" className="hover:text-white transition-colors"><i className="fab fa-facebook"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fab fa-instagram"></i></a>
          <a href="#" className="hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
        </div>

      </div>
    </footer>
  );
};

