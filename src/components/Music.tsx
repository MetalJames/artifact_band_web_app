import { Link } from "react-router-dom";
import { albums } from "../utils/constants";

console.log(albums)

const Music = () => {
    return (
        <div className="p-8 grid gap-8 grid-cols-1 md:grid-cols-3">
            {albums.map(({id, title, year, cover}) => (
                <Link to={`/music/${id}`} key={id} className="group">
                    <div className="relative">
                        <img src={cover} alt={title} className="w-full h-auto"/>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <h3 className="text-2xl font-bold">Album: {title}.</h3>
                            <p className="text-lg">Realease year: {year}.</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Music