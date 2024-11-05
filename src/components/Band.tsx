import { Artifact, DeadSilence, NoOneIMG, SilentStorm } from "../assets"
import { bandInfo } from "../utils/constants"

const Band = () => {
    return (
        <div className="flex flex-col items-center w-6/12 m-auto">
            {/* <h1 className="text-5xl font-bold">ARTIFACT</h1><br/> */}
            <img src={Artifact} alt="Artifact" className="w-5/12 h-[170px] mb-4" />
            <p>{bandInfo.overviewOne}</p>< br/>
            <div className="flex py-4">
                <p className="pr-4">{bandInfo.overviewTwo}</p><br/>
                <img src={DeadSilence} alt="Dead Silence" className="w-4/12"/>
            </div>
            <div className="flex py-4">
                <img src={SilentStorm} alt="Silent Storm"  className="w-4/12"/>
                <p className="pl-8">{bandInfo.overviewTree}</p><br/>
            </div>
            <div className="flex py-4">
                <p className="pr-4">{bandInfo.overviewFour}</p><br/>
                <img src={NoOneIMG} alt="No One"  className="w-4/12"/>
            </div>
            <p>{bandInfo.overviewFive}</p>
        </div>
    )
}

export default Band