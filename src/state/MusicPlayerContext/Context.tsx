import { createContext } from "react";
import { MusicPlayerContextType } from "./types";

export const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(
    undefined
);