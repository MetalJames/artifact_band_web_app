export type Song = {
    title: string;
    length: string;
    youtubeLink?: string;
}

export type SongWritten = {
    song: string;
    music: string;
    lyrics: string;
}

export type Member = {
    instrument: string;
    member: string;
};

export type Credits = {
    members: Member[];
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
    credits: Credits;
    artworkAndDesign: ArtworkAndDesign;
    specialThanks: string;
}

export type Album = {
    id: string;
    title: string;
    type?: string;
    year: number;
    cover: string;
    coverSmall?: string;
    songs: Song[];
    albumInfo: AlbumInfo;
}