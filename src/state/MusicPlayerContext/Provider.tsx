import React, { useState, useRef, useEffect } from "react";
import { MusicPlayerContext } from "./Context";
import { tracks } from "../../utils/general";

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.preload = "metadata";

    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current!.duration);
    });

    return () => {
      audioRef.current?.removeEventListener("loadedmetadata", () => {});
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.src = tracks[currentTrackIndex].src;
    audio.load();

    audio.oncanplay = () => {
      if (isPlaying) {
        audio.play().catch((err) => console.error("Error playing:", err));
      }
    };

    setCurrentTime(0);
  }, [currentTrackIndex, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => console.error("Error playing:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleEnded = () => {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
      setCurrentTime(0);
      setIsPlaying(true);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const changeTrack = (direction: "next" | "prev") => {
    setCurrentTrackIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % tracks.length;
      } else {
        return (prevIndex - 1 + tracks.length) % tracks.length;
      }
    });
    setCurrentTime(0);
  };

  const playTrack = (index: number) => {
    if (index !== currentTrackIndex) {
      setCurrentTrackIndex(index);
      setCurrentTime(0);
    }
    setIsPlaying(true);
  };

  const seek = (time: number) => {
    audioRef.current!.currentTime = time;
    setCurrentTime(time);
  };

  const stop = () => {
    const audio = audioRef.current!;
    audio.pause();
    audio.currentTime = 0;
    setCurrentTime(0);
    setIsPlaying(false);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        tracks,
        currentTrackIndex,
        isPlaying,
        currentTime,
        duration,
        togglePlay,
        changeTrack,
        playTrack,
        seek,
        stop,
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};