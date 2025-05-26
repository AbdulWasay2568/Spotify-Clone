import { Song } from '../interface/songs.interface'

interface mainProps {
  songs: Song[];
  currentSong: Song;
  setCurrentSong: (song: Song) => void;
}
export default function Main({ songs, currentSong, setCurrentSong } :mainProps) {
  return (
    <div className="min-h-screen bg-[#121212] text-white p-4">
      {/* Category Section */}
      <div className="flex flex-wrap gap-4 mb-4">
        <button className="bg-[#223434] text-white rounded-xl py-1 px-4">All</button>
        <button className="bg-[#223434] text-white rounded-xl py-1 px-4">Music</button>
      </div>

      {/* Songs Section */}
      <div>
        {['Recently Played'].map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{section}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {songs.map((song, index) => (
                <div
                  key={index}
                  className={`cursor-pointer hover:bg-[#222222] p-2 rounded transition ${
                    currentSong.songName === song.songName ? 'bg-[#333333]' : ''
                  }`}
                  onClick={() => setCurrentSong(song)}
                >
                  <img
                    src={song.coverPath}
                    alt="Song Cover"
                    className="w-full h-40 object-cover rounded mb-2"
                  />
                  <p className="text-lg font-medium truncate">{song.songName}</p>
                  <p className="text-sm text-gray-400 truncate">{song.artist}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
