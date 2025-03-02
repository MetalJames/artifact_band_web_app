import { bandInfo } from "../../utils";
import { ImageWithModal } from "../ImageWithModal";

export const SilentStorm = () => {
    return (
        <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">{bandInfo.silentStormSingle.title}</h2>
            <div className="sm:block flex-col py-6">
                <div className="sm:w-2/5 w-full flex flex-col float-left border rounded-md bg-gray-600 bg-opacity-30 p-4 sm:mr-8 mr-0 sm:mb-0 mb-4">
                    
                    <ImageWithModal 
                        smallSrc={bandInfo.silentStormSingle.images.imageOne.src} 
                        largeSrc={bandInfo.silentStormSingle.images.imageOne.src} 
                        alt={bandInfo.silentStormSingle.images.imageOne.alt} 
                        className="w-full object-cover rounded-lg shadow-md"
                    />
                    
                    
                    
                    {/* <img src={bandInfo.silentStormSingle.images.imageOne.src} alt={bandInfo.silentStormSingle.images.imageOne.alt}  className="w-full object-cover rounded-lg"/> */}
                    <p className="text-sm mt-2 border-t pt-2 text-center">{bandInfo.silentStormSingle.captions.coverArt}</p>
                </div>
                <p className="whitespace-pre-line">{bandInfo.silentStormSingle.description}</p>
            </div>
        </div>
    )
};