import { NoOneIMG } from "../assets";
import { albums } from "../utils/constants";
import { Album } from "../utils/types";
import { Link } from "react-router-dom"; // Import Link for navigation

const Hero = () => {
    const featuredAlbum: Album = albums.find((album) => album.id === "no_one")!; // It never going to be undefined

    return (
        <div className="flex flex-col items-center p-8">
            {/* Album Cover Section */}
            <div className="w-6/12 flex flex-col items-center">
                <img src={NoOneIMG} alt={featuredAlbum.title} className="w-full h-auto rounded-lg shadow-lg"/>
                <Link to={`/music/${featuredAlbum.id}`} className="mt-5 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
                    Go to Album
                </Link>
            </div>
        </div>
    );
}

export default Hero;
