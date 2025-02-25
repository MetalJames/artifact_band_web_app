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
                        // <Link to={`/music/${id}`} key={id} className="group sm:w-[45%] w-full h-full mb-4">
                        //     <div className="relative w-full h-full">
                        //         <img src={cover} alt={title} className="w-full h-full object-cover"/>
                        //         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                        //             <h3 className="text-2xl font-bold">Album: {title}</h3>
                        //             <p className="text-lg">Realease year: {year}</p>
                        //         </div>
                        //     </div>
                        // </Link>
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
                        // <Link to={`/music/${id}`} key={id} className="group sm:w-[45%] w-full h-full">
                        //     <div className="relative w-full h-full">
                        //         <img src={coverSmall} alt={title} className="w-full h-full object-cover"/>
                        //         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                        //             <h3 className="text-2xl font-bold">Album: {title}</h3>
                        //             <p className="text-lg">Realease year: {year}</p>
                        //         </div>
                        //     </div>
                        // </Link>
                    ))}
                </div>
            </div>
        </div>
    )
};