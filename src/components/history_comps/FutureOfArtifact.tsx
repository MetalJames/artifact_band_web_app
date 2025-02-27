import { Artifact } from "../../assets";
import { bandInfo } from "../../utils";
import { ImageWithModal } from "../ImageWithModal";

export const FutureOfArtifact = () => {
    return (
        <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">{bandInfo.futureOfArtifact.title}</h2>
            <p className="py-6">{bandInfo.futureOfArtifact.description}</p>
            <ImageWithModal 
                smallSrc={Artifact} 
                largeSrc={Artifact} 
                alt="Artifact Band Logo" 
                className="sm:w-1/3 w-full mx-auto"
            />
            {/* <img src={Artifact} alt="Artifact Band" className="sm:w-1/3 w-full mx-auto"/> */}
        </div>
    )
};