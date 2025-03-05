import { bandInfo } from "../../utils";
import { ImageWithModal } from "../ImageWithModal";

export const ArtifactLineups = () => {
    return (
        <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:w-full w-3/4 mx-auto">{bandInfo.artifactLineup2009_2010.title}</h2>
            <div className="py-6">
                <p className="mb-4">{bandInfo.artifactLineup2009_2010.description}</p>
                <div className="flex flex-col py-4 w-full border rounded-md bg-gray-600 bg-opacity-30 p-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center sm:gap-4 gap-2 w-full">
                        <ImageWithModal 
                            smallSrc={bandInfo.artifactLineup2009_2010.images.imageOne.small.src} 
                            largeSrc={bandInfo.artifactLineup2009_2010.images.imageOne.full.src} 
                            alt={bandInfo.artifactLineup2009_2010.images.imageOne.small.alt} 
                            className="sm:w-1/4 w-full sm:h-48 h-auto object-cover rounded-lg shadow-md"
                        />
                        <ImageWithModal 
                            smallSrc={bandInfo.artifactLineup2009_2010.images.imageTwo.small.src} 
                            largeSrc={bandInfo.artifactLineup2009_2010.images.imageTwo.full.src} 
                            alt={bandInfo.artifactLineup2009_2010.images.imageTwo.small.alt} 
                            className="sm:w-1/3 w-full sm:h-48 h-auto object-fit rounded-lg shadow-md"
                        />
                        <ImageWithModal 
                            smallSrc={bandInfo.artifactLineup2009_2010.images.imageThree.small.src} 
                            largeSrc={bandInfo.artifactLineup2009_2010.images.imageThree.full.src} 
                            alt={bandInfo.artifactLineup2009_2010.images.imageThree.small.alt} 
                            className="sm:w-1/4 w-full sm:h-48 h-auto object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <p className="text-sm mt-2 border-t pt-2">
                        {bandInfo.artifactLineup2009_2010.captions.bandPhotoText}
                        <strong>{bandInfo.artifactLineup2009_2010.captions.bandPhotoNames}</strong>
                        {bandInfo.artifactLineup2009_2010.captions.bandPhotoReadDirection}<br /><br/>
                        {bandInfo.artifactLineup2009_2010.captions.demoRecordingText}
                        <strong>{bandInfo.artifactLineup2009_2010.captions.demoRecordingNames}</strong>
                        {bandInfo.artifactLineup2009_2010.captions.demoRecordingReadDirection}<br/><br/>
                        {bandInfo.artifactLineup2009_2010.captions.livePerformanceText}
                        <strong>{bandInfo.artifactLineup2009_2010.captions.livePerformanceNames}</strong>
                        {bandInfo.artifactLineup2009_2010.captions.livePerformanceText}
                    </p>
                </div>
            </div>
        </div>
    )
};