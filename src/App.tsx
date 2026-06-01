import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Calculator } from './components/Calculator';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SignUpModal } from './components/SignUpModal';
import { Dashboard } from './components/Dashboard';

function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Firebase auth state listen කරනවා
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Dark mode
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 relative overflow-x-hidden transition-colors duration-300">
      <Navbar
        onSignUpClick={() => user ? setIsDashboardOpen(true) : setIsSignUpOpen(true)}
        isDark={isDark}
        onDarkToggle={() => setIsDark(!isDark)}
        user={user}
      />
      <Hero />
      <Services />
      <Calculator />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />

      <SignUpModal
        isOpen={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />

      <Dashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />

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
