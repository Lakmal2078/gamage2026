import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

interface DashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Dashboard = ({ isOpen, onClose }: DashboardProps) => {
  const user = auth.currentUser;

  if (!isOpen || !user) return null;

  const handleSignOut = async () => {
    await signOut(auth);
    onClose();
  };

  const createdAt = user.metadata.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString('si-LK')
    : 'නොදනී';

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-md p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-xl cursor-pointer"
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4 overflow-hidden">
            {user.photoURL ? (
              <img src={user.photoURL} alt="profile" className="w-full h-full object-cover" />
            ) : (
              <i className="fas fa-user text-3xl text-indigo-600"></i>
            )}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {user.displayName || 'පරිශීලකයා'}
          </h2>
          <p className="text-indigo-600 text-sm mt-1">{user.email}</p>
        </div>

        {/* Info Cards */}
        <div className="space-y-3 mb-8">
          <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-indigo-600">
              <i className="fas fa-calendar"></i>
            </div>
            <div>
              <span className="text-xs text-gray-400 block">ලියාපදිංචි වූ දිනය</span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">{createdAt}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center text-green-600">
              <i className="fas fa-check-circle"></i>
            </div>
            <div>
              <span className="text-xs text-gray-400 block">ගිණුම් තත්වය</span>
              <span className="font-semibold text-green-600">සක්‍රීයයි (Active)</span>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div>
              <span className="text-xs text-gray-400 block">Login ක්‍රමය</span>
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {user.providerData[0]?.providerId === 'google.com' ? 'Google Account' : 'Email & Password'}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <a
            href="#services"
            onClick={onClose}
            className="bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-semibold py-3 rounded-xl text-center hover:bg-indigo-100 transition-all text-sm"
          >
            <i className="fas fa-briefcase mr-2"></i>සේවා
          </a>
          <a
            href="#calculator"
            onClick={onClose}
            className="bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-semibold py-3 rounded-xl text-center hover:bg-indigo-100 transition-all text-sm"
          >
            <i className="fas fa-calculator mr-2"></i>කැල්කියුලේටරය
          </a>
        </div>

        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <i className="fas fa-sign-out-alt"></i>
          Sign Out
        </button>
      </div>
    </div>
  );
};
