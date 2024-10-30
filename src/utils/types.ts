export type Song = {
    title: string;
    length: string;
    youtubeLink: string;
}

export type SongWritten = {
    song: string;
    music: string;
    lyrics: string;
}


export type Credits = {
    instrumentsAndProduction: string;
    songwriting: SongWritten[]
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