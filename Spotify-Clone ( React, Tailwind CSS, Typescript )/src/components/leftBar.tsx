import { Song } from '../interface/songs.interface';

interface LeftBarProps {
  songs: Song[];
  currentSong: Song;
  setCurrentSong: (song: Song) => void;
}

export default function LeftBar({ songs, currentSong, setCurrentSong }: LeftBarProps) {
  const sortedSongs = [currentSong, ...songs.filter(song => song !== currentSong)];

  return (
    <div className="bg-black text-white font-semibold flex flex-col w-full sm:w-64 lg:w-80 h-full">
      {/* Header */}

      {/* Library Section */}
      <div className="bg-[#121212] rounded-lg mx-2 mt-2 flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-64px)]">
        {/* Library Header */}
        <div className="flex justify-between items-center px-4 py-3">
          <div className="text-gray-500 cursor-pointer hover:text-white transition duration-300 text-base">Your Library</div>
          <button className="bg-transparent text-gray-500 hover:text-white hover:bg-[#223434] rounded-full p-2 text-xl sm:text-2xl">+</button>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 px-4">
          <button className="bg-[#223434] text-white rounded-xl py-1 px-3 text-sm sm:text-base">Playlists</button>
          <button className="bg-[#223434] text-white rounded-xl py-1 px-3 text-sm sm:text-base">Artists</button>
        </div>

        {/* Search + Recents */}
        <div className="flex justify-between px-4 py-2">
          <div className="text-gray-500 hover:text-white transition duration-300 text-sm sm:text-base cursor-pointer">Search</div>
          <div className="text-gray-500 hover:text-white transition duration-300 text-sm sm:text-base cursor-pointer">Recents</div>
        </div>

        {/* Songs List */}
        <div className="px-4 pb-4 overflow-y-auto max-h-[calc(100vh-64px-150px)] scrollbar-thin">
          {sortedSongs.map((song, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-2 mb-2 cursor-pointer rounded-lg hover:bg-[#223434] transition duration-300 ${
                currentSong.songName === song.songName ? 'bg-[#333333]' : ''
              }`}
              onClick={() => setCurrentSong(song)}
            >
              <img
                src={song.coverPath}
                alt={song.songName}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover"
              />
              <div className="flex flex-col overflow-hidden">
                <p className="truncate text-sm sm:text-base">{song.songName}</p>
                <p className="text-gray-500 text-xs sm:text-sm truncate">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
