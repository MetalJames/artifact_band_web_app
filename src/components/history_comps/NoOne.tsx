import { bandInfo } from "../../utils/bandInfo";

export const NoOne = () => {
    return (
        <div>
            <h2>{bandInfo.noOneAlbum.title}</h2>
            <div className="py-6">
                <div className="w-2/5 flex flex-col float-right border rounded-md bg-gray-600 bg-opacity-30 p-4 ml-4">
                    <img src={bandInfo.noOneAlbum.images.imageOne.src} alt={bandInfo.noOneAlbum.images.imageOne.alt}  className="w-full object-cover rounded-lg"/>
                    <p className="text-sm mt-2 border-t pt-2 text-center">{bandInfo.noOneAlbum.captions.coverArt}</p>
                </div>
                <p className="whitespace-pre-line">{bandInfo.noOneAlbum.description}</p><br/>
            </div>
        </div>
    )
};