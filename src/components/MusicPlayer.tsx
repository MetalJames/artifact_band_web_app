import { useState } from "react";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { ArtifactLogo } from "../assets";
import { useMusicPlayer } from "../state/MusicPlayerContext/useMusicPlayer";
import { GoToTop } from "./GoToTop";

function formatTime(timeInSeconds: number) {
    if (!timeInSeconds || timeInSeconds < 0) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

export const MusicPlayer = () => {
    const {
        tracks,
        currentTrackIndex,
        isPlaying,
        currentTime,
        duration,
        togglePlay,
        changeTrack,
        seek,
    } = useMusicPlayer();

    const [isHidden, setIsHidden] = useState(true);

    const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(event.target.value);
        seek(newTime);
    };

    return (
        <>
        <GoToTop isHidden={!isHidden} />
            <div
                className={` 
                    fixed bottom-0 left-0 w-full bg-black bg-opacity-90 text-white 
                    sm:px-6 px-2 transition-transform duration-300 z-[40]
                    ${isHidden ? "translate-y-[calc(100%-40px)] bg-transparent" : "translate-y-0"}
                `}
            >
                <div className="flex justify-end sm:pr-4 pr-0">
                    <button
                        onClick={() => setIsHidden(!isHidden)}
                        className="bg-gray-700 lg:hover:bg-gray-800 px-5 sm:px-3 py-2 sm:py-1 rounded-t mt-1 text-sm mb-2 transition cursor-pointer"
                        aria-label={isHidden ? "Show music player" : "Hide music player"}
                    >
                        {isHidden ? "▲ Show Player" : "▼ Hide Player"}
                    </button>
                </div>

                <div className={`pb-4 px-4 flex flex-col gap-2 transition-opacity duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}>
                    <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between">
                        <div className="flex items-center">
                            <img
                                src={ArtifactLogo}
                                alt="Artifact Logo"
                                className="h-[3.3rem] sm:h-[4rem] mr-4 flex-shrink-0"
                            />
                            <span className="text-lg font-semibold text-gray-200">
                                <span className="hidden sm:inline">🎵 </span>
                                <span className="text-red-500">Artifact</span> - {tracks[currentTrackIndex]?.title} 
                                <br className="block sm:hidden"/>
                                <span className="text-gray-400 text-sm ml-2">(Album: {tracks[currentTrackIndex]?.album})</span>
                            </span>
                        </div>
                        <div className="flex items-center gap-4 my-4 sm:my-0">
                            <button onClick={() => changeTrack("prev")} aria-label="Previous track">
                                <SkipBack size={28} />
                            </button>
                            <button
                                onClick={togglePlay}
                                className="w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full transition mx-4 sm:mx-0"
                                aria-label={isPlaying ? "Pause music" : "Play music"}
                            >
                                {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                            </button>
                            <button onClick={() => changeTrack("next")} aria-label="Next track">
                                <SkipForward size={28} />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm w-10">{formatTime(currentTime)}</span>
                        <input
                            className="flex-grow h-2 md:cursor-pointer"
                            type="range"
                            min={0}
                            max={duration ? duration : 0}
                            step="0.1"
                            value={currentTime}
                            onChange={handleSeek}
                            aria-label="Seek through the track"
                        />
                        <span className="text-sm w-10">{formatTime(duration)}</span>
                    </div>
                </div>
            </div>
        </>
    );
};