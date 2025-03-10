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

  /**
   * 1️⃣ Initialize audio player only once
   */
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.preload = "metadata"; // Load only metadata, not full track

    // Handle track metadata
    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current!.duration);
    });

    return () => {
      audioRef.current?.removeEventListener("loadedmetadata", () => {});
    };
  }, []);

  /**
   * 2️⃣ Change track when currentTrackIndex changes
   */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Abort previous track's loading if new one is selected
    audio.pause();
    audio.src = tracks[currentTrackIndex].src;
    audio.load(); // Start streaming instead of full loading

    // Start playing as soon as it's ready
    audio.oncanplay = () => {
      if (isPlaying) {
        audio.play().catch((err) => console.error("Error playing:", err));
      }
    };

    setCurrentTime(0);
  }, [currentTrackIndex, isPlaying]);

  /**
   * 3️⃣ Handle play/pause toggle
   */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => console.error("Error playing:", err));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  /**
   * 4️⃣ Track time changes & auto-next
   */
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

  // ✅ Streaming-based controls
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







// import React, { useState, useRef, useEffect } from "react";
// import { MusicPlayerContext } from "./Context";
// import { tracks } from "../../utils/general";

// export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   // const [trackList] = useState(tracks);
//   const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   const audioRef = useRef(new Audio(tracks[0].src));

//   /**
//    * 1) Change track src when currentTrackIndex changes.
//    *    If isPlaying is still true, auto-play the new track.
//    */
//   useEffect(() => {
//     const audio = audioRef.current;
//     audio.src = tracks[currentTrackIndex].src;
//     audio.currentTime = 0; // start each new track at 0 if you like

//     if (isPlaying) {
//       // If we were playing, continue playing
//       audio.play().catch((err) => console.error("Error playing:", err));
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentTrackIndex]);

//   /**
//    * 2) Toggle play/pause when isPlaying changes
//    */
//   useEffect(() => {
//     const audio = audioRef.current;
//     if (isPlaying) {
//       audio.play().catch((err) => console.error("Error playing:", err));
//     } else {
//       audio.pause();
//     }
//   }, [isPlaying]);

//   /**
//    * 3) Track time changes & handle track ended
//    *    - runs once on mount
//    */
//   useEffect(() => {
//     const audio = audioRef.current;

//     const updateTime = () => {
//       setCurrentTime(audio.currentTime);
//     };
//     const handleLoadedMetadata = () => {
//       setDuration(audio.duration);
//     };
//     const handleEnded = () => {
//       setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
//       setCurrentTime(0);
//       setIsPlaying(true);
//       // or auto next track:
//       // changeTrack("next");
//     };

//     audio.addEventListener("timeupdate", updateTime);
//     audio.addEventListener("loadedmetadata", handleLoadedMetadata);
//     audio.addEventListener("ended", handleEnded);

//     return () => {
//       audio.removeEventListener("timeupdate", updateTime);
//       audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
//       audio.removeEventListener("ended", handleEnded);
//     };
//   }, []);

//   // Basic controls
//   const togglePlay = () => {
//     setIsPlaying((prev) => !prev);
//   };

//   const changeTrack = (direction: "next" | "prev") => {
//     setCurrentTrackIndex((prevIndex) => {
//       if (direction === "next") {
//         return (prevIndex + 1) % tracks.length;
//       } else {
//         return (prevIndex - 1 + tracks.length) % tracks.length;
//       }
//     });
//     // No need to manually set isPlaying if you want to keep the same state.
//     // If you want to always play on next, do setIsPlaying(true) here.
//     setCurrentTime(0);
//   };

//   const playTrack = (index: number) => {
//     // If user picks a different track, reset time
//     if (index !== currentTrackIndex) {
//       setCurrentTrackIndex(index);
//       setCurrentTime(0);
//     }
//     setIsPlaying(true);
//   };

//   const seek = (time: number) => {
//     audioRef.current.currentTime = time;
//     setCurrentTime(time);
//   };

//   const stop = () => {
//     const audio = audioRef.current;
//     audio.pause(); // Stop playback
//     audio.currentTime = 0; // Reset to beginning
//     setCurrentTime(0);
//     setIsPlaying(false); // Ensure it stays stopped
//   };

//   return (
//     <MusicPlayerContext.Provider
//       value={{
//         tracks,
//         currentTrackIndex,
//         isPlaying,
//         currentTime,
//         duration,
//         togglePlay,
//         changeTrack,
//         playTrack,
//         seek,
//         stop,
//       }}
//     >
//       {children}
//     </MusicPlayerContext.Provider>
//   );
// };