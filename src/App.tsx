import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Calculator } from './components/Calculator';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SignUpModal } from './components/SignUpModal';

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800 relative overflow-x-hidden">
      <Navbar onSignUpClick={() => setIsSignUpOpen(true)} />
      <Hero />
      <Services />
      <Calculator />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />

      {/* Sign Up Modal */}
      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/94765865387"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all duration-300 z-[60] flex items-center justify-center text-3xl w-14 h-14 hover:scale-110 active:scale-95"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;
