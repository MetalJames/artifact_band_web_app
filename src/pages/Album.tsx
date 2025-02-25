import { useParams } from "react-router-dom";
import { albums, singles } from "../utils";
import { Tracklist } from "../components/album_comps/Tracklist";
import { AlbumInfo } from "../components/album_comps/AlbumInfo";

export const Album = () => {

    const { id } = useParams();
    const album = albums.find((album) => album.id === id) || singles.find((single) => single.id === id);

    if (!album) {
        return <p>Album not found.</p>
    }

    return (
        <div className="flex flex-col sm:w-11/12 lg:w-4/5 2xl:w-3/5 w-10/12 w m-auto py-10 pt-20">
            <div className="text-center pb-4 sm:pb-10">
                <p>Released in {album.year}</p>
                <p>{album.title}</p>
            </div>
            <div className="flex sm:flex-row justify-around items-center flex-col">
                <img src={album.coverSmall} alt={album.title} className="sm:w-1/2 w-full" />
                <div className="sm:w-2/5 xl:w-4/12 w-full">
                    <h3 className="font-bold">TRACKLIST:</h3>
                    <Tracklist songs={album.songs} />
                </div>
            </div>
            <AlbumInfo album={album}/>
        </div>
    )
};