import { AiFillPlayCircle } from "react-icons/ai";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";

export default function Controls() {
  return (
    <div className="bg-black text-[#b3b3b3] p-2.5 px-5 sticky bottom-0 flex justify-between items-center">
        
        {/* Song Info */}
        <div className="flex items-center gap-2.5 cursor-pointer transition-colors duration-300">
            <img id="songPic" src="./playing.gif" alt="gif" className="h-14 w-auto rounded-md" />
            <div className="songInfo flex flex-col justify-center gap-0.5">
                <span id="masterSongName" className="overflow-hidden text-ellipsis text-white text-sm">SongName</span>
                <span id="masterArtists" className="overflow-hidden text-ellipsis text-gray-400 text-sm hover:text-white">Artist</span>
            </div>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center w-[45%]">
            {/* Play, Previous, and Next Buttons */}
            <div className="flex justify-center items-center gap-1/5 mb-2.5">
                <i className="text-3xl cursor-pointer transition-colors duration-300 hover:text-white" id="next">
                    <BiSkipPrevious />
                </i>
                <i className="text-4xl cursor-pointer transition-colors duration-300 hover:text-white" id="masterPlay">
                    <AiFillPlayCircle />
                </i>
                <i className="text-3xl cursor-pointer transition-colors duration-300 hover:text-white" id="previous">
                    <BiSkipNext />
                </i>
            </div>

            {/* Progress Bar */}
            <div className="flex justify-center items-center w-full">
                <span className="text-sm">0:00</span>
                <input type="range" id="Progressbar" value="0" min="0" max="100" className="w-[80%] h-1.5 bg-[#b3b3b3] rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#1db954]" />
                <span className="text-sm">0:00</span>
            </div>
        </div>

        {/* Options (Placeholder) */}
        <div className="flex justify-around items-center w-[20%]">
            {/* Placeholder for additional options */}
            {/* <div id="unkown">Unkown</div>
            <div id="queue">Queue</div>
            <div id="connectToADevice">Connect to a device</div>
            <div id="volume">Volume</div> */}
        </div>

    </div>
  );
}
