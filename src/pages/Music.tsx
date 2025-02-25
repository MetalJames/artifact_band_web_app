import { albums, singles } from "../utils/";
import { MusicCard } from "../components/MusicCard";

console.log(albums)

export const Music = () => {
    return (
        <div className="flex justify-center pt-20">
            <div className="flex flex-col sm:w-3/5 w-9/12">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4">Albums</h1>
                <div className="flex sm:flex-row flex-col justify-between">
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
                <div className="flex justify-between">
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