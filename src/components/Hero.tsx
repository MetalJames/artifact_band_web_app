import { Artifact, NoOneIMG } from "../assets";
import { albums } from "../utils/constants";
import { Link } from "react-router-dom";

const Hero = () => {
    const featuredAlbum = albums.find((album) => album.id === "no_one")!; // It never going to be undefined

    return (
        <div className="flex flex-col items-center p-8">
            {/* <p>metal-textured background to give it that gritty, heavy feel for entire page</p> */}
            {/* <p>add a subtle animation (like a pulsing glow or slow zoom) to give it a dynamic feel. <span className="text-3xl">Maybe Add?</span>Maybe???</p> */}
            {/* <h1 className="text-5xl">HERE I WILL HAVE ARTIFACT NAME WHEN IT WILL BE READY</h1> */}
            {/* <img src={Artifact} alt="Artifact" className="w-[2000px] h-[100px]" /> */}
            <h3 className="text-3xl">NEW RELEASE</h3>
            <p className="text-xl italic">"No One - Out Now. Embrace the Silence."</p>
            {/* Album Cover Section */}
            <div className="w-6/12 flex flex-col items-center">
                <img src={NoOneIMG} alt={featuredAlbum.title} className="w-full h-auto rounded-lg shadow-lg"/>
                <Link to={`/music/${featuredAlbum.id}`} className="mt-5 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
                    Go to Album
                </Link>
                <a href="https://www.youtube.com/watch?v=0q0XOynOhAI&list=PLsZtM2xO1Av6bntzo1YMDjMxV6txyhv6-" target="_blank" rel="noopener noreferrer" className="hover:underline mr-4">YouTube Playlist</a>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-2">About No One</h2>
                <p className="text-lg mb-2 font-semibold">This Is our new album</p>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Featured Tracks from "No One"</h2>
                <div className="divider mb-4 w-full h-1 bg-gray-800" /> {/* Grungy divider */}
            </div>
            <img src={Artifact} alt="Artifact" className="w-7/12" />
        </div>
    );
}

export default Hero;
