import { bandInfo } from "../../utils";

export const FirstDemo = () => {
    return (
        <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">{bandInfo.firstDemo.title}</h2>
            <div className="flex sm:flex-row flex-col-reverse py-6">
                <p className="sm:pr-4 pr-0 sm:w-3/5 w-full whitespace-pre-line">{bandInfo.firstDemo.demosAndTransitionToEnglish}</p>
                <div className="sm:w-2/5 w-full pr-4 border rounded-md bg-gray-600 bg-opacity-30 p-4 sm:mb-0 mb-4">
                    <img src={bandInfo.firstDemo.images.imageOne.small.src} alt={bandInfo.firstDemo.images.imageOne.small.alt} className="w-3/4 h-40 object-cover rounded-lg shadow-md mx-auto"/>
                    <p className="text-sm mt-2 border-t pt-2">
                        {bandInfo.firstDemo.captions.demoCoverArt}
                    </p>
                </div>
            </div>
        </div>
    )
};