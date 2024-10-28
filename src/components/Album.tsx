import { useParams } from "react-router-dom";
import { albums } from "../utils/constants";

const Album = () => {

    const { id } = useParams();
    const album = albums.find((album) => album.id === id);


    console.log(id)

    // console.log(album);

    // console.log(album.albumInfo)

    if (!album) {
        return <p>Album not found.</p>
    }

    return (
        <div className="flex flex-col w-[60%] m-auto">
            {/* Album Cover and Tracklist Section */}
            <div className="flex">
                <div className="w-8/12">
                    {/* <h1 className="text-3xl text-bold">{album.title}</h1>
                    <p className="text-lg">Released: {album.year} year.</p> */}
                    <img src={album.cover} alt={album.title} className="w-9/12" />
                </div>
                <div className="w-4/12">
                    <h3 className="font-bold">TRACKLIST:</h3>
                    <ul className="mt-4">
                        {album.songs.map((song, index) => (
                            <li key={index} className="flex justify-between mu-2">
                                <span>{index + 1}. {song.title}</span>
                                <span>{song.length}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Album Information Section */}
            {album.albumInfo && (
                <div className="w-6/12 mt-[4vw] m-auto">
                    <h3 className="font-bold mb-2">"{album.title}"(Album, {album.year})</h3>
                    <p className="border-l-4 pl-4 mb-4 text-gray-300">{album.albumInfo.introduction}</p>
                    <h3 className="italic mb-2">Credits:</h3>
                    <ul className="list-disc list-inside pl-4 space-y-2 text-sm md:text-base text-gray-300 mb-4">
                        <li>{album.albumInfo.credits.instrumentsAndProduction}</li>
                        <li>{album.albumInfo.credits.mastering}</li>
                        <li>{album.albumInfo.credits.recordingLocation}</li>
                    </ul>
                    <h3 className="italic mb-2">Artwork & Design:</h3>
                    <ul className="list-disc list-inside pl-4 space-y-2 text-sm md:text-base text-gray-300 mb-4">
                        <li>{album.albumInfo.artworkAndDesign.coverArt}</li>
                        <li>{album.albumInfo.artworkAndDesign.layoutDesign}</li>
                    </ul>
                    <h3 className="italic mb-2">Special Thanks:</h3>
                    <p className="border-l-4 pl-4 mb-4 text-gray-300">{album.albumInfo.specialThanks}</p>
                </div>
            )}
        </div>
    )
}

export default Album