import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';

type NavBarProps = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
};

export default function NavBar({ searchQuery, setSearchQuery }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);

  };

  return (
    <nav className="bg-black text-white px-4 py-3 flex flex-wrap items-center justify-between gap-2 sticky top-0 z-50">
      {/* Left section: Menu + Logo */}
      <div className="flex items-center gap-4">
        <button className="md:hidden" onClick={handleMenuClick}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
        <HiOutlineHome size={24} className="text-white" />
        <span className="hidden md:inline font-semibold text-lg">Spotify</span>
      </div>

      {/* Search bar (inline on all screens) */}
      <div className="flex-1 min-w-[150px] max-w-md mx-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="What do you want to play?"
          className="w-full px-4 py-2 rounded-full bg-[#2a2a2a] text-sm text-white placeholder-gray-400 focus:outline-none"
        />
      </div>

      {/* Right section (hidden in mobile, shown in sidebar) */}
      <div className="hidden md:flex items-center gap-4">
        <button className="text-sm hover:underline">Install App</button>
        <button className="text-sm font-bold hover:underline">Sign up</button>
        <button className="bg-white text-black text-sm font-semibold rounded-full px-4 py-1 hover:scale-105 transition">
          Log in
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="flex flex-col gap-4 md:hidden bg-[#181818] text-white p-4 w-full z-40">
          <button className="text-left text-sm hover:underline">Home</button>
          <button className="text-left text-sm hover:underline">Library</button>
          <button className="text-left text-sm hover:underline">Install App</button>
          <button className="text-left text-sm font-bold hover:underline">Sign up</button>
          <button className="bg-white text-black text-sm font-semibold rounded-full px-4 py-1 hover:scale-105 transition">
            Log in
          </button>
        </div>
      )}
    </nav>
  );
}
