import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Calculator } from './components/Calculator';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ'; // 1. FAQ එක Import කරා
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 relative">
      <Navbar /> 
      <Hero />
      <Services />
      <Calculator />
      <Reviews />

      {/* 4.8 නිතර අසන ප්‍රශ්න */}
      <FAQ />

      <Contact />
      <Footer />

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/94765865387" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-all z-50 flex items-center justify-center text-3xl w-14 h-14 hover:scale-110 duration-300"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;

