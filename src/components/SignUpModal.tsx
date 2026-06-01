import { useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignUpModal = ({ isOpen, onClose }: SignUpModalProps) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [userName, setUserName] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  // Email/Password Sign Up
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, form.email, form.password
      );
      await updateProfile(userCredential.user, {
        displayName: form.name
      });
      setUserName(form.name);
      setSubmitted(true);
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === 'auth/email-already-in-use') {
        setError('මෙම email එක දැනටමත් ලියාපදිංචි වී ඇත.');
      } else if (code === 'auth/weak-password') {
        setError('මුරපදය ඉතා කෙටියි. අවම වශයෙන් අකුරු 6ක්.');
      } else if (code === 'auth/invalid-email') {
        setError('email ලිපිනය වලංගු නැත.');
      } else {
        setError('දෝෂයක් ඇතිවිය. නැවත උත්සාහ කරන්න.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Google Sign In
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUserName(result.user.displayName || 'පරිශීලකයා');
      setSubmitted(true);
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === 'auth/popup-closed-by-user') {
        setError('Google login popup එක වසා දමන ලදී.');
      } else {
        setError('Google login අසාර්ථක විය. නැවත උත්සාහ කරන්න.');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl transition-colors cursor-pointer"
        >
          <i className="fas fa-times"></i>
        </button>

        {submitted ? (
          // Success Screen
          <div className="text-center py-8 space-y-4">
            <div className="text-6xl text-green-500">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              ස්තූතියි, {userName}!
            </h3>
            <p className="text-gray-500">
              ඔබව සාර්ථකව ලියාපදිංචි කරගනු ලැබීය.
            </p>
            <button
              onClick={onClose}
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl hover:bg-indigo-700 transition-all font-semibold"
            >
              ඉදිරියට යන්න
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="text-4xl text-indigo-600 mb-3">
                <i className="fas fa-user-plus"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                ගිණුමක් සාදන්න
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Gamage Marketing සමඟ ඔබේ ගමන ආරම්භ කරන්න
              </p>
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
              className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 text-gray-700 font-semibold py-3 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all mb-5 cursor-pointer disabled:opacity-60"
            >
              {googleLoading ? (
                <i className="fas fa-spinner fa-spin text-indigo-500"></i>
              ) : (
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5"
                />
              )}
              Google හරහා ලියාපදිංචි වන්න
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-sm">හෝ</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-5 flex items-center gap-2">
                <i className="fas fa-exclamation-circle"></i>
                {error}
              </div>
            )}

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  සම්පූර්ණ නම
                </label>
                <input
                  type="text" name="name" value={form.name}
                  onChange={handleChange} required
                  placeholder="ලක්මාල් ගමගේ"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  ඊමේල් ලිපිනය
                </label>
                <input
                  type="email" name="email" value={form.email}
                  onChange={handleChange} required
                  placeholder="example@gmail.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  මුරපදය
                </label>
                <input
                  type="password" name="password" value={form.password}
                  onChange={handleChange} required minLength={6}
                  placeholder="අවම වශයෙන් අකුරු 6ක්"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    ලියාපදිංචි වෙමින්...
                  </>
                ) : (
                  'ලියාපදිංචි වන්න'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
