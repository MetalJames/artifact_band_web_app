import { bandInfo } from "../utils/constants"

const Band = () => {
    return (
        <div className="flex flex-col w-6/12 m-auto">
            <p>{bandInfo.overviewOne}</p>< br/>
            <p>{bandInfo.overviewTwo}</p><br/>
            <p>{bandInfo.overviewTree}</p><br/>
            <p>{bandInfo.overviewFour}</p><br/>
            <p>{bandInfo.overviewFive}</p>
        </div>
    )
}

export default Band