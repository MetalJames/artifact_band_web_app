import { useParams } from "react-router-dom";
import { albums, singles } from "../utils";
import { Tracklist, AlbumInfo } from "../components/album_comps/";
import { ImageWithModal, SEO } from "../components/";

const Album = () => {

    const { id } = useParams();
    const album = albums.find((album) => album.id === id) || singles.find((single) => single.id === id);

    if (!album) {
        return <p>Album not found.</p>
    }

    return (
        <div className="flex flex-col sm:w-11/12 lg:w-4/5 2xl:w-3/5 w-10/12 w m-auto py-10 pt-28 sm:pt-[6vw]">
            <SEO 
                title={`${album.title} - Artifact Thrash Metal Band`}
                description={`Explore ${album.title}, released in ${album.year}.`}
                url={`https://artifact-band.vercel.app/albums/${album.id}`}
            />
            <div className="text-center pb-4 sm:pb-10">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">{album.title}</h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-2">Released in {album.year}</p>
            </div>
            <div className="flex sm:flex-row justify-around items-center flex-col">
                <ImageWithModal 
                    smallSrc={album.coverSmall} 
                    largeSrc={album.cover} 
                    alt={album.title} 
                    className="sm:w-1/2 w-full"
                />
                <div className="sm:w-2/5 xl:w-4/12 w-full mt-10 sm:mt-0">
                    <h3 className="font-bold">TRACKLIST:</h3>
                    <Tracklist songs={album.songs} />
                </div>
            </div>
            <AlbumInfo album={album}/>
        </div>
    )
};

export default Album;