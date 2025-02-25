import { Album } from "../../utils/types";

type Props = {
    album: Album;
}

export const AlbumInfo = ({ album }: Props ) => {
    if (!album.albumInfo) return null;

    return (
        <div className="sm:w-6/12 w-full mt-[4vw] m-auto">
            <h3 className="font-bold mb-2">"{album.title}" (Album, {album.year})</h3>
            <p className="border-l-4 pl-4 mb-4 text-gray-300 text-sm sm:text-base whitespace-pre-line">
                {album.albumInfo.introduction}
            </p>

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
            <p className="border-l-4 pl-4 mb-4 text-sm sm:text-base text-gray-300">{album.albumInfo.specialThanks}</p>
        </div>
    );
};