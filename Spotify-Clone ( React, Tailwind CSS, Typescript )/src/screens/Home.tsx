import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import LeftBar from '../components/leftBar';
import Main from '../components/main';
import ControlsContainer from '../components/controls';
import NavBar from '../components/navBar';

import Mrama from '../assets/Songs/Mrama.mp3';
import ZamaKhkulay from '../assets/Songs/zama khkulay janaana.mp3';
import KhandaRata from '../assets/Songs/Khanda Rata Kawi.mp3';
import WoDeSedgeWazirey from '../assets/Songs/Wo De Sedge Wazirey.mp3';

import Cover1 from '../assets/Cover/1.jpg';
import Cover2 from '../assets/Cover/2.jpg';
import Cover3 from '../assets/Cover/3.jpg';

const Songs = [
  { songName: "Mrama de tande na", artist: "Wajid Layaq", filepath: Mrama, coverPath: Cover1, description: "Some description 1" },
  { songName: "Zama Khkulay janaana", artist: "Bilal Khatak, Ali Shah", filepath: ZamaKhkulay, coverPath: Cover1, description: "Some description 2" },
  { songName: "Khanda Rata Kawi", artist: "Wajid Layaq", filepath: KhandaRata, coverPath: Cover2, description: "Some description 3" },
  { songName: "Wo De Sedge Wazirey", artist: "Artist 4", filepath: WoDeSedgeWazirey, coverPath: Cover3, description: "Some description 4" },
];

export default function Home() {
  const [currentSong, setCurrentSong] = useState(Songs[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSongs = Songs.filter(song =>
    song.songName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-black text-white font-semibold min-h-screen flex flex-col w-full">
      {/* Top Navbar */}
      <NavBar
        onOpenSidebar={() => setIsSidebarOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Drawer for mobile sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col">
          <div className="flex justify-between items-center px-4 py-3 bg-[#121212]">
            <h2 className="text-lg">Menu</h2>
            <button onClick={() => setIsSidebarOpen(false)}>
              <FaTimes size={24} />
            </button>
          </div>
          <div className="overflow-y-auto flex-grow px-2 ">
            <LeftBar
              songs={filteredSongs}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
              searchQuery={searchQuery}
            />
          </div>
        </div>
      )}

      {/* Main layout for desktop */}
      <div className="hidden md:flex flex-row gap-4 px-4 py-2 flex-grow overflow-hidden">
        <div className="w-1/4">
          <LeftBar
            songs={filteredSongs}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            searchQuery={searchQuery}
          />
        </div>
        <div className="w-3/4">
          <Main
            songs={filteredSongs}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        </div>
      </div>

      {/* Main content for mobile */}
      <div className="block md:hidden px-4 py-2">
        <Main
          songs={filteredSongs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
      </div>

      {/* Controls at bottom */}
      <div className="sticky bottom-0 w-full z-20">
        <ControlsContainer
          songs={filteredSongs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
        />
      </div>
    </div>
  );
}
