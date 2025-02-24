import { bandInfo } from "../../utils";

export const LastPerformance = () => {
    return (
        <div className="py-6">
            <img src={bandInfo.lastPerformance.image.src} alt={bandInfo.lastPerformance.image.alt} className="w-full" />
            <p className="text-sm mt-2 border-t pt-2 text-center">{bandInfo.lastPerformance.caption}</p>
        </div>
    )
};