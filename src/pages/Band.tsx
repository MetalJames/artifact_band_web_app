import { TheBeginning, LivePerformancesRecognition, FirstDemo, ArtifactLineups, DeadSilence, LastPerformance, SilentStorm, NoOne, FutureOfArtifact, EvolutionIntoArtifactMetal } from "../components/history_comps";

export const Band = () => {
    return (
        <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-4/5 xl:w-4/5 2xl:w-1/2 flex flex-col items-center m-auto py-10 pt-20">
            <div className="relative py-6">
                <h1 className="text-6xl md:text-7xl font-bold tracking-widest text-black relative z-10">
                    ARTIFACT
                </h1>
                <h1 className="absolute left-1 py-6 inset-0 text-6xl md:text-7xl font-bold tracking-widest text-white blur-md z-0">
                    ARTIFACT
                </h1>
            </div>
            <TheBeginning />
            <LivePerformancesRecognition />
            <FirstDemo />
            <ArtifactLineups />
            <DeadSilence />
            <LastPerformance />
            <SilentStorm />
            <EvolutionIntoArtifactMetal />
            <NoOne />
            <FutureOfArtifact />
        </div>
    );
};