import { useState } from "react";
import { Play, Pause, SkipForward, SkipBack } from "lucide-react";
import { ArtifactLogo } from "../assets";
import { useMusicPlayer } from "../state/MusicPlayerContext/useMusicPlayer";

/** Utility to format seconds -> mm:ss */
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

    // For hiding/showing the full player
    const [isHidden, setIsHidden] = useState(true);

    // Handler for user dragging the progress bar
    const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(event.target.value);
        seek(newTime);
    };

    return (
        <div
            className={` 
                fixed bottom-0 left-0 w-full bg-black bg-opacity-90 text-white 
                px-6 transition-transform duration-300
                ${isHidden ? "translate-y-[calc(100%-40px)] bg-transparent" : "translate-y-0"}
            `}
        >
        {/* Toggle arrow button always visible */}
            <div className="flex justify-end pr-4">
                <button
                    onClick={() => setIsHidden(!isHidden)}
                    className="bg-gray-700 px-3 py-1 rounded-t mt-1 text-sm"
                >
                    {isHidden ? "▲ Show Player" : "▼ Hide Player"}
                </button>
            </div>

            {/* Player UI (only visible if not hidden) */}
            <div className="pb-4 px-4 flex flex-col gap-2">
                {/* Top row: Track Info & Basic Controls */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src={ArtifactLogo}
                            alt="Artifact Logo"
                            className={`w-16 h-16 mr-4 transition-opacity duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}
                        />
                        <span className="text-lg font-semibold text-gray-200">
                            🎵 <span className="text-red-500">Artifact</span> - {tracks[currentTrackIndex]?.title} 
                            <span className="text-gray-400 text-sm ml-2">(Album: {tracks[currentTrackIndex]?.album})</span>
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={() => changeTrack("prev")}>
                            <SkipBack size={28} />
                        </button>

                        <button
                            onClick={togglePlay}
                            className="w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full transition"
                        >
                            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
                        </button>

                        <button onClick={() => changeTrack("next")}>
                            <SkipForward size={28} />
                        </button>
                    </div>
                </div>

                {/* Bottom row: Progress Bar & Time */}
                <div className="flex items-center gap-2">
                {/* Current Time */}
                <span className="text-sm w-10">{formatTime(currentTime)}</span>

                {/* Progress Bar */}
                <input
                    className="flex-grow"
                    type="range"
                    min={0}
                    max={duration ? duration : 0}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                />

                    {/* Total Duration */}
                    <span className="text-sm w-10">{formatTime(duration)}</span>
                </div>
            </div>
        </div>
    );
};