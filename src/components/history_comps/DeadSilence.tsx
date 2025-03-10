import { bandInfo } from "../../utils";
import { ImageWithModal } from "../ImageWithModal";

export const DeadSilence = () => {
    return (
        <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">{bandInfo.deadSilenceAlbum.title}</h2>
            <div className="flex sm:flex-row flex-col-reverse py-6">
                <div className="sm:w-3/5 w-full">
                    <p className="whitespace-pre-line">{bandInfo.deadSilenceAlbum.description}</p>
                </div>
                <div className="sm:w-2/5 w-full flex flex-col border rounded-md bg-gray-600 bg-opacity-30 p-4 sm:ml-8 ml-0 sm:mb-0 mb-4">
                    <div className="flex flex-col gap-4 items-center">
                        <ImageWithModal 
                            smallSrc={bandInfo.deadSilenceAlbum.images.imageOne.small.src} 
                            largeSrc={bandInfo.deadSilenceAlbum.images.imageOne.full.src} 
                            alt={bandInfo.deadSilenceAlbum.images.imageOne.small.alt} 
                            className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                        <ImageWithModal 
                            smallSrc={bandInfo.deadSilenceAlbum.images.imageTwo.full.src} 
                            largeSrc={bandInfo.deadSilenceAlbum.images.imageTwo.full.src} 
                            alt={bandInfo.deadSilenceAlbum.images.imageTwo.full.alt} 
                            className="w-full h-48 object-fit rounded-lg shadow-md"
                        />
                    </div>
                    <p className="text-sm mt-2 border-t pt-2 text-center">
                        {bandInfo.deadSilenceAlbum.captions.officialCD}<br/><br/>
                        {bandInfo.deadSilenceAlbum.captions.coverArt}
                    </p>
                </div>
            </div>
        </div>
    )
};