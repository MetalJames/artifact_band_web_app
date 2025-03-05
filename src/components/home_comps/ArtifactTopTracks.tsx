import { Artifact } from "../../assets";
import { useMusicPlayer } from "../../state/MusicPlayerContext/useMusicPlayer";
import { Play, Pause, StopCircle } from "lucide-react"; // ✅ Modern icons

export const ArtifactTopTracks = () => {
    // Destructure music player controls
    const { tracks, currentTrackIndex, isPlaying, playTrack, togglePlay, stop } = useMusicPlayer();

    const handlePlayPause = (index: number) => {
        if (index === currentTrackIndex && isPlaying) {
            togglePlay();
        } else {
            playTrack(index);
        }
    };

    return (
        <div className="px-2 sm:px-0">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-white">
                🎸 Listen to Artifact’s Top Tracks
            </h2>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:w-4/5 mx-auto bg-gray-900 text-white p-6 rounded-xl shadow-lg mb-20">
                {/* Logo Section */}
                <div className="max-w-xs sm:max-w-sm lg:max-w-md flex justify-center mb-6 lg:mb-0">
                    <img src={Artifact} alt="Artifact Logo" className="w-2/3 lg:w-4/5 drop-shadow-lg" />
                </div>

                {/* Track List Section */}
                <div className="w-full lg:w-2/3 flex flex-col gap-2 sm:gap-4">
                    {tracks.map((track, index) => {
                        const isThisTrackPlaying = index === currentTrackIndex && isPlaying;

                        return (
                            <div key={index} className="flex justify-between items-center bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
                                {/* Track Info */}
                                <p className="text-base sm:text-lg font-semibold flex-1">
                                    <span className="sm:inline hidden">🎵</span> Artifact - {track.title}<br className="sm:hidden block"/> <span className="text-sm text-gray-400">(Album: {track.album})</span>
                                </p>

                                {/* Controls */}
                                <div className="flex gap-3">
                                    {/* Play/Pause Button */}
                                    <button
                                        onClick={() => handlePlayPause(index)}
                                        className="p-2 bg-blue-600 lg:hover:bg-blue-700 rounded-full transition"
                                    >
                                        {isThisTrackPlaying ? <Pause size={24} /> : <Play size={24} />}
                                    </button>

                                    {/* Stop Button */}
                                    <button
                                        onClick={stop}
                                        className="p-2 bg-red-600 lg:hover:bg-red-700 rounded-full transition"
                                    >
                                        <StopCircle size={24} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};