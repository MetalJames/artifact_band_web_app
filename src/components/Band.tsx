import { bandInfo } from "../utils";

export const Band = () => {
    return (
        <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-4/5 xl:w-4/5 2xl:w-1/2 flex flex-col items-center m-auto py-10 pt-20">
            {/* <h1 className="text-5xl font-bold">ARTIFACT</h1><br/> */}
            {/* <img src={Artifact} alt="Artifact" className="w-5/12 h-[170px] mb-4" /> */}
            <div className="relative py-6">
                <h1 className="text-6xl md:text-7xl font-bold tracking-widest text-black relative z-10">
                    ARTIFACT
                </h1>
                <h1 className="absolute left-1 py-6 inset-0 text-6xl md:text-7xl font-bold tracking-widest text-white blur-md z-0">
                    ARTIFACT
                </h1>
            </div>


            <h2>{bandInfo.theBeginning.title}</h2>
            <div className="py-6">
                <div className="flex flex-col w-2/5 float-right border rounded-md bg-gray-600 bg-opacity-30 p-4 ml-4">
                    <div className="flex justify-around items-center gap-4">
                        <img src={bandInfo.theBeginning.images.imageOne.src} alt={bandInfo.theBeginning.images.imageOne.alt} className="w-1/2 h-40 object-cover rounded-lg shadow-md"/>
                        <img src={bandInfo.theBeginning.images.imageTwo.src} alt={bandInfo.theBeginning.images.imageTwo.alt} className="w-1/3 h-40 object-cover rounded-lg shadow-md"/>
                    </div>
                    <p className="text-sm mt-2 border-t pt-2">
                        {bandInfo.theBeginning.captions.text}{" "}
                        <strong>{bandInfo.theBeginning.captions.boldNames}</strong>
                        {bandInfo.theBeginning.captions.readDirection}<br/>
                        {bandInfo.theBeginning.captions.breakLineText}
                    </p>
                </div>
                <p className="whitespace-pre-line">{bandInfo.theBeginning.earlyYearsAndLineup}</p>
            </div>









            {/* <div className="flex py-2">
                <p className="pr-2">{bandInfo.earlyYearsAndLineup}</p>< br/>
                <div className="flex flex-col">
                    <div className="flex">
                        <img src={original_3} alt="Main artifact trio" className="w-1/2"/>
                        <img src={artifact_beginning} alt="Artifact Beginning"  className="w-1/3"/>
                    </div>
                    <p className="text-sm">Artifact founding members: Volodymyr Ruzhak, Viktor Matushek, Igor Grant(from left to right) top image. Rehersal stuff in their rehersal studio.</p>
                </div>
            </div> */}
            {/* <div className="flex py-2">
            </div>
            <div className="flex justify-around py-6">
                <img src={artifact_2007_live} alt="Artifact first Live event"  className="w-1/2"/>
                <img src={express_paper} alt="articl about artifact in the magazine" className="w-1/6"/>
                <p>{bandInfo.livePerformancesAndRecognition}</p><br />
            </div> */}



<h2>{bandInfo.livePerformancesAndRecognition.title}</h2>
<div className="flex py-4">
    {/* Image Section (Moved to the Left) */}
    <div className="flex flex-col w-2/5 border rounded-md bg-gray-600 bg-opacity-30 p-4">
        <div className="flex justify-around items-center gap-4">
            <img src={bandInfo.livePerformancesAndRecognition.images.imageOne.src} alt={bandInfo.livePerformancesAndRecognition.images.imageOne.alt} className="w-1/2 h-40 object-cover rounded-lg shadow-md"/>
            <img src={bandInfo.livePerformancesAndRecognition.images.imageTwo.src} alt={bandInfo.livePerformancesAndRecognition.images.imageTwo.alt} className="w-1/3 h-40 object-cover rounded-lg shadow-md"/>
        </div>
        {/* <p className="text-sm mt-2 border-t pt-2">
            Artifact's first live performance at <strong>Trusha College</strong> in Lviv, Ukraine. <br/>
            Featured in a magazine article recognizing the band's early impact.
        </p> */}

        <p className="text-sm mt-2 border-t pt-2">
            {bandInfo.livePerformancesAndRecognition.captions.introText}{" "}
            <strong>{bandInfo.livePerformancesAndRecognition.captions.collegeName}</strong>
            {bandInfo.livePerformancesAndRecognition.captions.locationName}<br/>
            {bandInfo.livePerformancesAndRecognition.captions.magazineArticle}
        </p>
    </div>

    {/* Text Section (Moved to the Right) */}
    <p className="pl-4 w-3/5 whitespace-pre-line">{bandInfo.livePerformancesAndRecognition.liveEventExpressArticle}</p>
</div>








            {/* <div className="flex py-2">
                <p className="pr-4">{bandInfo.demosAndTransitionToEnglish}</p>< br />
                <img src={demo_cover_2010} alt="" className="w-1/3"/>
            </div> */}



<h2>{bandInfo.firstDemo.title}</h2>
<div className="flex py-4">
    <p className="pr-4 w-3/5 whitespace-pre-line">{bandInfo.firstDemo.demosAndTransitionToEnglish}</p>
    <div className="w-2/5 pr-4 border rounded-md bg-gray-600 bg-opacity-30 p-4">
        <img src={bandInfo.firstDemo.images.imageOne.src} alt={bandInfo.firstDemo.images.imageOne.alt} className="w-3/4 h-40 object-cover rounded-lg shadow-md mx-auto"/>
        <p className="text-sm mt-2 border-t pt-2">
            {bandInfo.firstDemo.captions.demoCoverArt}
        </p>
    </div>
</div>








            {/* <div className="flex justify-around py-6">
                <div>
                    <img src={demo_recording_2010} alt="Artifact 2010 Band Recording" className="w-1/3" />
                    <img src={artifact_2010_band} alt="Artifact 2010 Band" className="w-1/3" />
                    <img src={artifact_2011_band} alt="Artifact 2011 Band" className="w-1/3" />
                </div>
                <p>Artifact Recording Demo album. 2010 Artifact band members: Vadim Boitsov, Volodymyr Ruzhak, Viktor Matushek, Igor Grant(from left to right) Live performance of Artifact at thrash metal festival competition in kyiv where artifact scorred 3 place. </p>
            </div> */}





<div>
    <h2>{bandInfo.artifactLineup2009_2010.title}</h2>
    <p>{bandInfo.artifactLineup2009_2010.description}</p>
    <div className="flex flex-col py-6 w-full border rounded-md bg-gray-600 bg-opacity-30 p-4">
        {/* Image Section */}
        <div className="flex justify-around items-center gap-4">
            <img src={bandInfo.artifactLineup2009_2010.images.imageOne.src} alt={bandInfo.artifactLineup2009_2010.images.imageOne.alt} className="w-1/4 h-48 object-cover rounded-lg shadow-md border"/>
            <img src={bandInfo.artifactLineup2009_2010.images.imageTwo.src} alt={bandInfo.artifactLineup2009_2010.images.imageTwo.alt} className="w-1/3 h-48 object-fit rounded-lg shadow-md border"/>
            <img src={bandInfo.artifactLineup2009_2010.images.imageThree.src} alt={bandInfo.artifactLineup2009_2010.images.imageThree.alt} className="w-1/4 h-48 object-cover rounded-lg shadow-md border"/>
        </div>

        {/* Text Section */}
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
            {/* Artifact recorded their 2010 demo album with band members Vadim Boitsov, Volodymyr Ruzhak, Viktor Matushek, and Igor Grant (from left to right).
            The band performed live at a **thrash metal festival competition in Kyiv**, where they secured **3rd place**. */}
        </p>
    </div>
</div>












            {/* <div className="flex py-4">
                <p className="pr-4 whitespace-pre-line">{bandInfo.overviewTwo}</p><br/>
                <div>
                    <div className="flex">
                        <img src={ds_album} alt="CD of artifact's dead silence" className="w-full" />
                        <img src={DeadSilence} alt="Dead Silence" className="w-full"/>
                    </div>
                    <p>Official CD of Dead Silence. Dead Silence cover Art(for online postings)</p>
                </div>
            </div> */}


<h2>{bandInfo.deadSilenceAlbum.title}</h2>
<div className="flex py-4">
    {/* Text Section (Left) */}
    <div className="w-3/5 pr-4">
        <p className="whitespace-pre-line">{bandInfo.deadSilenceAlbum.description}</p>
    </div>

    {/* Image Section (Right) */}
    <div className="w-2/5 flex flex-col border rounded-md bg-gray-600 bg-opacity-30 p-4">
        <div className="flex flex-col gap-4 items-center">
            <img src={bandInfo.deadSilenceAlbum.images.imageOne.src} alt={bandInfo.deadSilenceAlbum.images.imageOne.alt} className="w-3/4 h-40 object-cover rounded-lg"/>
            <img src={bandInfo.deadSilenceAlbum.images.imageTwo.src} alt={bandInfo.deadSilenceAlbum.images.imageTwo.alt} className="w-3/4 h-40 object-cover rounded-lg"/>
        </div>
        <p className="text-sm mt-2 border-t pt-2">
            {bandInfo.deadSilenceAlbum.captions.officialCD}<br/>
            {bandInfo.deadSilenceAlbum.captions.coverArt}
        </p>
    </div>
</div>


            <div className="py-6">
                <img src={bandInfo.lastPerformance.image.src} alt={bandInfo.lastPerformance.image.alt} className="w-full" />
                <p className="text-sm mt-2 border-t pt-2 text-center">{bandInfo.lastPerformance.caption}</p>
            </div>
            
            
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

            <p className="py-4">{bandInfo.evolutionIntoArtifactMetal.text}</p>

            <h2>{bandInfo.noOneAlbum.title}</h2>
            <div className="py-6">
                <div className="w-2/5 flex flex-col float-right border rounded-md bg-gray-600 bg-opacity-30 p-4 ml-4">
                    <img src={bandInfo.noOneAlbum.images.imageOne.src} alt={bandInfo.noOneAlbum.images.imageOne.alt}  className="w-full object-cover rounded-lg"/>
                    <p className="text-sm mt-2 border-t pt-2 text-center">{bandInfo.noOneAlbum.captions.coverArt}</p>
                </div>
                <p className="whitespace-pre-line">{bandInfo.noOneAlbum.description}</p><br/>
            </div>
            <h2>{bandInfo.futureOfArtifact.title}</h2>
            <p>{bandInfo.futureOfArtifact.description}</p>
        </div>
    )
};