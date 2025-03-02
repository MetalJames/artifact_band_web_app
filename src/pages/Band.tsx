import { ArtifactHeading } from "../components";
import { TheBeginning, LivePerformancesRecognition, FirstDemo, ArtifactLineups, DeadSilence, LastPerformance, SilentStorm, NoOne, FutureOfArtifact, EvolutionIntoArtifactMetal } from "../components/history_comps";
import { DeadSilenceRemastered } from "../components/history_comps/DeadSilenceRemastered";

export const Band = () => {
    return (
        <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-4/5 xl:w-8/12 2xl:w-1/2 flex flex-col items-center m-auto py-10 pt-20">
            <ArtifactHeading />
            <TheBeginning />
            <LivePerformancesRecognition />
            <FirstDemo />
            <ArtifactLineups />
            <DeadSilence />
            <LastPerformance />
            <SilentStorm />
            <EvolutionIntoArtifactMetal />
            <NoOne />
            <DeadSilenceRemastered />
            <FutureOfArtifact />
        </div>
    );
};