import React, { useState, useEffect, useRef } from "react";
import { FaPause, FaPlay } from 'react-icons/fa';
import { BsFillPlayFill } from 'react-icons/bs';
import Volume from "../images/Volume.svg";
import Shuffle from "../images/Shuffle.svg";
import Repeat from "../images/Repeat.svg";

const Audio = ({ selectedSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Function to play audio
  const playAudio = () => {
    if (audioRef.current.paused) {
      audioRef.current.play().catch((error) => {
        console.error('Failed to play audio:', error);
      });
    }
  };

  // Function to pause audio
  const pauseAudio = () => {
    if (!audioRef.current.paused) {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;

    if (isPlaying) {
      playAudio(); // Play audio when isPlaying is true
    } else {
      pauseAudio(); // Pause audio when isPlaying is false
    }
  }, [isPlaying, volume]);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume;

    // Load audio metadata and set duration
    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current.duration);
    });

    // Update current time while playing
    const updateCurrentTime = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    // Add and remove event listeners for time updates
    audioRef.current.addEventListener("timeupdate", updateCurrentTime);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateCurrentTime);
    };
  }, [volume]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  const handleProgressBarChange = (event) => {
    const newTime = parseFloat(event.target.value) * duration;
    audioRef.current.currentTime = newTime;
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };


  return (
    <div className="Audio">
      {selectedSong ? (
        <div className="audio-content">
          <img
            src={selectedSong.album.images[0].url}
            alt={selectedSong.name}
            width="100"
            height="100"
            className="audio-image"
          />
          <div className="flex justify-between items-center">
            <div className="pt-9 pl-[18px]">
              <h3 className="text-secondary text-left m-auto flex justify-start text-lg font-custom-weight">
                {selectedSong.name}
              </h3>
              <div className="block text-secondary-4 text-lg font-custom-weight">
                {selectedSong.artists[0].name}
              </div>
            </div>
            <div className="flex gap-custom-gap-7">
              <div>
                <img src={Shuffle} />
              </div>
              <audio
                ref={audioRef}
                src={selectedSong.preview_url}
                preload="auto" // Load audio metadata as soon as possible
                onLoadedMetadata={(e) => {
                  setDuration(e.currentTarget.duration);
                }}
                onPlaying={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              <button onClick={togglePlayPause}>
                {isPlaying ? (
                  <div className="bg-secondary-8 w-12 h-12 rounded-full flex justify-center items-center">
                    <FaPause className="text-black text-[20px]" />
                  </div>
                ) : (
                  <div className="bg-secondary-8 w-12 h-12 rounded-full flex justify-center items-center">
                    <BsFillPlayFill className="text-black text-[30px]" />
                  </div>
                )}
              </button>
              <div>
                <img src={Repeat} />
              </div>
            </div>
            <div className="flex pr-[63px] gap-1.5">
              <img src={Volume} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                className="volume-control"
                onChange={handleVolumeChange}
              />
            </div>
          </div>
          <div className="flex items-center justify-center pb-[26px] gap-2 cursor-pointer pr-[60px]">
            <span>{formatTime(currentTime)}</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={currentTime / duration || 0}
              className="progress-bar w-[552px] cursor-pointer"
              onChange={handleProgressBarChange}
            />

            <span>{formatTime(duration)}</span>
          </div>
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default Audio;
