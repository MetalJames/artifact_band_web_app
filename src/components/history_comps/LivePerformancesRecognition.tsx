import { bandInfo } from '../../utils';

export const LivePerformancesRecognition = () => {
    return (
        <div>
            <h2>{bandInfo.livePerformancesAndRecognition.title}</h2>
            <div className="flex py-4">
                <div className="flex flex-col w-2/5 border rounded-md bg-gray-600 bg-opacity-30 p-4">
                    <div className="flex justify-around items-center gap-4">
                        <img src={bandInfo.livePerformancesAndRecognition.images.imageOne.small.src} alt={bandInfo.livePerformancesAndRecognition.images.imageOne.small.alt} className="w-1/2 h-40 object-cover rounded-lg shadow-md"/>
                        <img src={bandInfo.livePerformancesAndRecognition.images.imageTwo.full.src} alt={bandInfo.livePerformancesAndRecognition.images.imageTwo.full.alt} className="w-1/3 h-40 object-cover rounded-lg shadow-md"/>
                    </div>
                    <p className="text-sm mt-2 border-t pt-2">
                        {bandInfo.livePerformancesAndRecognition.captions.introText}{" "}
                        <strong>{bandInfo.livePerformancesAndRecognition.captions.collegeName}</strong>
                        {bandInfo.livePerformancesAndRecognition.captions.locationName}<br/>
                        {bandInfo.livePerformancesAndRecognition.captions.magazineArticle}
                    </p>
                </div>
                <p className="pl-4 w-3/5 whitespace-pre-line">{bandInfo.livePerformancesAndRecognition.liveEventExpressArticle}</p>
            </div>
        </div>
    )
};