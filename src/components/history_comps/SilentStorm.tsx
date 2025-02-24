import { bandInfo } from "../../utils";

export const SilentStorm = () => {
    return (
        <div>
            <h2>{bandInfo.silentStormSingle.title}</h2>
            <div className="py-6">
                <div className="w-2/5 flex flex-col float-left border rounded-md bg-gray-600 bg-opacity-30 p-4 mr-4">
                    <img src={bandInfo.silentStormSingle.images.imageOne.src} alt={bandInfo.silentStormSingle.images.imageOne.alt}  className="w-full object-cover rounded-lg"/>
                    <p className="text-sm mt-2 border-t pt-2 text-center">{bandInfo.silentStormSingle.capptions.coverArt}</p>
                </div>
                <div>
                    <p className="whitespace-pre-line">{bandInfo.silentStormSingle.description}</p><br/>
                </div>
            </div>
        </div>
    )
};