import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';


export default function NavBar({ onOpenSidebar, searchQuery, setSearchQuery }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      onOpenSidebar();
    }
  };

  return (
    <nav className="bg-black text-white px-4 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Left section */}
      <div className="flex items-center gap-4">
        {/* Hamburger for mobile */}
        <button className="md:hidden" onClick={handleMenuClick}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>

        {/* Spotify Logo or Home Icon */}
        <HiOutlineHome size={24} className="text-white" />
        <span className="hidden md:inline font-semibold text-lg">Spotify</span>
      </div>

      {/* Center: Search bar (visible on md+) */}
      <div className="hidden md:flex flex-1 max-w-md mx-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What do you want to play?"
          className="w-full px-4 py-2 rounded-full bg-[#2a2a2a] text-sm text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        <button className="hidden md:block text-sm hover:underline">Install App</button>
        <button className="hidden md:block text-sm font-bold hover:underline">Sign up</button>
        <button className="bg-white text-black text-sm font-semibold rounded-full px-4 py-1 hover:scale-105 transition">
          Log in
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#181818] text-white p-4 flex flex-col gap-4 md:hidden z-40">
          <button className="text-left text-sm hover:underline">Home</button>
          <button className="text-left text-sm hover:underline">Search</button>
          <button className="text-left text-sm hover:underline">Library</button>
          <button className="text-left text-sm hover:underline">Install App</button>
          <button className="text-left text-sm font-bold hover:underline">Sign up</button>
        </div>
      )}
    </nav>
  );
}
