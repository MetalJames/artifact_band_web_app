import { useParams } from "react-router-dom";
import { albums, singles } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";


const Album = () => {

    const { id } = useParams();
    const album = albums.find((album) => album.id === id) || singles.find((single) => single.id === id);

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    if (!album) {
        return <p>Album not found.</p>
    }

    return (
        <div className="flex flex-col w-[60%] m-auto py-10 pt-20">
            {/* Album Cover and Tracklist Section */}
            <div className="text-center pb-10">
                <p>Released in {album.year}</p>
                <p>{album.title}</p>
            </div>
            <div className="flex">
                <div className="w-8/12">
                    {/* <h1 className="text-3xl text-bold">{album.title}</h1>
                    <p className="text-lg">Released: {album.year} year.</p> */}
                    <img src={album.cover} alt={album.title} className="lg:w-9/12 w-full" />
                </div>
                <div className="w-4/12">
                    <h3 className="font-bold">TRACKLIST:</h3>
                    <ul className="mt-4">
                        {album.songs.map((song, index) => (
                            <li key={index} className="flex justify-between mu-2">
                                <span>{index + 1}. {song.title}</span>
                                <span>
                                    {song.length}
                                    {song.youtubeLink && (
                                        <a
                                            href={song.youtubeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            className="text-red-600 hover:text-red-800 transition-colors duration-200 ml-4"
                                        >
                                            <FontAwesomeIcon icon={faYoutube} size="lg" aria-label="YouTube link" className={hoveredIndex === index ? 'fa-beat-fade' : ''}/>
                                        </a>
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Album Information Section */}
            {album.albumInfo && (
                <div className="w-6/12 mt-[4vw] m-auto">
                    <h3 className="font-bold mb-2">"{album.title}"(Album, {album.year})</h3>
                    <p className="border-l-4 pl-4 mb-4 text-gray-300 whitespace-pre-line">{album.albumInfo.introduction}</p>
                    <h3 className="italic mb-2">Credits:</h3>
                    <ul className="list-disc list-inside pl-4 space-y-2 text-sm md:text-base text-gray-300 mb-4">
                        {album.albumInfo.credits.members.map((member, index) => (
                            <li key={index} className="list-outside ml-5">
                                <strong>{member.instrument}</strong> {member.member}
                            </li>
                        ))}
                    <li className="list-outside ml-5">
                        <strong>Songwriting:</strong>
                        <ul className="list-disc pl-6 mt-2">
                            {album.albumInfo.credits.songwriting.map((credit, index) => (
                                <li key={index} className="list-outside ml-5">
                                    {credit.song}: music written by {credit.music} 
                                    {credit.lyrics !== "Instrumental" && `, and lyrics written by ${credit.lyrics}`}
                                </li>
                            ))}
                        </ul>
                    </li>
                        <li className="list-outside ml-5">{album.albumInfo.credits.mastering}</li>
                        <li className="list-outside ml-5">{album.albumInfo.credits.recordingLocation}</li>
                    </ul>
                    <h3 className="italic mb-2">Artwork & Design:</h3>
                    <ul className="list-disc list-inside pl-4 space-y-2 text-sm md:text-base text-gray-300 mb-4">
                        <li className="list-outside ml-5">{album.albumInfo.artworkAndDesign.coverArt}</li>
                        <li className="list-outside ml-5">{album.albumInfo.artworkAndDesign.layoutDesign}</li>
                    </ul>
                    <h3 className="italic mb-2">Special Thanks:</h3>
                    <p className="border-l-4 pl-4 mb-4 text-gray-300">{album.albumInfo.specialThanks}</p>
                </div>
            )}
        </div>
    )
}

export default Album