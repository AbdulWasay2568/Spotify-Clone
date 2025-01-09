import { useState } from 'react';

import Mrama from './Songs/Mrama.mp3';
import ZamaKhkulay from './Songs/zama khkulay janaana.mp3';
import KhandaRata from './Songs/Khanda Rata Kawi.mp3';
import Cover1 from './Cover/1.jpg';
import Cover2 from './Cover/2.jpg';

const Songs = [
  { songName: "Mrama de tande na", artist: "Wajid Layaq", filepath: Mrama, coverPath: Cover1 },
  { songName: "Zama Khkulay janaana", artist: "Bilal Khatak, Ali Shah", filepath: ZamaKhkulay, coverPath: Cover1 },
  { songName: "Khanda Rata Kawi", artist: "Wajid Layaq", filepath: KhandaRata, coverPath: Cover2 },
];

export default function Main() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4">
      {/* Category Section */}
      <div className="flex flex-wrap gap-4 mb-4">
        <button className="px-4 py-2 bg-[#6c5ce7] rounded">All</button>
        <button className="px-4 py-2 bg-[#6c5ce7] rounded">Music</button>
      </div>

      {/* Songs Section */}
      <div>
        {['Recently Played', 'Made For Client'].map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 className="text-xl font-semibold mb-2">{section}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Songs.map((song, index) => (
                <div
                  key={index}
                  className={`cursor-pointer hover:bg-[#222222] p-2 rounded transition ${
                    currentSongIndex === index ? 'bg-[#333333]' : ''
                  }`}
                  onClick={() => setCurrentSongIndex(index)}
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
