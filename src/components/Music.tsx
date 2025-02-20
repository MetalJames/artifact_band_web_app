import { Link } from "react-router-dom";
import { albums, singles } from "../utils/";

console.log(albums)

export const Music = () => {
    return (
        <div className="flex justify-center pt-20">
            <div className="flex flex-col w-[60vw]">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4">Albums</h1>
                <div className="flex justify-between">
                    {albums.map(({id, title, year, cover}) => (
                        <Link to={`/music/${id}`} key={id} className="group w-[45%] h-full">
                            <div className="relative w-full h-full">
                                <img src={cover} alt={title} className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                                    <h3 className="text-2xl font-bold">Album: {title}</h3>
                                    <p className="text-lg">Realease year: {year}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4">Singles</h1>
                <div className="flex justify-between">
                    {singles.map(({id, title, year, cover}) => (
                        <Link to={`/music/${id}`} key={id} className="group w-[45%] h-full">
                            <div className="relative w-full h-full">
                                <img src={cover} alt={title} className="w-full h-full object-cover"/>
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                                    <h3 className="text-2xl font-bold">Album: {title}</h3>
                                    <p className="text-lg">Realease year: {year}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
};