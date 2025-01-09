export default function LeftBar({ songs, currentSong, setCurrentSong }) {

    const sortedSongs = [currentSong, ...songs.filter(song => song !== currentSong)];

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
                    {sortedSongs.map((song, index) => (
                        <div 
                            key={index} 
                            className={`flex items-center p-2 cursor-pointer mb-2 hover:bg-[#223434] rounded-lg transition duration-300 ${
                                currentSong.songName === song.songName ? 'bg-[#333333]' : ''
                            }`}
                            onClick={() => setCurrentSong(song)} 
                        >
                            <img 
                                src={song.coverPath} 
                                alt={song.songName} 
                                className="w-12 h-12 mr-4 rounded-md" 
                            />
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
