import { PlaySquare } from "lucide-react"; // ✅ Use alternative icon

export const ArtifactYouTube = () => {
    return (
        <div className="mt-8 mb-20">
            <h3 className="text-xl lg:text-2xl font-bold text-center text-yellow-400">
                🔥 Official Artifact YouTube Channel
            </h3>
            <p className="text-center text-gray-300 mt-2">
                <a
                    href="https://www.youtube.com/@artifact-band/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-500 font-semibold flex justify-center items-center gap-2 transition hover:text-red-300"
                >
                    <PlaySquare size={24} className="text-red-500" /> Visit the Official Artifact YouTube Channel
                </a>
            </p>

            {/* 🎶 Full Album Playlists */}
            <div className="mt-6 space-y-4">
                <h4 className="text-lg font-semibold text-center text-gray-200">Listen to Full Albums:</h4>

                <p className="text-center">
                    <a
                        href="https://www.youtube.com/watch?v=0q0XOynOhAI&list=PLsZtM2xO1Av6bntzo1YMDjMxV6txyhv6-"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition hover:scale-105"
                    >
                        🎧 Listen to *Artifact - No One* (Full Album)
                    </a>
                </p>

                <p className="text-center">
                    <a
                        href="https://www.youtube.com/watch?v=Tn_bWjefjHg&list=PLsZtM2xO1Av7UYxOvl_k4UZMMmE_KrKo9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition hover:scale-105"
                    >
                        🎧 Listen to *Artifact - Dead Silence* (Full Album)
                    </a>
                </p>
            </div>
        </div>
    );
};
