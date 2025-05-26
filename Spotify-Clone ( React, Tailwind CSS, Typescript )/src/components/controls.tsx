import {
  AiFillPlayCircle,
  AiFillPauseCircle
} from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import { Song } from '../interface/songs.interface';

interface ControlsContainerProps {
  songs: Song[];
  currentSong: Song;
  setCurrentSong: (song: Song) => void;
}

export default function ControlsContainer({ currentSong, setCurrentSong, songs }: ControlsContainerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null); 
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
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) setProgress(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) audioRef.current.muted = !isMuted;
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
    <div className="bg-black text-[#b3b3b3] p-4 sticky bottom-0 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 sm:gap-2">
      
      {/* Song Info */}
      <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
        <img
          src={currentSong.coverPath}
          alt={currentSong.songName}
          className="h-14 w-14 rounded-md object-cover"
        />
        <div className="flex flex-col min-w-0">
          <span className="text-white text-sm truncate">{currentSong.songName}</span>
          <span className="text-gray-400 text-sm truncate hover:text-white">{currentSong.artist}</span>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex flex-col items-center w-full sm:w-[45%]">
        <div className="flex justify-center items-center gap-5 mb-2">
          <i className="text-3xl cursor-pointer hover:text-white" onClick={playPreviousSong}>
            <BiSkipPrevious />
          </i>
          <i className="text-4xl cursor-pointer hover:text-white" onClick={togglePlayPause}>
            {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
          </i>
          <i className="text-3xl cursor-pointer hover:text-white" onClick={playNextSong}>
            <BiSkipNext />
          </i>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center w-full gap-2">
          <span className="text-xs whitespace-nowrap">{Math.floor(progress / 60)}:{(progress % 60).toFixed(0).padStart(2, '0')}</span>
          <input
            type="range"
            value={progress}
            min="0"
            max={duration}
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.currentTime = parseFloat(e.target.value);
              }
            }}
            className="flex-grow h-1.5 bg-[#b3b3b3] rounded-lg cursor-pointer hover:bg-[#1db954]"
          />
          <span className="text-xs whitespace-nowrap">{Math.floor(duration / 60)}:{(duration % 60).toFixed(0).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Volume and Mute Controls */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-end">
        <button onClick={toggleMute} className="text-2xl cursor-pointer hover:text-white">
          {isMuted ? <FaVolumeXmark /> : <FaVolumeHigh />}
        </button>
        <input
          type="range"
          value={volume}
          min="0"
          max="1"
          step="0.01"
          onChange={handleVolumeChange}
          className="w-24 sm:w-28 h-1.5 bg-[#b3b3b3] rounded-lg cursor-pointer hover:bg-[#1db954]"
        />
      </div>

      {/* Hidden Audio Player */}
      <audio
        ref={audioRef}
        controls
        style={{ display: 'none' }}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleSongEnd}
      >
        <source src={currentSong.filepath} type="audio/mp3" />
      </audio>
    </div>
  );
}
