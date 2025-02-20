import { DeadSilence, NoOneIMG, SilentStorm } from "../assets"
import { artifact_2007_live, artifact_2010_band, artifact_2011_band, artifact_beginning, artifact_last_live, demo_cover_2010, demo_recording_2010, ds_album, express_paper, original_3 } from "../assets/img";
import { bandInfo } from "../utils/constants"

export const Band = () => {
    return (
        <div className="flex flex-col items-center w-6/12 m-auto py-10 pt-20">
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



            <div className="flex py-4">
                {/* Band Info Section */}
                <p className="pr-4 w-3/5">{bandInfo.earlyYearsAndLineup}</p>

                {/* Image Section */}
                <div className="flex flex-col w-2/5 border rounded-md bg-gray-600 bg-opacity-30 p-4">
                    <div className="flex justify-around items-center gap-4">
                        <img src={original_3} alt="Main artifact trio" className="w-1/2 h-40 object-cover rounded-lg shadow-md"/>
                        <img src={artifact_beginning} alt="Artifact Beginning" className="w-1/3 h-40 object-cover rounded-lg shadow-md"/>
                    </div>
                    <p className="text-sm mt-2 border-t pt-2">
                        Artifact founding members: <strong>Volodymyr Ruzhak, Viktor Matushek, Igor Grant</strong> (from left to right). <br/>
                        Rehearsal stuff in their rehearsal studio.
                    </p>
                </div>
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




<div className="flex py-4">
    {/* Image Section (Moved to the Left) */}
    <div className="flex flex-col w-2/5 border rounded-md bg-gray-600 bg-opacity-30 p-4">
        <div className="flex justify-around items-center gap-4">
            <img src={artifact_2007_live} alt="Artifact first Live event" className="w-1/2 h-40 object-cover rounded-lg shadow-md"/>
            <img src={express_paper} alt="Article about Artifact in the magazine" className="w-1/3 h-40 object-cover rounded-lg shadow-md"/>
        </div>
        <p className="text-sm mt-2 border-t pt-2">
            Artifact's first live performance at <strong>Trusha College</strong> in Lviv, Ukraine. <br/>
            Featured in a magazine article recognizing the band's early impact.
        </p>
    </div>

    {/* Text Section (Moved to the Right) */}
    <p className="pl-4 w-3/5">{bandInfo.livePerformancesAndRecognition}</p>
</div>








            {/* <div className="flex py-2">
                <p className="pr-4">{bandInfo.demosAndTransitionToEnglish}</p>< br />
                <img src={demo_cover_2010} alt="" className="w-1/3"/>
            </div> */}




<div className="flex py-4">
    <p className="pr-4 w-3/5">{bandInfo.demosAndTransitionToEnglish}</p>
    <div className="w-2/5 pr-4 border rounded-md bg-gray-600 bg-opacity-30 p-4">
        <img src={demo_cover_2010} alt="Artifact 2010 Demo Album" className="w-3/4 h-40 object-cover rounded-lg shadow-md mx-auto"/>
        <p className="text-sm mt-2 border-t pt-2">
            Artifact's 2010 demo album, showcasing the band's evolving sound and transition to English lyrics.
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






<div className="flex flex-col py-6 w-full border rounded-md bg-gray-600 bg-opacity-30 p-4">
    {/* Image Section */}
    <div className="flex justify-around items-center gap-4">
        <img src={artifact_2010_band} alt="Artifact 2010 Band" className="w-1/4 h-48 object-cover rounded-lg shadow-md border"/>
        <img src={demo_recording_2010} alt="Artifact 2010 Band Recording" className="w-1/3 h-48 object-fit rounded-lg shadow-md border"/>
        <img src={artifact_2011_band} alt="Artifact 2011 Band" className="w-1/4 h-48 object-cover rounded-lg shadow-md border"/>
    </div>

    {/* Text Section */}
    <p className="text-sm mt-2 border-t pt-2">
        Artifact recorded their 2010 demo album with band members Vadim Boitsov, Volodymyr Ruzhak, Viktor Matushek, and Igor Grant (from left to right).
        The band performed live at a **thrash metal festival competition in Kyiv**, where they secured **3rd place**.
    </p>
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



<div className="flex py-4">
    {/* Text Section (Left) */}
    <div className="w-3/5 pr-4">
        <p className="whitespace-pre-line">{bandInfo.overviewTwo}</p>
    </div>

    {/* Image Section (Right) */}
    <div className="w-2/5 flex flex-col border rounded-md bg-gray-600 bg-opacity-30 p-4">
        <div className="flex flex-col gap-4 items-center">
            <img src={ds_album} alt="Artifact - Dead Silence CD" className="w-3/4 h-40 object-cover rounded-lg"/>
            <img src={DeadSilence} alt="Dead Silence Cover Art" className="w-3/4 h-40 object-cover rounded-lg"/>
        </div>
        <p className="text-sm mt-2 border-t pt-2">
            Official **CD release** of *Dead Silence*.<br/> The **Dead Silence cover art** was used for online distribution and promotional materials.
        </p>
    </div>
</div>


            <div className="py-6">
                <img src={artifact_last_live} alt="Last Artifact live event" className="w-full" />
                <p className="text-sm mt-2 border-t pt-2 text-center">Last Artifact live performance at the Halloween Festival in Lviv, Ukraine.</p>
            </div>
            
            
            
            <div className="py-6">
                <div className="w-2/5 flex flex-col float-left border rounded-md bg-gray-600 bg-opacity-30 p-4 mr-4">
                    <img src={SilentStorm} alt="Silent Storm"  className="w-full object-cover rounded-lg"/>
                    <p className="text-sm mt-2 border-t pt-2 text-center">Official Cover art for Silente Storm Single</p>
                </div>
                <div>
                    <p className="whitespace-pre-line">{bandInfo.overviewTree}</p><br/>
                </div>
            </div>

            <p className="py-4">{bandInfo.evolutionIntoArtifactMetal}</p>

            <div className="py-6">
                <div className="w-2/5 flex flex-col float-right border rounded-md bg-gray-600 bg-opacity-30 p-4 ml-4">
                    <img src={NoOneIMG} alt="No One"  className="w-full object-cover rounded-lg"/>
                    <p className="text-sm mt-2 border-t pt-2 text-center">Official Cover art for No One</p>
                </div>
                <p className="whitespace-pre-line">{bandInfo.overviewFour}</p><br/>
            </div>
            <p>{bandInfo.overviewFive}</p>
        </div>
    )
};