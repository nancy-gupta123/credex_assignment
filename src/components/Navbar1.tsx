'use client';


import NavbarWithChat from '@/components/Navbar';
import { useTheme } from './ToggleEffect';


const Navbar = () => {
  
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 py-3 px-6 sm:px-20 z-50 ${
        isDark ? 'bg-gray-900 text-white' : 'bg-blue-800 text-white'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">SoftSell</div>

        {/* Centered Navigation Links */}
        <ul className="hidden sm:flex gap-6 list-none items-center absolute left-1/2 transform -translate-x-1/2">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Services</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded bg-white text-black hover:bg-gray-100 transition"
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>

          {/* Chat Button with Icon */}
          <div className="flex items-center">
            
            <NavbarWithChat />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
