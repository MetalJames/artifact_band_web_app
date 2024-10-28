export type Song = {
    title: string;
    length: string;
}

export type Credits = {
    instrumentsAndProduction: string;
    recordingLocation: string;
    mastering: string;
}

export type ArtworkAndDesign ={
    coverArt: string;
    layoutDesign: string;
}

export type AlbumInfo = {
    introduction: string;
    credits: Credits[];
    artworkAndDesign: ArtworkAndDesign[];
}

export type Album = {
    id: string;
    title: string;
    year: number;
    cover: string;
    songs: Song[];
    albumInfo?: AlbumInfo[];
}