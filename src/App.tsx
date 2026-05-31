import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Calculator } from './components/Calculator';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ'; 
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    // 1. මෙතැනට w-full සහ overflow-x-hidden එකතු කර ඇත
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Calculator />
      <Reviews />

      {/* නිතර අසන ප්‍රශ්න */}
      <FAQ />

      <Contact />
      <Footer />

      {/* WhatsApp Button (Fixed & Cleaned) */}
      <a
        href="https://wa.me/94765865387"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 flex items-center justify-center text-3xl w-14 h-14 hover:scale-110"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;

