import { bandInfo } from "../../utils";
import { ImageWithModal } from "../ImageWithModal";

export const DeadSilenceRemastered = () => {
    return (
        <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                {bandInfo.deadSilenceRemastered.title}
            </h2>
            <div className="sm:block flex-col py-6">
                <div className="sm:w-2/5 w-full flex flex-col float-left border rounded-md bg-gray-600 bg-opacity-30 p-4 sm:mr-8 mr-0 sm:mb-0 mb-4">
                    <div className="flex flex-col gap-4 items-center">
                        <ImageWithModal 
                            smallSrc={bandInfo.deadSilenceRemastered.images.imageOne.small.src} 
                            largeSrc={bandInfo.deadSilenceRemastered.images.imageOne.full.src} 
                            alt={bandInfo.deadSilenceRemastered.images.imageOne.full.alt} 
                            className="w-full h-48 object-fit rounded-lg shadow-md"
                        />
                    </div>
                    <p className="text-sm mt-2 border-t pt-2 text-center">
                        {bandInfo.deadSilenceRemastered.captions.newCoverArt}
                    </p>
                </div>
                <p className="whitespace-pre-line">{bandInfo.deadSilenceRemastered.description}</p>
            </div>
        </div>
    );
};