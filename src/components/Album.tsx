import { useParams } from "react-router-dom";
import { albums } from "../utils/constants";

const Album = () => {

    const { id } = useParams();
    const album = albums.find((album) => album.id === id);

    console.log(id)

    console.log(album);

    if (!album) {
        return <p className="text-white">Album not found.</p>
    }

    return (
        <div className="bg-black text-wrap p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
                <img src={album.cover} alt={album.title} className="w-full md:w-1/3 h-auto" />
                <div>
                    <h1 className="text-4xl text-bold text-white">{album.title}</h1>
                    <p className="text-lg text-white">Released: {album.year} year.</p>
                    <ul className="mt-4">
                        {album.songs.map((song, index) => (
                            <li key={index} className="flex justify-between mu-2 text-white">
                                <span>{song.title}</span>
                                <span>{song.length}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Album