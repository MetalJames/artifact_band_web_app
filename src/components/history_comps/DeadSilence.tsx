import { bandInfo } from "../../utils";

export const DeadSilence = () => {
    return (
        <div>
            <h2>{bandInfo.deadSilenceAlbum.title}</h2>
            <div className="flex py-4">
                <div className="w-3/5 pr-4">
                    <p className="whitespace-pre-line">{bandInfo.deadSilenceAlbum.description}</p>
                </div>
                <div className="w-2/5 flex flex-col border rounded-md bg-gray-600 bg-opacity-30 p-4">
                    <div className="flex flex-col gap-4 items-center">
                        <img src={bandInfo.deadSilenceAlbum.images.imageOne.small.src} alt={bandInfo.deadSilenceAlbum.images.imageOne.small.alt} className="w-3/4 h-40 object-cover rounded-lg"/>
                        <img src={bandInfo.deadSilenceAlbum.images.imageTwo.full.src} alt={bandInfo.deadSilenceAlbum.images.imageTwo.full.alt} className="w-3/4 h-40 object-cover rounded-lg"/>
                    </div>
                    <p className="text-sm mt-2 border-t pt-2">
                        {bandInfo.deadSilenceAlbum.captions.officialCD}<br/>
                        {bandInfo.deadSilenceAlbum.captions.coverArt}
                    </p>
                </div>
            </div>
        </div>
    )
};