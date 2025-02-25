import { Link } from "react-router-dom";

type MusicCardProps = {
    id: string;
    title: string;
    year: number;
    cover: string;
    type: string;
}

export const MusicCard = ({ id, title, year, cover, type }: MusicCardProps) => (
    <Link to={`/music/${id}`} className="group sm:w-[45%] w-full sm:mb-0 mb-8">
        <div className="relative w-full">
            <img src={cover} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 sm:flex hidden flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-2xl font-bold">{type}: {title}</h3>
                <p className="text-lg">Release year: {year}</p>
            </div>
            <div className="sm:hidden flex flex-col text-center bg-black p-2">
                <h3 className="text-lg font-bold">{type}: {title}</h3>
                <p className="text-base">Release year: {year}</p>
            </div>
        </div>
    </Link>
);