import { useParams } from "react-router-dom";
import { albums, singles } from "../utils";
import { Tracklist } from "../components/album_comps/Tracklist";
import { AlbumInfo } from "../components/album_comps/AlbumInfo";
// import { ImageModal } from "../components/ImageModal";
// import { useState } from "react";
import { ImageWithModal } from "../components/ImageWithModal";

export const Album = () => {

    const { id } = useParams();
    const album = albums.find((album) => album.id === id) || singles.find((single) => single.id === id);



        // const [isModalOpen, setIsModalOpen] = useState(false);
        // const [selectedImage, setSelectedImage] = useState<string | null>(null);
        // const [imageCaption, setImageCaption] = useState<string | null>(null);

        // const handleImageClick = (imageSrc: string, caption: string) => {
        //     setSelectedImage(imageSrc);
        //     setImageCaption(caption);
        //     setIsModalOpen(true);
        // };

        // const closeModal = () => {
        //     setIsModalOpen(false);
        //     setSelectedImage(null);
        //     setImageCaption(null);
        // };




    if (!album) {
        return <p>Album not found.</p>
    }

    return (
        <div className="flex flex-col sm:w-11/12 lg:w-4/5 2xl:w-3/5 w-10/12 w m-auto py-10 pt-[6vw]">
            <div className="text-center pb-4 sm:pb-10">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">{album.title}</h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mt-2">Released in {album.year}</p>
            </div>
            <div className="flex sm:flex-row justify-around items-center flex-col">
                {/* <img src={album.coverSmall} alt={album.title} className="sm:w-1/2 w-full cursor-pointer hover:opacity-75 transition" onClick={() => handleImageClick(album.cover, album.title)}/> */}
                <ImageWithModal 
                    smallSrc={album.coverSmall} 
                    largeSrc={album.cover} 
                    alt={album.title} 
                    // caption={album.title} 
                    className="sm:w-1/2 w-full"
                />
                <div className="sm:w-2/5 xl:w-4/12 w-full">
                    <h3 className="font-bold">TRACKLIST:</h3>
                    <Tracklist songs={album.songs} />
                </div>
            </div>
            <AlbumInfo album={album}/>





            {/* Image Modal */}
            {/* <ImageModal imageSrc={selectedImage || ""} caption={imageCaption || ""} isOpen={isModalOpen} onClose={closeModal} /> */}
        </div>
    )
};