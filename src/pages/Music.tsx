import { albums, singles } from "../utils/";
import { MusicCard } from "../components/MusicCard";

console.log(albums)

export const Music = () => {
    return (
        <div className="flex justify-center py-20">
            <div className="flex flex-col sm:w-4/5 w-9/12">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4">Albums</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {albums.map((album) => (
                        <MusicCard
                            key={album.id}
                            id={album.id}
                            title={album.title}
                            year={album.year}
                            cover={album.cover}
                            type={album.type}
                        />
                    ))}
                </div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4">Singles</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {singles.map((single) => (
                        <MusicCard
                            key={single.id}
                            id={single.id}
                            title={single.title}
                            year={single.year}
                            cover={single.coverSmall}
                            type={single.type}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};