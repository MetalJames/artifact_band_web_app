import { bandInfo } from "../../utils/bandInfo";
import { ImageWithModal } from "../ImageWithModal";

export const NoOne = () => {
    return (
        <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">{bandInfo.noOneAlbum.title}</h2>
            <div className="sm:block flex-col py-6">
                <div className="sm:w-2/5 w-full flex flex-col float-right border rounded-md bg-gray-600 bg-opacity-30 p-4 sm:ml-8 ml-0 sm:mb-0 mb-4">
                    <ImageWithModal 
                        smallSrc={bandInfo.noOneAlbum.images.imageOne.src} 
                        largeSrc={bandInfo.noOneAlbum.images.imageOne.src} 
                        alt={bandInfo.noOneAlbum.images.imageOne.alt} 
                        className="w-full object-cover rounded-lg shadow-md"
                    />
                    <p className="text-sm mt-2 border-t pt-2 text-center">{bandInfo.noOneAlbum.captions.coverArt}</p>
                </div>
                <p className="whitespace-pre-line">{bandInfo.noOneAlbum.description}</p>
            </div>
        </div>
    )
};