import { bandInfo } from "../../utils";

export const FirstDemo = () => {
    return (
        <div>
            <h2>{bandInfo.firstDemo.title}</h2>
            <div className="flex py-4">
                <p className="pr-4 w-3/5 whitespace-pre-line">{bandInfo.firstDemo.demosAndTransitionToEnglish}</p>
                <div className="w-2/5 pr-4 border rounded-md bg-gray-600 bg-opacity-30 p-4">
                    <img src={bandInfo.firstDemo.images.imageOne.small.src} alt={bandInfo.firstDemo.images.imageOne.small.alt} className="w-3/4 h-40 object-cover rounded-lg shadow-md mx-auto"/>
                    <p className="text-sm mt-2 border-t pt-2">
                        {bandInfo.firstDemo.captions.demoCoverArt}
                    </p>
                </div>
            </div>
        </div>
    )
};