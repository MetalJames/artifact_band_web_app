import { DeadSilence } from "../../assets";
import { albums } from "../../utils";

export const Hero = () => {
    const featuredAlbum = albums.find((album) => album.id === "no_one")!;

    return (
        <div className="relative w-full h-screen flex items-center justify-center">
            <img 
                src={DeadSilence} 
                alt={featuredAlbum.title} 
                className="absolute top-0 left-0 w-full h-full object-fit"
            />
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-4xl md:text-6xl font-bold tracking-wider text-white">Dead Silence Remastered</h2>
                <p className="text-lg md:text-2xl text-gray-200 mt-2">Celebrating 20 Years of Artifact</p>
            </div>
        </div>
    );
};