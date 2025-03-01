import { useContext } from "react";
import { MusicPlayerContext } from "./Context";

export const useMusicPlayer = () => {
    const ctx = useContext(MusicPlayerContext);
    if (!ctx) {
        throw new Error("useMusicPlayer must be used within a MusicPlayerProvider");
    }
    return ctx;
};