import { useState } from 'react';

import Mrama from '../assets/Songs/Mrama.mp3';
import ZamaKhkulay from '../assets/Songs/zama khkulay janaana.mp3';
import KhandaRata from '../assets/Songs/Khanda Rata Kawi.mp3';
import WoDeSedgeWazirey from '../assets/Songs/Wo De Sedge Wazirey.mp3';
import HayyeOye from '../assets/Songs/4.mp3';
import DheereDheere from '../assets/Songs/5.mp3';
import Bekhayali from '../assets/Songs/6.mp3';
import Fakira from '../assets/Songs/7.mp3';
import JeeneLagaHu from '../assets/Songs/8.mp3';
import ZaraZara from '../assets/Songs/9.mp3';
import OMereSonaRe from '../assets/Songs/10.mp3';

import Cover1 from '../assets/Cover/1.jpg';
import Cover2 from '../assets/Cover/2.jpg';
import Cover3 from '../assets/Cover/3.jpg';
import Cover4 from '../assets/Cover/4.jpg';
import Cover5 from '../assets/Cover/5.jpg';
import Cover6 from '../assets/Cover/6.jpg';
import Cover7 from '../assets/Cover/7.jpg';
import Cover8 from '../assets/Cover/8.jpg';
import Cover9 from '../assets/Cover/9.jpg';
import Cover10 from '../assets/Cover/10.jpg';

const Songs = [
  { songName: "Mrama de tande na", artist: "Wajid Layaq", filepath: Mrama, coverPath: Cover1, description: "Some description 1" },
  { songName: "Zama Khkulay janaana", artist: "Bilal Khatak, Ali Shah", filepath: ZamaKhkulay, coverPath: Cover1, description: "Some description 2" },
  { songName: "Khanda Rata Kawi", artist: "Wajid Layaq", filepath: KhandaRata, coverPath: Cover2, description: "Some description 3" },
  { songName: "Wo De Sedge Wazirey", artist: "Artist 4", filepath: WoDeSedgeWazirey, coverPath: Cover3, description: "Some description 4" },
  { songName: "Hayye Oye", artist: "Artist 5", filepath: HayyeOye, coverPath: Cover4, description: "Some description 5" },
  { songName: "Dheere Dheere", artist: "Artist 6", filepath: DheereDheere, coverPath: Cover5, description: "Some description 6" },
  { songName: "Bekhayali", artist: "Artist 7", filepath: Bekhayali, coverPath: Cover6, description: "Some description 7" },
  { songName: "Fakira By Sanam", artist: "Artist 8", filepath: Fakira, coverPath: Cover7, description: "Some description 8" },
  { songName: "Jeene Laga Hu", artist: "Artist 9", filepath: JeeneLagaHu, coverPath: Cover8, description: "Some description 9" },
  { songName: "Zara Zara By Jalraj", artist: "Artist 10", filepath: ZaraZara, coverPath: Cover9, description: "Some description 10" },
  { songName: "O Mere Sona re", artist: "Artist 11", filepath: OMereSonaRe, coverPath: Cover10, description: "Some description 11" },
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
