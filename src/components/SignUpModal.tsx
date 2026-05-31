import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignUpModal = ({ isOpen, onClose }: SignUpModalProps) => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Firebase එකේ user create කරනවා
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      // නම save කරනවා
      await updateProfile(userCredential.user, {
        displayName: form.name
      });
      setSubmitted(true);
    } catch (err: unknown) {
      // Error messages සිංහලට translate කරනවා
      const code = (err as { code?: string }).code;
      if (code === 'auth/email-already-in-use') {
        setError('මෙම email එක දැනටමත් ලියාපදිංචි වී ඇත.');
      } else if (code === 'auth/weak-password') {
        setError('මුරපදය ඉතා කෙටියි. අවම වශයෙන් අකුරු 6ක් දාන්න.');
      } else if (code === 'auth/invalid-email') {
        setError('email ලිපිනය වලංගු නැත.');
      } else {
        setError('දෝෂයක් ඇතිවිය. නැවත උත්සාහ කරන්න.');
      }
    } finally {
      setLoading(false);
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
          // ✅ Success Screen
          <div className="text-center py-8 space-y-4">
            <div className="text-6xl text-green-500">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">ස්තූතියි, {form.name}!</h3>
            <p className="text-gray-500">ඔබව සාර්ථකව ලියාපදිංචි කරගනු ලැබීය.</p>
            <p className="text-sm text-indigo-600 font-medium">{form.email}</p>
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
            <div className="text-center mb-8">
              <div className="text-4xl text-indigo-600 mb-3">
                <i className="fas fa-user-plus"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">ගිණුමක් සාදන්න</h2>
              <p className="text-gray-500 text-sm mt-1">
                Gamage Marketing සමඟ ඔබේ ගමන ආරම්භ කරන්න
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl mb-5 flex items-center gap-2">
                <i className="fas fa-exclamation-circle"></i>
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
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
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
