import React from 'react';

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

export default function LeftBar() {
    return (
        <div className="bg-black text-white font-semibold min-h-screen flex flex-col">
            <div className="flex justify-between px-4 py-2 sticky top-0 bg-[#121212] rounded-lg">
                <div className="text-white cursor-pointer">Home</div>
                <div className="text-gray-500 cursor-pointer hover:text-white transition duration-300">Search</div>
            </div>

            <div className="bg-[#121212] rounded-lg mx-1 mt-2 flex flex-col gap-4">
                <div className="flex justify-between items-center px-4 py-2">
                    <div className="text-gray-500 cursor-pointer hover:text-white transition duration-300">Your Library</div>
                    <button className="bg-transparent text-gray-500 cursor-pointer hover:bg-[#223434] hover:text-white rounded-full p-2 text-2xl">+</button>
                </div>

                <div className="flex gap-4 mb-4 px-4">
                    <button className="bg-[#223434] text-white rounded-xl py-1 px-4">Playlists</button>
                    <button className="bg-[#223434] text-white rounded-xl py-1 px-4">Artists</button>
                </div>

                <div className="flex justify-between px-4 py-2">
                    <div className="text-gray-500 cursor-pointer hover:text-white transition duration-300">Search</div>
                    <div className="text-gray-500 cursor-pointer hover:text-white transition duration-300">Recents</div>
                </div>

                <div className="px-4 pb-4">
                    {Songs.map((song, index) => (
                        <div key={index} className="flex items-center p-2 cursor-pointer mb-2 hover:bg-[#223434] rounded-lg transition duration-300">
                            <img src={song.coverPath} alt={song.songName} className="w-12 h-12 mr-4 rounded-md" />
                            <div className="flex flex-col">
                                <p className="overflow-hidden text-ellipsis">{song.songName}</p>
                                <p className="text-gray-500 text-sm">{song.artist}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
