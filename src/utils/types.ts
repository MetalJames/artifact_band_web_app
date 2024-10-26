export type Song = {
    title: string;
    length: string;
}

export type Album = {
    id: string;
    title: string;
    year: number;
    cover: string;
    songs: Song[];
}