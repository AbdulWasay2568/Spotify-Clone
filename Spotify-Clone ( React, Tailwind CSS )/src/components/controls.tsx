import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";

export default function ControlsContainer({ currentSong, setCurrentSong, songs }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    setProgress(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  const playNextSong = () => {
    const currentIndex = songs.findIndex(song => song === currentSong);
    const nextIndex = (currentIndex + 1) % songs.length; 
    setCurrentSong(songs[nextIndex]);
  };

  const playPreviousSong = () => {
    const currentIndex = songs.findIndex(song => song === currentSong);
    const prevIndex = (currentIndex - 1 + songs.length) % songs.length; 
    setCurrentSong(songs[prevIndex]);
  };

  const handleSongEnd = () => {
    playNextSong(); 
  };

  return (
    <div className="bg-black text-[#b3b3b3] p-2.5 px-5 sticky bottom-0 flex justify-between items-center">
      {/* Song Info */}
      <div className="flex items-center gap-2.5 cursor-pointer transition-colors duration-300">
        <img
          id="songPic"
          src={currentSong.coverPath}
          alt={currentSong.songName}
          className="h-14 w-auto rounded-md"
        />
        <div className="songInfo flex flex-col justify-center gap-0.5">
          <span id="masterSongName" className="overflow-hidden text-ellipsis text-white text-sm">
            {currentSong.songName}
          </span>
          <span id="masterArtists" className="overflow-hidden text-ellipsis text-gray-400 text-sm hover:text-white">
            {currentSong.artist}
          </span>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex flex-col items-center w-[45%]">
        <div className="flex justify-center items-center gap-5 mb-2.5">
          <i 
            className="text-3xl cursor-pointer transition-colors duration-300 hover:text-white" 
            id="previous" 
            onClick={playPreviousSong}>
            <BiSkipPrevious />
          </i>
          <i
            className="text-4xl cursor-pointer transition-colors duration-300 hover:text-white"
            id="masterPlay"
            onClick={togglePlayPause}
          >
            {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
          </i>
          <i 
            className="text-3xl cursor-pointer transition-colors duration-300 hover:text-white" 
            id="next" 
            onClick={playNextSong}>
            <BiSkipNext />
          </i>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center items-center w-full">
          <span className="text-sm">{Math.floor(progress / 60)}:{(progress % 60).toFixed(0).padStart(2, '0')}</span>
          <input
            type="range"
            id="Progressbar"
            value={progress}
            min="0"
            max={duration}
            onChange={(e) => (audioRef.current.currentTime = e.target.value)}
            className="w-[80%] h-1.5 bg-[#b3b3b3] rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#1db954]"
          />
          <span className="text-sm">{Math.floor(duration / 60)}:{(duration % 60).toFixed(0).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Volume and Mute Controls */}
      <div className="flex flex-col items-center gap-2">
        <button onClick={toggleMute} className="text-2xl cursor-pointer transition-colors duration-300 hover:text-white">
          {isMuted ? <FaVolumeXmark/> : <FaVolumeHigh/>}
        </button>
        <input
          type="range"
          value={volume}
          min="0"
          max="1"
          step="0.01"
          onChange={handleVolumeChange}
          className="w-24 h-1.5 bg-[#b3b3b3] rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#1db954]"
        />
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        controls
        style={{ display: 'none' }}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleSongEnd} 
      >
        <source src={currentSong.filepath} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
