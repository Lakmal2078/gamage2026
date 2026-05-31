interface NavbarProps {
  onSignUpClick: () => void;
}

export const Navbar = ({ onSignUpClick }: NavbarProps) => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        ගමගේ Marketing
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#services" className="hover:text-indigo-600 transition-colors font-medium">සේවා</a>
        <a href="#calculator" className="hover:text-indigo-600 transition-colors font-medium">මිල ගණන් කැල්කියුලේටරය</a>
        <a href="#portfolio" className="hover:text-indigo-600 transition-colors font-medium">Portfolio</a>
        <a href="#contact" className="hover:text-indigo-600 transition-colors font-medium">සම්බන්ධ වන්න</a>
      </div>
      <button
        onClick={onSignUpClick}
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold cursor-pointer"
      >
        Sign Up
      </button>
    </nav>
  );
};
