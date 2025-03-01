export type MusicPlayerContextType = {
    tracks: { title: string; album: string; src: string }[];
    currentTrackIndex: number;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    togglePlay: () => void;
    changeTrack: (direction: "next" | "prev") => void;
    playTrack: (index: number) => void;
    seek: (time: number) => void;
    stop: () => void;
};