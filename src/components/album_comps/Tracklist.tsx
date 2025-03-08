import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Song } from "../../utils/types";

type Props = {
    songs: Song[];
}

export const Tracklist = ({ songs }: Props ) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <ul className="mt-4">
            {songs.map((song, index) => (
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
                                <FontAwesomeIcon
                                    icon={faYoutube}
                                    size="lg"
                                    aria-label="YouTube link"
                                    className={hoveredIndex === index ? 'fa-beat-fade' : 'opacity-50 hover:opacity-100 transition-opacity duration-200'}
                                />
                            </a>
                        )}
                    </span>
                </li>
            ))}
        </ul>
    );
};