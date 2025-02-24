import { bandInfo } from "../../utils";

export const ArtifactLineups = () => {
    return (
        <div>
            <h2>{bandInfo.artifactLineup2009_2010.title}</h2>
            <p>{bandInfo.artifactLineup2009_2010.description}</p>
            <div className="flex flex-col py-6 w-full border rounded-md bg-gray-600 bg-opacity-30 p-4">
                <div className="flex justify-around items-center gap-4">
                    <img src={bandInfo.artifactLineup2009_2010.images.imageOne.small.src} alt={bandInfo.artifactLineup2009_2010.images.imageOne.small.alt} className="w-1/4 h-48 object-cover rounded-lg shadow-md border"/>
                    <img src={bandInfo.artifactLineup2009_2010.images.imageTwo.small.src} alt={bandInfo.artifactLineup2009_2010.images.imageTwo.small.alt} className="w-1/3 h-48 object-fit rounded-lg shadow-md border"/>
                    <img src={bandInfo.artifactLineup2009_2010.images.imageThree.small.src} alt={bandInfo.artifactLineup2009_2010.images.imageThree.small.alt} className="w-1/4 h-48 object-cover rounded-lg shadow-md border"/>
                </div>
                <p className="text-sm mt-2 border-t pt-2">
                    {bandInfo.artifactLineup2009_2010.captions.bandPhotoText}
                    <strong>{bandInfo.artifactLineup2009_2010.captions.bandPhotoNames}</strong>
                    {bandInfo.artifactLineup2009_2010.captions.bandPhotoReadDirection}<br />
                    {bandInfo.artifactLineup2009_2010.captions.demoRecordingText}
                    <strong>{bandInfo.artifactLineup2009_2010.captions.demoRecordingNames}</strong>
                    {bandInfo.artifactLineup2009_2010.captions.demoRecordingReadDirection}<br/>
                    {bandInfo.artifactLineup2009_2010.captions.livePerformanceText}
                    <strong>{bandInfo.artifactLineup2009_2010.captions.livePerformanceNames}</strong>
                    {bandInfo.artifactLineup2009_2010.captions.livePerformanceText}
                </p>
            </div>
        </div>
    )
};